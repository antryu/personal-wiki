# Smart Money Concepts (SMC) Python Library — Cap 평가 기록

> `joshyattridge/smart-money-concepts` 라이브러리를 _y Capital 트레이딩 시스템 (V23 baseline) 에 잠재 통합 후보로 평가한 기록. 2026-04-23 Andrew 가 #cap 에 공유, Cap 이 Downside-first 판정 수행.
> Last updated: 2026-04-23

## Overview

**Repo**: <https://github.com/joshyattridge/smart-money-concepts>

ICT (Inner Circle Trader) 계열 지표를 파이썬 라이브러리로 구현. 순수 분석 컴포넌트, 자체 백테스트·실행·리스크 관리는 없음. PyPI 로 `smartmoneyconcepts` 배포.

## Key Facts

| 항목 | 값 |
|---|---|
| 스타 | 1.5k |
| 포크 | 699 |
| 릴리스 | v0.0.26 (2025년 3월), 총 16개 |
| 라이선스 | MIT (commercial 가능) |
| 언어 | Pure Python |
| 의존성 | pandas OHLCV DataFrame |
| 통합 난이도 | 단일 함수 호출 (`smc.fvg(ohlc, ...)`) |

## 구현된 지표 8종

| 지표 | 설명 |
|---|---|
| Fair Value Gap (FVG) | 연속 캔들 사이 가격 갭 식별 |
| Order Block (OB) | 시장 주문 집중 구역 탐지 |
| Break of Structure (BOS) | 시장 구조 돌파 신호 |
| Change of Character (CHOCH) | 추세 전환 신호 |
| Liquidity Zones | 좁은 범위 내 복수 고/저점 |
| Swing Highs/Lows | 지지·저항 후보 |
| Sessions | 거래 세션 활동 추적 |
| Retracements | % 되돌림 계산 |

## Cap 평가 — Downside First

### Failure Modes

1. **재현성 논쟁** — ICT/SMC 커뮤니티 내부에서도 정량 검증 희박. "retroactive storytelling" 패턴 관찰됨 (사후 차트에선 맞아 보이는데 실시간 signal 로는 성능 저하)
2. **V23 baseline (WR 79.8% · PF 1.76, Long-only) 기준선** 대비 SMC 필터 추가가 WR · PF 를 떨어뜨리면 즉시 폐기. "좋아 보여서 유지" 편향 위험
3. **라이브러리 품질 플래그** — v0.0.x 숫자 + 1인 메인테이너 의존 → 버그·중단 리스크
4. **실시간 성능** — 매 틱 재계산 시 지연. 1분봉 주기로 평가해도 MES 스캘핑엔 느릴 수 있음
5. **과최적화 위험** — 지표 8개 조합 최적화 시 in-sample 피팅 함정

### Confidence

**LOW to MEDIUM** — 라이브러리 자체는 결함 없음 (MIT · 활발 · 깔끔한 API). 다만 SMC 가 실제로 MES 에 edge 를 더하는지는 미검증.

### 권고 — 단계적 검증 프로토콜

- **전제조건**: V23 baseline 대비 지표 1개만 필터 추가 후 OOS 백테스트에서 WR · PF 동시 개선 증거 요구. 한 개라도 악화 → 폐기.
- **우선 지표**: Order Block 이 가장 직관 기대치 높음 (지지·저항 논리가 clear). 단일 가설 테스트용.
- **테스트 기간**: V23 OOS 기간 동일 사용 · 최소 3개월 (2025 H2 데이터 권장)
- **구현자**: Nerdy (R&D) 에 연구 브리프 → Buildy 백테스트 스크립트 2-3일

## 관련 결정 상태 (2026-04-23)

- 도입 여부 — **보류**. Andrew 추가 결정 없이 북마크 상태.
- 다음 액션 후보:
  - (a) 단일 지표 OOS 백테스트 실시
  - (b) 다른 지표 우선 검증
  - (c) V23 기준선 유지 · 북마크만

## Related

- [[finance/trading/snp500-trading]] — S&P500 거래 히스토리
- [[research/world-model/world-model]] — JEPA vs GLP 비교 (SMC 와 병행 검증 가능한 대체 접근)
- [[tech/claudian]] — 트레이딩 시스템 관련 툴체인

## Sources

- 2026-04-23 Discord #cap — Andrew 공유 + Cap Downside-first 평가
- Obsidian: `Trading/smart-money-concepts-library.md` (동기화 복사)
