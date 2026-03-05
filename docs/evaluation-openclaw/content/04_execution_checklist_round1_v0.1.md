# AlphaNexus 第一轮评测执行清单 v0.1

## 1. 执行范围
- 数据集文件：`/Users/anji/TradingAgents_副本/docs/evaluation/02_eval_dataset_template_v0.1.csv`
- 样本数量：20 条
- 日期范围：2026-02-18 至 2026-02-24（全部为 2 月样本）

## 2. 执行顺序
1. `CASE-0001` ~ `CASE-0005`：Market
2. `CASE-0006` ~ `CASE-0010`：Social
3. `CASE-0011` ~ `CASE-0015`：News
4. `CASE-0016` ~ `CASE-0020`：Fundamentals

## 3. 单条样本执行步骤
1. 在前端录入 `ticker`、`trade_date`、`selected_module`、`risk_profile`
2. 启动分析并等待最终结果完成
3. 记录系统客观指标：
   - run_success（0/1）
   - total_latency_sec
   - tool_success_rate
   - evidence_coverage
   - contradiction_rate
   - risk_profile_match_rate
4. 使用评分表对主观维度打分（1-5）：
   - explainability
   - consistency
   - actionability
   - style_match
   - trust
5. 如出现问题，登记 badcase 台账并写入回归 case 计划

## 4. 完成判定
- 20 条样本全部有结果记录
- 每条样本均有主观分与客观指标
- 严重问题（S0/S1）全部进入 badcase 台账

## 5. 输出物
- 打分记录：`/Users/anji/TradingAgents_副本/docs/evaluation/05_scoring_records_round1_v0.1.csv`
- badcase 台账：`/Users/anji/TradingAgents_副本/docs/evaluation/03_badcase_log_template_v0.1.csv`
- 评测总结（下一步产出）：Top3 问题、优先级、预计迭代动作
