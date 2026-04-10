#!/bin/bash
# Wiki Lint — 자동 헬스체크
# cron으로 매일 실행 권장

WIKI_DIR="${WIKI_DIR:-$HOME/PRJs/personal-wiki/wiki}"
LOG_FILE="$WIKI_DIR/log.md"
DATE=$(date +%Y-%m-%d)

cd "$WIKI_DIR" || exit 1

echo "=== Wiki Lint Report ($DATE) ==="
ISSUES=0

# 1. 깨진 백링크
BROKEN=$(grep -roh '\[\[[^]]*\]\]' . --include="*.md" 2>/dev/null | sort -u | while read link; do
  target=$(echo "$link" | sed 's/\[\[//;s/\]\]//;s/|.*//')
  [ ! -f "${target}.md" ] && [ ! -f "$target" ] && [ ! -d "$target" ] && echo "$link"
done)
BROKEN_COUNT=$(echo "$BROKEN" | grep -c . || true)
[ -z "$BROKEN" ] && BROKEN_COUNT=0
echo "깨진 백링크: $BROKEN_COUNT"
if [ "$BROKEN_COUNT" -gt 0 ]; then
  ISSUES=$((ISSUES + BROKEN_COUNT))
  echo "$BROKEN" | head -10 | sed 's/^/  ❌ /'
fi

# 2. 고아 페이지
ORPHANS=$(find . -name "*.md" -not -name "index.md" -not -name "log.md" -not -name "dashboard.md" -not -path "./_meta/*" | while read f; do
  base=$(echo "$f" | sed 's|^\./||;s|\.md$||')
  grep -q "$base" index.md 2>/dev/null || echo "$base"
done)
ORPHAN_COUNT=$(echo "$ORPHANS" | grep -c . || true)
[ -z "$ORPHANS" ] && ORPHAN_COUNT=0
echo "고아 페이지: $ORPHAN_COUNT"
if [ "$ORPHAN_COUNT" -gt 0 ]; then
  ISSUES=$((ISSUES + ORPHAN_COUNT))
  echo "$ORPHANS" | head -10 | sed 's/^/  📄 /'
fi

# 3. 과대 페이지 (10K+)
OVERSIZED=$(find . -name "*.md" | while read f; do
  size=$(wc -c < "$f")
  [ "$size" -gt 10000 ] && echo "$f ($size chars)"
done)
OVER_COUNT=$(echo "$OVERSIZED" | grep -c . || true)
[ -z "$OVERSIZED" ] && OVER_COUNT=0
echo "과대 페이지 (10K+): $OVER_COUNT"
if [ "$OVER_COUNT" -gt 0 ]; then
  echo "$OVERSIZED" | sed 's/^/  📏 /'
fi

# 4. placeholder 페이지 (내용 없는 것)
PLACEHOLDER_COUNT=$(grep -rl "Placeholder — 내용 추가 필요" . --include="*.md" 2>/dev/null | wc -l | tr -d ' ')
echo "Placeholder 페이지: $PLACEHOLDER_COUNT"

# 5. 총 페이지
TOTAL=$(find . -name "*.md" | wc -l | tr -d ' ')
echo "총 페이지: $TOTAL"

echo ""
if [ "$ISSUES" -eq 0 ]; then
  echo "✅ 모든 체크 통과"
else
  echo "⚠️ $ISSUES개 이슈 발견"
fi

# 로그 기록
echo "" >> "$LOG_FILE"
echo "## [$DATE] lint | automated" >> "$LOG_FILE"
echo "- Broken links: $BROKEN_COUNT, Orphans: $ORPHAN_COUNT, Oversized: $OVER_COUNT, Placeholders: $PLACEHOLDER_COUNT, Total: $TOTAL" >> "$LOG_FILE"
