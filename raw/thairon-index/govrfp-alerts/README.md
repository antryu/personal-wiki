# GovRFP Copilot

정부조달 과제 매칭 SaaS 플랫폼 - 정부조달 공고와 기업을 자동으로 매칭하여 최적의 입찰 기회를 제공합니다.

## 📚 중요 문서

- **[API 및 데이터 흐름 가이드](docs/API_DATA_FLOW.md)** - API 연동, Supabase 데이터베이스, 백업 전략
- **[크론잡 설정 가이드](docs/CRON_SETUP.md)** - 자동화된 데이터 동기화 및 백업 설정

> ⚠️ **중요**: 이 프로젝트는 로컬 PostgreSQL을 사용하지 않습니다. 모든 데이터는 Supabase에 저장됩니다.

## 🏗️ 프로젝트 구조

```
govrfp-copilot/
├── apps/
│   ├── web/              # Next.js 14 Frontend
│   └── api/              # Express API Server
├── packages/
│   ├── db/               # Prisma Database Schema
│   ├── ui/               # Shared UI Components
│   └── lib/              # Shared Utilities
├── workers/
│   └── ingest/           # Data Ingestion Worker
├── services/
│   └── docgen/           # Document Generation Service
└── docker-compose.yml    # Docker Compose Configuration
```

## 🚀 빠른 시작

### 1. 프로젝트 설정

```bash
# 저장소 클론
git clone <repository-url>
cd govrfp-copilot

# 환경변수 설정
cp .env.example .env

# 의존성 설치
npm install
```

### 2. 데이터베이스 설정

```bash
# Docker로 PostgreSQL 시작
npm run docker:up postgres redis

# 데이터베이스 스키마 생성
npm run db:push

# 시드 데이터 삽입
npm run db:seed
```

### 3. 개발 서버 시작

```bash
# 모든 서비스 개발 모드로 시작
npm run dev

# 또는 개별 서비스 시작
npm run dev --workspace=@govrfp/web      # 웹 앱 (포트 4000)
npm run dev --workspace=@govrfp/api      # API 서버 (포트 4001)
npm run dev --workspace=@govrfp/ingest   # 수집 워커 (포트 4002)
```

## 🐳 Docker 개발 환경

### 전체 스택 실행

```bash
# 모든 서비스 시작 (개발 모드)
npm run docker:up

# 개발 도구 포함 (pgAdmin, Redis Commander)
npm run docker:up --profile dev

# 서비스 중지
npm run docker:down
```

### 개별 서비스 관리

```bash
# 특정 서비스만 시작
docker-compose up -d postgres redis

# 로그 확인
npm run docker:logs

# 컨테이너 재시작
docker-compose restart web api
```

## 📋 사용 가능한 스크립트

### 루트 레벨 명령어

```bash
# 개발
npm run dev                 # 모든 서비스 개발 모드
npm run build              # 모든 패키지 빌드
npm run lint               # 코드 린팅
npm run type-check         # 타입 체크
npm run test               # 테스트 실행

# 데이터베이스
npm run db:generate        # Prisma 클라이언트 생성
npm run db:push           # 스키마 푸시
npm run db:seed           # 시드 데이터 삽입

# Docker
npm run docker:up         # Docker Compose 시작
npm run docker:down       # Docker Compose 중지
npm run docker:logs       # 로그 확인
```

### 워크스페이스별 명령어

```bash
# 웹 앱 (@govrfp/web)
npm run dev --workspace=@govrfp/web
npm run build --workspace=@govrfp/web
npm run lint --workspace=@govrfp/web

# API 서버 (@govrfp/api)
npm run dev --workspace=@govrfp/api
npm run build --workspace=@govrfp/api

# 데이터 수집 워커 (@govrfp/ingest)
npm run dev --workspace=@govrfp/ingest
npm run build --workspace=@govrfp/ingest
```

## 🔗 서비스 URL

| 서비스 | URL | 설명 |
|--------|-----|------|
| 웹 애플리케이션 | http://localhost:4000 | Next.js 프론트엔드 |
| API 서버 | http://localhost:4001 | Express REST API |
| Bull Dashboard | http://localhost:4002 | 큐 모니터링 |
| 문서 생성 서비스 | http://localhost:3003 | 문서 생성 API |
| pgAdmin | http://localhost:5050 | 데이터베이스 관리 |
| Redis Commander | http://localhost:8081 | Redis 관리 |

## 🎯 주요 기능

### 1. 스마트 매칭 시스템
- 기업 프로필 기반 자동 과제 매칭
- AI 기반 적합성 점수 계산
- 실시간 매칭 알림

### 2. 데이터 수집 및 처리
- 조달청 나라장터 API 연동
- 실시간 공고 정보 수집
- 자동 키워드 추출 및 분류

### 3. 문서 자동 생성
- 사업계획서, 기술제안서 템플릿
- 기업 정보 기반 자동 작성
- PDF/DOCX 형식 출력

### 4. 멀티테넌시 지원
- SaaS 및 온프레미스 배포
- 테넌트별 데이터 격리
- 요금제별 기능 제한

## 🔧 개발 가이드

### 환경변수 설정

주요 환경변수는 `.env.example`을 참고하여 설정하세요:

```bash
# 데이터베이스 (Supabase PostgreSQL)
SUPABASE_URL="https://your-project.supabase.co"
SUPABASE_SERVICE_KEY="your-supabase-service-role-key"

# 이메일 발송 (SendGrid)
# ⚠️ DigitalOcean 서버는 SMTP 포트(25, 587, 465)를 차단하므로 SendGrid API 사용 필수
SENDGRID_API_KEY="your-sendgrid-api-key"
SENDGRID_FROM_EMAIL="verified-sender@example.com"

# JWT 인증
JWT_SECRET="your-super-secret-jwt-key"

# 외부 API
KSTARTUP_API_KEY="your-kstartup-api-key"
KSTARTUP_API_URL="https://apis.data.go.kr/B552735/kisedKstartupService01"
```

### 중요 설정 안내

#### 1. 데이터베이스: Supabase
- **로컬 개발**: PostgreSQL (localhost:5433)
- **프로덕션**: Supabase PostgreSQL
- 모든 공고 데이터는 Supabase에 저장되며, 실제 정부 API에서 수집한 진짜 공고입니다

#### 2. 이메일 발송: SendGrid
- **DigitalOcean 제약사항**: SMTP 포트 차단으로 nodemailer 사용 불가
- **해결 방법**: SendGrid API 사용 (HTTP 기반)
- **Sender 인증**: SendGrid에서 발신 이메일 주소 인증 필수
- 자세한 내용: [DIGITALOCEAN-SMTP-SENDGRID.md](DIGITALOCEAN-SMTP-SENDGRID.md)

### 데이터베이스 스키마 변경

```bash
# 스키마 수정 후
npm run db:generate    # Prisma 클라이언트 재생성
npm run db:push       # 데이터베이스에 스키마 적용

# 프로덕션용 마이그레이션
npx prisma migrate dev --name your-migration-name
```

### 새 패키지 추가

```bash
# 새 워크스페이스 패키지 생성
mkdir packages/new-package
cd packages/new-package

# package.json 생성 (name: "@govrfp/new-package")
npm init

# 루트에서 의존성 설치
cd ../../
npm install
```

## 📊 모니터링 및 로깅

### 개발 환경
- Bull Dashboard: 큐 작업 모니터링
- pgAdmin: 데이터베이스 관리
- Console 로그: 각 서비스별 로그 출력

### 프로덕션 환경
- Winston 로거 설정
- 에러 트래킹 및 알림
- 성능 메트릭 수집

## 🚀 배포

### 개발 환경
```bash
# Docker Compose로 전체 스택 실행
npm run docker:up --profile dev
```

### 프로덕션 환경
```bash
# 프로덕션 빌드
npm run build

# 프로덕션용 Docker 이미지 빌드
docker-compose -f docker-compose.prod.yml build

# 배포
docker-compose -f docker-compose.prod.yml up -d
```

## 🤝 기여하기

1. 이슈를 생성하거나 기존 이슈를 확인하세요
2. 피처 브랜치를 생성하세요 (`git checkout -b feature/amazing-feature`)
3. 변경사항을 커밋하세요 (`git commit -m 'Add amazing feature'`)
4. 브랜치에 푸시하세요 (`git push origin feature/amazing-feature`)
5. Pull Request를 생성하세요

## 📝 라이선스

이 프로젝트는 MIT 라이선스 하에 있습니다. 자세한 내용은 [LICENSE](LICENSE) 파일을 참고하세요.

## 📞 지원

- 문서: [Wiki](https://github.com/yourusername/govrfp-copilot/wiki)
- 이슈: [GitHub Issues](https://github.com/yourusername/govrfp-copilot/issues)
- 이메일: support@govrfp.co.kr