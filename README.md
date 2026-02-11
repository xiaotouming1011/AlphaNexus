参考，使用了Tauric Research 团队创造多智能体交易框架 TradingAgents，为个人学习目的，针对个人学习方向进行修改

# AlphaNexus

AlphaNexus 是一个基于多智能体协作的交易研究实验项目，面向**个人学习与研究**。项目使用多角色（分析师、研究员、交易员、风控）对同一标的进行多角度分析与辩论，并输出最终交易建议与报告。

> 重要提示：本项目仅用于研究与学习，不构成任何投资建议。

---

## 核心能力

- 多智能体协作流程（市场 / 新闻 / 情绪 / 基本面 → 多空辩论 → 风控裁决）
- 支持多家 LLM 供应商（OpenAI / Anthropic / Google / xAI / OpenRouter / Ollama）
- 支持数据源切换（yfinance / Alpha Vantage）
- Web 端（AlphaNexus UI）支持：
  - 供应商与模型下拉选择
  - 数据源切换与 API Key 输入
  - SSE 流式进度输出
  - Markdown 渲染报告
  - 信息来源链接展示与导出

---

## 目录结构

```
AlphaNexus/
├─ web/                        # Web 端（FastAPI + SSE + 前端）
│  ├─ app.py
│  └─ index.html
├─ cli/                        # 交互式 CLI
├─ tradingagents/              # 核心多智能体框架
│  ├─ agents/                  # 各类智能体
│  ├─ dataflows/               # 数据源适配（yfinance/alpha_vantage）
│  ├─ graph/                   # LangGraph 工作流
│  └─ llm_clients/             # 多供应商 LLM 客户端
├─ main.py                     # 示例脚本
├─ requirements.txt
└─ pyproject.toml
```

---

## 快速开始

### 1) 安装依赖

```bash
pip install -r requirements.txt
```

### 2) 配置环境变量（可选）

项目支持将 Key 通过 Web 表单传入，但也可以写入 `.env`：

```bash
cp .env.example .env
```

示例（按需填写）：
```
OPENAI_API_KEY=...
ANTHROPIC_API_KEY=...
GOOGLE_API_KEY=...
XAI_API_KEY=...
OPENROUTER_API_KEY=...
ALPHA_VANTAGE_API_KEY=...
```

---

## Web 端（AlphaNexus）

```bash
uvicorn web.app:app --host 127.0.0.1 --port 8001
```

浏览器访问：
```
http://127.0.0.1:8001
```

Web 端支持：
- 供应商/模型选择（下拉）
- 数据源切换（yfinance / Alpha Vantage）
- SSE 流式进度输出
- Markdown 渲染报告
- 结果导出（Markdown / JSON）
- 信息来源链接展示（便于人工核验）

---

## CLI 使用

```bash
python -m cli.main
```

可在 CLI 中选择标的、日期、研究深度、模型等参数。

---

## Python 调用示例

```python
from tradingagents.graph.trading_graph import TradingAgentsGraph
from tradingagents.default_config import DEFAULT_CONFIG

config = DEFAULT_CONFIG.copy()
config["llm_provider"] = "openai"
config["deep_think_llm"] = "gpt-5.2"
config["quick_think_llm"] = "gpt-5-mini"

# 数据源设置
config["data_vendors"] = {
    "core_stock_apis": "yfinance",
    "technical_indicators": "yfinance",
    "fundamental_data": "yfinance",
    "news_data": "yfinance",
}

ta = TradingAgentsGraph(debug=False, config=config)
_, decision = ta.propagate("NVDA", "2026-01-15")
print(decision)
```

---

## 数据源说明

- **yfinance**：无需 API Key，但可能出现限流/超时。
- **Alpha Vantage**：需要 `ALPHA_VANTAGE_API_KEY`，稳定性更高。

---

## 常见问题

**Q: yfinance 报错 Rate Limit？**
A: 这是常见限制，可切换到 Alpha Vantage 并填写 API Key。

**Q: Web 端报 SSL 错误？**
A: 通常是证书或网络问题，可尝试更新 `certifi` 或切换网络。

---

## 免责声明

本项目仅用于个人研究与学习，不构成任何投资建议或交易指引。请自行承担使用本项目带来的风险。

---

## License

本项目基于上游开源项目进行学习性改造，遵循原项目 LICENSE。

---

## 联系

如有侵权，请联系：

![contact](assets/contact_qr.jpg)
