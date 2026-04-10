# MyBidWise 마케팅 — SEO/AEO 전략 및 실행

> MyBidWise의 검색엔진 최적화(SEO)와 AI 답변 최적화(AEO) 전략 수립 및 실행 과정을 다룬다. Google/Naver 키워드 검증, 블로그 콘텐츠 제작, 프로그래매틱 SEO, 경쟁사 분석, 검색엔진 색인 등록까지의 전체 마케팅 파이프라인을 포함한다.
> Last updated: 2026-04-05

## Overview

2026년 3월 24일부터 4월 2일까지 MyBidWise의 마케팅 기반을 구축했다. Google Keyword Planner와 Naver Search Ad로 키워드를 검증하고, SEO 최적화된 블로그 8개 + 경쟁사 비교 글 1개를 작성·배포했다. FAQ 섹션과 Schema.org 구조화 데이터로 AEO도 적용했으며, 프로그래매틱 SEO로 `/search/[keyword]` 50개, `/agency/[slug]` 30개 페이지를 자동 생성하여 총 356개 이상의 SEO 페이지를 확보했다.

## Key Topics

### 키워드 검증 (2026-03-25)

Google Keyword Planner에 17개 키워드를 입력하여 검증. 1,000개+ 관련 키워드 데이터를 CSV로 확보했다.

**Google Keyword Planner 핵심 결과:**

| 키워드 | 월간 검색량 | 경쟁도 | CPC |
|--------|-----------|--------|-----|
| 나라장터 | 10만~100만 | 낮음 | ₩837~₩1,704 |
| 조달청 나라장터 | 1만~10만 | 낮음 | ₩1,027~₩3,120 |
| 입찰 공고 | 1천~1만 (5,000) | 낮음 | ₩886~₩1,889 |
| 정부 지원 사업 | 1천~1만 (5,000) | 낮음 | ₩675~₩5,621 |
| g2b 입찰 | - | - | ₩13,523 (CPC 최고) |

**핵심 발견:** 경쟁도 전부 "낮음"~"중간" → 블루오션 확인. "정부 지원 사업" CPC ₩5,621로 상업적 가치 높음. (raw/discord/mybidwise-marketing/2026-03-25.md)

### Naver 키워드 검증 (2026-03-26)

Naver Search Ad 키워드 도구로 571개 관련 키워드 분석. 네이버가 한국 검색 60%+ 차지하므로 구글보다 더 중요한 데이터.

**Naver 핵심 결과:**

| 키워드 | 네이버 월간 검색량 | 구글 대비 |
|--------|---------------|---------|
| 나라장터 | 96만/월 | 구글의 9배 |
| G2B | 1.1만/월 | 구글의 11배 |
| 정부지원금 신청 | 1.1만/월 (모바일 85%) | - |

**블로그별 네이버 검색 커버리지:**
- 나라장터 vs 기업마당: 100만+/월
- 정부지원사업 총정리: 2만/월
- G2B 전자입찰 가이드: 1.3만/월
- 입찰 알림 서비스 비교: 9,570/월
- 나라장터 입찰 가이드: 7,370/월

(raw/discord/mybidwise-marketing/2026-03-26.md)

### 블로그 시스템 구축 및 콘텐츠 제작 (2026-03-25~26)

MDX + Next.js App Router 기반 블로그 시스템을 구현하고, SEO 최적화된 블로그 글을 작성·배포했다.

**마케팅 퍼널 전략:**
```
구글/네이버 검색 → 블로그 글 유입 (로그인 불필요)
→ MyBidWise 자연스럽게 노출 → CTA 버튼 → 가입/전환
```

**1차 블로그 글 5개 (3/25):**
1. 입찰공고 알림 서비스 7곳 비교 (`bid-alert-service-comparison`)
2. 나라장터 vs 기업마당 (`nara-vs-bizinfo`)
3. 나라장터 입찰 초보자 가이드 (`nara-bid-guide`)
4. 2026 정부 지원 사업 총정리 (`gov-support-2026`)
5. G2B 전자입찰 가이드 (`g2b-electronic-bidding`)

**2차 블로그 글 3개 (3/26, 네이버 키워드 기반):**
6. 나라장터 쇼핑몰 이용 가이드 (`nara-marketplace-guide`) — 15,340/월
7. 정부지원금 신청 방법 2026 (`gov-subsidy-application`) — 15,310/월
8. 나라장터 업체 등록 가이드 (`nara-registration-guide`) — 3,870/월

(raw/discord/mybidwise-marketing/2026-03-25.md, raw/discord/mybidwise-marketing/2026-03-26.md)

### AEO (Answer Engine Optimization) 적용 (2026-03-26)

SEO가 구글/네이버 검색 결과에 링크로 노출되는 것이라면, AEO는 ChatGPT/Perplexity/Google AI Overview가 답변에 인용하도록 최적화하는 것.

**적용 내용:**
- 블로그 8개 전부에 FAQ 섹션 추가
- FAQPage + Article Schema.org 구조화 데이터 삽입
- `llms.txt` 업데이트 (AI 봇 전용 사이트 설명서)
- `robots.txt`에 GPTBot, ClaudeBot, PerplexityBot 허용 (기존 설정)

**AEO 원리:** FAQ → AI가 Q&A 형태로 답변 추출, Schema.org → AI가 구조화된 데이터 읽기, llms.txt → AI 봇이 사이트 맥락 파악

(raw/discord/mybidwise-marketing/2026-03-26.md)

### 프로그래매틱 SEO (2026-03-26)

블로그(수동 콘텐츠)와 달리, 코드가 DB 데이터를 기반으로 자동으로 수백 페이지를 생성하는 전략.

**구현된 페이지:**
- `/search/[keyword]` — 50개 키워드 페이지 (건설입찰, IT용역 등)
- `/agency/[slug]` — 30개 기관 페이지 (조달청, 국방부 등)
- 각 페이지에 Schema.org (ItemList, FAQPage, BreadcrumbList) 적용
- sitemap 자동 업데이트

**결과:** 기존 200개 (`/bid/[type]/[id]`) + 새로 80개 = **360+ 프로그래매틱 페이지**

비유: "블로그는 칼로 찌르는 것, 프로그래매틱은 그물을 치는 것"

(raw/discord/mybidwise-marketing/2026-03-26.md)

### 경쟁사 분석 (2026-03-27)

입찰정보 서비스 10곳 분석 완료. 결과를 블로그 글("2026 입찰정보 서비스 10곳 완벽 비교")로 제작.

**Tier 1 — 대형 (20년+ 레거시):**
- **비드프로** (bidpro.co.kr) — 2002년~, 낙찰 예측·적격심사 자동계산, 유료
- **인포21C** (info21c.net) — 1:1 분석연구원, 교육+컨설팅
- **이비드코리아** (ebidkorea.com) — 36개 공고기관 실시간, 모바일앱

**Tier 2 — 중형 (특화):**
- **공공알림** (gongong.kr) — **가장 직접적인 경쟁자.** 텔레그램/슬랙 알림, AI 적합도, Free~Pro(99,000원/월)
- **인포건설넷** (igunsul.net) — 건설 특화
- **모두입찰** (modoobid.co.kr) — 특허 분석 기반

**Tier 3 — 신규/무료:**
- **산군** (sankun.com) — 무료, 블로그 콘텐츠 보유
- **크제비** (kjebi.com) — 검색엔진형, 43만 기업 데이터
- **DeepBID** — 빅데이터, 무료

**MyBidWise 핵심 차별점:**
- 7개 정부기관 통합 (유일한 차별점)
- 입찰 + 지원사업 동시 검색
- 무료 + Basic 14,900원 (경쟁사 대비 최저가)

**콘텐츠 SEO 블루오션:** 레거시 업체들은 블로그가 없거나 빈약. 산군만 블로그 운영 중. 티스토리/네이버 개인 블로그가 키워드 점령 → MyBidWise 선점 가능.

(raw/discord/mybidwise-marketing/2026-03-27.md)

### 검색엔진 등록 및 색인 (2026-03-25~26)

**Google:**
- Search Console에 블로그 URL 9개 색인 요청 (일일 할당량으로 1개는 다음날 처리)
- sitemap.xml에 블로그 URL 포함

**Naver:**
- searchadvisor.naver.com에 사이트맵 3개 제출 (sitemap.xml, sitemap-bids.xml, sitemap-support.xml)
- 블로그 URL 6개 + 추가 3개 웹 페이지 수집 요청
- naver 인증 파일(HTML) 이미 배포 완료

**PageSpeed Insights 결과 (모바일):**

| 항목 | 점수 |
|------|------|
| 성능 | 94 |
| 접근성 | 95 |
| 권장사항 | 100 |
| SEO | 92 |

(raw/discord/mybidwise-marketing/2026-03-25.md, raw/discord/mybidwise-marketing/2026-03-26.md)

### 배포 이슈 및 해결 (2026-03-25, 04-02)

**Docker MDX 파일 누락 (3/25):** Dockerfile runner 스테이지에서 `src/content/` 미복사 → Dockerfile 수정으로 해결.

**Nginx 프록시 포트 불일치 (3/25):** Nginx가 3000 포트(구 컨테이너)를 바라보고 있었는데, 새 컨테이너는 8000 포트 → 구 컨테이너 중지 + 새 컨테이너 연결로 해결.

**한글 slug 404 이슈 (4/2):** Next.js가 한글 URL 라우팅을 제대로 처리 못함 → 영문 slug로 변경하여 해결.

**서버 디스크 부족 (4/2):** 디스크 97% 사용 → Docker 이미지 정리로 35GB 확보 (54%로 감소).

**Playwright 빌드 에러 (4/2):** 블로그와 무관한 Playwright 설치 실패 → Dockerfile에서 주석 처리하여 빌드 성공.

(raw/discord/mybidwise-marketing/2026-03-25.md, raw/discord/mybidwise-marketing/2026-04-02.md)

### ChatGPT/Gemini AI 검색 노출 (2026-04-02)

4월 2일 기준 ChatGPT/Gemini에서 MyBidWise 검색 시 아직 미노출. Google 색인이 완료되어야 AI 검색엔진도 접근 가능. 색인 후 2~7일 소요 예상.

(raw/discord/mybidwise-marketing/2026-04-02.md)

## Key Decisions

- **2026-03-25**: 블로그를 mybidwise.com/blog에 공개 페이지로 배포 (로그인 불필요, SEO용 미끼 콘텐츠 전략)
- **2026-03-25**: 키워드 Tier A 기준으로 블로그 글 우선순위 확정 (입찰공고 5,000/월 → 메인 키워드)
- **2026-03-26**: AEO 적용 결정 — FAQ + Schema.org + llms.txt로 AI 검색 최적화
- **2026-03-26**: 프로그래매틱 SEO 도입 — `/search/[keyword]` 50개 + `/agency/[slug]` 30개 자동 생성
- **2026-04-02**: 기존 블로그 글 확장 방식 채택 — 신규 색인 요청 부담 줄이기 위해 기존 URL에 콘텐츠 추가
- **2026-04-02**: 한글 slug 폐기, 영문 slug 사용 결정 — Next.js 한글 라우팅 이슈

## Results & Outcomes

**콘텐츠 자산:**
- 블로그 글 9개 (8개 키워드 타겟 + 1개 경쟁사 비교)
- 프로그래매틱 페이지 80개 (검색 50 + 기관 30)
- 기존 입찰 상세 페이지 200개
- **총 360+ SEO 페이지**

**기술 인프라:**
- MDX + Next.js 블로그 시스템
- Schema.org 구조화 데이터 (Article + FAQPage + ItemList + BreadcrumbList)
- llms.txt / llms-full.txt (AEO)
- sitemap.xml 자동 업데이트
- deploy-web.sh 포트 자동화 (3000+8000)

**검색엔진 등록:**
- Google Search Console: 색인 요청 9개 완료
- Naver Webmaster: 사이트맵 3개 + 수집 요청 9개 완료
- PageSpeed: 94/95/100/92

**키워드 데이터:**
- Google Keyword Planner: 196개 관련 키워드 분석
- Naver Search Ad: 571개 관련 키워드 분석 (1,749개 총 데이터)
- 전략 문서 2개 저장 (`GovRFP/docs/`)

**색인 타임라인 (예상):**
- Google 색인: 1~3일
- Naver 수집: 3~7일
- 검색 노출: 1~2주
- 키워드 순위 안정화: 1~3개월

## Pending / Next Steps

- 1~2주 후 Google Search Console / Naver Webmaster 실적 데이터 확인
- 잘 나오는 키워드 강화, 안 나오는 글 수정
- 네이버 공식 블로그 개설 (백링크용)
- 추가 블로그 글 (월 2~4개): 나라장터 쇼핑몰, 정부지원금 신청, 적격심사 점수 계산 등
- 프로그래매틱 페이지 "0건" 문제 해결 (DB 검색 쿼리 개선)
- 기존 한글 slug 블로그들 영문으로 마이그레이션

## Related

- [[projects/mybidwise]]
- [[tech/seo-strategy]]
- [[tech/aeo-strategy]]
- [[business/keyword-research]]

## Sources

- [2026-03-24](raw/discord/mybidwise-marketing/2026-03-24.md)
- [2026-03-25](raw/discord/mybidwise-marketing/2026-03-25.md)
- [2026-03-26](raw/discord/mybidwise-marketing/2026-03-26.md)
- [2026-03-27](raw/discord/mybidwise-marketing/2026-03-27.md)
- [2026-04-02](raw/discord/mybidwise-marketing/2026-04-02.md)
