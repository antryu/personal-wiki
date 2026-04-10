---
title: "Attention for Neural Machine Translation"
stage: 2
order: 5
difficulty: "중급"
prerequisites: ["04-Seq2Seq"]
---

# Attention for Neural Machine Translation

## 한줄 요약
번역할 때 원문의 어떤 부분을 봐야 하는지 "집중"하는 어텐션 메커니즘을 처음 제안했어.

## 왜 중요한가?
Seq2Seq의 고정 길이 벡터 병목을 해결한 핵심 논문. 매 디코딩 스텝마다 인코더의 모든 히든 스테이트를 참조하면서, 관련 있는 부분에 가중치를 더 줘. 이 "어텐션"이 나중에 트랜스포머의 핵심이 됨.

## 메커니즘

```
인코더:  h₁  h₂  h₃  h₄  h₅   (각 단어의 히든 스테이트)
          ↑   ↑   ↑   ↑   ↑
          │  α₂ α₃  │   │     (어텐션 가중치)
          │  0.4 0.5 │   │
디코더:       sₜ ─────────┘
              ↓
         context = Σ αᵢhᵢ   (가중합)
              ↓
         다음 단어 예측
```

### 어텐션 계산
1. **정렬 점수 (alignment score)**: `e(sₜ, hᵢ) = vᵀ tanh(Wsₜ + Uhᵢ)`
2. **정규화**: `αᵢ = softmax(eᵢ)`  
3. **문맥 벡터**: `cₜ = Σ αᵢhᵢ`

### 정렬 시각화
어텐션 가중치를 행렬로 시각화하면, 입력-출력 단어 간 대응 관계가 보여:
```
       I   love  you
나는   ■    ○    ○
너를   ○    ○    ■
사랑해 ○    ■    ○
```

## 의의
- 고정 벡터 병목 해결 → 긴 문장 번역 성능 대폭 향상
- **어텐션 = 현대 AI의 핵심** (트랜스포머, GPT 모두 여기서 출발)
- 해석 가능성: 모델이 어디를 보는지 시각화 가능

## 원문 정보
- 논문: [Neural Machine Translation by Jointly Learning to Align and Translate](https://arxiv.org/abs/1409.0473)
- 발표: ICLR, 2015
- 저자: Dzmitry Bahdanau, Kyunghyun Cho, Yoshua Bengio
