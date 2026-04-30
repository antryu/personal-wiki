#!/bin/bash
# Sync Thairon Obsidian Vault → personal-wiki/raw/obsidian-vault/
# Includes References/Papers + References/AI-Tools (auto-archived by research_archive cron on M1)
set -e
cd "$(dirname "$0")/.."

SRC="/Users/andrew/Thairon/obsidian-vault"
DST="raw/obsidian-vault"

if [ ! -d "$SRC" ]; then
  echo "[$(date)] ERROR: vault not found at $SRC" >&2
  exit 1
fi

# Copy only .md files (no attachments/large files), preserve directory structure
rsync -av --delete \
  --exclude='.obsidian' \
  --exclude='.git' \
  --exclude='.omc' \
  --exclude='Attachments' \
  --exclude='*.pdf' \
  --exclude='OpenClaw Sessions' \
  --exclude='Daily' \
  --include='*.md' \
  --include='*/' \
  --exclude='*' \
  "$SRC/" "$DST/" 2>&1 | tail -5

git add "$DST/"
if ! git diff --cached --quiet 2>/dev/null; then
  PAPERS=$(find "$DST/References/Papers" -name "*.md" 2>/dev/null | wc -l | tr -d ' ')
  TOOLS=$(find "$DST/References/AI-Tools" -name "*.md" 2>/dev/null | wc -l | tr -d ' ')
  git commit -m "auto: obsidian vault sync $(date +%Y-%m-%d) (papers=$PAPERS tools=$TOOLS)"
  git push origin main 2>&1 || echo "push failed"
  echo "[$(date)] Obsidian synced (papers=$PAPERS tools=$TOOLS)"
else
  echo "[$(date)] No changes"
fi
