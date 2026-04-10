---
title: "카파시 minGPT 코드 분석"
stage: 2
order: 14
difficulty: "중급"
prerequisites: ["Stage1-입문/14-카파시-GPT-from-scratch-영상가이드"]
---

# minGPT — 카파시의 미니멀 GPT 구현

## 한줄 요약
GPT 아키텍처를 약 300줄의 깔끔한 PyTorch 코드로 구현한 교육용 프로젝트.

## 왜 중요한가?
Andrej Karpathy가 만든 minGPT는 GPT-2 구조를 최소한의 코드로 재현해서, 실제 GPT가 어떻게 동작하는지 코드 레벨에서 이해할 수 있게 해줘.

## 프로젝트 구조

```
minGPT/
├── mingpt/
│   ├── model.py      ← GPT 모델 정의 (핵심!)
│   ├── trainer.py     ← 학습 루프
│   └── utils.py       ← 유틸리티
├── projects/
│   ├── adder/         ← 덧셈 학습 데모
│   └── chargpt/       ← 텍스트 생성 데모
└── README.md
```

## model.py 핵심 구조

```python
class GPT(nn.Module):
    def __init__(self, config):
        # 토큰 임베딩 + 위치 임베딩
        self.tok_emb = nn.Embedding(vocab_size, n_embd)
        self.pos_emb = nn.Parameter(torch.zeros(1, block_size, n_embd))
        self.drop = nn.Dropout(embd_pdrop)
        # 트랜스포머 블록 × N
        self.blocks = nn.Sequential(*[Block(config) for _ in range(n_layer)])
        # 출력 헤드
        self.ln_f = nn.LayerNorm(n_embd)
        self.head = nn.Linear(n_embd, vocab_size, bias=False)
```

### Block 구성
```python
class Block(nn.Module):
    # LayerNorm → MultiHeadAttention → 잔차연결
    # LayerNorm → FFN → 잔차연결
```

### CausalSelfAttention
```python
class CausalSelfAttention(nn.Module):
    # Q, K, V 프로젝션
    # 어텐션 점수 계산 + 인과적 마스킹
    # 멀티헤드 처리
```

## 실습 예제

### 1. 덧셈 학습 (adder)
```
입력: "123+456="
출력: "579"
→ GPT가 순수하게 다음 토큰 예측으로 덧셈을 배움!
```

### 2. 텍스트 생성 (chargpt)
```
셰익스피어 텍스트로 학습 → 셰익스피어 스타일 텍스트 생성
```

## minGPT vs nanoGPT
| | minGPT | nanoGPT |
|---|--------|---------|
| 목적 | 교육용 | 학습+실험용 |
| 코드 크기 | ~300줄 | ~600줄 |
| 분산 학습 | ❌ | ✅ (DDP) |
| 성능 최적화 | 최소 | Flash Attention 등 |

## 링크
- GitHub: [karpathy/minGPT](https://github.com/karpathy/minGPT)
- 다음: [[15-카파시-nanoGPT]] (실전 학습용)
