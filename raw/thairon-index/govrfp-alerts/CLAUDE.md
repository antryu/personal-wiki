# CLAUDE.md

This file provides guidance to Claude Code when working with the GovRFP Alerts (MyBidWise) project.

## Project Overview

**MyBidWise** (formerly GovRFP Alerts) is a government procurement notification SaaS platform that automatically matches companies with relevant bid opportunities and government support programs. The platform sends email notifications based on user keywords and provides AI-powered document generation for bidding.

**Production URL**: https://mybidwise.com
**Tech Stack**: Next.js 14, TypeScript, Supabase, Node.js, Python
**Architecture**: Monorepo with Turborepo, microservices-based backend

## High-Level Directory Structure

```
govrfp-alerts/
├── apps/
│   ├── web/                    # Next.js 14 frontend (main user interface)
│   │   ├── src/
│   │   │   ├── app/           # App router pages
│   │   │   ├── components/    # React components
│   │   │   └── lib/           # Frontend utilities, Supabase client
│   │   ├── .env.production    # Production environment variables
│   │   └── .env.local         # Local development variables
│   └── api/                   # Express API server (not actively used)
│
├── backend/
│   └── email-service/         # Email notification microservice
│       ├── index.ts           # Main service with cron jobs
│       ├── templates/         # Email HTML templates
│       └── .env               # Email service configuration
│
├── workers/
│   ├── data-sync/             # Python workers for data synchronization
│   │   ├── sync_bid_notices.py        # Bid notices sync
│   │   ├── sync_business_support.py   # Business support sync
│   │   └── sync_kstartup.py          # K-Startup data sync
│   └── ingest/                # TypeScript ingestion worker
│
├── packages/                   # Shared monorepo packages
│   ├── db/                    # Prisma schema (legacy, not used)
│   ├── ui/                    # Shared UI components
│   ├── lib/                   # Shared utilities
│   └── email-templates/       # React Email templates
│
├── docs/                      # Documentation
│   ├── API_DATA_FLOW.md      # API and data flow guide
│   └── CRON_SETUP.md         # Cron job configuration
│
├── migrations/                # Database migration scripts
├── scripts/                   # Utility scripts
├── logs/                      # Application logs
│
├── .env.production           # Root production config (backend)
├── .env                      # Root local config
├── package.json              # Root package.json (Turborepo)
└── turbo.json               # Turborepo configuration
```

## Key Dependencies and Tech Stack

### Frontend (`apps/web`)
- **Next.js 14.0.4** - React framework with App Router
- **React 18.2.0** - UI library
- **TypeScript 5.3.3** - Type safety
- **Supabase JS 2.39.0** - Database client and authentication
- **NextAuth 4.24.5** - Authentication (magic link)
- **Radix UI** - Headless UI components
- **Tailwind CSS 3.3.6** - Styling
- **Lucide React** - Icons
- **Anthropic AI SDK 0.71.0** - Claude AI integration for document generation
- **React Hook Form + Zod** - Form handling and validation

### Email Service (`backend/email-service`)
- **Express 4.21.2** - HTTP server
- **TypeScript 5.7.2** - Type safety
- **tsx 4.19.2** - TypeScript execution
- **Supabase JS 2.45.5** - Database operations
- **SendGrid Mail 8.1.4** - Email delivery
- **node-cron 4.2.1** - Scheduled tasks
- **jsonwebtoken 9.0.2** - Token generation for email verification
- **cors 2.8.5** - Cross-origin requests
- **googleapis 144.0.0** - Google Sheets API integration

### Data Sync Workers (`workers/data-sync`)
- **Python 3.x** - Worker runtime
- **requests** - HTTP client for API calls
- **supabase-py** - Python Supabase client
- **K-Startup API** - Government startup support data
- **G2B API** - Government-to-Business procurement data

### Monorepo Tools
- **Turborepo 1.11.2** - Monorepo build system
- **npm workspaces** - Package management
- **BullMQ 5.62.0** - Job queue (planned)
- **Redis/ioredis 5.8.2** - Caching and queue backend

## Architecture Patterns

### 1. **Microservices Architecture**
- **Frontend**: Next.js 14 App Router (apps/web) - Port 3000
- **Email Service**: Standalone Node.js service (backend/email-service) - Port 8001
- **Data Workers**: Independent Python scripts running on cron schedule
- **Database**: Centralized Supabase PostgreSQL

### 2. **Data Flow Pattern**
```
Government APIs (G2B, K-Startup)
  → Python Workers (cron-scheduled)
  → Supabase Tables (bid_notices_*, business_support_notices)
  → Email Service (keyword matching)
  → SendGrid (email delivery)
  → Users
```

### 3. **Authentication Pattern**
- **Magic Link Authentication** via Supabase Auth
- Email-only authentication (no passwords)
- Session management with Supabase session tokens
- Row Level Security (RLS) policies on all tables

### 4. **Email Subscription Pattern**
- Users subscribe via email with keywords
- Email verification required (`email_subscriptions` table)
- Keywords stored as `text[]` array in PostgreSQL
- Matching algorithm uses PostgreSQL `tsvector` and keyword arrays

### 5. **Cron-Based Scheduling**
- System cron for data synchronization (server-level)
- Node-cron for email notifications (application-level)
- All schedules in Asia/Seoul timezone

## Non-Standard Configuration Choices

### 1. **No Local PostgreSQL**
⚠️ **Important**: This project does NOT use local PostgreSQL despite having Prisma schema files. All data is stored in **Supabase cloud database**.

**Reason**: Simplified deployment and eliminated local database management complexity.

### 2. **Dual Database Connection Methods**
- **Frontend**: Supabase JS client (anon key) with RLS
- **Backend/Workers**: Direct PostgreSQL connection or service_role key (bypasses RLS)

**Files**:
- Frontend: `apps/web/src/lib/supabase.ts`
- Backend: Direct `DATABASE_URL` or `SUPABASE_SERVICE_KEY`

### 3. **Monorepo with Mixed Languages**
- TypeScript for frontend and email service
- Python for data synchronization workers
- No shared package dependencies between TS and Python

**Reason**: Python has superior libraries for web scraping and data processing; TypeScript better for UI/API.

### 4. **Standalone Email Service**
Email service runs independently (not integrated with Next.js API routes).

**Reason**:
- Next.js serverless functions have 10-second timeout
- Email batch processing can take minutes
- Needs persistent cron scheduling

### 5. **SendGrid for Email Delivery**
Not using Resend despite having it as a dependency.

**Current**: SendGrid with API key authentication
**Reason**: SendGrid has better deliverability and supports higher volume

### 6. **Supabase Service Role Key in Environment**
Service role key is stored in plaintext environment variables.

**Security**: Server is secured, keys are never exposed to client
**Files**: `.env.production`, `backend/email-service/.env`

## Environment Variables

### Root Level (`.env.production`)
```bash
# Server
PORT=4001
NODE_ENV=production

# Database (production DigitalOcean PostgreSQL)
DATABASE_URL=postgresql://govrfp:***@159.223.77.203:5434/govrfp_prod
ORIGINAL_DB_URL=postgresql://govrfp:***@159.223.77.203:5434/govrfp_prod

# Email SMTP (Gmail)
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=andrewnoh.thairon@gmail.com
SMTP_PASS=*** # App-specific password

# URLs
FRONTEND_URL=https://mybidwise.com

# Redis
REDIS_URL=redis://159.223.77.203:6380

# NextAuth
NEXTAUTH_SECRET=***
NEXTAUTH_URL=https://mybidwise.com

# Supabase
SUPABASE_URL=https://ksdbrovnwphwqonexsus.supabase.co
SUPABASE_SERVICE_KEY=eyJhbGc...  # service_role key
NEXT_PUBLIC_SUPABASE_URL=https://ksdbrovnwphwqonexsus.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGc...  # anon key
```

### Frontend (`apps/web/.env.production`)
```bash
NEXT_PUBLIC_SUPABASE_URL=https://ksdbrovnwphwqonexsus.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGc...

# API URLs (same domain via Nginx reverse proxy)
NEXT_PUBLIC_API_URL=https://mybidwise.com
NEXT_PUBLIC_FRONTEND_URL=https://mybidwise.com

# Email Configuration
NEXT_PUBLIC_EMAIL_FROM_NAME=MyBidWise
NEXT_PUBLIC_SUPPORT_EMAIL=support@mybidwise.com

# Feature Flags
NEXT_PUBLIC_ENABLE_ANALYTICS=true
NEXT_PUBLIC_DEBUG_MODE=false
```

### Email Service (`backend/email-service/.env`)
```bash
# Server
PORT=4000

# Supabase
SUPABASE_URL=https://ksdbrovnwphwqonexsus.supabase.co
SUPABASE_SERVICE_KEY=eyJhbGc...  # service_role key

# Email - SendGrid (production)
SENDGRID_API_KEY=SG.***
SENDGRID_FROM_EMAIL=fabberate@gmail.com

# Email - Gmail SMTP (backup)
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=fabberate@gmail.com
SMTP_PASS=*** # App-specific password

# Google Sheets Sync (optional)
GOOGLE_SHEETS_ENABLED=true
GOOGLE_SHEETS_SPREADSHEET_ID=***
GOOGLE_SERVICE_ACCOUNT_TYPE=service_account
GOOGLE_SERVICE_ACCOUNT_PROJECT_ID=***
GOOGLE_SERVICE_ACCOUNT_PRIVATE_KEY_ID=***
GOOGLE_SERVICE_ACCOUNT_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\n...\n-----END PRIVATE KEY-----\n"
GOOGLE_SERVICE_ACCOUNT_CLIENT_EMAIL=***@***.iam.gserviceaccount.com
GOOGLE_SERVICE_ACCOUNT_CLIENT_ID=***

# JWT Authentication
JWT_SECRET=***
JWT_EXPIRES_IN=7d

# Frontend URL for email links
FRONTEND_URL=https://mybidwise.com
```

**Note**: `.env.example` 템플릿 파일이 `backend/email-service/.env.example`에 있습니다.

### Environment File Locations
- Root: `.env`, `.env.production`, `.env.example`
- Frontend: `apps/web/.env.local`, `apps/web/.env.production`
- Email Service: `backend/email-service/.env`, `backend/email-service/.env.example`
- Workers: Environment variables set in cron scripts on server

**Important**: 로컬 `.env` 파일과 서버 `.env` 파일은 별도로 관리됩니다. 새로운 환경 변수 추가 시 양쪽 모두 업데이트 필요.

## Server Infrastructure

### Production Server
- **Provider**: DigitalOcean Droplet
- **IP**: 159.223.77.203
- **OS**: Ubuntu Linux
- **Domain**: mybidwise.com (Nginx reverse proxy)
- **SSL**: Let's Encrypt certificates

### Server Architecture
```
Internet → Nginx (80/443)
  ├── / → Next.js Frontend :3000
  ├── /api → Email Service :8001
  └── Static files

Background Services:
  ├── Email Service (Node.js) - Port 8001
  ├── PostgreSQL - Port 5434
  └── Redis - Port 6380
```

### Deployed Services
1. **Next.js Frontend** - `apps/web`
   - Built with `npm run build`
   - Served via `npm start` or PM2
   - Port: 3000

2. **Email Service** - `backend/email-service`
   - Running with `tsx index.ts`
   - Managed via Docker container (`govrfp-email-prod`)
   - Internal Port: 4000, External Port: 8001
   - Includes Google Sheets sync cron job

3. **Data Workers** - `workers/data-sync`
   - Python scripts executed by cron
   - No persistent process

### Cron Schedule (Server: 159.223.77.203)

| Time | Task | Script |
|------|------|--------|
| 01:00 | Supabase backup | `backup_all_supabase_data.sh` |
| 02:00 | Bid notices sync | `run_bid_sync.sh` (Python) |
| 03:00 | Business support sync | `run_business_sync.sh` (Python) |
| 05:00 | K-Startup sync | `sync_kstartup.sh` (Python) |

**Note**: Google Sheets 동기화는 이제 email-service 내부 node-cron으로 실행됩니다 (04:00 KST).

### Application-Level Cron (Node-cron in email-service)

| Schedule | Task | Timezone |
|----------|------|----------|
| `0 0 4 * * *` | Google Sheets sync | Asia/Seoul |
| `0 0 9 * * *` | Daily digest | Asia/Seoul |
| `0 0 9 * * 1` | Weekly digest (Monday) | Asia/Seoul |
| `0 0 9 1 * *` | Monthly digest (1st) | Asia/Seoul |
| `0 0 6,12,18 * * *` | Business support auto-sync | Asia/Seoul |

### Deployment Process
1. Code changes pushed to Git repository
2. SSH to server: `ssh root@159.223.77.203`
3. Pull latest: `cd /root/govrfp-alerts && git pull`
4. Install dependencies: `npm install`
5. Build frontend: `cd apps/web && npm run build`
6. **Update .env if needed**: 새 환경 변수가 있으면 서버의 `.env` 파일도 업데이트
7. Restart services:
   ```bash
   # Restart email service (Docker)
   docker restart govrfp-email-prod

   # Or rebuild if dependencies changed
   cd backend/email-service
   docker build -t govrfp-email:latest .
   docker stop govrfp-email-prod && docker rm govrfp-email-prod
   docker run -d --name govrfp-email-prod -p 8001:4000 --env-file .env govrfp-email:latest

   # Restart frontend (PM2 or systemd)
   pm2 restart govrfp-web
   ```
8. **Copy updated files to container** (if not rebuilding):
   ```bash
   docker cp backend/email-service/.env govrfp-email-prod:/app/.env
   docker cp backend/email-service/google-sheets-sync.ts govrfp-email-prod:/app/
   docker restart govrfp-email-prod
   ```

### Database Management

**Primary Database**: Supabase PostgreSQL
- **URL**: https://ksdbrovnwphwqonexsus.supabase.co
- **Project ID**: ksdbrovnwphwqonexsus

**Key Tables**:
- `email_subscriptions` - User email subscriptions (29 subscribers)
- `bid_notices_service` - Service bid notices
- `bid_notices_goods` - Goods bid notices
- `bid_notices_construction` - Construction bid notices
- `business_support_notices` - Government support programs
- `kstartup_notices` - K-Startup support programs
- `user_plans` - Subscription plans and credits
- `user_saved_notices` - User bookmarks

**Access Methods**:
1. **Supabase Dashboard**: Web UI for queries and management
2. **Direct PostgreSQL**: Connection string in `DATABASE_URL`
3. **Supabase Client**: JavaScript/TypeScript SDK
4. **Service Role Key**: Bypasses RLS for admin operations

### Backup Strategy
- Daily automated Supabase backups at 01:00
- Backup script: `/root/govrfp-alerts/backup_all_supabase_data.sh`
- Logs: `/root/govrfp-alerts/logs/backup_cron.log`

## Common Development Tasks

### Local Development
```bash
# Start frontend
cd apps/web
npm run dev  # http://localhost:3000

# Start email service
cd backend/email-service
npm run dev  # http://localhost:8001

# Run data sync (manual)
cd workers/data-sync
python sync_bid_notices.py
```

### Check Production Services
```bash
# SSH to server
ssh root@159.223.77.203

# Check running services
ps aux | grep node
docker ps

# View logs
tail -f /root/govrfp-alerts/logs/email_digest_cron.log
docker logs email-service -f

# Check cron jobs
crontab -l
```

### Database Operations
```bash
# Check subscribers
npx tsx check-email-subscriptions.ts

# Force verify emails (requires service_role key)
SUPABASE_SERVICE_KEY="..." npx tsx force-verify-service.ts

# Manual data sync
ssh root@159.223.77.203
cd /root/govrfp-alerts
./run_bid_sync.sh
```

### Deployment
```bash
# 1. SSH to server
ssh root@159.223.77.203

# 2. Navigate to project
cd /root/govrfp-alerts

# 3. Pull latest code
git pull

# 4. Install dependencies
npm install

# 5. Build frontend
cd apps/web && npm run build && cd ../..

# 6. Restart services
docker compose restart email-service
pm2 restart govrfp-web  # or systemctl restart govrfp-web

# 7. Verify
curl https://mybidwise.com
docker logs email-service --tail 50
```

## Important Notes

### 1. Supabase-First Architecture
- All data lives in Supabase (cloud PostgreSQL)
- No local database needed for development
- Use Supabase Dashboard for data inspection
- RLS policies protect user data

### 2. Email Service Independence
- Email service is separate from Next.js
- Has its own cron schedules
- Can be scaled independently
- Port 8001 is internal-only (not exposed to internet)

### 3. Python Workers
- Located in `workers/data-sync/`
- Each worker is independent
- Scheduled via system cron (not Node-cron)
- Use virtual environment: `cd workers/data-sync && source venv/bin/activate`

### 4. Mixed Language Monorepo
- TypeScript: Frontend, email service, some workers
- Python: Data synchronization workers
- Shell scripts: Cron wrappers and backup scripts

### 5. Production vs Development
- Production uses DigitalOcean server with Nginx
- Local development connects to same Supabase instance
- Use `NEXT_PUBLIC_SUPABASE_ANON_KEY` for client-side
- Use `SUPABASE_SERVICE_KEY` for server-side admin operations

### 6. Authentication Flow
- Magic link sent via Supabase Auth
- Email-only (no password)
- Links expire in 24 hours
- Session tokens stored in Supabase cookies

### 7. Current Subscribers
- **Total**: 29 verified email subscribers
- **Status**: All verified (100%)
- **Email service**: Active, sending daily digests at 09:00 KST

## Troubleshooting

### Email Service Not Sending
1. Check service is running: `docker ps | grep govrfp-email-prod`
2. Check logs: `docker logs govrfp-email-prod`
3. Verify SendGrid API key: `docker exec govrfp-email-prod cat .env | grep SENDGRID`
4. Test manually: `curl -X POST http://localhost:8001/api/send-notifications -H "Content-Type: application/json" -d '{"frequency":"daily"}'`

### Google Sheets Sync Not Working
1. Check container logs: `docker logs govrfp-email-prod | grep -i sheets`
2. Verify Google credentials: `docker exec govrfp-email-prod cat .env | grep GOOGLE`
3. Test manually inside container:
   ```bash
   docker exec govrfp-email-prod npx tsx -e "
   import { syncToGoogleSheets } from './google-sheets-sync.ts';
   syncToGoogleSheets().then(r => console.log(r)).catch(e => console.error(e.message));
   "
   ```
4. Common issues:
   - Private key에 따옴표가 있으면 코드에서 자동 처리됨
   - `\n`이 리터럴 문자열이면 코드에서 자동 변환됨

### Data Sync Not Working
1. Check cron is running: `crontab -l`
2. View sync logs: `tail -f /root/govrfp-alerts/logs/bid_sync_cron.log`
3. Run manually: `/root/govrfp-alerts/run_bid_sync.sh`
4. Check Python environment: `cd workers/data-sync && source venv/bin/activate && python sync_bid_notices.py`

### Frontend Build Errors
1. Clear cache: `cd apps/web && rm -rf .next`
2. Reinstall: `npm install`
3. Check TypeScript: `npm run type-check`
4. Check environment variables: Verify `.env.production` exists

### Database Connection Issues
1. Verify Supabase is accessible: `curl https://ksdbrovnwphwqonexsus.supabase.co`
2. Check service_role key is correct
3. Test connection: `npx tsx check-email-subscriptions.ts`
4. Check RLS policies in Supabase Dashboard

## External Data APIs Reference

본 플랫폼은 5가지 유형의 공고/과제 데이터를 정부 공공데이터 API에서 수집합니다.

### 1. 입찰공고 (Bid Notices) - 나라장터 G2B API

**API 제공처**: 조달청 나라장터 (G2B - Government to Business)
**공공데이터포털 등록**: https://www.data.go.kr

| 항목 | 내용 |
|------|------|
| **API 기본 URL** | `http://apis.data.go.kr/1230000/BidPublicInfoService` |
| **인증방식** | API Key (URL Parameter: `serviceKey`) |
| **응답형식** | XML (default) 또는 JSON (`_type=json`) |
| **페이지네이션** | `pageNo`, `numOfRows` (최대 100) |

**세부 엔드포인트**:
```
# 용역 입찰
/getServiceBidPublicInfoList

# 물품 입찰
/getGoodsBidPublicInfoList

# 공사 입찰
/getConstructionBidPublicInfoList
```

**주요 파라미터**:
```
serviceKey      : API 인증키 (필수)
pageNo          : 페이지 번호 (default: 1)
numOfRows       : 한 페이지 결과 수 (default: 10, max: 100)
inqryDiv        : 조회 구분 (1: 등록일시, 2: 입찰마감일시)
inqryBgnDt      : 조회 시작일 (YYYYMMDD)
inqryEndDt      : 조회 종료일 (YYYYMMDD)
bidNtceNm       : 입찰공고명 (검색 키워드)
```

**응답 주요 필드**:
```xml
<item>
  <bidNtceNo>입찰공고번호</bidNtceNo>
  <bidNtceNm>입찰공고명</bidNtceNm>
  <ntceInsttNm>공고기관명</ntceInsttNm>
  <bidClseDt>입찰마감일시</bidClseDt>
  <presmptPrce>추정가격</presmptPrce>
  <bidNtceDtlUrl>상세페이지 URL</bidNtceDtlUrl>
</item>
```

**데이터 저장 테이블**:
- `bid_notices_service` - 용역 입찰
- `bid_notices_goods` - 물품 입찰
- `bid_notices_construction` - 공사 입찰

**동기화 스크립트**: `workers/data-sync/sync_bid_notices.py`
**크론 스케줄**: 매일 02:00 KST

---

### 2. 정부지원사업 (Business Support) - 기업마당 API

**API 제공처**: 중소벤처기업부 기업마당
**공공데이터포털 등록**: https://www.data.go.kr

| 항목 | 내용 |
|------|------|
| **API 기본 URL** | `https://apis.data.go.kr/B552735/bizListService` |
| **인증방식** | API Key (URL Parameter: `serviceKey`) |
| **응답형식** | XML |
| **페이지네이션** | `pageNo`, `numOfRows` |

**엔드포인트**:
```
/getBizList  # 지원사업 목록 조회
```

**주요 파라미터**:
```
serviceKey      : API 인증키 (필수)
pageNo          : 페이지 번호
numOfRows       : 결과 수
pblancNm        : 공고명 (검색)
jrsdInsttNm     : 관할기관명
rcptEndDe       : 접수마감일
```

**응답 주요 필드**:
```xml
<item>
  <pblancId>공고ID</pblancId>
  <pblancNm>공고명</pblancNm>
  <jrsdInsttNm>관할기관명</jrsdInsttNm>
  <rcptBgnDe>접수시작일</rcptBgnDe>
  <rcptEndDe>접수마감일</rcptEndDe>
  <bsnsSumryCn>사업요약내용</bsnsSumryCn>
  <detailPageUrl>상세페이지URL</detailPageUrl>
</item>
```

**데이터 저장 테이블**: `business_support_notices`

**동기화 스크립트**: `workers/data-sync/sync_business_support.py`
**크론 스케줄**: 매일 03:00 KST + 자동 동기화 (06:00, 12:00, 18:00 KST)

---

### 3. K-Startup 창업지원사업 - K-Startup API

**API 제공처**: 중소벤처기업부 K-Startup
**공공데이터포털 등록**: https://www.data.go.kr

| 항목 | 내용 |
|------|------|
| **API 기본 URL** | `https://apis.data.go.kr/B552735/kisedKstartupService01` |
| **인증방식** | API Key (URL Parameter: `serviceKey`) |
| **응답형식** | **XML only** (JSON 미지원) |
| **페이지네이션** | `pageNo`, `numOfRows` |
| **총 데이터**: | 약 26,972건 (2024.12 기준) |

**엔드포인트**:
```
/getAnnouncementInformation01  # 공고정보 조회
```

**주요 파라미터**:
```
serviceKey      : API 인증키 (필수, URL 인코딩 필요)
pageNo          : 페이지 번호 (default: 1)
numOfRows       : 결과 수 (default: 10, max: 100)
```

**⚠️ 중요: API 키 인코딩**
K-Startup API 키에는 `+`, `=` 등 특수문자가 포함되어 있어 반드시 URL 인코딩이 필요합니다:
```
원본: 31GFPdRakhAktAyfHpldfIk85UBOYHPGq+f0Rgt6meM6foGw8mdMRh6UzPb/q/WW1/u6UfbplCRjdZRd+iR9sA==
인코딩: 31GFPdRakhAktAyfHpldfIk85UBOYHPGq%2Bf0Rgt6meM6foGw8mdMRh6UzPb%2Fq%2FWW1%2Fu6UfbplCRjdZRd%2BiR9sA%3D%3D
```

**응답 형식** (XML):
```xml
<results>
  <data>
    <item>
      <col name="pbanc_sn">공고일련번호</col>
      <col name="biz_pbanc_nm">사업공고명</col>
      <col name="exctn_instt_nm">수행기관명</col>
      <col name="pbanc_rcpt_bgng_dt">접수시작일</col>
      <col name="pbanc_rcpt_end_dt">접수마감일</col>
      <col name="detail_pg_url">상세페이지URL</col>
      <col name="supt_biz_clas_nm">지원사업분류명</col>
      <col name="biz_aplcnt_qlfcc_cn">신청자격내용</col>
    </item>
  </data>
  <totalCount>26972</totalCount>
</results>
```

**XML 파싱 주의사항**:
- 일반적인 `<field>value</field>` 형식이 아님
- `<col name="field_name">value</col>` 형식 사용
- Python: `xml.etree.ElementTree` 또는 `xmltodict` 사용
- Node.js: `fast-xml-parser` 사용 권장

**데이터 저장 테이블**: `kstartup_notices`

**동기화 스크립트**: `workers/data-sync/sync_kstartup.py`
**크론 스케줄**: 매일 05:00 KST

---

### 4. NTIS 국가R&D 과제 - NTIS API

**API 제공처**: 과학기술정보통신부 NTIS (국가과학기술지식정보서비스)
**포털**: https://www.ntis.go.kr

| 항목 | 내용 |
|------|------|
| **API 기본 URL** | `https://www.ntis.go.kr/rndopen/openApi/public_project` |
| **인증방식** | apprvKey (NTIS 발급, IP 화이트리스트 필요) |
| **응답형식** | **XML only** |
| **페이지네이션** | `startPosition`, `displayCnt` (최대 100) |
| **총 데이터** | 약 109,000+ 건 (2025.01 기준) |

**⚠️ 중요: URL 인코딩 금지**
NTIS API는 Python requests의 자동 URL 인코딩을 거부합니다.
한글 검색어는 **인코딩하지 않고 raw UTF-8**로 전송해야 합니다.

```python
# ❌ 실패: Python requests (자동 인코딩)
requests.get(url, params={'SRWR': '나노'})  # %EB%82%98%EB%85%B8로 인코딩됨

# ✅ 성공: subprocess + curl (raw 전송)
url = f"...&SRWR=나노&..."
subprocess.run(['curl', '-s', '-A', 'curl/7.81.0', url])
```

**주요 파라미터**:
```
apprvKey        : API 인증키 (필수, NTIS에서 발급)
collection      : 검색 컬렉션 (project)
SRWR            : 검색어 (한글 raw 전송)
startPosition   : 시작 위치 (1부터 시작)
displayCnt      : 결과 수 (max: 100)
```

**응답 주요 필드**:
```xml
<HIT>
  <ProjectNumber>과제번호</ProjectNumber>
  <ProjectTitle>
    <Korean>과제명</Korean>
    <English>영문과제명</English>
  </ProjectTitle>
  <ResearchAgency><Name>연구기관명</Name></ResearchAgency>
  <ManageAgency><Name>관리기관명</Name></ManageAgency>
  <Ministry><Name>부처명</Name></Ministry>
  <ProjectPeriod>
    <Start>연구시작일</Start>
    <End>연구종료일</End>
  </ProjectPeriod>
  <GovernmentFunds>정부출연금</GovernmentFunds>
  <TotalFunds>총연구비</TotalFunds>
  <Abstract><Full>연구내용</Full></Abstract>
  <Keyword><Korean>키워드</Korean></Keyword>
</HIT>
```

**데이터 저장 테이블**: `ntis_projects`

**동기화 스크립트**: `workers/data-sync/sync_ntis.py`

**사용법**:
```bash
# 서버에서 실행 (IP 화이트리스트 필요)
cd /root/govrfp-alerts/workers/data-sync
source venv/bin/activate
python3 sync_ntis.py 나노 10      # '나노' 검색어로 10페이지
python3 sync_ntis.py 인공지능 20   # '인공지능' 검색어로 20페이지
```

**API 키 정보**:
- **Production Key**: IP 화이트리스트 필요 (서버 159.223.77.203)
- **Trial Key**: 모든 IP 허용, displayCnt=1 제한

---

### 5. API 환경변수 설정

**위치**: `workers/data-sync/.env`

```bash
# 나라장터 G2B API (입찰공고)
G2B_API_KEY=발급받은_API_키

# 기업마당 API (정부지원사업)
BIZINFO_API_KEY=발급받은_API_키

# K-Startup API (창업지원)
KSTARTUP_API_KEY=31GFPdRakhAktAyfHpldfIk85UBOYHPGq+f0Rgt6meM6foGw8mdMRh6UzPb/q/WW1/u6UfbplCRjdZRd+iR9sA==

# NTIS R&D API (국가R&D 과제)
# Production key (서버 IP 화이트리스트 필요)
NTIS_API_KEY=p9dek955p2fsr054et1t

# Supabase
SUPABASE_URL=https://ksdbrovnwphwqonexsus.supabase.co
SUPABASE_SERVICE_KEY=eyJhbGc...
```

---

### 6. API 요청 테스트

**K-Startup API 테스트** (curl):
```bash
# URL 인코딩된 키로 요청
curl "https://apis.data.go.kr/B552735/kisedKstartupService01/getAnnouncementInformation01?serviceKey=31GFPdRakhAktAyfHpldfIk85UBOYHPGq%2Bf0Rgt6meM6foGw8mdMRh6UzPb%2Fq%2FWW1%2Fu6UfbplCRjdZRd%2BiR9sA%3D%3D&pageNo=1&numOfRows=10"
```

**G2B 입찰공고 API 테스트** (curl):
```bash
curl "http://apis.data.go.kr/1230000/BidPublicInfoService/getServiceBidPublicInfoList?serviceKey=YOUR_API_KEY&numOfRows=10&pageNo=1&_type=json"
```

---

### 7. 데이터 동기화 흐름

```
[공공데이터 API]
     │
     ├── G2B API ──────────────→ sync_bid_notices.py
     │                                    │
     │                                    ├→ bid_notices_service
     │                                    ├→ bid_notices_goods
     │                                    └→ bid_notices_construction
     │
     ├── 기업마당 API ──────────→ sync_business_support.py
     │                                    │
     │                                    └→ business_support_notices
     │
     ├── K-Startup API ────────→ sync_kstartup.py
     │                                    │
     │                                    └→ kstartup_notices
     │
     └── NTIS API ─────────────→ sync_ntis.py
                                          │
                                          └→ ntis_projects

[Supabase PostgreSQL]
     │
     └→ Next.js Frontend → 사용자에게 표시
```

---

### 8. 공통 에러 및 해결방법

| 에러 | 원인 | 해결방법 |
|------|------|----------|
| `SERVICE_KEY_IS_NOT_REGISTERED_ERROR` | API 키 미등록 또는 만료 | 공공데이터포털에서 API 키 재발급 |
| `LIMITED_NUMBER_OF_SERVICE_REQUESTS_EXCEEDS_ERROR` | 일일 호출 한도 초과 | 다음 날까지 대기 또는 트래픽 증가 신청 |
| `Unexpected token < in JSON` | JSON 요청에 XML 응답 | `_type=json` 파라미터 추가 또는 XML 파서 사용 |
| `INVALID_REQUEST_PARAMETER_ERROR` | 잘못된 파라미터 | API 문서 확인 후 파라미터 수정 |
| `NO_OPENAPI_SERVICE_ERROR` | 서비스 중단 | API 제공처 공지사항 확인 |

---

## Additional Resources

- **API Documentation**: `docs/API_DATA_FLOW.md`
- **Cron Setup**: `docs/CRON_SETUP.md`
- **Deployment Guide**: `DEPLOYMENT_CHECKLIST.md`
- **Magic Link Auth**: `MAGIC_LINK_AUTH_PLAN.md`
- **Design Guide**: `UIUX_Guideline.md`
