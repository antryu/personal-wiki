# Harness-100 워크플로우 시스템

## 요약

y-tower 30개 AI 에이전트에 100개 EPAR(Explore-Plan-Act-Report) 워크플로우를 매핑한 자동화 시스템.
채팅에서 키워드 감지 → LLM 자동 제안 → 사용자 확인 → 4단계 워크플로우 실행.

## 핵심 의사결정

### 왜 EPAR 패턴인가?

기존 EPCC(Explore-Plan-Code-Commit)는 개발 전용. EPAR은 비즈니스/법률/금융/마케팅 등 비개발 워크플로우에도 적용 가능한 범용 4단계:

1. **Explore** — 현황 분석, 데이터 수집, 관련 자료 조사
2. **Plan** — 전략 수립, 프레임워크 설계, 리소스 계획
3. **Act** — 실행, 문서 작성, 시스템 구축
4. **Report** — 결과 보고, 인사이트 정리, 권장사항 도출

### 왜 정적 매핑인가?

벡터 검색이나 동적 매핑 대신 정적 매핑(`harness-map.ts`) 선택:
- 100개 harness는 고정적 → 런타임 검색 불필요
- 키워드 매칭으로 충분한 정확도
- 토큰 0 소모 (LLM 호출 없이 매핑)
- 에이전트별 최대 8개만 prompt 주입 → ~100 토큰

### 왜 llm-router 통합인가?

기존 `directive/route.ts`는 `ollama-llm.ts` 직접 호출 → 항상 qwen3:latest(8B). 변경 후:
- **Counsely**: Anthropic Sonnet (claude-sonnet-4-20250514) → 고품질 전략 워크플로우
- **나머지**: Ollama qwen3:32b (M4 로컬) → 빠른 처리
- `model-router.ts`의 `selectModel(agentId, 'harness')` 경유

## 에이전트별 harness 할당

### C-Suite (10F-9F)
| 에이전트 | 주요 harness | 모델 |
|----------|-------------|------|
| counsely | SWOT분석, 이사회보고, 위기관리, 파트너십, M&A, 조직개편 | **Sonnet** |
| tasky | OKR, 로드맵, PRD, 유저스토리, 스프린트, 회고, 우선순위 | qwen3:32b |
| finy | 예산, 수익모델, 투자자료, 재무보고, 가격전략 | qwen3:32b |
| legaly | 계약(6종), 개인정보, 약관, 컴플라이언스, IP, 규제, 라이선스, 분쟁, 특허 | qwen3:32b |

### 개발/인프라 (7F-4F, 1F)
| 에이전트 | 주요 harness |
|----------|-------------|
| buildy | 리팩토링, 디버깅, 자동화 |
| testy | 코드리뷰, 테스트작성 |
| stacky | API설계, DB아키텍처 |
| opsy | 성능최적화, CI/CD, Docker, 장애대응, 모니터링, 백업, 비용, 스케일링, 런북, 포스트모템 |
| guardy | 보안감사, 위협모델, 모의해킹, 접근제어, 포렌식, 보안교육 |

### 콘텐츠/마케팅 (6F-5F)
| 에이전트 | 주요 harness |
|----------|-------------|
| wordy | 블로그, 뉴스레터, 사례연구, 문서화, 지식베이스 |
| buzzy | SNS, 보도자료 |
| searchy | 시장조사, 경쟁분석, 기술레이더, 특허지형, 학술조사, 트렌드예측, 사용자조사 |
| growthy | SEO, PPC, 이메일마케팅, 인플루언서, 이벤트 |

### 전문 부서 (2F-3F)
| 에이전트 | 주요 harness |
|----------|-------------|
| tradey | 매매신호, 리스크모델, 포트폴리오, 시장심리, 백테스트 |
| quanty | 데이터파이프라인, 대시보드, A/B테스트, 분석설정, ML모델 |
| hiry | 채용공고, 면접가이드, 온보딩, 문화핸드북, 성과평가 |
| globy | 현지화, 번역QA, 문화적응, 해외진출, 현지법규 |

## 기술 구현

### 파일 구조
```
src/data/harness-map.ts         — 100개 매핑 + find* 헬퍼
src/lib/model-router.ts         — harness TaskType (2048 tokens, 0.4 temp)
src/lib/harness-loader-v2.ts    — CLAUDE.md + agents/*.md 파싱, null graceful
src/app/api/directive/route.ts  — llm-router 기반 실행 (createLLMCall 패턴)
src/app/api/chat/route.ts       — buildSystemPrompt에 Available Workflows 주입
src/components/AgentChat.tsx    — [HARNESS_REQUEST] 감지 + 파란색 확인 UI
src/app/api/harness/list/       — 검색/목록 API
scripts/create-harness-templates.ts — 100개 EPAR 템플릿 생성기
```

### 템플릿 위치
```
~/Thairon/harness-100/ko/
├── 01-code-reviewer/
│   └── .claude/
│       ├── CLAUDE.md
│       ├── agents/ (01-explorer, 02-planner, 03-executor, 04-reporter)
│       └── skills/
├── 02-refactorer/
├── ...
└── 100-automation/
```

## Directive 병렬 실행 (2026-04-15)

### 개요

Directive 실행 시 동일 직급(phase) 에이전트는 `Promise.all`로 **병렬 실행**. 직급 간 순서는 보장.

```
Phase 1: Staff (buildy, wordy, searchy...) → 동시 실행
Phase 2: Manager (tasky, buzzy...)         → Phase 1 완료 후 실행
Phase 3: Director (finy, legaly...)        → Phase 2 완료 후 실행
Phase 4: C-Suite (counsely)                → Phase 3 완료 후 실행
```

### 구현 위치

- `scripts/chat-worker.ts` — `groupByDirectivePhase()` 함수
- Directive 큐 아이템을 `directive_id` + `phase`로 그룹핑
- 이전 phase에 `status ≠ done` 항목이 있으면 `hold = true` → 대기
- 동일 phase 내 최대 `MAX_PARALLEL = 5`개 동시 처리 (LLM API 보호)

### Phase 해제 방식

동적 DB 쿼리 (정적 플래그가 아님):
1. Phase 1 에이전트 모두 `done` → 다음 poll 주기에 Phase 2 `hold` 해제
2. `handleDirectiveCompletion()`에서 phase 완료 감지 시 로그 출력
3. 별도 "release" 메커니즘 불필요 — poll 주기마다 재평가

### 영향 범위

| 기능 | 실행 방식 | 변경 |
|------|----------|------|
| Directive | 동일 phase 병렬 | **변경됨** |
| Chat (1:1) | 순차 (에이전트별) | 변경 없음 |
| Meeting | 순차 (이전 발언 맥락 필요) | 변경 없음 |
| Harness (EPAR) | 순차 (단계별) | 변경 없음 |

### 성능 효과

- Phase 1에 Staff 5명 → 기존 ~75초 (15초×5) → 변경 후 ~15초
- 전체 4-phase directive → 기존 ~4-5분 → 변경 후 ~1분

## 운영 규칙

1. **prompt 토큰 제한**: 에이전트당 최대 8개 harness만 주입 (~100 토큰)
2. **사용자 확인 필수**: LLM이 제안하고, 사용자가 "실행" 클릭해야 시작
3. **결과 저장**: `./agents/{agentId}/_workspace/{harnessId}/` 디렉토리
4. **템플릿 보존**: 생성 스크립트는 기존 커스텀 템플릿 덮어쓰지 않음
5. **Graceful 실패**: 템플릿 없으면 null 반환 (500 에러 없음)

## 연관 문서

- [[COMPANY-DNA]] — 회사 핵심 가치
- [[운영방식-Operating-System]] — 일상 운영 원칙
- [[DECISION-INTELLIGENCE]] — 의사결정 프레임워크
- [[Agent-Skill-Awareness-Guide]] — 에이전트 스킬 인식

---

*생성: 2026-04-14*
*업데이트: 2026-04-15 — Directive 병렬 실행 추가*
*상태: 구현 완료, 100개 템플릿 생성, 빌드 검증 완료*
