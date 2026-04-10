# OpenClaw 아키텍처 분석

> OpenClaw의 내부 구조를 분석한 문서. 포크/커스텀 시 참조용.
> Last updated: 2026-04-07 v2

## Overview

OpenClaw은 **LLM 에이전트 플랫폼**이야. Discord/Telegram 같은 채널에서 메시지를 받으면, 에이전트가 LLM을 호출하고, 필요하면 도구(파일 읽기, 코드 실행 등)를 사용해서 답변해.

## 메시지 흐름 (한눈에 보기)

```
사용자 메시지 (Discord/Telegram)
    ↓
채널 라우터 (extensions/discord/)
    ↓
세션 관리 (src/channels/)
    ↓
에이전트 런타임 (src/agents/pi-embedded-runner/run.ts)
    ↓ 조립
┌─────────────────────────────────┐
│ 시스템 프롬프트                    │
│  = 정체성 + 스킬 설명 + 도구 목록   │
│  + 메모리 + 컨텍스트 파일들         │
│  (여기가 무거운 부분!)              │
└─────────────────────────────────┘
    ↓
LLM 호출 (Qwen/Sonnet/Opus)
    ↓
도구 사용 필요?
    → YES: 도구 실행 → 결과 → LLM 재호출 (루프)
    → NO: 텍스트 응답 → 채널로 전송
```

## 핵심 파일 5개

### 1. 시스템 프롬프트 조립
**`src/agents/system-prompt.ts`** (line 312: `buildAgentSystemPrompt()`)

LLM에 보내는 시스템 프롬프트를 조립하는 핵심 함수.

포함 항목 (순서대로):
1. 정체성 (이름, 성격)
2. 컨텍스트 파일 (agents.md, soul.md, memory.md 등)
3. **스킬 설명** ← 이게 토큰 많이 먹음
4. 메모리
5. 메시징 규칙
6. **도구 사용법** ← 이것도 큼
7. 시간, 런타임 정보

### 2. 스킬 로딩
**`src/agents/skills/workspace.ts`** (`loadWorkspaceSkillEntries()`, `buildWorkspaceSkillsPrompt()`)

skills/ 폴더의 SKILL.md를 스캔하고 XML로 변환해서 프롬프트에 주입.

```xml
<available_skills>
  <skill>
    <name>weather</name>
    <description>날씨 조회...</description>
  </skill>
  <!-- 13개 반복... -->
</available_skills>
```

**이게 Qwen 타임아웃의 주범.** 13개 스킬 설명이 매번 들어감.

### 3. 도구 카탈로그
**`src/agents/tool-catalog.ts`** (line 53: `CORE_TOOL_DEFINITIONS`, line 316: `CORE_TOOL_PROFILES`)

도구를 프로필별로 그룹화:
- `minimal` — 기본 도구만
- `coding` — 코딩 도구 추가
- `messaging` — 메시지 도구 추가
- `full` — 전부

도구 예시: read, write, edit, exec, message, web_search, cron, gateway...

### 4. LLM 프로바이더 (교체 가능)
**`extensions/` 폴더**

```
extensions/
├── anthropic/     → Claude (Sonnet, Opus)
├── ollama/        → 로컬 LLM (Qwen, Gemma 등)
├── openai/        → GPT, Codex
├── google/        → Gemini
└── discord/       → Discord 채널 연동
```

각 프로바이더는 플러그인으로 독립적. `openclaw.plugin.json` 매니페스트로 선언.

### 5. 에이전트 실행기
**`src/agents/pi-embedded-runner/run.ts`** (`runEmbeddedPiAgent()`)
**프롬프트 모드**: `src/agents/pi-embedded-runner/run/attempt.prompt-helpers.ts` (line 87: `resolvePromptModeForSession()`)

실제 실행 엔진:
1. 모델 + 인증 해결
2. 시스템 프롬프트 조립
3. 도구 목록 조립
4. LLM 호출
5. 도구 사용 → 결과 → 재호출 (루프, **최대 50 iterations** — `pi-agent-core` 기본값)
6. 최종 텍스트 응답 반환

> 도구 루프 상한: pi-agent-core의 `maxToolRoundtrips` 기본 50회. 무한 루프 방지.
> 포크에서 Qwen용으로 10~20회로 낮추는 것 권장.

## 무거운 이유

매 메시지마다 LLM에 보내는 것:

| 항목 | 예상 토큰 |
|------|----------|
| 시스템 프롬프트 (정체성, 규칙) | ~2,000 |
| 스킬 설명 13개 | ~3,000 |
| 도구 정의 20+개 | ~4,000 |
| 대화 히스토리 | 가변 |
| **총 오버헤드** | **~9,000+** |

Qwen 32B (context 40K)에 9K 오버헤드 = 22% 낭비. 거기에 히스토리까지 쌓이면 터짐.
경량화 후 2.8K → 7%로 개선 ([[tech/y-platform-design]] 참조).

## 경량화 포인트

### 1. 스킬 정리 (가장 효과적)
13개 → 4개로: coding-agent, discord, session-logs, node-connect
→ 약 2,000 토큰 절약

### 2. 도구 프로필 변경
`full` → `minimal` 또는 커스텀
→ 약 2,000 토큰 절약

### 3. 시스템 프롬프트 간소화
불필요한 섹션 (voice, sandbox, docs) 제거
→ 약 1,000 토큰 절약

### 4. compaction 최적화
`reserveTokensFloor: 20000` → 컨텍스트 초과 방지

> 근거: Qwen 32B 컨텍스트 40K - 오버헤드 2.8K - 안전 마진 5K = 약 32K 사용 가능.
> 20K를 예약하면 히스토리가 ~12K를 넘기 전에 compaction 발동.
> 모델 변경 시 재계산: `reserveTokensFloor = contextWindow * 0.5`

## 포크 커스텀 계획 (_y Platform)

```
_y Platform (openclaw-fork 기반)
│
├── @y/core         ← OpenClaw 경량화 .................. [Phase 1]
│   ├── 시스템 프롬프트 최소화
│   ├── 스킬 4개 (coding, discord, session-logs, node-connect)
│   └── 도구 minimal 프로필 (6개)
│
├── @y/skills       ← 커스텀 스킬 모듈
│   ├── wiki/       ← personal wiki 연동 ............... [Phase 2]
│   ├── coding/     ← Claw Code 연동 ................... [Phase 2]
│   ├── trading/    ← 트레이딩 연동 .................... [Phase 3+]
│   └── research/   ← 논문/리서치 ...................... [Phase 3+]
│
├── @y/tower        ← 조직 프레임워크 .................. [Phase 3]
│   ├── 에이전트 역할 (Counsely, Buildy...)
│   ├── 지시 체계
│   └── 업무 흐름
│
└── @y/ui           ← 프론트엔드 ....................... [Phase 3+]
    ├── Discord 봇 (기존 OpenClaw 채널 사용)
    ├── 웹 대시보드
    └── Obsidian 플러그인
```

## Related
- [[projects/y-holdings/y-holdings-index]]
- [[business/tower/y-tower]]
- [[infra/m116gmac]]
- [[infra/m4max128g]]

## Sources
- 소스 분석: ~/PRJs/openclaw-fork/
- 핵심 파일: src/agents/system-prompt.ts, src/agents/skills/workspace.ts, src/agents/tool-catalog.ts
