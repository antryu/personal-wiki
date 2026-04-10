# MyBidWise — 서비스 운영 및 개발 로그

> 정부 입찰/지원사업 매칭 플랫폼 MyBidWise의 인프라 운영, 버그 수정, 기능 개발, 사용자 분석에 대한 종합 기록. 2026년 3월 초~중순 집중 점검 및 개선 작업 진행.
> Last updated: 2026-04-05

## Overview

MyBidWise(mybidwise.com)는 나라장터 입찰공고, 기업지원사업, R&D, K-Startup, 보조금24 등 공공데이터를 수집·매칭하여 구독자에게 제공하는 SaaS 플랫폼이다. 기술 스택은 Next.js + nginx(Ubuntu) + Supabase + Docker 컨테이너 4개(web, redis, ai, email) 구성이며, 이메일은 Resend(주간 뉴스레터/온보딩)와 SendGrid(일일 다이제스트, 현재 중단)를 병행 사용했다.

2026년 3월 초부터 중순까지 서버 점검, 보안 강화, 데이터 동기화 장애 대응, 이메일 시스템 정비, i18n(한영 전환), 입찰 인텔리전스 시스템 구축, Supabase 용량 관리 등 다수의 운영·개발 작업이 이루어졌다.

## Key Topics

### 서버 상태 및 인프라 점검
- 서버: nginx/1.18.0(Ubuntu) + Next.js, TTFB 340~400ms, CDN 캐시 적중률 양호 (raw/discord/mybidwise/2026-03-03.md)
- SSL 인증서: Let's Encrypt, 2026-04-06 만료 → `certbot.timer` 자동갱신 활성화 확인 (raw/discord/mybidwise/2026-03-05.md)
- 컨테이너 4개(web, redis, ai, email) 안정 가동, 서버 uptime 120일+ (raw/discord/mybidwise/2026-03-07.md)
- 디스크 48~55%, 메모리 29~63%, 로드 0.00~0.08로 여유 (raw/discord/mybidwise/2026-03-06.md)

### 보안 헤더 추가
- **발견**: X-Frame-Options, X-Content-Type-Options, CSP, Referrer-Policy, Permissions-Policy 전부 미적용 (raw/discord/mybidwise/2026-03-03.md)
- **해결** (3/7): nginx에 6개 보안 헤더 추가 — HSTS(includeSubDomains), X-Frame-Options(SAMEORIGIN), X-Content-Type-Options(nosniff), Referrer-Policy, Permissions-Policy, CSP(GA4+Supabase+폰트 허용). nginx `.backup` 파일 중복 로딩 경고 12개도 정리 (raw/discord/mybidwise/2026-03-07.md)

### 피드백 시스템 RLS 버그
- **증상**: `/admin/feedback` 페이지에서 피드백 0건으로 표시. 사용자가 보낸 피드백이 보이지 않음 (raw/discord/mybidwise/2026-03-05.md)
- **원인**: Supabase RLS(Row Level Security)에서 INSERT 정책은 있었지만 SELECT 정책이 없어 조회 차단
- **해결**: `CREATE POLICY "Anyone can read feedback" ON public.user_feedback FOR SELECT USING (true);` 실행 → 즉시 해결
- 실제 유저 피드백은 0건이었고, Andrew 본인 테스트 1건만 존재 (raw/discord/mybidwise/2026-03-05.md)

### R&D 공고 동기화 장애 (3일간)
- **증상**: R&D 동기화 3/4부터 3일 연속 실패 (raw/discord/mybidwise/2026-03-06.md)
- **원인**: 과기부 공공데이터 API(`apis.data.go.kr`) 서버 자체 502 Bad Gateway — 우리 코드 문제 아님
- **해결**: 3/6 저녁 API 복구 확인 후 수동 동기화 실행 → 3,939건 중 100건 업데이트 성공
- **재발 방지** (3/7): Python 스크립트에 API 호출 3회 재시도(1분→2분→3분 간격) + Shell 크론에 전체 실패 시 6시간 후 자동 재시도 로직 추가 (raw/discord/mybidwise/2026-03-07.md)

### 일일 이메일 다이제스트 중단
- **증상**: SendGrid API key 만료로 2/21부터 일일 키워드 다이제스트 전면 발송 실패. 매일 42~44명에게 시도하나 전부 `Unauthorized` 에러 (raw/discord/mybidwise/2026-03-06.md)
- **영향**: 주간 300건+ 실패, 성공률 12.5% (Resend 경유 주간 뉴스레터만 성공)
- **대응**: PR #2(SendGrid→Resend 마이그레이션) 생성했으나, Andrew 결정으로 **일일 다이제스트 자체를 중지** (`ENABLE_SCHEDULER=false`). GitHub 이슈 #1 클로즈 (raw/discord/mybidwise/2026-03-09.md)
- **유지 중인 이메일**: 주간 뉴스레터(Resend, 매주 월 09:00), 온보딩 환영 이메일(Resend) (raw/discord/mybidwise/2026-03-08.md)

### Google Analytics 설치
- 기존에 GA 태그 없이 Supabase `user_sessions` 테이블로만 자체 트래킹 중이었음 (raw/discord/mybidwise/2026-03-07.md)
- **GA4 측정 ID**: `G-TSW1Z7GZCV` — 3/7 설치 및 배포 완료
- Search Console ↔ GA4 연동은 Andrew가 직접 Google 계정 로그인하여 설정 필요 (raw/discord/mybidwise/2026-03-07.md)

### i18n (한영 전환) 기능
- 랜딩페이지가 100% 한글만 지원 → 영문 지원 추가 결정 (raw/discord/mybidwise/2026-03-12.md)
- **범위**: 랜딩페이지, 회원가입/로그인, 온보딩 이메일, 헤더 KO/EN 토글. 공고 데이터는 한글 유지
- **PR #4**: `translations.ts`(498줄), `LanguageContext.tsx`(자동 감지+localStorage), `page.tsx`, `layout.tsx` — 총 +686줄
- **배포 이슈**: 첫 배포 시 Docker 빌드 캐시 문제로 코드 미반영 → `--no-cache` 재빌드로 해결 (raw/discord/mybidwise/2026-03-12.md)

### 입찰 인텔리전스 시스템
- Forerunner VC의 Vertical AI 컴파운딩 플레이북에서 영감 — "소비자 앱에서 쌓이는 인텔리전스가 진짜 자산, API로 열면 인프라가 된다" (raw/discord/mybidwise/2026-03-09.md)
- **DB 테이블**: `bid_intelligence_daily` (JSONB 기반)
- **수집 항목**: 소스별 신규 공고 수, 예산 분석, Top 30 키워드 추출, 전일 대비 트렌드, 유저 행동
- **크론**: 매일 08:00 KST (리포트 08:30 전 준비)
- **백필**: 3/5~3/9 5일치 데이터 소급 수집 완료 (raw/discord/mybidwise/2026-03-10.md)

### Supabase 용량 초과
- **증상**: Free tier 500MB 한도 초과(0.702GB) → 3/7 이후 새 데이터 INSERT 불가 → 뉴스/공고 전부 5일 전에서 멈춤 (raw/discord/mybidwise/2026-03-12.md)
- **해결**: 마감 지난 입찰공고 삭제(120K→33K rows, 73% 감축) + VACUUM FULL 실행 → 0.702GB → **0.3GB**로 감소
- **자동 정리 크론 추가**: 매일 10:30 KST — 마감 입찰 자동 삭제 + 30일 지난 뉴스 삭제
- **주의**: `kstartup_announcements` 27,762건으로 가장 큰 테이블, 정리 검토 필요 (raw/discord/mybidwise/2026-03-14.md)

### 일일 리포트 고도화
- 기본 유저 트래픽 리포트에 단계적으로 항목 추가 (raw/discord/mybidwise/2026-03-12.md):
  1. **입찰 인텔리전스** — 신규 공고 수, 예산, 키워드 트렌드, 마감 임박
  2. **Supabase DB 용량** — 테이블별 행 수, 50K건 초과 시 경고
  3. **Paddle 결제 체크** — 신규 결제 시 금액/플랜/고객 알림

### 크론잡 전체 체계

**서버 크론 (12개)**:
| 시간(UTC) | 작업 | 비고 |
|---|---|---|
| 01:00 | Supabase 백업 | |
| 01:30 | 마감 공고 자동 정리 | 3/12 추가 |
| 02:00 | 입찰공고 동기화 | |
| 03:00 | 기업지원사업 | IndentationError 3/7 수정 |
| 04:00 | R&D | 재시도 로직 3/7 추가 |
| 05:00 | K-Startup | |
| 06:00 | 보조금24 | |
| 07:00 | 뉴스 수집 | |
| 08:00 | 공동주택 | |
| 10:00 | 입찰 인텔리전스 | 3/10 추가 |
| 10:00, 13:00 | 헬스체크 | |

**OpenClaw 크론 (5개)**:
| 시간(KST) | 작업 |
|---|---|
| 08:30 | 통합 일일 리포트 → #mybidwise |
| 10:00/16:00 | GitHub 이슈 점검 |
| 19:00/22:00 | 동기화 검증 |
| 월 09:00 | 주간 뉴스레터 (Resend) |

### 사용자 분석 (3/3~3/15)
- **총 구독자**: 44명 → 50명 (+6명)
- **활성 유저**: 주간 7~10명
- **헤비 유저**: `golf@mwd.kr`(매일 방문, 주 58분 체류), `aalsua@naver.com`(꾸준한 충성유저), `tric007@hanmail.net`(크레딧 실사용자)
- **신규 가입**: `youarefr@gmail.com`(3/6), `rickyjoo@aiinad.com`(3/7, AI회사 추정), `hyungsoo@rev-med.co.kr`(3/11)
- **결제**: 1건 — Starter 5크레딧 ₩9,900 (seongpilryu@gmail.com, 2/22)
- **리퍼럴**: 윤태훈이 EBS 지인에게 사이트 소개 예정 (3/12 시점)
- **SEO 이슈**: CSR 의존도 높아 검색 색인 12페이지 수준. SSR/SSG 전환 권장 (raw/discord/mybidwise/2026-03-03.md)

## Key Decisions

- **2026-03-05**: 피드백 RLS SELECT 정책을 `USING (true)`로 개방 (로그인 여부 무관 조회 가능)
- **2026-03-05**: 랜딩페이지 업데이트 배너 비활성화 (`announcements.is_active = false`)
- **2026-03-07**: R&D 동기화에 재시도 로직 추가 (API 3회 + 크론 6시간 후 재시도)
- **2026-03-07**: Google Analytics GA4 설치 결정 (`G-TSW1Z7GZCV`)
- **2026-03-07**: nginx 보안 헤더 6종 추가, SSL 자동갱신 확인
- **2026-03-07**: 일일 이메일 SendGrid→Resend 마이그레이션 GitHub 이슈 #1 등록
- **2026-03-09**: **일일 다이제스트 중지 결정** — 마이그레이션 대신 기능 자체를 끔
- **2026-03-09**: 입찰 인텔리전스 일일 수집 시스템 구축 (Forerunner VC 인사이트 기반)
- **2026-03-12**: i18n(한영 전환) 기능 추가 — 랜딩+회원가입+이메일 범위
- **2026-03-12**: Supabase 용량 초과 대응 — 마감 공고 자동 삭제 크론 추가
- **2026-03-12**: 일일 리포트에 인텔리전스 + DB 용량 + Paddle 결제 통합

## Results & Outcomes

- 보안 헤더 6종 적용으로 클릭재킹/MIME 스니핑 취약점 해소
- R&D 동기화 장애 해결 + 재시도 로직으로 향후 공공API 불안정 대응력 확보
- Supabase 용량 0.702GB → 0.3GB 감축 (Free tier 500MB 내 안정화)
- i18n 배포로 영문 사용자 접근성 확보
- 입찰 인텔리전스 레이어 구축 — 향후 API/SDK 인프라화 기반
- 통합 일일 리포트(트래픽+인텔리전스+DB+결제) 자동화
- GitHub Issues 기반 운영 프로세스 도입 (하루 2회 자동 점검)

## 미해결 과제

- **SSR/SSG 전환** — CSR 의존으로 SEO 사실상 무력화 상태. 핵심 과제
- **nginx 버전 업데이트** — 1.18.0은 2020년판
- **Search Console ↔ GA4 연동** — Andrew 직접 설정 필요
- **kstartup_announcements 정리** — 27,762건으로 DB 용량 최대 점유
- **키워드 알림 이메일** — 실시간/하루 2회 매칭 알림 (수익화 핵심 기능, 미구현)
- **에러 모니터링** — Sentry 등 미도입
- **GitHub 이슈 점검 크론 불안정** — 레포 접근 권한 에러 발생 (3/15)

## Related

- [[projects/mybidwise]]
- [[tech/supabase]]
- [[infra/server-management]]
- [[business/vertical-ai-compounding]]
- [[tech/nextjs-ssr-ssg]]

## Sources

- [2026-03-03](raw/discord/mybidwise/2026-03-03.md) — 최초 서버 점검, 보안 헤더 이슈 발견
- [2026-03-05](raw/discord/mybidwise/2026-03-05.md) — 피드백 RLS 버그 수정, SSL 만료 경고
- [2026-03-06](raw/discord/mybidwise/2026-03-06.md) — R&D 동기화 장애, SendGrid 죽음 발견, 서비스 개선 제안
- [2026-03-07](raw/discord/mybidwise/2026-03-07.md) — 재시도 로직, GA4 설치, 보안 헤더 적용, business_sync 수정
- [2026-03-08](raw/discord/mybidwise/2026-03-08.md) — Resend 발송 이력 확인, PR #2 생성
- [2026-03-09](raw/discord/mybidwise/2026-03-09.md) — 일일 다이제스트 중지 결정, 입찰 인텔리전스 구상
- [2026-03-10](raw/discord/mybidwise/2026-03-10.md) — 인텔리전스 테이블 생성, 크론 등록, 백필 완료
- [2026-03-11](raw/discord/mybidwise/2026-03-11.md) — 전 소스 정상 가동 확인
- [2026-03-12](raw/discord/mybidwise/2026-03-12.md) — i18n 배포, Supabase 용량 초과 해결, 자동 정리 크론
- [2026-03-13](raw/discord/mybidwise/2026-03-13.md) — Paddle 결제 체크 리포트 추가
- [2026-03-14](raw/discord/mybidwise/2026-03-14.md) — 주간 분석 (세션 +40%, 체류 +69%)
- [2026-03-15](raw/discord/mybidwise/2026-03-15.md) — GitHub 레포 접근 이슈 발생
