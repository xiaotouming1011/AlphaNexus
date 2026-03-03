from langchain_core.messages import HumanMessage
from langchain_core.prompts import ChatPromptTemplate, MessagesPlaceholder

from alphanexus.agents.utils.agent_utils import (
    get_news,
    get_global_news,
    get_company_relationships,
    get_company_impact_context,
)
from alphanexus.knowledge import get_company_graph_store


RISK_PROFILE_LABELS = {
    "very_conservative": "非常保守",
    "conservative": "比较保守",
    "balanced": "适中",
    "aggressive": "比较激进",
    "very_aggressive": "非常激进",
}

RISK_PROFILE_GUIDANCE = {
    "very_conservative": "优先选择下行风险、回撤风险、政策与合规风险、业绩不及预期风险、流动性风险相关信息；利好只保留关键且有证据的少量条目。",
    "conservative": "以风险防守视角筛选，强调潜在不确定性与风险对估值/现金流的压力，同时保留少量高确定性利好。",
    "balanced": "保持利好与利空的平衡，不做明显方向倾斜。",
    "aggressive": "优先选择增长催化、超预期、产业趋势与事件驱动机会，同时保留必要风险提示。",
    "very_aggressive": "重点突出高弹性机会、强催化、市场情绪与短中期上行驱动，仅保留关键风险警示。",
}


def _message_content_to_text(content) -> str:
    if isinstance(content, str):
        return content
    if isinstance(content, list):
        parts = []
        for item in content:
            if isinstance(item, dict):
                text = item.get("text") or item.get("content") or ""
                if text:
                    parts.append(str(text))
            elif item:
                parts.append(str(item))
        return "\n".join(parts).strip()
    return str(content or "")


def _build_news_filter_prompt(base_report: str, risk_profile: str) -> str:
    profile = risk_profile if risk_profile in RISK_PROFILE_LABELS else "balanced"
    profile_label = RISK_PROFILE_LABELS.get(profile, "适中")
    guidance = RISK_PROFILE_GUIDANCE.get(profile, RISK_PROFILE_GUIDANCE["balanced"])

    return (
        "你是金融新闻筛选编辑。请基于“中性新闻报告”生成一个“按风险偏好筛选后的新闻简报”，"
        "该简报只用于前端新闻展示，不用于辩论和最终结论。\n\n"
        f"用户风险偏好：{profile_label}（{profile}）\n"
        f"筛选导向：{guidance}\n\n"
        "硬性要求：\n"
        "1. 只能基于输入报告重排和筛选，不得新增事实、数据或来源。\n"
        "2. 必须保留原报告里的来源和链接信息。\n"
        "3. 先输出“重点新闻（按优先级）”，再输出“风险/机会速览”。\n"
        "4. 内容简明，不重复长段落；总长度控制在原文的 40%-60%。\n"
        "5. 始终使用中文（专有名词可保留英文）。\n\n"
        "中性新闻报告如下：\n"
        f"{base_report}"
    )


def create_news_analyst(llm):
    def news_analyst_node(state):
        current_date = state["trade_date"]
        ticker = state["company_of_interest"]
        risk_profile = (state.get("risk_profile") or "balanced").strip().lower()
        if risk_profile not in RISK_PROFILE_LABELS:
            risk_profile = "balanced"
        graph_context = get_company_graph_store().build_prompt_context(ticker, max_hops=2)

        tools = [
            get_news,
            get_global_news,
            get_company_relationships,
            get_company_impact_context,
        ]

        system_message = (
            "You are a news researcher tasked with analyzing recent news and trends over the past week. Please write a comprehensive report of the current state of the world that is relevant for trading and macroeconomics. Use the available tools: get_news(query, start_date, end_date) for company-specific or targeted news searches, get_global_news(curr_date, look_back_days, limit) for broader macroeconomic news, and get_company_relationships/get_company_impact_context to evaluate cross-company transmission (supply chain, partnerships, holdings, and competition). Do not simply state the trends are mixed, provide detailed and finegrained analysis and insights that may help traders make decisions."
            + """ Make sure to append a Markdown table at the end of the report to organize key points in the report, organized and easy to read."""
            + " 请始终用中文回答（专有名词、股票代码、指标缩写可保留英文）。如需引用英文原句，可保留原文并用中文说明。"
            + " 请保留每条新闻的来源与链接（如有），并在报告末尾添加 Sources 列表（逐条列出链接）。"
            + " 报告中必须包含一个独立小节《关联公司影响链》，明确写出：新闻事件 -> 关系节点 -> 受影响公司/行业。"
            + " 这份报告会用于下游辩论和总结，请保持中性、完整，不要按风险偏好做倾斜筛选。"
            + f"\\n\\n{graph_context}"
        )

        prompt = ChatPromptTemplate.from_messages(
            [
                (
                    "system",
                    "You are a helpful AI assistant, collaborating with other assistants."
                    " Use the provided tools to progress towards answering the question."
                    " If you are unable to fully answer, that's OK; another assistant with different tools"
                    " will help where you left off. Execute what you can to make progress."
                    " If you or any other assistant has the FINAL TRANSACTION PROPOSAL: **BUY/HOLD/SELL** or deliverable,"
                    " prefix your response with FINAL TRANSACTION PROPOSAL: **BUY/HOLD/SELL** so the team knows to stop."
                    " You have access to the following tools: {tool_names}.\n{system_message}"
                    "For your reference, the current date is {current_date}. We are looking at the company {ticker}",
                ),
                MessagesPlaceholder(variable_name="messages"),
            ]
        )

        prompt = prompt.partial(system_message=system_message)
        prompt = prompt.partial(tool_names=", ".join([tool.name for tool in tools]))
        prompt = prompt.partial(current_date=current_date)
        prompt = prompt.partial(ticker=ticker)

        chain = prompt | llm.bind_tools(tools)
        result = chain.invoke(state["messages"])

        report = ""
        news_report_ui = ""

        if len(result.tool_calls) == 0:
            report = _message_content_to_text(result.content)
            news_report_ui = report
            if report.strip():
                try:
                    filter_prompt = _build_news_filter_prompt(report, risk_profile)
                    filtered = llm.invoke([HumanMessage(content=filter_prompt)])
                    filtered_text = _message_content_to_text(
                        getattr(filtered, "content", "")
                    )
                    if filtered_text.strip():
                        news_report_ui = filtered_text
                except Exception:
                    # 降级策略：筛选失败时返回原始中性新闻，避免中断主链路。
                    news_report_ui = report

        return {
            "messages": [result],
            "news_report": report,
            "news_report_ui": news_report_ui,
        }

    return news_analyst_node
