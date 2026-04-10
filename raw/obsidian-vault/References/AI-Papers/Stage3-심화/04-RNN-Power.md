---
title: "On the Computational Power of Neural Nets"
stage: 3
order: 4
difficulty: "심화"
prerequisites: ["Stage1-입문/03-RNN-기초"]
---

# On the Computational Power of Neural Nets

## 한줄 요약
무한 정밀도를 가정할 때, RNN이 튜링 머신과 동등한 계산 능력을 가진다는 것을 증명.

## 핵심 증명

### 튜링 완전성 정리
RNN with rational weights and infinite precision can simulate any Turing Machine.

증명 스케치:
1. 튜링 머신의 상태를 RNN의 hidden state에 인코딩
2. 테이프 내용을 유리수(rational number)로 인코딩
3. 상태 전이 함수를 RNN의 sigmoid + linear 연산으로 시뮬레이션

### 핵심 트릭: Cantor-like 인코딩
```
테이프: ...0 1 1 0 1 0 0...
              ↓
인코딩: Σ sᵢ · 4^(-i) = 하나의 유리수로 압축
              ↓
hidden state의 한 뉴런에 저장
```

## 계산 위계

```
           계산 능력
              ↑
  Turing Machine (RE)
  = RNN (무한 정밀도) ←── 이 논문의 결과
              ↑
  RNN (유한 정밀도)
  ⊂ 유한 오토마타?
              ↑
  피드포워드 신경망
  = 불리언 회로
```

## 실제적 함의

이 결과는 **이론적**이야:
- 무한 정밀도 가정 → 실제 부동소수점으로는 불가
- 무한 시간 가정 → 실제로는 유한 스텝
- "할 수 있다" ≠ "배울 수 있다" → 학습(gradient descent)은 별개 문제

그럼에도 의미 있는 이유:
- 신경망의 잠재적 표현력에 대한 상한을 제시
- RNN 구조의 이론적 정당성
- 후속 연구(Neural Turing Machine 등)에 영감

## 원문 정보
- 논문: [On the Computational Power of Neural Nets](https://www.sciencedirect.com/science/article/pii/S0022000085710136)
- 발표: JCSS, 1995
- 저자: Hava T. Siegelmann, Eduardo D. Sontag
