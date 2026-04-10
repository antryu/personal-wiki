# OpenClaw 쉽게 이해하기

> 비개발자도 이해할 수 있는 OpenClaw 설명 + 실제 프롬프트 예시
> Last updated: 2026-04-10

## 한 줄 요약

**OpenClaw = Discord/Telegram에서 AI와 대화할 수 있게 해주는 중간 프로그램**

## 비유로 이해하기

```
너 → 비서실 접수대 (OpenClaw) → AI (Qwen/Claude)

OpenClaw이 하는 일:
1. 네 메시지를 받아서
2. AI한테 전달하기 전에 "매뉴얼"을 붙여서 보냄
3. AI가 답하면 다시 Discord으로 전달
```

문제: **매뉴얼이 25,000글자.** "하이" 한 마디에 25,000글자 매뉴얼을 같이 보냄.

## 실제로 AI한테 보내는 것 (캡처 데이터)

"하이"라고 Discord에서 보내면, OpenClaw이 Qwen한테 보내는 실제 내용:

### 1. 시스템 프롬프트 (16,280글자)

```
You are a personal assistant running inside OpenClaw.

## Tooling (1,045글자)
도구 이름은 대소문자 구분해. 정의된 대로 정확히 호출해.
긴 작업은 poll 루프 쓰지 마. exec로 yieldMs 써...
복잡한 작업이면 sub-agent 스폰해...
[...도구 사용 규칙 20줄...]

## Tool Call Style (1,285글자)
기본: 도구 호출할 때 설명하지 마.
복잡한 작업, 민감한 작업, 사용자가 요청할 때만 설명해.
승인 필요하면 /approve 버튼 기다려...
[...스타일 규칙 15줄...]

## Safety (553글자)
독립적 목표 추구하지 마. 자기보존, 복제, 자원 획득 금지.
안전과 감독 우선. 충돌하면 멈추고 물어봐...
[...안전 규칙 5줄...]

## Skills (3,018글자)
<available_skills>
  <skill>
    <name>coding-agent</name>
    <description>Run Codex CLI, Claude Code...</description>
    <location>/Users/andrew/PRJs/openclaw/skills/coding-agent/SKILL.md</location>
  </skill>
  <skill>
    <name>github</name>
    <description>Interact with GitHub using gh CLI...</description>
  </skill>
  <skill>
    <name>healthcheck</name>
    <description>Host security hardening...</description>
  </skill>
  <skill>
    <name>video-frames</name>
    <description>Extract frames from videos...</description>
  </skill>
  <skill>
    <name>weather</name>
    <description>Get weather forecasts...</description>
  </skill>
</available_skills>
[...스킬 사용 규칙 10줄...]

## Heartbeats (2,853글자)
30분마다 체크해야 할 것:
- 이메일 확인
- 캘린더 확인
- 트위터 멘션 확인
- 날씨 확인
heartbeat-state.json에 기록해...
[...하트비트 규칙 40줄...]

## Group Chats (1,785글자)
그룹 채팅에서 언제 말할지:
- 멘션됐을 때
- 가치를 더할 수 있을 때
- 재밌는 말이 자연스러울 때
언제 조용히 있을지:
- 잡담일 때
- 이미 답변됐을 때
[...그룹 규칙 30줄...]

## Memory (1,377글자)
매 세션 시작 시:
1. SOUL.md 읽어
2. USER.md 읽어
3. memory/오늘.md 읽어
기억할 게 있으면 파일에 써. "머릿속 메모"는 안 됨.
[...메모리 규칙 20줄...]

## Workspace Files (주입된 파일들)
AGENTS.md, IDENTITY.md, SOUL.md, TOOLS.md, USER.md 내용 전부
```

### 2. Tools JSON (18,137글자)

```json
{
  "tools": [
    {
      "name": "read",
      "description": "Read file contents",
      "parameters": { "path": "string" }
    },                                          // 706글자
    {
      "name": "edit",
      "description": "Make precise edits",
      "parameters": { "path": "...", "old": "...", "new": "..." }
    },                                          // 1,281글자
    {
      "name": "write", ... },                   // 453글자
    {
      "name": "exec",
      "description": "Execute shell commands",
      "parameters": { "command": "...", "timeout": "..." }
    },                                          // 1,695글자
    {
      "name": "message",
      "description": "Send messages to Discord/Telegram/WhatsApp...",
      "parameters": {
        "channel": "...",
        "target": "...",
        "text": "...",
        "replyTo": "...",
        "threadId": "...",
        // ... 수십 개 옵션
      }
    },                                          // 12,017글자 ← 이게 전체의 66%
    {
      "name": "session_status", ... }           // 528글자
  ]
}
```

### 3. 실제 대화 메시지 (863글자)

```json
{ "role": "user", "content": "하이" }
```

### 합계

| 항목 | 글자 수 | 비율 |
|------|---------|------|
| 시스템 프롬프트 | 16,280 | 47% |
| Tools JSON | 18,137 | **52%** |
| **"하이"** | **2** | **0.006%** |
| **총** | **34,419** | |

**"하이" 2글자를 보내기 위해 34,000글자를 같이 보냄.**

## vs y-bot

y-bot이 같은 "하이"를 처리할 때:

```json
{
  "messages": [
    {
      "role": "system",
      "content": "너는 Andrew의 AI 어시스턴트야. 한국어로 간결하게 답해."
    },
    {
      "role": "user",
      "content": "하이"
    }
  ]
}
```

| 항목 | OpenClaw | y-bot |
|------|----------|-------|
| 시스템 프롬프트 | 16,280글자 | **42글자** |
| Tools JSON | 18,137글자 | **0글자** (필요할 때만) |
| "하이" | 2글자 | 2글자 |
| **총** | **34,419글자** | **44글자** |
| **응답 시간** | **34초** | **2초** |

## 왜 이렇게 됐나

OpenClaw은 **범용 플랫폼**이라서:
- 모든 상황에 대비 (그룹채팅 규칙, 하트비트, 메모리, 보안...)
- 모든 도구 정의를 매번 전송 (message 도구 하나가 12K)
- 모든 workspace 파일 주입 (AGENTS.md, SOUL.md, MEMORY.md...)

**Claude Sonnet/Opus처럼 컨텍스트가 200K+인 모델**에서는 34K가 문제 안 됨.
**Qwen 32B처럼 컨텍스트 40K인 로컬 모델**에서는 치명적.

## Related
- [[tech/openclaw-architecture]] — OpenClaw 내부 구조 (개발자용)
- [[tech/y-platform-design]] — y-platform 설계 문서
