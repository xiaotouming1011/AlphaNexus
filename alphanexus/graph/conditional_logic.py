# AlphaNexus/graph/conditional_logic.py

from alphanexus.agents.utils.agent_states import AgentState


def _safe_int(value, default):
    try:
        return int(value)
    except (TypeError, ValueError):
        return default


class ConditionalLogic:
    """Handles conditional logic for determining graph flow."""

    def __init__(
        self,
        debate_mode="adaptive",
        min_debate_rounds=2,
        max_debate_rounds=4,
        min_risk_discuss_rounds=2,
        max_risk_discuss_rounds=3,
    ):
        """Initialize with configuration parameters."""
        mode = (debate_mode or "adaptive").strip().lower()
        self.debate_mode = mode if mode in {"adaptive", "fixed"} else "adaptive"

        self.min_debate_rounds = max(2, _safe_int(min_debate_rounds, 2))
        self.max_debate_rounds = max(
            self.min_debate_rounds,
            _safe_int(max_debate_rounds, self.min_debate_rounds),
        )

        self.min_risk_discuss_rounds = max(2, _safe_int(min_risk_discuss_rounds, 2))
        self.max_risk_discuss_rounds = max(
            self.min_risk_discuss_rounds,
            _safe_int(max_risk_discuss_rounds, self.min_risk_discuss_rounds),
        )

    def should_continue_market(self, state: AgentState):
        """Determine if market analysis should continue."""
        messages = state["messages"]
        last_message = messages[-1]
        if last_message.tool_calls:
            return "tools_market"
        return "Msg Clear Market"

    def should_continue_social(self, state: AgentState):
        """Determine if social media analysis should continue."""
        messages = state["messages"]
        last_message = messages[-1]
        if last_message.tool_calls:
            return "tools_social"
        return "Msg Clear Social"

    def should_continue_news(self, state: AgentState):
        """Determine if news analysis should continue."""
        messages = state["messages"]
        last_message = messages[-1]
        if last_message.tool_calls:
            return "tools_news"
        return "Msg Clear News"

    def should_continue_fundamentals(self, state: AgentState):
        """Determine if fundamentals analysis should continue."""
        messages = state["messages"]
        last_message = messages[-1]
        if last_message.tool_calls:
            return "tools_fundamentals"
        return "Msg Clear Fundamentals"

    def _clamp(self, value: int, lower: int, upper: int) -> int:
        return max(lower, min(upper, value))

    def _non_empty_reports_count(self, state: AgentState) -> int:
        reports = [
            state.get("market_report", ""),
            state.get("sentiment_report", ""),
            state.get("news_report", ""),
            state.get("fundamentals_report", ""),
        ]
        return sum(1 for text in reports if isinstance(text, str) and text.strip())

    def _text_score(self, text: str, keywords: list[str]) -> int:
        lower = (text or "").lower()
        return sum(lower.count(word) for word in keywords)

    def _resolve_invest_debate_rounds(self, state: AgentState) -> int:
        if self.debate_mode == "fixed":
            return self.max_debate_rounds

        coverage = self._non_empty_reports_count(state)
        evidence = "\n".join(
            [
                state.get("market_report", "") or "",
                state.get("sentiment_report", "") or "",
                state.get("news_report", "") or "",
                state.get("fundamentals_report", "") or "",
            ]
        )
        uncertainty_keywords = [
            "uncertain",
            "uncertainty",
            "mixed",
            "volatility",
            "lawsuit",
            "litigation",
            "investigation",
            "downgrade",
            "guidance cut",
            "headwind",
            "risk",
            "不确定",
            "分歧",
            "波动",
            "诉讼",
            "调查",
            "下调",
            "风险",
            "利空",
            "回撤",
        ]
        score = self._text_score(evidence, uncertainty_keywords)

        target = self.min_debate_rounds
        if coverage >= 2:
            target += 1
        if score >= 6:
            target += 1
        elif score >= 3 and coverage >= 3:
            target += 1
        if len(evidence) > 4500:
            target += 1
        return self._clamp(target, self.min_debate_rounds, self.max_debate_rounds)

    def _resolve_risk_debate_rounds(self, state: AgentState) -> int:
        if self.debate_mode == "fixed":
            return self.max_risk_discuss_rounds

        context = "\n".join(
            [
                state.get("investment_plan", "") or "",
                state.get("trader_investment_plan", "") or "",
                state.get("market_report", "") or "",
                state.get("news_report", "") or "",
            ]
        )
        risk_keywords = [
            "drawdown",
            "volatility",
            "tail risk",
            "stop loss",
            "liquidity",
            "leverage",
            "risk",
            "uncertain",
            "lawsuit",
            "regulation",
            "回撤",
            "波动",
            "尾部风险",
            "止损",
            "流动性",
            "杠杆",
            "不确定",
            "诉讼",
            "监管",
            "风险",
        ]
        score = self._text_score(context, risk_keywords)

        target = self.min_risk_discuss_rounds
        if score >= 5:
            target += 1
        if len(context) > 5000 and score >= 8:
            target += 1
        return self._clamp(
            target,
            self.min_risk_discuss_rounds,
            self.max_risk_discuss_rounds,
        )

    def should_continue_debate(self, state: AgentState) -> str:
        """Determine if debate should continue."""
        target_rounds = self._resolve_invest_debate_rounds(state)
        if state["investment_debate_state"]["count"] >= 2 * target_rounds:
            return "Research Manager"
        if state["investment_debate_state"]["current_response"].startswith("Bull"):
            return "Bear Researcher"
        return "Bull Researcher"

    def should_continue_risk_analysis(self, state: AgentState) -> str:
        """Determine if risk analysis should continue."""
        target_rounds = self._resolve_risk_debate_rounds(state)
        if state["risk_debate_state"]["count"] >= 3 * target_rounds:
            return "Risk Judge"
        if state["risk_debate_state"]["latest_speaker"].startswith("Aggressive"):
            return "Conservative Analyst"
        if state["risk_debate_state"]["latest_speaker"].startswith("Conservative"):
            return "Neutral Analyst"
        return "Aggressive Analyst"
