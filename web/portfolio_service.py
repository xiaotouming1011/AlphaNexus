from __future__ import annotations

import json
import os
import threading
import time
from datetime import datetime
from pathlib import Path
from typing import Any

from alphanexus.dataflows.alpha_vantage_mcp import fetch_time_series_daily_mcp
from alphanexus.dataflows.errors import DataflowRateLimitError


DEFAULT_SYMBOLS = ["AAPL", "MSFT", "NVDA"]
DEFAULT_ALLOCATION = {"AAPL": 0.45, "MSFT": 0.35, "NVDA": 0.20}
DEFAULT_TOTAL_VALUE = 200000.0
DEFAULT_WINDOW_POINTS = 100

PROJECT_ROOT = Path(__file__).resolve().parent.parent
PORTFOLIO_CACHE_DIR = PROJECT_ROOT / "results" / "portfolio_cache"
MIN_AV_REQUEST_INTERVAL_SECONDS = float(
    os.getenv("PORTFOLIO_AV_MIN_INTERVAL_SECONDS", "1.5")
)

_AV_CALL_LOCK = threading.Lock()
_LAST_AV_CALL_MONOTONIC = 0.0


def _cache_path(symbol: str) -> Path:
    safe = symbol.upper().replace("/", "_")
    return PORTFOLIO_CACHE_DIR / f"{safe}.json"


def _write_cache(symbol: str, payload: dict[str, Any]) -> None:
    PORTFOLIO_CACHE_DIR.mkdir(parents=True, exist_ok=True)
    data = {
        "saved_at": datetime.utcnow().isoformat(timespec="seconds") + "Z",
        "payload": payload,
    }
    _cache_path(symbol).write_text(json.dumps(data, ensure_ascii=False), encoding="utf-8")


def _read_cache(symbol: str) -> dict[str, Any] | None:
    path = _cache_path(symbol)
    if not path.exists():
        return None
    try:
        data = json.loads(path.read_text(encoding="utf-8"))
    except json.JSONDecodeError:
        return None

    payload = data.get("payload")
    if not isinstance(payload, dict):
        return None
    return payload


def _rate_limited_fetch(
    symbol: str,
    *,
    outputsize: str,
    api_key: str | None = None,
) -> dict[str, Any]:
    global _LAST_AV_CALL_MONOTONIC

    # Free tier is strict on burst; gate calls globally to avoid parallel hits.
    with _AV_CALL_LOCK:
        if MIN_AV_REQUEST_INTERVAL_SECONDS > 0:
            now = time.monotonic()
            wait_seconds = MIN_AV_REQUEST_INTERVAL_SECONDS - (
                now - _LAST_AV_CALL_MONOTONIC
            )
            if wait_seconds > 0:
                time.sleep(wait_seconds)
        _LAST_AV_CALL_MONOTONIC = time.monotonic()

    return fetch_time_series_daily_mcp(symbol, outputsize=outputsize, api_key=api_key)


def _load_symbol_series(symbol: str, api_key: str | None = None) -> tuple[dict[str, Any], bool, str | None]:
    try:
        # Use compact only to stay within free-tier constraints (latest ~100 daily points).
        payload = _rate_limited_fetch(symbol, outputsize="compact", api_key=api_key)
        _write_cache(symbol, payload)
        return payload, False, None
    except DataflowRateLimitError as exc:
        cached = _read_cache(symbol)
        if cached is not None:
            return cached, True, str(exc)
        raise
    except Exception as exc:
        cached = _read_cache(symbol)
        if cached is not None:
            return cached, True, str(exc)
        raise


def _filter_recent(series: list[dict[str, Any]], max_points: int = DEFAULT_WINDOW_POINTS) -> list[dict[str, Any]]:
    valid = [
        row
        for row in series
        if isinstance(row, dict)
        and row.get("date")
        and row.get("close") is not None
    ]
    if max_points <= 0:
        return valid
    return valid[-max_points:]


def _normalize_inputs(
    symbols: list[str] | None,
    allocation: dict[str, float] | None,
    total_value: float,
) -> tuple[list[str], dict[str, float], float]:
    selected = [s.upper() for s in (symbols or DEFAULT_SYMBOLS)]
    if len(selected) != 3:
        raise ValueError("Portfolio tracker requires exactly 3 symbols.")

    for symbol in selected:
        if not symbol.strip():
            raise ValueError("Invalid symbol in portfolio symbols.")

    input_alloc = allocation or {k: DEFAULT_ALLOCATION.get(k, 0.0) for k in selected}
    weights = {}
    for symbol in selected:
        value = float(input_alloc.get(symbol, 0.0))
        if value <= 0:
            raise ValueError(f"Allocation for {symbol} must be > 0.")
        weights[symbol] = value

    total_weight = sum(weights.values())
    if total_weight <= 0:
        raise ValueError("Allocation total must be > 0.")
    weights = {k: v / total_weight for k, v in weights.items()}

    if total_value <= 0:
        raise ValueError("total_value must be > 0")

    return selected, weights, float(total_value)


def build_portfolio_timeseries(
    *,
    symbols: list[str] | None = None,
    allocation: dict[str, float] | None = None,
    total_value: float = DEFAULT_TOTAL_VALUE,
    api_key: str | None = None,
) -> dict[str, Any]:
    selected, weights, total_value = _normalize_inputs(symbols, allocation, total_value)

    symbol_data: dict[str, dict[str, Any]] = {}
    cached_flags: dict[str, bool] = {}
    warnings: list[str] = []

    for symbol in selected:
        payload, is_cached, warning = _load_symbol_series(symbol, api_key=api_key)
        series = _filter_recent(payload.get("series", []), DEFAULT_WINDOW_POINTS)
        if not series:
            raise RuntimeError(f"No recent price data for {symbol} in latest {DEFAULT_WINDOW_POINTS} points")
        symbol_data[symbol] = {
            "payload": payload,
            "series": series,
            "close_by_date": {row["date"]: row["close"] for row in series},
        }
        cached_flags[symbol] = is_cached
        if warning:
            warnings.append(warning)

    common_dates = sorted(
        set.intersection(*(set(v["close_by_date"].keys()) for v in symbol_data.values()))
    )
    if not common_dates:
        raise RuntimeError("No overlapping trading dates across selected symbols")

    latest_date = common_dates[-1]
    shares: dict[str, float] = {}
    for symbol in selected:
        latest_close = symbol_data[symbol]["close_by_date"][latest_date]
        if not latest_close or latest_close <= 0:
            raise RuntimeError(f"Invalid latest close for {symbol}: {latest_close}")
        shares[symbol] = (total_value * weights[symbol]) / latest_close

    timeline: list[dict[str, Any]] = []
    for day in common_dates:
        stock_values: dict[str, float] = {}
        total = 0.0
        for symbol in selected:
            close = symbol_data[symbol]["close_by_date"][day]
            value = shares[symbol] * close
            stock_values[symbol] = round(value, 2)
            total += value

        if total <= 0:
            continue

        stock_weights = {
            symbol: round((stock_values[symbol] / total), 6) for symbol in selected
        }
        timeline.append(
            {
                "date": day,
                "total_value": round(total, 2),
                "stock_values": stock_values,
                "stock_weights": stock_weights,
            }
        )

    if not timeline:
        raise RuntimeError("Portfolio timeline is empty after processing")

    symbol_meta = []
    for symbol in selected:
        latest_close = symbol_data[symbol]["close_by_date"][latest_date]
        symbol_meta.append(
            {
                "symbol": symbol,
                "legend_label": f"{symbol} (cached)" if cached_flags[symbol] else symbol,
                "is_cached": cached_flags[symbol],
                "target_weight": round(weights[symbol], 6),
                "target_amount": round(total_value * weights[symbol], 2),
                "shares": round(shares[symbol], 6),
                "latest_close": latest_close,
                "vendor": "alpha_vantage_mcp",
                "last_refreshed": symbol_data[symbol]["payload"].get("last_refreshed"),
            }
        )

    return {
        "as_of": latest_date,
        "lookback_days": DEFAULT_WINDOW_POINTS,
        "data_start_date": timeline[0]["date"],
        "data_end_date": timeline[-1]["date"],
        "data_points": len(timeline),
        "total_value": round(total_value, 2),
        "symbols": symbol_meta,
        "timeline": timeline,
        "cached_any": any(cached_flags.values()),
        "warnings": warnings,
    }
