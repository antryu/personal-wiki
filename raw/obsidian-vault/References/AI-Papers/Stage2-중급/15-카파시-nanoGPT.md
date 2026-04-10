---
title: "카파시 nanoGPT 실습"
stage: 2
order: 15
difficulty: "중급"
prerequisites: ["14-카파시-minGPT"]
---

# nanoGPT — 가장 간단한 GPT 학습 코드

## 한줄 요약
GPT-2를 실제로 학습할 수 있는 최소한의 코드. minGPT의 후속작으로, 실전 학습과 실험에 최적화.

## 왜 중요한가?
minGPT가 "이해"에 초점이었다면, nanoGPT는 "실제로 돌리기"에 초점. 단일 GPU에서 셰익스피어부터, 8-GPU에서 GPT-2 124M 재현까지 가능.

## 프로젝트 구조

```
nanoGPT/
├── model.py         ← GPT 모델 (~300줄)
├── train.py         ← 학습 스크립트
├── sample.py        ← 텍스트 생성
├── config/
│   ├── train_shakespeare_char.py
│   ├── train_gpt2.py
│   └── ...
└── data/
    ├── shakespeare_char/
    └── openwebtext/
```

## 빠른 시작

```bash
# 1. 데이터 준비
python data/shakespeare_char/prepare.py

# 2. 학습 (단일 GPU, ~3분)
python train.py config/train_shakespeare_char.py

# 3. 텍스트 생성
python sample.py --out_dir=out-shakespeare-char
```

## 주요 최적화 (minGPT 대비)

| 기능 | 설명 |
|------|------|
| **Flash Attention** | 메모리 효율적 어텐션 연산 |
| **DDP** | 분산 데이터 병렬 학습 |
| **Mixed Precision** | FP16/BF16으로 속도 2배 |
| **Gradient Accumulation** | 작은 GPU로도 큰 배치 효과 |
| **Compile** | `torch.compile()`로 추가 속도업 |

## 실험 아이디어

1. **셰익스피어 (초급)**: 문자 레벨, 단일 GPU, 3분
2. **한국어 소설**: 한국어 텍스트 데이터 준비 후 학습
3. **GPT-2 재현 (고급)**: OpenWebText, 8×A100, 수일
4. **하이퍼파라미터 실험**:
   - `n_layer`, `n_head`, `n_embd` 변경
   - `learning_rate`, `batch_size` 튜닝
   - `dropout` 효과 관찰

## GPT-2 재현 성능

```
GPT-2 124M (OpenAI):  val loss ~3.11
nanoGPT 재현:          val loss ~3.09 ✅

→ 수백 줄 코드로 OpenAI의 결과를 재현!
```

## 링크
- GitHub: [karpathy/nanoGPT](https://github.com/karpathy/nanoGPT)
- 관련: [[14-카파시-minGPT]] | Stage3의 [[14-카파시-nanochat]]
