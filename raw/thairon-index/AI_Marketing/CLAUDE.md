# CLAUDE.md

This file provides guidance to Claude Code when working with the AI Marketing Automation Platform.

---

## IMPORTANT: Language Rules

**NEVER use Chinese characters (Hanzi), Japanese characters (Kanji/Hiragana/Katakana), or any CJK characters in this project.**

- Allowed languages: **Korean (Hangul) and English ONLY**
- All documentation, comments, UI text, and code must use Korean or English
- Examples of forbidden characters: 中文, 日本語, 漢字, ひらがな, カタカナ
- This rule applies to ALL files in the project including .md, .ts, .tsx, .js, etc.

---

## 📋 Project Overview

**AI Marketing Automation Platform - Video Edition**

Multi-brand AI-powered marketing content automation platform with video generation capabilities. Primarily targets Korean SMB market with bilingual support (Korean/English).

### Purpose
- Automated content generation for social media (Instagram, YouTube, TikTok, LinkedIn)
- Multi-brand management for agencies/marketers
- Writer persona system for consistent brand voice
- Video content creation with AI-powered scene generation

---

## 🏗️ High-Level Directory Structure

```
AI_Marketing/
├── marketing-automation/          ⭐ Main Application (Simple Version)
│   ├── app/                       # Next.js 16 App Router
│   │   ├── (auth)/               # Auth routes (login, signup)
│   │   ├── (dashboard)/          # Protected dashboard routes
│   │   │   ├── analytics/
│   │   │   ├── brand/
│   │   │   ├── calendar/
│   │   │   ├── content/          # Content creation & management
│   │   │   ├── dashboard/
│   │   │   ├── onboarding/
│   │   │   ├── personas/
│   │   │   ├── pricing/
│   │   │   ├── profile/
│   │   │   ├── settings/
│   │   │   ├── subscribers/
│   │   │   ├── trends/
│   │   │   └── writer-personas/
│   │   └── api/                  # API Routes
│   │       ├── auth/             # Authentication endpoints
│   │       ├── brands/           # Brand CRUD
│   │       ├── content/          # Content generation & management
│   │       ├── onboarding/
│   │       ├── pexels/           # External media API
│   │       ├── platforms/        # Platform integrations
│   │       ├── subscribers/
│   │       ├── trends/           # Google Trends integration
│   │       ├── video/            # Video generation & rendering
│   │       ├── webhooks/
│   │       └── writer-persona/
│   │
│   ├── components/               # React components
│   │   ├── auth/                 # Login, signup forms
│   │   ├── content/              # Content creation UI
│   │   ├── dashboard/            # Dashboard widgets
│   │   ├── layout/               # Layout components
│   │   ├── onboarding/           # Onboarding flow
│   │   ├── theme/                # Theme provider
│   │   ├── ui/                   # shadcn/ui components
│   │   ├── video/                # Video editor components
│   │   └── writer-persona/       # Persona management UI
│   │
│   ├── lib/                      # Core utilities & services
│   │   ├── ai/
│   │   │   ├── content-generator.ts  # OpenAI GPT-4o-mini integration
│   │   │   └── personas.ts          # Persona management logic
│   │   ├── platforms/            # Platform-specific utilities
│   │   ├── queue/                # BullMQ job queue (Redis)
│   │   ├── supabase/
│   │   │   ├── client.ts         # Browser client
│   │   │   └── server.ts         # Server-side client
│   │   ├── utils/                # Helper functions
│   │   └── video/
│   │       ├── renderer.ts       # Canvas + FFmpeg video rendering
│   │       └── templates.ts      # Video template definitions
│   │
│   ├── supabase/
│   │   └── migrations/           # Database schema migrations
│   │
│   ├── contexts/                 # React contexts
│   ├── hooks/                    # Custom React hooks
│   ├── store/                    # Zustand state management
│   ├── types/                    # TypeScript type definitions
│   ├── public/                   # Static assets
│   │
│   ├── .env.local                # Environment variables (gitignored)
│   ├── .env.example              # Environment template
│   ├── next.config.ts            # Next.js configuration
│   ├── package.json              # Dependencies
│   ├── tailwind.config.ts        # Tailwind CSS config
│   └── tsconfig.json             # TypeScript config
│
├── marketing-automation-pro/     # Hybrid Version (with advanced timeline editor)
├── OpenCut_New/                  # Reference: Open-source video editor
├── README.md                     # Project documentation (Korean)
├── COMPARISON.md                 # Version comparison
└── check_users.js                # Database utility script
```

---

## 🔧 Key Dependencies

### Core Framework
- **Next.js 16.0.3** - React framework with App Router
- **React 19.2.0** - Latest React with Server Components
- **TypeScript 5** - Type safety

### UI & Styling
- **Tailwind CSS 4** - Utility-first CSS framework
- **shadcn/ui** - Radix UI component library
  - `@radix-ui/react-avatar`
  - `@radix-ui/react-dialog`
  - `@radix-ui/react-dropdown-menu`
  - `@radix-ui/react-select`
  - `@radix-ui/react-tabs`
- **framer-motion** (12.23.24) - Animation library
- **lucide-react** (0.553.0) - Icon library

### Backend & Database
- **Supabase** (2.81.1) - PostgreSQL database + Auth
  - `@supabase/supabase-js` - Client SDK
  - `@supabase/ssr` (0.7.0) - Server-side rendering support
- **BullMQ** (5.63.2) - Job queue for async tasks
- **ioredis** (5.8.2) - Redis client (Upstash)

### AI & Content Generation
- **OpenAI** (6.9.0) - GPT-4o-mini for content generation
- **@anthropic-ai/sdk** (0.70.0) - Claude API integration
- **google-trends-api** (4.9.2) - Trend analysis

### Video Processing
- **@ffmpeg/ffmpeg** (0.12.15) - Browser-based video rendering
- **@ffmpeg/util** (0.12.2) - FFmpeg utilities
- **fabric** (6.9.0) - Canvas manipulation library

### State Management & Forms
- **zustand** (5.0.8) - Lightweight state management
- **react-hook-form** (7.66.0) - Form handling
- **@hookform/resolvers** (5.2.2) - Form validation
- **zod** (4.1.12) - Schema validation

### Utilities
- **date-fns** (4.1.0) - Date manipulation
- **clsx** + **tailwind-merge** - Conditional class merging
- **react-markdown** (10.1.0) - Markdown rendering
- **recharts** (3.4.1) - Charts and analytics
- **sonner** (2.0.7) - Toast notifications

---

## 🏛️ Architecture Patterns

### App Router Structure
- **Route Groups**: `(auth)` and `(dashboard)` for logical separation
- **Server Components**: Default for all components
- **Client Components**: Marked with `"use client"` for interactivity
- **API Routes**: RESTful endpoints in `app/api/`

### Authentication Flow
- **Supabase Auth**: Email/password authentication
- **Server-side validation**: Using `@supabase/ssr` for protected routes
- **Row Level Security (RLS)**: Database-level access control

### State Management Strategy
- **Server State**: Supabase queries via Server Components
- **Client State**: Zustand stores for UI state
- **Form State**: React Hook Form + Zod validation
- **Global State**: React Context for theme/user preferences

### Video Generation Pipeline
```
User Input → AI Content Generation → Template Selection → Scene Rendering (Canvas) → FFmpeg Encoding → Video Output
```

### Multi-tenant Architecture
- **Brands**: Each user can manage multiple brands
- **Personas**: Each brand has custom writer personas
- **Content**: Isolated per brand with RLS policies

---

## ⚙️ Non-Standard Configuration Choices

### 1. Tailwind CSS v4 (Beta)
Using latest Tailwind v4 with PostCSS:
```json
"@tailwindcss/postcss": "^4"
```
- **Reason**: Enhanced performance and modern features
- **Note**: Some plugins may not be compatible yet

### 2. React 19 (Stable)
Using latest React 19 with Server Components:
- **Server Actions**: Form submissions without API routes
- **`use` hook**: Data fetching primitives
- **Automatic batching**: Improved performance

### 3. BullMQ for Job Queue
Redis-backed queue instead of serverless cron:
- **Reason**: More reliable for video processing tasks
- **Provider**: Upstash Redis (serverless-friendly)

### 4. FFmpeg.wasm (Browser-based)
Video rendering in browser instead of server:
- **Reason**: Reduces server costs, instant preview
- **Trade-off**: Limited by browser memory (max ~3min videos)

### 5. Supabase RLS Policies
Database-level security instead of middleware:
- **Reason**: Prevents accidental data leaks
- **Pattern**: All tables have user/brand-scoped policies

### 6. Custom Video Templates
Template-based system instead of timeline editor:
- **Reason**: Simpler UX for non-technical users
- **Location**: `lib/video/templates.ts`

---

## 🌍 Environment Variables

### Required Variables

```bash
# Supabase (Database + Auth)
NEXT_PUBLIC_SUPABASE_URL=         # Supabase project URL
NEXT_PUBLIC_SUPABASE_ANON_KEY=    # Public anon key (safe for client)
SUPABASE_SERVICE_ROLE_KEY=        # Admin key (server-only, bypasses RLS)

# OpenAI (Primary AI)
OPENAI_API_KEY=                   # GPT-4o-mini content generation

# Replicate (Image Generation)
REPLICATE_API_TOKEN=              # AI image generation (optional)

# Redis (Job Queue)
REDIS_URL=                        # Upstash Redis connection string
REDIS_TOKEN=                      # Upstash auth token

# App Configuration
NEXT_PUBLIC_APP_URL=              # Base URL (http://localhost:3000 for dev)
```

### Optional Variables

```bash
# DeepSeek (Alternative AI - Chinese model)
DEEPSEEK_API_KEY=                 # Optional alternative to OpenAI

# Meta Threads API (Social Platform)
THREADS_APP_ID=                   # Threads platform integration
THREADS_APP_SECRET=               # Threads API secret
```

### Environment File Locations
- **Development**: `marketing-automation/.env.local` (gitignored)
- **Template**: `marketing-automation/.env.example` (committed)
- **Production**: Set via Vercel dashboard

### Security Notes
- ⚠️ **Never commit** `.env.local` to git
- ✅ **NEXT_PUBLIC_** prefix = safe for client-side
- 🔒 **No prefix** = server-only secrets
- 🛡️ **SUPABASE_SERVICE_ROLE_KEY** = bypass all RLS, use carefully

---

## 🚀 Server & Deployment Information

### Development Server

```bash
# Navigate to project
cd marketing-automation

# Install dependencies
npm install

# Start dev server
npm run dev

# Server runs at:
http://localhost:3000
```

**Dev Features**:
- Hot Module Replacement (HMR)
- Fast Refresh for React components
- TypeScript type checking
- Automatic route detection

### Build & Production

```bash
# Production build
npm run build

# Start production server
npm start

# Lint code
npm run lint
```

### Deployment Platform: **Vercel**

**Current Deployment**:
- URL: `https://marketing-automation-pink.vercel.app`
- Auto-deploy: `main` branch → production
- Preview deploys: Pull requests

**Vercel Configuration**:
- Framework: Next.js
- Build Command: `npm run build`
- Output Directory: `.next`
- Install Command: `npm install`
- Node Version: 20.x

### Database Server: **Supabase**

**Architecture**:
- **Database**: PostgreSQL 15+ (hosted by Supabase)
- **Auth**: Supabase Auth (built on GoTrue)
- **Storage**: Supabase Storage for user uploads
- **Realtime**: Supabase Realtime for live updates

**Connection**:
- Direct connection via REST API (no connection pooling needed)
- Row Level Security (RLS) enabled on all tables
- Migrations located in: `supabase/migrations/`

### Redis Server: **Upstash**

**Purpose**: Job queue for async video processing
- **Provider**: Upstash (serverless Redis)
- **Library**: BullMQ + ioredis
- **Use Cases**:
  - Video rendering jobs
  - Batch content generation
  - Scheduled posts

**Configuration**:
```typescript
// lib/queue/connection.ts
import { Redis } from 'ioredis'

const redis = new Redis(process.env.REDIS_URL, {
  token: process.env.REDIS_TOKEN
})
```

### External APIs

| Service | Purpose | Rate Limits | Cost |
|---------|---------|-------------|------|
| **OpenAI GPT-4o-mini** | Content generation | 500 RPM | ~$0.15/1M tokens |
| **Replicate** | AI image generation | 50 req/min | Per-use pricing |
| **Pexels API** | Stock photos/videos | 200 req/hour | Free |
| **Google Trends** | Trend analysis | Unofficial API | Free |
| **Meta Threads** | Social posting | TBD | Free (OAuth) |

---

## 📊 Database Schema (Key Tables)

### Core Tables

**profiles** - User accounts (extends Supabase Auth)
```sql
id UUID PRIMARY KEY (references auth.users)
email TEXT
full_name TEXT
avatar_url TEXT
created_at TIMESTAMP
```

**brands** - Multi-brand management
```sql
id UUID PRIMARY KEY
user_id UUID (references profiles)
name TEXT
description TEXT
product_type TEXT
target_market TEXT[]
logo_url TEXT
brand_colors JSONB
brand_voice JSONB
```

**personas** - Writer personas per brand
```sql
id UUID PRIMARY KEY
brand_id UUID (references brands)
name TEXT
description TEXT
age_range TEXT
gender TEXT
job_title TEXT[]
pain_points TEXT[]
goals TEXT[]
```

**content** - Generated content
```sql
id UUID PRIMARY KEY
brand_id UUID (references brands)
persona_id UUID (references personas)
type TEXT (post, video, blog)
platform TEXT (instagram, youtube, tiktok)
content JSONB
status TEXT (draft, scheduled, published)
scheduled_at TIMESTAMP
```

### Access Control
All tables use RLS policies:
```sql
-- Example: Users can only see their own brands
CREATE POLICY "Users can view own brands" ON brands
  FOR SELECT USING (auth.uid() = user_id);
```

---

## 🎯 Common Development Tasks

### Adding a New Content Type

1. **Update database schema**: Add migration in `supabase/migrations/`
2. **Create type definition**: Add to `types/` directory
3. **Add generator logic**: Update `lib/ai/content-generator.ts`
4. **Create UI component**: Add to `components/content/`
5. **Add API route**: Create in `app/api/content/`
6. **Update dashboard**: Add to `app/(dashboard)/content/`

### Modifying Video Templates

1. **Template definition**: Edit `lib/video/templates.ts`
2. **Renderer logic**: Update `lib/video/renderer.ts`
3. **UI updates**: Modify `components/video/`
4. **Test locally**: Use `npm run dev` and test video generation

### Adding a New Platform Integration

1. **Platform config**: Add to `lib/platforms/[platform].ts`
2. **API route**: Create `app/api/platforms/[platform]/route.ts`
3. **OAuth flow**: Add callback route if needed
4. **UI component**: Add platform selector to content creation
5. **Test credentials**: Update `.env.example` with new keys

---

## 🐛 Debugging & Troubleshooting

### Video Generation Issues
- **Check browser console**: FFmpeg.wasm logs appear there
- **Memory errors**: Reduce video length or quality
- **FFmpeg not loading**: Check CORS and SharedArrayBuffer headers

### Database Connection Issues
- **Check Supabase status**: https://status.supabase.com
- **Verify env vars**: Ensure `NEXT_PUBLIC_SUPABASE_URL` is correct
- **RLS policies**: Check if policies allow the operation

### Redis/Queue Issues
- **Check Upstash dashboard**: Verify connection
- **Job stuck**: Use BullMQ dashboard to inspect queue
- **Memory limit**: Upstash free tier has 10MB limit

### Utility Scripts

```bash
# Check user accounts
node check_users.js

# Check subscriptions
node check-subscriptions.js

# Delete user (SQL scripts)
psql -f delete-user.sql
psql -f delete-user-complete.sql
```

---

## 📝 Development Notes

### Code Style
- **TypeScript**: Strict mode enabled
- **ESLint**: Next.js recommended config
- **Formatting**: Use project's ESLint rules
- **Naming**:
  - Components: PascalCase
  - Files: kebab-case for pages, PascalCase for components
  - API routes: lowercase with hyphens

### State Management Patterns
- **Server state**: Fetch in Server Components when possible
- **Client state**: Use Zustand stores in `store/` directory
- **Form state**: React Hook Form with Zod schemas
- **URL state**: Use Next.js searchParams for filters/pagination

### Performance Considerations
- **Images**: Use Next.js `<Image>` with `remotePatterns` config
- **Code splitting**: Dynamic imports for heavy components
- **Server Components**: Prefer over Client Components when possible
- **Database queries**: Use Supabase indexes for common queries

---

## 🚧 Known Limitations

1. **Video Length**: Browser-based FFmpeg limited to ~3min videos
2. **Concurrent Jobs**: Redis free tier limits concurrent processing
3. **API Rate Limits**: OpenAI 500 RPM, Pexels 200/hour
4. **Browser Support**: FFmpeg.wasm requires SharedArrayBuffer (Chrome/Edge/Firefox)
5. **Mobile Video**: Limited by mobile browser memory

---

## 📚 Additional Resources

- **Main Documentation**: `/README.md` (Korean)
- **User Guide**: `/marketing-automation/docs/*.md` (Korean)
- **Version Comparison**: `/COMPARISON.md`
- **Supabase Dashboard**: Access via Supabase console
- **Vercel Deployment**: https://vercel.com/dashboard

---

## 🎨 Brand-Specific AI Writing Guides

브랜드별 AI 글쓰기 가이드 파일이 있는 경우 해당 가이드를 참고하여 콘텐츠를 생성해야 합니다.

### 등록된 브랜드 가이드

| 브랜드 | 가이드 파일 | 설명 |
|--------|-------------|------|
| **MybidWise** | `docs/mybidwise-brand-identity.md` | 정부지원사업 정보 큐레이터 |

### 브랜드 가이드 적용 규칙

1. **브랜드 이름 매칭**: 사용자가 선택한 브랜드 이름이 위 테이블의 브랜드와 일치하면 해당 가이드 파일 참조
2. **글쓰기 스타일 적용**: 가이드에 정의된 톤, 문장 구조, 타겟 오디언스 반영
3. **금기 사항 준수**: 각 브랜드별 금기 사항 철저히 준수
4. **콘텐츠 형식 준수**: 가이드에 정의된 콘텐츠 형식 및 구조 따르기

### 새 브랜드 가이드 추가 방법

1. `docs/[brand-name]-brand-identity.md` 파일 생성
2. 위 테이블에 브랜드 정보 추가
3. 가이드 파일에 다음 섹션 포함:
   - AI 정체성 및 컨셉
   - 타겟 오디언스
   - 글쓰기 스타일 가이드
   - 콘텐츠 형식
   - 금기 사항

---

**Last Updated**: 2025-12-08
**Project Version**: Simple v1.0
**Next.js Version**: 16.0.3
**Database**: Supabase PostgreSQL
