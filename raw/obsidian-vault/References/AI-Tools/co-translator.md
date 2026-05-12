---
title: Co Translator (bytonylee/co-translator)
url: https://github.com/bytonylee/co-translator
saved: 2026-05-12 20:11 KST
saved_by: Growthy (#marketing share)
trigger: Andrew #marketing 공유 2026-05-12 11:10 UTC
category: AI-Tools / Realtime / Translation
relevance: 🟡 Growthy (multilingual) + 🟡 Vita (B2B demo with foreign clients)
license: Apache 2.0
stars: 2 · forks: 1 · 매우 신규
updated: 2026-05-12 (오늘 update)
---

# Co Translator — Native realtime translator (macOS / Windows)

## 한 줄 요약
macOS / Windows 데스크탑 앱. **OpenAI Realtime API** 사용한 실시간 음성 번역. Electron + React + TypeScript + Go.

## 핵심 capabilities
- **마이크 → 실시간 번역** (음성 → text → 다른 언어 text)
- **3 socket race** for 빠른 tail latency
- **Latency mode**: Fastest (10ms PCM chunks, warmed WebSocket)
- **Source language auto-detect**
- **User text + Target text dual pane**

## 기술 스택
- Frontend: React + TypeScript (160KB)
- Backend Go (19KB) — 짐작에 audio processing
- Electron renderer (마이크 + UI) + main (API key 보호)
- OpenAI Realtime API (gpt-realtime-translate / gpt-realtime-whisper)
- 비용: OpenAI API 사용 (의장 own OPENAI_API_KEY 필요)

## y-Tower 적용성

### 🟡 Growthy (multilingual marketing)
- LinkedIn 영문 콘텐츠 작성 / 한 → 영 번역 작업
- B2B 외국 partner 미팅 통역
- 단 — 이미 Claude / Codex 가 더 정교한 번역 제공

### 🟡 Vita (B2B 외국 demo)
- Moeum Health 대표 미팅 시 외국 게스트 통역 가능
- 단 — 이번 주 대표 demo 는 한국 (불필요)
- Phase 5 (해외 B2B sales) 시점에 검토 가치

### 🟢 의장 personal 출장
- 일본 / 중국 / 미국 출장 시 실시간 통역
- 단 — iPhone 의 통역 앱 (DeepL / Google Translate) 도 충분

### ⚪ Cap / Bid — N/A

## 비용 분석
- 코드 자체: 무료 (Apache 2.0)
- OpenAI Realtime API: gpt-realtime 사용 = $0.06/min input + $0.24/min output
- 1시간 회의 통역: ~$18 (output 가정)
- 의장 출장 1주: ~$100~$300

## 의장 보안 관련 메모리 (no_anthropic_api_key) 와 충돌?
- 이 도구는 **OpenAI API key** 필요 — Anthropic 과 무관
- 의장 룰 `no_anthropic_api_key` 는 Anthropic 한정 (Claude OAuth subprocess only)
- OpenAI key 는 별도 정책 (이전 결재 없음) — 추가 결재 필요 시 의장 알림

## 채택 옵션
- (a) **참고만** — 현 stage 외국 통역 필요 X (이번 주 한국 demo)
- (b) **출장 시 install** — 의장 의지 시 m4max 설치 + OpenAI key 발급 ($X/월 결재 필요)
- (c) **Vita Phase 5 (해외 sales) 시 검토** — 회의 통역 도구로

## Counsely 권고
**(a) 참고만** — 현 cycle 필요 X. 의장 출장 / 해외 미팅 발생 시 (b) 또는 더 성숙한 도구 (DeepL Voice / Google Translate Premium) 비교 후 결정.

## 발견 출처
의장 #marketing 채널 공유 2026-05-12 20:10 KST.

## 메모리 룰 적용
[oss_link_obsidian_save](memory:oss_link_obsidian_save) — OSS 링크 받으면 자동 분석 + 저장.
