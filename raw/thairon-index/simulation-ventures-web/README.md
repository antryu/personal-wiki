# 🌙 SimVentures Frontend

**SimShield + AlphaRisk + PowerGraph 프론트엔드**

Next.js 14 + Tailwind CSS + Recharts + D3.js

---

## 📊 제품 (3개)

### 1. 🛡️ **SimShield** - 개인 재정 방어 시뮬레이터
- 통화 가치 침식 실시간 분석
- 자산가격 영향 시뮬레이션
- 12개월 정책 시나리오 대시보드

### 2. 📊 **AlphaRisk** - 기관 회의주의자 블룸버그 터미널
- 리스크 프리미엄 분석
- 포트폴리오 최적화 대시보드
- 실시간 시장 신호

### 3. 🕸️ **PowerGraph** - 네트워크 인텔리전스
- 금융 네트워크 시각화
- 전염 위험 네트워크 그래프
- B2B 인프라 평가

---

## 🛠️ 기술 스택

- **Framework**: Next.js 16.1.6
- **React**: 19.2.3
- **Styling**: Tailwind CSS 4.2.1
- **Charts**: Recharts + D3.js
- **UI**: shadcn/ui + Radix UI
- **Language**: TypeScript 5.9.3
- **Icons**: Lucide React

---

## 📦 설치

### 요구사항
- Node.js 18+
- npm 10+

### 설치 단계

```bash
# 저장소 클론
cd simulation-ventures-web

# 패키지 설치
npm install

# 환경 변수 설정
cp .env.example .env.local
# NEXT_PUBLIC_API_URL=http://localhost:8000
```

---

## 🚀 실행

### 개발 환경
```bash
npm run dev
```
브라우저에서 http://localhost:3000 열기

### 프로덕션 빌드
```bash
npm run build
npm start
```

### 배포 (Vercel)
```bash
# Vercel CLI 설치
npm i -g vercel

# 배포
vercel
```

---

## 📁 프로젝트 구조

```
src/
├── app/
│   ├── page.tsx          # 메인 페이지
│   ├── simshield/        # SimShield 제품
│   ├── alpharisk/        # AlphaRisk 제품
│   ├── powergraph/       # PowerGraph 제품
│   └── api/              # API 라우트 (선택)
├── components/
│   ├── ui/               # shadcn/ui 컴포넌트
│   ├── charts/           # Recharts 차트
│   └── layout/           # 레이아웃 컴포넌트
├── lib/
│   └── api.ts            # FastAPI 클라이언트
├── types/                # TypeScript 타입
└── styles/
    └── globals.css       # Tailwind CSS
```

---

## 🎨 주요 컴포넌트

### Card (`src/components/ui/card.tsx`)
```tsx
<Card>
  <CardHeader>
    <CardTitle>제목</CardTitle>
  </CardHeader>
  <CardContent>내용</CardContent>
</Card>
```

### API 호출 (`src/lib/api.ts`)
```tsx
import { api } from '@/lib/api';

const health = await api.health();
const info = await api.getInfo();
```

---

## 🔗 백엔드 연결

### 환경 변수 (`.env.local`)
```
NEXT_PUBLIC_API_URL=http://localhost:8000
```

### API 클라이언트
```typescript
// src/lib/api.ts
const API_BASE = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000';

export async function apiCall<T>(endpoint: string, options?: RequestInit): Promise<T> {
  const response = await fetch(`${API_BASE}${endpoint}`, options);
  return response.json();
}
```

### 사용 예시
```tsx
'use client';

import { useEffect, useState } from 'react';

export default function SimShield() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('http://localhost:8000/api/simshield/scenarios')
      .then(r => r.json())
      .then(setData);
  }, []);

  return <div>{/* 차트 렌더링 */}</div>;
}
```

---

## 📊 대시보드 예시

### SimShield - 통화 침식
```
[Chart] M2 vs CPI vs 구매력
시간: 2010-2026
3개 라인 그래프
```

### SimShield - 정책 시나리오
```
[Chart] Baseline vs Dovish vs Hawkish
12개월 예측
구매력 손실율 비교
```

### AlphaRisk - 리스크 프리미엄
```
[Chart] 포트폴리오 열량도
자산 → 리스크 매핑
```

### PowerGraph - 네트워크
```
[Chart] D3.js 네트워크 그래프
노드: 금융기관
간선: 거래 관계
색상: 리스크 수준
```

---

## 🎯 성능 최적화

- **Image Optimization**: Next.js Image 컴포넌트
- **Code Splitting**: Dynamic imports
- **Caching**: SWR / React Query (추후)
- **Production**: Vercel Edge Network

---

## 📈 성능 목표

| 메트릭 | 목표 | 현황 |
|--------|------|------|
| FCP | < 1s | ✅ |
| LCP | < 2.5s | ✅ |
| CLS | < 0.1 | ✅ |
| Lighthouse | > 90 | 🔵 |

---

## 🧪 테스트

### Unit 테스트 (추가 예정)
```bash
npm run test
```

### E2E 테스트 (추가 예정)
```bash
npm run test:e2e
```

### 린트 & 포맷
```bash
npm run lint
npm run format
```

---

## 📝 라이선스

Private / Not yet published

---

## 👨‍💻 개발자

**Andrew Antru**
- Control Systems PhD
- Quant Trading Background
- Gov Procurement Experience

---

## 🗺️ 로드맵

| 주차 | 목표 | 상태 |
|------|------|------|
| Week 1 | Next.js 초기화 | 🟢 완료 |
| Week 2 | SimShield 대시보드 | 🟡 진행중 |
| Week 3-4 | AlphaRisk UI | 🔵 예정 |
| Week 5-8 | PowerGraph D3.js | 🔵 예정 |
| Week 9-12 | 배포 + 최적화 | 🔵 예정 |

---

**Created**: 2026-02-25  
**Last Updated**: 2026-02-25
