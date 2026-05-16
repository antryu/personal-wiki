# V27 VBA 진입 조건 완전 추출 보고서
작성일: 2026-05-16
소스: `/tmp/v27_vba_full.txt` (4,119줄)

---

## 1. 진입 조건 완전 목록

진입이 실행되려면 아래 조건이 **모두(AND)** 충족되어야 한다. 각 조건에 VBA 라인 번호를 인용한다.

---

### [G0] 전역 가드 — 포지션 없음 (선행 조건)

| 조건 | VBA 라인 | 내용 |
|------|----------|------|
| `flagRealBS = 0` | L1039 | `[BK25] = 0` — 현재 포지션 없음 |
| `AJ26 = 0` | L1039 | BB 내부 카운트 = 0 (이탈 발생한 봉) |
| `flag_logicstart = 1` | L1039 | `[M25] = 1` — 현재 틱이 신규 30분봉 첫 틱 |
| `DailyTradeCount < MAX_DAILY_TRADES` | L1039 | 오늘 거래 횟수 < 1 (상수 `MAX_DAILY_TRADES = 1`) |

> `MAX_DAILY_TRADES = 1` 은 L34~35에서 선언. 하루 최대 **1회** 진입.

---

### [G1] 거래 세션 필터 — 전체 루프 진입 차단

| 조건 | VBA 라인 | 내용 |
|------|----------|------|
| `TH < 6 OR TH >= 7` | L655, L668 | **서머타임 기준**: 06:00~06:59 (한국시각) = 휴장시간 → 루프 자체 종료. 7시~6시(다음날) = 정상 거래 |

```vba
If TH >= 6 And TH < 7 Then  ' SummerTime YES
    Call KFOpenAPI1.DisconnectRealData(...)
    Exit Sub
ElseIf TH >= 7 Or TH < 6 Then  ' 정상 거래 시간
```

> 서머타임 미적용(동절기) 버전은 주석 처리: `If TH >= 7 And TH < 8 Then` (L656)

---

### [G2] 로직 실행 시각 필터 — 30분봉 타이밍

| 조건 | VBA 라인 | 내용 |
|------|----------|------|
| `(TM >= 0 AND TM <= 13) OR (TM >= 30 AND TM <= 43)` | L803 | 신규 봉 업데이트 실행 구간 (0~13분, 30~43분) |
| `Start30m30 = 0 AND flagLogictest = 1` | L1044 | 봉 완성 후 최초 1회만 진입 로직 실행 |
| `(TM >= 0 AND TM <= 14) OR (TM >= 30 AND TM <= 44)` | L918 | BB 내부 카운트 집계 구간 |

진입 실행은 내부에서 분기:
- `TM >= 30 AND TM <= 44` → SkipLogic1 분기 (L1076, L1237)
- `TM >= 0 AND TM <= 14` → SkipLogic2 분기 (L1142, L1295)

---

### [G3] 진입 시각 상한 필터 — 5:20 이후 차단

| 조건 | VBA 라인 | 내용 |
|------|----------|------|
| `SPTHM > 520 AND SPTHM < 700` → 진입 **차단** | L1062, L1223 | HHMM 형식. 5:20 이후 ~ 7:00 이전은 진입 불가. 5:20 이전 또는 7:00 이후에만 진입 허용 |

```vba
If SPTHM > 520 And SPTHM < 700 Then   ' (SUMMERTIME YES) V51
    flagLogic = 1
    flagBuy = 0 / flagSell = 0         ' 진입 없이 flagLogic만 세팅 → 차단
    ...
Else
    ' TM 분기 후 실제 진입 로직 실행
```

> 서머타임 미적용 주석: `SPTHM > 620 And SPTHM < 800` (L1063, L1224)
> 의장 확인 포인트: 5:20 이후 봉에서는 BB 패턴이 충족돼도 **절대 진입하지 않는다.**

---

### [G4] Gap 시작 차단 (장 개시 첫 봉)

| 조건 | VBA 라인 | 내용 |
|------|----------|------|
| `Gap_Chk = 1` 시 전 종가 & 현재 시가 모두 BB 밖이면 `flag304 = 0` 리셋 | L989~1004 | 6:00~7:30 사이 갭 시작 봉은 `BE25/BE26 = 0` 으로 강제 리셋 → 진입 차단 |

```vba
If CDbl(Gap_Close)*1000 < CDbl(BB_LOk)*1000 And CDbl(Gap_Open)*1000 < CDbl(BB_LOk)*1000 Then
    flag304 = 0
    Worksheets("Sheet1").Range("BE25").Value = 0   ' BB 내부 카운트 리셋
    Worksheets("Sheet1").Range("BE26").Value = 0
ElseIf CDbl(Gap_Close)*1000 > CDbl(BB_UPk)*1000 And CDbl(Gap_Open)*1000 > CDbl(BB_UPk)*1000 Then
    flag304 = 0
    Worksheets("Sheet1").Range("BE25").Value = 0
    Worksheets("Sheet1").Range("BE26").Value = 0
```

`Gap_Chk = 1` 이 되는 조건: 장 시작 후 30분 이내 (`TChkday >= 60000 AND TChkday < 73000`, L772)

---

### [G5] 이전 봉(k-1) 내부 존재 필수 조건

| 조건 | VBA 라인 | 내용 |
|------|----------|------|
| `BB_LOkm1 <= BB_Closekm1 <= BB_UPkm1` | L1050 | **직전 봉(k-1)** 종가가 BB 내부에 있어야 함 |

```vba
ElseIf CDbl(BB_LOkm1)*1000 <= CDbl(BB_Closekm1)*1000 And CDbl(BB_Closekm1)*1000 <= CDbl(BB_UPkm1)*1000 Then
    ' 여기서만 현재 봉(k) 판단 진입
```

> 직전 봉이 BB 외부에 있으면 아무 조건도 실행되지 않음 (ElseIf에서 공란, L1048).

---

### [G6] 현재 봉(k) 종가 위치 분기

VBA는 현재 봉 종가 위치에 따라 두 갈래로 분기한다.

#### 경우 A: BB 하단 이탈 (하단 롱 진입)

| 조건 | VBA 라인 | 내용 |
|------|----------|------|
| `BB_Closek < BB_LOk` | L1052 | 현재 봉(k) 종가 < BB 하단 |
| `flag304 >= 1` | L1056 | BB 내부 카운트 `[BE26] >= 1` — 최소 1봉 이상 내부에 있었음 |
| `RSIADX.Value > 33` | L1056 | `[BW26]` RSI(14) > 33 (부등호: 엄격한 부등호 `>`) |

```vba
If CDbl(BB_Closek)*1000 < CDbl(BB_LOk)*1000 And CDbl(BB_Closek)*1000 < CDbl(BB_UPk)*1000 Then
    If flag304 >= 1 And RSIADX.Value > 33 Then
```

#### 경우 B: BB 상단 이탈 (상단 롱 진입)

| 조건 | VBA 라인 | 내용 |
|------|----------|------|
| `BB_Closek > BB_UPk` | L1216 | 현재 봉(k) 종가 > BB 상단 |
| `flag304 >= 2` | L1219 | BB 내부 카운트 `[BE26] >= 2` — 최소 2봉 이상 내부에 있었음 (하단보다 요구치 높음) |
| RSI 필터 없음 | L1219 주석 | `'RSI filter disabled'` 명시 — 상단 이탈 시 RSI 필터 미적용 |

```vba
ElseIf CDbl(BB_Closek)*1000 > CDbl(BB_LOk)*1000 And CDbl(BB_Closek)*1000 > CDbl(BB_UPk)*1000 Then
    If flag304 >= 2 Then ' RSI filter disabled
```

---

### [G7] BB 내부 카운트(flag304, TimeNum) 생성 로직

`flag304 = BE26.Value` 는 `TimeNum(AJ26)` 값에 의해 결정된다.

| 조건 | VBA 라인 | 내용 |
|------|----------|------|
| 봉 종가가 `BB_LO <= Close <= BB_UP` | L926 | TimeNum += 1 |
| `TimeNum > 2` → `BE25 = 2` | L932~933 | flag304 = 2 (상단 이탈 조건 충족 가능) |
| `TimeNum > 1` → `BE25 = 1` | L934~935 | flag304 = 1 (하단 이탈 조건 충족 가능) |
| `TimeNum <= 1` → `BE25 = 0` | L937 | flag304 = 0 → 진입 불가 |
| BB 외부 봉 → `TimeNum = 0, BE25 = 0` | L940~944 | 내부 봉이 끊기면 카운트 리셋 |

> `BE25`(현재봉용) vs `BE26`(이전봉 값, 진입판단 시 사용). 진입 시 읽는 것은 `BE26` (L1029).

---

### [G8] RangeRatio 필터

| 조건 | VBA 라인 | 내용 |
|------|----------|------|
| `rangeRatio <= 1.8` | L1084, L1150 | `rangeRatio = (F25 - G25) / BP26` = 현재봉 (고-저) / ATR. 1.8 초과 시 진입 차단 |

```vba
rangeRatio = (Worksheets("Sheet1").Range("F25").Value - Worksheets("Sheet1").Range("G25").Value) / Worksheets("Sheet1").Range("BP26").Value
If rangeRatio > 1.8 Then
    flagBuy = 0
    flagSell = 0
    GoTo SkipLogic1
End If
```

적용 시점: `LogicFX_BuySell_Adaptive` 호출 **전**에 먼저 체크 (L1083, L1149).

---

### [G9] 레짐 조건 — 방향 허용/차단

`LogicFX_BuySell_Adaptive` 내부에서 레짐에 따라 방향이 결정된다 (L3901~3966).

| 레짐 | RegimeLowerLong | RegimeLowerShort | RegimeUpperLong | RegimeUpperShort |
|------|:-:|:-:|:-:|:-:|
| UP_LOW | True | False | True | False |
| UP_HIGH | True | False | True | False |
| DOWN_LOW | False | False | False | True |
| DOWN_HIGH | False | True | True | False |

레짐 결정 기준 (L3826~3850):
- **추세**: `MA20 > MA200` → "UP", else "DOWN" (30분봉 종가 기준)
- **변동성**: `ATR_14 > ATR_20_AVG * 1.3` → "HIGH", else "LOW"
- MA200 유효 데이터 최소 100개 미만 시 MA20으로 대체 (L3802~3807)

레짐 조건이 방향을 허용하지 않으면 `BF25=0, BG25=0` → 진입 없음.

#### 레짐별 진입 가능 패턴 요약:
- **UP 레짐**: 하단 롱(평균회귀) + 상단 롱(추세추종) 모두 허용
- **DOWN_LOW**: 하단 롱/상단 롱 모두 차단. 상단 숏(평균회귀)만 허용
- **DOWN_HIGH**: 하단 숏(추세추종) + 상단 롱(추세추종) 허용

---

### [G10] 경제지표 이벤트 차단

| 조건 | VBA 라인 | 내용 |
|------|----------|------|
| 오늘 날짜가 H19/I19/J19 셀의 날짜와 일치 | L953 | 실업률, CPI, PPI 발표일 여부 확인 |
| 시간이 `2200 이하 200 범위` (서머타임) | L954 | `0 <= (2200 - D25) <= 200` = 22:00~22:00+2시간(00~02시) 범위 |

```vba
If Int(C25 - H19) = 0 Or Int(C25 - I19) = 0 Or Int(C25 - J19) = 0 Then
    If Int(2200 - D25) <= 200 And Int(2200 - D25) >= 0 Then  ' summertime yes
        Event_Chk = 1
        flag304 = 0
        BE25 = 0 / BE26 = 0
        TimeNum = 0
```

이벤트 발표 당일 22:00~22:00+2h 시간대에는 `flag304 = 0` 강제 리셋 → **진입 불가**.

> 정확도 주의: 이벤트 당일 전체가 차단이 아닌 특정 시간대만 차단. H19/I19/J19는 수동 입력 날짜.

---

### [G11] 진입 중복 방지 (flagLogic)

| 조건 | VBA 라인 | 내용 |
|------|----------|------|
| `flagLogic = 0` | L1058, L1221 | `[BB25] = 0` — 이미 진입 판단이 시작되지 않은 상태 |

`flagLogic`은 한번 1이 되면 (진입 판단 시작됨), 같은 봉에서 중복 진입 시도를 막는다.

---

## 2. 진입 조건 흐름도 (AND 체인 요약)

```
틱 수신
  └── [G1] 세션 시간 유효? (6시~7시 아님)
        └── [G0] 포지션 없음 + 오늘 미거래 + flag_logicstart=1?
              └── [G2] 봉 완성 후 첫 로직 실행 시점?
                    └── [G3] 현재 시각 SPTHM <= 520 OR >= 700?
                          └── [G4] Gap 봉 아님?
                                └── [G5] 직전 봉(k-1) BB 내부?
                                      ├── [경우A] 현재봉(k) BB 하단 이탈?
                                      │     ├── [G6A] flag304(BE26) >= 1?
                                      │     ├── [G8]  RSI(14) > 33?
                                      │     ├── [G9]  레짐 하단 방향 허용?
                                      │     └── [G8]  RangeRatio <= 1.8?
                                      │           → BuyFX 또는 SellFX
                                      └── [경우B] 현재봉(k) BB 상단 이탈?
                                            ├── [G6B] flag304(BE26) >= 2?
                                            ├── [G9]  레짐 상단 방향 허용?
                                            └── [G8]  RangeRatio <= 1.8?
                                                  → BuyFX 또는 SellFX
```

---

## 3. #49 Backtest 대조 — 누락/불일치 표

| # | 조건 | VBA | #49 backtest | 상태 |
|---|------|-----|--------------|------|
| 1 | 하루 1회 거래 제한 | `MAX_DAILY_TRADES = 1` (L34) | `trade_date == bar_date` 체크 (L262) | **일치** |
| 2 | BB 파라미터 (40봉, 2σ) | `MaxBB2=40, BB_Factor=2` (L843~844) | `BB_PERIOD=40, BB_STD_MULT=2.0` | **일치** |
| 3 | BB 가격 타입 | (H+L+C)/3 (L732) | `typical = (high+low+close)/3` (L101) | **일치** |
| 4 | RSI 필터 (하단 이탈) | `RSIADX.Value > 33` (L1056) | `pr > RSI_LOWER_THRESH` = `> 33` (L293) | **일치** |
| 5 | RSI 필터 (상단 이탈) | 미적용 (L1219 주석) | 상단 이탈 Signal 2에 RSI 조건 없음 (L297) | **일치** |
| 6 | RangeRatio 필터 | `rangeRatio > 1.8` → 차단 (L1084) | `prr <= RANGE_RATIO_MAX` = `<= 1.8` (L293) | **일치** |
| 7 | 직전봉(k-1) BB 내부 조건 | `BB_LOkm1 <= BB_Closekm1 <= BB_UPkm1` (L1050) | `p2_in = (pc2 >= pbl2 and pc2 <= pbu2)` (L290) 하단 이탈에만 적용 | **부분 불일치** |
| 8 | flag304 카운트 임계값 | 하단: `>= 1`, 상단: `>= 2` (L1056, L1219) | 상단: `inside_count >= 2` (L297), 하단: 1봉 확인(k-1만) | **부분 불일치** |
| 9 | 진입 시각 필터 (SPTHM > 520) | 5:20~7:00 진입 차단 (L1062) | `is_valid_entry_time(ts.minute)` = 분만 체크 (L82, L267) | **누락** |
| 10 | 세션 시간 필터 (TH 6~7시) | 전체 루프 종료 (L655~662) | 미구현 — 모든 시간 포함 (L498 주석) | **누락** |
| 11 | Gap 차단 로직 | 장 개시 갭 시 `flag304 = 0` (L989~1004) | 미구현 | **누락** |
| 12 | 경제지표 이벤트 차단 | CPI/PPI/실업률 발표일+시간 (L953~971) | 미구현 | **누락** |
| 13 | 레짐 방향 필터 | DOWN 레짐에서 롱 차단 가능 (L3881~3888) | 레짐은 k_sl 계산에만 사용, 방향 필터링 없음 (L131~132) | **누락** |
| 14 | 상단 이탈 후 롱 (UP 레짐) | UP 레짐에서 `flag304 >= 2` 후 롱 진입 | Signal 2: `pc > pbu and inside_count >= 2` — UP/DOWN 레짐 구분 없이 동작 | **불일치** |
| 15 | MA200 데이터 부족 fallback | `validCount200 < 100` → MA20 사용 (L3802) | `np_rolling_mean(close, 200)` NaN 처리 후 `k_sl=1.5` 기본값 (L131) | **불일치** |

---

## 4. 가장 중요한 누락 조건과 backtest 영향 추정

### 4-1. 진입 시각 필터 누락 (가장 중요)

VBA: `SPTHM > 520 And SPTHM < 700` 구간 진입 차단 (서머타임 기준 5:20~7:00)
#49: `is_valid_entry_time`은 **분(minute)만** 체크 — 시각(hour) 필터 없음

영향:
- 새벽 5:20~7:00 사이 발생하는 BB 이탈 봉이 #49에서는 진입으로 처리됨
- 이 시간대는 유동성이 낮고 VBA에서는 의도적으로 배제한 시간대
- 실제 거래 수 **과다 계상**. 이 시간대 거래 품질이 낮다면 backtest 성과 과대평가.

### 4-2. 레짐 방향 필터 누락

VBA: DOWN_LOW 레짐에서 **하단 롱 완전 차단** (`RegimeLowerLong = False`)
#49: 레짐과 무관하게 하단 이탈 롱 진입 허용

영향:
- 하락 추세 + 저변동 환경에서 역추세 롱 진입이 #49에서는 발생
- VBA 실제 로직은 이 경우 하단 숏(추세추종)만 허용
- **방향이 다른 진입**이 포함됨 → 실제 전략과 다른 결과

### 4-3. flag304 상단 이탈 임계값 불일치

VBA 상단: `flag304 >= 2` → 최소 **3봉 이상** 내부(TimeNum > 2 → BE25 = 2)
#49 상단: `inside_count >= 2` → 최소 2봉 내부

영향:
- #49가 VBA보다 더 일찍 상단 진입 신호 발생
- 거래 수 과다 계상 가능성

### 4-4. 경제지표/Gap 필터 누락

영향 추정: 각각 드물게 발생하는 조건이므로 연간 몇 건 수준 차이. flag304 누락보다 영향 작음.

---

## 5. 불명확 항목

1. `H19/I19/J19` 셀의 경제지표 날짜 — VBA 코드상 엑셀 셀에 수동 입력하는 값. 실제 적용된 날짜 목록 미확인.
2. `flagLogictest/flag_logicstart` 초기화 타이밍 — testloop 기반 로직(L487~489)과의 상호작용이 복잡. "30분봉 완성 후 첫 틱"이 정확히 어느 틱인지는 실시간 데이터 없이는 불명확.
3. `Update_Slope`의 추세 플래그(AN26, AO26) — VBA 코드(L1054)에 주석 `'Trend disabled'` 명시. 현재는 진입 조건에서 비활성화됨. 단, `LogicFX_BuySell_Adaptive` 내에서도 ADX/flagUPTrend는 읽히지만 실제 if 분기에 사용 안 함(L3903~3915 변수 선언만).

---

## 6. 결론

VBA V27의 진입 조건은 **단순히 BB 이탈만으로는 진입이 되지 않는다**. 최소 8개 이상의 AND 조건이 중첩된다.

핵심 요약:
1. **포지션 없음 + 오늘 첫 거래** — 하루 1회 제한
2. **세션 시간** — 6시~7시 제외 (서머타임), 5:20~7:00 추가 차단
3. **직전 봉 BB 내부** — 전봉이 반드시 내부에 있어야 함
4. **flag304 카운트** — 하단 이탈: 1봉 이상 내부, 상단 이탈: 2봉 이상 내부
5. **RSI > 33** — 하단 이탈 롱에만 적용
6. **RangeRatio <= 1.8** — 현재봉 변동성 과다 차단
7. **레짐 방향 허용** — 레짐에 따라 방향이 결정됨 (DOWN 레짐에서 롱 차단 가능)
8. **갭 및 이벤트 차단** — 장 개시 갭봉, 경제지표 발표 시간대

#49 backtest 주요 불일치:
- **P0 (즉시 수정 필요)**: 진입 시각 필터(5:20 이후 차단), 레짐 방향 필터
- **P1**: flag304 상단 임계값 (>= 2 vs 단순 inside_count >= 2)
- **P2**: Gap 필터, 경제지표 차단 (발생 빈도 낮음)
