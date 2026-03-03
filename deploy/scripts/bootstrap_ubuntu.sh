#!/usr/bin/env bash
set -Eeuo pipefail

if [[ "${EUID}" -ne 0 ]]; then
  echo "Please run as root: sudo bash deploy/scripts/bootstrap_ubuntu.sh"
  exit 1
fi

REPO_DIR="${1:-$(pwd)}"
APP_ROOT="${APP_ROOT:-/opt/alphanexus}"
APP_USER="${APP_USER:-alphanexus}"
APP_GROUP="${APP_GROUP:-alphanexus}"
ENV_FILE="${ENV_FILE:-/etc/alphanexus.env}"
SWAP_SIZE_MB="${SWAP_SIZE_MB:-2048}"
ENABLE_UFW="${ENABLE_UFW:-1}"

log() {
  printf '[%s] %s\n' "$(date '+%Y-%m-%d %H:%M:%S')" "$*"
}

require_file() {
  local file="$1"
  [[ -f "${file}" ]] || { log "Missing file: ${file}"; exit 1; }
}

install_base_packages() {
  log "Installing base packages"
  apt-get update
  DEBIAN_FRONTEND=noninteractive apt-get install -y \
    ca-certificates \
    curl \
    git \
    gnupg \
    nginx \
    python3 \
    python3-pip \
    python3-venv \
    rsync \
    ufw \
    certbot \
    python3-certbot-nginx
}

ensure_app_user() {
  if ! id -u "${APP_USER}" >/dev/null 2>&1; then
    log "Creating system user: ${APP_USER}"
    useradd --system --home "${APP_ROOT}" --create-home --shell /usr/sbin/nologin "${APP_USER}"
  fi
}

setup_dirs() {
  log "Preparing app directories under ${APP_ROOT}"
  mkdir -p "${APP_ROOT}/releases" "${APP_ROOT}/shared"
  chown -R "${APP_USER}:${APP_GROUP}" "${APP_ROOT}"
}

setup_env_file() {
  if [[ ! -f "${ENV_FILE}" ]]; then
    log "Creating env template: ${ENV_FILE}"
    cat > "${ENV_FILE}" <<'EOF'
OPENAI_API_KEY=
GOOGLE_API_KEY=
ANTHROPIC_API_KEY=
XAI_API_KEY=
OPENROUTER_API_KEY=
ALPHA_VANTAGE_API_KEY=
PORTFOLIO_AV_MIN_INTERVAL_SECONDS=1.5
ALPHANEXUS_GRAPH_DB_PATH=
EOF
  fi
  chmod 600 "${ENV_FILE}"
  chown root:root "${ENV_FILE}"
}

setup_swap() {
  if swapon --show | grep -q '^/swapfile'; then
    log "Swap /swapfile already enabled"
    return 0
  fi

  log "Creating ${SWAP_SIZE_MB}MB swap at /swapfile"
  if command -v fallocate >/dev/null 2>&1; then
    fallocate -l "${SWAP_SIZE_MB}M" /swapfile
  else
    dd if=/dev/zero of=/swapfile bs=1M count="${SWAP_SIZE_MB}" status=progress
  fi
  chmod 600 /swapfile
  mkswap /swapfile
  swapon /swapfile
  grep -q '^/swapfile ' /etc/fstab || echo '/swapfile none swap sw 0 0' >> /etc/fstab
}

install_service_and_nginx() {
  local service_file="${REPO_DIR}/deploy/systemd/alphanexus-web.service"
  local nginx_file="${REPO_DIR}/deploy/nginx/alphanexus.conf"
  local sudoers_file="${REPO_DIR}/deploy/sudoers/jenkins-alphanexus"
  local deploy_script="${REPO_DIR}/deploy/scripts/deploy.sh"
  local rollback_script="${REPO_DIR}/deploy/scripts/rollback.sh"

  require_file "${service_file}"
  require_file "${nginx_file}"
  require_file "${sudoers_file}"
  require_file "${deploy_script}"
  require_file "${rollback_script}"

  log "Installing systemd unit"
  install -o root -g root -m 644 "${service_file}" /etc/systemd/system/alphanexus-web.service

  log "Installing Nginx site"
  install -o root -g root -m 644 "${nginx_file}" /etc/nginx/sites-available/alphanexus.conf
  ln -sfn /etc/nginx/sites-available/alphanexus.conf /etc/nginx/sites-enabled/alphanexus.conf
  rm -f /etc/nginx/sites-enabled/default
  nginx -t
  systemctl enable --now nginx

  log "Installing fixed deploy commands"
  install -o root -g root -m 755 "${deploy_script}" /usr/local/bin/alphanexus-deploy
  install -o root -g root -m 755 "${rollback_script}" /usr/local/bin/alphanexus-rollback

  log "Installing sudoers policy for Jenkins"
  install -o root -g root -m 440 "${sudoers_file}" /etc/sudoers.d/jenkins-alphanexus
  visudo -cf /etc/sudoers.d/jenkins-alphanexus

  systemctl daemon-reload
  systemctl enable alphanexus-web
}

setup_firewall() {
  if [[ "${ENABLE_UFW}" != "1" ]]; then
    log "Skipping UFW configuration (ENABLE_UFW=${ENABLE_UFW})"
    return 0
  fi
  log "Configuring UFW (allow 22/80/443 only)"
  ufw allow OpenSSH
  ufw allow 80/tcp
  ufw allow 443/tcp
  ufw deny 8080/tcp || true
  ufw --force enable
}

main() {
  install_base_packages
  ensure_app_user
  setup_dirs
  setup_env_file
  setup_swap
  install_service_and_nginx
  setup_firewall

  log "Bootstrap finished."
  log "Next: install Jenkins with deploy/scripts/install_jenkins_local.sh"
}

main "$@"
