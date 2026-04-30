---
title: Legal Library — Map of Content
type: index
tags: [legal, moc]
---

# 법률도서관 (Legal Library)

Legaly 페르소나가 검색·인용한 법령·판례 캐시.

## Structure

- `cache/YYYY-MM-DD-HHMMSS-(law|prec)-<query>.md` — 검색 결과 (raw + 포맷)
- `notes/` — 수동 정리한 법령 해석·체크리스트 (생성 시)

## How to query

### From Discord (#법률도서관)
Legaly에게 자연어로 질문 → Bash로 `lawsearch.sh` 호출 → 결과 인용 + 자동 저장.

### From CLI
```bash
# 법령
~/.claude/scripts/lawsearch.sh "수소법"

# 판례
~/.claude/scripts/lawsearch.sh -p "계약위반"

# 결과 저장
~/.claude/scripts/lawsearch.sh -s "수소법"
```

### From M1 y-tower
M1의 Legaly 에이전트가 `law_search` 도구 호출 → 동일 API → y-tower 채팅창에 표시.

## Data sources

1. **law.go.kr DRF API** (primary) — `OC=Hydrogen`
2. **legalize-kr** (fallback) — git 기반 로컬 검색 (M4)
3. **법망 MCP** (final fallback) — api.beopmang.org

## Recent searches

```dataview
TABLE query, target, date AS searched
FROM "Projects/y-Holdings/legal/cache"
SORT file.ctime DESC
LIMIT 20
```

## Tag cloud

```dataview
TABLE length(rows) AS count
FROM "Projects/y-Holdings/legal"
FLATTEN file.tags AS tag
GROUP BY tag
SORT count DESC
```

## Maintenance

- 캐시 검색: `grep -r "키워드" cache/`
- 오래된 결과 정리: `find cache/ -mtime +180 -delete` (6개월 이상)
- 인용 시 항상 원본 URL 확인 (시행일·개정 반영)
