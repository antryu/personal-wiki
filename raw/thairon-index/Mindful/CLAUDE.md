# CLAUDE.md — Mindful Practice Platform Prototype

## Overview
Interactive web prototype for a mindful practice platform. Demonstrates the core experience flow (onboarding → breathing session → celebration → home → journey → together) inside an iPhone-style phone frame. Built for investor/user/stakeholder demos.

## Tech Stack
- **Framework**: Next.js 16.1 + React 19 + TypeScript (strict mode)
- **Styling**: Tailwind CSS v4 (`@theme inline` in globals.css)
- **Animation**: Framer Motion 12.x (breathing circle, screen transitions, celebrations)
- **Audio**: Web Audio API (synthesized tones — no external audio files)
- **State**: React Context + useReducer (app-context.tsx)
- **Data**: localStorage + mock data (no backend)

## Commands
- `npm run dev` — Start dev server (default port 3000)
- `npm run build` — Production build
- `npm run lint` — ESLint (flat config, eslint.config.mjs)
- `npx tsc --noEmit` — TypeScript type check

## Directory Structure
```
app/                    # Next.js App Router
  globals.css           # Design tokens + 5 time-of-day CSS themes
  layout.tsx            # Fonts (Inter + Noto Serif KR), metadata
  page.tsx              # Entry point → PhoneFrame

components/
  phone-frame.tsx       # Desktop iPhone bezel (390×844) + mobile fullscreen
  app-shell.tsx         # Screen router (AnimatePresence) + gradient background
  bottom-nav.tsx        # 3 tabs: 수련 / 여정 / 함께
  demo-controls.tsx     # Hidden panel (bezel triple-tap): theme + journey mode
  screens/              # 6 screen components (onboarding, breathing, session-complete, home, journey, together)
  breathing/            # BreathingCircle (3 modes: idle/ready/active), BreathingGuide
  effects/              # LightWave (completion celebration)

contexts/
  app-context.tsx       # Screen routing + app state (useReducer + localStorage)

hooks/
  use-breathing-session.ts  # rAF-based breathing timer with phase state machine
  use-audio.ts              # Web Audio API: singing bowl, breath tones, bell
  use-time-theme.ts         # Time-of-day theme (dawn/morning/afternoon/evening/night)
  use-simulated-counter.ts  # "N명 수련 중" simulated live counter

lib/
  breathing-patterns.ts # Onboarding (30s) + basic (60s) breath patterns
  constants.ts          # Design tokens (colors, sizes, timings)
  time-themes.ts        # 5 time themes + getTimeOfDay()
  mock-data.ts          # Journey narratives, live session, groups, partner
```

## Design System
- **Colors**: Deep Teal (#1A3C40), Warm Sand (#E8DCC8), Soft Gold (#C4A35A), Near-Black (#0D1117)
- **Dark mode default** — all themes defined as CSS custom properties in globals.css
- **5 time themes**: dawn (5-7h), morning (7-12h), afternoon (12-18h), evening (18-22h), night (22-5h)
- **Fonts**: `font-serif` = Noto Serif KR (Korean serif), `font-sans` = Inter

## Key Patterns
- **Single AppProvider** wraps both desktop/mobile views in phone-frame.tsx
- **Screen routing** via `state.currentScreen` in app-context (not file-based routing)
- **Breathing circle** has 3 animation modes: idle (home pulse), ready (onboarding glow), active (breath sync)
- **"Render-time state adjustment"** pattern used in hooks (not setState in effects) per React 19 lint rules
- **tickRef pattern** in use-breathing-session.ts to avoid circular useCallback dependency

## Accounts & Deployment
- **Account**: antryu2b@gmail.com (GitHub, Vercel, Supabase 모두 동일)
- **GitHub**: github.com/antryu2b/mindful (private repo)
- **Vercel**: mindful-prototype-xi.vercel.app
- **Supabase**: antryu2b@gmail.com
- ⚠️ 다른 프로젝트(antryu, antryu1b)와 혼동하지 않도록 주의

## Conventions
- All components are client components (`"use client"`)
- Path alias: `@/*` maps to project root
- Korean UI text, English code/comments
- No external API calls — everything is local/mock
