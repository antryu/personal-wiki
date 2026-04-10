---
title: "Neural Turing Machines"
stage: 3
order: 8
difficulty: "심화"
prerequisites: ["04-RNN-Power"]
---

# Neural Turing Machines

## 한줄 요약
신경망에 미분 가능한 외부 메모리를 결합하여, 읽기/쓰기를 통해 알고리즘적 작업을 학습할 수 있는 모델.

## 구조

```
┌─────────────────────────────────┐
│         Controller               │
│    (LSTM or Feed-forward)        │
│                                  │
│  읽기 헤드(들)    쓰기 헤드(들)    │
│      │               │          │
└──────┼───────────────┼──────────┘
       ↓               ↓
┌─────────────────────────────────┐
│      External Memory Matrix      │
│         M ∈ R^{N×M}             │
│   (N 슬롯 × M 차원)              │
└─────────────────────────────────┘
```

### 읽기 연산
$$\mathbf{r}_t = \sum_i w_t(i) \mathbf{M}_t(i)$$

가중치 $w_t$는 어텐션으로 결정 (soft addressing).

### 쓰기 연산
$$\mathbf{M}_t(i) = \mathbf{M}_{t-1}(i) [\mathbf{1} - w_t(i)\mathbf{e}_t] + w_t(i)\mathbf{a}_t$$

- $\mathbf{e}_t$: erase vector (삭제할 부분)
- $\mathbf{a}_t$: add vector (추가할 내용)

### 주소 지정 메커니즘
1. **Content-based**: 쿼리 벡터와 메모리의 코사인 유사도
2. **Location-based**: 이전 주소 기반 시프트
3. **결합**: content → interpolation → shift → sharpening

## 학습된 알고리즘

| 태스크 | 설명 | 결과 |
|--------|------|------|
| Copy | 입력 시퀀스 복사 | ✅ 일반화 |
| Repeat Copy | N번 반복 복사 | ✅ |
| Associative Recall | key→value 검색 | ✅ |
| Priority Sort | 우선순위 정렬 | ✅ |

메모리 접근 패턴을 시각화하면, 실제 알고리즘처럼 순서대로 읽고 쓰는 것이 관찰됨.

## 의의
- 미분 가능한 컴퓨터의 시초
- 후속: Differentiable Neural Computer (DNC), Memory Networks
- 트랜스포머의 어텐션 메커니즘에도 개념적 영향

## 원문 정보
- 논문: [Neural Turing Machines](https://arxiv.org/abs/1410.5401)
- 발표: arXiv, 2014
- 저자: Alex Graves, Greg Wayne, Ivo Danihelka (DeepMind)
