#!/usr/bin/env bash
set -euo pipefail

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/../.." && pwd)"
cd "$ROOT_DIR/PatientService"

mvn -B -ntp -DskipTests package >/tmp/patient-service-package-memory.log 2>&1
JAR_PATH="$(find target -maxdepth 1 -type f -name '*.jar' ! -name '*plain*' | head -n1)"

if [[ -z "${JAR_PATH}" ]]; then
  echo "PatientService jar not found"
  exit 1
fi

PORT=18081
MAX_RSS_KB=650000

SERVER_PORT="${PORT}" \
java -jar "${JAR_PATH}" >/tmp/patient-service-memory.log 2>&1 &
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
  echo "PatientService did not become healthy for memory check"
  exit 1
fi

RSS_KB="$(ps -o rss= -p "${APP_PID}" | tr -d ' ')"
echo "PatientService RSS: ${RSS_KB}KB"

if (( RSS_KB > MAX_RSS_KB )); then
  echo "Memory regression: ${RSS_KB}KB > ${MAX_RSS_KB}KB"
  exit 1
fi
