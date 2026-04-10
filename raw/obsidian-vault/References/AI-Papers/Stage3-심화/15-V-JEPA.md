---
title: "V-JEPA"
stage: 3
order: 15
difficulty: "심화"
prerequisites: ["Stage2-중급/17-I-JEPA"]
---

# V-JEPA — Video Joint Embedding Predictive Architecture

## 한줄 요약
I-JEPA를 비디오로 확장. 시공간(spatiotemporal) 마스킹과 표현 공간 예측으로 비디오 이해를 위한 자기지도 학습.

## 왜 중요한가?
비디오는 이미지보다 훨씬 복잡 — 시간 차원이 추가되니 픽셀 예측은 더욱 비효율적. V-JEPA는 JEPA 철학을 비디오에 적용하여, 픽셀 복원 없이 의미론적 비디오 표현을 학습.

## 구조

```
비디오: T프레임 × H × W
    ↓ 시공간 패치로 분할
    
┌──────────────────────────┐
│ ■■■ □□□ ■■■ □□□          │  ■ = context (보이는 시공간 패치)
│ ■■■ □□□ ■■■ □□□          │  □ = target (마스킹된 시공간 블록)
│ ■■■ □□□ ■■■ □□□          │
│  t=1  t=2  t=3  t=4      │
└──────────────────────────┘

Context → Context Encoder (ViT) → Predictor → 타겟 표현 예측
Target  → Target Encoder (EMA)  → 타겟 표현 (정답)
                                    ↓
                              L2 손실
```

### 시공간 마스킹 전략
- **시간축 마스킹**: 연속된 프레임 블록을 마스킹 → 미래 예측
- **공간축 마스킹**: I-JEPA처럼 큰 공간 블록 마스킹
- **시공간 결합**: 시간 + 공간 동시 마스킹 (가장 어렵고 효과적)

## I-JEPA vs V-JEPA

| | I-JEPA | V-JEPA |
|---|---|---|
| 입력 | 이미지 | 비디오 |
| 인코더 | ViT | Video ViT (시공간 어텐션) |
| 마스킹 | 공간 블록 | 시공간 블록 |
| 예측 | 공간 표현 | 시공간 표현 |
| 사전학습 데이터 | ImageNet | VideoMix2M |

## 핵심 설계

### Video Vision Transformer
```
입력 비디오 (T×H×W)
    ↓ 시공간 패치 (2×16×16)
    ↓ 선형 임베딩 + 위치 인코딩
    ↓ Transformer Encoder
        - 시공간 셀프 어텐션
        - 또는 분리된 시간/공간 어텐션 (효율성)
```

### 예측기 (Predictor)
- 좁은(narrow) 트랜스포머
- Context 인코더보다 적은 파라미터
- 마스킹된 위치의 위치 토큰을 입력으로 받아 해당 표현 예측

## 성능

### 비디오 분류 (Kinetics-400)
| 방법 | Frozen Eval | Fine-tuned |
|------|-------------|------------|
| VideoMAE v2 | 76.4% | 81.5% |
| V-JEPA | **77.2%** | 81.9% |

→ 픽셀 복원 없이 경쟁력 있는 성능! 특히 frozen evaluation에서 강점.

### 강점
- **데이터 효율성**: 적은 라벨 데이터로 좋은 성능
- **증강 불필요**: 시간 역전, 속도 변경 등 비디오 증강 없이 학습
- **전이 학습**: 다양한 다운스트림 태스크에 일반화

## 의의
- JEPA 패러다임의 비디오 확장 — LeCun 비전의 중요한 마일스톤
- 픽셀 예측의 비효율성을 비디오 도메인에서 더 극명하게 보여줌
- 향후 MC-JEPA (멀티모달), Action-JEPA 등으로 확장 가능성

## 원문 정보
- 논문: [V-JEPA: Video Joint Embedding Predictive Architecture](https://ai.meta.com/research/publications/revisiting-feature-prediction-for-learning-visual-representations-from-video/)
- 발표: Meta AI, 2024
- GitHub: [facebookresearch/jepa](https://github.com/facebookresearch/jepa)
