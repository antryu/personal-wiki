---
title: Trading Strategy Versions
tags: [trading, snp500, index]
created: 2026-04-21
---

# Strategy Version Archive

각 버전의 **전체 로직을 component 단위로** 고정 기록. 신규 제안/백테스트 비교의 canonical reference.

## Current Live

- **[[V23_breakdown|V23]]** — 2026-04-06 deploy (1계약), 2026-04-20 2계약 전환. **라이브 중.**

## Archive

- **[[V21_breakdown|V21]]** — 2026-03-23 ~ 2026-04-05 실전 운용. V23로 대체.
- **[[V22_breakdown|V22]]** — 2026-03-25 JEPA→VBA 변환 백테 실험. 실전 배포 없음. Range Ratio 규칙이 V23에 흡수.

## 사용 방법

1. 신규 백테스트 결과가 나오면 → **V23 (live)** 대비 component diff 를 해당 breakdown 문서에 명시
2. 새 버전이 실전 배포되면 → 새 `VNN_breakdown.md` 작성 + 이 index에 "Current Live" 업데이트, 이전 live는 Archive 섹션으로 이동
3. 백테 한정 실험은 Archive 섹션에 "실전 배포 없음" 표시로 기록

## 기준점 정책

- **"직전 실전 로직"** = 현재 V23 (고정)
- **"직전 백테스트"** = 시간순 직전 `~/Thairon/SnP500-trading/reports/*.csv` 중 최신 run

## Component 분류 (모든 버전 공통 스켈레톤)

| # | Component | V21 | V22 | V23 |
|---|---|---|---|---|
| C1 | 레짐 판단 (MA/ATR) | ✓ 동일 | ✓ 동일 | ✓ 동일 |
| C2 | BB(40,2) | ✓ | ✓ | ✓ |
| C3 | RSI 진입 필터 (LONG) | > 35 | > 35 | **> 33** |
| C4 | Range Ratio 필터 | — | **≤ 1.8** | ≤ 1.8 |
| C5 | 일일 거래 제한 | 1 | 1 | 1 |
| C6 | SL | 레짐 고정 15/25틱 | 레짐 고정 15/25 | **ATR×12 동적 (10~60)** |
| C7 | Hard Stop | — | — | **-48틱 (-12pt)** |
| C8 | TP (레짐별) | 25/30/20/25 | 25/30/20/25 | 25/30/20/25 |
| C9 | Trailing | 15/5 | 15/5 | **10/3** |
| C10 | BB 회귀 청산 | ✓ | ✓ | ✓ |
| C11 | testloop 체크 빈도 | 35틱 | 35틱 | **25틱** |
| C12 | 조기 종료 | (불명) | (동일) | **SPTHM 520~700** |
| C13 | 계약 수 | 1 | 1 | 1 → **2** (4/20) |
| C14 | 거래 POST (Y Dashboard) | — | — | **✓** |
| C15 | Discord 웹훅 | ✓ | ✓ | ✓ |

**굵게** = V23에서 새로 도입되었거나 변경된 요소.
