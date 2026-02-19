# AlphaNexus 协作开发规范与交接规格（spec）

## 1. 文档目的
本文件用于 **AI Coding 工具无缝接力**。任何新的 AI 或开发者在开始工作前，先阅读本文件，即可快速理解：

- 这个项目当前已实现到什么程度
- 我们是如何一步步把功能做出来的
- 接下来应该优先做什么
- 开发时有哪些约束与规范必须遵守

> 说明：当前实际开发主目录是 `/Users/anji/TradingAgents_副本`（品牌名 AlphaNexus）。
> 本文档放在 `/Users/anji/TradingAgents/spec_coding/` 用于统一沉淀规范与记录。

---

## 2. 项目现状总览（已实现）

### 2.1 分析主流程（Analysis）
已完成多智能体研究链路（市场/社媒/新闻/基本面 -> 投资辩论 -> 交易员 -> 风控辩论 -> 最终裁决），并支持中文输出约束。

核心代码：
- `/Users/anji/TradingAgents_副本/alphanexus/graph/trading_graph.py`
- `/Users/anji/TradingAgents_副本/alphanexus/graph/setup.py`
- `/Users/anji/TradingAgents_副本/alphanexus/graph/conditional_logic.py`

### 2.2 Web 端（统一入口）
已从 CLI 扩展为 Web 可用，并实现单页内子页面切换：
- `http://127.0.0.1:800x/`：研究页
- `http://127.0.0.1:800x/portfolio`：组合页（也可在根页面按钮切换）

核心代码：
- `/Users/anji/TradingAgents_副本/web/app.py`
- `/Users/anji/TradingAgents_副本/web/index.html`
- `/Users/anji/TradingAgents_副本/web/portfolio.html`
- `/Users/anji/TradingAgents_副本/web/portfolio_service.py`

### 2.3 研究页能力（已落地）
- SSE 流式进度
- 模型供应商选择 + 模型下拉选择（不强依赖手填 model 名）
- Markdown 渲染输出
- 来源链接展示（简化为时间 + 来源站点 + 可跳转）
- 报告下载（Markdown / JSON）

### 2.4 数据源与容错
- 可切换 `yfinance` / `alpha_vantage`
- Alpha Vantage 限流下的节流与缓存回退机制
- 明确错误反馈（rate limit、auth、network）

相关代码：
- `/Users/anji/TradingAgents_副本/alphanexus/dataflows/`
- `/Users/anji/TradingAgents_副本/web/portfolio_service.py`

### 2.5 Portfolio 子系统
已实现：
- 组合时间序列计算
- 图表（Line + Stacked Area + 二轴）
- 缓存回退标记 `(cached)`

### 2.6 公司关系图谱（最新增量）
已实现本地图谱型“轻量图数据库能力”（JSON-backed graph store）：
- 公司关系：供应链、合作、竞争、持股等
- 分析流程可调用图谱工具
- 前端展示图谱节点/边与影响链

核心代码：
- `/Users/anji/TradingAgents_副本/alphanexus/knowledge/company_graph.py`
- `/Users/anji/TradingAgents_副本/alphanexus/data/company_graph.json`
- `/Users/anji/TradingAgents_副本/alphanexus/agents/utils/company_graph_tools.py`
- `/Users/anji/TradingAgents_副本/web/app.py`
- `/Users/anji/TradingAgents_副本/web/index.html`

### 2.7 辩论过程显示（最新修复）
问题：前端只显示最终结论，未展示辩论原文。  
已修复：
- 后端回传 `investment_debate_state` / `risk_debate_state`
- SSE 增加 `type=debate` 事件
- 前端新增两块辩论面板实时渲染

涉及文件：
- `/Users/anji/TradingAgents_副本/web/app.py`
- `/Users/anji/TradingAgents_副本/web/index.html`

---

## 3. 协作开发过程（里程碑回放）
以下为本轮协作中的主要阶段（按功能推进顺序）：

### 阶段 A：基础迁移与品牌化
- 建立副本目录开发策略：在 `/Users/anji/TradingAgents_副本` 迭代，不污染原目录
- 项目命名与入口品牌统一为 `AlphaNexus`
- README 与 CLI 欢迎页改造

### 阶段 B：Web 化与可操作性增强
- 确认 FastAPI Web 可用
- 解决端口冲突与连接问题
- 引入供应商/API Key 前端输入，后端透传配置

### 阶段 C：研究页体验提升
- SSE 进度流
- 模型/供应商下拉
- Markdown 渲染
- 来源可视化与下载
- UI 重构（非模板化风格）

### 阶段 D：数据源与组合页
- Alpha Vantage MCP 接入
- 免费额度限制下的请求串行化与降级
- Portfolio 页面与图表完成

### 阶段 E：图谱增强（跨公司影响）
- 设计并落地公司关系图谱存储与查询
- 分析师链路接入图谱上下文
- 前端新增关系图谱展示

### 阶段 F：辩论可见性修复
- 通过浏览器 MCP 复现并定位“辩论未显示”问题
- 修复后端返回与前端渲染缺口

---

## 4. 运行与联调规范

### 4.1 默认开发目录
- 业务开发：`/Users/anji/TradingAgents_副本`
- 规范文档：`/Users/anji/TradingAgents/spec_coding`

### 4.2 启动命令
```bash
cd /Users/anji/TradingAgents_副本
uvicorn web.app:app --host 127.0.0.1 --port 8002
```

### 4.3 健康检查
- `GET /api/health`
- `GET /api/portfolio/health`

### 4.4 常见问题
- 端口占用：切换到 8002/8003
- Alpha Vantage 限流：降低频率 + 使用缓存
- API Key 缺失：检查 env 与前端输入

---

## 5. 开发规范（给后续 AI）

### 5.1 工作边界
- 除文档外，优先在 `/Users/anji/TradingAgents_副本` 修改代码。
- 不要把密钥写入仓库。

### 5.2 代码变更原则
- 一次只解决一类问题（功能/修复/重构分开）。
- 后端 schema 改动必须同步前端渲染。
- 新增能力优先补 API 与可观测日志，再补 UI。

### 5.3 提交规范
- 推荐前缀：`feat(...)` / `fix(...)` / `docs(...)` / `refactor(...)`
- 提交信息需说明“改了什么 + 为什么”。

### 5.4 验收要求
每次改动至少覆盖：
1. 服务能启动
2. 健康检查通过
3. 主流程可跑通（至少一个 ticker）
4. 前端关键模块可见且有数据

---

## 6. 当前待办（建议优先级）

### P0（高优先）
1. 图谱数据质量治理：关系来源、时间戳、置信度标准化
2. 辩论过程结构化展示：按轮次分段、角色过滤、折叠视图
3. 结论-证据对齐：每个关键结论绑定来源证据 ID

### P1（中优先）
1. Analysis 自动评测面板（引用覆盖率、无来源断言率、耗时）
2. 图谱与新闻联动（点击关系边 -> 关联新闻）
3. 异常可恢复策略统一（网络抖动/限流）

### P2（后续）
1. 图数据库升级（可选 Neo4j）
2. 实盘账户接口评估（例如 IBKR）

---

## 7. 新 AI 接手模板（复制即用）

```text
你将继续开发 AlphaNexus。
先阅读：/Users/anji/TradingAgents/spec_coding/spec.md 与 /Users/anji/TradingAgents/spec_coding/CHANGELOG_AI.md。
实际代码目录在 /Users/anji/TradingAgents_副本。
请先做：
1) 启动 web.app 并通过 /api/health 验证；
2) 跑一次研究流程确认前端可见辩论面板；
3) 再开始实现当前最高优先级任务。
所有变更完成后请给出：改动文件列表、验证步骤、风险点、下一步建议。
```

