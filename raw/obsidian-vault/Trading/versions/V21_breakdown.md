---
title: V21 로직 Component Breakdown
tags: [trading, snp500, v21, logic, archive]
created: 2026-04-21
status: ARCHIVE (replaced by V23 on 2026-04-06)
deployed: 2026-03-23 ~ 2026-04-05
file: (SnP500) AT_V21_6월물_SummerY_TrailingS_260323.xlsm
related: [[V23_breakdown]], [[V22_breakdown]], [[변경이력]]
---

# V21 — 이전 실전 로직 (Archive)

V21은 V20으로부터 RSI 필터, 하루 1회 제한, Adaptive Trailing Stop, Discord 알림을 도입한 첫 안정 버전. 2026-02-28 Trail 파라미터 튜닝(30~50→15, 5~7→5) 이후 실전 운용. V23 배포(4/6)로 대체됨.

## 🔧 Component 분해

### C1. 레짐 판단
- **V23와 동일**: MA20/MA200 + ATR 4레짐 매트릭스. 변경 없음.

### C2. 볼린저 밴드
- **BB(40, 2σ)** 이탈 감지. V23과 동일.

### C3. RSI 진입 필터 (LONG 전용)
- **RSI(14) > 35** (V23에서 33으로 완화됨)

### C4. Range Ratio 필터
- **없음** (V23 신규 도입)

### C5. 일일 거래 제한
- **MAX_DAILY_TRADES = 1** (2/14 적용, V23도 동일)

### C6. SL — 레짐별 고정값
- UP_LOW / DOWN_LOW: **15틱 (3.75pt)**
- UP_HIGH / DOWN_HIGH: **25틱 (6.25pt)**
- V23에서 **동적 ATR×12**로 전환됨

### C7. Hard Stop
- **없음** (V23 신규 도입)
- ⚠️ 2026-03-18 SL 미작동 사고의 원인 — Trail 갱신 후 absolute stop 부재로 -15pt 초과 손실 발생. V23 Hard Stop -48틱 도입의 근거.

### C8. TP (익절)
- UP_LOW 25 / UP_HIGH 30 / DOWN_LOW 20 / DOWN_HIGH 25 (V23와 동일)

### C9. Trailing Stop
- **TrailStart = 15틱 / TrailStep = 5틱** (V23에서 10/3 으로 공격적 조정)
- 2026-02-28 변경: 레짐별 차등(30~50/5~7) → 통일(15/5), 6년 백테 기반.

### C10. BB 회귀 청산
- V23과 동일.

### C11. testloop 체크 빈도
- **35틱** (V23에서 25로 단축)

### C12. 조기 종료
- V21 시점 조건 미확인 (VBA 파일 직접 참조 필요)

### C13. 계약 수
- **MESM26, 1계약** (MESH26 → MESM26 전환은 V21에 포함)

### C14. 거래 기록 POST
- **없음** (V23 신규. V21 시기엔 Obsidian + Discord 알림 로그만)

### C15. Discord 웹훅
- Entry/Exit 알림. V23과 동일.

---

## 📊 주요 백테스트 성과 (2020~2025, 65K 캔들)

| 전략 | 거래 | 승률 | PnL(pt) | PF | MaxDD |
|---|---|---|---|---|---|
| V21 (레짐+RSI>35) | 374 | 75% | +1,425 | 2.08 | -135 |
| V21 RSI>35만 (레짐 OFF) | 432 | 75% | +1,556 | 2.02 | -145 |
| V21+Long-only (4way) | 778 | 68.0% | +2,280 | 2.58 | -53 |
| V21+Long+Short (4way) | 1027 | 65.5% | +2,910 | 2.43 | -59 |

**레짐별 성과 (V21)**:
| 레짐 | 거래 | 승률 | PnL(pt) | PF |
|---|---|---|---|---|
| UP_LOW | 68 | 74% | +101 | 1.43 |
| UP_HIGH | 169 | 75% | +422 | 1.73 |
| DOWN_HIGH | 137 | 75% | +902 | **2.81** ⭐ |

> DOWN_HIGH (하락+고변동)에서 BB 하단 이탈 LONG이 V21의 최고 기여 레짐.

**실전 (2/10~2/20, 11건, 초기 RSI>35 시기)**: -16.25pt (-$81.25). Short 3건이 손실의 98% → 2/23 Long-only 전환 결정의 근거.

---

## 🔗 소스

- VBA: `(SnP500) AT_V21_6월물_SummerY_TrailingS_260323.xlsm`
- 원본 로직 문서: `[[V21_거래로직]]`
- 변경 이력: `[[변경이력]]`
