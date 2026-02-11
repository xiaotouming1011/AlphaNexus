from __future__ import annotations

import ssl


class DataflowError(Exception):
    """Base class for dataflow errors used across all vendors."""

    error_code = "DATAFLOW_ERROR"
    retryable = False

    def __init__(
        self,
        message: str,
        *,
        vendor: str | None = None,
        method: str | None = None,
        retryable: bool | None = None,
    ) -> None:
        super().__init__(message)
        self.message = message
        self.vendor = vendor
        self.method = method
        if retryable is not None:
            self.retryable = retryable

    def with_context(self, *, vendor: str | None = None, method: str | None = None) -> "DataflowError":
        if vendor and not self.vendor:
            self.vendor = vendor
        if method and not self.method:
            self.method = method
        return self

    def __str__(self) -> str:
        return self.message


class DataflowBadRequestError(DataflowError):
    error_code = "BAD_REQUEST"
    retryable = False


class DataflowAuthError(DataflowError):
    error_code = "AUTH_ERROR"
    retryable = False


class DataflowNoDataError(DataflowError):
    error_code = "NO_DATA"
    retryable = False


class DataflowRateLimitError(DataflowError):
    error_code = "RATE_LIMIT"
    retryable = True


class DataflowTimeoutError(DataflowError):
    error_code = "TIMEOUT"
    retryable = True


class DataflowUpstreamError(DataflowError):
    error_code = "UPSTREAM_ERROR"
    retryable = True


def normalize_dataflow_error(
    exc: Exception,
    *,
    vendor: str | None = None,
    method: str | None = None,
) -> DataflowError:
    """Map vendor/library exceptions to a unified dataflow error type."""
    if isinstance(exc, DataflowError):
        return exc.with_context(vendor=vendor, method=method)

    message = str(exc) or exc.__class__.__name__
    lowered = message.lower()

    if isinstance(exc, TimeoutError) or "timed out" in lowered or "timeout" in lowered:
        return DataflowTimeoutError(message, vendor=vendor, method=method)

    if isinstance(exc, ssl.SSLError) or "ssl" in lowered:
        return DataflowUpstreamError(message, vendor=vendor, method=method, retryable=True)

    if "rate limit" in lowered or "too many requests" in lowered or "429" in lowered:
        return DataflowRateLimitError(message, vendor=vendor, method=method)

    if "api key" in lowered or "unauthorized" in lowered or "not entitled" in lowered:
        return DataflowAuthError(message, vendor=vendor, method=method)

    if "invalid" in lowered or "unsupported" in lowered or "bad request" in lowered:
        return DataflowBadRequestError(message, vendor=vendor, method=method)

    return DataflowUpstreamError(message, vendor=vendor, method=method)


def should_fallback_on_error(exc: Exception) -> bool:
    """Whether a failed vendor call should fall back to the next vendor."""
    if not isinstance(exc, DataflowError):
        return False
    return exc.retryable
