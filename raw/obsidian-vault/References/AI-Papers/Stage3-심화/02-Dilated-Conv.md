---
title: "Dilated Convolutions"
stage: 3
order: 2
difficulty: "심화"
prerequisites: ["Stage2-중급/01-VGG"]
---

# Dilated Convolutions — Multi-Scale Context Aggregation

## 한줄 요약
필터 사이에 간격(dilation)을 두어서, 해상도 손실 없이 수용 영역을 기하급수적으로 확장.

## 핵심 개념

### Dilated Convolution 정의
```
일반 Conv (dilation=1):     Dilated Conv (dilation=2):
■ ■ ■                       ■ ○ ■ ○ ■
■ ■ ■                       ○ ○ ○ ○ ○
■ ■ ■                       ■ ○ ■ ○ ■
                             ○ ○ ○ ○ ○
수용영역: 3×3               ■ ○ ■ ○ ■
                             수용영역: 5×5 (파라미터는 3×3!)
```

### 수용 영역 확장

```
Layer 1 (d=1):  수용영역 = 3×3
Layer 2 (d=2):  수용영역 = 7×7
Layer 3 (d=4):  수용영역 = 15×15
Layer 4 (d=8):  수용영역 = 31×31

→ O(2^n)으로 기하급수적 확장! 파라미터는 선형 증가
```

### 수식

$$(F *_l k)(\mathbf{p}) = \sum_{\mathbf{s}+l\mathbf{t}=\mathbf{p}} F(\mathbf{s}) k(\mathbf{t})$$

여기서 $l$은 dilation factor.

## Pooling 기반 접근 vs Dilated Conv

```
기존 (풀링):   고해상도 → 풀링 → 저해상도 → 업샘플링 → 고해상도
               문제: 풀링에서 정보 손실!

Dilated:      고해상도 → dilated conv → 고해상도 유지!
              이점: 해상도 보존 + 넓은 수용영역
```

## 적용 분야
- **시맨틱 세그멘테이션**: 픽셀 단위 분류에서 해상도 보존이 핵심
- **음성 합성**: WaveNet에서 dilated causal conv 사용
- **시계열 예측**: TCN (Temporal Convolutional Networks)

## 구현

```python
# PyTorch
nn.Conv2d(in_ch, out_ch, kernel_size=3, dilation=2, padding=2)
# padding = dilation * (kernel_size - 1) / 2 로 same padding
```

## 원문 정보
- 논문: [Multi-Scale Context Aggregation by Dilated Convolutions](https://arxiv.org/abs/1511.07122)
- 발표: ICLR, 2016
- 저자: Fisher Yu, Vladlen Koltun
