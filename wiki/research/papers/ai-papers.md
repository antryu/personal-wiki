# AI Papers Daily — 자동 논문 스캔 시스템 운영 기록

> M1Pro16Gbot(Searchy)이 매일 arXiv + Semantic Scholar에서 논문을 스캔하고, 프로젝트별로 분류하여 리포트하는 시스템의 운영 기록. 2026-03-11에 시스템 개선(소스 다양화 + 프로젝트별 그룹핑)이 이루어졌으며, 이후 안정적으로 운영 중.
> Last updated: 2026-04-05

## Overview

#ai-papers 채널은 M1Pro16Gbot이 매일 08:00(KST)에 AI 논문을 자동 스캔하여 프로젝트별 적용 가능성을 평가하는 채널이다. 2026-03-11에 스캔 소스와 리포트 포맷이 대폭 개선되었고, 이후 매일 15~25편을 스캔하여 평균 8~10편의 관련 논문을 필터링하고 있다.

## Key Topics

### 논문 스캔 시스템 v2 개편 (2026-03-11)

R.Andrew의 요청으로 기존 arXiv 단일 소스 스캔 시스템이 개편되었다.

**변경 전:**
- 소스: arXiv만 스캔
- 포맷: 관련도 순 나열
- 필터: 관련도 3+ 이상 포함

**변경 후:**
- 소스: **arXiv + Semantic Scholar** (Papers With Code는 API 불안정으로 제외)
- 포맷: **프로젝트별 그룹핑**
- 필터: **관련도 5+ 강화** (잡논문 필터링)
- 프로젝트 태그: `#y-holdings`, `#mybidwise`, `#cutflow`, `#trading`, `#general`

논문 선별 기준도 강화:
- ❌ "흥미로운 연구" 수준 → 드랍
- ✅ 코드 있음 + 프로젝트에 구체적 적용점 → 포함
- ✅ 벤치마크 SOTA 갱신 → 포함

(raw/discord/ai-papers/2026-03-11.md)

### 프로젝트별 주요 논문 하이라이트

#### #y-holdings — 에이전트 시뮬레이터 (30명 에이전트 회사 운영)

| 날짜 | 논문 | 관련도 | 핵심 |
|------|------|--------|------|
| 03-11 | Agentic Critical Training | 8/10 | 에이전트가 성공/실패를 대조하며 자기 성찰적 훈련 |
| 03-11 | Predicting Conflict Impact (O-RAN) | 8/10 | 배포 전 프로파일링으로 에이전트 간 충돌 예측 |
| 03-11 | Emotional Modulation in Swarm Decision Dynamics | 7/10 | 감정적 가치/각성이 에이전트 상호작용 속도 조절 |
| 03-18 | **Chronos: Temporal-Aware Conversational Agents** | **8/10** | 시간 인식 메모리 프레임워크, 장기 대화에서 시간에 따른 사실/선호 추적 |
| 03-19 | **AgentFactory** | **8/10** | 성공적 에이전트 솔루션을 실행 가능한 서브에이전트 코드로 저장·재사용 |
| 03-20 | Constitutive vs. Corrective | 7/10 | AI 시스템 인간 개입의 인과적 분류법 (구성적 vs 교정적) |

#### #mybidwise — 입찰/RAG/검색/NLP

| 날짜 | 논문 | 관련도 | 핵심 |
|------|------|--------|------|
| 03-13 | SciMDR | 6/10 | 과학 멀티모달 문서 추론을 위한 합성+재접지 프레임워크 |
| 03-13 | Contrastive Embeddings + Fuzzy Rules | 6/10 | 도메인 특화 임베딩을 퍼지 규칙으로 해석 |
| 03-18 | LLMs for Structured Info Extraction | 7/10 | 비정형 문서에서 LLM 기반 구조화 정보 추출 |
| 03-20 | **F2LLM-v2** | **8/10** | 200개+ 언어 지원 다국어 임베딩 모델 (80M~14B) |

#### #cutflow — 영상/음성 AI

| 날짜 | 논문 | 관련도 | 핵심 |
|------|------|--------|------|
| 03-11 | C2FMAE: Coarse-to-Fine Masked Autoencoders | 6/10 | 계층적 시각 표현 학습 (시맨틱/인스턴스/패치 마스크) |
| 03-13 | OmniStream | 7/10 | 실시간 스트리밍 환경에서 지각+재구성+행동 통합 시각 백본 |
| 03-13 | Video Streaming Thinking (VST) | 7/10 | 비디오를 시청하면서 동시에 추론하는 패러다임 |
| 03-13 | EVATok | 7/10 | 콘텐츠 복잡도에 따른 적응형 비디오 토크나이저 |
| 03-13 | DreamVideo-Omni | 6/10 | 다중 피사체 정체성 유지 + 정밀 움직임 제어 |
| 03-18 | Demystifying Video Reasoning | 7/10 | 비디오 모델 추론이 디퓨전 디노이징 단계에서 발생 |
| 03-19 | Unified Spatio-Temporal Token Scoring | 7/10 | 시공간 토큰 가지치기로 비디오 VLM 효율성 향상 |

#### #trading — 금융 AI/트레이딩

| 날짜 | 논문 | 관련도 | 핵심 |
|------|------|--------|------|
| 03-17 | AI-powered Black-Litterman Framework | - | 행동경제학+계량금융 결합, 기술/감성 신호 활용 포트폴리오 최적화 |
| 03-20 | FinTradeBench | 7/10 | 기업 재무제표+주가 동향 기반 LLM 금융 추론 벤치마크 |

#### #general — 범용 AI 기술

| 날짜 | 논문 | 관련도 | 핵심 |
|------|------|--------|------|
| 03-11 | Think Before You Lie | 7/10 | LLM 추론 시간 증가 → 정직성 일관 증가 (인간과 반대 패턴) |
| 03-11 | Model Merging in the Era of LLMs | 7/10 | 추가 훈련 없이 여러 전문 모델을 단일 모델로 병합 |
| 03-11 | Towards a Neural Debugger for Python | 6/10 | LLM을 실행 추적에 훈련시켜 신경망 디버거 구현 |
| 03-19 | TDAD: Test-Driven Agentic Development | 7/10 | AST 기반 코드-테스트 그래프로 AI 코딩 에이전트 회귀 방지 |
| 03-20 | **Nemotron-Cascade 2** | **8/10** | 30B MoE 모델 (3B 활성화), IMO/IOI 금메달 수준 추론 능력 |

### 논문 소스 사이트 정리 (2026-03-11)

R.Andrew가 HuggingFace Papers 외 다른 소스를 질문하여 정리된 참고 목록:

| 사이트 | 특징 |
|--------|------|
| arXiv | 프리프린트 원본 (cs.AI, cs.CL, cs.LG) |
| HuggingFace Papers | 트렌딩 + 커뮤니티 큐레이션 (arXiv 기반이라 소스 겹침) |
| Semantic Scholar | AI 기반 논문 검색 + 인용 그래프, API 자동화에 적합 |
| Papers With Code | 논문 + 코드 + 벤치마크 연결 (API 불안정) |
| Connected Papers | 관련 논문 시각화 그래프 |
| OpenReview | ICLR/NeurIPS 피어리뷰 점수로 품질 필터링 |

### 일별 스캔 통계

| 날짜 | 스캔 | 관련 | 비고 |
|------|------|------|------|
| 03-11 | 25편 | 10편 | 시스템 v2 개편일, 테스트 스캔 다수 |
| 03-13 | 18편 | 9편 | cutflow 논문 4편으로 최다 |
| 03-14 | 19편 | 8편 | cutflow 계속 강세 |
| 03-15 | - | 0편 | 관련 논문 없음 |
| 03-16 | - | 0편 | 관련 논문 없음 (주말) |
| 03-17 | 1편 | 1편 | trading 논문 1편만 발견 |
| 03-18 | 16편 | 8편 | Chronos(y-holdings) Top Pick |
| 03-19 | 20편 | 8편 | AgentFactory Top Pick |
| 03-20 | 18편 | 8편 | F2LLM-v2, Nemotron-Cascade 2 주목 |
| 03-21 | 17편 | 8편 | 전일과 유사한 논문 다수 |

## Key Decisions

- **2026-03-11**: 논문 스캔 소스를 arXiv + Semantic Scholar로 확장, Papers With Code API 불안정으로 제외
- **2026-03-11**: 리포트 포맷을 관련도 순 나열에서 **프로젝트별 그룹핑**으로 변경
- **2026-03-11**: 프로젝트 태그를 `#y-holdings`, `#mybidwise`, `#cutflow`, `#trading`, `#general` 5개로 확정
- **2026-03-11**: 관련도 필터를 3+에서 **5+로 강화**하여 잡논문 필터링
- **2026-03-11**: 내일(03-12) 08:00 크론부터 새 포맷 적용 확정

## Results & Outcomes

- 시스템 v2 이후 매일 평균 8편의 프로젝트 적용 가능 논문을 안정적으로 필터링
- 프로젝트별 그룹핑으로 즉시 액션 가능한 리포트 형태 달성
- **가장 많이 태그된 프로젝트**: #cutflow (영상/음성 AI) — 특히 03-13~14 기간에 실시간 비디오 처리 관련 논문 집중 발견
- **최고 관련도 논문들**: Chronos (시간 인식 메모리), AgentFactory (자체 진화 에이전트), F2LLM-v2 (다국어 임베딩), Nemotron-Cascade 2 (MoE 추론 모델) — 각 8/10
- Full notes는 Obsidian vault `References/AI-Papers/Daily/` 에 저장됨

## Related

- [[wiki/business/y-holdings]] — 30명 에이전트 회사 운영 시뮬레이터
- [[wiki/business/mybidwise]] — 입찰/RAG/검색 프로젝트
- [[wiki/business/cutflow]] — 영상/음성 AI 프로젝트
- [[wiki/business/trading]] — 금융 AI/트레이딩 프로젝트

## Sources

- [2026-03-11](raw/discord/ai-papers/2026-03-11.md)
- [2026-03-13](raw/discord/ai-papers/2026-03-13.md)
- [2026-03-14](raw/discord/ai-papers/2026-03-14.md)
- [2026-03-15](raw/discord/ai-papers/2026-03-15.md)
- [2026-03-16](raw/discord/ai-papers/2026-03-16.md)
- [2026-03-17](raw/discord/ai-papers/2026-03-17.md)
- [2026-03-18](raw/discord/ai-papers/2026-03-18.md)
- [2026-03-19](raw/discord/ai-papers/2026-03-19.md)
- [2026-03-20](raw/discord/ai-papers/2026-03-20.md)
- [2026-03-21](raw/discord/ai-papers/2026-03-21.md)
