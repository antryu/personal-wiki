---
title: Claude Sessions — Map of Content
type: index
---

# Claude Sessions Index

Auto-generated digests + manual knowledge captures from Claude Code sessions.

## Structure

- `daily/YYYY-MM-DD.md` — auto digest from SessionStop hook (Haiku)
- `notes/YYYY-MM-DD-<slug>.md` — manual knowledge captures

## How to use

### Auto digest
세션 끝나면 자동으로 `daily/오늘.md`에 추가됨. 같은 날 여러 세션은 시간별로 누적.

### Manual capture
```bash
~/.claude/scripts/obsidian_note.py --tags "y-tower,infra" "제목" "본문 내용"
```

또는 Claude Code 안에서:
> "이 결정을 옵시디언에 저장해줘 — 제목: ..., 태그: ..."

### 검색
- Obsidian 검색창: `path:claude-sessions <키워드>`
- 태그 검색: `#project/y-holdings`
- 그래프 뷰: `claude-sessions/` 폴더 필터링

## Recent daily digests

```dataview
TABLE file.size AS size
FROM "Projects/y-Holdings/claude-sessions/daily"
SORT file.name DESC
LIMIT 20
```

## Recent notes

```dataview
TABLE tags
FROM "Projects/y-Holdings/claude-sessions/notes"
SORT file.ctime DESC
LIMIT 20
```

## Tag cloud (Dataview required)

```dataview
TABLE length(rows) AS count
FROM "Projects/y-Holdings/claude-sessions"
FLATTEN file.tags AS tag
GROUP BY tag
SORT count DESC
```

## Maintenance

- Stale logs: `~/.claude/scripts/obsidian_digest.log`
- Hook config: `~/.claude/settings.json` → `hooks.SessionStop`
- Digest script: `~/.claude/scripts/obsidian_digest.py`
- Note script: `~/.claude/scripts/obsidian_note.py`
