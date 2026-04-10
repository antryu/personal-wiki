#!/bin/bash
# Daily Discord backup + git push
# Run via cron: 0 0 * * * ~/PRJs/personal-wiki/scripts/daily-backup.sh

export PATH=/usr/local/bin:/opt/homebrew/bin:$HOME/.nvm/versions/node/*/bin:$PATH
set -e
cd ~/PRJs/personal-wiki

SINCE=$(date -v-1d +%Y-%m-%d 2>/dev/null || date -d 'yesterday' +%Y-%m-%d)
echo "[$(date)] Starting daily backup since $SINCE"

# 1. Fetch new Discord messages
npx tsx scripts/fetch-discord.ts --all --since "$SINCE" 2>&1 || echo 'fetch-discord failed'

# 2. Git commit & push
git add raw/discord/
if git diff --cached --quiet; then
  echo 'No new messages'
else
  git commit -m "auto: daily discord backup $(date +%Y-%m-%d)"
  git push origin main 2>&1 || echo 'git push failed'
  echo "[$(date)] Backup complete"
fi
