# 🎬 AI 마케팅 자동화 플랫폼 - 비디오 에디션

두 가지 버전으로 제공되는 AI 기반 마케팅 자동화 플랫폼입니다.

> **IMPORTANT: Language Rules**
> - **NEVER use Chinese (Hanzi), Japanese (Kanji/Hiragana/Katakana), or any CJK characters**
> - Allowed languages: **Korean (Hangul) and English ONLY**
> - This rule applies to ALL files in the project

## 📁 프로젝트 구조

```
AI_Marketing/
├── marketing-automation/         ⭐ Simple 버전
│   └── 간단하고 빠른 비디오 생성
│
├── marketing-automation-pro/     ⭐ Hybrid 버전
│   └── Simple + OpenCut 통합
│
├── OpenCut_New/                  📦 참고용 프로젝트
│   └── 오픈소스 비디오 편집기
│
└── COMPARISON.md                 📊 버전 비교 문서
```

---

## 🎯 두 가지 버전

### 1️⃣ Simple 버전 (`marketing-automation/`)

**"빠르고 쉬운 AI 비디오 생성"**

```bash
cd marketing-automation
npm install
npm run dev
```

**특징:**
- ✅ 30초 ~ 3분 만에 비디오 생성
- ✅ AI 자동 생성 중심
- ✅ 4가지 전문가 템플릿
- ✅ 간단한 UI, 쉬운 학습
- ✅ 가벼운 번들 크기 (~2MB)

**적합한 사용자:**
- 비디오 편집 초보자
- 빠른 콘텐츠 생성이 필요한 경우
- 텍스트 중심 마케팅 비디오
- 일상적인 SNS 포스팅

### 2️⃣ Hybrid 버전 (`marketing-automation-pro/`)

**"Simple + OpenCut = 최강의 조합"**

```bash
cd marketing-automation-pro
npm install
npm run dev
```

**특징:**
- ✅ 두 가지 편집 모드 선택 가능
- ✅ Simple 모드: AI 자동 생성 (30초~3분)
- ✅ Advanced 모드: 타임라인 편집 (5~30분)
- ✅ 틱톡/릴스 수준의 전문 편집
- ✅ 멀티트랙, 비디오 클립 편집

**적합한 사용자:**
- 틱톡/인스타 릴스 마케팅
- 다양한 스타일이 필요한 경우
- 전문적인 비디오 제작
- 성장을 고려한 확장성

---

## 🚀 빠른 시작

### Simple 버전 시작하기

```bash
# 1. 폴더 이동
cd marketing-automation

# 2. 의존성 설치
npm install

# 3. 환경 변수 설정
cp .env.example .env.local
# .env.local 파일을 열어서 API 키 입력

# 4. 개발 서버 실행
npm run dev

# 5. 브라우저에서 열기
# http://localhost:3000
```

### Hybrid 버전 시작하기

```bash
# 1. 폴더 이동
cd marketing-automation-pro

# 2. 의존성 설치
npm install

# 3. 환경 변수 설정
cp .env.example .env.local
# .env.local 파일을 열어서 API 키 입력

# 4. 개발 서버 실행
npm run dev

# 5. 브라우저에서 열기
# http://localhost:3000
```

---

## 🎨 주요 기능 비교

| 기능 | Simple | Hybrid |
|------|--------|--------|
| **AI 자동 생성** | ✅ | ✅ |
| **템플릿 기반** | ✅ | ✅ |
| **씬 기반 편집** | ✅ | ✅ |
| **타임라인 편집** | ❌ | ✅ |
| **멀티트랙** | ❌ | ✅ |
| **비디오 클립 편집** | ❌ | ✅ |
| **오디오 트랙** | ❌ | ✅ |
| **고급 필터/효과** | ❌ | ✅ |
| **모드 선택** | ❌ | ✅ |

---

## 📊 성능 비교

```
Simple:
- 번들 크기: ~2MB
- 빌드 시간: ~45초
- 학습 시간: 5분
- 비디오 생성: 30초~3분

Hybrid:
- 번들 크기: ~5MB
- 빌드 시간: ~60초
- 학습 시간: 30분
- 비디오 생성: 30초~30분
  (Simple 모드: 30초~3분)
  (Advanced 모드: 5~30분)
```

---

## 🎯 어떤 버전을 선택할까요?

### Simple 선택 시나리오

```
✅ 비디오 편집 경험이 없음
✅ 빠른 콘텐츠 생성이 주 목적
✅ 텍스트 기반 비디오면 충분
✅ 간단한 프로모션/공지사항
✅ 학습 시간을 최소화하고 싶음
✅ 가벼운 솔루션을 선호
```

### Hybrid 선택 시나리오

```
✅ 틱톡/릴스 마케팅이 필수
✅ 다양한 스타일의 비디오 필요
✅ 전문적인 품질 요구
✅ 비디오 클립 편집이 필요
✅ 향후 확장성 고려
✅ 모든 옵션을 보유하고 싶음
```

> 💡 **추천:** 대부분의 경우 **Hybrid 버전**을 권장합니다.
> Simple 모드로 시작하여 필요 시 Advanced 모드를 사용할 수 있는 유연성이 가장 큰 장점입니다.

---

## 📚 문서

- **비교 문서**: [COMPARISON.md](./COMPARISON.md) - 상세한 기능 비교
- **Simple 가이드**: [marketing-automation/VIDEO_EDITOR_GUIDE.md](./marketing-automation/VIDEO_EDITOR_GUIDE.md)
- **Hybrid 가이드**: [marketing-automation-pro/VIDEO_EDITOR_GUIDE.md](./marketing-automation-pro/VIDEO_EDITOR_GUIDE.md)

---

## 🎬 사용 예시

### Simple 버전 워크플로우

```
1. 콘텐츠 생성 페이지 접속
2. "비디오" 옵션 선택
3. 주제 입력: "신제품 50% 할인"
4. "AI 비디오 생성" 클릭
5. 30초 후 비디오 완성!
6. 필요시 텍스트/색상 수정
7. 내보내기
```

### Hybrid 버전 워크플로우

#### Simple 모드 사용
```
1. 비디오 모드 선택
2. "빠른 생성 모드" 선택
3. [Simple 버전과 동일]
```

#### Advanced 모드 사용
```
1. 비디오 모드 선택
2. "전문 편집 모드" 선택
3. 비디오 클립 업로드
4. 타임라인에 배치
5. 텍스트/음악 추가
6. 트랜지션/필터 적용
7. 정밀 편집
8. 내보내기
```

---

## 🔧 기술 스택

### 공통
- **Framework**: Next.js 16
- **Language**: TypeScript
- **UI**: Tailwind CSS + shadcn/ui
- **Animation**: Framer Motion
- **State**: Zustand
- **Database**: Supabase
- **AI**: OpenAI GPT-4o-mini

### Simple 추가
- **Rendering**: Canvas API + FFmpeg.wasm

### Hybrid 추가
- **Timeline**: OpenCut 기반 커스텀 구현
- **Multi-track**: Zustand 상태 관리
- **Advanced Rendering**: FFmpeg.wasm

---

## 🎨 플랫폼별 최적화

### 지원 플랫폼

| 플랫폼 | 형식 | 길이 | 최적화 |
|--------|------|------|--------|
| YouTube | 16:9 | 15-60초 | 정보 중심 |
| Instagram | 9:16 | 10-30초 | 감성적 |
| TikTok | 9:16 | 7-15초 | 역동적 |
| LinkedIn | 16:9 | 15-45초 | 전문적 |

---

## 🛠️ 개발 명령어

```bash
# 개발 서버 실행
npm run dev

# 프로덕션 빌드
npm run build

# 프로덕션 서버 실행
npm start

# 린트 검사
npm run lint

# 타입 체크
tsc --noEmit
```

---

## 📝 환경 변수

필수 환경 변수:

```bash
# Supabase
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
SUPABASE_SERVICE_ROLE_KEY=

# OpenAI
OPENAI_API_KEY=

# Replicate (이미지 생성)
REPLICATE_API_TOKEN=

# Redis (BullMQ)
REDIS_URL=
REDIS_TOKEN=

# App
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

---

## 🚧 로드맵

### Simple 버전

- [ ] v1.1: 템플릿 10개로 확장
- [ ] v1.2: 자동 자막 생성
- [ ] v1.3: 음악 라이브러리
- [ ] v2.0: 배치 생성 기능

### Hybrid 버전

- [ ] v2.1: AI 편집 제안
- [ ] v2.2: 협업 기능
- [ ] v2.3: 비디오 효과 라이브러리
- [ ] v3.0: 배경 제거, 스티커

---

## 🤝 기여

현재 개발 중인 프로젝트입니다. 기여를 환영합니다!

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request

---

## 📧 문의

문제가 발생하거나 제안사항이 있으시면:
- GitHub Issues
- Email: support@example.com

---

## 📄 라이선스

MIT License

---

**마지막 업데이트**: 2025-11-20
**버전**: Simple v1.0, Hybrid v2.0
