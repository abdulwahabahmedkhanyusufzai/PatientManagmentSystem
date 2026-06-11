#!/usr/bin/env bash
set -euo pipefail

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/../.." && pwd)"
cd "$ROOT_DIR/PatientService"

mvn -B -ntp -DskipTests package >/tmp/patient-service-package.log 2>&1
JAR_PATH="$(find target -maxdepth 1 -type f -name '*.jar' ! -name '*plain*' | head -n1)"

if [[ -z "${JAR_PATH}" ]]; then
  echo "PatientService jar not found"
  exit 1
fi

PORT=18080
MAX_STARTUP_SECONDS=45
START_TIME="$(date +%s)"

SPRING_CLOUD_VAULT_ENABLED=false \
SPRING_CONFIG_IMPORT=optional:vault:// \
SERVER_PORT="${PORT}" \
java -jar "${JAR_PATH}" >/tmp/patient-service-startup.log 2>&1 &
APP_PID=$!

cleanup() {
  kill "${APP_PID}" >/dev/null 2>&1 || true
}
trap cleanup EXIT

for _ in $(seq 1 90); do
  if curl -fsS "http://localhost:${PORT}/actuator/health" >/dev/null; then
    break
  fi
  sleep 1
done

if ! curl -fsS "http://localhost:${PORT}/actuator/health" >/dev/null; then
  echo "PatientService did not become healthy"
  exit 1
fi

END_TIME="$(date +%s)"
STARTUP_SECONDS="$((END_TIME - START_TIME))"
echo "PatientService startup time: ${STARTUP_SECONDS}s"

if (( STARTUP_SECONDS > MAX_STARTUP_SECONDS )); then
  echo "Startup time regression: ${STARTUP_SECONDS}s > ${MAX_STARTUP_SECONDS}s"
  exit 1
fi
