---
title: "Agentic Reasoning for Large Language Models"
date: 2026-01-18
authors: Tianxin Wei, Ting-Wei Li, Zhining Liu, et al. (29명, UIUC/Yale/Georgia Tech)
arxiv: "2601.12538"
url: https://arxiv.org/abs/2601.12538
github: https://github.com/weitianxin/Awesome-Agentic-Reasoning
category: survey
tags:
  - agentic-reasoning
  - LLM-agents
  - multi-agent
  - reinforcement-learning
  - survey
---

# Agentic Reasoning for Large Language Models

> 📄 **서베이 논문** | 135페이지 | 2026년 1월

## 🎯 핵심 질문
LLM이 닫힌 환경(closed-world)에서는 추론을 잘 하지만, **열린/동적 환경에서는 왜 어려운가?** → 해결책: LLM을 **자율 에이전트**로 재구성하여 계획(plan), 행동(act), 학습(learn)을 반복적 상호작용으로 수행

## 📐 3계층 프레임워크

### Layer 1: Foundational Agentic Reasoning (기초)
- 단일 에이전트의 핵심 역량
- **Planning** (계획 수립): 목표 분해, 단계별 실행 계획
- **Tool Use** (도구 활용): API 호출, 코드 실행, 외부 시스템 연동
- **Search** (탐색): 정보 검색, 웹 브라우징
- 안정적 환경에서의 기본 동작

### Layer 2: Self-Evolving Agentic Reasoning (자기진화)
- 에이전트가 **피드백, 메모리, 적응**을 통해 능력을 발전시킴
- Feedback loop: 실행 결과를 평가하고 전략 수정
- Memory: 장기/단기 기억으로 경험 축적
- Adaptation: 새로운 상황에 맞춰 행동 조정

### Layer 3: Collective Multi-Agent Reasoning (다중 에이전트)
- 여러 에이전트의 **협업, 지식 공유, 공동 목표** 달성
- Coordination: 역할 분담, 작업 조율
- Knowledge sharing: 에이전트 간 정보 전달
- Shared goals: 공통 목표를 향한 협력

## 🔧 두 가지 추론 방식

| 방식 | 설명 | 특징 |
|------|------|------|
| **In-context Reasoning** | 테스트 시점에 구조화된 프롬프트로 추론 확장 | 추가 학습 불필요, 즉시 적용 |
| **Post-training Reasoning** | RL + SFT로 행동 최적화 | 더 깊은 학습, 모델 가중치 업데이트 |

## 🌍 적용 분야
- **과학 연구** (Science): 실험 설계, 데이터 분석 자동화
- **로보틱스** (Robotics): 물리적 환경에서의 계획 및 실행
- **의료** (Healthcare): 진단 보조, 치료 계획
- **자율 연구** (Autonomous Research): AI가 스스로 연구 수행
- **수학** (Mathematics): 정리 증명, 문제 풀이

## 🔮 미래 과제 (Open Problems)
1. **개인화 (Personalization)**: 사용자별 맞춤 추론
2. **장기 상호작용 (Long-horizon Interaction)**: 긴 시간에 걸친 연속적 작업
3. **세계 모델링 (World Modeling)**: 환경에 대한 내부 모델 구축
4. **확장 가능한 멀티 에이전트 훈련**: 대규모 에이전트 시스템 학습
5. **거버넌스 (Governance)**: 실제 배포 시 안전성과 제어

## 💡 Andrew에게 의미
- **OpenClaw 멀티에이전트 설정**과 직접 연결: Commander → Coding → Research 구조가 논문의 Layer 3에 해당
- **Self-evolving** 개념은 메모리 시스템(MEMORY.md, daily notes)과 유사한 접근
- **Tool Use + Planning**은 현재 에이전트 스킬 시스템의 이론적 근거
- **S&P500 자동매매**에도 적용 가능: 시장 분석 → 전략 수립 → 실행 → 피드백 루프

## 📚 관련 키워드
- ReAct, Chain-of-Thought, Tree-of-Thought
- AutoGPT, MetaGPT, CAMEL
- Reinforcement Learning from Human Feedback (RLHF)
- Test-time Compute Scaling

---

*Source: arXiv:2601.12538 (2026-01-18)*
