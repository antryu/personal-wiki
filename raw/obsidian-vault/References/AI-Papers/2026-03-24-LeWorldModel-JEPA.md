# LeWorldModel — Stable End-to-End JEPA for World Models

**Date:** 2026-03-24
**Author:** Lucas Maes (@lucasmaes_, Mila Quebec PhD)
**Paper:** https://le-wm.github.io
**Tweet:** https://x.com/lucasmaes_/status/2036080584569618741
**Tags:** #world-model #JEPA #LeCun #physical-ai #latent-space

## Core Contribution
- JEPA (Joint Embedding Predictive Architecture)를 **트릭 없이** end-to-end 안정 학습
- 기존 JEPA 문제: representation collapse, 불안정한 학습 → 온갖 heuristic 필요
- LeWorldModel: 이 문제 해결, clean training

## Specs
- **15M parameters** (극소형)
- **1 GPU** (M4에서도 가능한 수준)
- **Planning < 1 second**
- 픽셀에서 직접 학습 (no hand-crafted features)

## Why It Matters
- Yann LeCun의 AMI Labs ($1.03B)가 JEPA 기반
- World Model의 핵심 난제 (학습 안정성) 해결
- 소형 모델로 작동 → 개인 연구자/소규모 팀도 접근 가능
- Not Boring "World Models" 아티클의 실제 구현체

## Connection to _y
- 트레이딩 World Model: 시장 상태를 latent space에서 예측하는 JEPA 방식 적용 가능
- state → latent embedding → action → predicted next latent state
- 15M params면 M4 로컬에서 실험 가능

## Related
- [[2026-03-22 Not Boring World Models]]
- [[2026-03-23 Atoms Travis Kalanick]]
- AMI Labs (LeCun) $1.03B
- General Intuition $133.7M
