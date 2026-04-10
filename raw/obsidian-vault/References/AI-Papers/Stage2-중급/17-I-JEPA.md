---
title: "I-JEPA: Self-Supervised Learning from Images with a Joint-Embedding Predictive Architecture"
stage: 2
order: 17
difficulty: "중급"
prerequisites: ["16-JEPA-개념", "21-Vision-Transformer"]
year: 2023
authors: "Mahmoud Assran, Quentin Duval, Ishan Misra, Piotr Bojanowski, Pascal Vincent, Michael Rabbat, Yann LeCun, Nicolas Ballas"
---

# I-JEPA — 이미지로 시작하는 JEPA

## 한줄 요약
이미지의 일부를 보고 나머지 부분의 "의미(표현)"를 예측하는 방식으로, 데이터 증강 없이 강력한 시각 표현을 학습해.

## 왜 중요한가?
기존 자기지도학습(SimCLR, DINO 등)은 이미지를 자르고, 회전하고, 색 바꾸는 등의 데이터 증강에 의존했어. I-JEPA는 이런 "꼼수" 없이, 순수하게 이미지 내 의미 예측만으로 좋은 표현을 배워. JEPA 개념을 이미지에 처음 적용한 구체적 구현이야.

## 핵심 개념

### 1. 마스킹 전략 — 무엇을 가릴까?

```
원본 이미지 (ViT 패치로 분할):
┌──┬──┬──┬──┬──┬──┐
│  │  │  │  │  │  │
├──┼──┼──┼──┼──┼──┤
│  │▓▓│▓▓│▓▓│  │  │  ▓ = 가린 부분 (타겟)
├──┼──┼──┼──┼──┼──┤
│  │▓▓│▓▓│▓▓│  │  │
├──┼──┼──┼──┼──┼──┤
│  │  │  │  │  │  │  나머지 = 보이는 부분 (컨텍스트)
└──┴──┴──┴──┴──┴──┘

핵심: 큰 블록을 가림 (랜덤 패치 아님!)
→ 의미적 추론을 강제 ("이 영역에 뭐가 있을까?")
```

### 2. MAE와의 핵심 차이

```
MAE (Masked Autoencoder):
  가린 부분의 "픽셀"을 복원 🖼️
  → 텍스처, 색상 등 저수준 특징에 집중
  → 의미적 이해보다 복원 능력

I-JEPA:
  가린 부분의 "표현 벡터"를 예측 📊
  → 추상적 의미(개, 잔디, 하늘)에 집중
  → 불필요한 디테일 무시
```

### 3. 학습 구조

```
컨텍스트 패치 ──→ [컨텍스트 인코더] ──→ 표현 ──→ [예측기] ──→ 예측 표현 ŝ
                                              위치 정보 ↗        │
                                                                비교 (L2)
타겟 패치 ──────→ [타겟 인코더 (EMA)] ────────→ 타겟 표현 s ──────┘

- 컨텍스트 인코더: 학습 (gradient)
- 타겟 인코더: EMA (Exponential Moving Average)로 안정적 업데이트
- 예측기: 가벼운 트랜스포머
```

### 4. 결과

| 방법 | ImageNet Top-1 | 데이터 증강 | 학습 효율 |
|------|---------------|------------|----------|
| MAE | 83.6% | 최소 | 느림 |
| DINO v2 | 84.5% | 다중 crop | 보통 |
| I-JEPA | 83.3% | ❌ 없음! | ✅ 빠름 |

데이터 증강 없이 경쟁력 있는 성능을 달성하면서, 학습 효율은 더 좋아.

## 실습

```bash
git clone https://github.com/facebookresearch/ijepa.git
cd ijepa
pip install -r requirements.txt

# 사전학습된 모델로 평가
# (학습은 대규모 GPU 필요)
python eval_linear.py --checkpoint <path>
```

## 원문 정보
- 논문: [Self-Supervised Learning from Images with a Joint-Embedding Predictive Architecture](https://arxiv.org/abs/2301.08243)
- 발표: CVPR, 2023
- GitHub: [facebookresearch/ijepa](https://github.com/facebookresearch/ijepa)

## 다음 단계
→ [[Stage3-심화/15-V-JEPA]] : 비디오로 확장한 V-JEPA
