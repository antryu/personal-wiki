---
title: "Large Batch Training"
stage: 3
order: 7
difficulty: "심화"
prerequisites: ["06-Hyperparameter"]
---

# Don't Decay the Learning Rate, Increase the Batch Size

## 한줄 요약
학습률 감소와 배치 크기 증가가 수학적으로 동등하다는 것을 보이고, 배치 크기를 키워서 학습 시간을 단축.

## 핵심 이론

### SGD 노이즈 스케일
SGD 업데이트의 노이즈 스케일:

$$g = \frac{\epsilon N}{B(1 - m)}$$

여기서 $\epsilon$ = 학습률, $N$ = 데이터 수, $B$ = 배치 크기, $m$ = 모멘텀

**학습률을 줄이는 것과 배치를 키우는 것은 동일한 $g$를 만듦!**

### 동등성

| 스케줄 | 학습률 $\epsilon$ | 배치 $B$ | 노이즈 $g$ |
|--------|------------------|---------|-----------|
| 기존 | 0.1 → 0.01 | 256 | 감소 |
| 제안 | 0.1 (고정) | 256 → 2560 | 감소 (동일!) |

## 이점

```
기존 (학습률 감소):
  Epoch 1-60:  B=256, lr=0.1   → 60×N/256 스텝
  Epoch 61-90: B=256, lr=0.01  → 30×N/256 스텝
  총 스텝 ≈ 90N/256

제안 (배치 증가):
  Epoch 1-60:   B=256,  lr=0.1  → 60×N/256 스텝
  Epoch 61-90:  B=2560, lr=0.1  → 30×N/2560 스텝  ← 10배 빠름!
  파라미터 업데이트 수 ≈ 5배 감소
```

→ 큰 배치는 GPU 병렬화에 유리 → 벽시계 시간 단축!

## 실험 결과
- ResNet-50 on ImageNet: 동일 성능 유지하면서 학습 시간 단축
- SimCLR on CIFAR-10: 배치 증가 스케줄이 학습률 감소 스케줄과 동등

## 주의사항
- 배치가 너무 크면 일반화 성능 저하 가능 (sharp minima)
- LARS, LAMB 같은 layer-wise 학습률 조절 필요할 수 있음
- 워밍업 스케줄과 결합 권장

## 원문 정보
- 논문: [Don't Decay the Learning Rate, Increase the Batch Size](https://arxiv.org/abs/1711.00489)
- 발표: ICLR, 2018
- 저자: Samuel L. Smith et al.
