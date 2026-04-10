---
title: "FCN — Fully Convolutional Networks"
stage: 3
order: 3
difficulty: "심화"
prerequisites: ["Stage2-중급/01-VGG"]
---

# FCN — Fully Convolutional Networks for Semantic Segmentation

## 한줄 요약
분류 CNN의 FC 층을 1×1 Conv로 대체해서, 임의 크기 입력에 대해 픽셀 단위 분류를 가능하게 한 최초의 end-to-end 세그멘테이션 모델.

## 핵심 아이디어

### FC → Conv 변환
```
기존 분류 CNN:
  [Conv층들] → Flatten → FC(4096) → FC(4096) → FC(1000)
  → 고정 크기 입력만 가능, 출력은 클래스 하나

FCN:
  [Conv층들] → Conv1×1(4096) → Conv1×1(4096) → Conv1×1(21)
  → 임의 크기 입력 가능, 출력은 히트맵!
```

### 업샘플링 전략

```
FCN-32s:  Pool5 → 32× 업샘플링                   (거침)
FCN-16s:  Pool5(2×) + Pool4 → 16× 업샘플링        (중간)
FCN-8s:   Pool5(4×) + Pool4(2×) + Pool3 → 8× 업  (세밀!)
```

스킵 연결로 얕은 층의 세밀한 정보와 깊은 층의 의미 정보를 합침:

```
         Pool3 (1/8)  ──────────────────┐
         Pool4 (1/16) ──────────┐       │
         Pool5 (1/32) ───┐      │       │
                         ↓      ↓       ↓
                       2×up + concat + 8×up → 출력
```

## 학습

- VGG-16 사전학습 가중치로 초기화
- Deconvolution (transposed conv)으로 업샘플링
- 픽셀별 cross-entropy 손실

## 성능 (PASCAL VOC 2012)

| 모델 | mean IOU |
|------|----------|
| FCN-32s | 59.4% |
| FCN-16s | 62.4% |
| FCN-8s | **62.7%** |

## 영향
- 세그멘테이션의 딥러닝화를 촉발
- U-Net, DeepLab, PSPNet 등 후속 연구의 기반
- "전이 학습 + 미세 조정" 패러다임의 표준화

## 원문 정보
- 논문: [Fully Convolutional Networks for Semantic Segmentation](https://arxiv.org/abs/1411.4038)
- 발표: CVPR, 2015
- 저자: Jonathan Long, Evan Shelhamer, Trevor Darrell
