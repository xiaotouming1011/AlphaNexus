import os
import requests
import pandas as pd
import json
from datetime import datetime
from io import StringIO
from .errors import (
    DataflowAuthError,
    DataflowBadRequestError,
    DataflowRateLimitError,
    DataflowTimeoutError,
    DataflowUpstreamError,
)

API_BASE_URL = "https://www.alphavantage.co/query"
REQUEST_TIMEOUT_SECONDS = 15

def _dedupe_keep_order(items: list[str]) -> list[str]:
    seen: set[str] = set()
    ordered: list[str] = []
    for item in items:
        if item and item not in seen:
            ordered.append(item)
            seen.add(item)
    return ordered


def get_api_keys() -> list[str]:
    """Retrieve one or many Alpha Vantage keys from env.

    Supported env vars:
    - ALPHA_VANTAGE_API_KEY: single key
    - ALPHA_VANTAGE_API_KEYS: multiple keys, split by comma/semicolon/newline
    """
    single = (os.getenv("ALPHA_VANTAGE_API_KEY") or "").strip()
    multi_raw = os.getenv("ALPHA_VANTAGE_API_KEYS") or ""
    normalized = multi_raw.replace(";", ",").replace("\n", ",")
    multi = [part.strip() for part in normalized.split(",") if part.strip()]
    keys = _dedupe_keep_order(([single] if single else []) + multi)
    if not keys:
        raise DataflowAuthError(
            "ALPHA_VANTAGE_API_KEY/ALPHA_VANTAGE_API_KEYS is not set.",
            vendor="alpha_vantage",
        )
    return keys

def format_datetime_for_api(date_input) -> str:
    """Convert various date formats to YYYYMMDDTHHMM format required by Alpha Vantage API."""
    if isinstance(date_input, str):
        # If already in correct format, return as-is
        if len(date_input) == 13 and 'T' in date_input:
            return date_input
        # Try to parse common date formats
        try:
            dt = datetime.strptime(date_input, "%Y-%m-%d")
            return dt.strftime("%Y%m%dT0000")
        except ValueError:
            try:
                dt = datetime.strptime(date_input, "%Y-%m-%d %H:%M")
                return dt.strftime("%Y%m%dT%H%M")
            except ValueError:
                raise ValueError(f"Unsupported date format: {date_input}")
    elif isinstance(date_input, datetime):
        return date_input.strftime("%Y%m%dT%H%M")
    else:
        raise ValueError(f"Date must be string or datetime object, got {type(date_input)}")

class AlphaVantageRateLimitError(DataflowRateLimitError):
    """Exception raised when Alpha Vantage API rate limit is exceeded."""
    def __init__(self, message: str):
        super().__init__(message, vendor="alpha_vantage")


def _parse_alpha_vantage_json_error(function_name: str, payload: dict) -> Exception | None:
    """Extract API-level errors from Alpha Vantage JSON payloads."""
    note = payload.get("Note")
    information = payload.get("Information")
    error_message = payload.get("Error Message")

    for candidate in (note, information):
        if not candidate:
            continue
        lowered = candidate.lower()
        if "rate limit" in lowered or "thank you for using alpha vantage" in lowered:
            return AlphaVantageRateLimitError(
                f"Alpha Vantage rate limit exceeded for {function_name}: {candidate}"
            )
        if "not entitled" in lowered or "api key" in lowered:
            return DataflowAuthError(
                f"Alpha Vantage auth error for {function_name}: {candidate}",
                vendor="alpha_vantage",
                method=function_name,
            )
        return DataflowUpstreamError(
            f"Alpha Vantage upstream error for {function_name}: {candidate}",
            vendor="alpha_vantage",
            method=function_name,
            retryable=True,
        )

    if error_message:
        lowered = error_message.lower()
        if "invalid" in lowered or "parameter" in lowered:
            return DataflowBadRequestError(
                f"Alpha Vantage bad request for {function_name}: {error_message}",
                vendor="alpha_vantage",
                method=function_name,
            )
        return DataflowUpstreamError(
            f"Alpha Vantage error for {function_name}: {error_message}",
            vendor="alpha_vantage",
            method=function_name,
            retryable=False,
        )

    return None

def _make_api_request(function_name: str, params: dict) -> dict | str:
    """Helper function to make API requests and handle responses.
    
    Raises:
        AlphaVantageRateLimitError: When API rate limit is exceeded
    """
    # Create a copy of params to avoid modifying the original
    api_params = params.copy()
    api_params.update({
        "function": function_name,
        "source": "trading_agents",
    })
    
    # Handle entitlement parameter if present in params or global variable
    current_entitlement = globals().get('_current_entitlement')
    entitlement = api_params.get("entitlement") or current_entitlement
    
    if entitlement:
        api_params["entitlement"] = entitlement
    elif "entitlement" in api_params:
        # Remove entitlement if it's None or empty
        api_params.pop("entitlement", None)
    
    last_exc: Exception | None = None
    for api_key in get_api_keys():
        attempt_params = api_params.copy()
        attempt_params["apikey"] = api_key
        try:
            response = requests.get(
                API_BASE_URL,
                params=attempt_params,
                timeout=REQUEST_TIMEOUT_SECONDS,
            )
        except requests.Timeout as exc:
            last_exc = DataflowTimeoutError(
                f"Alpha Vantage timeout for {function_name}",
                vendor="alpha_vantage",
                method=function_name,
            )
            continue
        except requests.RequestException as exc:
            last_exc = DataflowUpstreamError(
                f"Alpha Vantage request failed for {function_name}: {exc}",
                vendor="alpha_vantage",
                method=function_name,
                retryable=True,
            )
            continue

        if response.status_code == 429:
            last_exc = AlphaVantageRateLimitError(
                f"Alpha Vantage rate limit exceeded for {function_name} (HTTP 429)"
            )
            continue
        if response.status_code in (401, 403):
            last_exc = DataflowAuthError(
                f"Alpha Vantage auth error for {function_name} (HTTP {response.status_code})",
                vendor="alpha_vantage",
                method=function_name,
            )
            continue
        if response.status_code >= 500:
            last_exc = DataflowUpstreamError(
                f"Alpha Vantage upstream failure for {function_name} (HTTP {response.status_code})",
                vendor="alpha_vantage",
                method=function_name,
                retryable=True,
            )
            continue
        if response.status_code >= 400:
            raise DataflowBadRequestError(
                f"Alpha Vantage request rejected for {function_name} (HTTP {response.status_code})",
                vendor="alpha_vantage",
                method=function_name,
            )

        response_text = response.text
        try:
            response_json = json.loads(response_text)
            parsed_error = _parse_alpha_vantage_json_error(function_name, response_json)
            if parsed_error:
                if isinstance(parsed_error, (AlphaVantageRateLimitError, DataflowAuthError)):
                    last_exc = parsed_error
                    continue
                raise parsed_error
        except json.JSONDecodeError:
            pass
        return response_text

    if last_exc:
        raise last_exc
    raise DataflowUpstreamError(
        f"Alpha Vantage failed for {function_name} with no usable key",
        vendor="alpha_vantage",
        method=function_name,
        retryable=True,
    )



def _filter_csv_by_date_range(csv_data: str, start_date: str, end_date: str) -> str:
    """
    Filter CSV data to include only rows within the specified date range.

    Args:
        csv_data: CSV string from Alpha Vantage API
        start_date: Start date in yyyy-mm-dd format
        end_date: End date in yyyy-mm-dd format

    Returns:
        Filtered CSV string
    """
    if not csv_data or csv_data.strip() == "":
        return csv_data

    try:
        # Parse CSV data
        df = pd.read_csv(StringIO(csv_data))

        # Assume the first column is the date column (timestamp)
        date_col = df.columns[0]
        df[date_col] = pd.to_datetime(df[date_col])

        # Filter by date range
        start_dt = pd.to_datetime(start_date)
        end_dt = pd.to_datetime(end_date)

        filtered_df = df[(df[date_col] >= start_dt) & (df[date_col] <= end_dt)]

        # Convert back to CSV string
        return filtered_df.to_csv(index=False)

    except Exception as exc:
        raise DataflowUpstreamError(
            f"Failed to filter Alpha Vantage CSV by date range: {exc}",
            vendor="alpha_vantage",
            method="filter_csv_by_date_range",
            retryable=True,
        ) from exc
