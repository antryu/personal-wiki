# y-Tower 개발 현황

> 마지막 업데이트: 2026-04-22
> 커밋 추적: `antryu/y-company` main (최신 `f1c91a0`)

## 조직 구조 (2026-04-22 시점)

```
10F  회장실 · 참모실장
     └─ R.Andrew (의장) · Counsely/Buddy (참모실장)
      · Cap (_y Capital CEO) · Bid (MyBidWise CEO) · Vita (VITA CEO)
      ※ CEO 3명은 10F 소속이지만 바닥 타일에는 표시 안 함 (드로워로만 접근)

9F   기획조정실 — Tasky / Finy / Legaly
8F   리스크/감사 — Skepty / Audity
7F   SW개발본부 — Pixely / Buildy / Testy
6F   콘텐츠본부 — Buzzy / Wordy / Edity / Searchy
5F   마케팅 — Growthy / Logoy / Helpy / Clicky / Selly
4F   ICT — Stacky / Watchy / Guardy
3F   HR — Hiry / Evaly
2F   Capital (전속) — Quanty / Tradey / Globy / Fieldy / Hedgy / Valuey
1F   SaaS (전속) — Opsy
```

## 계열사 3개 구조

| 계열사 | 아이디 | 색 | CEO | 전속 에이전트 | 비고 |
|---|---|---|---|---|---|
| _y Capital | `capital` | emerald | **Cap** | Tradey · Quanty | S&P500/MES 선물, 라이브 자본 |
| _y SaaS (MyBidWise) | `saas` | cyan | **Bid** | Watchy | 나라장터 SaaS, 0 paid conversion |
| VITA | `vital` | rose | **Vita** | (공유 풀) | 데이터 플랫폼 신규 법인 기획 |

VITA는 기획 단계라 전속 에이전트 없이 Buddy가 Holdings 풀에서 Tasky · Searchy · Skepty · Pixely · Buildy를 동적 배정.

## 위임 체인 (절대 원칙)

```
Andrew 지시
  ↓
CEO 접수 (Downside first 프레이밍, 도메인별 Reframe)
  ↓
Counsely(Buddy) 실행 요청 — CEO는 직접 실행·리서치 하지 않음
  ↓
Buddy가 실무 에이전트에 분배·조율
  ↓
결과 취합
  ↓
CEO와 Andrew에게 동시 보고
```

## 2026-04-22 세션에 추가된 기능

### UI
- **SubsidiaryDrawer** (10F 회장실 뷰 하단) — 계열사 카드 2구역 분할
  - 상단 클릭 → `ChairmanDashboard`의 해당 계열사 탭으로 이동 (sessionStorage 브리지)
  - 하단 CEO 클릭 → `AgentChat` 합성 Agent로 오픈 (페르소나 prompt 적용)
- **VitalDashboard** — 체크리스트(ZTACOM·변호사·Term Sheet·BridgeLab 응답) + 관계도 + 지시 입력
- **DirectiveInput** 공통 컴포넌트 — Cap·Bid·Vita 대시보드 모두 장착, 라우팅은 기존 EPARE harness로
- 보고서 드로워 **오늘자만 표시** (GlassPanel)

### 페르소나 · 에이전트 아키텍처 (addyosmani/agent-skills 영감)
1. **Anti-rationalization 테이블** — Cap / Bid / Vita 각각 5~6쌍 "자주 듣는 핑계 → 기본 반박"
2. **Evidence-required verification** — `EvaluateStep.evidenceRequired?: string[]` 필드, evaluate phase prompt에 "Evidence Required" 블록 자동 주입
3. **H-101 Ship/Deploy harness** — Buildy 리드, Skepty가 Rollback-Readiness + Risk-Transparency 평가
4. **Progressive disclosure** — `personalitiesBrief` + `getAgentPersonaBrief`, `OMC_PERSONA_DETAIL=brief` env로 토큰 40~50% 절감
5. **Buildy simplify-pass** — source-driven · TDD · incremental(100줄) · "50% 줄일 수 있나?" 자문

### API 버그 수정
- `POST /api/directive` directiveId ↔ run.id 불일치 수정 — 이제 같은 `__directives` 맵에서 polling 가능
- `/api/harness/status` 정상 동작

### 인프라
- `OLLAMA_URL` → `http://100.105.53.37:11434` (m4max의 **llama-swap**, qwen3:32b always-hot)
- better-sqlite3 NODE_MODULE_VERSION 불일치 → `npm rebuild better-sqlite3`로 해결

## 3-mirror 구조

| 위치 | 머신 | remote | 역할 |
|---|---|---|---|
| `~/PRJs/y-company/` | m4max | `antryu/y-company` | **편집 · push 원천** |
| `~/y-company/` | m4max | `antryu2b/y-company` | (구) 미러, 정리 보류 |
| `~/Thairon/y-company/` | m1 | `antryu/y-company` + `antryu2b/_y` | **배포 서버 (next start :3000)** |

원칙: m4 편집 → push → m1 stash+pull+pop+rebuild+restart. `git reset --hard`는 금지 (uncommitted 75 파일 복구 사건 이후).

## LLM 라우팅

- Counsely + Cap/Bid/Vita: `claude_sonnet`
- 나머지 27명: `claude_haiku`
- 로컬 대체: llama-swap 통해 qwen3:32b (OpenAI-compatible `/v1/chat/completions`)

## 참고 경로

- 페르소나: `src/data/personas.ts`
- 에이전트 설정: `src/data/agent-config.ts`
- Harness 맵 (100+1): `src/data/harness-map.ts`
- EPARE 로더: `src/engine/harness-loader.ts`
- 대시보드 진입: `src/components/ChairmanDashboard.tsx`
- 10F 드로워: `src/components/SubsidiaryDrawer.tsx`
- 채팅 API: `src/app/api/chat/route.ts`
- 지시 API: `src/app/api/directive/route.ts`

## 남은 Tier 1~3 개선 (다음 세션)

**Tier 1**: Skepty anti-rationalization · Testy evidence-required · Counsely 디스패치 체크리스트
**Tier 2**: Pixely 스크린샷 필수 · Guardy OWASP · Tasky acceptance criteria
**Tier 3**: Wordy ADR · Stacky 성능 · Kiwoom 웹훅 → `#cap-trades` 채널 신설 + sync 워커
