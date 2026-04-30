---
date: 2026-04-29
type: governance-spec
domain: y-Tower decision-making
authors: Counsely (의장 비서실장)
status: spec-v0.1 (의장 검토 대기)
tags: [governance, decision-making, multi-agent, byzantine, jeongbanhap, hegelian]
---

# y-Tower 정반합 의사결정 프로세스 — Spec v0.1

## 0. 한 줄 요약

CEO 결정 사안에 대해 **분석가 페르소나가 정·반 분석 → arbiter가 합 → CEO가 종합 보고**. Byzantine fault tolerance(다른 LLM family) 적용. cycle X, single-pass.

## 1. 적용 영역 (When to Use vs Skip)

### ✅ 정반합 적용 (CEO 결정 사안)
- 신사업 투자 (예: MCD 진행 vs 보류)
- 종목 매수·매도 (Asset)
- 트레이딩 신호 검증 (Cap)
- 사업 전략 분기 (Vita: B2H vs B2C)
- 협상 카드 평가 (보람 MOU 등)

### ❌ 정반합 안 씀 (오버엔지니어링)
- 단순 사실 조회 ("AAPL 시세?")
- 데이터 입력 (portfolio 종목 추가)
- 명백한 의사결정 (이미 계획된 routine)
- 의장 직접 결정 사안 (CEO 위임 X)

→ **decision threshold**: "이걸 잘못 결정하면 ₩100만 이상 영향?" yes면 정반합, no면 단일 응답.

## 2. Architecture (의사코드)

```typescript
// y-company/src/lib/jeongbanhap.ts (신규)

interface JeongBanHapRequest {
  ceo: 'asset' | 'cap' | 'bid' | 'vita';
  question: string;
  context?: string;  // 의장 추가 정보
}

interface JeongBanHapResult {
  jeong: { persona: string; analysis: string; llm: string };  // 정 (강세)
  ban: { persona: string; analysis: string; llm: string };    // 반 (약세)
  hap: { persona: string; synthesis: string; llm: string };   // 합 (arbiter)
  ceoBriefing: string;  // CEO가 의장에게 보고
}

const PERSONA_MAP = {
  asset: { jeong: 'quanty', ban: 'skepty', hap: 'counsely' },
  cap:   { jeong: 'quanty', ban: 'skepty', hap: 'counsely' },
  bid:   { jeong: 'tradey', ban: 'skepty', hap: 'counsely' },  // tradey or 신설
  vita:  { jeong: 'vita-bull', ban: 'skepty', hap: 'counsely' },  // 신설 필요
};

const LLM_FAMILY_MAP = {
  jeong: { type: 'claude_code_cli', model: 'sonnet' },     // OAuth
  ban:   { type: 'qwen_local', model: 'qwen3:32b' },       // M4 Tailscale
  hap:   { type: 'codex', model: 'gpt-5' },                // OpenAI/GPT
};

async function runJeongBanHap(req: JeongBanHapRequest): Promise<JeongBanHapResult> {
  const map = PERSONA_MAP[req.ceo];
  
  // 정 + 반 병렬 실행 (single-pass, no cycle)
  const [jeong, ban] = await Promise.all([
    callPersona(map.jeong, `다음 질문에 대해 강세·찬성·진행 케이스 분석:\n${req.question}`, LLM_FAMILY_MAP.jeong),
    callPersona(map.ban,   `다음 질문에 대해 약세·반대·중단 케이스 분석:\n${req.question}`, LLM_FAMILY_MAP.ban),
  ]);
  
  // 합 (arbiter): 두 케이스를 다른 family로 종합
  const hap = await callPersona(map.hap, 
    `정 분석:\n${jeong}\n\n반 분석:\n${ban}\n\n위 두 분석 종합하여 균형 잡힌 결론`,
    LLM_FAMILY_MAP.hap);
  
  // CEO 종합 (의장 보고용)
  const ceoBriefing = await callPersona(req.ceo,
    `정·반·합 분석 결과 다음과 같음:\n${[jeong, ban, hap].join('\n\n')}\n\n의장에게 보고할 종합:`,
    LLM_FAMILY_MAP.jeong);  // CEO도 Claude OAuth
  
  return { jeong: {...}, ban: {...}, hap: {...}, ceoBriefing };
}
```

## 3. 의장 응답 형식

```markdown
## OIH 분석 (정반합)

**CEO (Asset) 종합**
> 단기 +5.7% 이익 중. 에너지 thesis 작동 중. 단 vol 큼. 추가 매수보다 유지·일부 익절 권장.

---

### 정 (Quanty 강세) — Claude OAuth
- WTI $91 강세, OPEC+ 감산 지속
- OIH 시총 작아 수급 영향 ↑
- 인플레 +3.3% 환경에서 에너지 alpha

### 반 (Skepty 약세) — Qwen3:32B
- VIX 상승 시 risk-off → energy도 떨어짐
- OIH 단일 sector 집중 위험
- 지정학 안정화 시 oil 약세

### 합 (Counsely arbiter) — Codex GPT
> 정·반 모두 valid. 단기는 정 유리, 중기는 반 risk. 의장 horizon 따라 결정.
> 단기 trade라면 +5.7%에 일부 익절 권장.
> 중장기 hold라면 vol 감수.

---

🟢 두 트랙 일치도: 중간 (단기 정, 중기 반)
→ 의장 horizon 명확화 후 결정
```

## 4. Risk Analysis

### 위험 1 — debate cycle 함정 (이미 해결)
**문제**: 정→반→정→반 cycle = echo chamber
**대응**: 본 spec은 **single-pass** (정 1회, 반 1회, 합 1회). cycle X.

### 위험 2 — LLM family 동일성 (단일 bias)
**문제**: 같은 LLM이 정·반 둘 다 = 자기 합의
**대응**: 3 family 분리 (Claude / Qwen / Codex). Byzantine fault tolerance.

### 위험 3 — arbiter 편향
**문제**: 합 단계 arbiter가 자기 family 의견 선호
**대응**: arbiter는 정·반 모두와 다른 family (Codex GPT). 의도적 외부 시각.

### 위험 4 — overengineering
**문제**: 모든 결정에 정반합 적용 = 응답 시간 ↑↑·비용 ↑
**대응**: decision threshold (₩100만 영향 이상). 단순 조회는 일반 응답.

### 위험 5 — Skepty 일관 약세
**문제**: Skepty(devil's advocate)가 항상 약세 = 균형 X
**대응**: Skepty 시스템 프롬프트에 "확신 있는 약세 사유 없으면 명시" 룰 추가. 그래야 의장이 "Skepty도 약세 안 함" 시그널 받을 수 있음.

### 위험 6 — Codex 비용
**문제**: Codex (OpenAI GPT) API 비용 발생
**대응**: 의장 OpenAI subscription 활용. 안 되면 fallback Qwen으로 (정과 다른 instance).

## 5. 비용 분석

```
Per 정반합 호출:
- 정 (Claude OAuth):  무료 (Claude Pro 구독)
- 반 (Qwen M4):       무료 (Tailscale 로컬)
- 합 (Codex):         의장 GPT API 비용 (~$0.05~$0.20)
- CEO 종합 (Claude):  무료 (OAuth)
                      ─────────
                      ~$0.05~$0.20/호출
```

월 정반합 호출 추정:
- Asset: 5~10 종목 분석/월 = ~$1
- Cap: 트레이딩 신호 = ~$2
- Vita·Bid: ~$1
**합계 ~$5/월**. 의사결정 품질 ↑ 효과 대비 작음.

## 6. Buildy 위임 Spec — Phase 1

### 작업 (Asset 페르소나 한정)

1. `src/lib/jeongbanhap.ts` 신규 — 위 의사코드 구현
2. `src/app/api/jeongbanhap/route.ts` 신규 — POST endpoint
3. `personas.ts` 일부 페르소나 시스템 프롬프트 보완:
   - **Skepty**: "단순 반대 X. 확신 있는 약세 사유 없으면 명시" 추가
   - **Counsely arbiter mode**: "정·반 두 분석 받았을 때 합 형식 출력" 추가
   - **Asset CEO mode**: "정반합 결과 받았을 때 의장 보고 형식 출력" 추가
4. `chat/route.ts`에 트리거 로직 — Asset 페르소나 + ticker 감지 + decision threshold 통과 시 자동 정반합
5. UI: 의장 응답에 정·반·합 단계 별로 collapsible UI (선택)

### V&V

- Smoke test: "AAPL 매수할까?" → 정·반·합 3 단계 응답 확인
- Edge case: M4 Qwen 다운 → 합으로 직접 fallback
- Cost test: 5회 호출 → 실제 비용 측정 (예상 vs 실제)

### 예상 시간
- 1주 (Asset만 구현)
- 다음 1주 (Cap·Vita·Bid 확장)

## 7. 의장 결정 영역 (이 spec 검토)

### 즉답 가능
- (Q1) decision threshold (₩100만) 적절한가? 더 낮게 / 높게?
- (Q2) Codex(GPT) family 사용 OK? 또는 다른 family로?
- (Q3) Skepty가 모든 도메인에서 약세 역할? 또는 도메인별 다른 약세 페르소나?

### 후행 결정
- Vita·Bid의 강세 페르소나 신설 필요 여부 (현재 없음)
- 의장 응답 UI에 정·반·합 별도 collapsible 표시 vs 종합만

## 8. 다음 단계

(a) **Spec 승인 → Buildy Phase 1 (Asset)** — 1주 작업
(b) **Spec 수정 사항 받아 v0.2** — Q1·Q2·Q3 답 따라 갱신
(c) **시뮬레이션 먼저** — 의장 portfolio 1종목으로 manual 정반합 시뮬 (Asset이 직접 작성, 30분)

추천: **(c) → (a)**. manual 시뮬로 패턴 가치 의장이 직접 보기 → 그 다음 빌드.

## 9. 미해결 — 의장 답변 필요

1. Q1·Q2·Q3 (위)
2. (b)/(c) 중 다음 단계
3. 비용 ~$5/월 OK인가
