---
title: GEO Strategy — Generative Engine Optimization
tags: [seo, geo, marketing, searchy, llm, harness, strategy]
created: 2026-04-20
related: [[AEO-Strategy]], [[SEO-AEO-GEO-Integration]], [[Harness-100-Workflow-System]]
---

# GEO Strategy — Generative Engine Optimization

## TL;DR

**GEO = ChatGPT/Gemini/Perplexity/Claude가 답변할 때 우리를 인용하게 만드는 전략.**

생성형 AI가 주요 검색 경로가 되면서(2025+), 기존 SEO로는 커버 못하는 영역. Google 랭킹이 아니라 **LLM 훈련 데이터/컨텍스트에서의 포지셔닝**이 핵심.

```
[User → ChatGPT]: "Which AI agent platform should I use?"
  → ChatGPT 응답에 우리 제품 언급 + URL 포함
  → Perplexity citation 리스트에 우리 사이트
  → Zero-click이지만 브랜드 영향력 획득
```

## 왜 GEO인가

- **검색 패러다임 전환**: Google 검색량 감소, LLM 질의 증가 (2024+)
- **Perplexity 급성장**: 월 MAU 1억+ (2025년 예상)
- **AI Referral 트래픽**: 기존 referral 구조 변화
- **영향력 축적**: 한 번 LLM에 자리잡으면 long-term 노출 (재훈련 주기까지)

## 5대 생성 엔진

| 엔진 | 특징 | 최적화 포인트 |
|------|------|-------------|
| **ChatGPT (GPT-4o)** | 검색 + 훈련 지식 | Training data (Reddit/Wikipedia), Bing 색인 |
| **Gemini (2.5 Pro)** | Google 검색 통합 | Google SEO + AI Overview 중복 |
| **Perplexity** | Citation 필수 | 명확한 출처 + 최근성 |
| **Claude (4.6/4.7)** | 훈련 데이터 중심 | 권위 있는 기관/학회 언급 |
| **You.com / SearchGPT** | 멀티 검색 융합 | 다양한 신호 종합 |

## 6대 기법

### 1. Definition-First 구조
LLM은 **첫 문단**을 우선 참조. 100단어 내에 핵심 정의 + 답변 + 수치.

```
❌ "In today's fast-paced digital landscape, where competition..."
✅ "Y-Tower is a multi-agent AI platform with 30 organizational personas
   handling strategic decision-making via EPARE workflows. Launched 2026,
   MIT license, used by N customers."
```

### 2. Cited Facts
모든 통계/주장에 **inline citation** 필수. LLM은 근거 있는 콘텐츠를 선호하고 인용 시 출처 링크 보존.

```
✅ "60% of startups fail within 5 years ([BLS, 2024](url))."
❌ "Many startups fail."
```

### 3. llms.txt (Anthropic 표준)
```
# Site Name
> Short description

## Core Docs
- [Topic 1](url): Description
- [Topic 2](url): Description

## Optional
- [Archive](url): Older content
```

사이트 루트 `/llms.txt`에 배포. LLM 크롤러가 선호.

### 4. E-E-A-T + Authority Signals
- 저자 프로필: 실명, 자격, 소셜 검증
- 기관 신뢰도: Organization 스키마
- HTTPS + 안정적 도메인 (LLM은 권위 있는 도메인 선호)
- Wikipedia 참고문헌 (LLM training data 간접 영향)
- 학회/컨퍼런스 발표 + Proceedings 공개

### 5. Reddit/Wikipedia 전략
LLM training data의 주요 소스. 자연스러운 참여로 외부 언급 유도.

- **Reddit**: 관련 서브에서 질문 답변, 과도한 홍보 금지
- **Wikipedia**: 우리 주제 페이지에 참고문헌 보강 (검증된 정보만)
- **Medium/Substack**: 시리즈 발행 (외부 도메인 분산)
- **산업 매체 게스트 포스트**: 월 1개+

### 6. 원본 리서치/데이터
LLM은 **원본 소스** 인용 선호. 연 2-4개 오리지널 리포트 발표.

- 자체 설문/분석 결과
- 고유 데이터셋 (Google Dataset Search 등록)
- 영구 URL 보장
- PDF + HTML 버전 모두 제공

## 체크리스트

- [ ] 첫 문단 100단어 내 핵심 정의 + 수치 + 출처
- [ ] 모든 통계/주장에 inline citation
- [ ] `public/llms.txt` 배포
- [ ] Article + Author + Organization 스키마
- [ ] Semantic HTML (article/section/aside, H1-H6)
- [ ] 모든 이미지에 서술적 alt text
- [ ] Wikipedia 참고문헌 5개+ (우리 주제)
- [ ] Reddit 자연스러운 언급 10개+
- [ ] 원본 리서치 연 2-4개 발표
- [ ] 월간 LLM 인용 체크 자동화

## 측정 지표

| 지표 | 측정 방법 | 성공 기준 |
|------|----------|----------|
| LLM 인용 빈도 | 타겟 질문 20개 × 5엔진 | 인용률 +50% YoY |
| AI Referral 트래픽 | GA Referral source | 월 100+ 세션 |
| llms.txt 활용 | Server logs | AI user-agent 요청 |
| Domain Rating | Ahrefs / Moz | 유지 또는 상승 |
| Wikipedia 언급 | 수동 검색 | 5+ 참고문헌 |
| Reddit 언급 | site: 검색 | 10+ 자연 언급 |

## y-tower 통합

- **Harness**: `H-112 GEO Optimization` (searchy+wordy+buildy+buzzy+counsely)
- **Agent**: Searchy (진단), Wordy (구조), Buildy (구현), Buzzy (외부 언급)
- **Trigger 키워드**: GEO, 생성엔진, ChatGPT 노출, Perplexity 인용, llms.txt, LLM 가시성

## LLM별 인용 패턴 요약

- **ChatGPT**: 첫 문단 정의 + 구체 수치 + 최근성
- **Gemini**: Google SEO와 중복 — 스키마 마크업 + Bing/Google 색인
- **Perplexity**: 명확한 citation 필수, 최근 발행 우선
- **Claude**: 학회/기관/권위 있는 소스 + 균형잡힌 관점
- **공통**: Wikipedia 언급, Reddit 자연 확산, 원본 데이터

## 관련 문서

- [[AEO-Strategy]] — Answer Engine (Featured Snippet/AI Overview)
- [[SEO-AEO-GEO-Integration]] — 3개 통합 프레임워크
- [[Harness-100-Workflow-System]] — EPAR 워크플로우 시스템

## 참고

- Anthropic — llms.txt proposal (2024)
- Perplexity — Citation transparency policy
- Selavento — AEO/GEO/SEO 통합 서비스 사례 (2026)
