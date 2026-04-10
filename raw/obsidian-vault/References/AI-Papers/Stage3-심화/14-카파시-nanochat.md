---
title: "카파시 nanochat"
stage: 3
order: 14
difficulty: "심화"
prerequisites: ["12-전체코드리뷰", "Stage2-중급/15-카파시-nanoGPT"]
---

# nanochat — Karpathy의 최신 LLM 학습 프로젝트

## 한줄 요약
nanoGPT의 진화형. 최신 기법을 반영하여 소규모 GPU에서 ChatGPT 스타일의 대화형 LLM을 학습하는 프로젝트.

## 왜 중요한가?
nanoGPT가 "기초 GPT 이해"에 초점이었다면, nanochat은 **실제 대화형 모델을 만드는 전체 파이프라인**을 다뤄. 사전학습 → SFT → 평가까지.

## 프로젝트 개요

```
nanochat/
├── pretrain/        ← 사전학습 코드
├── finetune/        ← SFT (Supervised Fine-Tuning)
├── eval/            ← 평가 스크립트
├── model.py         ← 모델 정의
└── tokenizer/       ← 토크나이저
```

## nanoGPT 대비 개선점

| 기능 | nanoGPT | nanochat |
|------|---------|----------|
| 모델 구조 | GPT-2 | Llama 스타일 |
| 정규화 | LayerNorm | RMSNorm |
| 위치 인코딩 | 학습형 | RoPE |
| 활성화 | GELU | SwiGLU |
| Attention | MHA | GQA (Grouped Query) |
| KV Cache | ❌ | ✅ |
| 파인튜닝 | ❌ | SFT 지원 |

## 핵심 구조 변경

### RoPE (Rotary Position Embedding)
```python
# 절대 위치 임베딩 대신 상대 위치를 회전으로 인코딩
def apply_rotary_emb(xq, xk, freqs_cis):
    xq_ = torch.view_as_complex(xq.float().reshape(*xq.shape[:-1], -1, 2))
    xk_ = torch.view_as_complex(xk.float().reshape(*xk.shape[:-1], -1, 2))
    xq_out = torch.view_as_real(xq_ * freqs_cis).flatten(3)
    xk_out = torch.view_as_real(xk_ * freqs_cis).flatten(3)
    return xq_out, xk_out
```

### SwiGLU
```python
# GELU 대신 SwiGLU (Llama 스타일)
class MLP(nn.Module):
    def forward(self, x):
        return self.w2(F.silu(self.w1(x)) * self.w3(x))
```

### GQA (Grouped Query Attention)
```
MHA:  Q: 32 heads, K: 32 heads, V: 32 heads  (비쌈)
GQA:  Q: 32 heads, K: 8 heads,  V: 8 heads   (효율적!)
→ KV 캐시 메모리 4배 절약
```

## SFT (Supervised Fine-Tuning)

```
사전학습:  "다음 토큰 예측" (인터넷 텍스트)
    ↓
SFT:      "지시문 → 응답" 형식의 대화 데이터로 미세 조정
    ↓
결과:     대화가 가능한 모델!
```

## 실습 가이드

```bash
# 클론
git clone https://github.com/karpathy/nanochat.git
cd nanochat

# 사전학습 (소규모)
python pretrain/train.py --config small

# SFT
python finetune/sft.py --base_model out/pretrain --data alpaca

# 채팅
python chat.py --model out/sft
```

## 의의
- nanoGPT → nanoGPT (이해) → nanochat (실전) 의 학습 경로 완성
- 최신 LLM 기법을 교육적으로 구현
- 소규모 GPU에서도 대화형 모델 학습 가능

## 링크
- GitHub: [karpathy/nanochat](https://github.com/karpathy/nanochat)
- 이전: [[Stage2-중급/15-카파시-nanoGPT]]
