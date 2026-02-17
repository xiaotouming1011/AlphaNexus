"""Company relationship graph store for cross-company impact reasoning.

This module provides a lightweight graph database-like capability backed by JSON.
It is intentionally local-first (no remote dependency) and can be replaced by
an external graph DB source later.
"""

from __future__ import annotations

import json
import os
from dataclasses import dataclass
from pathlib import Path
from typing import Dict, List, Optional, Tuple


_RELATION_LABELS = {
    "SUPPLIES_TO": "supply",
    "MANUFACTURES_FOR": "manufacturing",
    "PARTNERS_WITH": "partnership",
    "COMPETES_WITH": "competition",
    "HOLDS_STAKE": "holding",
    "SELLS_TO": "customer",
    "DEPENDS_ON": "dependency",
    "USES_PLATFORM": "platform",
}


@dataclass(frozen=True)
class CompanyNode:
    symbol: str
    name: str
    industry: str


@dataclass(frozen=True)
class CompanyEdge:
    source: str
    target: str
    relation: str
    description: str
    confidence: str = "medium"
    tags: Tuple[str, ...] = ()


class CompanyGraphStore:
    """In-memory company graph store with BFS traversal utilities."""

    def __init__(self, seed_path: Optional[str] = None):
        self.seed_path = Path(seed_path) if seed_path else self._default_seed_path()
        self.nodes: Dict[str, CompanyNode] = {}
        self.out_edges: Dict[str, List[CompanyEdge]] = {}
        self.in_edges: Dict[str, List[CompanyEdge]] = {}
        self._load()

    @staticmethod
    def _default_seed_path() -> Path:
        env_path = os.getenv("ALPHANEXUS_GRAPH_DB_PATH", "").strip()
        if env_path:
            return Path(env_path).expanduser().resolve()
        return (Path(__file__).resolve().parent.parent / "data" / "company_graph.json")

    def _load(self) -> None:
        if not self.seed_path.exists():
            self._load_builtin_fallback()
            return

        raw = json.loads(self.seed_path.read_text(encoding="utf-8"))
        self._build_from_payload(raw)

    def _load_builtin_fallback(self) -> None:
        payload = {
            "nodes": [
                {"symbol": "NVDA", "name": "NVIDIA", "industry": "Semiconductors"},
                {"symbol": "TSM", "name": "TSMC", "industry": "Semiconductor Foundry"},
                {"symbol": "ASML", "name": "ASML", "industry": "Semiconductor Equipment"},
            ],
            "edges": [
                {
                    "source": "ASML",
                    "target": "TSM",
                    "relation": "SUPPLIES_TO",
                    "description": "ASML supplies EUV lithography equipment to TSMC",
                    "confidence": "high",
                    "tags": ["supply_chain"],
                },
                {
                    "source": "TSM",
                    "target": "NVDA",
                    "relation": "MANUFACTURES_FOR",
                    "description": "TSMC manufactures advanced AI chips for NVIDIA",
                    "confidence": "high",
                    "tags": ["supply_chain"],
                },
            ],
        }
        self._build_from_payload(payload)

    def _build_from_payload(self, payload: Dict) -> None:
        self.nodes.clear()
        self.out_edges.clear()
        self.in_edges.clear()

        for item in payload.get("nodes", []):
            symbol = str(item.get("symbol", "")).upper().strip()
            if not symbol:
                continue
            self.nodes[symbol] = CompanyNode(
                symbol=symbol,
                name=str(item.get("name", symbol)).strip() or symbol,
                industry=str(item.get("industry", "Unknown")).strip() or "Unknown",
            )
            self.out_edges[symbol] = []
            self.in_edges[symbol] = []

        for item in payload.get("edges", []):
            source = str(item.get("source", "")).upper().strip()
            target = str(item.get("target", "")).upper().strip()
            relation = str(item.get("relation", "")).upper().strip()
            description = str(item.get("description", "")).strip()
            confidence = str(item.get("confidence", "medium")).lower().strip() or "medium"
            tags = tuple(str(t).strip() for t in item.get("tags", []) if str(t).strip())
            if not source or not target or source not in self.nodes or target not in self.nodes:
                continue
            if not relation:
                relation = "PARTNERS_WITH"
            if not description:
                description = f"{source} {relation} {target}"

            edge = CompanyEdge(
                source=source,
                target=target,
                relation=relation,
                description=description,
                confidence=confidence,
                tags=tags,
            )
            self.out_edges[source].append(edge)
            self.in_edges[target].append(edge)

    def get_node(self, symbol: str) -> Optional[CompanyNode]:
        return self.nodes.get(symbol.upper().strip())

    def get_relationships(
        self,
        symbol: str,
        max_hops: int = 2,
        max_edges: int = 24,
        include_incoming: bool = True,
    ) -> List[Dict]:
        """Return traversed relationships with hop distance."""
        root = symbol.upper().strip()
        if root not in self.nodes:
            return []

        queue: List[Tuple[str, int]] = [(root, 0)]
        visited = {root}
        traversed: List[Dict] = []

        while queue and len(traversed) < max_edges:
            curr, depth = queue.pop(0)
            if depth >= max_hops:
                continue

            candidate_edges = list(self.out_edges.get(curr, []))
            if include_incoming:
                candidate_edges.extend(self.in_edges.get(curr, []))

            for edge in candidate_edges:
                if len(traversed) >= max_edges:
                    break

                if edge.source == curr:
                    other = edge.target
                    direction = "out"
                else:
                    other = edge.source
                    direction = "in"

                traversed.append(
                    {
                        "source": edge.source,
                        "target": edge.target,
                        "relation": edge.relation,
                        "relation_label": _RELATION_LABELS.get(edge.relation, "relation"),
                        "description": edge.description,
                        "confidence": edge.confidence,
                        "tags": list(edge.tags),
                        "hop": depth + 1,
                        "touchpoint": curr,
                        "counterparty": other,
                        "direction": direction,
                    }
                )

                if other not in visited and depth + 1 < max_hops:
                    visited.add(other)
                    queue.append((other, depth + 1))

        # Keep unique by (source,target,relation) while preserving order.
        unique: List[Dict] = []
        seen = set()
        for row in traversed:
            key = (row["source"], row["target"], row["relation"])
            if key in seen:
                continue
            seen.add(key)
            unique.append(row)
        return unique

    def get_impact_snapshot(self, symbol: str, max_hops: int = 2, max_edges: int = 24) -> Dict:
        """Get structured graph snapshot for API/UI and prompting."""
        ticker = symbol.upper().strip()
        focus = self.nodes.get(ticker)
        if not focus:
            return {
                "focus_symbol": ticker,
                "focus_name": ticker,
                "focus_industry": "Unknown",
                "nodes": [],
                "links": [],
                "impact_paths": [],
            }

        links = self.get_relationships(ticker, max_hops=max_hops, max_edges=max_edges)

        nodes_map = {focus.symbol: focus}
        for link in links:
            src = self.nodes.get(link["source"])
            tgt = self.nodes.get(link["target"])
            if src:
                nodes_map[src.symbol] = src
            if tgt:
                nodes_map[tgt.symbol] = tgt

        nodes = [
            {
                "symbol": node.symbol,
                "name": node.name,
                "industry": node.industry,
                "is_focus": node.symbol == focus.symbol,
            }
            for node in nodes_map.values()
        ]

        impact_paths: List[str] = []
        for link in links[:10]:
            relation_text = _RELATION_LABELS.get(link["relation"], "relation")
            impact_paths.append(
                f"{link['source']} -> {link['target']} ({relation_text}): {link['description']}"
            )

        return {
            "focus_symbol": focus.symbol,
            "focus_name": focus.name,
            "focus_industry": focus.industry,
            "nodes": nodes,
            "links": links,
            "impact_paths": impact_paths,
        }

    def build_prompt_context(self, symbol: str, max_hops: int = 2, max_edges: int = 16) -> str:
        """Build concise markdown context to guide analyst reasoning."""
        snap = self.get_impact_snapshot(symbol, max_hops=max_hops, max_edges=max_edges)
        if not snap.get("links"):
            return (
                f"## Company Graph Context\n"
                f"- Focus: {snap.get('focus_symbol', symbol.upper())}\n"
                "- No relationship record found in local graph DB."
            )

        lines: List[str] = []
        lines.append("## Company Graph Context")
        lines.append(
            f"- Focus: {snap['focus_symbol']} ({snap['focus_name']}) | Industry: {snap['focus_industry']}"
        )
        lines.append("- Relationship edges:")

        for link in snap["links"][:12]:
            relation_text = _RELATION_LABELS.get(link["relation"], link["relation"])
            lines.append(
                f"  - {link['source']} -> {link['target']} [{relation_text}] | {link['description']}"
            )

        lines.append("- Suggested impact channels to evaluate in news analysis:")
        lines.append("  - Supply chain shock propagation (upstream -> foundry -> downstream)")
        lines.append("  - Hyperscaler capex changes to AI semiconductor demand")
        lines.append("  - Competitor reaction and substitution risk")
        lines.append("  - Strategic holdings/partnership spillover risk")
        return "\n".join(lines)


_GRAPH_SINGLETON: Optional[CompanyGraphStore] = None


def get_company_graph_store() -> CompanyGraphStore:
    global _GRAPH_SINGLETON
    if _GRAPH_SINGLETON is None:
        _GRAPH_SINGLETON = CompanyGraphStore()
    return _GRAPH_SINGLETON
