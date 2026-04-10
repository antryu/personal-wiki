---
title: "Relational Recurrent Neural Networks"
stage: 3
order: 9
difficulty: "심화"
prerequisites: ["Stage1-입문/05-셀프어텐션", "08-Neural-Turing"]
---

# Relational Recurrent Neural Networks

## 한줄 요약
RNN의 메모리 슬롯 사이에 멀티헤드 셀프 어텐션을 도입하여, 관계 추론 능력을 대폭 향상.

## 핵심 아이디어

기존 LSTM의 메모리는 하나의 벡터. Relational RNN은 **여러 메모리 슬롯**을 두고, 매 스텝마다 슬롯 간 셀프 어텐션으로 상호작용.

```
기존 LSTM:    h_t = f(h_{t-1}, x_t)     (단일 벡터 업데이트)

Relational:   M_t = MHDPA(M_{t-1}, x_t)  (메모리 행렬 전체를 어텐션)
              여기서 M ∈ R^{N×d} (N개 슬롯 × d차원)
```

### Relational Memory Core

```
입력: x_t, M_{t-1}  (메모리 행렬)
  1. x_t를 각 메모리 슬롯에 concat
  2. Multi-Head Dot-Product Attention (MHDPA)
     Q, K, V = linear(M_{t-1} ⊕ x_t)
  3. Gate (LSTM 스타일)로 메모리 업데이트
출력: M_t
```

## 실험 결과

### Nth Farthest Task (관계 추론)
"8개 벡터 중 특정 벡터에서 N번째로 먼 벡터를 찾기"

| 모델 | 정확도 |
|------|--------|
| LSTM | 19.1% |
| DNC | 37.0% |
| **Relational RNN** | **91.0%** |

### 언어 모델링 (WikiText-103)
기존 LSTM 대비 perplexity 개선

## 핵심 통찰
- **메모리 슬롯 간 상호작용**이 관계 추론의 핵심
- 트랜스포머의 셀프 어텐션을 RNN의 시간 축에 결합한 하이브리드
- 트랜스포머가 지배하기 전, RNN+어텐션의 가능성을 보여준 연구

## 원문 정보
- 논문: [Relational Recurrent Neural Networks](https://arxiv.org/abs/1806.01822)
- 발표: NeurIPS, 2018
- 저자: Adam Santoro et al. (DeepMind)
