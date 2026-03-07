# AlphaNexus 工程化改造清单

项目路径：`/Users/anji/Documents/GitHub/AlphaNexus`

目标：把当前 AlphaNexus 从“功能完整、可上线的 AI 项目”进一步提升为“结构清晰、可测试、可维护、可持续迭代的工程化项目”。

当前判断基于以下事实：
- 项目已有 CLI + Web + 部署资产（Nginx / systemd / Jenkins）
- Web 入口、CLI 入口、核心图流程都已可用
- 只有一个明显测试文件：`/Users/anji/Documents/GitHub/AlphaNexus/test.py`
- 仓库当前分支 `main` 落后远端 12 个提交

---

## 一、当前项目的优点

### 1. 已经不是 demo
你这个项目已经具备：
- 明确业务目标
- 可运行 Web 服务
- CLI 入口
- 可部署脚本
- CI/CD 基础资产
- 多模型与外部数据集成

这说明你的项目已经跨过了“纯原型”阶段。

### 2. 功能闭环比较完整
从 README 和入口代码看，已经包含：
- 多 agent 分析流程
- Web SSE 输出
- Portfolio 子系统
- LLM provider 适配
- 图谱能力
- 生产部署链路

这类项目最适合拿来补工程能力，因为不是从 0 开始。

---

## 二、当前最明显的工程问题

## 1. 入口层过重

### 现象
- `main.py` 直接承担配置拼装、图初始化、执行逻辑
- `web/app.py` 明显过大，承担了：
  - 配置读取
  - 静态资源读取
  - 路由
  - 股票名称映射
  - 参数归一化
  - 业务逻辑组织
  - 外部服务调用

### 问题本质
入口文件不应该承担太多业务逻辑，否则：
- 难测试
- 难维护
- 难复用
- 改动风险大

### 改造建议
拆成：
```text
web/
  app.py                # 只保留 app 初始化与路由注册
  routers/
    run.py
    portfolio.py
    graph.py
    health.py
  schemas/
    run.py
    portfolio.py
  services/
    analysis_service.py
    portfolio_service.py
    graph_service.py
  dependencies/
    settings.py
    providers.py
```

目标：
- `app.py` 不再承载大量具体逻辑
- 每条 API 有独立 router
- 业务逻辑下沉到 service

优先级：`P0`

---

## 2. 配置体系还不够统一

### 现象
项目里当前有：
- `.env`
- `load_dotenv()`
- `DEFAULT_CONFIG`
- Web 内局部配置
- main.py 内手写覆盖配置

### 风险
会出现：
- CLI 和 Web 行为不一致
- 配置来源不明确
- 线上问题难定位
- 新增配置项时容易分散到多个地方

### 改造建议
统一配置层：
```text
alphanexus/core/settings.py
```
由它统一负责：
- 环境变量读取
- 默认值
- 开发/生产环境差异
- LLM provider 默认策略
- 数据 vendor 默认策略

建议规则：
- 所有配置只允许从 `settings` 进入业务逻辑
- 禁止在路由层和入口层直接拼配置
- `DEFAULT_CONFIG` 与环境变量覆盖关系写清楚

优先级：`P0`

---

## 3. 缺少系统化测试

### 现象
当前只看到：
- `test.py`

没有看到：
- `tests/unit`
- `tests/integration`
- `tests/e2e`

### 风险
你后面每次改：
- Prompt
- 图流程
- 路由
- SSE
- Portfolio 数据逻辑

都容易出现回归，但你没有低成本发现机制。

### 改造建议
建立测试目录：
```text
tests/
  unit/
  integration/
  fixtures/
  e2e/
```

第一批必须补的测试：

#### 单元测试
- ticker 归一化逻辑
- risk profile 归一化逻辑
- 日期处理逻辑
- 配置加载逻辑
- query 参数校验逻辑

#### 集成测试
- `GET /api/health`
- `POST /api/run`
- `POST /api/run/stream`
- `GET/POST /api/portfolio/*`

#### 端到端验证
- 从请求输入到 SSE 输出主流程
- Portfolio 数据加载主流程

优先级：`P0`

---

## 4. 领域逻辑与基础设施逻辑耦合较重

### 现象
在 `web/app.py` 里既有：
- HTTP 层逻辑
- 业务判断
- 外部接口调用
- 图谱读取
- yfinance / Alpha Vantage 相关逻辑

### 风险
这会导致：
- HTTP 接口改动影响业务层
- 外部服务替换成本高
- mock 测试困难

### 改造建议
引入分层：
```text
alphanexus/
  core/           # 配置、日志、异常、常量
  domain/         # 核心领域对象与规则
  services/       # 业务服务
  adapters/       # 外部依赖适配器（LLM / 数据 / 图谱）
```

最少先拆出：
- `adapters/market_data/`
- `adapters/llm/`
- `adapters/graph_store/`
- `services/analysis_service.py`
- `services/portfolio_service.py`

优先级：`P1`

---

## 5. 异常治理还不够集中

### 现象
已有 `DataflowError` 等异常类型，这是好事。
但从结构看，异常体系还没有完全统一到：
- 路由层如何转 HTTP 响应
- 服务层如何区分可恢复/不可恢复错误
- 外部依赖失败如何记录上下文

### 改造建议
建立统一异常策略：

#### 在 `core/exceptions.py` 中明确分类
- 用户输入错误
- 配置错误
- 外部依赖错误
- 业务规则错误
- 系统内部错误

#### 在 FastAPI 中增加统一异常处理器
输出统一格式：
```json
{
  "error_code": "...",
  "message": "...",
  "request_id": "..."
}
```

#### 所有外部调用必须记录
- provider
- 参数摘要
- 耗时
- 错误类型

优先级：`P1`

---

## 6. 可观测性还可以进一步加强

### 现象
项目已有健康检查和部署资产，但从仓库结构看，可观测性文档和日志策略没有明显收敛。

### 改造建议
补 3 层可观测性：

#### 日志
至少区分：
- access log
- application log
- provider/data source 调用日志
- error log

#### 指标
建议加：
- 每次分析耗时
- SSE 总时长
- provider 成功率/失败率
- Alpha Vantage 回退命中率
- portfolio 请求耗时

#### 跟踪
即便不接 OpenTelemetry，至少也要有：
- request_id
- session_id
- run_id

优先级：`P1`

---

## 7. 文档已经有，但缺“工程内部文档”

### 现象
已有：
- `README.md`
- `docs/deploy-ubuntu.md`
- `docs/PRD_v1.md`

还缺：
- 架构说明
- 配置说明
- 测试说明
- 故障排查说明

### 改造建议
新增：
- `docs/ARCHITECTURE.md`
- `docs/CONFIG.md`
- `docs/TESTING.md`
- `docs/TROUBLESHOOTING.md`

优先级：`P1`

---

## 8. CLI 和 Web 可能共享能力不足

### 现象
当前 CLI 和 Web 都调用核心图流程，但入口层看起来各自组织逻辑较多。

### 风险
如果后面：
- 新增配置项
- 改默认模型
- 改分析参数

CLI 和 Web 可能逐渐漂移。

### 改造建议
提取统一用例层，例如：
```text
alphanexus/usecases/run_analysis.py
alphanexus/usecases/build_portfolio.py
```

CLI 和 Web 都只调 usecase，不直接各写一套流程。

优先级：`P1`

---

## 9. 前后端资源组织可以再收敛

### 现象
`web/` 下同时放了：
- FastAPI app
- html 文件
- portfolio service
- `antinertia_frontend/dist`

### 风险
前后端边界会越来越模糊，后面构建、部署、版本管理容易混乱。

### 改造建议
方案二选一：

#### 方案 A：继续单仓单服务
则至少明确：
- `frontend/` 放源代码
- `web/static/` 放构建产物
- 后端不直接混放前端源码与 dist

#### 方案 B：前后端子项目化
```text
backend/
frontend/
```

如果短期不想大改，先做方案 A。

优先级：`P2`

---

## 10. 发布链路有了，但质量门禁还不够强

### 现象
仓库已带 Jenkinsfile 和 deploy 脚本，这是好基础。
但如果没有自动测试和明确门禁，CI/CD 更像“自动部署”，不是“质量保障”。

### 改造建议
在 Pipeline 里强制：
- lint
- unit test
- import smoke test
- health check
- 部署后验证

中长期再补：
- SSE smoke test
- portfolio API smoke test

优先级：`P1`

---

## 三、推荐的改造顺序

## 第一阶段：1 周内完成（必须）

### P0-1：拆 `web/app.py`
目标：把路由、schema、service 分开。

### P0-2：统一配置层
目标：CLI / Web / 部署共享同一套配置来源。

### P0-3：补测试基础设施
目标：建立 `tests/` 目录并补第一批核心测试。

### P0-4：把 Jenkins 门禁接上测试
目标：没有测试通过就不允许继续发布。

---

## 第二阶段：1-2 周完成（强烈建议）

### P1-1：建立异常与日志统一策略
### P1-2：补可观测性与 request_id / run_id
### P1-3：补内部文档
### P1-4：提取 CLI / Web 共享 usecase

---

## 第三阶段：后续优化

### P2-1：前后端边界收敛
### P2-2：评估脚本与回归评测体系
### P2-3：性能与小机器资源优化

---

## 四、最适合你当前阶段的“实操版本”

如果你只做 4 件事，优先做这 4 件：

1. 把 `web/app.py` 拆掉一半以上逻辑
2. 建 `tests/unit` 和 `tests/integration`
3. 做统一 `settings.py`
4. 在 Jenkins 里加测试门禁

这 4 件做完，你的项目工程成熟度会明显上一个台阶。

---

## 五、你在面试里可以怎么讲这次改造

你可以这样表达：

“我最初更偏向快速把功能做出来，后面我开始针对 AlphaNexus 做工程化改造，重点解决了入口过重、配置分散、测试缺失和发布门禁不足的问题。具体上，我把 Web 层拆成 router/service/schema，统一了配置管理，补了核心 API 和业务链路测试，并把测试接入了 Jenkins 发布流程。这样项目不仅能跑，而且能更稳定地迭代和上线。”

这段表达对技术面试很有效，因为它体现的是：
- 你知道自己以前的问题
- 你有系统补工程能力的意识
- 你能从“会做功能”提升到“会做系统”

---

## 六、补充提醒

当前仓库状态：
- `main` 落后 `origin/main` 12 个提交

在你开始改造前，建议先确认：
1. 是否先拉取远端最新代码
2. 是否新建改造分支（建议使用 `codex/...` 或你自己的工程化分支）
3. 是否要把改造过程按阶段提交到远端仓库
