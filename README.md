# AlphaNexus

## 致谢与来源

参考并学习了 Tauric Research 团队创造的多智能体交易框架 [TradingAgents](https://github.com/TauricResearch/TradingAgents.git)，本仓库为个人学习目的的改造版本。

> 重要提示：本项目仅用于学习与研究，不构成任何投资建议。

---

## 项目简介

AlphaNexus 是一个多智能体交易研究项目。系统会让市场、新闻、情绪、基本面等分析角色协同输出报告，再经过研究与风控流程，给出最终交易结论。

当前仓库同时提供：

- CLI 交互式运行
- Web 研究页（流式输出、来源展示、报告导出）
- Web 组合页（Portfolio Tracker，可视化组合价值与权重）

---

## 当前功能进度

- 多供应商 LLM：OpenAI / Anthropic / Google / xAI / OpenRouter / Ollama
- 数据源切换：yfinance / Alpha Vantage
- 研究页：模型下拉选择、SSE 流式进度、Markdown 渲染、来源链接展示、报告导出（Markdown / JSON）
- 组合页：可在统一入口通过顶部按钮切换，也可直达 `http://127.0.0.1:8001/portfolio`
- 组合页图表：Line（组合总值/个股切换）+ Stacked Area（权重）+ Secondary Axis（总值）
- 组合页容错：Alpha Vantage MCP 失败时回退本地缓存，并在图例标记 `(cached)`

---

## 目录结构

```text
AlphaNexus/
├─ alphanexus/                  # 核心多智能体框架
│  ├─ agents/
│  ├─ dataflows/
│  ├─ graph/
│  └─ llm_clients/
├─ cli/                         # CLI 入口
├─ web/                         # FastAPI + Web 前端
│  ├─ app.py
│  ├─ index.html
│  ├─ portfolio.html
│  └─ portfolio_service.py
├─ assets/
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

```bash
cp .env.example .env
```

可配置项（按需）：

```env
OPENAI_API_KEY=
ANTHROPIC_API_KEY=
GOOGLE_API_KEY=
XAI_API_KEY=
OPENROUTER_API_KEY=
ALPHA_VANTAGE_API_KEY=
PORTFOLIO_AV_MIN_INTERVAL_SECONDS=1.5
```

说明：

- Web 表单也支持临时输入 API Key，不写入磁盘
- `PORTFOLIO_AV_MIN_INTERVAL_SECONDS` 用于控制组合页请求间隔，默认 `1.5` 秒

---

## 启动方式

### Web

```bash
uvicorn web.app:app --host 127.0.0.1 --port 8001
```

访问地址：

- 统一入口：`http://127.0.0.1:8001/`
- 组合页直达：`http://127.0.0.1:8001/portfolio`

### CLI

```bash
python -m cli.main
```

---

## Web API

- `POST /api/run`：同步运行一次研究流程
- `POST /api/run/stream`：SSE 流式运行研究流程
- `GET /api/health`：服务健康检查
- `GET /api/portfolio/data`：用默认参数获取组合数据
- `POST /api/portfolio/data`：自定义 symbols / allocation / total_value / key
- `POST /api/portfolio/refresh`：刷新组合数据
- `GET /api/portfolio/health`：组合服务健康检查

---

## Portfolio 数据策略（当前实现）

- 使用 Alpha Vantage MCP 的 `TIME_SERIES_DAILY`，固定 `outputsize=compact`
- 每只股票仅使用最新约 100 个交易日数据
- 请求为串行节流，避免并发触发免费额度瞬时限制
- Live 请求失败时读取本地缓存：`results/portfolio_cache/`

说明：即使做了串行与缓存，Alpha Vantage 免费计划仍有 `25 requests/day` 限制。

---

## Python 调用示例

```python
from alphanexus.default_config import DEFAULT_CONFIG
from alphanexus.graph.trading_graph import AlphaNexusGraph

config = DEFAULT_CONFIG.copy()
config["llm_provider"] = "openai"
config["deep_think_llm"] = "gpt-5.2"
config["quick_think_llm"] = "gpt-5-mini"

graph = AlphaNexusGraph(debug=False, config=config)
state, decision = graph.propagate("NVDA", "2026-01-15")
print(decision)
```

---

## 免责声明

本项目仅用于个人学习与研究，不构成投资建议。请自行评估风险并独立决策。

---

## License

本仓库遵循项目内 `LICENSE`。如你继续分发或商用，请确保同时满足上游许可证要求。

---

## 联系

如有侵权，请联系：

<img src="assets/contact_qr.jpg" alt="contact" width="25%">
