---
title: "CapsuleNet"
stage: 3
order: 11
difficulty: "심화"
prerequisites: ["Stage2-중급/02-ResNet"]
---

# CapsuleNet — Dynamic Routing Between Capsules

## 한줄 요약
스칼라 대신 벡터로 특징을 표현하는 "캡슐"과 동적 라우팅으로, 부분-전체 관계를 포착하는 네트워크.

## CNN의 근본 문제

```
CNN이 "얼굴"로 인식하는 것들:
  😊 = 눈 + 코 + 입 (정상 배치)     ✅ 얼굴
  🤪 = 입 + 눈 + 코 (비정상 배치)   ✅ 얼굴?! ← 문제!

맥스 풀링이 위치 정보를 버리기 때문!
```

## 캡슐의 개념

```
기존 CNN 뉴런:  스칼라 출력 (0.9 = "눈이 있다")
캡슐:          벡터 출력 ([0.3, 0.8, 0.1, 0.9])
               ↑     ↑     ↑     ↑
              크기  방향  위치  존재확률

벡터의 길이 = 존재 확률
벡터의 방향 = 속성 (위치, 크기, 방향, 색 등)
```

### Squash 함수 (비선형 활성화)
$$\mathbf{v}_j = \frac{\|\mathbf{s}_j\|^2}{1 + \|\mathbf{s}_j\|^2} \frac{\mathbf{s}_j}{\|\mathbf{s}_j\|}$$

→ 벡터의 방향은 보존하면서 길이를 [0, 1) 범위로 압축

### 동적 라우팅 알고리즘
```
for r iterations:
  1. c_ij = softmax(b_ij)           # 라우팅 계수
  2. s_j = Σ_i c_ij * û_j|i        # 가중합
  3. v_j = squash(s_j)             # 활성화
  4. b_ij += û_j|i · v_j           # 합의(agreement) 업데이트
```

하위 캡슐의 예측($\hat{\mathbf{u}}_{j|i} = \mathbf{W}_{ij}\mathbf{u}_i$)이 상위 캡슐의 출력과 일치하면 라우팅 강화.

## 구조 (MNIST)

```
입력 (28×28)
→ Conv1 (256 channels, 9×9)
→ PrimaryCaps (32 channels × 8D capsules)
→ DigitCaps (10 × 16D capsules) + Dynamic Routing
→ 길이 = 분류 확률
→ Reconstruction Decoder (FC 네트워크)
```

## 한계
- 동적 라우팅의 계산 비용이 높음
- 복잡한 이미지(ImageNet)에서 CNN에 미치지 못함
- 학습이 불안정할 수 있음
- 스케일링이 어려움

## 원문 정보
- 논문: [Dynamic Routing Between Capsules](https://arxiv.org/abs/1710.09829)
- 발표: NeurIPS, 2017
- 저자: Sara Sabour, Nicholas Fross, Geoffrey Hinton
