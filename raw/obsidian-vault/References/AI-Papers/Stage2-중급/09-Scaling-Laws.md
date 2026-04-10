---
title: "Scaling Laws for Neural Language Models"
stage: 2
order: 9
difficulty: "중급"
prerequisites: ["Stage1-입문/07-GPT란"]
---

# Scaling Laws for Neural Language Models

## 한줄 요약
모델 크기, 데이터 양, 컴퓨팅을 늘리면 성능이 예측 가능한 멱법칙(power law)을 따른다.

## 왜 중요한가?
"더 크게 만들면 더 좋아질까?"에 대한 수학적 답. 이 발견이 GPT-3, GPT-4 같은 초거대 모델을 만드는 이론적 근거가 됐어.

## 핵심 법칙

### 멱법칙 (Power Law)
```
L(N) ∝ N^(-0.076)    (모델 크기 N에 대한 손실)
L(D) ∝ D^(-0.095)    (데이터 크기 D에 대한 손실)
L(C) ∝ C^(-0.050)    (컴퓨팅 C에 대한 손실)
```

로그-로그 스케일에서 깔끔한 직선!

### 세 가지 축의 균형
```
         모델 크기 (N)
            ↗
성능 ← 컴퓨팅 (C)
            ↘
         데이터 크기 (D)
         
세 축을 균형 있게 키워야 최적!
하나만 키우면 수확 체감.
```

### 주요 발견
1. **모델 크기가 가장 중요**: 같은 컴퓨팅이면 큰 모델 + 적은 데이터가 유리
2. **구조는 별로 안 중요**: 층 수, 헤드 수 등 세부 구조보다 전체 파라미터 수가 핵심
3. **오버피팅 예측 가능**: N과 D의 비율로 오버피팅 정도 예측

## 실용적 의미
- 작은 실험으로 큰 모델 성능 예측 가능 → 자원 절약
- 최적 모델 크기 = 6 × 데이터셋 토큰 수 (Chinchilla에서 수정됨)

## 원문 정보
- 논문: [Scaling Laws for Neural Language Models](https://arxiv.org/abs/2001.08361)
- 발표: arXiv, 2020
- 저자: Jared Kaplan et al. (OpenAI)
