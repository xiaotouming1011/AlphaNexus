#!/usr/bin/env python3
from __future__ import annotations

import csv
from dataclasses import dataclass
from datetime import date, timedelta
from pathlib import Path

OUT_DIR = Path(__file__).resolve().parents[1] / "datasets"
OUT_DIR.mkdir(parents=True, exist_ok=True)

@dataclass
class Case:
    case_id: str
    ticker: str
    trade_date: str
    selected_module: str
    risk_profile: str
    expected_focus: str
    golden_signals: str
    hard_fail_rules: str
    difficulty: str
    market_regime: str
    source_type: str
    status: str
    owner: str
    last_updated: str


RISK_PROFILES = ["aggressive", "balanced", "conservative", "very_conservative"]
MODULES = ["market", "news", "fundamentals", "social"]
MARKET_REGIMES = ["trend_up", "trend_down", "range", "event_driven", "volatile"]
TICKERS = [
    "AAPL", "MSFT", "GOOGL", "AMZN", "META", "NVDA", "TSLA", "NFLX", "AMD", "AVGO",
    "JPM", "BAC", "GS", "V", "MA", "WMT", "COST", "PG", "KO", "PEP",
    "XOM", "CVX", "COP", "NVO", "LLY", "JNJ", "PFE", "UNH", "CAT", "DE",
    "BABA", "PDD", "TCEHY", "SHOP", "UBER", "ABNB", "PLTR", "CRM", "ORCL", "ADBE",
]

L3_EVENTS = [
    ("多空双杀", "同日高开低走+高波动，要求识别假突破与风控收缩"),
    ("财报超预期但指引下修", "要求拆分短期情绪与中期基本面冲突"),
    ("监管突发", "要求优先评估合规与流动性风险"),
    ("供应链扰动", "要求识别跨公司传导与二阶影响"),
    ("宏观数据反转", "要求区分beta暴露与alpha机会"),
]


def pick(seq: list[str], idx: int) -> str:
    return seq[idx % len(seq)]


def mk_date(idx: int) -> str:
    base = date(2026, 2, 28)
    return str(base - timedelta(days=idx % 45))


def mk_expected_focus(module: str, risk: str, regime: str, hard: bool = False) -> str:
    risk_map = {
        "aggressive": "机会优先，接受更高波动",
        "balanced": "收益与风险均衡",
        "conservative": "风险优先，仓位克制",
        "very_conservative": "严控回撤，优先防守",
    }
    module_focus = {
        "market": "价格结构/量能/波动率",
        "news": "事件因果/时效性/信源等级",
        "fundamentals": "估值/盈利质量/现金流",
        "social": "情绪分歧/噪音过滤/羊群风险",
    }
    base = f"{module_focus[module]}，{risk_map[risk]}，市场状态={regime}"
    if hard:
        base += "，必须给出仓位与止损边界"
    return base


def mk_golden_signals(module: str, regime: str, hard: bool = False) -> str:
    signals = [
        "明确 Buy/Sell/Hold",
        "至少2条可验证证据",
        "给出主要反方观点",
    ]
    if module == "news":
        signals.append("标注新闻时效与来源")
    if module == "social":
        signals.append("区分噪音与有效信号")
    if regime in {"volatile", "event_driven"}:
        signals.append("给出波动期仓位上限")
    if hard:
        signals.append("给出止损/止盈区间")
    return "；".join(signals)


def mk_hard_fail(module: str) -> str:
    return "；".join([
        "禁止编造来源与价格数据",
        "禁止输出非 Buy/Sell/Hold 结论",
        "禁止忽略重大风险项",
        "禁止与 risk_profile 冲突",
        "禁止无证据绝对化表述",
    ])


def build_cases(prefix: str, n: int, difficulty: str, source_type: str, hard: bool = False) -> list[Case]:
    out: list[Case] = []
    for i in range(1, n + 1):
        ticker = pick(TICKERS, i - 1)
        module = pick(MODULES, i + 1)
        risk = pick(RISK_PROFILES, i + 2)
        regime = pick(MARKET_REGIMES, i + 3)
        if hard:
            event_name, event_focus = L3_EVENTS[(i - 1) % len(L3_EVENTS)]
            expected = f"{mk_expected_focus(module, risk, regime, hard=True)}；挑战事件={event_name}；{event_focus}"
        else:
            expected = mk_expected_focus(module, risk, regime, hard=hard)
        out.append(
            Case(
                case_id=f"{prefix}-{i:04d}",
                ticker=ticker,
                trade_date=mk_date(i),
                selected_module=module,
                risk_profile=risk,
                expected_focus=expected,
                golden_signals=mk_golden_signals(module, regime, hard=hard),
                hard_fail_rules=mk_hard_fail(module),
                difficulty=difficulty,
                market_regime=regime,
                source_type=source_type,
                status="ready",
                owner="anji",
                last_updated="2026-03-05",
            )
        )
    return out


def write_csv(path: Path, cases: list[Case]) -> None:
    fields = [
        "case_id", "ticker", "trade_date", "selected_module", "risk_profile",
        "expected_focus", "golden_signals", "hard_fail_rules", "difficulty",
        "market_regime", "source_type", "status", "owner", "last_updated",
    ]
    with path.open("w", newline="", encoding="utf-8") as f:
        w = csv.DictWriter(f, fieldnames=fields)
        w.writeheader()
        for c in cases:
            w.writerow(c.__dict__)


def main() -> None:
    l1 = build_cases("L1", 50, "easy", "smoke_mix")
    l2 = build_cases("L2", 500, "medium", "historical_plus_online")
    l3 = build_cases("L3", 100, "hard", "challenge_event_mix", hard=True)

    write_csv(OUT_DIR / "l1_smoke_eval_dataset_v0.2.csv", l1)
    write_csv(OUT_DIR / "l2_regression_eval_dataset_v0.2.csv", l2)
    write_csv(OUT_DIR / "l3_challenge_eval_dataset_v0.2.csv", l3)

    all_cases = l1 + l2 + l3
    write_csv(OUT_DIR / "alphanexus_eval_master_v0.2.csv", all_cases)

    print(f"generated: {len(l1)} L1, {len(l2)} L2, {len(l3)} L3, total={len(all_cases)}")


if __name__ == "__main__":
    main()
