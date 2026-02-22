#!/usr/bin/env bash
set -Eeuo pipefail

APP_ROOT="${APP_ROOT:-/opt/alphanexus}"
RELEASES_DIR="${APP_ROOT}/releases"
CURRENT_LINK="${APP_ROOT}/current"
SHARED_DIR="${APP_ROOT}/shared"
SERVICE_NAME="${SERVICE_NAME:-alphanexus-web}"
HEALTH_URL="${HEALTH_URL:-http://127.0.0.1:8002/api/health}"

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
  rollback.sh [release_id]

Behavior:
  - If release_id is provided, rollback to that release.
  - If omitted, rollback to the latest release before current.
EOF
}

require_root() {
  if [[ "${EUID}" -ne 0 ]]; then
    die "rollback.sh must run as root (typically via sudo)."
  fi
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

pick_previous_release() {
  local current_target="$1"
  mapfile -t release_names < <(find "${RELEASES_DIR}" -mindepth 1 -maxdepth 1 -type d -printf '%f\n' | sort)
  for (( idx=${#release_names[@]}-1; idx>=0; idx-- )); do
    local candidate="${RELEASES_DIR}/${release_names[idx]}"
    if [[ "${candidate}" != "${current_target}" ]]; then
      echo "${candidate}"
      return 0
    fi
  done
  return 1
}

main() {
  require_root

  if (( $# > 1 )); then
    usage
    exit 1
  fi

  [[ -L "${CURRENT_LINK}" ]] || die "Current release link not found: ${CURRENT_LINK}"
  local current_target
  current_target="$(readlink -f "${CURRENT_LINK}")"
  [[ -d "${RELEASES_DIR}" ]] || die "Releases directory not found: ${RELEASES_DIR}"

  local target_release=""
  if (( $# == 1 )); then
    target_release="${RELEASES_DIR}/$1"
    [[ -d "${target_release}" ]] || die "Target release not found: ${target_release}"
  else
    target_release="$(pick_previous_release "${current_target}")" || die "No previous release available for rollback."
  fi

  ln -sfn "${target_release}" "${CURRENT_LINK}"
  log "Rolled current release -> ${target_release}"

  systemctl daemon-reload
  systemctl restart "${SERVICE_NAME}"

  if ! health_check 30 2; then
    die "Rollback service health check failed."
  fi

  mkdir -p "${SHARED_DIR}"
  printf '%s | rollback | %s\n' "$(date -u '+%Y-%m-%dT%H:%M:%SZ')" "$(basename "${target_release}")" >> "${SHARED_DIR}/deployments.log"
  log "Rollback succeeded."
}

main "$@"
