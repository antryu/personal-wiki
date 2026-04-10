---
categories: projects
status: active
created: 2026-02-23
tags: [seo, mybidwise, programmatic-seo, aeo]
---

# MyBidWise SEO + AEO 전략

## 패러다임 전환: SEO → AEO (AI Engine Optimization)

기존 SEO만으로는 부족. 이제 **3가지 동시 최적화** 필요:

| 대상 | 방식 | 목적 |
|------|------|------|
| **Google 검색** | 전통 SEO + 프로그래매틱 SEO | 검색 유입 |
| **AI 검색엔진** (Perplexity, ChatGPT Search, Gemini) | AEO — 구조화 데이터 + 명확한 답변 | AI 인용 |
| **LLM 에이전트** (Claude, GPT, 코딩 에이전트) | /llms.txt + 마크다운 버전 | 에이전트가 사이트 이해 |

---

## Layer 1: 프로그래매틱 SEO (검색 유입)

### 구현
- `/bid/[id]` — 각 공고별 개별 페이지
- `/search/[keyword]` — 키워드별 공고 목록 페이지
- `/agency/[name]` — 기관별 공고 목록 페이지
- ISR (revalidate: 3600) → 매시간 갱신

### 페이지 구조 (공고 상세)
```
URL: mybidwise.com/bid/나라장터-2026-12345

<title>OO기관 OO사업 입찰공고 | MyBidWise</title>
<meta name="description" content="[기관명]의 [사업명] 입찰공고. 마감일 YYYY-MM-DD, 예산 X억원...">

<h1>OO사업 입찰공고</h1>
- 기관: [기관명]
- 마감일: YYYY-MM-DD
- 예산: X원
- 카테고리: IT/SW
- 원문 링크
- AI 요약 (자동 생성)
- 관련 공고 추천
```

### sitemap
- `/sitemap.xml` — 동적 생성
- `/sitemap-bids.xml` — 공고 전용 (수만 건)
- Google Search Console 등록

---

## Layer 2: AEO (AI 검색 최적화)

AI 검색엔진(Perplexity, ChatGPT Search)이 인용할 수 있도록:

### 1. Schema.org 구조화 데이터 (JSON-LD)
```json
{
  "@context": "https://schema.org",
  "@type": "GovernmentService",
  "name": "OO사업 입찰공고",
  "provider": {
    "@type": "GovernmentOrganization",
    "name": "조달청"
  },
  "areaServed": "KR",
  "description": "...",
  "offers": {
    "@type": "Offer",
    "validThrough": "2026-03-15"
  }
}
```

### 2. FAQ Schema — 자주 묻는 질문
각 공고 페이지에:
```json
{
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "이 입찰에 참여하려면?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "나라장터에 등록 후..."
      }
    }
  ]
}
```

### 3. 명확한 답변 구조
- 페이지 상단에 **핵심 정보 요약 박스** (AI가 추출하기 쉬움)
- Q&A 형식으로 정보 제공
- "정부입찰 참여방법", "입찰자격요건" 등 정보성 페이지 별도 생성

### 4. E-E-A-T 신호
- About 페이지: "7개 정부기관 데이터를 통합 분석하는 플랫폼"
- 원본 출처 명시 (나라장터, 기업마당 등 링크)
- 정기 업데이트 (매일 크롤링)

---

## Layer 3: LLM/에이전트 최적화

### /llms.txt
```markdown
# MyBidWise

> 한국 정부입찰공고 통합 검색 플랫폼

MyBidWise는 7개 정부기관(나라장터, 기업마당, K-Startup, NTIS 등)의 
입찰공고를 통합 수집하여 AI 기반으로 매칭/분석하는 SaaS입니다.

## 주요 기능
- 키워드 기반 공고 매칭 및 이메일 알림
- AI 입찰 적합도 분석
- 입찰서류 자동 생성 (HWP)

## API
- [공고 검색 API](/api/docs)
- [공고 상세 조회](/api/docs#bid-detail)

## 가이드
- [정부입찰 참여 가이드](/guides/how-to-bid)
- [입찰자격 확인 방법](/guides/qualification)
- [MyBidWise 사용법](/guides/getting-started)
```

### 마크다운 버전
- 주요 페이지에 `.md` 확장자 버전 제공
- 예: `mybidwise.com/guides/how-to-bid.md`

### robots.txt
```
User-agent: *
Allow: /

User-agent: GPTBot
Allow: /

User-agent: ClaudeBot  
Allow: /

User-agent: PerplexityBot
Allow: /

Sitemap: https://mybidwise.com/sitemap.xml
```

---

## 정보성 콘텐츠 페이지 (SEO + AEO 동시)

검색량 있는 정보성 키워드 → 전용 가이드 페이지:

| 키워드 | URL | 유형 |
|--------|-----|------|
| 정부입찰 참여방법 | /guides/how-to-bid | 정보성 |
| 나라장터 사용법 | /guides/nara-marketplace | 정보성 |
| 중소기업 정부지원금 | /guides/sme-funding | 상업성 |
| 입찰자격 확인 | /guides/qualification | 정보성 |
| 정부입찰 서류 작성 | /guides/bid-documents | 정보성 |

이 페이지들이 AI 검색에서 인용되면 → MyBidWise 브랜드 노출 → 유입

---

## 실행 순서

### Phase 1 (1주차)
- [ ] `/bid/[id]` 동적 라우트 + ISR 구현
- [ ] JSON-LD Schema.org 삽입
- [ ] sitemap.xml 자동 생성
- [ ] robots.txt AI봇 허용
- [ ] /llms.txt 생성

### Phase 2 (2주차)
- [ ] `/search/[keyword]`, `/agency/[name]` 라우트
- [ ] FAQ Schema 삽입
- [ ] Google Search Console 등록 + 색인 요청

### Phase 3 (3~4주차)
- [ ] 정보성 가이드 5개 작성
- [ ] .md 버전 페이지 제공
- [ ] 공고 AI 요약 자동 생성

---

## 기대 효과
- 1개월: 공고 페이지 1만건+ 색인
- 3개월: "정부입찰" 관련 키워드 구글 1페이지
- 6개월: AI 검색 인용 → 브랜드 인지도 → 유료 전환

---

## 관련
- [[2026-02-21-monetization-roadmap]]
- [[Trading/변경이력]]
