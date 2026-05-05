# Personal Moat α — Thesis Ledger

## 목적

투자 포지션 진입 시 thesis를 명시적으로 기록하고, horizon 도달 시 자동으로 예측 vs 실제를 검증한다.
확인 편향(confirmation bias) 방지 — 기록 없는 포지션은 alpha machine이 아닌 확인 편향 아카이브.

## 6요소 검증 기준 (personal_moat_vs_confirmation_bias.md)

| 요소 | 필드 |
|---|---|
| timestamp | `thesis_date` |
| 근거 | `thesis_grounds` + `## 상세 근거` 섹션 |
| horizon | `horizon_days` → `eval_date` 자동 계산 |
| expected | `expected_outcome.target` + `direction` |
| actual | `thesis_verify.py`가 자동 기입 |
| miss reason + rule update | `## 결과` 섹션 하단 (Andrew 직접 기입) |

## 워크플로우

### 신규 포지션 진입 시

1. `_template-thesis.md`를 복사하여 `<asset_id>-YYYY-MM-DD.md` 생성
2. frontmatter 전체 기입 (특히 `thesis_grounds`, `expected_outcome`, `horizon_days`)
3. `## 상세 근거` 에 실제 진입 reasoning 서술
4. `## 무효화 조건` 에 구체적 이벤트/가격 기술
5. `status: open` 유지 — thesis_verify.py가 나머지를 처리

### 자동 검증 (매일 09:00 KST)

- `thesis_verify.py` 실행 → `status: open` 파일 스캔
- `thesis_date + horizon_days <= today` 이면 평가 시작
- 최신 스냅샷에서 `market_value_kw`, `unrealized_pnl_kw` 조회
- `expected_outcome.metric`에 따라 실제 vs 예측 계산
- 결과를 frontmatter (`status`) 및 `## 결과` 섹션에 기입
- miss 판정 시: `~/y-tower/inbox/asset-thesis-miss-<asset>-<date>.md` 생성 → Buddy 다음 세션 알림

### 미스 발생 시 Andrew 처리

1. Buddy가 다음 세션 시작 시 inbox 파일로 알림
2. 해당 thesis 파일 열어서 `## 결과` 섹션에:
   - `- 미스 사유:` 기입 (구체적으로 — 뭘 놓쳤나)
   - `- 룰 업데이트:` 기입 (같은 실수 방지를 위한 룰 변경)
3. 동일 thesis 유형 3회 이상 미스 → 포지션 전략 재검토

## 파일 명명 규칙

```
<asset_id>-<thesis_date>.md
```

예시:
- `coin-2026-05-02.md` (Coinbase, 2026-05-02 등록)
- `eth-2026-08-15.md` (ETH, 2026-08-15 신규 진입)

동일 자산에 여러 thesis 등록 가능 (진입 시점마다).

## Status 값

| Status | 의미 |
|---|---|
| `open` | 기한 미도달, 검증 대기 |
| `hit` | 예측 적중 |
| `missed` | 예측 미스 — 미스 사유 기입 필요 |
| `invalidated` | 포지션이 horizon 전에 청산됨 |

## 대시보드

y-company → Asset Dashboard → "Personal Moat α thesis 검증 원장" 테이블에서 실시간 확인.
- 기한일 기준 오름차순 정렬 (가장 급한 것 상단)
- D-14 이내는 amber 하이라이트
- 상태별 필터 (전체/대기중/적중/미스/무효화)

## 스크립트 경로

- 검증 엔진: `~/y-asset/scripts/thesis_verify.py`
- LaunchD plist: `~/y-asset/launchd/com.y-asset.thesis-verify.plist`
- LaunchD 등록: `launchctl load ~/y-asset/launchd/com.y-asset.thesis-verify.plist`
- 수동 실행: `python3 ~/y-asset/scripts/thesis_verify.py --dry-run`

## 주의사항

- frontmatter 들여쓰기 2칸 유지 (YAML 파서 의존)
- `thesis_date` 포맷: `YYYY-MM-DD` (따옴표 없이)
- `ticker` 숫자인 경우 따옴표로 감싸기: `ticker: '122630'`
- thesis 파일은 삭제하지 말 것 — 히스토리가 곧 alpha 기록
