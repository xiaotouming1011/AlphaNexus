# AlphaNexus Ubuntu 生产部署手册

本手册对应以下生产方案：

- 服务器：Ubuntu 22.04/24.04，`2vCPU / 2GiB`
- 应用：`systemd + uvicorn`（监听 `127.0.0.1:8002`）
- 网关：Nginx（`80/443`）
- CI/CD：Jenkins 同机部署，监听 `127.0.0.1:8080`，通过 SSH 隧道访问
- 域名：`app.anji.website`
- TLS：Let's Encrypt（certbot + nginx）

---

## 1. 服务器准备

先登录服务器：

```bash
ssh <ubuntu_user>@<server_public_ip>
```

克隆仓库到服务器（示例）：

```bash
cd /opt
sudo git clone https://github.com/xiaotouming1011/AlphaNexus.git
sudo chown -R $USER:$USER /opt/AlphaNexus
cd /opt/AlphaNexus
```

执行基础初始化（root）：

```bash
sudo bash deploy/scripts/bootstrap_ubuntu.sh /opt/AlphaNexus
```

该脚本会完成：

- 安装 nginx/python3/rsync/ufw/certbot
- 创建 `alphanexus` 运行用户
- 创建 `/opt/alphanexus/{releases,shared}`
- 创建 `2GiB` swap（`/swapfile`）
- 安装 systemd、nginx、sudoers、固定发布命令
- 开启防火墙，仅放行 `22/80/443`

---

## 2. Jenkins 本机安装（仅 localhost）

执行：

```bash
cd /opt/AlphaNexus
sudo bash deploy/scripts/install_jenkins_local.sh
```

该脚本会：

- 安装 OpenJDK 17 + Jenkins LTS
- 绑定 Jenkins 到 `127.0.0.1:8080`
- JVM 限制为 `-Xms256m -Xmx512m`

查看初始管理员密码：

```bash
sudo cat /var/lib/jenkins/secrets/initialAdminPassword
```

本地访问 Jenkins（通过 SSH 隧道）：

```bash
ssh -L 8080:127.0.0.1:8080 <ubuntu_user>@<server_public_ip>
```

然后浏览器打开：`http://127.0.0.1:8080`

---

## 3. 域名与 DNS

在域名提供商控制台配置：

- 记录类型：`A`
- 主机记录：`app`
- 值：`<server_public_ip>`
- TTL：`300`

验证：

```bash
dig +short app.anji.website
```

确保返回你的服务器公网 IP。

---

## 4. Nginx HTTP/HTTPS

### 4.1 先验证 HTTP 配置

```bash
sudo nginx -t
sudo systemctl restart nginx
```

### 4.2 签发 HTTPS 证书

```bash
sudo certbot --nginx -d app.anji.website -m <your_email> --agree-tos --no-eff-email --redirect
```

### 4.3 验证续期

```bash
sudo certbot renew --dry-run
```

---

## 5. 生产环境变量

生产环境变量最终文件：`/etc/alphanexus.env`  
默认由 Jenkins 凭据 `prod_env_file` 注入（每次部署覆盖）。

建议内容示例：

```env
OPENAI_API_KEY=
GOOGLE_API_KEY=
ANTHROPIC_API_KEY=
XAI_API_KEY=
OPENROUTER_API_KEY=
ALPHA_VANTAGE_API_KEY=
PORTFOLIO_AV_MIN_INTERVAL_SECONDS=1.5
ALPHANEXUS_GRAPH_DB_PATH=
```

> 注意：不要把任何真实密钥提交到 Git。

---

## 6. Jenkins Job 配置

### 6.1 推荐插件

- Pipeline
- Git
- GitHub
- Credentials Binding

### 6.2 凭据配置（Jenkins -> Credentials）

1. `github_pat`
- 类型：Username with password 或 Secret text
- 用途：拉取私有仓库（若仓库是 public 可不强制）

2. `prod_env_file`
- 类型：Secret text
- 内容：完整多行 `.env` 文本

3. `sudo_deploy`（可选）
- 若采用 ssh agent 或特殊 sudo 策略时使用

### 6.3 Pipeline Job

- 类型：Pipeline 或 Multibranch Pipeline
- 分支：`main`
- Script Path：`deploy/Jenkinsfile`
- 若用 GitHub webhook：启用 `githubPush()` 触发（Jenkinsfile 已定义）

---

## 7. sudo 最小权限

模板文件：`deploy/sudoers/jenkins-alphanexus`  
服务器应安装到：

```bash
sudo install -o root -g root -m 440 deploy/sudoers/jenkins-alphanexus /etc/sudoers.d/jenkins-alphanexus
sudo visudo -cf /etc/sudoers.d/jenkins-alphanexus
```

仅允许 Jenkins 执行：

- `/usr/local/bin/alphanexus-deploy`
- `/usr/local/bin/alphanexus-rollback`

---

## 8. 首次发布流程

1. 在 Jenkins 手动触发 main 分支构建  
2. 流水线会执行：
- Checkout
- Prepare（生成 `release_id`）
- Validate（`py_compile`）
- Manual Approval（人工确认）
- Deploy（调用 `alphanexus-deploy`）
- Health Check
3. 成功后访问：
- `https://app.anji.website/`
- `https://app.anji.website/api/health`

---

## 9. 回滚流程

### 9.1 自动回滚

部署阶段健康检查失败时，`deploy.sh` 会自动回滚到上一个 release。

### 9.2 手动回滚

回滚到上一个版本：

```bash
sudo /usr/local/bin/alphanexus-rollback
```

回滚到指定版本：

```bash
sudo /usr/local/bin/alphanexus-rollback <release_id>
```

---

## 10. 验收清单

1. 基础连通

```bash
curl -sS http://127.0.0.1:8002/api/health
```

应返回：

```json
{"status":"ok"}
```

2. 反向代理与 HTTPS
- `https://app.anji.website/` 可打开
- `https://app.anji.website/api/health` 返回 200
- `http://app.anji.website` 自动 301 到 HTTPS

3. SSE
- 在前端触发分析，`/api/run/stream` 持续输出，不出现长时间卡住

4. Jenkins 安全
- 公网无法访问 `:8080`
- SSH 隧道可访问 Jenkins UI

5. CI/CD
- push 到 `main` 后触发流水线
- 必须人工确认后才执行发布
- 失败可回滚

---

## 11. 常用运维命令

查看服务状态：

```bash
sudo systemctl status alphanexus-web --no-pager
sudo systemctl status nginx --no-pager
sudo systemctl status jenkins --no-pager
```

查看日志：

```bash
sudo journalctl -u alphanexus-web -f
sudo tail -f /var/log/nginx/alphanexus.error.log
```

查看当前版本：

```bash
readlink -f /opt/alphanexus/current
ls -1 /opt/alphanexus/releases
```

