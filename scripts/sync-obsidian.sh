#!/bin/bash
# Sync M4 Obsidian Vault → personal-wiki/raw/obsidian-vault/
set -e
cd "$(dirname "$0")/.."

SRC="/Users/andrew/Documents/Obsidian Vault"
DST="raw/obsidian-vault"

# Copy only .md files (no attachments/large files)
rsync -av --delete --exclude='.obsidian' --exclude='Attachments' --exclude='*.pdf' --include='*.md' --include='*/' --exclude='*' "$SRC/" "$DST/" 2>&1 | tail -3

git add "$DST/"
if ! git diff --cached --quiet 2>/dev/null; then
  git commit -m "auto: obsidian vault sync $(date +%Y-%m-%d)"
  git push origin main 2>&1 || echo "push failed"
  echo "[$(date)] Obsidian synced"
else
  echo "[$(date)] No changes"
fi
