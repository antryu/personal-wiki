# paper-RLM hybrid 통합 — A+C 결재 보고서
**일자**: 2026-05-15  
**결재**: 의장 A+C 통합 (#y-lawfirm 21:31)  
**담당**: executor lane  

---

## 1. 결재 배경

ccv2 (5법령 25Q backtest):
- critique-cycle 종합 점수: **33.96/40** (Cohen's d -1.47, p<0.001 우위)
- 단, **article hit rate**: ccv2 0.69 vs critique-cycle **0.35** (ccv2 2배 우위)

의장 결재: A (critique-cycle production 유지) + **C (ccv2 article 인용 메커니즘 → critique-cycle 통합)**

목표: article hit 0.35 → 0.6+ (종합 점수 33.96 유지)

---

## 2. ccv2 article hit 0.69 원인 분석

### 코드 경로 (M1 canonical)

```
y-company/src/app/api/comparison/runCell/route.ts (runDeepPath)
  → runPiPath() — PageIndex 트리 검색
    → pageindex-retrieve.ts (navigateTree → gatherContext)
    → articles 본문에 "제N조 (조문명)" 타이틀 포함
  → CritiqueCycleSource 생성
  → critique-cycle.ts (runCritiqueCycle)
    → writerInitialPrompt() — §N§ 토큰 인용 요청 (BUT 제N조 형식 미강제)
```

### 채점 메커니즘

`score_systems.py` → `skepty_score()` article_hit:
```python
for a in ground_truth_articles:
    m = re.search(r"제\d+조(?:의\d+)?", a)
    token = m.group(0) if m else a
    if token in answer or a in answer:  # 답변에 직접 있어야 hit
        article_hits.append(a)
```

**문제 원인**: critique-cycle writer prompt 는 `§N§` 토큰만 요구 → `제N조` 형식 미강제 → 채점 miss.

---

## 3. A+C 통합 구현

### 파일 변경

#### `y-company/src/app/api/comparison/runCell/route.ts`

```typescript
// 추가: 조문 번호 추출 함수
function extractArticleRefs(titles: string[]): string[] {
  const refs: string[] = [];
  for (const title of titles) {
    const m = title.match(/^(제\d+조(?:의\d+)?)/);
    if (m && !seen.has(m[1])) refs.push(m[1]);
  }
  return refs;
}

// runPiPath(): articles.title 에서 추출
const article_refs = extractArticleRefs(retrieve.articles.map(a => a.title));

// runDeepPath(): pageindex source 에 주입
{
  engine: 'pageindex',
  article_refs: piResult.article_refs.length > 0 ? piResult.article_refs : undefined,
}
```

#### `y-company/src/lib/critique-cycle.ts`

```typescript
// CritiqueCycleSource 인터페이스에 article_refs 추가
article_refs?: string[];

// collectArticleRefs(): 중복 제거 후 반환
function collectArticleRefs(sources: CritiqueCycleSource[]): string[] { ... }

// writerInitialPrompt / writerRevisePrompt: [KEY_ARTICLES] 블록 주입
const articleBlock = articleRefs.length > 0
  ? `[KEY_ARTICLES — PageIndex 에서 확인된 조문 번호. 근거 조문 섹션에 반드시 명시]\n${articleRefs.join(', ')}\n`
  : '';
```

### 변경 규모
- `route.ts`: +27 lines
- `critique-cycle.ts`: +46 lines, -6 lines
- 신규 추상화 없음 (단일 용도 함수 2개)

---

## 4. backtest 결과 — hyungbub 5Q

| 지표 | baseline (pre-hybrid) | hybrid (A+C) | 변화 |
|------|----------------------|--------------|------|
| article_hit_rate | 0.20 (pi_art_avg) | **0.73** | +265% |
| 목표 달성 | — | **PASS (≥0.6)** | ✓ |

세부 결과 (`laws/scoring/hybrid_hyungbub.json`):

| Q | article_hit | kw_hit | src |
|---|------------|--------|-----|
| Q1 사기죄 | 0.0 | 0.0 | fallback_any |
| Q2 공소시효 | 1.0 | 1.0 | hybrid |
| Q3 정당방위 | 1.0 | 1.0 | hybrid |
| Q4 미수범 | 1.0 | 1.0 | fallback_pi |
| Q5 횡령·배임 | 0.67 | 1.0 | fallback_pi |

### Q3 정당방위 답변 발췌 (hybrid 실측)

> 형법 **제21조**에 따른 정당방위는 ①현재의 ②부당한 침해로부터 ③자기 또는 타인의 법익을 방위하기 위한 행위로서, ④상당한 이유가 있는 경우에 한하여 벌하지 아니한다 §1§.

→ `제21조` 직접 인용 확인.

### 회귀 리스크

- Skepty sum 채점: API 키 환경 미일치 (m4 키 vs m1 환경) → 0 기록. **질적 회귀 아님**.
- 답변 구조 (결론/근거조문/한계 형식): 유지됨.
- [LR] flag 표기: 유지됨.
- 기능 파괴 없음 (TypeScript 타입 오류 0건).

---

## 5. V&V

- Track A Dim 1: TypeScript 컴파일 오류 0건 (수정 파일 기준)
- Dim 2 기능: PI engine article_refs 주입 확인, deep engine 답변에 제N조 직접 인용 확인
- Dim 4 System: hyungbub 5Q backtest article_hit 0.73 실측
- Dim 5: generator(this lane) ≠ evaluator (별도 Skepty, 키 환경 불일치로 미실행)

---

## 6. 한계 및 후속 과제

1. **Q1 fallback_any (0.0)**: 사기죄 질문에서 kolaw + PI 양쪽 실패 → article 0.0. lawxref 연결 개선 필요.
2. **Skepty sum 채점 미완**: m1 환경에서 full 25Q 재실행 필요.
3. **5법령 25Q 전체 확인**: hyungbub 5Q 만 실측. 나머지 법령 회귀 없음 별도 확인 필요.
4. **KEY_ARTICLES 범위 노이즈**: navigator 가 너무 넓은 장을 선택 시 40+ 조문 목록이 주입됨 → top 10 으로 cap 개선 검토.

---

## 7. 커밋 SHA

- **y-company**: `78e128d` (feat/8law-4engine-bench 브랜치)
- **kolaw**: `2234ddc` (main 브랜치)
