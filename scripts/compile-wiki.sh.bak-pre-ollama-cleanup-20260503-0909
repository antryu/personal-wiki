#!/bin/bash
# Compile raw Discord data → wiki summaries using local Ollama
# Run on M4 (where Ollama runs)
# Usage: ./scripts/compile-wiki.sh [--full | --daily]

set -e
cd "$(dirname "$0")/.."

MODEL="qwen2.5:72b"
OLLAMA="http://localhost:11434/api/generate"
RAW_DIR="raw/discord"
WIKI_DIR="wiki"
ANALYSIS_DIR="analysis"
LOG_FILE="logs/compile.log"

mkdir -p logs "$WIKI_DIR" "$ANALYSIS_DIR"

log() { echo "[$(date '+%Y-%m-%d %H:%M:%S')] $1" | tee -a "$LOG_FILE"; }

ollama_ask() {
  local prompt_file=$(mktemp)
  echo "$1" > "$prompt_file"
  local result
  result=$(python3 -c "
import json, sys, urllib.request
prompt = open('$prompt_file').read()
data = json.dumps({'model':'$MODEL','prompt':prompt,'stream':False,'options':{'num_predict':4096,'temperature':0.3}}).encode()
req = urllib.request.Request('$OLLAMA', data=data, headers={'Content-Type':'application/json'})
resp = urllib.request.urlopen(req, timeout=300)
print(json.loads(resp.read()).get('response','ERROR'))
" 2>/dev/null)
  rm -f "$prompt_file"
  echo "$result"
}

compile_channel() {
  local channel="$1"
  local channel_dir="$RAW_DIR/$channel"
  local since="$2"

  # Collect recent files
  local files=""
  if [ -n "$since" ]; then
    files=$(find "$channel_dir" -name "*.md" -newer "$since" 2>/dev/null | sort)
  else
    files=$(find "$channel_dir" -name "*.md" 2>/dev/null | sort | tail -7)
  fi

  [ -z "$files" ] && return

  # Concatenate content (max 8000 chars to fit context)
  local content=""
  for f in $files; do
    local chunk=$(head -200 "$f")
    content="$content
---
$(basename "$f" .md):
$chunk"
  done
  content=$(echo "$content" | head -300)

  log "Compiling #$channel ($(echo "$files" | wc -l | tr -d ' ') files)..."

  local prompt="다음은 디스코드 #$channel 채널의 최근 대화 내용입니다.

$content

위 내용을 분석하여 한국어로 위키 문서를 작성해주세요:
1. 핵심 주제 요약 (3-5줄)
2. 주요 의사결정 사항 (있으면)
3. 공유된 링크/리소스 (있으면)
4. 미완료 작업 (있으면)
5. 인사이트 (비개발자도 이해할 수 있게)

마크다운 형식으로 작성하세요. 제목은 '#$channel 위키'로 시작하세요."

  local result
  result=$(ollama_ask "$prompt")

  if [ "$result" != "ERROR" ] && [ -n "$result" ]; then
    local outfile="$WIKI_DIR/channels/$channel.md"
    mkdir -p "$WIKI_DIR/channels"
    echo "$result" > "$outfile"
    log "  ✅ #$channel → $outfile"
  else
    log "  ❌ #$channel compile failed"
  fi
}

compile_weekly_report() {
  log "Generating weekly report..."

  # Gather all channel summaries
  local summaries=""
  for f in "$WIKI_DIR/channels/"*.md; do
    [ -f "$f" ] || continue
    local name=$(basename "$f" .md)
    local content=$(head -30 "$f")
    summaries="$summaries

## #$name
$content
"
  done

  local week=$(date +%Y-W%V)
  local prompt="다음은 이번 주 모든 디스코드 채널의 위키 요약입니다.

$summaries

위 내용을 종합하여 주간 리포트를 작성해주세요:
1. 이번 주 가장 큰 진전 (Top 3)
2. 프로젝트별 상태 (_y Holdings, 트레이딩, MyBidWise, 기타)
3. 미해결 과제
4. 다음 주 우선순위 제안

마크다운 형식, 한국어로 작성하세요. 제목은 '# 주간 리포트 $week'으로 시작하세요."

  local result
  result=$(ollama_ask "$prompt")

  if [ "$result" != "ERROR" ] && [ -n "$result" ]; then
    echo "$result" > "$ANALYSIS_DIR/weekly-$week.md"
    log "  ✅ Weekly report → $ANALYSIS_DIR/weekly-$week.md"
  else
    log "  ❌ Weekly report failed"
  fi
}

# Main
MODE="${1:---daily}"
log "=== Compile started (mode: $MODE) ==="

# Check Ollama
if ! curl -s "$OLLAMA" -d '{"model":"'$MODEL'","prompt":"hi","stream":false,"options":{"num_predict":1}}' > /dev/null 2>&1; then
  log "❌ Ollama not running or $MODEL not available"
  exit 1
fi
log "Ollama OK ($MODEL)"

CHANNELS=$(ls "$RAW_DIR" 2>/dev/null)

if [ "$MODE" = "--full" ]; then
  # Compile all channels
  for ch in $CHANNELS; do
    [ -d "$RAW_DIR/$ch" ] && compile_channel "$ch"
  done
  compile_weekly_report
elif [ "$MODE" = "--daily" ]; then
  # Only compile channels with today's data
  TODAY=$(date +%Y-%m-%d)
  for ch in $CHANNELS; do
    [ -f "$RAW_DIR/$ch/$TODAY.md" ] && compile_channel "$ch"
  done
fi

# Git commit & push
git add "$WIKI_DIR/" "$ANALYSIS_DIR/" 2>/dev/null
if ! git diff --cached --quiet 2>/dev/null; then
  git commit -m "auto: wiki compile $(date +%Y-%m-%d)"
  git push origin main 2>&1 || log "git push failed"
  log "Git pushed"
else
  log "No changes to commit"
fi

log "=== Compile done ==="

# Rebuild index.html after compile
python3 "$(dirname "$0")/build-index.py" 2>&1 || log "build-index failed"
