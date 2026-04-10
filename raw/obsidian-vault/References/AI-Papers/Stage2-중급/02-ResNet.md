---
title: "ResNet"
stage: 2
order: 2
difficulty: "중급"
prerequisites: ["01-VGG"]
---

# ResNet — Deep Residual Learning

## 한줄 요약
층을 뛰어넘는 "지름길(skip connection)"을 만들어서, 100층 넘는 아주 깊은 신경망도 학습할 수 있게 했어.

## 왜 중요한가?
VGG에서 "깊이가 곧 성능"이라고 했는데, 실제로 20층 넘게 쌓으면 오히려 성능이 떨어졌어. 기울기가 전파되면서 사라지는 문제(vanishing gradient) 때문이야. ResNet은 이 문제를 잔차 연결이라는 간단한 아이디어로 해결했어.

## 핵심 아이디어

### 잔차 학습 (Residual Learning)

```
기존 방식: 
  입력 x → [층1] → [층2] → H(x) 출력
  목표: H(x)를 직접 학습

ResNet 방식:
  입력 x → [층1] → [층2] → F(x) + x 출력
                              ↑
                              │ (skip connection)
                    x ────────┘
  목표: F(x) = H(x) - x (잔차만 학습!)
```

> 핵심 인사이트: "정답 자체"보다 "정답과 입력의 **차이(잔차)**"를 배우는 게 쉬워!

### Bottleneck 구조 (50층 이상)

```
입력 (256채널)
 ↓ 1×1 Conv (64채널로 축소)
 ↓ 3×3 Conv (64채널)
 ↓ 1×1 Conv (256채널로 복원)
 + 입력 (skip connection)
 ↓ 출력

→ 계산량을 줄이면서 더 깊게 쌓을 수 있어!
```

## 성능 비교

| 모델 | 층 수 | Top-5 Error | 파라미터 |
|------|------|-------------|---------|
| VGG-19 | 19 | 7.3% | 144M |
| ResNet-34 | 34 | 5.7% | 21M |
| ResNet-152 | 152 | 4.5% | 60M |

→ 더 깊으면서도 파라미터는 적고 성능은 좋아!

## 영향
- ImageNet 2015 우승
- 이후 거의 모든 CNN 구조가 잔차 연결을 사용
- 트랜스포머에서도 잔차 연결은 필수 (GPT 포함!)

## 원문 정보
- 논문: [Deep Residual Learning for Image Recognition](https://arxiv.org/abs/1512.03385)
- 발표: CVPR, 2016
- 저자: Kaiming He, Xiangyu Zhang, Shaoqing Ren, Jian Sun
