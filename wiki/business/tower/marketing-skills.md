# 07 마케팅·CX 본부 — 에이전트 스킬 매핑

> _y Tower 마케팅·CX 본부 에이전트들이 사용하는 35개 마케팅 스킬 매핑.
> Source: [coreyhaines31/marketingskills](https://github.com/coreyhaines31/marketingskills) (19.5K stars)
> Last updated: 2026-04-08

## 에이전트별 스킬 배정

### Buzzy (콘텐츠/바이럴) — Claude Haiku
| 스킬 | 설명 |
|------|------|
| copywriting | 세일즈 카피, 헤드라인, CTA 작성 |
| copy-editing | 카피 교정 및 톤 최적화 |
| content-strategy | 콘텐츠 전략 수립 및 캘린더 관리 |
| social-content | SNS 포스트 작성 및 최적화 |
| ad-creative | 광고 크리에이티브 기획 |
| cold-email | 아웃바운드 이메일 작성 |
| email-sequence | 이메일 시퀀스 설계 |
| lead-magnets | 리드 마그넷 기획 및 제작 |
| marketing-ideas | 마케팅 아이디어 브레인스토밍 |
| marketing-psychology | 심리학 기반 마케팅 전략 |
| launch-strategy | 제품/기능 런칭 전략 |
| community-marketing | 커뮤니티 마케팅 전략 |

### Searchy (SEO/검색) — Gemini Flash
| 스킬 | 설명 |
|------|------|
| seo-audit | 사이트 SEO 종합 감사 |
| ai-seo | AI 검색 최적화 (SGE, Perplexity 등) |
| programmatic-seo | 프로그래매틱 SEO 페이지 생성 |
| schema-markup | 구조화 데이터 마크업 |
| site-architecture | 사이트 구조 및 내부 링크 최적화 |
| competitor-alternatives | 경쟁사 대비 포지셔닝 페이지 |

### Evaly (분석/평가) — Claude Haiku
| 스킬 | 설명 |
|------|------|
| page-cro | 페이지 전환율 최적화 분석 |
| signup-flow-cro | 가입 플로우 전환율 최적화 |
| onboarding-cro | 온보딩 전환율 최적화 |
| form-cro | 폼 전환율 최적화 |
| popup-cro | 팝업/모달 전환율 최적화 |
| paywall-upgrade-cro | 유료 전환 최적화 |
| ab-test-setup | A/B 테스트 설계 및 실행 |
| analytics-tracking | 분석 추적 설정 및 이벤트 설계 |
| customer-research | 고객 리서치 및 인사이트 도출 |
| churn-prevention | 이탈 방지 전략 |

### Growthy (성장/수익) — Qwen3 32B
| 스킬 | 설명 |
|------|------|
| pricing-strategy | 가격 전략 수립 |
| referral-program | 레퍼럴 프로그램 설계 |
| free-tool-strategy | 무료 도구 전략 (리드 획득) |
| paid-ads | 유료 광고 전략 및 최적화 |
| revops | 수익 운영 (Revenue Operations) |
| sales-enablement | 영업 지원 콘텐츠 및 전략 |
| product-marketing-context | 제품 마케팅 컨텍스트 관리 |

## 스킬 사용 방법

### OpenClaw Discord 봇에서
```
/page-cro https://mybidwise.com
/seo-audit mybidwise.com
/copywriting 우리 랜딩페이지 헤드라인 개선해줘
/pricing-strategy SaaS 가격 모델 리뷰
```

### 에이전트 자동 매칭
스킬의 `description` 필드로 자동 매칭됩니다. 예를 들어 "전환율이 낮아", "SEO 개선", "가격 정하기" 같은 자연어 요청이 들어오면 OpenClaw가 적절한 스킬을 자동 선택합니다.

### 스킬 파일 위치
- **OpenClaw 봇**: `~/.openclaw/workspace/.openclaw/skills/`
- **personal-wiki 레포**: `skills/` (이 레포)

## 스킬 전체 목록 (35개)

| # | 스킬 ID | 카테고리 | 담당 에이전트 |
|---|---------|---------|-------------|
| 1 | ab-test-setup | CRO | Evaly |
| 2 | ad-creative | 콘텐츠 | Buzzy |
| 3 | ai-seo | SEO | Searchy |
| 4 | analytics-tracking | 분석 | Evaly |
| 5 | churn-prevention | 분석 | Evaly |
| 6 | cold-email | 콘텐츠 | Buzzy |
| 7 | community-marketing | 콘텐츠 | Buzzy |
| 8 | competitor-alternatives | SEO | Searchy |
| 9 | content-strategy | 콘텐츠 | Buzzy |
| 10 | copy-editing | 콘텐츠 | Buzzy |
| 11 | copywriting | 콘텐츠 | Buzzy |
| 12 | customer-research | 분석 | Evaly |
| 13 | email-sequence | 콘텐츠 | Buzzy |
| 14 | form-cro | CRO | Evaly |
| 15 | free-tool-strategy | 성장 | Growthy |
| 16 | launch-strategy | 콘텐츠 | Buzzy |
| 17 | lead-magnets | 콘텐츠 | Buzzy |
| 18 | marketing-ideas | 콘텐츠 | Buzzy |
| 19 | marketing-psychology | 콘텐츠 | Buzzy |
| 20 | onboarding-cro | CRO | Evaly |
| 21 | page-cro | CRO | Evaly |
| 22 | paid-ads | 성장 | Growthy |
| 23 | paywall-upgrade-cro | CRO | Evaly |
| 24 | popup-cro | CRO | Evaly |
| 25 | pricing-strategy | 성장 | Growthy |
| 26 | product-marketing-context | 성장 | Growthy |
| 27 | programmatic-seo | SEO | Searchy |
| 28 | referral-program | 성장 | Growthy |
| 29 | revops | 성장 | Growthy |
| 30 | sales-enablement | 성장 | Growthy |
| 31 | schema-markup | SEO | Searchy |
| 32 | seo-audit | SEO | Searchy |
| 33 | signup-flow-cro | CRO | Evaly |
| 34 | site-architecture | SEO | Searchy |
| 35 | social-content | 콘텐츠 | Buzzy |

## Related

- [[business/tower/y-tower]] — _y Tower 전체 조직 구조
- [[business/strategy/y-strategy]] — _y Holdings 전략
- [[channels/mybidwise]] — MyBidWise SaaS (스킬 적용 대상)
