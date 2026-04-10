# _y Platform 설계 문서

> OpenClaw(컨트롤 플레인) + Claw Code(코딩 실행 플레인) + _y Tower(조직) + Harness Design(루프) 통합 플랫폼.
> Last updated: 2026-04-07

## 참조 자료

### 1. Anthropic Harness Design (공식 가이드)
출처: anthropic.com/engineering/harness-design-long-running-apps

**핵심 원칙:**
- **Generator + Evaluator 분리** — 자기평가보다 독립 평가 에이전트가 효과적
- **컨텍스트 관리** — 압축(compaction)보다 리셋(reset)이 나을 때가 있음
- **하네스 복잡성 최소화** — 모델이 좋아지면 불필요한 스캐폴딩 제거
- **파일 기반 통신** — 에이전트 간 상태 전달에 파일 사용

→ _y Platform에 적용: 에이전트 간 wiki 파일로 상태 공유

### 2. Claude Code 스킬 구조
출처: github.com/anthropics/claude-code/.../frontend-design/SKILL.md

**스킬 = SKILL.md 파일 하나:**
```yaml
---
name: frontend-design
description: Create distinctive, production-grade frontend interfaces...
metadata:
  openclaw:
    emoji: "🧩"
    requires: { anyBins: ["claude"] }
---
# 스킬 내용 (프롬프트 + 가이드라인)
```

→ _y Platform에 적용: 스킬 = .md 파일, 플러그인처럼 추가/제거 가능

### 3. OpenClaw (현재 사용 중)
출처: github.com/openclaw/openclaw

- Gateway 컨트롤 플레인 (ws://127.0.0.1:18789)
- 멀티채널 (Discord, Telegram, WhatsApp...)
- 에이전트 런타임 + 도구 실행
- 노드 메시 (M1↔M4)

**문제점:** 시스템 프롬프트 과다 (스킬 53개 + 도구 30개+ = 9K+ 토큰 오버헤드)

### 4. Claw Code (Rust 하네스)
출처: github.com/ultraworkers/claw-code

- Claude Code의 **Rust 재구현** — 25K LOC, 9 크레이트
- 코딩 에이전트 하네스: 컨텍스트 관리, 복구 루프, 권한 시스템
- 이벤트 아키텍처 (LaneEvent)
- MIT 라이선스

---

## _y Platform 아키텍처

### 아키텍처 결정 (확정)

**OpenClaw = 컨트롤 플레인. Claw Code = 코딩 실행 플레인. 상하 관계.**

| 시스템 | 역할 | 위치 | 상태 |
|--------|------|------|------|
| **OpenClaw (포크)** | 채널 라우팅, 세션, 대화, 스킬 디스패치 | M1 게이트웨이 | Phase 1 구현 중 |
| **Claw Code** | 코딩 실행, 컨텍스트 관리, 복구 루프 | M4 노드 | Phase 2 연동 예정 |
| **_y Tower** | OpenClaw 에이전트 설정 (역할/프롬프트) | OpenClaw 설정 레이어 | Phase 3 연동 예정 |
| **Harness Design** | Claw Code 내부 (Planner→Generator→Evaluator) | Claw Code 내부 | Phase 2와 함께 |
| **Frontend Design** | OpenClaw 스킬로 등록 | 스킬 파일 | Phase 1에서 등록 |
| **Wiki** | OpenClaw 메모리 플러그인 | 데이터 레이어 | Phase 1에서 연동 |

### 메시지 흐름

```
Discord/Telegram 메시지
    ↓
OpenClaw Gateway (M1 Pro)
    ├── 일반 대화 → Qwen 32B (M4 Ollama) 직접 응답
    └── 코딩 작업 → [Phase 1] Claude Code CLI 호출
                    [Phase 2] Claw Code 위임
                      ├── Planner   → Claude API (긴 컨텍스트 필요)
                      ├── Generator → Qwen 32B (구현, 무료, 40K 내)
                      └── Evaluator → Claude API (판단 품질)
                      ↓
                  LaneEvent 스트림 → OpenClaw → Discord 응답
```

### Ollama 최적화 전략

**비용 시뮬레이션 (일 100 메시지 기준):**

| 시나리오 | Qwen (무료) | Sonnet API | 일 비용 |
|---------|:-----------:|:----------:|-------:|
| 전부 API | 0% | 100% | ~$3.00 |
| Generator만 로컬 | 80% (토큰) | 20% (토큰) | ~$1.20 |
| Evaluator도 로컬 | 95% | 5% (Planner만) | ~$0.30 |

> 참고: "80% 절감"은 토큰 수 기준. 비용 기준으로는 ~60% 절감 (API 호출은 Planner/Evaluator에 집중되고, 이들의 토큰 단가가 높으므로).

**Evaluator 로컬 가능성:**
- 간단한 체크 (빌드 성공, 린트 통과) → 규칙 기반, LLM 불필요
- 코드 품질 평가 → Qwen 32B로 가능하나 정확도 70% 수준
- 아키텍처 판단 → API 필요
- → Phase 2에서 Evaluator를 "규칙 기반 + Qwen fallback + API 에스컬레이션" 3단계로 구현

**Qwen 32B 40K 한계 대응:**
- 코딩 태스크에서 파일 컨텍스트 + diff + 테스트 결과 = 쉽게 30K+
- Claw Code의 preflight는 ROADMAP item (미구현)
- → Phase 1에서는 **프롬프트 크기 하드캡 (25K)** + 초과 시 파일 분할로 대응
- → Phase 2에서 Claw Code preflight 구현

### 통합 방식

OpenClaw ↔ Claw Code = **별도 프로세스, JSON-line IPC**
- OpenClaw → `TaskPacket { objective, repo, branch, tests }` → Claw Code
- Claw Code → `LaneEvent` 스트림 → OpenClaw → Discord
- 실패 시 Claw Code 자체 복구 → 안 되면 에스컬레이션

**IPC 신뢰성 (Phase 2 구현):**
- TaskPacket을 파일로 persist (`~/.y/queue/pending/`)
- Claw Code 크래시 → OpenClaw이 감지 → 큐에서 재시도 (최대 2회)
- M1↔M4 네트워크 끊김 → 큐에 남음 → 재연결 시 자동 재전송
- 3회 실패 → Discord에 알림 + 수동 개입 요청

### 설계 원칙

1. **경량 프롬프트** — minimal 모드 기본, 스킬 4개만 로드
2. **모듈식 스킬** — SKILL.md 하나로 추가/제거
3. **LLM 분리 배치** — Planner/Evaluator는 API, Generator는 로컬
4. **파일 기반 통신** — wiki가 에이전트 간 공유 상태, 핸드오프 아티팩트
5. **별도 프로세스** — OpenClaw과 Claw Code 독립 업그레이드

### 구조

```
_y Platform
│
├── 컨트롤 플레인 (OpenClaw 포크, M1) ──────── [Phase 1]
│   ├── 채널: Discord, Telegram, WhatsApp
│   ├── 게이트웨이: 라우팅, 세션
│   ├── 에이전트 엔진: minimal 프롬프트
│   ├── 도구 (6개): read, write, edit, exec, message, session_status
│   ├── 스킬 (4개): coding, discord, session-logs, node-connect
│   └── 메모리: personal-wiki 플러그인
│
├── 실행 플레인 (Claw Code, M4) ──────────── [Phase 2]
│   ├── 코딩 하네스: Planner→Generator→Evaluator
│   ├── 컨텍스트 관리: preflight, reset, compaction
│   ├── 복구 루프: 7가지 실패 시나리오 자동 복구
│   ├── 권한 시스템: permission policy
│   └── 이벤트: LaneEvent 스트림
│
├── 조직 레이어 (_y Tower) ────────────────── [Phase 3]
│   ├── Counsely: 비서실장 (업무 분배, 취합)
│   ├── Buildy: 개발 (Claw Code 위임)
│   ├── Searchy: 리서치
│   ├── Testy: 테스트/평가
│   └── 각 역할 = OpenClaw 에이전트 설정
│
├── LLM 프로바이더 ────────────────────────
│   ├── ollama-m4 (Qwen 32B) ← Generator, 무료
│   ├── anthropic (Sonnet) ← Planner/Evaluator, 저렴
│   └── anthropic (Opus) ← 깊은 분석, 필요 시
│
├── 도구 실행 ─────────────────────────────
│   M4 노드 (128GB RAM, 40-core GPU)
│   ├── 파일 읽기/쓰기
│   ├── 코드 실행 (bash)
│   ├── Claude Code CLI (코딩 에이전트)
│   └── Ollama (로컬 LLM)
│
└── 데이터 레이어 ─────────────────────────
    personal-wiki/
    ├── raw/     ← 원본 (Discord, Obsidian)
    ├── wiki/    ← 컴파일된 지식
    └── index.md ← 에이전트 진입점
```

### 토큰 비교

| 항목 | 기존 OpenClaw | _y Platform |
|------|:---:|:---:|
| 시스템 프롬프트 | ~2,000 | ~500 |
| 스킬 설명 | ~3,000 (13개) | ~800 (4개) |
| 도구 정의 | ~4,000 (30+개) | ~1,500 (6개) |
| **총 오버헤드** | **~9,000** | **~2,800** |
| Qwen 32B 컨텍스트 대비 | 22% 낭비 | 7% |

---

## Phase 1: Definition of Done

### 완료 기준 (SLA별)
- 단순 대화 ("안녕") → **3초 이내** 응답
- wiki 검색 질문 → **10초 이내** 응답
- 코딩 요청 → Claude Code CLI 위임 (Phase 1), **5분 이내** 완료

### 체크리스트
- [x] 스킬 53개 → 4개
- [x] 도구 minimal 프로필 (6개)
- [x] 시스템 프롬프트 minimal 모드
- [ ] **Ollama keep-alive 설정** — Qwen 32B 상주 (콜드스타트 제거)
- [ ] **포크 빌드 성공** (pnpm build 에러 없음)
- [ ] **M1에 배포** (기존 OpenClaw 대체 설치)
- [ ] **단순 대화 테스트** — "안녕" → 3초 이내
- [ ] **wiki read 테스트** — "JEPA 결과" → wiki 읽고 10초 이내 답변
- [ ] **모델 스위치 테스트** — `/model sonnet` → API 응답 확인
- [ ] **코딩 테스트** — 코딩 요청 → Claude Code CLI 위임 확인
- [ ] **프롬프트 크기 하드캡** — 25K 초과 시 파일 분할

### 블로커
1. **포크 빌드** — 스킬 폴더 이동 + 소스 수정이 빌드 깨뜨릴 수 있음
2. **M1 배포** — 기존 OpenClaw npm 글로벌과 충돌 가능
3. **Qwen 32B 첫 로딩** — `OLLAMA_KEEP_ALIVE=-1` 설정으로 해결 (M4 128GB 중 20GB 사용, 108GB 여유)

### Phase 1 코딩 경로
코딩 요청 시 Claw Code(Phase 2)가 아닌 기존 Claude Code CLI 사용:
```
사용자: "auth 미들웨어 만들어줘"
→ coding-agent 스킬 매칭
→ claude --print "auth 미들웨어 구현"
→ 결과 → Discord
```
비용: $0 (Claude Code는 Max 구독 OAuth)

---

## Phase 2: Claw Code 연동 (다음)
- [ ] Claw Code Ollama 프로바이더 추가
- [ ] TaskPacket/LaneEvent IPC 구현
- [ ] IPC 큐잉 + 재시도 (파일 기반)
- [ ] wiki-query 스킬 추가
- [ ] /model 스위치 최적화
- [ ] Evaluator 3단계 (규칙→Qwen→API)
- [ ] 컨텍스트 preflight 구현

## Phase 3: _y Tower 연동 (장기)
- [ ] 에이전트 역할 설정 파일 구조 (`~/.y/agents/`)
- [ ] `y tower init` 명령어
- [ ] Counsely 업무 분배 로직
- [ ] 멀티 에이전트 워크플로우
- [ ] Obsidian 플러그인

## Related
- [[tech/y-platform-specs]] — 런타임 스펙 (LLM 라우터, IPC, 권한)
- [[tech/openclaw-architecture]] — OpenClaw 내부 구조 분석
- [[business/tower/y-tower]] — _y 조직 구조
- [[research/world-model/world-model]] — JEPA/GLP 연구

## Sources
- [Anthropic Harness Design](https://www.anthropic.com/engineering/harness-design-long-running-apps)
- [Claude Code Skill Example](https://github.com/anthropics/claude-code/blob/main/plugins/frontend-design/skills/frontend-design/SKILL.md)
- [OpenClaw GitHub](https://github.com/openclaw/openclaw)
- [Claw Code (Rust)](https://github.com/ultraworkers/claw-code)
- 포크 소스: ~/PRJs/openclaw-fork/
