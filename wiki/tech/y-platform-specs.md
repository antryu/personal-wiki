# _y Platform 런타임 스펙

> 설계 문서([[tech/y-platform-design]])의 실행 스펙. Single source of truth.
> Last updated: 2026-04-07 v3

## 1. LLM 라우터 스펙

### 라우팅 계층 (우선순위 높은 순)

```
1. 메시지 레벨  — /model sonnet (사용자가 명시적으로 지정)
2. 에이전트 레벨 — agents/buildy/model.json (에이전트별 기본 모델)
3. 태스크 레벨  — Planner=API, Generator=Ollama, Evaluator=API
4. 글로벌 레벨  — config의 agents.defaults.model (전체 기본값)
```

### 모델 레지스트리 (동적 감지)

LLM을 하드코딩하지 않음. 런타임에 사용 가능한 모델을 감지:

```typescript
interface ModelCapability {
  id: string;                    // "ollama-m4/qwen3:32b"
  provider: "ollama" | "anthropic" | "openai" | "google";
  contextWindow: number;         // 32768, 195000, 977000
  supportsTools: boolean;
  supportsVision: boolean;
  costPerMTokInput: number;      // 0 (로컬), 3 (sonnet), 15 (opus)
  costPerMTokOutput: number;
  latencyMs: number;             // 측정값
  local: boolean;
}

// 캐시: 60초. 매 요청마다 fetch하지 않음.
let _cache: { models: ModelCapability[]; expiry: number } | null = null;

async function discoverModels(): ModelCapability[] {
  if (_cache && Date.now() < _cache.expiry) return _cache.models;
  const ollama = await fetch("http://{M4_IP}:11434/api/tags");
  const anthropic = listAnthropicModels(apiKey);
  const models = [...ollama, ...anthropic];
  _cache = { models, expiry: Date.now() + 60_000 };
  return models;
}
```

### 동적 모델 라우팅

프롬프트 크기에 따라 자동으로 모델 선택:

```typescript
function autoSelectModel(context: {
  estimatedTokens: number;
  taskType: "chat" | "code" | "plan" | "evaluate";
  agentConfig: AgentModelConfig;
}): string {
  const available = discoverModels();

  // 1. 에이전트 설정에 명시된 모델 우선
  if (context.agentConfig[context.taskType])
    return context.agentConfig[context.taskType];

  // 2. 프롬프트 크기에 맞는 모델 자동 선택
  const fits = available.filter(m => m.contextWindow > context.estimatedTokens * 1.5);

  // 3. 비용 최적화: 로컬 → 저렴 API → 고가 API
  const sorted = fits.sort((a, b) => a.costPerMTokInput - b.costPerMTokInput);

  return sorted[0].id;
}
```

### 에이전트별 모델 설정

```jsonc
// ~/.y/agents/buildy/model.json
{
  "primary": "ollama-m4/qwen3:32b",
  "planner": "anthropic/claude-sonnet-4-6",
  "evaluator": "anthropic/claude-sonnet-4-6",
  "fallback": "anthropic/claude-sonnet-4-6",
  "auto": true  // true면 프롬프트 크기에 따라 동적 선택
}
```

### 라우터 로직

resolveModel → (auto=true일 때) → autoSelectModel 위임:

```typescript
function resolveModel(context: {
  userOverride?: string;
  agentId: string;
  taskPhase?: "plan" | "generate" | "evaluate";
  estimatedTokens?: number;
}): string {
  // 1. 사용자 명시 지정 (최우선)
  if (context.userOverride) return resolveAlias(context.userOverride);

  const agentConfig = loadAgentModel(context.agentId);

  // 2. auto=true면 프롬프트 크기 기반 동적 선택으로 위임
  if (agentConfig.auto && context.estimatedTokens) {
    return autoSelectModel({
      estimatedTokens: context.estimatedTokens,
      taskType: context.taskPhase ?? "chat",
      agentConfig,
    });
  }

  // 3. 태스크 페이즈별 (auto=false)
  if (context.taskPhase === "plan" && agentConfig.planner)
    return agentConfig.planner;
  if (context.taskPhase === "evaluate" && agentConfig.evaluator)
    return agentConfig.evaluator;

  // 4. 에이전트 기본
  return agentConfig.primary ?? globalConfig.model.primary;
}

function handleFailure(model: string, error: Error): string | null {
  const agentConfig = loadAgentModel(currentAgent);
  if (agentConfig.fallback && agentConfig.fallback !== model)
    return agentConfig.fallback;
  return null;  // 에스컬레이션
}
```

### 폴백 체인

```
Qwen 32B (로컬) → 타임아웃/실패 → Sonnet (API) → 실패 → 에러 반환
```

자동 폴백 시 사용자에게 알림:
```
⚠️ 로컬 모델 타임아웃. Sonnet API로 전환했습니다.
```

### Ollama 모델 상주 (keep-alive)

M4 Max 128GB RAM에서 Qwen 32B (~20GB VRAM) 상주 가능.

```bash
# M4에서 실행 — 모델 메모리 해제 방지
OLLAMA_KEEP_ALIVE=-1 ollama serve
# 또는 API로 설정
curl http://localhost:11434/api/generate -d '{"model":"qwen3:32b","keep_alive":-1}'
```

- 첫 로딩: ~30초 (콜드 스타트)
- keep-alive 후: <1초 (핫 스타트)
- 메모리: ~20GB 상주, 나머지 108GB는 다른 모델/작업용

---

## 2. TaskPacket / LaneEvent 스펙 (OpenClaw ↔ Claw Code IPC)

### TaskPacket (OpenClaw → Claw Code)

```typescript
interface TaskPacket {
  version: 1;                    // IPC 프로토콜 버전
  id: string;                    // UUID (= idempotencyKey)
  type: "code" | "review" | "refactor" | "test";
  objective: string;
  repo: string;
  branch?: string;
  branchPolicy: "create" | "use-existing" | "auto";
  context?: {
    files?: string[];
    wikiRefs?: string[];
    priorDecisions?: string[];
  };
  acceptance?: {
    tests?: string[];
    lint?: boolean;
    typeCheck?: boolean;
    customCheck?: string;
  };
  model?: {
    planner?: string;
    generator?: string;
    evaluator?: string;
  };
  timeout?: number;              // ms, 기본 600000
  agentId: string;
  requestedBy: string;
}
```

### LaneEvent (Claw Code → OpenClaw)

```typescript
type LaneEvent =
  | { type: "started"; taskId: string; timestamp: number }
  | { type: "heartbeat"; taskId: string; timestamp: number }  // 10초 간격
  | { type: "phase"; taskId: string; phase: "plan" | "generate" | "evaluate"; message: string }
  | { type: "progress"; taskId: string; message: string; filesChanged?: string[] }
  | { type: "tool_use"; taskId: string; tool: string; input: string; output?: string }
  | { type: "model_switch"; taskId: string; from: string; to: string; reason: string }
  | { type: "recovery"; taskId: string; attempt: number; maxAttempts: number; reason: string }
  | { type: "blocked"; taskId: string; reason: string; needsHuman: boolean }
  | { type: "finished"; taskId: string; result: TaskResult }
  | { type: "failed"; taskId: string; error: string; recoveryAttempts: number }
```

```typescript
interface TaskResult {
  success: boolean;
  branch: string;
  commits: string[];
  filesChanged: string[];
  testsPassed: boolean;
  summary: string;
  metrics?: {
    tokensUsed: { planner: number; generator: number; evaluator: number };
    durationMs: number;
    modelBreakdown: Record<string, number>;
  };
}
```

### IPC 프로토콜

```bash
echo '{"version":1,"id":"abc",...}' | claw-code run --stdin --events-stdout
```

한 줄 = 한 JSON. 개행으로 구분.

### IPC 신뢰성

**Heartbeat:**
- Claw Code는 10초마다 `{ type: "heartbeat" }` 전송
- OpenClaw이 30초간 heartbeat 없으면 → `kill -0` 생존 확인
- 죽었으면 → exit code 확인 → 큐에서 재시도 (최대 2회)

**프로세스 감시:**
- exit 0: 정상 (finished 확인)
- exit 1: 에러 (failed 확인)
- exit 137/143: 외부 kill → 큐에서 재시도
- 그 외: 크래시 → 로그 + 알림

**멱등성:**
- TaskPacket.id = idempotencyKey
- 작업 시작 시 `~/.y/lanes/{taskId}/` 생성
- 재시도 시 기존 디렉토리 → 이어서 진행
- 브랜치에 taskId 포함 → 중복 커밋 방지

---

## 3. 스킬 충돌 해결

### 규칙
1. 같은 이름 스킬 → **에러, 로드 거부** (기본)
2. `overrides` 필드가 명시된 경우에만 오버라이드 허용
3. 버전: SKILL.md 프론트매터에 `version: 1.0.0`
4. 로드 순서: `skills/bundled/` → `skills/user/` → `skills/tower/`

```yaml
---
name: wiki-query
version: 1.0.0
description: ...
overrides: coding-agent  # 이 필드가 있을 때만 오버라이드 허용
---
```

> 이전에 "사용자 스킬 우선, 경고"라는 규칙이 있었으나 **삭제**. overrides 없이 충돌하면 에러.

---

## 4. 에이전트 권한 매트릭스

| 에이전트 | 도구 프로필 | 스킬 접근 | 다른 에이전트 호출 |
|---------|-----------|----------|----------------|
| **Counsely** | messaging | session-logs, discord | Buildy, Searchy, Testy 위임 가능 |
| **Buildy** | coding | coding-agent | 없음 (실행만) |
| **Searchy** | minimal + web_search | wiki-query, web-search | 없음 |
| **Testy** | coding (read-only exec) | session-logs | 없음 |
| **User (직접 대화)** | full | 전부 | 전부 |

### 집행 지점 (런타임 체크)

```
메시지 수신 → 세션 라우터 → 에이전트 식별
    ↓
[체크 1] 도구 프로필 로드 (tool-policy-pipeline.ts)
    → 도구 호출 시 allowlist/deny 대조
    → 거부 시 tool_result: "permission denied"
    ↓
[체크 2] 스킬 allowlist 로드 (skills/workspace.ts)
    → 스킬 프롬프트 주입 시 allowlist만 포함
    → 허용 안 된 스킬은 시스템 프롬프트에서 제외
    ↓
[체크 3] 에이전트 호출 권한 (sessions_spawn 도구)
    → 호출 가능한 에이전트 목록 대조
    → 목록에 없으면 spawn 거부
```

### 설정

```jsonc
// ~/.y/agents/buildy/permissions.json
{
  "tools": {
    "profile": "coding",
    "deny": ["message", "cron"]
  },
  "skills": {
    "allowlist": ["coding-agent"]
  },
  "delegation": {
    "canSpawn": []  // 다른 에이전트 호출 불가
  }
}
```

---

## 5. Wiki 플러그인 역할 정의

### 3가지 접근 방식

**A. 에이전트 컨텍스트 주입 (자동, 200토큰)**
```
Available wiki: 27 articles. Categories: business, finance, research, tech, projects.
Use read("wiki/index.md") for full catalog.
```

**B. 검색 도구 (명시적 호출)**
```typescript
{
  name: "wiki_search",
  description: "Search personal wiki by keyword",
  parameters: { query: { type: "string" } }
}
// 내부: grep -rl "query" wiki/ → 파일 목록
```

**C. 메모리 플러그인 (백그라운드)**
OpenClaw memorySearch에 wiki 경로 추가.

### 중복 방지 규칙 (dedup)

A와 C가 동시에 같은 내용을 주입하는 문제 해결:
- **A는 카탈로그만** (카테고리 목록, 200토큰) — article 본문 없음
- **C는 질의 관련 article 본문** (memorySearch 결과) — 카탈로그 없음
- C가 article을 주입할 때 해당 article의 파일경로를 `_injectedArticles` Set에 기록
- B(wiki_search 도구)가 호출될 때 `_injectedArticles`에 있는 파일은 "이미 컨텍스트에 있음" 표시 → 중복 read 방지

```typescript
// dedup 로직
const _injectedArticles = new Set<string>();

// C (memorySearch) 주입 시
function injectFromMemory(articles: string[]) {
  for (const path of articles) {
    _injectedArticles.add(path);
    // 본문 주입...
  }
}

// B (wiki_search) 호출 시
function wikiSearch(query: string): string[] {
  const results = grep(query, "wiki/");
  return results.map(path =>
    _injectedArticles.has(path)
      ? `${path} (already in context)`
      : path
  );
}
```

### 에이전트별 wiki 접근

| 에이전트 | 접근 방식 | 이유 |
|---------|----------|------|
| Counsely | A + B | 업무 분배 시 카탈로그 참조 + 검색 |
| Buildy | B만 | 코딩 시 필요한 스펙만 검색, 토큰 절약 |
| Searchy | A + B + C | 리서치 시 기존 지식 최대 활용 |
| User | A + B | 직접 질문 |

---

## 6. 에러 처리 / 복구

### 에이전트 레벨
```
타임아웃 → 재시도 1회 → Counsely 에스컬레이션
크래시 → KeepAlive 재시작 → 세션 복구
컨텍스트 오버플로우 → compaction → 실패 시 reset + 핸드오프
```

### Claw Code 레벨 (7가지, 이미 구현됨)
1. 빌드 실패 → 에러 분석 → 자동 수정
2. 테스트 실패 → diff 분석 → 수정
3. 타임아웃 → 태스크 분할
4. 권한 거부 → 에스컬레이션
5. 머지 충돌 → 리베이스
6. Stale 브랜치 → 감지 + 경고
7. LLM 실패 → 폴백 전환

### 시스템 레벨
```
M1 다운 → LaunchAgent KeepAlive
M4 끊김 → OpenClaw 재연결
Ollama 다운 → 폴백 체인 → API
```

---

## 7. 업그레이드 경로

### 플러그인 호환성
```jsonc
{
  "name": "@y/wiki-plugin",
  "version": "1.0.0",
  "minPlatformVersion": "2026.4.0",
  "maxPlatformVersion": "2027.*"
}
```

### 명령어
```bash
y update              # 코어
y plugin update wiki  # 플러그인
y coding update       # Claw Code
y tower sync          # Tower
```

### 브레이킹 체인지
- 메이저: 마이그레이션 스크립트
- 마이너: 하위 호환
- TaskPacket/LaneEvent: version 필드로 분기

---

## 8. Phase 1 코딩 작업 경로

Phase 1에서 코딩 요청이 오면:

```
사용자: "auth 미들웨어 만들어줘"
    ↓
OpenClaw → coding-agent 스킬 매칭
    ↓
Claude Code CLI 호출 (기존 방식):
  claude --print --permission-mode bypassPermissions "auth 미들웨어 구현"
    ↓
결과 → Discord 응답
```

- Claw Code IPC는 **Phase 2**에서 구현
- Phase 1에서는 기존 `claude --print` 방식 유지
- Qwen은 코딩 요청에 직접 응답하지 않음 (코딩은 Claude Code에 위임)

---

## 9. 비용 예산 기준

Phase 1 기준 (Claw Code 미연동, Claude Code CLI 사용):

| 항목 | 모델 | 일 비용 |
|------|------|-------:|
| 일반 대화 (80%) | Qwen 32B (로컬) | $0 |
| 코딩 요청 (20%) | Claude Code CLI (OAuth) | $0 (Max 구독) |
| **Phase 1 합계** | | **$0/일** |

Phase 2 기준 (Claw Code + API Planner/Evaluator):

| 항목 | 모델 | 일 비용 |
|------|------|-------:|
| 일반 대화 | Qwen 32B | $0 |
| Planner | Sonnet API | ~$0.60 |
| Generator | Qwen 32B | $0 |
| Evaluator | Sonnet API | ~$0.60 |
| **Phase 2 합계** | | **~$1.20/일** |

> Phase 2에서 Evaluator 로컬화 검증 후 → ~$0.60/일로 절감 가능

---

## 10. 응답 SLA

| 태스크 유형 | 목표 | 측정 방법 |
|-----------|------|----------|
| 단순 대화 ("안녕") | **3초** | Discord 메시지 → 응답 도착 |
| wiki 검색 질문 | **10초** | read(index.md) + read(article) + 응답 |
| 코딩 작업 (Phase 1) | **5분** | Claude Code CLI 실행 완료 |
| 코딩 작업 (Phase 2) | **10분** | Claw Code 전체 루프 |

> "5초 이내" SLA는 단순 대화에만 적용. wiki 포함 질문은 10초.

## Related
- [[tech/y-platform-design]] — 전체 아키텍처
- [[tech/openclaw-architecture]] — OpenClaw 내부 구조

## Sources
- OpenClaw 포크: ~/PRJs/openclaw-fork/
- Claw Code: ~/PRJs/claw-code/
