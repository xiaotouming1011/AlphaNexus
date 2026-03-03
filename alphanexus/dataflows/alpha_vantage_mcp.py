from __future__ import annotations

import csv
import io
import json
import os
from functools import partial
from datetime import datetime, timedelta
from typing import Any

import anyio
from mcp import ClientSession
from mcp.client.stdio import StdioServerParameters, stdio_client

from .errors import (
    DataflowAuthError,
    DataflowBadRequestError,
    DataflowRateLimitError,
    DataflowTimeoutError,
    DataflowUpstreamError,
    normalize_dataflow_error,
)

DEFAULT_MCP_COMMAND = os.getenv("ALPHA_VANTAGE_MCP_COMMAND", "uvx")
DEFAULT_MCP_ENTRYPOINT = os.getenv("ALPHA_VANTAGE_MCP_ENTRYPOINT", "av-mcp")
DEFAULT_CALL_TIMEOUT_SECONDS = int(os.getenv("ALPHA_VANTAGE_MCP_TIMEOUT", "25"))


def _dedupe_keep_order(items: list[str]) -> list[str]:
    seen: set[str] = set()
    ordered: list[str] = []
    for item in items:
        if item and item not in seen:
            ordered.append(item)
            seen.add(item)
    return ordered


def _get_api_keys(api_key: str | None = None) -> list[str]:
    single = (api_key or os.getenv("ALPHA_VANTAGE_API_KEY") or "").strip()
    multi_raw = os.getenv("ALPHA_VANTAGE_API_KEYS") or ""
    normalized = multi_raw.replace(";", ",").replace("\n", ",")
    multi = [part.strip() for part in normalized.split(",") if part.strip()]
    keys = _dedupe_keep_order(([single] if single else []) + multi)
    if not keys:
        raise DataflowAuthError(
            "Missing Alpha Vantage API key for MCP adapter",
            vendor="alpha_vantage_mcp",
            method="TIME_SERIES_DAILY",
        )
    return keys


def _parse_tool_result_to_json(raw: Any) -> dict[str, Any]:
    if raw is None:
        raise DataflowUpstreamError(
            "Empty response from Alpha Vantage MCP server",
            vendor="alpha_vantage_mcp",
            method="TIME_SERIES_DAILY",
            retryable=True,
        )

    if isinstance(raw, dict):
        return raw

    if isinstance(raw, str):
        text = raw.strip()
        if text.lower().startswith("error"):
            raise DataflowUpstreamError(
                f"Alpha Vantage MCP error: {text}",
                vendor="alpha_vantage_mcp",
                method="TIME_SERIES_DAILY",
                retryable=True,
            )
        try:
            return json.loads(text)
        except json.JSONDecodeError as exc:
            raise DataflowUpstreamError(
                "Alpha Vantage MCP returned non-JSON content",
                vendor="alpha_vantage_mcp",
                method="TIME_SERIES_DAILY",
                retryable=True,
            ) from exc

    raise DataflowUpstreamError(
        f"Unsupported MCP response type: {type(raw)}",
        vendor="alpha_vantage_mcp",
        method="TIME_SERIES_DAILY",
        retryable=True,
    )


def _extract_text_content(result: Any) -> str:
    content = getattr(result, "content", None)
    if not content:
        raise DataflowUpstreamError(
            "No content from Alpha Vantage MCP call",
            vendor="alpha_vantage_mcp",
            method="TIME_SERIES_DAILY",
            retryable=True,
        )

    for item in content:
        text = getattr(item, "text", None)
        if text:
            return text

    raise DataflowUpstreamError(
        "Alpha Vantage MCP returned content without text payload",
        vendor="alpha_vantage_mcp",
        method="TIME_SERIES_DAILY",
        retryable=True,
    )


def _as_float(value: Any) -> float | None:
    try:
        return float(value)
    except (TypeError, ValueError):
        return None


def _as_int(value: Any) -> int | None:
    try:
        return int(float(value))
    except (TypeError, ValueError):
        return None


def _normalize_daily_payload(symbol: str, payload: dict[str, Any]) -> dict[str, Any]:
    series = payload.get("Time Series (Daily)")
    if not isinstance(series, dict) or not series:
        if "Error Message" in payload:
            raise DataflowBadRequestError(
                f"Alpha Vantage error for {symbol}: {payload['Error Message']}",
                vendor="alpha_vantage_mcp",
                method="TIME_SERIES_DAILY",
            )
        if "Note" in payload or "Information" in payload:
            message = payload.get("Note") or payload.get("Information")
            lowered = str(message).lower()
            if "rate limit" in lowered or "thank you for using alpha vantage" in lowered:
                raise DataflowRateLimitError(
                    f"Alpha Vantage rate limit for {symbol}: {message}",
                    vendor="alpha_vantage_mcp",
                    method="TIME_SERIES_DAILY",
                )
            raise DataflowUpstreamError(
                f"Alpha Vantage note for {symbol}: {message}",
                vendor="alpha_vantage_mcp",
                method="TIME_SERIES_DAILY",
                retryable=True,
            )
        raise DataflowUpstreamError(
            f"Missing 'Time Series (Daily)' for {symbol}",
            vendor="alpha_vantage_mcp",
            method="TIME_SERIES_DAILY",
            retryable=True,
        )

    points: list[dict[str, Any]] = []
    for day, values in series.items():
        if not isinstance(values, dict):
            continue
        points.append(
            {
                "date": day,
                "open": _as_float(values.get("1. open")),
                "high": _as_float(values.get("2. high")),
                "low": _as_float(values.get("3. low")),
                "close": _as_float(values.get("4. close")),
                "volume": _as_int(values.get("5. volume")),
            }
        )

    points.sort(key=lambda item: item["date"])
    if not points:
        raise DataflowUpstreamError(
            f"No valid daily points for {symbol}",
            vendor="alpha_vantage_mcp",
            method="TIME_SERIES_DAILY",
            retryable=True,
        )

    meta = payload.get("Meta Data", {})
    return {
        "vendor": "alpha_vantage_mcp",
        "symbol": symbol.upper(),
        "last_refreshed": meta.get("3. Last Refreshed"),
        "timezone": meta.get("5. Time Zone"),
        "series": points,
        "raw_meta": meta,
    }


async def fetch_time_series_daily_mcp_async(
    symbol: str,
    *,
    outputsize: str = "compact",
    api_key: str | None = None,
    command: str = DEFAULT_MCP_COMMAND,
    entrypoint: str = DEFAULT_MCP_ENTRYPOINT,
) -> dict[str, Any]:
    symbol = symbol.strip().upper()
    if not symbol:
        raise DataflowBadRequestError(
            "symbol is required",
            vendor="alpha_vantage_mcp",
            method="TIME_SERIES_DAILY",
        )

    last_exc: Exception | None = None
    for key in _get_api_keys(api_key):
        server = StdioServerParameters(command=command, args=[entrypoint, key])
        try:
            async with stdio_client(server) as (read_stream, write_stream):
                async with ClientSession(read_stream, write_stream) as session:
                    await session.initialize()
                    result = await session.call_tool(
                        "TOOL_CALL",
                        {
                            "tool_name": "TIME_SERIES_DAILY",
                            "arguments": {
                                "symbol": symbol,
                                "outputsize": outputsize,
                                "datatype": "json",
                            },
                        },
                        read_timeout_seconds=timedelta(seconds=DEFAULT_CALL_TIMEOUT_SECONDS),
                    )
            text = _extract_text_content(result)
            payload = _parse_tool_result_to_json(text)
            return _normalize_daily_payload(symbol, payload)
        except TimeoutError:
            last_exc = DataflowTimeoutError(
                f"Alpha Vantage MCP timed out for {symbol}",
                vendor="alpha_vantage_mcp",
                method="TIME_SERIES_DAILY",
            )
            continue
        except Exception as exc:
            normalized_exc = normalize_dataflow_error(
                exc, vendor="alpha_vantage_mcp", method="TIME_SERIES_DAILY"
            )
            if isinstance(normalized_exc, (DataflowRateLimitError, DataflowAuthError)):
                last_exc = normalized_exc
                continue
            raise normalized_exc from exc

    if last_exc:
        raise last_exc
    raise DataflowUpstreamError(
        f"Alpha Vantage MCP failed for {symbol} with no usable key",
        vendor="alpha_vantage_mcp",
        method="TIME_SERIES_DAILY",
        retryable=True,
    )


def fetch_time_series_daily_mcp(
    symbol: str,
    *,
    outputsize: str = "compact",
    api_key: str | None = None,
    command: str = DEFAULT_MCP_COMMAND,
    entrypoint: str = DEFAULT_MCP_ENTRYPOINT,
) -> dict[str, Any]:
    return anyio.run(
        partial(
            fetch_time_series_daily_mcp_async,
            symbol,
            outputsize=outputsize,
            api_key=api_key,
            command=command,
            entrypoint=entrypoint,
        )
    )


def get_stock_data_mcp(
    symbol: str,
    start_date: str,
    end_date: str,
    *,
    api_key: str | None = None,
) -> str:
    """Compatibility helper: return header + CSV formatted OHLCV in date range."""
    try:
        datetime.strptime(start_date, "%Y-%m-%d")
        datetime.strptime(end_date, "%Y-%m-%d")
    except ValueError as exc:
        raise DataflowBadRequestError(
            "start_date/end_date format must be YYYY-MM-DD",
            vendor="alpha_vantage_mcp",
            method="TIME_SERIES_DAILY",
        ) from exc

    normalized = fetch_time_series_daily_mcp(symbol, outputsize="full", api_key=api_key)
    rows = [
        row
        for row in normalized["series"]
        if start_date <= row["date"] <= end_date
    ]

    if not rows:
        raise DataflowUpstreamError(
            f"No data for {symbol} between {start_date} and {end_date}",
            vendor="alpha_vantage_mcp",
            method="TIME_SERIES_DAILY",
            retryable=False,
        )

    buffer = io.StringIO()
    writer = csv.writer(buffer)
    writer.writerow(["Date", "Open", "High", "Low", "Close", "Volume"])
    for row in rows:
        writer.writerow(
            [
                row["date"],
                row["open"],
                row["high"],
                row["low"],
                row["close"],
                row["volume"],
            ]
        )

    header = f"# Stock data for {symbol.upper()} from {start_date} to {end_date}\n"
    header += f"# Total records: {len(rows)}\n"
    header += f"# Data retrieved on: {datetime.now().strftime('%Y-%m-%d %H:%M:%S')}\n"
    header += "# Vendor: alpha_vantage_mcp\n\n"
    return header + buffer.getvalue()
