---
title: V22 로직 Component Breakdown
tags: [trading, snp500, v22, logic, archive, jepa]
created: 2026-04-21
status: ARCHIVE (실전 배포 없음, 백테 전용)
created_for_test: 2026-03-25
file: 없음 (Python-only 백테 `/tmp/v22_backtest.py`)
related: [[V21_breakdown]], [[V23_breakdown]], [[분석리포트/2026-03-25_V22_JEPA변환_비교]]
---

# V22 — 미배포 (JEPA → VBA 프록시 실험)

V22는 **실전 배포되지 않은 백테 전용 버전**. JEPA World Model의 "prediction error 상위 20% = 혼란 → 진입 금지" 로직을 VBA 규칙 프록시로 변환한 실험.

**결과**: MaxDD 33% 개선(-98 → -66). 단 PnL 은 V21 대비 감소(+1,738 → +1,013, 42% 감소). 안정성↑, 수익↓.

**영향**: V22의 핵심 발견(Range Ratio > 1.8 차단)이 **V23에 통합됨** (C4 Range Ratio 필터). V22 단독은 배포되지 않음.

## 🔧 Component 분해

### V21 대비 유일한 차이 — Range Ratio 진입 필터
- **공식**: `range_ratio = (고가 - 저가) / ATR_14`
- **규칙**: **range_ratio ≤ 1.8** 일 때만 진입 허용. 초과 시 차단.
- **근거**: JEPA 모델의 prediction error 상위 20% 차단을 VBA로 근사 (PF 2.61 → 1.99, 정보 손실 0.62)
- **나머지 컴포넌트**: V21과 동일 (RSI>35, BB(40,2), 레짐, Trail 15/5, 레짐별 고정 SL 15/25, Hard Stop 없음, testloop 35)

## 📊 3버전 비교 (2026-03-25 분석 기준)

| 지표 | V21 | JEPA Neural | V22 VBA 변환 |
|---|---|---|---|
| 거래수 | 516 | (neural) | 323 |
| 승률 | 75.0% | 73.9% | 73.4% |
| PF | 1.97 | **2.61** ⭐ | 1.99 |
| MaxDD | -98 | (-73%) | **-66** ⭐ |
| PnL | +1,738 | (neural) | +1,013 |
| 안전장치 | 없음 | pred error | Range Ratio + (하드스탑) |
| 실행 | VBA | PyTorch | VBA |

**V22 레짐별**:
| 레짐 | 거래 | 승률 | PF |
|---|---|---|---|
| UP_LOW | 37 | 81% | 1.75 |
| UP_HIGH | 139 | 78% | 2.03 |
| DOWN_HIGH | 147 | 67% | 2.00 |

## 💡 결론 요약

- **V21**: 수익 극대화 (PnL 높음, 안전장치 없음)
- **V22**: 안정성 극대화 (MaxDD 최저, 거래수 37% 감소로 trade-off)
- **V23**: V22의 Range Ratio를 도입하되 V21 대비 진입은 완화(RSI 35→33) + Hard Stop 추가 + ATR 동적 SL — 수익+안정 균형

## 🔗 소스

- 분석 리포트: `[[분석리포트/2026-03-25_V22_JEPA변환_비교]]`
- JEPA 모델: `/Users/andrew/thairon/SnP500-trading/world-model/`
- 백테스트 스크립트: `/tmp/v22_backtest.py` (임시 파일, 재생산 시 규정 경로로 이전 필요)
- 프록시 룰 분석: `/tmp/jepa_proxy_rules.py`
- 비교 차트: `~/.openclaw/workspace/v22_comparison.png`
