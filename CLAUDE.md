# Personal Wiki

## Overview
Karpathy + FarzaTV 방식의 개인 위키피디아.
raw 데이터(Discord, Obsidian)를 LLM이 wiki article로 컴파일.
원본 보존 + 요약 article + 백링크 구조.

## Architecture
```
raw/           ← 원본 그대로 보존 (절대 수정/삭제 금지)
  discord/     ← Discord 채널 히스토리 (.md per day)
  obsidian/    ← Obsidian Vault symlinks
wiki/          ← 정리된 articles (요약 + 원본 링크)
  index.md     ← 에이전트 진입점 (전체 카탈로그)
  _meta/       ← 인덱스 파일들
scripts/       ← 컴파일/인제스트/린트 스크립트
skills/        ← Claude Code 스킬 정의
content/       ← X thread, LinkedIn 등 콘텐츠 초안
```

## Rules
1. **raw/ 절대 수정 금지** — 원본 데이터는 읽기 전용
2. **wiki article 구조**:
   - 제목 (H1)
   - 요약 (2-3문장)
   - 핵심 내용 (섹션별)
   - 원본 대화 링크 (raw/ 참조)
   - 백링크 ([[관련 article]])
   - 최종 업데이트 날짜
3. **index.md 항상 최신 유지** — 새 article 추가 시 index도 업데이트
4. **백링크 적극 사용** — [[project/mybidwise]] 형식
5. **중복 article 금지** — 기존 article 업데이트 우선

## Wiki Article Template
```markdown
# {Title}

> {1-2 sentence summary}
> Last updated: {date}

## Overview
{핵심 내용}

## Key Points
- point 1
- point 2

## Related
- [[related-article-1]]
- [[related-article-2]]

## Sources
- [원본 대화](raw/discord/{channel}/{date}.md)
- [Obsidian 노트](raw/obsidian/main/{path})
```

## Sync
- Git으로 M4 ↔ M1 동기화
- Obsidian Git Plugin 사용
- Discord: OpenClaw 봇이 wiki 쿼리

## Commands
- `/wiki-query {질문}` — wiki 검색 후 답변
- `/wiki-compile {channel}` — raw → wiki 컴파일
- `/wiki-ingest {file}` — 새 파일 인제스트

## Karpathy llm-wiki Pattern (2026-04-06 추가)
Reference: raw/references/karpathy-llm-wiki.md

### log.md (append-only 운영 로그)
- 위치: wiki/log.md
- 형식: `## [YYYY-MM-DD] {operation} | {title}`
- 작업 종류: ingest, query, lint, compile
- 예: `## [2026-04-06] ingest | karpathy-llm-wiki`
- grep으로 파싱 가능: `grep "^## \[" log.md | tail -5`

### Lint 워크플로우
주기적으로 wiki 헬스체크:
- 페이지 간 모순 탐지
- 오래된 클레임 (최신 소스에 의해 superseded)
- 인바운드 링크 없는 고아 페이지
- 언급됐지만 own page 없는 개념
- 채울 수 있는 데이터 갭 → 웹 검색 제안

### Ingest 우선순위
1. Discord raw → wiki 컴파일 (채널별)
2. AI 논문 → research/papers/ 업데이트
3. 좋은 쿼리 답변 → wiki에 새 페이지로 보존
