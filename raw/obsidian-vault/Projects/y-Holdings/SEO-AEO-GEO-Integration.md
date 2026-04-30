---
title: SEO + AEO + GEO Integration Framework
tags: [seo, aeo, geo, marketing, searchy, framework, strategy]
created: 2026-04-20
related: [[AEO-Strategy]], [[GEO-Strategy]], [[Harness-100-Workflow-System]]
---

# SEO + AEO + GEO Integration Framework

## TL;DR

**3개는 분리된 전략이 아니라 계층이다.**

```
┌─────────────────────────────────────────┐
│ GEO (ChatGPT/Gemini/Perplexity/Claude)  │  ← 2025+ 주 검색 경로
├─────────────────────────────────────────┤
│ AEO (Featured Snippet/AI Overview)      │  ← Zero-click 생존
├─────────────────────────────────────────┤
│ SEO (Google/Naver 검색 엔진)            │  ← 기존 기반
└─────────────────────────────────────────┘
       ↑
   Technical SEO (Core Web Vitals, Schema, HTTPS)
```

기술 SEO가 바닥이고, 그 위에 AEO(답변 엔진)와 GEO(생성 엔진)가 쌓인다. 하나만 하면 나머지 채널 놓침.

## 3개의 차이

| | SEO | AEO | GEO |
|---|---|---|---|
| **타겟** | Google 순위 | Featured Snippet 점유 | LLM 인용 |
| **사용자 행동** | 링크 클릭 | Zero-click | LLM 대화 |
| **KPI** | 트래픽, 순위 | Answer Box 획득률 | LLM 응답 언급률 |
| **핵심 기법** | 키워드, 백링크, 기술 SEO | 스키마, Q&A 구조, 직접 답변 | Definition-first, llms.txt, citation |
| **측정 주기** | 주간 | 월간 | 월간 (LLM 업데이트 반영) |
| **경쟁 지표** | SERP 순위 | Featured Snippet 점유 | LLM 인용 빈도 |

## 공통 인프라 (3개 모두 필요)

### 1. Technical SEO (기반)
- Core Web Vitals 최적화 (LCP, FID, CLS)
- HTTPS + HTTP/3
- XML sitemap + robots.txt
- Canonical URLs
- Mobile-first indexing

### 2. Schema Markup (스키마 마크업)
```json
// AEO + GEO 공유
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [...]
}
```
- FAQPage, HowTo, QAPage — AEO 주력
- Article, Author, Organization — GEO 주력
- Dataset — 원본 리서치 (GEO 강화)

### 3. E-E-A-T Signals
- 저자 프로필 (실명, 자격)
- 기관 신뢰도 (Organization)
- 업데이트 일자 (dateModified)
- 참고문헌 (권위 있는 출처)

### 4. Content Structure
- H1-H6 계층 엄수
- 짧은 단락 (4문장 이하)
- 리스트/테이블 활용
- 모든 이미지에 alt text

## 각 채널별 추가 기법

### SEO 전용
- 키워드 밀도 1-2%
- 백링크 빌딩 (Guest posting, broken link building)
- Internal linking 구조
- Page speed 최적화
- Mobile UX

### AEO 전용 (SEO 기반 + 추가)
- **직접 답변 40-60단어** (첫 문단)
- **H2 질문 형식** ("어떻게?", "왜?")
- **People Also Ask 타겟팅** (20개+)
- **리스트/테이블 변환**
- **음성 검색 친화 대화체**

### GEO 전용 (SEO + AEO 기반 + 추가)
- **Definition-First** (100단어 내 핵심 정의)
- **Inline citations** (모든 통계/주장)
- **llms.txt 배포**
- **원본 리서치** (연 2-4개)
- **Reddit/Wikipedia 외부 언급**
- **Article 스키마 + dateModified**

## 통합 체크리스트 (All-in-one)

### 기반 (SEO)
- [ ] Core Web Vitals PASS
- [ ] HTTPS + HTTP/3
- [ ] XML sitemap 제출
- [ ] Mobile-first 설계
- [ ] 타겟 키워드 정의

### 구조 (AEO)
- [ ] 첫 문단 40-60단어 직접 답변
- [ ] H1이 검색 쿼리와 일치
- [ ] H2 중 5개+ 질문 형식
- [ ] 리스트/테이블 2개+/페이지
- [ ] FAQPage/HowTo 스키마

### 권위 (GEO)
- [ ] 첫 문단에 구체 수치 + 출처
- [ ] Inline citations 전체
- [ ] llms.txt 배포
- [ ] Article + Author + Organization 스키마
- [ ] 원본 리서치 발표 계획
- [ ] Wikipedia 참고문헌 추가
- [ ] Reddit 자연 언급

### 측정
- [ ] Google Search Console — SEO
- [ ] Ahrefs/SEMrush — SEO + AEO
- [ ] 수동 LLM 테스트 (5엔진 × 20질문) — GEO
- [ ] GA Referral 분석 — GEO

## y-tower 통합 전략

**Searchy 페르소나**: "SEO/AEO/GEO 통합 — 검색엔진(Google/Naver) + 답변엔진(Featured Snippet/AI Overview) + 생성엔진(ChatGPT/Gemini/Perplexity) 가시성"

**하네스 3개 연계**:

```
H-051 SEO Strategy → 기반 SEO 전략 수립
     ↓
H-111 AEO Audit → 답변 엔진 최적화 (Schema + Q&A)
     ↓
H-112 GEO Optimization → 생성 엔진 최적화 (Definition-first + llms.txt)
```

**순차 또는 병렬 실행**:
- 새 사이트: SEO → AEO → GEO (순차)
- 기존 사이트: AEO + GEO 병렬 (SEO는 이미 있으므로)

## 선행 지표 (어느 채널부터?)

```
1. 기술 SEO 체크 → 문제 있으면 먼저 해결 (기반)
2. 타겟 키워드 Top 10 조사
3. 각 키워드를 3채널에서 측정:
   - SEO: 순위
   - AEO: Featured Snippet 점유
   - GEO: LLM 5개 인용 빈도
4. 가장 약한 채널부터 공략
```

대부분의 경우 **AEO가 가장 저비용 고효과** (SEO 기반만 있으면 스키마만 추가).

## ROI 비교 (가설)

| 투자 | SEO | AEO | GEO |
|------|-----|-----|-----|
| 단기 효과 (1-3개월) | 느림 | 빠름 | 매우 느림 |
| 중기 효과 (3-12개월) | 빠름 | 중간 | 중간 |
| 장기 효과 (12+개월) | 중간 | 중간 | **매우 큼** (LLM에 자리잡으면 오래감) |
| 비용 | 높음 (백링크) | 낮음 (Schema) | 중간 (원본 리서치) |
| 경쟁 | 포화 | 중간 | 낮음 (신규 영역) |

**추천**: AEO 즉시 시작 + GEO 병행 + SEO 유지

## 관련 문서

- [[AEO-Strategy]] — Answer Engine 상세
- [[GEO-Strategy]] — Generative Engine 상세
- [[Harness-100-Workflow-System]] — EPAR 실행 시스템
- [[Agent-Skill-Awareness-Guide]] — Searchy 역할 가이드

## 참고

- Selavento (2026) — SEO/AEO/GEO 통합 서비스 전문
- Google Search Central — Rich Results Guide
- Anthropic — llms.txt proposal (2024)
- SparkToro — Zero-click search trends
