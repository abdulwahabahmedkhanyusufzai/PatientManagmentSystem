#!/usr/bin/env bash
set -euo pipefail

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/../.." && pwd)"
cd "$ROOT_DIR"

declare -A LIMITS_MB=(
  ["patient-service"]=420
  ["notification-service"]=300
  ["ai-chat-service"]=360
  ["patient-dashboard"]=220
)

build_image() {
  local name="$1"
  local context="$2"
  docker build -t "${name}:perf-check" "$context" >/tmp/"${name}"-build.log 2>&1
}

build_image patient-service PatientService
build_image notification-service NotificationService
build_image ai-chat-service AiChatService
build_image patient-dashboard PatientDashboard

for image in "${!LIMITS_MB[@]}"; do
  size_bytes="$(docker image inspect "${image}:perf-check" --format='{{.Size}}')"
  size_mb="$((size_bytes / 1024 / 1024))"
  limit_mb="${LIMITS_MB[$image]}"
  echo "${image}: ${size_mb}MB (limit ${limit_mb}MB)"
  if (( size_mb > limit_mb )); then
    echo "Image ${image} exceeds size budget"
    exit 1
  fi
done
