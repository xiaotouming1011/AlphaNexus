import copy
import json
import os
import re
from datetime import date
from pathlib import Path

from dotenv import load_dotenv
from fastapi import FastAPI, HTTPException
from fastapi.responses import HTMLResponse, JSONResponse, StreamingResponse
from fastapi.concurrency import run_in_threadpool
from pydantic import BaseModel, Field

from alphanexus.graph.trading_graph import AlphaNexusGraph
from alphanexus.default_config import DEFAULT_CONFIG
from alphanexus.dataflows.errors import (
    DataflowAuthError,
    DataflowBadRequestError,
    DataflowError,
)
from web.portfolio_service import build_portfolio_timeseries

load_dotenv()

APP_DIR = Path(__file__).resolve().parent
INDEX_HTML = (APP_DIR / "index.html").read_text(encoding="utf-8")
PORTFOLIO_HTML = (APP_DIR / "portfolio.html").read_text(encoding="utf-8")

app = FastAPI(title="AlphaNexus Web")


class RunRequest(BaseModel):
    ticker: str = Field(..., min_length=1)
    trade_date: str
    provider: str | None = None
    api_key: str | None = None
    data_vendor: str | None = None
    alpha_vantage_key: str | None = None
    deep_think_llm: str | None = None
    quick_think_llm: str | None = None
    selected_analysts: list[str] | None = None
    config_overrides: dict | None = None


class PortfolioRequest(BaseModel):
    symbols: list[str] | None = None
    allocation: dict[str, float] | None = None
    total_value: float = Field(default=200000.0, gt=0)
    alpha_vantage_key: str | None = None


def _prepare_config(payload: RunRequest):
    try:
        date.fromisoformat(payload.trade_date)
    except ValueError as exc:
        raise HTTPException(status_code=400, detail="trade_date 格式应为 YYYY-MM-DD") from exc

    selected = payload.selected_analysts or ["market", "social", "news", "fundamentals"]
    config = copy.deepcopy(DEFAULT_CONFIG)
    if payload.config_overrides:
        config.update(payload.config_overrides)

    provider = (payload.provider or config.get("llm_provider", "openai")).lower()
    allowed_providers = {"openai", "anthropic", "google", "xai", "openrouter", "ollama"}
    if provider not in allowed_providers:
        raise HTTPException(status_code=400, detail="不支持的 LLM 供应商")

    config["llm_provider"] = provider

    # Use provider defaults if no model override in config_overrides
    if not payload.config_overrides or (
        "deep_think_llm" not in payload.config_overrides
        and "quick_think_llm" not in payload.config_overrides
    ):
        default_models = {
            "openai": ("gpt-5.2", "gpt-5-mini"),
            "anthropic": ("claude-sonnet-4-5", "claude-haiku-4-5"),
            "google": ("gemini-2.5-pro", "gemini-2.5-flash"),
            "xai": ("grok-4", "grok-4-1-fast"),
            "openrouter": ("openai/gpt-5.2", "openai/gpt-5-mini"),
            "ollama": ("llama3.1:8b", "llama3.1:8b"),
        }
        if provider in default_models:
            config["deep_think_llm"], config["quick_think_llm"] = default_models[provider]

    if payload.deep_think_llm:
        config["deep_think_llm"] = payload.deep_think_llm
    if payload.quick_think_llm:
        config["quick_think_llm"] = payload.quick_think_llm

    api_key = (payload.api_key or "").strip() if payload.api_key else ""
    if provider != "ollama":
        if not api_key:
            env_keys = {
                "openai": "OPENAI_API_KEY",
                "anthropic": "ANTHROPIC_API_KEY",
                "google": "GOOGLE_API_KEY",
                "xai": "XAI_API_KEY",
                "openrouter": "OPENROUTER_API_KEY",
            }
            env_var = env_keys.get(provider)
            if env_var and not os.environ.get(env_var):
                raise HTTPException(status_code=400, detail="缺少 API Key")
        else:
            if provider == "google":
                config["google_api_key"] = api_key
            else:
                config["api_key"] = api_key

    data_vendor = (payload.data_vendor or "").strip().lower()
    if data_vendor:
        if data_vendor not in {"yfinance", "alpha_vantage"}:
            raise HTTPException(status_code=400, detail="不支持的数据源")
        config["data_vendors"] = {
            "core_stock_apis": data_vendor,
            "technical_indicators": data_vendor,
            "fundamental_data": data_vendor,
            "news_data": data_vendor,
        }
        if data_vendor == "alpha_vantage":
            alpha_key = (payload.alpha_vantage_key or "").strip()
            if alpha_key:
                os.environ["ALPHA_VANTAGE_API_KEY"] = alpha_key
            elif not os.environ.get("ALPHA_VANTAGE_API_KEY"):
                raise HTTPException(status_code=400, detail="缺少 Alpha Vantage API Key")

    data_vendor = config.get("data_vendors", {}).get("core_stock_apis", "yfinance")
    meta = {
        "llm_provider": provider,
        "deep_think_llm": config.get("deep_think_llm"),
        "quick_think_llm": config.get("quick_think_llm"),
        "data_vendor": data_vendor,
        "selected_analysts": selected,
    }

    return config, selected, meta


_URL_RE = re.compile(r"https?://[^\s\]\)\"'>]+")


def _extract_sources(texts: list[str]) -> list[str]:
    urls: list[str] = []
    seen = set()
    for text in texts:
        if not text:
            continue
        for raw in _URL_RE.findall(text):
            url = raw.rstrip(").,;]")
            if url not in seen:
                seen.add(url)
                urls.append(url)
    return urls


def _build_response(final_state: dict, decision: str, meta: dict) -> dict:
    reports = {
        "market_report": final_state.get("market_report"),
        "sentiment_report": final_state.get("sentiment_report"),
        "news_report": final_state.get("news_report"),
        "fundamentals_report": final_state.get("fundamentals_report"),
    }
    sources = _extract_sources(
        [
            final_state.get("final_trade_decision", ""),
            final_state.get("investment_plan", ""),
            final_state.get("trader_investment_plan", ""),
            reports.get("market_report", ""),
            reports.get("sentiment_report", ""),
            reports.get("news_report", ""),
            reports.get("fundamentals_report", ""),
        ]
    )

    return {
        "ticker": final_state.get("company_of_interest"),
        "trade_date": final_state.get("trade_date"),
        "decision": decision,
        "final_trade_decision": final_state.get("final_trade_decision"),
        "investment_plan": final_state.get("investment_plan"),
        "trader_investment_plan": final_state.get("trader_investment_plan"),
        "reports": reports,
        "sources": sources,
        "meta": meta,
    }


def _run_graph(payload: RunRequest) -> dict:
    config, selected, meta = _prepare_config(payload)

    graph = AlphaNexusGraph(
        selected_analysts=selected,
        debug=False,
        config=config,
    )

    final_state, decision = graph.propagate(payload.ticker, payload.trade_date)

    return _build_response(final_state, decision, meta)


def _portfolio_error_payload(exc: Exception) -> dict:
    if isinstance(exc, DataflowError):
        return {
            "error_code": exc.error_code,
            "message": str(exc),
            "vendor": exc.vendor,
            "retryable": exc.retryable,
        }
    return {
        "error_code": "PORTFOLIO_ERROR",
        "message": str(exc),
        "vendor": None,
        "retryable": False,
    }


def _run_portfolio(payload: PortfolioRequest) -> dict:
    try:
        return build_portfolio_timeseries(
            symbols=payload.symbols,
            allocation=payload.allocation,
            total_value=payload.total_value,
            api_key=(payload.alpha_vantage_key or "").strip() or None,
        )
    except ValueError as exc:
        raise HTTPException(
            status_code=400,
            detail=_portfolio_error_payload(
                DataflowBadRequestError(str(exc), vendor="portfolio_service")
            ),
        ) from exc
    except DataflowAuthError as exc:
        raise HTTPException(status_code=401, detail=_portfolio_error_payload(exc)) from exc
    except DataflowBadRequestError as exc:
        raise HTTPException(status_code=400, detail=_portfolio_error_payload(exc)) from exc
    except DataflowError as exc:
        raise HTTPException(status_code=502, detail=_portfolio_error_payload(exc)) from exc
    except Exception as exc:
        raise HTTPException(status_code=500, detail=_portfolio_error_payload(exc)) from exc


def _sse_event(payload: dict, event: str | None = None) -> str:
    message = ""
    if event:
        message += f"event: {event}\n"
    message += f"data: {json.dumps(payload, ensure_ascii=False)}\n\n"
    return message


def _stream_graph(payload: RunRequest):
    try:
        config, selected, meta = _prepare_config(payload)
        yield _sse_event({"type": "status", "message": "初始化完成，开始分析..."})
        yield _sse_event({"type": "meta", "meta": meta})

        graph = AlphaNexusGraph(
            selected_analysts=selected,
            debug=False,
            config=config,
        )

        init_state = graph.propagator.create_initial_state(
            payload.ticker, payload.trade_date
        )
        args = graph.propagator.get_graph_args()

        last_state = None
        seen = {}
        report_labels = {
            "market_report": "市场分析",
            "sentiment_report": "社媒情绪",
            "news_report": "新闻宏观",
            "fundamentals_report": "基本面",
        }

        for chunk in graph.graph.stream(init_state, **args):
            last_state = chunk
            for key, label in report_labels.items():
                value = chunk.get(key)
                if value and value != seen.get(key):
                    seen[key] = value
                    yield _sse_event(
                        {
                            "type": "report",
                            "report_type": key,
                            "label": label,
                            "content": value,
                        }
                    )

            for key, label in (
                ("investment_plan", "投资计划"),
                ("trader_investment_plan", "交易员计划"),
                ("final_trade_decision", "最终交易结论"),
            ):
                value = chunk.get(key)
                if value and value != seen.get(key):
                    seen[key] = value
                    yield _sse_event(
                        {"type": "summary", "summary_type": key, "label": label, "content": value}
                    )

        if last_state is None:
            raise RuntimeError("未产生任何输出")

        decision = graph.process_signal(last_state.get("final_trade_decision", ""))
        final_payload = _build_response(last_state, decision, meta)
        yield _sse_event({"type": "final", "data": final_payload})
    except HTTPException as exc:
        yield _sse_event({"type": "error", "message": exc.detail})
    except Exception as exc:
        yield _sse_event({"type": "error", "message": str(exc)})


@app.get("/", response_class=HTMLResponse)
def index() -> HTMLResponse:
    return HTMLResponse(content=INDEX_HTML)


@app.get("/portfolio", response_class=HTMLResponse)
def portfolio_page() -> HTMLResponse:
    return HTMLResponse(content=PORTFOLIO_HTML)


@app.post("/api/run")
async def run(payload: RunRequest) -> JSONResponse:
    result = await run_in_threadpool(_run_graph, payload)
    return JSONResponse(content=result)


@app.post("/api/run/stream")
async def run_stream(payload: RunRequest) -> StreamingResponse:
    return StreamingResponse(_stream_graph(payload), media_type="text/event-stream")


@app.get("/api/health")
def health() -> dict:
    return {"status": "ok"}


@app.get("/api/portfolio/health")
def portfolio_health() -> dict:
    return {"status": "ok", "service": "portfolio"}


@app.get("/api/portfolio/data")
async def portfolio_data_get() -> JSONResponse:
    payload = PortfolioRequest()
    result = await run_in_threadpool(_run_portfolio, payload)
    return JSONResponse(content={"ok": True, "data": result})


@app.post("/api/portfolio/data")
async def portfolio_data_post(payload: PortfolioRequest) -> JSONResponse:
    result = await run_in_threadpool(_run_portfolio, payload)
    return JSONResponse(content={"ok": True, "data": result})


@app.post("/api/portfolio/refresh")
async def portfolio_refresh(payload: PortfolioRequest) -> JSONResponse:
    # Current service always attempts live MCP first, then falls back to cache.
    result = await run_in_threadpool(_run_portfolio, payload)
    return JSONResponse(content={"ok": True, "data": result})


if __name__ == "__main__":
    import uvicorn

    uvicorn.run("web.app:app", host="0.0.0.0", port=8000, reload=False)
