#!/usr/bin/env bash
set -Eeuo pipefail

if [[ "${EUID}" -ne 0 ]]; then
  echo "Please run as root: sudo bash deploy/scripts/install_jenkins_local.sh"
  exit 1
fi

JENKINS_PORT="${JENKINS_PORT:-8080}"
JENKINS_HOST="${JENKINS_HOST:-127.0.0.1}"
JENKINS_XMS="${JENKINS_XMS:-256m}"
JENKINS_XMX="${JENKINS_XMX:-512m}"

log() {
  printf '[%s] %s\n' "$(date '+%Y-%m-%d %H:%M:%S')" "$*"
}

set_or_add_kv() {
  local file="$1"
  local key="$2"
  local value="$3"
  if grep -q "^${key}=" "${file}"; then
    sed -ri "s|^${key}=.*|${key}=${value}|" "${file}"
  else
    echo "${key}=${value}" >> "${file}"
  fi
}

install_java_and_jenkins() {
  log "Installing OpenJDK 17 and Jenkins LTS"
  apt-get update
  DEBIAN_FRONTEND=noninteractive apt-get install -y ca-certificates curl gnupg openjdk-17-jre

  install -m 0755 -d /etc/apt/keyrings
  curl -fsSL https://pkg.jenkins.io/debian-stable/jenkins.io-2023.key | tee /etc/apt/keyrings/jenkins-keyring.asc >/dev/null
  chmod a+r /etc/apt/keyrings/jenkins-keyring.asc
  cat >/etc/apt/sources.list.d/jenkins.list <<EOF
deb [signed-by=/etc/apt/keyrings/jenkins-keyring.asc] https://pkg.jenkins.io/debian-stable binary/
EOF

  apt-get update
  DEBIAN_FRONTEND=noninteractive apt-get install -y jenkins
}

configure_jenkins_local_only() {
  local default_file="/etc/default/jenkins"
  [[ -f "${default_file}" ]] || { log "Missing ${default_file}"; exit 1; }

  log "Configuring Jenkins listen host/port and JVM memory"
  set_or_add_kv "${default_file}" "HTTP_HOST" "${JENKINS_HOST}"
  set_or_add_kv "${default_file}" "HTTP_PORT" "${JENKINS_PORT}"
  set_or_add_kv "${default_file}" "JENKINS_LISTEN_ADDRESS" "${JENKINS_HOST}"
  set_or_add_kv "${default_file}" "JENKINS_PORT" "${JENKINS_PORT}"

  local new_java_args
  new_java_args="\"-Djava.awt.headless=true -Xms${JENKINS_XMS} -Xmx${JENKINS_XMX}\""
  set_or_add_kv "${default_file}" "JAVA_ARGS" "${new_java_args}"
  set_or_add_kv "${default_file}" "JENKINS_JAVA_OPTIONS" "${new_java_args}"
}

start_jenkins() {
  systemctl daemon-reload
  systemctl enable --now jenkins
  systemctl restart jenkins
  systemctl --no-pager --full status jenkins | sed -n '1,15p'
}

main() {
  install_java_and_jenkins
  configure_jenkins_local_only
  start_jenkins

  log "Jenkins installed. Public port is NOT exposed when UFW blocks 8080."
  log "Use SSH tunnel: ssh -L 8080:127.0.0.1:8080 <user>@<server_ip>"
  if [[ -f /var/lib/jenkins/secrets/initialAdminPassword ]]; then
    log "Initial admin password file: /var/lib/jenkins/secrets/initialAdminPassword"
  fi
}

main "$@"
