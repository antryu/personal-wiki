---
date: 2026-04-28
status: idea-stage / awaiting-validation
type: 신사업-검토
domain: e-commerce·도매유통·B2B SaaS
trigger: 형(MCD 도매유통)이 PlayAuto+SmartPD 대체 요청
priority: pending Andrew decision
owner: Tasky (기조실장, y-Tower 9F 기획조정실)
secondary: Counsely (비서실장, 결재 자료 정리)
tags: [신사업, e-commerce, 도매유통, playauto, smartpd, ai-saas, tasky-owner]
---

# MCD — PlayAuto+SmartPD 대체 SaaS 검토

## 한 줄 요약

소규모 도매유통 셀러를 위한 **PlayAuto+SmartPD 대체 AI SaaS** — 5채널(쿠팡·네이버·G마켓·11번가·옥션) + 가격조정 + AI 4축(상세페이지·카테고리매핑·상품명SEO·매입sourcing). 월 ₩15~20만 (현 ₩50~80만의 1/3~1/4).

## 트리거 (2026-04-28 #buddy)

- Andrew의 *형* (지인). 회사 약어 **MCD**. 도매유통업 (전자제품·화장품·미용기구·일회용기).
- 첫 첨부: MCD 업무현황 및 AI도입 도면 — 8업무, 4개 AI-replaceable 표시.
- 핵심 메시지: "요즘 경기가 안좋아서 소규모 사업자는 PlayAuto/SmartPD 비용을 AI로 대체하고 싶은 상황이야"

## 시장 분석

### Demand structure
- isolated request 아닌 **structural trend** — 경기 침체 + 소규모 사업자 비용 압박
- PlayAuto·SmartPD 합 ₩50~80만/월 → 70%+ 절감 매력적
- Replacement market — *demand 검증 끝남*, 신규 도입 시장 아님

### TAM 추정
- 한국 도매유통업체 수만 ~ 수십만
- PlayAuto·SmartPD 사용자: 추정 수천~수만
- AI 대체 willingness segment: 추정 *수천 사업자* (경기 압박)

## 형의 stack (확인된 사실)

| 항목 | 내용 |
|------|------|
| 상품등록 | **PlayAuto** (월 ₩27.5~80만) |
| 단가조정 | **SmartPD** (월 ₩수십만) |
| 합산 | 월 ₩50~80만 추정 |
| 매입처 | 삼성·LG 외 — 인적 커뮤니케이션 + 거래명세표·세금계산서 |
| 판매 권한 | 온라인 판매 사이트 권한 보유 (단계 미확인) |
| 매입품목 | 전자제품·화장품·미용기구·일회용기 |

## Scope — 80/20 *최대한 대체*

PlayAuto 50+ 채널 풀 대체 비현실. 80% 시간 쓰는 핵심 5채널 + AI 차별화로 *기능적 대체*.

```
[Andrew 대체 솔루션]
  ├─ 상품 등록    →  쿠팡 Open API + 네이버 Commerce API
  │                 + G마켓·11번가·옥션 (Excel/Headless)
  ├─ 재고 동기화  →  같은 5채널 polling + 통합 DB
  ├─ 주문 수집    →  Webhook 또는 polling
  ├─ 가격 조정    →  네이버쇼핑·다나와 모니터링 + rule (SmartPD 대체)
  ├─ AI 4축       →  상세페이지·카테고리·SEO·매입sourcing
  └─ CS 통합      →  채널별 알림만 (full CS 보류)
```

### AI 4축 상세

| # | 기능 | Input | Output |
|---|------|-------|--------|
| 1 | 상세페이지 자동 생성 | 상품명 + 사진 | HTML 다단 레이아웃 + CTA |
| 2 | 카테고리 자동 매핑 | 상품명 | 마켓별 카테고리 코드 (RAG) |
| 3 | 상품명 SEO 최적화 | 원본명 | 채널별 SEO 변형 |
| 4 | 매입 sourcing | 형 매입가 데이터 | vendor 비교 + 발주 추천 |

## NOT 빌드 (솔로 한계)

- ❌ 위메프·티몬·인터파크·롯데온·SSG·종합몰 등 마이너 채널
- ❌ PlayAuto advanced (자동 광고 매칭·복잡 룰 엔진·통합 CS)
- ❌ SmartPD 다중 변수 가격 분석
- ❌ 24/7 고객지원

## 가격 + ROI

| 단계 | 고객 | 월 매출 | 연 매출 | 운영 |
|------|------|--------|--------|------|
| 베타 | 5명 (형 + 4명) | ₩75만 | ₩900만 | 솔로 |
| 마이크로 SaaS | 30명 | ₩450만 | ₩5,400만 | 솔로 |
| 본격 SaaS | 100명 | ₩1,500만 | ₩1.8억 | 솔로 한계 |
| 확장 | 200~500명 | ₩3,000~7,500만 | ₩3.6~9억 | 팀 빌드 필요 |

## Andrew 자산 재활용 ~50%

| 자산 | 활용 |
|------|------|
| `~/Thairon/AI_Marketing/marketing-automation` | 컨텐츠 엔진 + Supabase + BullMQ + Pexels (AI 4축 1·2·3) |
| `~/Thairon/espresso-bi-system` | supplier-management agent (4번 매입 sourcing) |
| `Hwp_automation` 패턴 | 큐·생성·삽입 구조 |

⚠ espresso-bi-system 서버 178.128.20.48 *현재 다운*. AI_Marketing 운영 상태 미확인.

## 시간

- MVP (5채널 + 가격조정 + AI 4축): **솔로 8~12주** / Buildy 위임 12~16주
- 베타 (형 1주 + Segment 4명 1주): +2주
- 합계: **2.5~4개월**

## ★★ 핵심 게이트 — Bid 패턴 방지

🔴 **5명 결제의향 검증 *전* 빌드 X**

이유: Bid(MyBidWise) 0 paid conversion 정확한 원인 = 5 returning user 인터뷰 0회. 같은 함정 반복 위험.

### 검증 path
- Week 1: 형 + segment 4명 인터뷰 (7개 질문)
- Week 2: 결제 의향 확인
- Decision Gate:
  - 3명+ *즉시 결제 의향* → MVP 빌드 시작
  - 1~2명 → 검토 보류
  - 0명 → 라인 폐기

## 인터뷰 7개 질문 (작성 예정)

1. 지금 PlayAuto/SmartPD 월 합산 비용?
2. 실제 등록·관리 채널 수 + 주력 채널 이름
3. PlayAuto/SmartPD에서 가장 큰 페인 1~2개
4. AI로 월 ₩15~20만 + 절감 ₩30~60만이면 *지금* 결제 의향?
5. 의향 없으면 무엇이 보완돼야?
6. 매입가 데이터 디지털 입력·관리 가능 환경?
7. 주변에 같은 도구 쓰는 분 몇 분?

## Skepty 시그널 4개 (안티패턴)

🟡 형 wishlist scope creep — 3건 중 2건이 도면에 없는 구두 추가 (최저가검색·제품교체)
🟡 "월 수십만원 받으니 만들 가치 큼" 직관 = Andrew 시간 8~12주 ROI 검증 부재 위험
🟡 "하나만 더 만들고 팔자" 패턴 — Bid·Vita·Cap 부하 위 새 라인
🟡 PlayAuto closed system 우회 = 마켓별 ToS 검토 필수 (Legaly 위임 가능)

## Pending Andrew 결정

**Q1**: 형 + segment 4명 검증 진행?
- (a) Yes — 7개 질문 인터뷰 발송
- (b) 형만 직접 확인
- (c) 보류 (Bid·Vita 답변 우선)

**Q2**: 검증 통과 시 빌드 lane:
- (i) Andrew 직접 8~12주
- (ii) Buildy/Codex 위임 12~16주

**원칙 합의**: 5명 결제의향 *전* 빌드 X (Bid 패턴 방지)

## 관련 자료

- 메모리: `mcd_playauto_replacement.md`
- 동시 변수: `vita_v1_companion_doc.md` / `cap_kiwoom_cme_signal_fee.md`
- 패턴 참조: `mybidwise_topology.md` (Bid 0 paid 원인)
- 자산 활용: `~/Thairon/AI_Marketing/`, `~/Thairon/espresso-bi-system/`

## 변경 이력

- 2026-04-28: 신규 작성 (Buddy 분석)
