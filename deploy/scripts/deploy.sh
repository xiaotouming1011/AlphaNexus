#!/usr/bin/env bash
set -Eeuo pipefail

APP_ROOT="${APP_ROOT:-/opt/alphanexus}"
RELEASES_DIR="${APP_ROOT}/releases"
CURRENT_LINK="${APP_ROOT}/current"
VENV_DIR="${APP_ROOT}/venv"
SHARED_DIR="${APP_ROOT}/shared"
SERVICE_NAME="${SERVICE_NAME:-alphanexus-web}"
ENV_FILE="${ENV_FILE:-/etc/alphanexus.env}"
HEALTH_URL="${HEALTH_URL:-http://127.0.0.1:8002/api/health}"
KEEP_RELEASES="${KEEP_RELEASES:-5}"
RUN_USER="${RUN_USER:-alphanexus}"
RUN_GROUP="${RUN_GROUP:-${RUN_USER}}"

log() {
  printf '[%s] %s\n' "$(date '+%Y-%m-%d %H:%M:%S')" "$*"
}

die() {
  log "ERROR: $*"
  exit 1
}

usage() {
  cat <<'EOF'
Usage:
  deploy.sh <release_id> <source_dir> [env_file_source]

Arguments:
  release_id       Release identifier, e.g. 20260222153000
  source_dir       Jenkins workspace path or local source path
  env_file_source  Optional .env file path to install to /etc/alphanexus.env
EOF
}

require_root() {
  if [[ "${EUID}" -ne 0 ]]; then
    die "deploy.sh must run as root (typically via sudo)."
  fi
}

ensure_release_id() {
  local release_id="$1"
  if [[ ! "${release_id}" =~ ^[A-Za-z0-9._-]+$ ]]; then
    die "Invalid release_id: ${release_id}"
  fi
}

ensure_user_exists() {
  if ! id -u "${RUN_USER}" >/dev/null 2>&1; then
    die "User '${RUN_USER}' not found. Run bootstrap script first."
  fi
}

install_env_file_if_given() {
  local env_src="${1:-}"
  if [[ -z "${env_src}" ]]; then
    return 0
  fi
  [[ -f "${env_src}" ]] || die "env_file_source not found: ${env_src}"
  install -o root -g root -m 600 "${env_src}" "${ENV_FILE}"
  log "Installed environment file to ${ENV_FILE}"
}

health_check() {
  local retries="${1:-30}"
  local sleep_seconds="${2:-2}"

  for _ in $(seq 1 "${retries}"); do
    if curl -fsS --max-time 5 "${HEALTH_URL}" >/dev/null; then
      return 0
    fi
    sleep "${sleep_seconds}"
  done
  return 1
}

prune_old_releases() {
  local keep="$1"
  local current_target
  current_target="$(readlink -f "${CURRENT_LINK}" || true)"

  mapfile -t release_names < <(find "${RELEASES_DIR}" -mindepth 1 -maxdepth 1 -type d -printf '%f\n' | sort)
  local total="${#release_names[@]}"

  if (( total <= keep )); then
    return 0
  fi

  local remove_count=$(( total - keep ))
  for rel in "${release_names[@]:0:remove_count}"; do
    local path="${RELEASES_DIR}/${rel}"
    if [[ -n "${current_target}" && "${path}" == "${current_target}" ]]; then
      continue
    fi
    rm -rf "${path}"
    log "Removed old release: ${path}"
  done
}

main() {
  require_root

  if (( $# < 2 || $# > 3 )); then
    usage
    exit 1
  fi

  local release_id="$1"
  local source_dir="$2"
  local env_src="${3:-}"

  ensure_release_id "${release_id}"
  [[ -d "${source_dir}" ]] || die "source_dir not found: ${source_dir}"
  [[ -f "${source_dir}/requirements.txt" ]] || die "requirements.txt not found in source_dir"

  ensure_user_exists

  install_env_file_if_given "${env_src}"
  [[ -f "${ENV_FILE}" ]] || die "${ENV_FILE} not found. Please provide env file."

  local previous_release=""
  if [[ -L "${CURRENT_LINK}" ]]; then
    previous_release="$(readlink -f "${CURRENT_LINK}")"
  fi

  local new_release="${RELEASES_DIR}/${release_id}"
  [[ ! -e "${new_release}" ]] || die "Release already exists: ${new_release}"

  mkdir -p "${RELEASES_DIR}" "${SHARED_DIR}"

  log "Creating release directory: ${new_release}"
  mkdir -p "${new_release}"

  rsync -a --delete \
    --exclude '.git' \
    --exclude '.venv' \
    --exclude '__pycache__' \
    --exclude '.pytest_cache' \
    "${source_dir}/" "${new_release}/"

  chown -R "${RUN_USER}:${RUN_GROUP}" "${APP_ROOT}"

  if [[ ! -x "${VENV_DIR}/bin/python" ]]; then
    log "Creating virtualenv: ${VENV_DIR}"
    python3 -m venv "${VENV_DIR}"
  fi

  log "Installing dependencies"
  "${VENV_DIR}/bin/pip" install --upgrade pip setuptools wheel
  "${VENV_DIR}/bin/pip" install --no-cache-dir -r "${new_release}/requirements.txt"

  ln -sfn "${new_release}" "${CURRENT_LINK}"
  log "Switched current release -> ${new_release}"

  systemctl daemon-reload
  systemctl restart "${SERVICE_NAME}"

  if ! health_check 30 2; then
    log "Health check failed on new release"
    if [[ -n "${previous_release}" && -d "${previous_release}" ]]; then
      log "Rolling back to previous release: ${previous_release}"
      ln -sfn "${previous_release}" "${CURRENT_LINK}"
      systemctl restart "${SERVICE_NAME}"
      if ! health_check 30 2; then
        die "Rollback failed. Service still unhealthy."
      fi
      die "Deploy failed. Rolled back to previous release."
    else
      die "Deploy failed and no previous release available."
    fi
  fi

  printf '%s | deploy | %s\n' "$(date -u '+%Y-%m-%dT%H:%M:%SZ')" "${release_id}" >> "${SHARED_DIR}/deployments.log"

  prune_old_releases "${KEEP_RELEASES}"
  log "Deploy succeeded: ${release_id}"
}

main "$@"
