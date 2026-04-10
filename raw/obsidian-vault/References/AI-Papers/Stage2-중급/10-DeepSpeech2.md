---
title: "Deep Speech 2"
stage: 2
order: 10
difficulty: "중급"
prerequisites: ["Stage1-입문/03-RNN-기초"]
---

# Deep Speech 2

## 한줄 요약
영어와 중국어 음성을 텍스트로 바꾸는 end-to-end 시스템. 조용한 환경에서 사람 수준 달성.

## 왜 중요한가?
기존 음성인식은 발음 사전, 언어 모델 등 여러 부품을 조합해야 했어. Deep Speech 2는 소리 → 글자를 하나의 신경망으로 처리. 대규모 데이터 + GPU 병렬화로 실용적 성능 달성.

## 구조

```
음성 스펙트로그램
    ↓
[배치 정규화된 Conv 층 × 2~3]
    ↓
[양방향 RNN (GRU) × 7]
    ↓
[FC 층]
    ↓
[CTC 손실 / 디코더]
    ↓
텍스트 출력
```

### 핵심 기법
1. **CTC (Connectionist Temporal Classification)**: 입출력 길이가 달라도 학습 가능
2. **배치 정규화 in RNN**: 시퀀스 방향이 아닌 feature 방향으로 적용
3. **SortaGrad**: 초기에 짧은 발화부터 학습 → 안정적 수렴
4. **데이터 증강**: 노이즈 추가, 속도 변환 등

## 성능
- 영어: 조용한 환경에서 WER 5.33% (사람 수준)
- 중국어: 같은 구조로 만다린 음성인식도 가능
- 학습 시간: 수천 시간 데이터를 며칠 만에 처리

## 원문 정보
- 논문: [Deep Speech 2](https://arxiv.org/abs/1512.02595)
- 발표: ICML, 2016
- 저자: Dario Amodei et al. (Baidu Research)
