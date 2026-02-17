"""Tools for querying company relationship graph."""

from __future__ import annotations

import json
from typing import Annotated

from langchain_core.tools import tool

from alphanexus.knowledge import get_company_graph_store


@tool
def get_company_relationships(
    ticker: Annotated[str, "Ticker symbol, e.g. NVDA"],
    max_hops: Annotated[int, "Graph traversal depth, 1-3"] = 2,
    max_edges: Annotated[int, "Maximum number of relationship edges"] = 20,
) -> str:
    """Return cross-company relationship map for impact analysis.

    Includes supply chain, partnership, competition, and holdings links.
    """
    max_hops = max(1, min(int(max_hops), 3))
    max_edges = max(4, min(int(max_edges), 50))

    store = get_company_graph_store()
    snap = store.get_impact_snapshot(ticker, max_hops=max_hops, max_edges=max_edges)

    if not snap.get("nodes"):
        return (
            f"## 关联关系图谱\n"
            f"- 未找到 {ticker.upper()} 的关系数据。\n"
            "- 建议：先基于新闻主体公司继续分析，并在图谱文件补充实体关系。"
        )

    lines = []
    lines.append("## 关联关系图谱")
    lines.append(
        f"- 目标公司: {snap['focus_symbol']} ({snap['focus_name']}) | 行业: {snap['focus_industry']}"
    )
    lines.append(f"- 节点数: {len(snap['nodes'])} | 关系边: {len(snap['links'])}")
    lines.append("")
    lines.append("### 关键关系")
    for row in snap["links"][:max_edges]:
        lines.append(
            f"- {row['source']} -> {row['target']} | {row['relation']} | hop={row['hop']} | {row['description']}"
        )

    lines.append("")
    lines.append("### 潜在影响链")
    for item in snap.get("impact_paths", [])[:8]:
        lines.append(f"- {item}")

    lines.append("")
    lines.append("### 结构化数据(JSON)")
    compact = {
        "focus_symbol": snap["focus_symbol"],
        "focus_industry": snap["focus_industry"],
        "links": snap["links"][:max_edges],
    }
    lines.append("```json")
    lines.append(json.dumps(compact, ensure_ascii=False, indent=2))
    lines.append("```")

    return "\n".join(lines)


@tool
def get_company_impact_context(
    ticker: Annotated[str, "Ticker symbol, e.g. NVDA"],
    max_hops: Annotated[int, "Graph traversal depth, 1-3"] = 2,
) -> str:
    """Return concise markdown context for analyst prompt grounding."""
    max_hops = max(1, min(int(max_hops), 3))
    store = get_company_graph_store()
    return store.build_prompt_context(ticker, max_hops=max_hops)
