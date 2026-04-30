---
date: 2026-04-29
source: https://github.com/remotion-dev
type: oss-analysis
tags: [video, react, generation, marketing, ai-tools, remotion]
relevance: growthy, marketing automation, ai-video
license: Remotion License (commercial-friendly with conditions)
---

# Remotion — Programmatic Video with React

> Make videos programmatically using React. The most starred video framework on GitHub.
> 45,061 ⭐ on flagship repo · TypeScript · 30 repos in org · homepage: remotion.dev

## What it is

A React-based framework for **generating videos programmatically**. Compose video frames as React components, then render to MP4 (via FFmpeg) or stream-friendly formats. Used by ~10K+ companies including Meta, Stripe, Notion, Vercel.

## Top repos in `remotion-dev` org

| Repo | ⭐ | Description |
|------|---|-------------|
| **remotion** | 45,061 | Flagship framework |
| **skills** | 2,945 | Agent Skills (?) |
| github-unwrapped | 1,280 | Year-in-review videos (Spotify Wrapped style) |
| trailer | 1,081 | Promo video built with Remotion |
| **template-audiogram** | 253 | Podcast → video clips |
| **template-tiktok** | 245 | TikTok-style captions with Whisper.cpp |
| template-code-hike | 212 | Code snippet animations |
| **template-prompt-to-motion-graphics** | 184 | (LLM → motion graphics) |
| template-three | 97 | + React Three Fiber (3D) |
| **template-prompt-to-video** | 93 | LLM-prompt → narrated story video |
| brand | 67 | Their own brand assets |
| template-helloworld | 64 | Starter |

## Core architecture

```
React components (TypeScript)
       ↓
Remotion runtime → frame rendering
       ↓
FFmpeg → MP4 / WebM / GIF
       ↓
optional: Remotion Lambda (AWS) for parallel rendering
```

## Why this matters (Growthy / 마케팅 lens)

### Direct fit

- **계열사 마케팅 비디오 자동화** — Cap (S&P500 분석 영상) / Bid (RFP 데모) / Moeum (헬스 데이터 OS 소개) 모두 *영상 자료* 필요
- **LinkedIn·Threads SNS 컨텐츠** — `template-tiktok` (TikTok-style with Whisper) → 짧은 영상 자동 생성
- **AI_Marketing/marketing-automation 보강** — 기존 Andrew 자체 빌드 SNS 자동화에 *비디오 layer* 추가
- **신사업 데모** — MCD/형 사업 PoC, Vita Day 0~90 IR 자료 등 *데모 영상*

### Indirect fit

- **template-prompt-to-video** — Claude/Qwen LLM 출력 → 영상으로 자동화
- **template-audiogram** — 의장 podcast/recording → 마케팅 클립
- **template-code-hike** — y-Tower 시연 (코드 + 애니메이션)

## License — *Commercial use 조건부*

> Remotion License (not standard MIT)

- 무료 사용: 개인·교육·OSS 프로젝트
- **상업 사용 시**: 직원/contractor 4명 초과 시 *Company License 필요* (유료)
- Andrew 솔로 founder 단계 = 무료 사용 가능
- 주의: 향후 팀 빌드·외부 위탁 작업자 늘면 라이선스 검토 필요

## vs 기존 Andrew 자산

| 영역 | AI_Marketing/marketing-automation | Remotion |
|------|----------------------------------|----------|
| 짧은 SNS 포스트 | ✓ Threads·LinkedIn 자동화 | — (다른 영역) |
| 비디오 편집기 | FFmpeg + 텍스트 오버레이 (이미 있음) | 더 정교, React composable |
| Programmatic 비디오 | 제한적 | ★ 강점 |
| 자동화 파이프라인 | BullMQ + Redis 설정 | 결합 가능 (별개) |
| 한국어 자막 | (Pexels 이미지) | template-tiktok + Whisper |

→ **AI_Marketing 대체 X, *보완* 가능**. Remotion = *programmatic 영상 컴포저*, AI_Marketing = SNS 컨텐츠·발행. 둘 결합 = LLM 출력 → 자동 영상 → 자동 SNS 발행.

## Use cases for _y Holdings

| 사업 | Remotion 활용 |
|------|------------|
| Cap (_y Trading) | 주간 트레이딩 리뷰 영상 (template-code-hike + 차트 애니메이션) |
| Bid (_y Bid) | MyBidWise 사용 데모 (template-prompt-to-video) |
| Moeum Health (신설 예정) | IR 자료 영상 (10F 의장실 → Day 0~90 액션 시각화) |
| Asset (_y Asset) | 포트폴리오 월간 리포트 (자동 생성) |
| 신사업 (MCD/형) | PlayAuto 대체 데모 영상 |
| Andrew 개인 (LinkedIn) | github-unwrapped 스타일 *Year in Review* |

## 시작하는 path

```bash
# 빠른 시작
npm init video

# 또는 template로
git clone https://github.com/remotion-dev/template-prompt-to-video
```

## Confidence: High (영상 자동화 표준 framework)

- 45K+ stars + Meta/Stripe/Notion 사용 = 운영 안정성 검증
- React 기반 = Andrew 기존 stack과 호환 (Next.js·React)
- AI_Marketing 자산과 보완 가능

## 권고 (Growthy 관점)

- **Phase 1 (즉시)**: `template-prompt-to-video` clone + 1개 비디오 시연 (Cap 주간 리뷰 또는 Bid 데모)
- **Phase 2 (1주)**: AI_Marketing pipeline에 통합 — Claude 출력 → Remotion 렌더 → SNS 발행
- **Phase 3 (1개월)**: 계열사별 *마케팅 영상 자동 생성* (월간 리뷰·IR 영상)

## Cross-references

- 메모리 `oss_link_obsidian_save.md` — 자동 저장 룰 적용
- 자산: `~/Thairon/AI_Marketing/marketing-automation` (이미 보유)
- License 검토 영역: Legaly (4명 초과 시 Company License)

## Verdict

**🟢 추천 — Phase 1 시작 가치 큼**. Andrew 솔로 단계엔 무료, 향후 팀 빌드 시 라이선스만 점검. AI_Marketing 자산과 보완 결합 시 *마케팅 영상 자동화 파이프라인*이 자연스럽게 완성.
