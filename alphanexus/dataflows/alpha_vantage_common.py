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

def get_api_key() -> str:
    """Retrieve the API key for Alpha Vantage from environment variables."""
    api_key = os.getenv("ALPHA_VANTAGE_API_KEY")
    if not api_key:
        raise DataflowAuthError(
            "ALPHA_VANTAGE_API_KEY environment variable is not set.",
            vendor="alpha_vantage",
        )
    return api_key

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
        "apikey": get_api_key(),
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
    
    try:
        response = requests.get(
            API_BASE_URL,
            params=api_params,
            timeout=REQUEST_TIMEOUT_SECONDS,
        )
    except requests.Timeout as exc:
        raise DataflowTimeoutError(
            f"Alpha Vantage timeout for {function_name}",
            vendor="alpha_vantage",
            method=function_name,
        ) from exc
    except requests.RequestException as exc:
        raise DataflowUpstreamError(
            f"Alpha Vantage request failed for {function_name}: {exc}",
            vendor="alpha_vantage",
            method=function_name,
            retryable=True,
        ) from exc

    if response.status_code == 429:
        raise AlphaVantageRateLimitError(
            f"Alpha Vantage rate limit exceeded for {function_name} (HTTP 429)"
        )
    if response.status_code in (401, 403):
        raise DataflowAuthError(
            f"Alpha Vantage auth error for {function_name} (HTTP {response.status_code})",
            vendor="alpha_vantage",
            method=function_name,
        )
    if response.status_code >= 500:
        raise DataflowUpstreamError(
            f"Alpha Vantage upstream failure for {function_name} (HTTP {response.status_code})",
            vendor="alpha_vantage",
            method=function_name,
            retryable=True,
        )
    if response.status_code >= 400:
        raise DataflowBadRequestError(
            f"Alpha Vantage request rejected for {function_name} (HTTP {response.status_code})",
            vendor="alpha_vantage",
            method=function_name,
        )

    response_text = response.text
    
    # Check if response is JSON (error responses are typically JSON)
    try:
        response_json = json.loads(response_text)
        parsed_error = _parse_alpha_vantage_json_error(function_name, response_json)
        if parsed_error:
            raise parsed_error
    except json.JSONDecodeError:
        # Response is not JSON (likely CSV data), which is normal
        pass

    return response_text



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
