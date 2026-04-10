#!/bin/bash
# Daily wiki automation - runs via cron on M4 Max
# Tasks: lint, git sync, index update

set -e
export PATH=/opt/homebrew/bin:$PATH

WIKI_ROOT="$HOME/PRJs/personal-wiki"
LOG_FILE="$WIKI_ROOT/wiki/log.md"
DATE=$(date +%Y-%m-%d)

cd "$WIKI_ROOT"

echo "[$DATE] Daily automation started"

# 1. Git pull latest changes
echo "  [Git] Pulling latest..."
git pull --rebase 2>/dev/null || true

# 2. Run lint (health check)
echo "  [Lint] Running wiki health check..."
npx tsx scripts/lint.ts --stats 2>/dev/null || echo "  [Lint] Warning: lint failed"

# 3. Git sync - commit any uncommitted changes
echo "  [Git] Syncing uncommitted changes..."
git add -A 2>/dev/null
git diff --cached --quiet || git commit -m "daily: auto-sync $DATE" 2>/dev/null
git push 2>/dev/null || echo "  [Git] Push failed"

echo "[$DATE] Daily automation complete"
