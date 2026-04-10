# Knowledge 채널: AI 지식 파이프라인 & 대규모 지식 덤프

> 2026년 2월 23일, Discord #knowledge 채널에서 ~167개 스크린샷/문서를 AI 봇으로 일괄 처리한 세션. AI 에이전트 워크플로우, 트레이딩 전략, 보안, 개발 도구 등 다양한 인사이트를 추출하고 프로젝트별 적용 방안을 정리함.
> Last updated: 2026-04-05

## Overview

R.Andrew가 그동안 Threads, X(Twitter), LinkedIn, KakaoTalk, Chrome 등에서 저장해둔 스크린샷 ~167장과 PDF 3개, 노션 Export를 Discord #knowledge 채널에 대량 업로드. M1Pro16Gbot이 배치 단위(Batch 1~14)로 OCR + 요약 + 적용방안을 추출하여 옵시디언 `inbox/`에 14개 파일로 정리함.

핵심 철학: **"저장하는 자"가 아니라 "남기는 자"가 돼야 한다** — 단순 저장이 아닌 요약 + 적용방안 + 액션아이템까지 도출하는 것이 목표.

## Key Topics

### 1. AI 에이전트 워크플로우 & 개발 자동화
- **OpenClaw 멀티 에이전트 6개 세팅**: PM / Frontend / Backend / PromptEng / QA / UXReview를 `.claude/agents/`에 md로 정의, `@pm` 명령으로 자동 분배 (Batch 3)
- **Claude Code 병렬 개발 워크플로우**: Git Issue 먼저 생성 → 병렬 처리 가능하게 분리 → Worktree + 브랜치 병렬 실행 → OpenClaw가 Merge 순서 판단 (Batch 5)
- **Boris Cherny(Claude Code 제작자) 13가지 팁**: git worktree 병렬, Opus+Thinking, 피드백 루프로 품질 2-3배 향상 (Batch 8-9)
- **7시간 야간 자동 개선 루프** (@choisungh): 잠자기 전 AI에게 "밤새 시스템 개선해" → cron job + Evaluation Layer 적용 가능 (Batch 4)
- **qjc.ai 사례**: Claude Code 하나로 10개 AI 팀 운영, 월 1500만→30만, 개발비 1.7억→$200 (Batch 8-9)

### 2. AI 에이전트 6대 트렌드 (Batch 6)
1. Ralph Wiggum — 조건 충족까지 자동 반복
2. Agent Skills — npm처럼 스킬 설치
3. Orchestration — Conductor/Vibe Kanban/Copilot
4. Beads/Gas Town — 장기 기억 + 작업 분배
5. OpenClaw — 메신저 기반 개인 에이전트
6. Sub-agents — 전문 팀 분리

### 3. AI 에이전트 보안 (Batch 6)
- **CIA Triad 적용**: `.ssh/authorized_keys` 변조, `.git/hooks/` 악성코드, **CLAUDE.md 변조 = 에이전트 내부자 위협**
- **Clawdbot 보안 경고**: 900개 서버 인증 없이 노출 (Batch 11-14)
- Andrew 환경에서도 보안 점검 필요

### 4. 트레이딩 & 자동매매
- **키움 MESH26 실전 기록**: 승률 33% (6거래 중 2승), 순손익 -3.50pt. 손절 너무 빠르고 진입 필터링 부족 → ICT 모델 체크리스트 + 최소 홀딩시간 필요 (Batch 3)
- **ICT 모델**: FVG + Liquidity Grab 시그널 추가 검토 (Batch 1)
- **TradingView Screener API**: `pip install tvscreener`, GitHub 285 stars (Batch 4)
- **GROK 주식 프롬프트 8개**: S&P500 트레이딩에 응용 가능 (Batch 11-14)
- **Dexter 아키텍처**: Evaluation Layer(LLM-as-judge) + Scratchpad = mem0 메모리 동일 컨셉 (Batch 2)

### 5. 프롬프트 엔지니어링
- **제레미 어틀리 프롬프트 3법칙**: Chain of Thought, Reverse Prompting, Few-Shot (Batch 2)
- Few-Shot(Best+Worst 예시)을 `.claude/rules/`에 넣으면 코딩 품질 즉시 향상

### 6. 공공데이터 & MCP 서버 (Batch 7)
- **한국 공공데이터 MCP 서버** `data-go-mcp.pps-narajangteo`: 나라장터 입찰공고/낙찰/계약 데이터. ♥337, 공유 214
- `nts-business-verification` — 사업자 진위확인
- `fsc-financial-info` — 기업 재무정보
- 전부 PyPI로 설치 가능 → GovRFP/MyBidWise에 직접 연결 가능

### 7. 도구 & 리소스
- **slopus/happy** (★10k): Codex & Claude Code 모바일/웹 클라이언트, 실시간 음성+암호화 (Batch 8-9)
- **kubony/claude-knowledge-graph**: 마크다운→RDF 지식 그래프+SPARQL (Batch 8-9)
- **Qwen3-TTS**: 한국어 포함, 3초 보이스클론, 0.6B 로컬 구동 (Batch 11-14)
- **Code Simplifier 플러그인**: `claude plugin install code-simplifier` (Batch 11-14)
- **marketingskills 23개 플러그인**: copywriting + seo-audit 특히 강력 (Batch 11-14)
- **프로그래매틱 SEO**: DB 자동화로 대규모 트래픽 사이트 개인 구축 가능 (Batch 11-14)

### 8. 1인 창업 & 비즈니스 인사이트
- **월 4~5억 자동 수익** (@leosofts2016): AI 토큰 3억개/월 사용, 거의 100% 자동화. "유명하지 않고 돈많은 사람" (Batch 4)
- **1인 창업자 유튜버**: Liam Ottley (AI 에이전시), Nick Saraev (n8n 자동화) 우선 시청 (Batch 3)
- **Sangwon Kang의 AI 피트니스**: Git으로 운동 기록, Claude가 트레이너, Context Engineering 적용 (Batch 11-14)

### 9. AI 지식 파이프라인 설계
- Discord #knowledge 채널에 올리면 자동 처리: 트윗 URL → 추출+요약, 스크린캡처 → OCR+정리, 텍스트 → 분류+요약, 논문/기사 → 요약+액션아이템
- 저장 위치: `obsidian-vault/inbox/`
- **핵심 피드백**: "저장만 하면 디지털 쓰레기통" → 내용 요약 + 적용방안 + 실행 가능한 액션아이템까지 포함 필수
- 노션 데이터 가져오기: Export → Markdown & CSV → zip 업로드 방식 채택 (노션 JS 렌더링으로 직접 fetch 불가)

### 10. 프로젝트별 적용 매핑
| 프로젝트 | 관련 인사이트 |
|---------|-------------|
| **GovRFP** | `.claude/rules/` 도입, 대시보드 시각화, AI 세일즈, 나라장터 MCP 서버, 틱톡 자동화 마케팅 |
| **S&P500 봇** | OctoBot 구조, ICT 모델, 레버리지 ETP, Dexter 아키텍처, TradingView API, 야간 자동 개선 루프, GROK 프롬프트 |
| **말해봐(Malhae)** | 대화 시뮬레이터 3단계 |
| **Mindful** | Supabase OAuth + 콜백URL + Screen 타입 수정 |
| **hydrogen-law-rag** | 수소법 3개 PDF 인제스트 + 계층 메타데이터 |

## Key Decisions

- **2026-02-23**: AI 지식 파이프라인은 "저장"이 아닌 "요약 + 적용방안 + 액션아이템"까지 도출하는 방식으로 운영
- **2026-02-23**: 노션 데이터는 Export(Markdown & CSV) → zip 업로드 방식으로 가져오기로 결정
- **2026-02-23**: 스크린샷 대량 처리 시 서브에이전트 백그라운드 실행 방식 채택

## Results & Outcomes

- 총 **~167개 항목** 처리 완료 (스크린샷 + PDF + 노션 Export)
- 옵시디언 `inbox/`에 **14개 파일**로 정리
- 프로젝트별 적용방안 및 우선순위 도출
- **즉시 실행 TOP 3**: (1) `.claude/rules/` GovRFP 도입, (2) ICT 모델 체크리스트 생성, (3) AI 지식 파이프라인 MVP 구현
- **최대 발견**: 한국 공공데이터 MCP 서버 (나라장터 직접 연결 가능)

## Related

- [[projects/govrfp]]
- [[projects/sp500-bot]]
- [[projects/openclaw]]
- [[projects/malhae]]
- [[tech/claude-code]]
- [[tech/ai-agents]]
- [[finance/trading-strategy]]
- [[infra/knowledge-pipeline]]

## Sources

- [2026-02-23](raw/discord/knowledge/2026-02-23.md)
