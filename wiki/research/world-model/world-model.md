# World Model 연구 — LeWM JEPA를 S&P500 트레이딩에 적용

> LeWorldModel(LeWM)의 JEPA 아키텍처를 S&P500 선물(MES) 멀티타임프레임 데이터에 적용하여 비지도 시장 레짐 탐지 및 이상 감지 시스템을 구축한 연구 기록. 3.4M 파라미터 모델로 Apple Silicon에서 학습, 6개 시장 레짐이 자연 군집됨.
> Last updated: 2026-04-05

## Overview

2026년 3월 24일, LeCun 팀의 LeWorldModel(LeWM) 논문 공개 당일에 해당 JEPA 아키텍처를 금융 시계열에 최초 적용하는 실험을 시작했다. 핵심 가설은 "JEPA가 비디오 픽셀에서 물리 법칙을 학습할 수 있다면, 캔들스틱에서 시장 레짐을 학습할 수 있다"는 것이었다. 6년치 MES 데이터(5분/15분/60분봉)로 학습한 결과, 라벨 없이 6개 시장 레짐이 자연 군집되었고, prediction error가 시장 불확실성 시그널로 활용 가능함을 확인했다. 논문 저자 Lucas Maes 본인이 X 답글에 좋아요를 눌러 인정을 받았다.

## Key Topics

### LeWM / JEPA 아키텍처 이해
- **JEPA(Joint Embedding Predictive Architecture)**: 픽셀/피처 공간이 아닌 **representation space**에서 다음 상태를 예측하는 아키텍처 (raw/discord/world-model/2026-03-24.md)
- 기존 모델: "다음 봉 종가는 5,432" (포인트 예측) → JEPA: "다음 상태의 잠재 표현은 이 영역" (latent space prediction)
- Loss 함수 2개만 사용:
  - **pred_loss**: 예측된 다음 latent state vs 실제 다음 latent state의 MSE
  - **SIGReg(Sketch Isotropic Gaussian Regularizer)**: latent space가 표준정규분포 N(0,I)를 따르도록 강제하여 representation collapse 방지
- SIGReg는 Epps-Pulley characteristic function test로 1024개 랜덤 방향에서 가우시안과의 거리를 측정
- 이전 방법(DINO-WM: 6개 loss, VICReg: 3개 loss) 대비 하이퍼파라미터 λ 하나로 variance + covariance + higher-order 통계량 전부 커버

### 주요 World Model 플레이어

| Company | Focus | Funding |
|---|---|---|
| AMI Labs (LeCun) | JEPA/World Models | $1.03B |
| World Labs (Fei-Fei Li) | 3D AI | $1B+ |
| General Intuition | Game → Robot | $133.7M |
| Atoms (Kalanick) | Industrial Robotics | Stealth 8yr |

### Trading World Model 설계 및 구현

**입력 변환 (Pixel → Candlestick)**:
- LeWM: 비디오 프레임 (RGB 이미지) → CNN encoder
- Trading: 캔들스틱 시퀀스 (OHLCV + 기술지표 30개) → 1D Conv encoder

**멀티타임프레임 = 멀티뷰 (Hierarchical JEPA)**:
```
5분봉  (32 steps) → encoder_5M  → latent_5M  ─┐
15분봉 (10 steps) → encoder_15M → latent_15M ─┤→ concat → fused latent (192dim)
60분봉 ( 2 steps) → encoder_60M → latent_60M ─┘
```
- 5분봉: 미시 노이즈 + 즉각 반응 (스캘핑 레짐)
- 15분봉: 단기 추세 구조
- 60분봉: 세션 레벨 방향성 (거시 레짐)
- 이 구조는 LeCun이 AMI Labs에서 추구하는 추상화 레벨별 world model과 동일

**Action 정의**: `log(close_t+1 / close_t)` = 로그 수익률 (로봇의 조이스틱 입력에 대응)

**데이터 현황**:
```
sp500_multi_timeframe.duckdb (275MB)
5분봉:  420,622건 (2020.01 ~ 2025.12)
15분봉: 140,244건
60분봉:  35,169건
컬럼 38개: OHLCV + SMA + BB + ATR + RSI + MACD + MFI + Z-score + Trend Slope
```

**모델 스펙**: 3.36M params (~13MB)
- TimeSeriesEncoder (1D Conv) × 3 타임프레임
- MultiTimeframeEncoder (fusion)
- ARPredictor (Transformer + AdaLN)
- SIGReg (Gaussian regularizer)

**학습 데이터**: train 294K / val 63K / test 63K 시퀀스 (HDF5: 847MB)

### 학습 과정 및 인프라 이슈

**M1 Pro (16GB) 학습** (2026-03-24):
- Epoch 0~8까지 학습, pred_loss 0.966 → 0.113으로 88% 감소
- SIGReg 0.127 → 0.037로 안정적 수렴
- Epoch 8에서 SIGKILL (메모리 부족)로 중단

**M4 Max (128GB) 이전**:
- rsync로 코드 + 데이터 + 체크포인트 1.2GB 전송 (~40초)
- RichProgressBar가 non-TTY 환경에서 프로세스 사망 → `enable_progress_bar=False`로 해결
- DataLoader multiprocessing fork 이슈 → `num_workers=0`으로 해결
- 에폭당 ~11분 (M1의 25분 대비 2배+ 빠름)

**M4 학습 결과**:
```
Epoch  8: val_loss 1.062
Epoch 13: val_loss 0.964
Epoch 17: val_loss 0.898
Epoch 22: val_loss 0.856
Epoch 26: val_loss 0.781 (best) ← Epoch 8 대비 26% 개선
```

### Evaluation 결과 (Epoch 8 기준)

**t-SNE 레짐 클러스터링**:
- 192차원 latent space를 2D로 압축 → 6개 레짐 자연 군집
- Regime 0 (파랑, 24K): 가장 큰 군집, 예측 오차 최저 → "평범한 시장"
- Regime 4 (노랑, 6K): 가장 작고 예측 어려움 → "비정상 구간"

**Prediction Error 분석**:
- 중앙값 0.009, 평균 0.052 → 90%+ 데이터 거의 완벽 예측
- Fat tail = 레짐 2, 4에 해당하는 어려운 시장 구간
- Regime 0: error 0.008 / Regime 4: error 0.171 (21배 차이)

**Latent 차원 분산**:
- 상위 5~8개 차원 분산 2.0+ → 모델이 가장 중요시하는 정보
- 전부 0.15 이상 → collapse 없음, 192차원 전부 활성
- 하위 100+ 차원은 분산 0.5 이하 → 64차원으로 축소 가능성

**Prediction Error Timeline**:
- 2025-02-01~03 구간 rolling mean 상승 → 실제 시장 변동성 확대 구간과 일치
- Error spike = 블랙스완 조기경보로 활용 가능

### 트레이딩 적용 전략

JEPA가 제공하는 기존 기술지표와 질적으로 다른 필터:
```
기존: BB 하단 이탈 → 진입
JEPA 추가: BB 하단 이탈 → JEPA "어떤 레짐?" → 진입/패스
```

1. **레짐 감지**: 지금 시장이 어떤 상태인지 (regime detection)
2. **전이 예측**: 횡보→추세 전환 신호
3. **불확실성 감지**: prediction error 급등 = 포지션 축소 시그널
4. **액션 시뮬레이션**: "여기서 롱하면?" 다른 액션별 다음 상태 비교

핵심 통찰: **"가격을 예측하는 모델이 아니라 시장 상태를 이해하는 모델"** — 가격이 5pt 틀려도 상태 예측이 맞으면 의사결정은 정확할 수 있음.

### 외부 공유 및 반응

**X (Twitter)**:
- Lucas Maes의 LeWM 트윗(443 리트윗, 3.1K 좋아요)에 답글 작성
- **Lucas Maes 본인 + 가까운 친구 Ian이 좋아요** → 논문 저자 인정
- 논문 공개 당일에 실제 적용 결과를 보여준 유일한 사례

**LinkedIn**:
- 2편 구조 전략: Part 1(과정 공개) → Part 2(결과)
- 글 구조: 훅 → 논문 핵심 → 적용 방식 → 결과 → 열린 질문(댓글 유도)
- 조직설계 AI 에이전트 글도 동시 게시 → "AI를 실제 적용하는 사람" 포지셔닝

### GVP-WM 아카이브

**Grounding Video Plans with World Models** (2026-03-24):
- 프로젝트: https://chziakas.github.io/gvpwm/
- ICLR 2026 World Models Workshop 채택
- 핵심: 비디오 모델의 물리 위반 계획 → World Model latent space에서 실행 가능한 궤적으로 보정
- Advisors: Amir Bar, Alessandra Russo
- 트레이딩 연결점: 전략 과최적화를 "현실적 범위"로 제약하는 데 활용 가능

## Key Decisions

- **2026-03-24**: LeWM JEPA를 S&P500 트레이딩에 적용하기로 결정
- **2026-03-24**: 5분/15분/60분봉 3축 멀티타임프레임 구조 채택 (10/20/30분봉은 중복 정보)
- **2026-03-24**: M1 Pro 메모리 한계로 M4 Max로 학습 이전 결정
- **2026-03-24**: Epoch 8 중간 결과로 X 답글 먼저 작성 (논문 당일 타이밍 우선)
- **2026-03-24**: LinkedIn은 2편 구조(과정→결과)로 분리하여 게시 결정
- **2026-03-24**: 다음 실험(하이퍼파라미터 튜닝, 더 큰 모델)은 반드시 M4 Max에서 진행

## Results & Outcomes

- **모델 구현 완료**: LeWM → Trading JEPA 전체 파이프라인 (prepare_data.py, model/, train.py, evaluate.py)
- **학습 성공**: 3.4M params, pred_loss 0.966→0.113 (88% 감소), val_loss 최저 0.781
- **레짐 탐지 성공**: 라벨 없이 6개 시장 레짐 자연 군집 (K-means on latent space)
- **이상 탐지 유효**: Regime 4의 prediction error가 Regime 0 대비 21배 → 불확실성 시그널로 활용 가능
- **저자 인정**: Lucas Maes가 X 답글에 좋아요 → JEPA의 금융 시계열 적용 가능성 확인
- **인프라 교훈**: M1 16GB는 294K 시퀀스 학습에 메모리 부족, M4 128GB 필요

## Next Steps

- M4 학습 완료 후 최종 evaluate 실행 (더 선명한 레짐 클러스터 기대)
- BB 전략과 JEPA 레짐 필터 연동 테스트
- LinkedIn Part 2 (결과편) 게시
- X 후속 트윗 (training complete + 새 시각화)
- 하이퍼파라미터 튜닝 (latent dim 축소, 더 큰 모델 등)

## Related

- [[research/lewm-jepa]] — LeWorldModel 논문 상세
- [[tech/jepa-architecture]] — JEPA/SIGReg 기술 설명
- [[projects/sp500-trading]] — S&P500 트레이딩 프로젝트
- [[tech/apple-silicon-ml]] — Apple Silicon ML 학습 환경
- [[business/linkedin-strategy]] — LinkedIn 콘텐츠 전략

## Sources

- [2026-03-24](raw/discord/world-model/2026-03-24.md)
- LeWorldModel 논문: https://le-wm.github.io / arxiv.org/abs/2603.19312
- Not Boring — "World Models": https://www.notboring.co/p/world-models
- 비주얼 가이드: https://www.nikunjk.com/visualizedessays/worldmodels
- GVP-WM: https://chziakas.github.io/gvpwm/
