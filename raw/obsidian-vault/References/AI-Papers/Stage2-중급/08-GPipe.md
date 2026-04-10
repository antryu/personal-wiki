---
title: "GPipe"
stage: 2
order: 8
difficulty: "중급"
prerequisites: ["02-ResNet"]
---

# GPipe — Pipeline Parallelism for Giant Models

## 한줄 요약
거대한 신경망을 여러 GPU에 나눠서 파이프라인처럼 효율적으로 학습하는 방법.

## 왜 중요한가?
모델이 커지면 한 GPU 메모리에 안 들어가. GPipe는 모델을 층 단위로 잘라서 여러 GPU에 배치하고, 마이크로배치로 파이프라인 처리해서 GPU 유휴 시간(bubble)을 줄였어.

## 구조

```
시간 →  t1    t2    t3    t4    t5    t6    t7    t8
GPU 1: [F₁μ₁][F₁μ₂][F₁μ₃][F₁μ₄][B₁μ₄][B₁μ₃][B₁μ₂][B₁μ₁]
GPU 2:       [F₂μ₁][F₂μ₂][F₂μ₃][B₂μ₃][B₂μ₂][B₂μ₁]
GPU 3:              [F₃μ₁][F₃μ₂][B₃μ₂][B₃μ₁]
GPU 4:                     [F₄μ₁][B₄μ₁]

F = Forward, B = Backward, μ = micro-batch
```

### 핵심 기법
1. **파이프라인 병렬화**: 모델을 K개 파티션으로 나눠 K개 GPU에 배치
2. **마이크로배치**: 미니배치를 M개 마이크로배치로 분할 → 파이프라인 충전
3. **재계산 (Recomputation)**: 메모리 절약을 위해 forward 중간값을 저장하지 않고 backward 시 재계산

### Bubble 비율
- 버블(GPU 유휴 시간) 비율 ≈ (K-1) / (K-1+M)
- M을 충분히 크게 하면 버블이 무시할 수 있는 수준

## 성능
- AmoebaNet-B를 5.57억 파라미터로 확장 → ImageNet 84.4% top-1
- 기존 대비 4배 큰 모델 학습 가능

## 원문 정보
- 논문: [GPipe: Efficient Training of Giant Neural Networks using Pipeline Parallelism](https://arxiv.org/abs/1811.06965)
- 발표: NeurIPS, 2019
- 저자: Yanping Huang et al. (Google)
