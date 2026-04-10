---
title: "Vision-Language Models"
stage: 2
order: 11
difficulty: "중급"
prerequisites: ["06-Vision-Transformer", "Stage1-입문/06-트랜스포머란"]
---

# Vision-Language Models

## 한줄 요약
이미지와 텍스트를 동시에 이해할 수 있는 멀티모달 AI. 사진 보고 질문에 답하기가 가능해졌어.

## 왜 중요한가?
사람은 눈으로 보면서 말로 소통하잖아? 멀티모달 모델은 시각과 언어를 통합해서, 이미지에 대한 질문 응답, 이미지 캡셔닝 등을 수행. GPT-4V, Gemini의 근간.

## VisualBERT 구조

```
이미지: 🖼️ → 물체 검출(Faster R-CNN) → 시각 특징 벡터들
텍스트: "뭘 하고 있어?" → 토큰 임베딩

[CLS] [뭘] [하고] [있어] [SEP] [시각₁] [시각₂] [시각₃]
                    ↓
        Transformer Encoder (셀프 어텐션)
        → 이미지와 텍스트 특징이 서로 어텐션!
                    ↓
              답변: "축구를 하고 있어"
```

### 핵심 개념
1. **멀티모달 퓨전**: 이미지와 텍스트를 같은 트랜스포머에 넣어서 상호작용
2. **시각-언어 정렬**: 이미지 영역과 단어가 같은 임베딩 공간에 매핑
3. **VQA (Visual QA)**: "이 사진에 사람 몇 명?" 같은 질문 응답

## 발전 과정
```
VisualBERT (2019) → CLIP (2021) → Flamingo (2022) → GPT-4V (2023) → Gemini (2023)
```

## 원문 정보
- 논문: [VisualBERT](https://arxiv.org/abs/1908.03557)
- 발표: arXiv, 2019
- 저자: Liunian Harold Li et al.
