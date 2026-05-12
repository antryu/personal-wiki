---
title: TradingView MCP (atilaahmettaner/tradingview-mcp)
url: https://github.com/atilaahmettaner/tradingview-mcp
saved: 2026-05-12
saved_by: Buddy (Counsely)
trigger: Andrew #buddy 공유 2026-05-12 03:51 KST
category: AI-Tools / MCP / Trading
relevance: 🟢 Cap (S&P500 trading) — high
license: MIT
stars: 2,595 · forks: 561
updated: 2026-05-12 (very active)
---

# TradingView MCP — AI 기반 거래 도구 MCP 서버

## 한 줄 요약
Yahoo Finance + Reddit 감정 + Reuters/CoinDesk 뉴스 + 30+ 기술 지표 + 6 백테스팅 전략을 Claude/MCP client 에게 제공하는 self-hostable MCP 서버. **API key 불필요**.

## 핵심 capabilities

### 백테스팅 엔진 (6 전략)
- RSI / 볼린저밴드 / MACD / EMA cross / Supertrend / Donchian Channel
- Sharpe / Calmar / MDD / 승률 / 기대값 등 기관급 metric
- 현실적 수수료 + 슬리피지 시뮬레이션

### 기술 분석 (30+ 도구)
- 전체 TA 분석
- 봉 패턴 인식 (15가지)
- 멀티 타임프레임 분석
- 주식 스크리닝
- **Bollinger Band ±3 proprietary rating** (자체 표준편차 기반 시그널)

### 실시간 데이터
- Yahoo Finance 가격 조회
- 글로벌 시장 스냅샷 (S&P500, VIX, BTC, ETH 등)

### 감정 & 뉴스
- Reddit 감정 분석
- Reuters / CoinDesk RSS 뉴스
- 통합 분석 (기술 + 감정 + 뉴스 → STRONG BUY/SELL 등급)

### 3-Layer AI 분석
- 기술 분석가 + 감정/모멘텀 분석가 + 위험 관리자 = 협의 등급

## 데이터 소스
- Yahoo Finance / TradingView / Reddit / Reuters / CoinDesk / CoinTelegraph
- Binance / KuCoin / Bybit (crypto)
- NASDAQ / NYSE / EGX / Turkish BIST (주식)

## 인증
**API key 불필요** — Yahoo Finance + 공개 데이터만 사용. 무료 self-host. 유료 호스팅 $9/mo (선택).

## 기술 스택
- Python 3.10+
- MCP 프로토콜
- UV 패키지 매니저
- Windows: Python 3.13 권장 (pandas 휠)

## y-Tower 적용 가능성

### Cap (_y Trading) — 🟢 High
- 30 기술 지표 + 6 백테스팅 전략 = V27 backtest 보완 가능
- Reddit/뉴스 감정 = Cap V29 entry signal 보완 input
- 알파머신 환경 Phase B (news_event 백필) 시 Reuters/CoinDesk RSS 통합 가능
- **Bollinger Band ±3 rating** = V27 의 BB entry 와 hybrid 시험 가치

### Asset (_y Asset) — 🟡 Medium
- 18 종목 (US + KR) 기술 분석 자동화
- Asset 7-point framework 의 4번째 layer (기술 지표) 자동 갱신

### Vita / MyBidWise — ⚪ N/A

## 채택 옵션
- (a) **MCP 서버 self-host** — Claude Code 에 MCP 서버 등록, Cap 채팅에서 직접 도구 호출 가능
- (b) **API 인터페이스 emulate** — 자체 Python 코드로 동일 기능 구현 (의장 own IP)
- (c) **참고만** — 디자인 패턴 학습, code 직접 사용 X

저작권: MIT — 코드 자유 사용 OK, 단 attribution 권장.

## Counsely 권고
**(a) MCP self-host PoC** — 30분 셋업, Claude Code 통합 즉시 검증. 단 의장 Cap V27 라이브 운영 중 — 검증 후 결정.

## 발견 출처
의장 LinkedIn / 트위터 / 직접 검색 — 정확한 출처 미확인. 2026-05-12 03:51 KST 의장이 #buddy 에 공유.

## 메모리 룰 적용
[oss_link_obsidian_save](memory:oss_link_obsidian_save) — OSS 링크 받으면 자동 분석 + 이 폴더에 저장 + Discord 확인 룰.

## 후속 행동
- 의장 검토 후 self-host 결재
- Cap 채팅 도구 통합 시점 결정
- 알파머신 Phase B (news/sentiment) backfill 시 데이터 소스 후보
