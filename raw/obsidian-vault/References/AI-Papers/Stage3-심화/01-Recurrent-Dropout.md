---
title: "Recurrent Dropout without Memory Loss"
stage: 3
order: 1
difficulty: "심화"
prerequisites: ["Stage2-중급/03-LSTM-Effectiveness"]
---

# Recurrent Dropout without Memory Loss

## 한줄 요약
LSTM에서 기억 셀을 보존하면서 드롭아웃을 적용하는 방법을 제안. 과적합을 줄이면서 장기 의존성 유지.

## 핵심 아이디어

기존 방식의 문제:
```python
# 나이브 드롭아웃 (기억까지 날아감!)
c_t = f_t * c_{t-1} + i_t * dropout(g_t)  # ← 여기서 dropout
h_t = o_t * tanh(dropout(c_t))            # ← 여기서도?! 기억 소실!
```

제안 방식:
```python
# 기억 셀 보호 드롭아웃
c_t = f_t * c_{t-1} + i_t * dropout(g_t)  # 입력에만 드롭아웃
h_t = o_t * tanh(c_t)                     # 기억 셀은 건드리지 않음!
```

### 핵심 원리
- 드롭아웃을 기억 셀(c_t)이 아닌 **셀로 들어가는 입력(g_t)**에만 적용
- 기억 셀의 시간적 연속성 보존
- **같은 드롭아웃 마스크**를 모든 타임스텝에서 사용 (per-step이 아닌 per-sequence)

## 수식

$$\tilde{g}_t = d \odot g_t \quad \text{where } d \sim \text{Bernoulli}(1-p)$$
$$c_t = f_t \odot c_{t-1} + i_t \odot \tilde{g}_t$$
$$h_t = o_t \odot \tanh(c_t)$$

마스크 $d$는 시퀀스 전체에서 고정.

## 실험 결과

| 방법 | Penn Treebank PPL | 개선 |
|------|-------------------|------|
| LSTM (no dropout) | 82.2 | baseline |
| Naive dropout | 79.7 | -3.0% |
| **Proposed** | **75.3** | **-8.4%** |

## 다른 드롭아웃 방법들과 비교
- **Variational Dropout** (Gal & Ghahramani): 베이지안 관점, 유사한 결론
- **Zoneout** (Krueger et al.): 히든 스테이트를 이전 값으로 유지
- **DropConnect**: 가중치에 드롭아웃

## 원문 정보
- 논문: [Recurrent Dropout without Memory Loss](https://arxiv.org/abs/1603.05118)
- 발표: COLING, 2016
- 저자: Stanislau Semeniuta, Aliaksei Severyn, Erhardt Barth
