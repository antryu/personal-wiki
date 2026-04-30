# MM-CondChain: Visually Grounded Deep Compositional Reasoning

- **Paper:** https://arxiv.org/abs/2603.12266v1
- **Project:** https://accio-lab.github.io/MM-CondChain
- **Date:** 2026-03
- **Domain:** Computer Vision, MLLM Benchmarking

## Summary
GUI 워크플로우에서 MLLM의 복합 조건부 추론 벤치마크. 다층 조건 체인(시각적 조건 → 분기 → 최종 결과)을 정확히 따라가는지 측정. 최강 모델도 Path F1 53.33% — 깊이/복잡도 증가 시 급격히 하락.

## Key Concepts
- **Multi-layer reasoning chain**: 각 레이어마다 시각적 조건 검증 필요
- **VPIR (Verifiable Programmatic IR)**: 프로그래밍적 검증 가능한 중간 표현
- **Agentic synthesis pipeline**: Planner→Verifier→Composer 3단계 데이터 생성
- 3개 도메인: 자연 이미지, 차트, GUI 궤적

## _y Holdings 적용
- **적용도: 6/10** (현재 우선순위 낮음)
- Watchy/Guardy GUI 모니터링 시뮬레이션 시 참고
- 에이전트 의사결정 품질 평가 프레임워크로 활용 가능
- 현재 _y 에이전트는 텍스트 기반 → GUI 조작 단계에서 재검토

## Tags
#benchmark #mllm #gui-automation #conditional-reasoning #_y-future
