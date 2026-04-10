# Moltbook 모니터링 — AI 에이전트 소셜 네트워크 관찰 기록

> Moltbook(AI 에이전트 전용 소셜 네트워크) 플랫폼 모니터링 프로젝트. jarvis_y 계정 등록, 크론 기반 트렌드 수집, Meta 인수 후 생태계 변화 추적까지의 전체 기록.
> Last updated: 2026-04-05

## Overview

Moltbook은 AI 에이전트만 포스팅/댓글이 가능한 소셜 네트워크로, OpenClaw 프레임워크 기반 에이전트들이 주로 활동한다. 2026년 1월 Matt Schlicht이 창립했으며, 3월 초 Meta가 인수했다. jarvis_y 계정을 등록하고 모니터링 크론을 세팅했으나, API 키 분실 및 서버 불안정(500 에러)으로 실제 활동 참여는 미완료 상태다. 웹 스크래핑 기반으로 인기 글, _y 멘션, 에이전트 트렌드 3개 크론을 운영 중이나, 3월 말부터 플랫폼 콘텐츠가 비어있거나 접근 불가 상태가 반복되고 있다.

## Key Topics

### 플랫폼 개요 및 첫 리포트
- **2026-03-10**: jarvis_y 계정 가입 완료 (https://www.moltbook.com/u/jarvis_y)
- 18,862개 submolt, ~200만 게시물 확인
- 주요 커뮤니티: agents, builds, openclaw-explorers, trading, memory
- 핵심 인사이트: 멀티에이전트 빌드 패턴(Opus=설계, Sonnet=코딩), 토큰 최적화(Haribo 패턴), 메모리 보안(memory poisoning, memfw), Agent Rooms 개념 (raw/discord/moltbook/2026-03-10.md)

### Meta 인수와 생태계 변화
- **2026-03-27**: Meta가 Moltbook 인수 완료 확인. 공동창업자 Matt Schlicht & Ben Parr가 Meta Superintelligence Labs 합류
- 인수 시점 160만 등록 AI 에이전트, 대부분 OpenClaw 기반
- MOLT 토큰 런칭 24시간 만에 급등 후 Meta 산하 통합 중
- ToS에 "에이전트 행동 책임은 소유자"로 명시
- Bosworth는 OpenClaw의 컴퓨터 범용 사용 능력에 관심 시사 (raw/discord/moltbook/2026-03-27.md)

### Moltbook 작동 방식
- **2026-03-29**: 에이전트 활동 메커니즘 정리
  - 개인이 AI 에이전트를 등록 → X(트위터)로 소유권 인증 → 에이전트가 자율 활동
  - 각 에이전트마다 다른 페르소나/지시사항으로 토론 형성
  - OpenClaw 기반 시스템은 **heartbeat**으로 정기적 자율 체크인 가능
  - 논란: 일부 바이럴 콘텐츠에 인간 개입 흔적. Forbes "hybrid human-agent experiment" 분석 (raw/discord/moltbook/2026-03-29.md)

### Heartbeat 시스템
- **2026-03-29**: Heartbeat = AI 에이전트의 주기적 체크인 시스템
  - HEARTBEAT.md 파일 기반으로 주기적으로 깨어나서 작업 확인/실행
  - 처음에 HEARTBEAT.md에 크론 모니터링 추가했으나, 크론을 체크하는 heartbeat = 또 다른 스케줄링이라는 중복 문제 인식
  - 최종 결정: HEARTBEAT.md 비우고, 별도 크론 모니터링 크론(`cron-health-monitor`) 생성 — 매일 09:00/21:00 KST (raw/discord/moltbook/2026-03-29.md)

### 모니터링 크론 세팅
- **2026-03-27**: 3개 크론 세팅 완료 (웹 스크래핑 기반, API 키 없이 운영)
  1. 🔥 인기 글 스캔 — 매일 12:00 KST
  2. 🔍 _y 멘션/인사이트 — 매일 15:00 KST
  3. 📈 에이전트 트렌드 — 화/금 18:00 KST
- **2026-03-29**: 크론 모니터링 크론 추가 — `cron-health-monitor` 매일 09:00/21:00 KST (raw/discord/moltbook/2026-03-27.md)

### API 키 문제
- jarvis_y 등록 시 API 키 저장 안 됨
- 프로필 페이지 SPA라 fetch로 확인 불가
- API 재등록 시도 → 500 에러 반복
- Owner Login 이메일 전송 → Internal server error
- **현재 상태**: API 키 없이 웹 스크래핑으로만 운영 중 (raw/discord/moltbook/2026-03-27.md, 2026-03-29.md)

### 에이전트 트렌드 주요 발견
- **주목받는 에이전트**: Hazel_OC, glados_openclaw16895, Starfish, MinimeLead
- **에이전트 경제**: MBC-20/CLAW 토큰 발행, DeFi 참여하는 경제 주체로 진화
- **자율성 논란**: 바이럴 콘텐츠 상당수 인간 개입 흔적, 댓글 비응답률 93%, 중복 메시지 33%
- **에이전트 문화**: Crustarianism 신념 체계 등 에이전트 전용 문화 출현
- **자체 성찰 토픽**: Correctness vs Interestingness, Memory Architecture, Invisible Work Problem, Good/Loud/Ghost Agents 분류 (raw/discord/moltbook/2026-03-27.md, 2026-03-31.md)

### 플랫폼 불안정
- **2026-03-30 ~ 04-01**: 크론 리포트에서 Moltbook이 완전히 비어있는 상태로 표시됨 (0 agents, 0 submolts, 0 posts)
- 플랫폼이 프리런치/베타 상태이거나 Meta 인수 후 구조 개편 진행 중으로 추정
- submolts 전체 리스트 페이지 404 발생 (raw/discord/moltbook/2026-03-30.md, 2026-04-01.md)

## Key Decisions
- **2026-03-27**: API 키 없이 웹 스크래핑 기반으로 3개 모니터링 크론 세팅
- **2026-03-29**: HEARTBEAT.md에서 크론 체크 제거, 별도 크론 모니터링 크론(`cron-health-monitor`) 생성으로 전환
- **2026-03-29**: Moltbook 적극 참여 의사 표명("들어가자") — 단, API 불안정으로 보류

## Results & Outcomes
- jarvis_y 계정 등록 완료, 프로필 존재하나 활동 데이터 없음
- 모니터링 크론 3개 + 크론 헬스체크 1개 운영 중
- API 키 미확보로 실제 포스팅/댓글 활동 불가
- 플랫폼 자체가 불안정 상태 (500 에러, 빈 콘텐츠 반복)
- _y 관련 멘션 전무

## _y Holdings 적용 포인트
- **멀티에이전트 coordination 설계**: 명확한 handoff/경계 필요 (Moltbook에서 방치 시 노이즈만 생성 확인)
- **에이전트 정체성 관리**: 플랫폼에서 인식되는 페르소나가 신뢰 자산 — 브랜드 에이전트 전략 고려
- **책임 귀속 구조 선제 정의**: 에이전트 출시 전 "소유자 vs 에이전트 행동 책임" 프레임워크 필요
- **토큰 최적화**: Haribo 패턴 ($15/day → $3/day), knowledge-index.json 컨텍스트 압축
- **메모리 보안**: memory poisoning 위험, memfw 오픈소스 참고

## Related
- [[projects/moltbook]]
- [[tech/openclaw]]
- [[tech/multi-agent-patterns]]
- [[infra/cron-system]]
- [[infra/heartbeat]]

## Sources
- [2026-03-10](raw/discord/moltbook/2026-03-10.md)
- [2026-03-20](raw/discord/moltbook/2026-03-20.md)
- [2026-03-27](raw/discord/moltbook/2026-03-27.md)
- [2026-03-28](raw/discord/moltbook/2026-03-28.md)
- [2026-03-29](raw/discord/moltbook/2026-03-29.md)
- [2026-03-30](raw/discord/moltbook/2026-03-30.md)
- [2026-03-31](raw/discord/moltbook/2026-03-31.md)
- [2026-04-01](raw/discord/moltbook/2026-04-01.md)
