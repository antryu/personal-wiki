# Ultra Trader — 크립토 선물 자동매매 시스템 개발기

> 크립토 선물 전용 자동매매 플랫폼 "Ultra Trader"의 설계, 구축, MES 데이터 백테스트 검증, AI/ML 학습 과정을 기록한 문서. 15개 전략 모듈, ML 예측, Optuna 최적화, DeepSeek 분석을 포함하며, 기존 MES V21/V22 전략과의 성능 비교를 통해 엔진의 근본적 문제점을 진단했다.
> Last updated: 2026-04-05

## Overview

Ultra Trader는 크립토(BTC/USDT, ETH/USDT) 선물 자동매매를 목표로 설계된 Python 기반 트레이딩 플랫폼이다. 25,559줄 / 73개 파일 규모로, 15개 전략 모듈, AI/ML 레이어, 백테스트 엔진, 웹 대시보드를 포함한다. 개발 과정에서 기존 [[finance/snp500-trading|SnP500-trading]] 프로젝트의 MES 30분봉 데이터를 활용해 성능을 검증했으나, 기존 V21 전략(승률 75%) 대비 Ultra Trader는 승률 0.4%로 참패했다. 이후 AI 자동 전략 생성(Option B) 방향으로 전환하여 ML 학습, Optuna 최적화, DeepSeek 분석을 수행했다.

## Key Topics

### 프로젝트 구조 및 아키텍처

Ultra Trader의 핵심 구조 (2026-03-27):

```
ultra-trader/
├── core/           # 트레이딩 엔진 (engine.py, exchange/, portfolio/, risk/)
├── strategies/     # 15개 전략 (momentum, reversal, structural, quant, composite)
├── ai/             # AI 레이어 (ml/, llm/, sentiment/)
├── backtest/       # 백테스트 엔진 (optimizer/, monte_carlo, walk_forward)
├── web/            # FastAPI 웹 대시보드
├── notifications/  # 텔레그램/디스코드/웹훅 알림
└── main.py         # CLI (705줄)
```

**15개 전략 모듈:**
- **모멘텀**: BB Breakdown, MACD 3/15/3, Trend Follow
- **역추세**: RSI+VWAP, CVD Divergence
- **구조적**: Grid Bot, DCA Bot, Market Maker
- **퀀트**: Funding Arb, Basis Trade, Stat Arb
- **복합**: Ensemble Voting, Regime Switch

**크립토 선물 선택 이유:**
- 24/7 마켓, API 접근 자유, 롱/숏 양방향, 레버리지, 테스트넷 제공
- 타임프레임 1분~15분 중심, 포지션 수분~수시간 단위 (2026-03-27)

### M4 Max 서버 배포

M4 Max를 상시 가동 서버로 결정 (2026-03-27):
- **이유**: 24/7 상시 가동(caffeinate), Ollama 로컬 LLM 구동 가능, M1은 일상 작업용
- Tailscale 연결 끊김 발견 → 로컬 IP(`192.168.219.105`)로 SSH 접속하여 해결
- Python 3.14 + 전체 의존성 설치, 웹 대시보드 포트 8888 가동
- Jinja2 + Python 3.14 호환성 문제 → 캐시 비활성화 workaround 적용
- **Tailscale 복구** 후 외부 접근 가능 (`100.105.53.37:8888`)
- **30분 주기 헬스체크 크론** 추가 — SSH + Tailscale 체크, 이상 시 #ultra-trader 알림 + 자동 복구 시도

### 백테스트 엔진 버그 수정

**O(n²) 성능 버그** (2026-03-27~28):
- 매 바마다 `data.iloc[lookback_start : i + 1]` 슬라이싱 → 12만 캔들에서 창 크기 계속 증가
- SIGTERM으로 프로세스 킬됨
- **수정**: 고정 크기 윈도우로 변경 → 25,921 캔들 44초 처리

**추가 수정 사항:**
- `sharpe_ratio`, `max_drawdown_pct` 속성 별칭 추가
- `should_close` 메서드 호출 누락 → 엔진에 추가
- 진입 봉에서 즉시 청산 방지 로직
- 타임스탬프 변환 버그 (`// 10**6` → `// 1000`)
- `prev_in_bb` 상태 추적 오류 수정

### MES 데이터 백테스트 및 기존 전략 비교

기존 [[finance/snp500-trading|SnP500-trading]] 프로젝트의 MES 30분봉 데이터(65,536개, 2020-05~2025-12)를 Ultra Trader에 적용하여 비교 (2026-03-27~28):

**3-Way 성능 비교:**

| 지표 | 기존 V21 (레짐+RSI) | V22 (V21+Range필터) | Ultra Trader |
|------|-------------------|-------------------|-------------|
| 승률 | 75.0% | 73.4% | 0.4% |
| 손익비 (PF) | 1.97 | 1.99 | 0.39~0.81 |
| 총 PnL | +1,738pt | +1,013pt | -9,588pt |
| maxDD | -98pt | -66pt | -9,590pt |
| 거래 수 | 516 | 323 | 1,890 |

**V22 개선사항** (V21 대비):
- Range Ratio 필터 추가: `(고가 - 저가) / ATR14 ≤ 1.8` (JEPA World Model 프록시)
- 거래 수 37% 감소, maxDD 33% 개선, 대신 총 PnL 42% 감소

**Ultra Trader 실패 원인 (로직 비교 기반):**

| 항목 | 기존 V21/V22 | Ultra Trader | 상태 |
|------|------------|-------------|------|
| 일일 거래 제한 | 1회 | 없음 | Critical |
| ATR 동적 SL | ATR×12 (10~60틱) | 고정 15/25틱 | High |
| BB 재진입 청산 | 있음 | 없음 → 후에 추가 | High |
| 트레일링 스탑 | 15/5틱 (또는 10/3) | 코드 추가했으나 작동 의심 | High |
| 장종료 청산 | 있음 | 없음 | Medium |
| 시간대 필터 | 서머타임 520~700 | 없음 | Medium |
| BB 내부 카운트 | AJ26=0 체크 | 없음 | Low |

**청산 사유 분석** (ATR 동적 SL 적용 후):
- BB 재진입: 68.4% (평균 PnL: +$8.51) — 너무 빨리 청산
- 손절: 28.4% (평균 PnL: -$59.51)
- 익절(TP): 2.0% (평균 PnL: +$63.02) — 거의 도달 안 함

### AI 자동 전략 생성 (Option B)

기존 로직 복제(Option A) 대신, Ultra Trader 본래 목적인 AI 자동 전략 생성으로 방향 전환 (2026-03-28):

**1. ML 모델 학습 (LightGBM)**
- 검증 정확도: **93.63%**
- 라벨 분포: 10% 진입 신호, 90% 대기
- **Top 3 중요 피처**: ATR(890) > BB Width(783) > Hour(558)
- Hour의 높은 중요도 = V21의 시간대 필터(520~700)와 일치

**2. Optuna 파라미터 최적화**
- 50 trials 실행 → **전부 실패** (제약 조건: 최소 100거래 + 50% 승률)
- 원인: 백테스트 엔진에서 신호 자체가 0~1건만 생성
- 엔진 버그 수정 후 재실행 필요

**3. DeepSeek-R1:70b 분석** (M4에서 실행)
- 진단: 오버피팅 + 과도한 거래 + 리스크 관리 부족
- 권장: ML + V21 하이브리드 앙상블
- 개선 제안: 트렌드 필터(50MA), 볼륨 필터, 레버리지 축소(3x→1~2x)

**4. 하이브리드 전략 (V21 + ML)**
- 1차 필터: V21 규칙 (일일 1회, 레짐, RSI>35)
- 2차 필터: ML 예측 확률 ≥ 70%
- 앙상블 신뢰도: V21 60% + ML 40%
- **결과**: ML 필터가 너무 빡빡하여 거래 0~1건 → 임계값 조정 중

### autoresearch와 Ultra Trader의 관계

기존 autoresearch는 수동 리서치 프로세스 (arXiv + Reddit → 40개 매트릭스 실험 → 수동 분석). Ultra Trader는 이를 자동화:
- **Optuna** = 실험 자동 실행 (수동 40개 → 자동 50~100 trials)
- **ML 모델** = 피처 중요도 자동 발견
- **DeepSeek** = 결과 해석 자동화

## Key Decisions

- **2026-03-27**: 크립토 선물 전용으로 설계, BTC/USDT·ETH/USDT부터 시작
- **2026-03-27**: M4 Max를 상시 가동 서버로 결정 (M1은 OpenClaw + Jarvis용)
- **2026-03-27**: 30분 주기 헬스체크 크론 설정 (트레이딩 고려)
- **2026-03-27**: MES 데이터로 Ultra Trader 성능 검증 우선 (크립토 적용 전 S&P500 검증)
- **2026-03-28**: Option B(AI 자동 전략 생성) 방향으로 전환 — 기존 로직 복제보다 혁신적 접근
- **2026-03-28**: V22 Range Ratio 필터(≤1.8) 반영 확인

## Results & Outcomes

- **백테스트 엔진**: O(n²) 버그 수정, 25,921 캔들 44초 처리 가능
- **ML 학습**: LightGBM 93.63% 정확도, 핵심 피처(ATR/BB Width/Hour) 발견
- **성능 비교**: Ultra Trader 승률 0.4% vs 기존 V21 75% — 근본적 차이는 청산 로직(트레일링, BB 재진입, ATR 동적 SL)
- **ATR 동적 SL 적용 후**: PF 0.45 → 0.81로 개선, 승률 41.8%까지 회복 (BB 재진입이 68.4%로 너무 빨리 청산하는 문제 잔존)
- **Optuna**: 50 trials 전부 실패 (엔진 신호 생성 문제)
- **M4 배포**: 코드 배포, 의존성 설치, 웹 대시보드(포트 8888) 가동 완료

## Open Issues

- BB 재진입 청산이 68.4%로 너무 빨리 청산 — 조건 보수적으로 조정 필요
- 트레일링 스탑 실제 작동 여부 검증 필요
- Optuna 재실행 (엔진 버그 수정 후)
- 하이브리드 전략 ML 임계값 튜닝
- 테스트넷 API 키 발급 미완료 (Binance/Bybit)
- 크립토(BTC/ETH) 적용은 MES 검증 완료 후

## Related

- [[finance/snp500-trading]]
- [[projects/ultra-trader]]
- [[tech/ollama-deepseek]]
- [[infra/m4-server]]
- [[infra/tailscale-network]]

## Sources

- [2026-03-27](raw/discord/ultra-trader/2026-03-27.md)
- [2026-03-28](raw/discord/ultra-trader/2026-03-28.md)
