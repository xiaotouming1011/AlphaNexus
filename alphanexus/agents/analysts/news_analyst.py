from langchain_core.prompts import ChatPromptTemplate, MessagesPlaceholder
import time
import json
from alphanexus.agents.utils.agent_utils import (
    get_news,
    get_global_news,
    get_company_relationships,
    get_company_impact_context,
)
from alphanexus.knowledge import get_company_graph_store
from alphanexus.dataflows.config import get_config


def create_news_analyst(llm):
    def news_analyst_node(state):
        current_date = state["trade_date"]
        ticker = state["company_of_interest"]
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

        if len(result.tool_calls) == 0:
            report = result.content

        return {
            "messages": [result],
            "news_report": report,
        }

    return news_analyst_node
