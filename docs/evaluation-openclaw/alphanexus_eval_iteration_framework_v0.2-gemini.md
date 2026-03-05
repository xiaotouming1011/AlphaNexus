# AlphaNexus 多智能体投研系统评测与迭代框架 v0.2

> **文档说明**：本版本（v0.2）为 AlphaNexus 投研多智能体系统的**标准化执行手册**。相较于 v0.1 的框架性定义，本版本全面工程化，提供可直接挂载至 CI/CD 流水线、监控大盘及人工标注系统的操作规范与配置模板。

---

## 1. RACI 角色与职责矩阵

在系统的评测、迭代与发布闭环中，明确各团队职责：

| 任务域 | QA (评测工程) | Algo (算法研发) | Eng (后端架构) | Quant (投研专家) | PM (产品经理) |
| :--- | :---: | :---: | :---: | :---: | :---: |
| **评测集建设与打标** | A | C | I | **R** | C |
| **LLM-Judge Prompt 调优** | **R** | A | I | C | I |
| **评测流水线开发与维护** | A | I | **R** | I | I |
| **Agent / 业务 Prompt 迭代** | C | **R** | I | C | A |
| **回测框架与行情数据接入** | I | C | **R** | A | I |
| **线上 Badcase 定位与修复** | **R** | A | A | C | I |
| **发版门禁与灰度审批** | A | C | C | I | **R** |

*(R: 负责/执行; A: 问责/拍板; C: 咨询/提供意见; I: 知情)*

---

## 2. 核心指标字典 (Metric Dictionary)

所有指标必须落盘并具备量化阈值。以下为 v0.2 核心监控字典：

| 指标名称 | 定义与计算公式 | 采样窗口 | 阈值 (Redline) | 告警规则 | 责任人 (Owner) |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **TTFT (首字延迟)** | `Time(First Token) - Time(Request_Received)` | 实时 (P95) | ≤ 1.2s | 连续 3 分钟 P95 > 1.5s 触发 P2 告警 | Eng |
| **Format Success (格式合规)** | `Count(Valid JSON or Markdown) / Count(Total Requests)` | 1小时 | ≥ 99.5% | 1小时内失败率 > 0.5% 触发 P1 告警 | Algo |
| **Source Acc (溯源准确率)** | `Count(Valid Citations) / Count(Total Citations)` | 日级离线 | ≥ 95.0% | T+1 报表低于 95% 阻断当日发版 | QA |
| **Debate Win Rate (辩论胜率)** | `Count(Judge Score ≥ 4) / Count(Total Evals)` | 评测任务 | ≥ 85.0% | PR Gate 低于基线 2% 阻断 Merge | Algo |
| **Decision Valid (决策有效)** | `Count(Output ∈ {Buy,Sell,Hold}) / Count(Total)` | 实时 | 100% | 出现任何非枚举值触发 P0 告警 | Eng/Algo |

---

## 3. LLM-as-a-Judge 自动化评审方案

全面引入高阶模型自动化评审，替代 80% 的日常回归人工测试。

### 3.1 评审架构设计
*   **双裁判机制 (Dual-Judge)**：采用 `GPT-4o` 与 `Claude-3.5-Sonnet` 作为双裁判。
*   **一致性处理**：
    *   若双裁判评分差异 ≤ 1 分，取平均值。
    *   若双裁判评分差异 ≥ 2 分（如一个给 2 分，一个给 4 分），判定为“争议用例 (Dispute)”，自动推送到飞书/钉钉群，要求 **Quant 专家介入人工复核**。
*   **抽样复核**：每月随机抽取 5% 的 LLM-Judge 一致用例由人工盲评，用于校准裁判 Prompt。

### 3.2 裁判 Rubric 与 JSON 示例
裁判 Prompt 强制要求输出 JSON，包含子维度得分与分析。

**【示例 1：LLM-Judge 评测输出结构 (JSON)】**
```json
{
  "trace_id": "eval-req-883a92b",
  "judge_model": "gpt-4o-2024-05-13",
  "scores": {
    "debate_coherence": 4, 
    "risk_control_rationality": 5,
    "info_extraction": 4
  },
  "overall_score": 4.3,
  "rationale": {
    "debate_coherence": "多空双方围绕TSLA毛利率下滑进行了有效反驳，空方指出了降价影响，但多方未能充分引用FSD V12的进展，扣1分。",
    "risk_control_rationality": "风控Agent成功拦截了多方建议的80%过重仓位，并强制修改为20%试仓，止损线设置合理。"
  },
  "hallucination_flag": false,
  "needs_human_review": false
}
```

---

## 4. 回测与交易指标映射 (Backtest & Agent Quality)

将纯文本的“辩论结果/交易计划”转化为结构化信号，与历史 K 线（如 5min/日线）对接，将传统量化指标映射为 Agent 模型质量指标。

| 金融交易指标 | 映射的 Agent 质量评估维度 | 分析与调优方向 (Actionable) | 基线要求 |
| :--- | :--- | :--- | :--- |
| **PnL / 收益率** | **整体多空辩论方向的正确性**。 | 收益为负且长期跑输基准（如 SPY），需调整信息提取 Agent 的权重，或引入更多宏观/行业基本面 API 数据。 | 跑赢大盘基准 |
| **Max Drawdown (最大回撤)** | **风控 Agent 的拦截有效性与止损逻辑**。 | 回撤过大说明风控 Agent 未能及时触发平仓/减仓建议，需增强风控 Prompt 的“硬性止损阈值”规则。 | ≤ 15% |
| **Win Rate (胜率)** | **交易计划 Agent 的点位精度**。 | 胜率低说明买入/卖出时机判断模糊，需向 Few-shot 中注入更多真实的“量价时空”优秀 QA 案例。 | ≥ 55% |
| **Profit Factor (盈亏比)** | **多空双方博弈的深度与赔率意识**。 | 盈亏比 < 1 说明“止盈过早，止损过晚”，需检查多方 Agent 的信心指数 (Conviction Level) 算法。 | ≥ 1.5 |

---

## 5. 数据与标签治理体系

数据的质量直接决定 Few-shot 和 Fine-tuning 的上限。

### 5.1 标注规范与一致性 (IAA)
*   **打标要求**：投研团队 (Quant) 每周打标 L2/L3 数据。
*   **Kappa 检验**：引入交叉打标机制，计算 Cohen's Kappa 系数。
    *   `Kappa > 0.8`：标注质量极高，直接入库。
    *   `0.6 < Kappa ≤ 0.8`：及格，定期 Review 对齐标准。
    *   `Kappa < 0.6`：打标无效，召开对齐会议，废弃该批次标签。

### 5.2 线上 Badcase 治理结构
在线上运营闭环中，Badcase 必须高度结构化，以便后续脚本自动归档入 Regression 库。

**【示例 2：线上 Badcase 记录结构 (JSON)】**
```json
{
  "case_id": "bc-202311-042",
  "ticker": "NVDA",
  "risk_profile": "conservative",
  "reported_by": "user_downvote",
  "severity": "P1",
  "issue_category": "Risk Control Bypass",
  "root_cause_attribution": {
    "layer": "workflow_orchestration",
    "description": "风控Agent提出了将仓位降至10%的建议，但在最终决策Agent中该建议被忽略，依然输出了30%的买入建议。"
  },
  "fix_action": "修改决策Agent的System Prompt，强制校验风控节点的强限制条件；增加 workflow level 的断言拦截。",
  "regression_dataset": "AlphaNexus-Eval-v202311-L2",
  "status": "fixed"
}
```

---

## 6. 评测流水线集成 (CI/CD Pipeline)

将评测嵌入工程研发的血液中，设立三道防线：

1.  **PR Gate (代码/Prompt 合并门禁)**：
    *   触发条件：代码或 Prompt 变更提交 PR。
    *   执行内容：运行 L1 冒烟测试（50条并发，耗时 < 3 分钟）。
    *   阻断条件：TTFT > 1.5s 或 指令遵循率 < 100%。
2.  **Nightly (每日离线回归)**：
    *   触发条件：每晚 02:00 定时执行。
    *   执行内容：跑通全量 L2 测试集（500条），调用双裁判 LLM-Judge。
    *   输出：生成 `[YYYY-MM-DD] AlphaNexus 质量检测报告` 发送至飞书。
3.  **Online (线上实时监控)**：
    *   流式监听 SSE 连接状态与大模型 API 状态。

**【示例 3：CI/CD 评测任务配置 (YAML)】**
```yaml
name: AlphaNexus-Eval-Pipeline
on:
  pull_request:
    branches: [ "main", "release/*" ]
jobs:
  smoke_test_L1:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout Code
        uses: actions/checkout@v3
      - name: Setup Eval Env
        run: pip install -r eval_requirements.txt
      - name: Run L1 Eval Task
        env:
          OPENAI_API_KEY: ${{ secrets.EVAL_OPENAI_KEY }}
          EVAL_DATASET: "s3://alphanexus-eval/l1-smoke-latest.json"
        run: |
          python run_eval.py \
            --dataset $EVAL_DATASET \
            --judge "gpt-4o" \
            --thresholds "format=1.0,ttft=1.5,win_rate=0.9" \
            --fail-fast
```

---

## 7. 发布与线上治理

### 7.1 灰度发布策略 (Canary Release)
*   **阶段 1 (内部狗粮)**：5% 流量，限定内部白名单账户，观察 24 小时。
*   **阶段 2 (小流量灰度)**：20% 流量，包含真实用户，观察 48 小时。重点监控 TTFT 与 Downvote 比例。
*   **阶段 3 (半量/全量)**：50% -> 100%，需 PM 与 QA 联合签字放行。

### 7.2 回滚触发条件与告警 (Rollback & Alerting)
*   **回滚条件**：
    *   P0 级幻觉/违规投资建议 1 小时内发生 ≥ 2 起。
    *   解析失败率连续 5 分钟 > 5%。
*   **值班 SOP**：Eng 与 Algo 实行 Weekly On-call。收到 P0 告警，5分钟内响应，15分钟内执行回滚降级，后置排查。

**【示例 4：Prometheus 线上告警规则 (YAML)】**
```yaml
groups:
- name: AlphaNexus_Agent_Alerts
  rules:
  - alert: HighAgentDecisionFailure
    expr: rate(agent_decision_parse_failure_total[5m]) / rate(agent_request_total[5m]) > 0.05
    for: 2m
    labels:
      severity: critical
      team: algo-backend
    annotations:
      summary: "Agent 决策格式解析失败率极高 (>5%)"
      description: "最后5分钟内解析错误激增，可能由于底层 LLM 接口更新或 Prompt 污染，请立即介入考虑回滚。"
```

---

## 8. 风险管理清单 (Top 10 Risk List)

| 排名 | 风险描述 (Risk) | 缓解措施 (Mitigation) | 严重度 |
| :--- | :--- | :--- | :---: |
| 1 | **基础模型 API 速率限制/宕机** | 实施多模型路由 (Fallback)，如 GPT-4 失败自动切至 Claude-3.5。 | 高 |
| 2 | **测试集数据泄露 (Data Leakage)** | 定期使用新上市 Ticker 或本周突发新闻清洗评测集。 | 高 |
| 3 | **LLM 裁判偏好偏差 (Judge Bias)** | 调换多空辩论在 Prompt 中的展示顺序，消除位置偏见 (Position Bias)。 | 高 |
| 4 | **合规红线越界 (幻觉导致乱推票)** | 在最终输出前，增加基于规则 (RegEx) 和小模型 (BERT) 的硬性合规分类器。 | 极高 |
| 5 | **评测回测过拟合 (Backtest Overfitting)** | 划分严格的 In-Sample (调参用) 和 Out-of-Sample (评测用) 时间窗口。 | 中 |
| 6 | **用户输入恶意注入 (Prompt Injection)** | 系统 Prompt 增加隔离标记，过滤用户输入中的系统级指令覆盖企图。 | 高 |
| 7 | **上下文截断 (Context Overflow)** | 严格控制 RAG 检索的 Chunk 数量，引入 Token 计算器，超限动态丢弃低权重财报。 | 中 |
| 8 | **数据源 API 延迟抖动** | 对彭博/Twitter API 设定超时短路机制 (Timeout & Circuit Breaker)。 | 中 |
| 9 | **打标人力瓶颈** | 引入主动学习 (Active Learning)，仅抽取模型置信度低或双裁判分歧的样本送审。 | 低 |
| 10 | **一键回滚失效** | 保留历史版本镜像与对应版本的 Prompt 注册表，确保两者强绑定发布。 | 高 |

---

## 9. 90 天执行路线图 (Roadmap)

| 阶段 | 时间节点 | 关键里程碑 (Milestones) | 交付物 |
| :--- | :--- | :--- | :--- |
| **Phase 1: 基础设施** | **Week 1-3** | 搭建 L1/L2 静态评测集；上线 PR Gate 与 Nightly 流水线。 | 自动化 CI/CD 评测流水线配置；首批 550 条金标准数据。 |
| **Phase 2: 自动裁判** | **Week 4-6** | 引入 GPT-4o / Claude 双裁判机制；跑通 Kappa 一致性校验。 | LLM-Judge 服务端点；一致性超 80% 的裁判 Prompt。 |
| **Phase 3: 交易闭环** | **Week 7-9** | 将 Agent 决策结构化对接内部量化回测引擎；产出 PnL/Sharpe 报告。 | 多智能体回测框架 v1.0；资金曲线与回撤基准表。 |
| **Phase 4: 线上治理** | **Week 10-12** | 全面实施灰度发布门禁；完成实时大盘监控与告警体系。 | Prometheus 监控看板；自动化 Badcase 收集归因脚本。 |
