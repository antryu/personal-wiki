---
title: "LSTM: A Search Space Odyssey"
stage: 2
order: 3
difficulty: "중급"
prerequisites: ["Stage1-입문/03-RNN-기초"]
---

# LSTM: A Search Space Odyssey

## 한줄 요약
LSTM의 여러 변형들을 실험해봤더니, 기본 LSTM이 이미 충분히 잘 작동한다는 걸 알게 됐어.

## 왜 중요한가?
요리 레시피를 바꿔가며 실험해본 적 있어? "소금을 더 넣으면?", "버터 대신 기름은?" 이 논문은 LSTM 레시피를 8가지 이상 변형해서 실험한 거야. 결론은 기본 레시피가 이미 꽤 맛있다는 것! 망각 게이트와 출력 게이트가 가장 중요하고, 나머지를 바꿔도 큰 차이가 없었어.

## 핵심 개념

### 1. 변형 실험 (Variant Analysis)
LSTM의 부품들을 하나씩 바꿔가며 성능을 비교. 총 8개 변형:
- 피홀 연결 추가/제거
- 결합 입력-망각 게이트 (CIFG)
- 출력 게이트 제거
- GRU (Gated Recurrent Unit) 등

### 2. 주요 발견
- **망각 게이트**가 가장 중요 — 제거하면 성능 급락
- **출력 게이트**가 두 번째로 중요
- **피홀 연결**은 거의 영향 없음
- **GRU**는 LSTM과 비슷한 성능 (더 단순하면서!)

### 3. 하이퍼파라미터 민감도
학습률(learning rate)이 LSTM 구조보다 성능에 더 큰 영향을 줬어. 구조를 바꾸는 것보다 하이퍼파라미터 튜닝이 더 중요하다는 의미.

## 실험 설계
- 5,400회 이상의 실험 수행
- 3가지 태스크: TIMIT 음성인식, IAM 필기 인식, JSB 음악 모델링
- 랜덤 서치로 하이퍼파라미터 탐색

## 원문 정보
- 논문: [LSTM: A Search Space Odyssey](https://arxiv.org/abs/1503.04069)
- 발표: IEEE Transactions on Neural Networks, 2015
- 저자: Klaus Greff et al.
