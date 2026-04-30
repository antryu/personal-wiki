# GVP-WM: Grounding Video Plans with World Models

- **Date**: 2026-03-24
- **Venue**: ICLR 2026 World Models Workshop
- **Advisors**: Amir Bar, Alessandra Russo
- **Project**: https://chziakas.github.io/gvpwm/

## Core Idea
- I2V (Image-to-Video) 모델이 시각적 계획을 만들지만 물리 법칙 위반 가능
- World Model의 latent space에서 trajectory optimization으로 실현 가능한 경로로 보정
- Latent states + actions 동시 최적화, video plan과의 semantic alignment 유지

## Key Contributions
- 비디오 계획의 물리 위반 (물체 텔레포트, 모션 블러) → 실행 가능한 궤적으로 변환
- Latent-space trajectory optimization 프레임워크

## _y 적용 가능성
- 트레이딩: 전략 과최적화를 "현실적 범위"로 제약하는 개념 차용 가능
- LeWorldModel (JEPA) latent space → 여기서 계획 보정하는 아이디어와 연결

## Tags
#WorldModels #VideoPlanning #LatentSpace #ICLR2026 #PhysicalAI
