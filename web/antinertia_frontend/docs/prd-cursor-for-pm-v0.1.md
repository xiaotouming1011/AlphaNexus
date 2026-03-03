# 一页式 PRD：Antinertia（v0.1）

## 1. 愿景

构建一个 AI-native PM 系统，把“用户反馈与行为数据”自动转成“可开发、可追溯、可验证”的产品决策与执行计划。

## 2. 目标用户（ICP）

1. 5-50 人产品团队（Founder-led PM、PM+Design+Eng 小团队）。
2. 每周都有用户反馈，但需求决策依赖人工汇总、会议和经验。
3. 已使用 Cursor/Claude Code 等编码 agent，希望把“定义需求”也加速。

## 3. 核心问题

1. 信号分散：访谈、工单、客服、埋点、社区反馈分布在多系统。
2. 决策不透明：为什么做某个功能缺少证据链。
3. 交付断层：PRD 到工程任务转换成本高、信息丢失。
4. 闭环缺失：上线后效果难回流到下一轮决策。

## 4. 产品目标（V1）

1. 让团队在 1-2 小时内完成从原始反馈到开发任务的首版产出。
2. 每条推荐都能追溯到原始证据（quote、事件、频次）。
3. 一键导出到编码 agent 可消费格式（任务列表、验收标准、边界条件）。

## 5. 非目标（V1）

1. 不替代 Jira/Linear 全量项目管理。
2. 不做通用 BI 平台。
3. 不自动直接改生产代码。

## 6. 核心闭环（Discover -> Decide -> Define -> Deliver -> Learn）

1. 导入数据：访谈文本、工单、埋点事件、NPS 评论。
2. 生成 Insight：问题主题、出现频率、用户段、影响范围。
3. 形成 Opportunity：按 Impact/Confidence/Effort 评分排序。
4. 产出 Feature Brief：目标、用户故事、UI 变化、数据模型变化、验收标准。
5. 拆分 Dev Tasks：可直接给 Cursor/Claude Code 的任务包。
6. 回收结果：上线后指标变化回写到 Opportunity/Feature Brief。

## 7. 信息架构（IA）

1. `Workspace`：团队空间与数据源配置。
2. `Inbox`：原始输入（访谈、工单、事件）。
3. `Insights`：主题洞察与证据片段。
4. `Opportunities`：机会池与优先级。
5. `Specs`：Feature Brief 编辑与版本管理。
6. `Tasks`：工程任务拆分与导出。
7. `Outcomes`：上线效果与假设验证。

## 8. 数据模型（核心实体）

| 实体 | 关键字段 | 关系 |
| --- | --- | --- |
| SourceItem | id, type, content, user_segment, timestamp | 被 Insight 引用 |
| Evidence | id, source_item_id, quote, confidence | 属于 Insight |
| Insight | id, theme, frequency, severity, affected_segment | 支撑 Opportunity |
| Opportunity | id, title, impact, confidence, effort, score | 由多个 Insight 聚合 |
| FeatureBrief | id, opportunity_id, problem, solution, scope, acceptance_criteria | 映射 Task |
| TaskCard | id, brief_id, repo, component, estimate, done_definition | 导出给 coding agent |
| OutcomeMetric | id, brief_id, metric_name, baseline, target, actual | 回流验证 |

## 9. 首版界面草图说明

1. `Dashboard`：左侧导航（Inbox/Insights/Opportunities/Specs/Outcomes），中间是“本周 top opportunities”，右侧是“证据完整度”和“风险提示”。
2. `Opportunity Detail`：上方为评分卡（Impact/Confidence/Effort），中间为“证据时间线”，下方按钮“Generate Brief”。
3. `Feature Brief Editor`：左栏需求结构化模板，右栏 AI 建议（UI 改动、数据模型改动、边界情况），底部“Export Tasks”。
4. `Task Export`：选择目标（Markdown/Linear/Jira/Agent Prompt），预览任务分解与验收标准后导出。

## 10. 关键指标（Metrics）

1. 北极星：`TTR (Time-to-Ready)`，从原始输入到“可开发任务”的中位时长。
2. 质量指标：Evidence Coverage（推荐项有证据支撑占比）>= 90%。
3. 采用指标：AI 生成 Brief 被团队保留并进入开发的比例 >= 40%。
4. 结果指标：上线后核心目标指标达到或超过 target 的比例 >= 30%。
5. 信任指标：PM/Founder 对“推荐可解释性”评分 >= 4/5。

## 11. MVP 里程碑（6-8 周）

1. Week 1-2：数据接入与标准化（访谈文本 + 工单）。
2. Week 3-4：Insight + Opportunity 评分引擎。
3. Week 5-6：Feature Brief 生成与 Task 导出。
4. Week 7-8：Outcome 回流与评估看板。

## 12. 主要风险与缓解

1. 幻觉风险：强制 evidence linking，无证据不允许进入建议列表。
2. 过度自动化：保留 human-in-the-loop，关键字段需人工确认。
3. 数据噪声：按来源质量和时间衰减加权。
4. 团队迁移成本：先做“并行模式”（不替代现有 Jira/Linear）。
