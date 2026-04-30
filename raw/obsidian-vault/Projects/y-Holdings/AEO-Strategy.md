---
title: AEO Strategy — Answer Engine Optimization
tags: [seo, aeo, marketing, searchy, harness, strategy]
created: 2026-04-20
related: [[GEO-Strategy]], [[SEO-AEO-GEO-Integration]], [[Harness-100-Workflow-System]]
---

# AEO Strategy — Answer Engine Optimization

## TL;DR

**AEO = "검색 결과의 0번째 자리" 점유 전략.**

Google Featured Snippets, AI Overview (SGE), 음성 검색(Siri/Alexa) 응답에서 **우리 콘텐츠가 직접 인용**되도록 만드는 것. Zero-click 검색에서 살아남는 유일한 방법.

```
[User: "How to brew espresso?"]
  → Google SERP
  → Featured Snippet 위치: 우리 사이트의 40-60단어 답변
  → (클릭 없이도) 브랜드 노출 + "우리가 권위" 포지셔닝
```

## 왜 AEO인가

- **Zero-click 검색 증가**: 65% 검색이 클릭 없이 종료 (SparkToro, 2024)
- **음성 검색 성장**: 스마트 스피커 보급 → 답변 엔진이 주 UI
- **AI Overview (SGE)**: Google이 2024+ 검색 결과 상단에 LLM 요약 제공
- **SEO만으론 부족**: 1위 랭킹보다 Featured Snippet이 CTR 2-3배 높음

## 4대 AEO 채널

| 채널 | 타겟 | 포맷 |
|------|------|------|
| **Featured Snippet** | Google 데스크탑 | 40-60단어 정답, 리스트, 테이블 |
| **AI Overview (SGE)** | Google AI 요약 | 구조화된 답변 + 출처 링크 |
| **People Also Ask** | Google 확장 질문 | Q&A 구조 |
| **음성 검색** | Siri/Google Assistant/Alexa | 대화체 답변 (짧고 자연스러운) |

## 6대 기법

### 1. 스키마 마크업 (필수)
- `FAQPage` — 질의응답 페이지
- `HowTo` — 단계별 튜토리얼
- `QAPage` — 커뮤니티 Q&A
- `Article` — 일반 기사 (저자/일자 메타 필수)

### 2. 직접 답변 구조
- **첫 문단 40-60단어**: 검색 쿼리에 대한 즉답
- 공식: `[Subject] is [definition], which [function].`
- 예: "에스프레소는 25-30초 동안 9기압으로 추출한 25-30ml의 진한 커피이다."

### 3. 질문 형식 헤딩
- H1: 메인 질문 (검색 쿼리 그대로)
- H2: 서브 질문 5-10개 ("어떻게?", "왜?", "얼마?")
- 각 H2 아래 40-80단어 간결 답변

### 4. 리스트/테이블 변환
- 단계형 → `<ol>` (Answer Box 선호)
- 비교형 → `<table>` (SERP 직접 노출)
- 숫자형 → `<ul>` + 구체 수치

### 5. E-E-A-T 강화
- **Experience**: 경험 기반 콘텐츠
- **Expertise**: 저자 자격/전문성
- **Authoritativeness**: 기관 권위
- **Trustworthiness**: HTTPS, 출처, 정정 정책

### 6. People Also Ask 타겟팅
- 타겟 PAA 20개+ 수집
- 각 질문에 대한 독립 H2 답변
- 연쇄 PAA 생성 (답변 시 추가 질문 유도)

## 체크리스트

- [ ] 스키마 마크업 (JSON-LD) 적용
- [ ] Rich Results Test 통과
- [ ] 첫 문단에 40-60단어 직접 답변
- [ ] H1이 검색 쿼리와 일치
- [ ] H2 중 최소 5개가 질문 형식
- [ ] People Also Ask 타겟 질문 20개+ 커버
- [ ] 리스트/테이블 형식 활용 (페이지당 2+)
- [ ] 저자 프로필 + 참고문헌 노출
- [ ] 업데이트 날짜 명시
- [ ] Search Console Rich Results 모니터링

## 측정 지표

| 지표 | 측정 도구 | 성공 기준 |
|------|----------|----------|
| Featured Snippet 획득 | Ahrefs / SEMrush | 타겟 질문 30%+ |
| AI Overview 인용 | 수동 검색 테스트 | 타겟 질문 10%+ |
| Rich Results Impressions | Search Console | YoY +30% |
| 음성 검색 응답 | Siri/Assistant 테스트 | 10개 중 3개+ |
| 구조화 데이터 오류 | Search Console | 0건 |

## y-tower 통합

- **Harness**: `H-111 AEO Audit` (searchy+wordy+buildy+counsely)
- **Agent**: Searchy (owner), Wordy (structure), Buildy (implementation)
- **Trigger 키워드**: AEO, Featured Snippet, AI Overview, 답변엔진, People Also Ask, 음성 검색

## 관련 문서

- [[GEO-Strategy]] — 생성형 AI 엔진 최적화 (ChatGPT/Gemini/Perplexity)
- [[SEO-AEO-GEO-Integration]] — 3개 통합 프레임워크
- [[Harness-100-Workflow-System]] — EPAR 워크플로우 시스템

## 참고

- Selavento — AEO/GEO/SEO 통합 서비스 사례 (2026 기준)
- Google Search Central — Rich Results Guide
- Schema.org — FAQPage, HowTo, QAPage 스펙
