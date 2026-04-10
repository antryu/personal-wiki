---
title: "Random Search for Hyper-Parameter Optimization"
stage: 3
order: 6
difficulty: "심화"
prerequisites: ["Stage2-중급/09-Scaling-Laws"]
---

# Random Search for Hyper-Parameter Optimization

## 한줄 요약
그리드 서치보다 랜덤 서치가 하이퍼파라미터 최적화에 더 효율적이라는 것을 이론과 실험으로 증명.

## 핵심 논증

### 그리드 vs 랜덤의 직관

```
2D 하이퍼파라미터 공간에서 9회 탐색:

그리드 서치:          랜덤 서치:
● ● ●                ●   ●  ●
● ● ●                  ●    ●
● ● ●                ●  ●  ●  ●

x축만 중요한 경우:
그리드: x값 3개만 탐색  랜덤: x값 9개 탐색!
```

### 저유효차원성 (Low Effective Dimensionality)
실제로 성능에 영향을 주는 하이퍼파라미터는 일부만. 나머지는 "중요하지 않은" 차원.

그리드 서치는 모든 차원에 균등하게 예산을 분배하지만, 랜덤 서치는 중요한 차원에서 자연스럽게 더 다양한 값을 탐색.

### 이론적 분석
$n$개 포인트, $d$차원, 유효 차원 $d_e < d$일 때:
- 그리드: 유효 차원에서 $n^{1/d}$개 고유값 탐색
- 랜덤: 유효 차원에서 $n$개 고유값 탐색
- → 랜덤이 $n^{1-1/d}$배 더 효율적!

## 실험 결과

| 데이터셋 | 그리드 서치 (시행 수) | 랜덤 서치 (시행 수) | 성능 |
|---------|---------------------|-------------------|------|
| MNIST | 2133 | **15** | 동등 |
| CIFAR-10 | 2133 | **45** | 동등 |
| Toronto Face | 2133 | **30** | 동등 |

→ 수십 배 적은 시행으로 동등한 성능!

## 실용적 가이드라인
1. 랜덤 서치를 기본으로 사용
2. 로그 스케일로 범위 설정 (학습률: 10⁻⁵ ~ 10⁻¹)
3. 초기 넓은 범위 → 좋은 영역 발견 → 좁혀서 재탐색
4. 베이지안 최적화와 결합 가능 (SMAC, TPE 등)

## 원문 정보
- 논문: [Random Search for Hyper-Parameter Optimization](https://jmlr.org/papers/v13/bergstra12a.html)
- 발표: JMLR, 2012
- 저자: James Bergstra, Yoshua Bengio
