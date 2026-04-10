#!/bin/bash
# Auto-index PRJs and Thairon projects → personal-wiki
set -e
cd "$(dirname "$0")/.."

DST="raw/thairon-index"
mkdir -p "$DST"

# Index PRJs
for dir in /Users/andrew/PRJs/*/; do
  name=$(basename "$dir")
  [ "$name" = "personal-wiki" ] && continue
  [ "$name" = "node_modules" ] && continue
  mkdir -p "$DST/$name"
  cp "$dir"README.md "$DST/$name/" 2>/dev/null
  cp "$dir"CLAUDE.md "$DST/$name/" 2>/dev/null
  cp "$dir"AGENTS.md "$DST/$name/" 2>/dev/null
  cp "$dir"package.json "$DST/$name/" 2>/dev/null
done

# Index Thairon
for dir in /Users/andrew/Thairon/*/; do
  name=$(basename "$dir")
  mkdir -p "$DST/$name"
  cp "$dir"README.md "$DST/$name/" 2>/dev/null
  cp "$dir"CLAUDE.md "$DST/$name/" 2>/dev/null
done

# Update README with sizes
cat > "$DST/README.md" << EOF
# Project Index (Auto-generated $(date +%Y-%m-%d))
## M4 PRJs
$(du -sh /Users/andrew/PRJs/*/ 2>/dev/null | sort -rh | sed 's|/Users/andrew/PRJs/||')

## M4 Thairon
$(du -sh /Users/andrew/Thairon/*/ 2>/dev/null | sort -rh | sed 's|/Users/andrew/Thairon/||')
EOF

git add "$DST/"
if ! git diff --cached --quiet 2>/dev/null; then
  git commit -m "auto: project index update $(date +%Y-%m-%d)"
  git push origin main 2>&1 || echo "push failed"
  echo "[$(date)] Projects indexed"
else
  echo "[$(date)] No changes"
fi
