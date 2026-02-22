import copy
import json
import os
import re
from datetime import date
from pathlib import Path

from dotenv import load_dotenv
from fastapi import FastAPI, HTTPException, Response
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
from alphanexus.knowledge import get_company_graph_store
from web.portfolio_service import build_portfolio_timeseries

load_dotenv()

APP_DIR = Path(__file__).resolve().parent
INDEX_HTML = (APP_DIR / "index.html").read_text(encoding="utf-8")
PORTFOLIO_HTML = (APP_DIR / "portfolio.html").read_text(encoding="utf-8")

app = FastAPI(title="AlphaNexus Web")


POPULAR_US_STOCKS: dict[str, str] = {
    "AAPL": "Apple Inc.",
    "MSFT": "Microsoft Corporation",
    "NVDA": "NVIDIA Corporation",
    "AMZN": "Amazon.com, Inc.",
    "GOOGL": "Alphabet Inc.",
    "META": "Meta Platforms, Inc.",
    "TSLA": "Tesla, Inc.",
    "AVGO": "Broadcom Inc.",
    "BRK.B": "Berkshire Hathaway Inc.",
    "JPM": "JPMorgan Chase & Co.",
    "V": "Visa Inc.",
    "MA": "Mastercard Incorporated",
    "XOM": "Exxon Mobil Corporation",
    "WMT": "Walmart Inc.",
    "UNH": "UnitedHealth Group Incorporated",
    "LLY": "Eli Lilly and Company",
    "JNJ": "Johnson & Johnson",
    "PG": "Procter & Gamble Company",
    "HD": "Home Depot, Inc.",
    "COST": "Costco Wholesale Corporation",
    "MRK": "Merck & Co., Inc.",
    "ABBV": "AbbVie Inc.",
    "PEP": "PepsiCo, Inc.",
    "KO": "Coca-Cola Company",
    "ADBE": "Adobe Inc.",
    "CRM": "Salesforce, Inc.",
    "NFLX": "Netflix, Inc.",
    "ORCL": "Oracle Corporation",
    "AMD": "Advanced Micro Devices, Inc.",
    "INTC": "Intel Corporation",
    "QCOM": "Qualcomm Incorporated",
    "TXN": "Texas Instruments Incorporated",
    "CSCO": "Cisco Systems, Inc.",
    "IBM": "International Business Machines Corporation",
    "NOW": "ServiceNow, Inc.",
    "PLTR": "Palantir Technologies Inc.",
    "PANW": "Palo Alto Networks, Inc.",
    "UBER": "Uber Technologies, Inc.",
    "BKNG": "Booking Holdings Inc.",
    "MCD": "McDonald's Corporation",
    "DIS": "Walt Disney Company",
    "NKE": "Nike, Inc.",
    "BA": "Boeing Company",
    "GE": "GE Aerospace",
    "CAT": "Caterpillar Inc.",
    "RTX": "RTX Corporation",
    "SPY": "SPDR S&P 500 ETF Trust",
    "QQQ": "Invesco QQQ Trust",
    "IWM": "iShares Russell 2000 ETF",
    "TSM": "Taiwan Semiconductor Manufacturing Company Limited",
}

POPULAR_US_STOCKS_ZH: dict[str, str] = {
    "AAPL": "苹果",
    "MSFT": "微软",
    "NVDA": "英伟达",
    "AMZN": "亚马逊",
    "GOOGL": "谷歌",
    "META": "Meta",
    "TSLA": "特斯拉",
    "AVGO": "博通",
    "BRK.B": "伯克希尔哈撒韦",
    "JPM": "摩根大通",
    "V": "Visa",
    "MA": "万事达",
    "XOM": "埃克森美孚",
    "WMT": "沃尔玛",
    "UNH": "联合健康",
    "LLY": "礼来",
    "JNJ": "强生",
    "PG": "宝洁",
    "HD": "家得宝",
    "COST": "好市多",
    "MRK": "默沙东",
    "ABBV": "艾伯维",
    "PEP": "百事",
    "KO": "可口可乐",
    "ADBE": "Adobe",
    "CRM": "Salesforce",
    "NFLX": "奈飞",
    "ORCL": "甲骨文",
    "AMD": "超威半导体",
    "INTC": "英特尔",
    "QCOM": "高通",
    "TXN": "德州仪器",
    "CSCO": "思科",
    "IBM": "IBM",
    "NOW": "ServiceNow",
    "PLTR": "Palantir",
    "PANW": "派拓网络",
    "UBER": "优步",
    "BKNG": "Booking",
    "MCD": "麦当劳",
    "DIS": "迪士尼",
    "NKE": "耐克",
    "BA": "波音",
    "GE": "GE航空",
    "CAT": "卡特彼勒",
    "RTX": "雷神",
    "SPY": "标普500ETF",
    "QQQ": "纳指100ETF",
    "IWM": "罗素2000ETF",
    "TSM": "台积电",
}

_SYMBOL_BY_NAME: dict[str, str] = {
    name.lower(): symbol for symbol, name in POPULAR_US_STOCKS.items()
}
_SYMBOL_BY_NAME.update(
    {name.lower().replace(" corporation", ""): symbol for symbol, name in POPULAR_US_STOCKS.items()}
)
_SYMBOL_BY_NAME.update(
    {name.lower().replace(" inc.", "").replace(", inc.", ""): symbol for symbol, name in POPULAR_US_STOCKS.items()}
)
_SYMBOL_BY_NAME.update(
    {name.lower(): symbol for symbol, name in POPULAR_US_STOCKS_ZH.items()}
)
_SYMBOL_BY_NAME.update(
    {
        "nvidia": "NVDA",
        "apple": "AAPL",
        "microsoft": "MSFT",
        "amazon": "AMZN",
        "alphabet": "GOOGL",
        "google": "GOOGL",
        "tesla": "TSLA",
        "broadcom": "AVGO",
        "berkshire hathaway": "BRK.B",
        "jpmorgan": "JPM",
        "oracle": "ORCL",
        "netflix": "NFLX",
        "intel": "INTC",
        "qualcomm": "QCOM",
        "taiwan semiconductor": "TSM",
        "tsmc": "TSM",
    }
)


def _normalize_ticker_input(raw: str) -> str:
    value = (raw or "").strip()
    if not value:
        raise HTTPException(status_code=400, detail="股票代码不能为空")

    upper = value.upper()
    if upper in POPULAR_US_STOCKS:
        return upper

    # Accept values like "Apple Inc. (AAPL)" or "AAPL - Apple Inc."
    match = re.search(r"\(([A-Z][A-Z0-9\.\-]{0,9})\)", upper)
    if match:
        symbol = match.group(1)
        if symbol in POPULAR_US_STOCKS:
            return symbol

    match = re.match(r"^([A-Z][A-Z0-9\.\-]{0,9})\s*[-|]", upper)
    if match:
        symbol = match.group(1)
        if symbol in POPULAR_US_STOCKS:
            return symbol

    lower = value.lower()
    if lower in _SYMBOL_BY_NAME:
        return _SYMBOL_BY_NAME[lower]

    # Fallback: keep original symbol-style input and let upstream validate.
    return upper


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
    debate_mode: str | None = None
    min_debate_rounds: int | None = None
    max_debate_rounds: int | None = None
    min_risk_discuss_rounds: int | None = None
    max_risk_discuss_rounds: int | None = None
    config_overrides: dict | None = None


class PortfolioRequest(BaseModel):
    symbols: list[str] | None = None
    allocation: dict[str, float] | None = None
    total_value: float = Field(default=200000.0, gt=0)
    alpha_vantage_key: str | None = None


def _prepare_config(payload: RunRequest):
    def _coerce_positive_int(value, field_name: str, min_value: int = 1):
        if value is None:
            return None
        try:
            v = int(value)
        except (TypeError, ValueError) as exc:
            raise HTTPException(status_code=400, detail=f"{field_name} 必须是整数") from exc
        if v < min_value:
            raise HTTPException(status_code=400, detail=f"{field_name} 必须 >= {min_value}")
        return v

    try:
        date.fromisoformat(payload.trade_date)
    except ValueError as exc:
        raise HTTPException(status_code=400, detail="trade_date 格式应为 YYYY-MM-DD") from exc

    selected = payload.selected_analysts or ["market", "social", "news", "fundamentals"]
    config = copy.deepcopy(DEFAULT_CONFIG)
    if payload.config_overrides:
        config.update(payload.config_overrides)

    provider = (
        payload.provider
        or (payload.config_overrides or {}).get("llm_provider")
        or "google"
    ).lower()
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
            "google": ("gemini-3.1-pro-preview", "gemini-3.1-pro-preview"),
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

    debate_mode = (payload.debate_mode or config.get("debate_mode", "adaptive") or "adaptive").strip().lower()
    if debate_mode not in {"adaptive", "fixed"}:
        raise HTTPException(status_code=400, detail="debate_mode 仅支持 adaptive/fixed")
    config["debate_mode"] = debate_mode

    min_debate_rounds = _coerce_positive_int(
        payload.min_debate_rounds, "min_debate_rounds", 2
    )
    max_debate_rounds = _coerce_positive_int(
        payload.max_debate_rounds, "max_debate_rounds", 2
    )
    min_risk_rounds = _coerce_positive_int(
        payload.min_risk_discuss_rounds, "min_risk_discuss_rounds", 2
    )
    max_risk_rounds = _coerce_positive_int(
        payload.max_risk_discuss_rounds, "max_risk_discuss_rounds", 2
    )

    if min_debate_rounds is not None:
        config["min_debate_rounds"] = min_debate_rounds
    if max_debate_rounds is not None:
        config["max_debate_rounds"] = max_debate_rounds
    if min_risk_rounds is not None:
        config["min_risk_discuss_rounds"] = min_risk_rounds
    if max_risk_rounds is not None:
        config["max_risk_discuss_rounds"] = max_risk_rounds

    min_debate_cfg = config.get("min_debate_rounds")
    if min_debate_cfg is None:
        min_debate_cfg = DEFAULT_CONFIG["min_debate_rounds"]
    max_debate_cfg = config.get("max_debate_rounds")
    if max_debate_cfg is None:
        max_debate_cfg = DEFAULT_CONFIG["max_debate_rounds"]
    min_risk_cfg = config.get("min_risk_discuss_rounds")
    if min_risk_cfg is None:
        min_risk_cfg = DEFAULT_CONFIG["min_risk_discuss_rounds"]
    max_risk_cfg = config.get("max_risk_discuss_rounds")
    if max_risk_cfg is None:
        max_risk_cfg = DEFAULT_CONFIG["max_risk_discuss_rounds"]

    config["min_debate_rounds"] = _coerce_positive_int(
        min_debate_cfg, "min_debate_rounds", 2
    )
    config["max_debate_rounds"] = _coerce_positive_int(
        max_debate_cfg, "max_debate_rounds", 2
    )
    config["min_risk_discuss_rounds"] = _coerce_positive_int(
        min_risk_cfg, "min_risk_discuss_rounds", 2
    )
    config["max_risk_discuss_rounds"] = _coerce_positive_int(
        max_risk_cfg, "max_risk_discuss_rounds", 2
    )

    if config.get("max_debate_rounds", 1) < config.get("min_debate_rounds", 1):
        raise HTTPException(
            status_code=400,
            detail="max_debate_rounds 不能小于 min_debate_rounds",
        )
    if config.get("max_risk_discuss_rounds", 1) < config.get("min_risk_discuss_rounds", 1):
        raise HTTPException(
            status_code=400,
            detail="max_risk_discuss_rounds 不能小于 min_risk_discuss_rounds",
        )

    api_key = (payload.api_key or "").strip() if payload.api_key else ""
    llm_key_source = "n/a"
    if provider != "ollama":
        env_keys = {
            "openai": "OPENAI_API_KEY",
            "anthropic": "ANTHROPIC_API_KEY",
            "google": "GOOGLE_API_KEY",
            "xai": "XAI_API_KEY",
            "openrouter": "OPENROUTER_API_KEY",
        }
        env_var = env_keys.get(provider)
        fallback_key = (os.environ.get(env_var, "") if env_var else "").strip()

        # Priority: request key > server env key.
        resolved_key = api_key or fallback_key
        if not resolved_key:
            raise HTTPException(status_code=400, detail="缺少 API Key")

        if provider == "google":
            config["google_api_key"] = resolved_key
        else:
            config["api_key"] = resolved_key

        llm_key_source = "request" if api_key else "server_env"

    data_vendor = (payload.data_vendor or "").strip().lower()
    alpha_key_source = "n/a"
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
                alpha_key_source = "request"
            elif not os.environ.get("ALPHA_VANTAGE_API_KEY"):
                raise HTTPException(status_code=400, detail="缺少 Alpha Vantage API Key")
            else:
                alpha_key_source = "server_env"

    data_vendor = config.get("data_vendors", {}).get("core_stock_apis", "yfinance")
    meta = {
        "llm_provider": provider,
        "deep_think_llm": config.get("deep_think_llm"),
        "quick_think_llm": config.get("quick_think_llm"),
        "data_vendor": data_vendor,
        "selected_analysts": selected,
        "debate_mode": config.get("debate_mode"),
        "min_debate_rounds": config.get("min_debate_rounds"),
        "max_debate_rounds": config.get("max_debate_rounds"),
        "min_risk_discuss_rounds": config.get("min_risk_discuss_rounds"),
        "max_risk_discuss_rounds": config.get("max_risk_discuss_rounds"),
        "llm_key_source": llm_key_source,
        "alpha_vantage_key_source": alpha_key_source,
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


def _company_graph_payload(ticker: str) -> dict:
    store = get_company_graph_store()
    snap = store.get_impact_snapshot(ticker, max_hops=2, max_edges=24)
    return {
        "focus_symbol": snap.get("focus_symbol"),
        "focus_name": snap.get("focus_name"),
        "focus_industry": snap.get("focus_industry"),
        "nodes": snap.get("nodes", []),
        "links": snap.get("links", []),
        "impact_paths": snap.get("impact_paths", []),
    }


def _debate_payload(final_state: dict) -> dict:
    investment_state = final_state.get("investment_debate_state") or {}
    risk_state = final_state.get("risk_debate_state") or {}
    return {
        "investment_debate_state": {
            "history": investment_state.get("history", ""),
            "bull_history": investment_state.get("bull_history", ""),
            "bear_history": investment_state.get("bear_history", ""),
            "judge_decision": investment_state.get("judge_decision", ""),
            "count": investment_state.get("count", 0),
        },
        "risk_debate_state": {
            "history": risk_state.get("history", ""),
            "aggressive_history": risk_state.get("aggressive_history", ""),
            "conservative_history": risk_state.get("conservative_history", ""),
            "neutral_history": risk_state.get("neutral_history", ""),
            "judge_decision": risk_state.get("judge_decision", ""),
            "count": risk_state.get("count", 0),
        },
    }


def _build_response(final_state: dict, decision: str, meta: dict) -> dict:
    ticker = final_state.get("company_of_interest")
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
        "ticker": ticker,
        "trade_date": final_state.get("trade_date"),
        "decision": decision,
        "final_trade_decision": final_state.get("final_trade_decision"),
        "investment_plan": final_state.get("investment_plan"),
        "trader_investment_plan": final_state.get("trader_investment_plan"),
        "reports": reports,
        "sources": sources,
        "company_graph": _company_graph_payload(ticker or ""),
        **_debate_payload(final_state),
        "meta": meta,
    }


def _run_graph(payload: RunRequest) -> dict:
    config, selected, meta = _prepare_config(payload)
    ticker = _normalize_ticker_input(payload.ticker)

    graph = AlphaNexusGraph(
        selected_analysts=selected,
        debug=False,
        config=config,
    )

    final_state, decision = graph.propagate(ticker, payload.trade_date)

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
        ticker = _normalize_ticker_input(payload.ticker)
        yield _sse_event({"type": "status", "message": "初始化完成，开始分析..."})
        yield _sse_event({"type": "meta", "meta": meta})
        yield _sse_event({"type": "progress", "percent": 5, "stage": "初始化完成"})

        progress_sent = 5

        def maybe_progress(percent: int, stage: str):
            nonlocal progress_sent
            if percent <= progress_sent:
                return None
            progress_sent = percent
            return _sse_event({"type": "progress", "percent": percent, "stage": stage})

        graph = AlphaNexusGraph(
            selected_analysts=selected,
            debug=False,
            config=config,
        )
        event = maybe_progress(12, "图执行已启动")
        if event:
            yield event

        init_state = graph.propagator.create_initial_state(
            ticker, payload.trade_date
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
        chunk_count = 0

        for chunk in graph.graph.stream(init_state, **args):
            last_state = chunk
            chunk_count += 1
            event = maybe_progress(min(55, 12 + chunk_count * 2), "分析节点执行中")
            if event:
                yield event

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
                    event = maybe_progress(60, f"{label} 已完成")
                    if event:
                        yield event

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
                    if key == "investment_plan":
                        event = maybe_progress(70, "投资计划已生成")
                        if event:
                            yield event
                    elif key == "trader_investment_plan":
                        event = maybe_progress(78, "交易员计划已生成")
                        if event:
                            yield event
                    elif key == "final_trade_decision":
                        event = maybe_progress(93, "最终结论已生成")
                        if event:
                            yield event

            investment_state = chunk.get("investment_debate_state") or {}
            investment_history = investment_state.get("history", "")
            if investment_history and investment_history != seen.get("investment_debate_history"):
                seen["investment_debate_history"] = investment_history
                yield _sse_event(
                    {
                        "type": "debate",
                        "debate_type": "investment_debate_state",
                        "label": "投资辩论过程",
                        "history": investment_history,
                        "judge_decision": investment_state.get("judge_decision", ""),
                        "count": investment_state.get("count", 0),
                    }
                )
                event = maybe_progress(84, "投资辩论阶段完成")
                if event:
                    yield event

            risk_state = chunk.get("risk_debate_state") or {}
            risk_history = risk_state.get("history", "")
            if risk_history and risk_history != seen.get("risk_debate_history"):
                seen["risk_debate_history"] = risk_history
                yield _sse_event(
                    {
                        "type": "debate",
                        "debate_type": "risk_debate_state",
                        "label": "风控辩论过程",
                        "history": risk_history,
                        "judge_decision": risk_state.get("judge_decision", ""),
                        "count": risk_state.get("count", 0),
                    }
                )
                event = maybe_progress(90, "风控辩论阶段完成")
                if event:
                    yield event

        if last_state is None:
            raise RuntimeError("未产生任何输出")

        decision = graph.process_signal(last_state.get("final_trade_decision", ""))
        event = maybe_progress(97, "正在整理最终输出")
        if event:
            yield event
        final_payload = _build_response(last_state, decision, meta)
        event = maybe_progress(100, "分析完成")
        if event:
            yield event
        yield _sse_event({"type": "final", "data": final_payload})
    except HTTPException as exc:
        detail = exc.detail if isinstance(exc.detail, str) else json.dumps(exc.detail, ensure_ascii=False)
        yield _sse_event({"type": "error", "message": detail, "retryable": exc.status_code >= 500})
    except Exception as exc:
        message = str(exc).strip() or exc.__class__.__name__
        lower = message.lower()
        if "connecttimeout" in lower or "connection timed out" in lower or "timed out" in lower:
            message = "模型服务连接超时，请稍后重试，或切换模型供应商/模型后再试。"
        yield _sse_event({"type": "error", "message": message, "retryable": True})


@app.get("/", response_class=HTMLResponse)
def index() -> HTMLResponse:
    return HTMLResponse(content=INDEX_HTML)


@app.get("/favicon.ico", include_in_schema=False)
def favicon() -> Response:
    # 浏览器会自动请求 favicon。此处返回 204，避免日志里出现无意义 404。
    return Response(status_code=204)


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


@app.get("/api/company-graph/{ticker}")
def company_graph(ticker: str) -> JSONResponse:
    payload = _company_graph_payload(_normalize_ticker_input(ticker))
    return JSONResponse(content={"ok": True, "data": payload})


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
