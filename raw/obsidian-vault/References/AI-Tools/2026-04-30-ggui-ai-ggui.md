---
date: 2026-04-30
source: https://github.com/ggui-ai/ggui
type: oss-shared-by-chairman
github: ggui-ai/ggui
language: TypeScript
relevance_score: 7.5
relevance_reason: "AI agent용 ephemeral UI 자동생성 - Cap 대시보드, MyBidWise 입찰 UI 자동화 가능성"
tags: [github, oss-link, mcp, agent-ui, ephemeral-ui, auto-archived]
---

# ggui — AI Agents ↔ Humans Universal Interface Layer

**의장 공유**: 2026-04-30 #buddy 채널.

## 핵심
"agents가 자연언어로 설명 → ggui가 MCP를 통해 ephemeral interactive UI 자동생성"
- No frontend code, no React templates
- 다중 runtime 지원 (Claude, Cursor, ChatGPT, 커스텀)
- Self-hosted (Zero Guuey account required)

## Tech Stack
- TypeScript 98.5% monorepo
- React (@ggui-ai/react), Node.js/Express, WebSocket, MCP
- MIT license, 2,533 commits, 1 star (초기)

## 핵심 기능 5
1. UI 자동생성 — agent 설명만으로 동적 UI
2. MCP 기반 통신 (runtime-negotiated data contract)
3. 실시간 업데이트 (`ggui_push`/`ggui_update`)
4. Self-hosted
5. 다중 runtime 호환

## 의장 portfolio 활용 가능성

| 영역 | 가능성 | 시나리오 |
|---|---|---|
| **Cap 트레이딩** | 🟢 High | 실시간 market dashboard 자동 생성 (agents 분석 → UI) |
| **MyBidWise** | 🟢 High | bidding interface 동적 생성 (공고별 입찰 UI 자동화) |
| **VITA** | 🟡 Medium | 의장 데이터 시각화 (HRV·BP·sleep) — 단 vita-expo native 우선 |
| **Asset** | 🟢 High | 자산 분석 결과 인터랙티브 dashboard |

## 통합 난이도
**중간~상** — Next.js 프론트에 `<McpAppIframe>` 컴포넌트 임베드 가능. WebSocket/MCP 학습 필요.

## 결론
AI-driven ephemeral UI generation. Agent code 변경 없이 structured interaction 즉시 visualize. 의장 정반합 시스템 결과를 더 풍부한 UI로 표시 가능.

---
*Auto-archived 2026-04-30 by Counsely (의장 share via #buddy)*
