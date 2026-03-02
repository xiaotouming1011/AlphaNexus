# AlphaNexus

> 重要提示：本项目仅用于学习与研究，不构成任何投资建议。

---

## 项目简介

AlphaNexus 是一个多智能体股票投研系统，核心目标是把「信息收集 → 分析 → 辩论 → 风控 → 结论」做成可追溯的闭环，而不是让单一模型一次性给出黑箱答案。

### 系统架构

基于 **StateGraph** 做多节点编排：

```
┌─────────────┐    ┌─────────────┐    ┌─────────────┐    ┌─────────────┐    ┌─────────────┐
│  信息收集    │ → │   分析员    │ → │  多空辩论   │ → │  三方风控   │ → │  风险裁判   │
│             │    │             │    │             │    │             │    │             │
│ • 市场数据   │    │ • 市场分析   │    │ • Bull观点 │    │ • 激进方    │    │             │
│ • 社媒情绪   │    │ • 社媒情绪   │    │ • Bear观点 │    │ • 中方      │ → │ Buy/Sell/  │
│ • 新闻宏观   │    │ • 新闻宏观   │    │             │    │ • 保守方    │    │    Hold    │
│ • 基本面    │    │ • 基本面    │    │  (多轮辩论) │    │  (三方辩论) │    │             │
└─────────────┘    └─────────────┘    └─────────────┘    └─────────────┘    └─────────────┘
```

1. **四类专业分析员**产出独立报告：市场技术面、社媒情绪、新闻宏观、基本面
2. **多空投资辩论**：Bull/Bear 双方基于报告进行多轮辩论
3. **交易员生成计划**：基于辩论结果形成交易方案
4. **三方风控辩论**：激进/中性/保守三方对计划进行风险评估
5. **风险裁判输出**：最终给出 Buy/Sell/Hold 决策及置信度

整个过程通过 **SSE 实时回传**进度与辩论记录，用户可以看到每一步的依据。

### 产品增强

**投资风格模块**
- 支持五档风险偏好配置
- 偏好仅注入新闻筛选层，避免影响辩论和最终决策的中立性

**前端交互升级**
- 独立介绍页展示系统架构
- 可视化流程图实时追踪分析进度
- 市场实时预览降低用户等待焦虑

### 工程稳定性

多层容错机制：
- **LLM 层**：环境变量回退、多供应商 fallback
- **数据层**：数据源 vendor fallback、Alpha Vantage 多 key 轮换
- **服务层**：MCP + 缓存降级机制，减少外部 API 限流导致的中断

### 核心能力体现

不仅能调用 LLM，而是把**多角色协作、决策透明、系统可靠性、用户体验**整合在一个完整产品中落地。

---

## 功能概览

### 研究页（Web）

- 股票代码/公司名识别（内置热门美股名单）
- 分析模块四选一：市场分析 / 社媒情绪 / 新闻宏观 / 基本面
- LLM 供应商与模型选择：OpenAI / Anthropic / Google / xAI / OpenRouter / Ollama
- 数据源切换：Alpha Vantage / yfinance
- Markdown 渲染输出、报告下载（Markdown/JSON）
- Sources 区域集中展示来源链接（可直接跳转外部站点）

### 组合页（Web Portfolio）

- 组合总值与个股价值折线图切换
- 权重堆叠面积图 + 组合总值辅助线
- Alpha Vantage 串行限流请求 + 失败回退本地缓存
- 缓存命中会在图例标记 `(cached)`

### 图谱能力

- 内置公司关系图数据库（`alphanexus/data/company_graph.json`）
- 支持跨公司影响链路展示，辅助新闻/事件外溢判断

---

## 目录结构

```text
AlphaNexus/
├─ alphanexus/                  # 核心多智能体框架
│  ├─ agents/                   # 各类分析员智能体
│  ├─ dataflows/                # 数据流处理
│  ├─ graph/                    # StateGraph 编排
│  ├─ knowledge/                # 知识库
│  └─ llm_clients/              # 多供应商 LLM 客户端
├─ cli/                         # CLI 入口
├─ web/                         # FastAPI + Web 前端
│  ├─ app.py
│  ├─ index.html
│  ├─ portfolio.html
│  └─ portfolio_service.py
├─ deploy/                      # 生产部署配置
├─ docs/                        # 文档
├─ spec_coding/                 # 协作文档（spec / changelog）
├─ assets/
├─ requirements.txt
└─ pyproject.toml
```

---

## 快速开始

### 1. 安装依赖

```bash
pip install -r requirements.txt
```

### 2. 配置环境变量（可选但推荐）

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
ALPHANEXUS_GRAPH_DB_PATH=
```

说明：

- Web 表单支持临时输入 API Key，不写入磁盘
- 若前端不填 Key，后端自动读取服务端环境变量
- `PORTFOLIO_AV_MIN_INTERVAL_SECONDS` 控制组合页 Alpha Vantage 请求间隔
- `ALPHANEXUS_GRAPH_DB_PATH` 可替换自定义图谱文件

---

## 启动方式

### Web

```bash
uvicorn web.app:app --host 127.0.0.1 --port 8001
```

如果 `8001` 被占用，可改为 `8002`：

```bash
uvicorn web.app:app --host 127.0.0.1 --port 8002
```

访问地址：

- 统一入口：`http://127.0.0.1:8001/`（或 `8002`）
- 组合页直达：`http://127.0.0.1:8001/portfolio`

### CLI

```bash
python -m cli.main
```

---

## 生产部署（Ubuntu + Nginx + Jenkins）

已提供完整部署资产与操作手册：

- 手册：`docs/deploy-ubuntu.md`
- systemd：`deploy/systemd/alphanexus-web.service`
- Nginx：`deploy/nginx/alphanexus.conf`
- Pipeline：`deploy/Jenkinsfile`
- 发布脚本：`deploy/scripts/deploy.sh`
- 回滚脚本：`deploy/scripts/rollback.sh`

---

## Web API

- `POST /api/run`：同步运行研究流程
- `POST /api/run/stream`：SSE 流式运行研究流程
- `GET /api/health`：服务健康检查
- `GET /api/company-graph/{ticker}`：公司关系图谱快照
- `GET /api/portfolio/data`：默认参数获取组合数据
- `POST /api/portfolio/data`：自定义 symbols/allocation/total_value/key
- `POST /api/portfolio/refresh`：刷新组合数据
- `GET /api/portfolio/health`：组合服务健康检查

---

## 数据与日期语义

- `trade_date` 使用美东时间（ET）
- 语义为「截至该日期」的分析窗口（不是仅当天）
- 若选择休市日：允许分析继续进行；价格类数据可能参考最近交易日
- Alpha Vantage 免费计划有额度限制（典型为 `25 requests/day`，并有频率限制）

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

本仓库遵循项目内 `LICENSE`。如继续分发或商用，请确保同时满足上游许可证要求。

---

## 致谢与来源

参考并学习了 Tauric Research 团队创造的多智能体交易框架 [TradingAgents](https://github.com/TauricResearch/TradingAgents.git)，本仓库为个人学习目的的改造版本。

---

## 联系

如有侵权，请联系：

<img src="assets/contact_qr.jpg" alt="contact" width="25%">
