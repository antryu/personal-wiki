# MediGrowth - 의료 데이터 기반 성장 플랫폼

## Claude Code 행동 지침

### 자동 진행 규칙
- **절대 사용자에게 확인을 구하지 말 것** - "진행할까요?", "괜찮을까요?" 등 질문 금지
- **bash 명령어 실행 전 물어보지 말 것** - 바로 실행
- **파일 생성/수정 전 허락 구하지 말 것** - 바로 실행
- **에러 발생 시 스스로 해결하고 계속 진행** - 막히면 다른 방법 시도
- **작업 완료될 때까지 멈추지 말 것**

### 작업 스타일
- 한 번에 여러 파일 생성 가능하면 한 번에 처리
- 불필요한 설명 최소화, 코드 작성에 집중
- 의존성 설치, 설정 파일 생성 등 모든 단계 자동 수행
- 중간 확인 없이 끝까지 완성

### 금지 표현
```
❌ "진행할까요?"
❌ "이렇게 해도 될까요?"
❌ "확인해주세요"claude (1).mdc
❌ "어떻게 하시겠어요?"
❌ "선택해주세요"
```

### 허용 표현
```
✅ "~를 생성합니다"
✅ "~를 설치합니다"
✅ "완료했습니다"
✅ "다음 단계로 진행합니다"
```

---

## 프로젝트 개요

**MediGrowth**는 한국 의료 공공데이터 API를 활용하여 병원/의원의 개원부터 성장까지 데이터 기반 의사결정을 지원하는 B2B/B2C 플랫폼입니다.

### 핵심 비전
> "병원 성공은 마케팅 업체가 아닌, 데이터 기반 시스템이 결정한다"

### 타겟 고객
1. **B2B Primary**: 개원 예정 의사, 운영 중인 병원/의원
2. **B2B Secondary**: 제약사, 의료기기 업체, 보험사
3. **B2C**: 진료비 비교가 필요한 일반 환자

---

## 핵심 서비스 모듈

### 1. 진료권/입지 분석 (개원 전)
- 지역별 경쟁 병원 밀도 분석
- 인구 대비 의원 수요/공급 분석
- 유동인구, 상권 데이터 연계
- 개원 지수 산출 (AI 스코어링)
- 유사 특성 지역 추천

### 2. 진료비 비교 플랫폼 (B2C)
- 비급여 진료비 기관별 비교
- 예상 총 진료비 산출
- 병원 평가등급 연계
- 실손보험 예상비용 연동

### 3. 마케팅 시스템화 (운영 중)
- SNS 상위노출 전략 수립
- 네이버 플레이스/블로그 최적화
- 키워드 순위 추적
- 6개월 주기 진료권 변화 모니터링

### 4. 병원 경쟁력 벤치마킹
- 동일 규모/진료과 대비 포지셔닝
- 의료질 평가등급 추이
- 의료자원(인력/장비) 비교

### 5. 리브랜딩 데이터 지원
- 브랜드 재정립 시 데이터 기반 분석
- 시장 포지셔닝 전략 수립

---

## 활용 공공데이터 API

### 건강보험심사평가원 (HIRA) - 핵심
| API | 용도 | 갱신주기 |
|-----|------|---------|
| 병원정보서비스 | 병원 위치, 진료과목, 인력, 장비 | 분기 |
| 약국정보서비스 | 약국 위치, 운영시간 | 분기 |
| 비급여진료비정보 | 기관별 비급여 가격 | 분기 |
| 병원평가정보 | 의료질 평가등급 (1~5등급) | 연간 |
| 질병정보서비스 | 지역/연령/성별 질병 통계 | 연간 |
| 약가기준정보 | 의약품 상한가, 성분 | 월간 |
| 의료자원정보 | 인력/시설/장비 현황 | 분기 |

### 국민건강보험공단 (NHIS)
| API | 용도 |
|-----|------|
| 검진기관정보 | 건강검진 기관 조회 |
| 장기요양기관검색 | 요양시설 정보 |

### 식품의약품안전처 (MFDS)
| API | 용도 |
|-----|------|
| DUR 품목정보 | 의약품 안전정보 |
| 의약품 낱알식별 | 알약 식별 |
| 의약품 허가정보 | 품목 상세정보 |

### 국립중앙의료원
| API | 용도 | 특징 |
|-----|------|------|
| 응급실 실시간 병상 | 가용 병상 현황 | **실시간** |
| 중증질환 수용정보 | 심장/뇌졸중/외상 | **실시간** |

### 기타 연계 API
- 통계청: 인구통계, 주민등록인구
- 행안부: 상권정보, 유동인구
- 국토부: 건축물대장, 신축건물

---

## 기술 스택

### Frontend
```
- Next.js 15 (App Router)
- TypeScript
- TailwindCSS + CSS Variables
- Radix UI (Primitives)
- Recharts (데이터 시각화)
- React Query v5 (서버 상태)
- Zustand (클라이언트 상태)
```

### Backend
```
- Supabase (PostgreSQL + Auth + Storage + Edge Functions)
- 또는 별도 백엔드 필요시: FastAPI (Python)
```

### Maps
```
- Kakao Maps API 또는 Naver Maps API
- 행정경계 GeoJSON (통계청)
- Turf.js (지리 연산)
```

### Data Pipeline
```
- 공공데이터포털 API 연동
- 스케줄링: Supabase Edge Functions + pg_cron
- 캐싱: Redis (선택)
```

---

## 디자인 시스템

### 브랜드 컬러
```css
/* Primary - Teal (신뢰 + 성장) */
--primary-500: #0D9488;
--primary-600: #0F766E;

/* Secondary - Slate Blue (전문성) */
--secondary-700: #1E293B;

/* Accent - Amber (성과 강조) */
--accent-500: #F59E0B;

/* Semantic */
--success-500: #10B981;  /* 성장 */
--error-500: #EF4444;    /* 하락 */
```

### 타이포그래피
```css
--font-sans: 'Pretendard Variable', sans-serif;
--font-mono: 'JetBrains Mono', monospace;  /* 데이터/숫자 */
```

### 핵심 원칙
1. **Data First**: 차트와 숫자가 주인공, UI는 조연
2. **Progressive Disclosure**: 요약 → 상세 → 원본
3. **Consistent Patterns**: 동일 기능 = 동일 UI
4. **Mobile Responsive**: 모바일에서도 핵심 데이터 확인 가능

### 참고 파일
- `design-system-medical-pro.md`: 전체 디자인 시스템 스펙

---

## 프로젝트 구조

```
medigrowth/
├── src/
│   ├── app/
│   │   ├── (auth)/              # 인증 (로그인, 회원가입)
│   │   ├── (dashboard)/         # 대시보드 (보호된 라우트)
│   │   │   ├── layout.tsx
│   │   │   ├── page.tsx         # 대시보드 홈
│   │   │   ├── analysis/        # 진료권/입지 분석
│   │   │   ├── compare/         # 진료비 비교
│   │   │   ├── marketing/       # 마케팅 대시보드
│   │   │   ├── reports/         # 리포트
│   │   │   └── settings/        # 설정
│   │   ├── (marketing)/         # 랜딩페이지 (공개)
│   │   └── api/                 # API 라우트
│   │
│   ├── components/
│   │   ├── ui/                  # 기본 UI (Button, Input, Card...)
│   │   ├── data-viz/            # 차트, KPI 카드, 게이지
│   │   ├── maps/                # 지도 컴포넌트
│   │   ├── layout/              # Sidebar, Header, Shell
│   │   └── features/            # 기능별 복합 컴포넌트
│   │
│   ├── lib/
│   │   ├── supabase/            # Supabase 클라이언트
│   │   ├── api/                 # 공공데이터 API 래퍼
│   │   └── utils/               # 유틸리티
│   │
│   ├── hooks/                   # 커스텀 훅
│   ├── stores/                  # Zustand 스토어
│   ├── types/                   # TypeScript 타입
│   └── styles/
│       └── globals.css          # CSS 변수, 기본 스타일
│
├── public/
│   ├── geojson/                 # 행정경계 데이터
│   └── images/
│
└── supabase/
    ├── migrations/              # DB 마이그레이션
    └── functions/               # Edge Functions
```

---

## 데이터베이스 스키마 (핵심)

```sql
-- 사용자 프로필
profiles (id, email, full_name, company_name, role, subscription_tier)

-- 병원/사업장
businesses (id, user_id, name, type, specialty, address, lat, lng, region_code, status)

-- 분석 리포트
analysis_reports (id, business_id, type, data, scores, analyzed_at)

-- 마케팅 지표
marketing_metrics (id, business_id, date, naver_place_*, blog_*, keyword_rankings)

-- 진료비 비교 캐시
medical_fees_cache (id, institution_code, item_code, price, updated_at)

-- 알림
notifications (id, user_id, type, title, message, is_read)
```

---

## 개발 가이드라인

### 코드 스타일
- TypeScript strict 모드 사용
- 컴포넌트: PascalCase, 파일명: kebab-case
- 훅: use* prefix
- 유틸리티: camelCase

### 컴포넌트 작성 규칙
```tsx
// 1. Props 타입 정의
interface StatCardProps {
  label: string;
  value: number;
  change?: number;
  trend?: 'up' | 'down' | 'neutral';
}

// 2. 기본값은 destructuring에서
export function StatCard({ 
  label, 
  value, 
  change, 
  trend = 'neutral' 
}: StatCardProps) {
  // 3. 훅은 최상단에
  // 4. 조건부 렌더링은 early return
  // 5. cn() 유틸리티로 클래스 조합
}
```

### API 호출 패턴
```tsx
// React Query 사용
const { data, isLoading, error } = useQuery({
  queryKey: ['analysis', businessId],
  queryFn: () => fetchAnalysis(businessId),
  staleTime: 5 * 60 * 1000, // 5분
});
```

### 상태 관리 원칙
- **서버 상태**: React Query (캐싱, 동기화)
- **클라이언트 상태**: Zustand (UI 상태)
- **폼 상태**: React Hook Form + Zod

---

## 주요 기능별 구현 우선순위

### Phase 1: MVP (4주)
1. [ ] 프로젝트 설정 (Next.js, Tailwind, Supabase)
2. [ ] 디자인 시스템 구현 (UI 컴포넌트)
3. [ ] 인증 (Supabase Auth)
4. [ ] 대시보드 레이아웃
5. [ ] HIRA API 연동 (병원정보, 비급여진료비)
6. [ ] 진료비 비교 기본 기능
7. [ ] 랜딩 페이지

### Phase 2: Core Features (4주)
1. [ ] 지도 컴포넌트 (Kakao Maps)
2. [ ] 진료권 분석 페이지
3. [ ] 경쟁 병원 분석
4. [ ] KPI 대시보드
5. [ ] 리포트 생성/PDF 다운로드

### Phase 3: Advanced (4주)
1. [ ] 마케팅 성과 트래킹
2. [ ] 키워드 순위 분석
3. [ ] 알림 시스템
4. [ ] 정기 분석 스케줄링
5. [ ] 결제 연동

---

## 환경 변수

```env
# Supabase
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
SUPABASE_SERVICE_ROLE_KEY=

# 공공데이터포털
DATA_GO_KR_API_KEY=

# 지도
NEXT_PUBLIC_KAKAO_MAP_KEY=
# 또는
NEXT_PUBLIC_NAVER_MAP_CLIENT_ID=

# 기타
NEXT_PUBLIC_APP_URL=
```

---

## 경쟁사 참고

### 웨어히어 (bondam.co.kr/wherehere)
- 강점: 개원 입지 분석, 진료권 분석, AI 개원지수
- 약점: 일회성 분석, 마케팅 연계 부재, 운영 중 지원 미흡

### 우리의 차별점
1. **개원 + 운영 + 마케팅** 통합 플랫폼
2. **6개월 주기** 정기 진료권 모니터링
3. **SNS 상위노출** 마케팅 시스템화
4. **진료비 비교** B2C 서비스로 트래픽 확보
5. 병원 외 **소상공인 상권분석**으로 확장 가능

---

## 자주 사용하는 명령어

```bash
# 개발 서버
npm run dev

# 빌드
npm run build

# 타입 체크
npm run type-check

# 린트
npm run lint

# Supabase 로컬
npx supabase start
npx supabase db push
npx supabase functions serve
```

---

## 공공데이터 API 연동

### 필수 참조 문서
- `api-integration-guide.md` - **전체 API 연동 코드 및 가이드**

### API 키 발급
```
1. https://www.data.go.kr 가입
2. 원하는 API 검색 → "활용신청"
3. 대부분 자동승인 → 즉시 API 키 발급
```

### 환경변수
```env
# 공공데이터포털 통합 키
DATA_GO_KR_API_KEY=your_encoded_service_key

# 지도
NEXT_PUBLIC_KAKAO_MAP_KEY=your_kakao_key
```

### 핵심 API 엔드포인트

#### HIRA (건강보험심사평가원)
```typescript
// 병원정보
http://apis.data.go.kr/B551182/hospInfoServicev2/getHospBasisList

// 비급여진료비
http://apis.data.go.kr/B551182/nonPaymentDamtInfoService/getNonPaymentDamtList

// 병원평가정보
http://apis.data.go.kr/B551182/MdsrtSttusInfoService2/getMdSttusJntpsList
```

#### NHIS (국민건강보험공단)
```typescript
// 검진기관
http://apis.data.go.kr/B550928/searchCheckupInstService/getCheckupInstList

// 장기요양기관
http://apis.data.go.kr/B550928/getLtcInsttInfoService/getLtcInsttSeachList
```

#### MFDS (식품의약품안전처)
```typescript
// DUR 의약품정보
http://apis.data.go.kr/1471000/DrbEasyDrugInfoService/getDrbEasyDrugList

// 병용금기
http://apis.data.go.kr/1471000/DURPrdlstInfoService03/getUsjntTabooInfoList03
```

#### 응급의료 (실시간)
```typescript
// 응급실 목록
http://apis.data.go.kr/B552657/ErmctInfoInqireService/getEgytListInfoInqire

// **실시간** 가용병상
http://apis.data.go.kr/B552657/ErmctInfoInqireService/getEmrrmRltmUsefulSckbdInfoInqire
```

### API 클라이언트 구조
```
src/lib/api/
├── client.ts          # 기본 HTTP 클라이언트 (XML 파싱 포함)
├── hira/              # 심평원 API
│   ├── hospital.ts    # 병원정보
│   ├── medical-fee.ts # 비급여진료비
│   └── codes.ts       # 코드표 (진료과목, 종별 등)
├── nhis/              # 건보공단 API
├── mfds/              # 식약처 API
├── emergency/         # 응급의료 API
└── index.ts           # 통합 export
```

### 데이터 캐싱 전략
- **정적 데이터** (병원정보, 비급여): 주 1회 동기화 → Supabase 테이블 캐시
- **준실시간** (검진기관, 요양기관): 일 1회 동기화
- **실시간** (응급실): 캐시 없이 직접 호출, React Query로 30초 갱신

### API 호출 제한
| API | 일일 제한 | 운영계정 |
|-----|----------|---------|
| HIRA | 1,000건 | 최대 100,000건 |
| NHIS | 1,000건 | 증량 가능 |
| MFDS | 1,000건 | 증량 가능 |
| 응급의료 | 1,000건 | 증량 가능 |

**⚠️ 캐싱 필수**: 직접 호출 시 제한 초과 위험

---

## 문서 참조

- `api-integration-guide.md` - **공공데이터 API 연동 전체 코드**
- `design-system-medical-pro.md` - 전체 디자인 시스템
- `claude-code-prompt.md` - 상세 개발 명세
- `supabase/migrations/` - DB 스키마

---

## 주의사항

1. **API 호출 제한**: 공공데이터 API는 일 1,000~10,000건 제한, 캐싱 필수
2. **개인정보**: 모든 공개 API는 익명화/집계 데이터만 제공, 개인정보 처리 불가
3. **라이선스**: KDCA 감염병 API는 비상업적 전용 (KOGL Type 4)
4. **요양기관코드**: HIRA API의 기관코드는 암호화되어 있음, 매핑 테이블 필요

---

## 연락처

프로젝트 관련 문의: [프로젝트 오너 정보]
