# V24 Breakdown — C14 Auto-POST Data Integrity Fix

**작성:** 2026-04-26
**파일:** `(SnP500) AT_V24_6월물_SummerY_TrailingS_260427.xlsm`
**전략 변경:** ❌ **없음** — V23 와 100% 동일
**변경 범위:** C14 (`SendTradeToYDashboard`) 함수 + caller — 데이터 정합성 only

---

## 📌 요약

V24 = **데이터 fix 패치**. V23 의 자동 POST (C14) 가 4건 중 2건 누락, 1건 qty 잘못 기록 (4/22, 4/24)해서 발견된 4개 버그 수정. **전략 로직, 진입/청산, 파라미터 모두 V23 와 동일**.

**다음 거래부터 (4/27)** 모든 자동 POST 가 정확히 기록되며, HTTP 실패 시 retry + Discord 비상 알림.

---

## 🔧 4 Bug Fixes

### B1. quantity 파라미터 추가 (모든 2계약 거래 qty=1 잘못 기록)

```vba
' V23 (잘못):
Public Sub SendTradeToYDashboard(direction As String, entryPrice As Double, _
                                  exitPrice As Double, pnlPoints As Double, _
                                  Optional symbol As String = "MES", _
                                  Optional contract As String = "2503")
    ' JSON 에 quantity 필드 없음 → API default 1 사용

' V24 (수정):
Public Sub SendTradeToYDashboard(direction As String, entryPrice As Double, _
                                  exitPrice As Double, pnlPoints As Double, _
                                  quantity As Integer, _                         ' B1 신규
                                  Optional symbol As String = "MES", _
                                  Optional contract As String = "2606")          ' B3 변경
    ' JSON 에 ",""quantity"":" & quantity 추가
```

**영향**: 4/21 ~ 4/24 의 2계약 거래 4건 모두 qty=1 로 잘못 기록되던 버그.

---

### B2. pnl_dollars × quantity (dollars 절반만 기록)

```vba
' V23: pnl_dollars = pnlPoints * 5         ' qty 무시
' V24: pnl_dollars = pnlPoints * 5 * quantity
```

**영향**: 2계약 거래의 dollars 가 절반만 기록됨 (예: 4/21 -11.75pt × 2 = -$117.5 가 실제이나 -$58.75 로 기록되던 케이스. 백필 시 수동 정정).

---

### B3. contract default + caller 명시 (모든 자동 POST contract 잘못)

```vba
' V23 caller (line 266):
Call SendTradeToYDashboard(exitDir, ..., "MES", "2503")    ' "2503" 하드코딩

' V24 caller (line 273):
Dim qty As Integer
qty = CInt(Worksheets("Sheet1").Range("O17").Value)         ' O17 = 체결수량
Call SendTradeToYDashboard(exitDir, ..., 
    Worksheets("Sheet1").Range("F10").Value * 0.25,         ' F10 셀 reference (변수 X)
    qty, "MES", "2606")                                     ' B3 변경
```

**영향**: 3/13 ~ 4/18 의 자동 POST 거래 11건 모두 contract = "2503" (3월물) 로 잘못 기록. 실제는 6월물 (2606). PnL 영향 X, 분류만 어긋남. **잔여 정정 필요** (Supabase UPDATE).

---

### B4. Retry 3회 + Discord 비상 알림 (silent fail 방지)

```vba
' V23 (잘못): http.Send → 에러 시 Debug.Print 만 → 거래 누락 인지 불가

' V24 (수정):
RetryPost:
    On Error GoTo PostFailed
    http.Open "POST", TRADES_URL, False
    http.setRequestHeader "Content-Type", "application/json"
    http.Send json
    If http.Status >= 200 And http.Status < 300 Then GoTo PostOK
PostFailed:
    retries = retries + 1
    If retries < 3 Then
        Application.Wait (Now + TimeValue("0:00:02"))     ' 2초 대기
        Resume RetryPost
    End If
    ' 3회 실패 → Discord 비상 알림
    Call PostToDiscord(":warning: C14 POST FAIL: " & direction & " " & contract & _
                      " qty" & quantity & " " & pnlPoints & "pt - 수동 백필 필요")
PostOK:
    Set http = Nothing: Exit Sub
```

**영향**: 4/22, 4/24 PM 거래 누락 = HTTP 호출 실패가 silent 였음. V24 는 3회 retry + 실패 시 즉시 #1481 채널로 비상 알림 → 수동 백필 트리거.

---

## 📊 4월 라이브 데이터 영향 (정정 완료)

| 일자 | 정정 작업 | 정정 후 |
|---|---|---|
| 4/22 23:36 | POST 신규 (누락 → /api/trades 직접 POST) | LONG 2606 qty 2 -11.75pt |
| 4/24 00:01 | PATCH (qty 1→2, pnl_dollars 7.5→15) | LONG 2503 qty 2 +1.5pt |
| 4/24 20:40 | POST 신규 (누락 → /api/trades 직접 POST) | LONG 2606 qty 2 -12.00pt |
| **잔여** | 11건 contract "2503" → "2606" | Supabase UPDATE 필요 (PnL 영향 X) |

정정 후 누적 (46건): WR 56.5%, +69.75pt, $+178.75, PF 1.40, MaxDD -77pt
정정 전 (44건): WR 59.1%, +93.50pt, $+408.75 (실제보다 +$230 좋게 보임)

---

## 🛡️ 동시 도입: 2계약 가드레일

V24 배포와 함께 다음 룰 도입 (`현재파라미터.md` 참조):
- **Hard cap**: 2계약 phase 누적 -$1000 도달 시 강제 1계약 복귀
- **Soft trigger**: N=10 거래 도달 시 통계 평가 (WR ≥ 45% AND PF ≥ 1.0 → 유지)
- **모니터링**: `~/y-capital/scripts/per_trade_alert.ts` (M4 launchd 1h) → #cap 알림에 자동 표시

---

## ❌ 보류된 V25 후보 (다음 검토 시 참조)

DeepSeek + 백테스트 분석 결과 다음 권고들이 검토됐으나 **모두 보류**:

| 권고 | 보류 사유 |
|---|---|
| RSI 33 → 37 / 40 | V23 design intent (35→33 완화) 정반대 + in-sample fitting (5.5y 같은 데이터 재최적화) |
| KST 20~22시 entry filter | 라이브 7건 0% WR = small sample noise. 5.5y 백테스트 32건 WR 31% ≈ baseline |
| 추세 (SMA40 slope > 0) filter | 5.5y 백테 결과 정반대 — 상승추세에서 BB lower break LONG 이 더 안 좋음 (mean reversion 본질) |
| BB 폭 ≥ 0.8% filter | 백테 PF 2.21 매력적이나 V23 spec 외 변수 → walk-forward 검증 후 재검토 |

**Rule**: V23 파라미터 변경은 (a) 라이브 2계약 N≥8 + (b) walk-forward (in-sample 2020-23 / OOS 2024-25) + (c) Cap+Andrew 판단 거쳐야 함.

---

## 🔗 소스

- **VBA**: `(SnP500) AT_V24_6월물_SummerY_TrailingS_260427.xlsm` (M4 ~/Downloads)
- **V23 base**: [[V23_breakdown]]
- **변경이력**: [[변경이력]] 2026-04-26 항목
- **가드레일**: [[현재파라미터]] 2계약 운영 가드레일 섹션
- **자동 모니터링**: `~/y-capital/scripts/per_trade_alert.ts`
