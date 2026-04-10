---
title: "Sequence to Sequence"
stage: 2
order: 4
difficulty: "중급"
prerequisites: ["Stage1-입문/03-RNN-기초"]
---

# Sequence to Sequence (Seq2Seq)

## 한줄 요약
한 문장을 넣으면 다른 문장이 나오는 "인코더-디코더" 구조를 만들어서, 기계번역의 새 시대를 열었어.

## 왜 중요한가?
통역사의 과정을 신경망으로 구현한 것. 영어를 듣고(인코더), 머릿속으로 이해한 다음, 한국어로 말해(디코더). 입력 문장을 하나의 벡터로 압축한 뒤, 그 벡터에서 출력 문장을 생성해. 번역, 요약, 챗봇 등 "문장→문장" 작업의 기본 틀이 됐어.

## 구조

```
인코더 (LSTM):
  "I love you" → [I] → [love] → [you] → context vector [0.3, 0.8, ...]

디코더 (LSTM):
  context vector → "나는" → "너를" → "사랑해" → <EOS>
```

### 핵심 기법
1. **입력 문장 역순 처리**: "I love you" → "you love I"로 넣으면 성능 향상. 첫 단어끼리 가까워지기 때문.
2. **깊은 LSTM 사용**: 4층 LSTM 인코더 + 4층 LSTM 디코더
3. **빔 서치 (Beam Search)**: 디코딩 시 상위 k개 후보를 유지하며 최적 문장 탐색

## 한계
- 고정 길이 벡터 병목: 아무리 긴 문장도 하나의 벡터로 압축 → 정보 손실
- → 이 문제를 **어텐션 메커니즘**이 해결 (다음 장!)

## 성능
- WMT'14 영-불 번역에서 BLEU 34.8 달성
- 기존 통계적 기계번역과 경쟁 가능한 수준

## 원문 정보
- 논문: [Sequence to Sequence Learning with Neural Networks](https://arxiv.org/abs/1409.3215)
- 발표: NeurIPS, 2014
- 저자: Ilya Sutskever, Oriol Vinyals, Quoc V. Le
