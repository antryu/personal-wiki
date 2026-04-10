#!/bin/bash
# Backup Claude Code sessions to personal-wiki
# Run on M4 (where Claude Code runs)

set -e
cd "$(dirname "$0")/.."

SRC="$HOME/.claude/projects"
DST="raw/claude-code"
mkdir -p "$DST"

echo "[$(date)] Backing up Claude Code sessions..."

# Copy all session .jsonl files
find "$SRC" -name "*.jsonl" -newer "$DST/.last-backup" 2>/dev/null | while read f; do
  # Create directory structure matching project name
  project=$(basename "$(dirname "$f")")
  session=$(basename "$f")
  mkdir -p "$DST/$project"
  cp "$f" "$DST/$project/$session"
  echo "  ✅ $project/$session"
done

touch "$DST/.last-backup"

# Git
git add "$DST/"
if ! git diff --cached --quiet 2>/dev/null; then
  git commit -m "auto: claude-code session backup $(date +%Y-%m-%d)"
  git push origin main 2>&1 || echo "push failed"
fi

echo "[$(date)] Done"
