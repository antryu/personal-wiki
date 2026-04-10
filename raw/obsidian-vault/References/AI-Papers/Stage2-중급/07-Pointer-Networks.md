---
title: "Pointer Networks"
stage: 2
order: 7
difficulty: "중급"
prerequisites: ["04-Seq2Seq", "05-Attention-NMT"]
---

# Pointer Networks

## 한줄 요약
출력이 입력의 일부를 "가리키는" 새로운 방식으로, 출력 크기가 입력에 따라 달라지는 문제를 해결했어.

## 왜 중요한가?
기존 Seq2Seq는 고정된 어휘에서 출력을 선택하는데, 볼록 껍질(convex hull), TSP 같은 문제는 답이 입력의 부분집합이야. 포인터 네트워크는 어텐션 메커니즘을 변형해서, 입력 위치를 직접 "가리켜" 출력함.

## 메커니즘

```
기존 Seq2Seq:   어텐션 → 고정 어휘에서 선택 (softmax over vocabulary)
Pointer Net:    어텐션 → 입력 위치에서 선택 (softmax over inputs)

어텐션 점수 자체가 출력 확률이 됨!
  p(yₜ | y₁...yₜ₋₁, x) = softmax(eₜ)
  eₜᵢ = vᵀ tanh(W₁hᵢ + W₂sₜ)
```

## 적용 예시
1. **볼록 껍질**: 점 집합에서 경계 점을 순서대로 가리키기
2. **TSP**: 도시 순서를 가리키기
3. **텍스트 요약**: 원문에서 중요한 문장을 가리키기 (추출 요약)

## 의의
- 가변 크기 출력 문제 해결
- 어텐션을 "출력 메커니즘"으로 사용한 최초 사례
- 이후 CopyNet, Get To The Point 등 포인터 기반 모델에 영향

## 원문 정보
- 논문: [Pointer Networks](https://arxiv.org/abs/1506.03134)
- 발표: NeurIPS, 2015
- 저자: Oriol Vinyals, Meire Fortunato, Navdeep Jaitly
