# AlphaNexus Evaluation Content v0.2

这份目录提供“可直接执行”的评测内容，不再只有模板。

## 1. 数据集文件

- `datasets/l1_smoke_eval_dataset_v0.2.csv`：50 条，PR Gate 冒烟测试
- `datasets/l2_regression_eval_dataset_v0.2.csv`：500 条，Nightly 回归
- `datasets/l3_challenge_eval_dataset_v0.2.csv`：100 条，大版本/周度挑战
- `datasets/alphanexus_eval_master_v0.2.csv`：三层合并，650 条

## 2. 配置文件

- `configs/judge_rubric_v0.2.yaml`：Judge 评分维度、权重、hard fail 规则
- `configs/eval_pipeline_mapping_v0.2.yaml`：L1/L2/L3 与流水线触发关系、质量门禁

## 3. 字段说明（CSV）

核心字段继承 `02_eval_dataset_template_v0.1.csv`：
- `case_id`
- `ticker`
- `trade_date`
- `selected_module`
- `risk_profile`
- `expected_focus`
- `golden_signals`
- `hard_fail_rules`
- `difficulty`
- `market_regime`
- `source_type`
- `status`
- `owner`
- `last_updated`

## 4. 建议接入方式

1. PR 流水线只跑 L1（50 条）
2. Nightly 跑 L2（500 条）
3. 大版本或周度评估跑 L3（100 条）
4. 线上 badcase 修复后，必须新增一个 L2 case（或替换同难度旧 case）

## 5. 内容边界

当前 v0.2 数据为“结构化执行样本”，可直接用于流程联调和门禁验证。
下一步建议用线上真实日志替换 30%-50% 的 L2/L3 条目，逐步提高真实性。
