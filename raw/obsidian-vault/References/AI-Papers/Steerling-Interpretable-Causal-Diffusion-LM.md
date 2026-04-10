# Steerling: Interpretable Causal Diffusion Language Models

- **Source:** GuideLabs
- **GitHub:** https://github.com/guidelabs/steerling
- **Date:** 2026-02
- **Tags:** #interpretability #diffusion-lm #concept-bottleneck #steering #attribution

## 핵심 아이디어
기존 LLM의 post-hoc interpretability(SAE 등) 대신, **설계 단계부터 해석 가능성을 아키텍처에 내장**.
트랜스포머와 LM head 사이에 concept bottleneck을 삽입하여 모든 예측이 human-understandable concept을 통과하도록 강제.

## 아키텍처: Concept Module

```
hidden state h
  → f(h): known concept activation (33K개, sigmoid)
  → g(h): unknown concept activation (101K개)
  → k̂ = Σ k_i · K_i  (known embeddings)
  → û = Σ u_j · U_j  (unknown embeddings)
  → h̄ = k̂ + û
  → LM head(h̄) → logits
```

- h → logits 직접 경로 **차단**
- 모든 예측이 concept을 경유해야만 함
- Concept module은 AR / Diffusion 모두 적용 가능 (architecture agnostic)

## 학습: 4개 Loss

| Loss | 역할 |
|------|------|
| L_token | 일반 LM loss (masked/next-token), h̄ 기반 |
| L_concept | chunk-level concept 라벨 매칭 (ATLAS 자동 라벨링) |
| L_indep | known/unknown 간 cross-covariance 최소화 (중복 방지) |
| L_rec | unknown head가 h - known_embedding 잔차 복원 |

- Concept 라벨은 chunk-level, positive-only (없으면 "unknown"이지 "negative" 아님)
- Token-level annotation 불필요

## Causal Diffusion Language Model (CDLM)

### 기존 접근 비교

| 방식 | Attention | 생성 단위 | 학습 비용 | Scaling exponent |
|------|-----------|-----------|-----------|-----------------|
| AR | causal | 1 token | 기준 | -0.074 |
| Full Diffusion | full bidirectional | multi-token | 기준 | -0.038 (나쁨) |
| Block Diffusion | block-causal + clean half | multi-token | **2x** | - |
| **Causal Diffusion** | **block-causal only** | **multi-token** | **1x** | **-0.072 (AR급)** |

### Block-Causal Attention
- 64토큰 블록 내: **bidirectional** (full attention)
- 블록 간: **causal** (이전 블록만 참조)
- Block Diffusion의 clean half 제거 → 학습 비용 절반
- AR급 스케일링 달성

### 왜 Diffusion인가?
- Concept은 multi-token에 걸쳐 표현됨 (e.g., 공손함, 사과, 풍자)
- AR은 single-token 결정 → concept-level 제어 어려움
- Diffusion은 매 step에서 multi-token 동시 업데이트 → concept 단위 개입에 자연스러움

## Attribution: 3단계 추적 체인

### 1. Concept → Token (정확한 선형 분해)
```
C(c_i, y_j) = w_i · (v_i^T · w_{y_j})
```
- logit이 concept activation의 선형 합 → **근사 아닌 정확한 기여도**

### 2. Input Token → Output Token
- Integrated Gradients, [MASK]를 baseline으로 사용
- Diffusion 모델이므로 [MASK]가 자연스러운 "no information" baseline

### 3. Input Token → Concept
- 어떤 입력 토큰이 어떤 concept을 활성화했는지 추적

**완전한 체인:** `입력 토큰 → concept 활성화 → 출력 토큰`

## Steering: 추론 시 직접 제어

```
logit(y_j) = Σ_i w_i · (v_i^T · w_{y_j})
```

- w_i를 추론 시 수정:
  - 특정 concept → 0 clamp: **독성/편향 제거**
  - concept 증폭/감쇄: **스타일/톤 제어**
  - retraining 불필요
- Prompt engineering/RLHF와 달리 **내부 변수 직접 편집**

## 스케일링 결과

> "Interpretability는 fixed tax처럼 작동한다"

- Concept module 추가해도 scaling law 거의 동일
- 모델 커질수록 overhead 비율 감소
- HellaSwag, ARC, PIQA, OpenBookQA, WinoGrande에서 base vs concept 모델 성능 차이 미미

## 모델 스펙 (Steerling-8B)

| Property | Value |
|----------|-------|
| Parameters | ~8B |
| Architecture | CausalDiffusionLM + Interpretable Concept Head |
| Context Length | 4096 |
| Vocabulary | 100,281 (cl100k_base + specials) |
| Known Concepts | 33,732 |
| Unknown Concepts | 101,196 |
| GQA | 32 heads, 4 KV heads |
| Precision | bfloat16 |

## 평가

### 강점
- 해석 가능성이 **구조적 보장** (post-hoc 아님)
- Attribution이 **정확한 선형 분해** (근사 아님)
- Steering이 retraining 없이 가능
- CDLM의 AR급 스케일링은 diffusion 진영에서 큰 진전
- `pip install steerling`으로 바로 사용 가능

### 약점/의문
- 8B까지만 검증, frontier급(70B+)에서도 fixed tax인지 미검증
- ATLAS 자동 라벨링 품질이 concept 해석력의 상한
- Unknown concept 101K개 → 실질적 블랙박스 잔여분 큼
- Instruction tuning/RLHF 후 concept 구조 유지 여부 불명

## References
- Blog 1: [Scaling Interpretable Models to 8B](https://www.guidelabs.ai/post/scaling-interpretable-models-8b/)
- Blog 2: [Causal Diffusion Language Models](https://www.guidelabs.ai/post/block-causal-diffusion-language-model/)
- ATLAS: [Concept-Annotated Pretraining](https://www.guidelabs.ai/post/atlas-concept-annotated-pretraining-release/)
