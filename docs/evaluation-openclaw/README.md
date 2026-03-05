# evaluation-openclaw

本目录是 AlphaNexus 的 OpenClaw 评测工作区。

从现在开始，评测相关文档、数据集、配置、脚本、badcase 记录统一放在这里。

## 目录结构

- `alphanexus_eval_iteration_framework_v0.2-gemini.md`：评测与迭代执行框架（v0.2）
- `content/`：评测内容与资产
  - `01_scoring_sheet_v0.1.md`
  - `02_eval_dataset_template_v0.1.csv`
  - `03_badcase_log_template_v0.1.csv`
  - `04_badcase_backlog_v0.2.csv`
  - `README_v0.2.md`
  - `configs/`
  - `datasets/`
  - `scripts/`

## 约定

- 新增评测内容请优先更新 `content/README_v0.2.md`
- badcase 修复后必须回灌到 `content/datasets/l2_regression_eval_dataset_v0.2.csv`
