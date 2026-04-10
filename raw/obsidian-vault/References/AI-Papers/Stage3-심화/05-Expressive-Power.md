---
title: "On the Expressive Power of Deep Neural Networks"
stage: 3
order: 5
difficulty: "심화"
prerequisites: ["04-RNN-Power"]
---

# On the Expressive Power of Deep Neural Networks

## 한줄 요약
신경망의 깊이가 증가할수록 입력 공간의 궤적(trajectory)이 기하급수적으로 복잡해져서 표현력이 급증함을 증명.

## 핵심 개념

### 궤적 길이 (Trajectory Length)
입력 공간의 1차원 경로를 네트워크에 통과시키면, 출력 공간에서의 궤적 길이가 깊이에 대해 지수적으로 증가:

$$L(\text{trajectory}) \sim \exp(n) \quad \text{where } n = \text{depth}$$

### 세 가지 측도

1. **궤적 길이**: 깊이 n에 대해 지수적 증가
2. **전이 수 (Number of transitions)**: 결정 경계의 선형 영역 수, 역시 깊이에 지수적
3. **활성화 패턴 다양성**: 각 층의 ReLU on/off 패턴 수

### 직관

```
1층:  ─────/────── (단순한 절곡)
2층:  ──/──\──/── (2번 접힘)
3층:  /\/\/\/\/\/  (기하급수적 접힘!)

종이접기 비유:
  n번 접으면 2^n 개의 층 → 지수적 복잡도
```

## 깊이 vs 너비

$$\text{깊은 네트워크} \gg \text{넓은 네트워크}$$

같은 파라미터 수일 때:
- 깊이 n, 너비 w인 네트워크의 표현력
- ≈ 깊이 1, 너비 w^n인 네트워크의 표현력
- → 깊이는 지수적 이점!

## 실험적 검증
- 랜덤 초기화 네트워크에서도 깊이에 따른 궤적 길이 기하급수적 증가 확인
- 학습된 네트워크에서는 더 구조화된 궤적

## 원문 정보
- 논문: [On the Expressive Power of Deep Neural Networks](https://arxiv.org/abs/1606.05336)
- 발표: ICML, 2017
- 저자: Maithra Raghu, Ben Poole, Jon Kleinberg, Surya Ganguli, Jascha Sohl-Dickstein
