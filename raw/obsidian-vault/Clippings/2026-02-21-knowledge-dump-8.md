# Knowledge Dump - Batch 8 (2026-02-21)

## Claude Code 마스터 클래스

### Boris Cherny의 13가지 Claude Code 팁
- **출처**: @boris_cherny (X 스레드, ♥533, 댓글40, 공유155)
- Boris = Claude Code 만든 사람
- 핵심 팁:
  1. **병렬 작업**: 3-5 git worktree 스핀업, 각각 Claude Code 세션 병렬 실행
     - `git worktree add .claude/worktrees/my-worktree origin/main`
     - Claude Desktop 앱에 네이티브 지원 구축한 이유
  2. 웹+모바일 추가 세션 (10-15개 동시)
  3. Opus 4.5 + Thinking 모드 (느려도 결과는 더 빠름)
  4. CLAUDE.md 팀 공유 (지식 복리 효과)
  5. PR 리뷰 @.claude 태그
  6. Plan 모드로 시작 (계획 먼저, 실행 나중)
  7. Slash Command 단축키 (/commit-push-pr 등)
  8. Subagent 워크플로우 (리뷰어, 테스터, 빌더)
  9. PostToolUse Hook 포매팅
  10. 사전 권한 허용 (VIP PASS)
  11. 외부 도구 연동
  12. 긴 작업 & 무인 실행 (하루 넘겨도 OK)
  13. **핵심: 검증 피드백 루프** → 품질 2-3배 향상

### Karpathy 사상 에이전트 스킬 가이드
- **출처**: @lucas_flatwhite (X, 25천 조회)
- GitHub: `forrestchang/andrej-karpathy-skills`
- Claude Code에 카파시 트윗을 에이전트 스킬로 변환
- 800줄 → 자체 리뷰 → 70줄로 압축
- 4가지 핵심 원칙:
  1. 코딩 전에 생각하기 (가정 명시, 불확실하면 질문)
  2. 매일 수십 번 쓰는 워크플로우는 slash command화
  3. PostToolUse hook으로 코드 포매팅 자동화
  4. 오래 걸리는 작업은 background agent나 Stop hook으로 검증
- CLAUDE.md, SKILL.md 정의 활용

### jooneyp의 Claude Code 프로젝트 자동 설정
- **출처**: @jooneyp (X 스레드, 조회 5,122)
- 프로젝트 구조 자동 파악 + 맞춤형 훅 설정 + 실수 방지 패턴 + 관련 파일 리마인더
- 프롬프트 복붙만으로 자동 세팅
- 본인 구성: 서버에 클코+코덱스+OpenClaw+Happy 깔아두고 맥/아이폰/아이패드로 개발
- /build 스킬 → docker compose up -d --build → 사실상 개발망 배포
- GitHub Actions self-hosted runner 4개 → CI/CD 빠름

## 도구 & 플랫폼

### slopus/happy - Codex & Claude Code 모바일 클라이언트
- **GitHub**: `slopus/happy` (★10k, Fork 735)
- Mobile and Web client for Codex and Claude Code
- Realtime voice, encryption, fully featured
- "하루종일 클코한테 일 시키고 싶으면 happy를 쓰십시오"

### OpenClaw 2026.1.30 릴리즈
- **출처**: @moltbott (X, ♥104)
- 🦞 Shell completion (Zsh/Bash/PowerShell/Fish)
- 🆓 Kimi K2.5 + Kimi Coding: 무료 모델
- 🔐 MiniMax OAuth
- 📱 Telegram 6개 수정 (threading → HTML rendering)
- LINE, BlueBubbles, routing, security, OAuth 커뮤니티 수정

### 개발 서버 구성 (nordiske_space)
- 우분투 서버 하나에 여러 프로젝트 개발 → 각각 운영서버로 배포
- SSH로 어디서든 접속, 도커 안 써도 됨
- 1인 개발에서 여러명 개발하는 경우 드물어서 이 구성이 더 편리

## AI 프레임워크

### DSPy - Stanford NLP
- **출처**: @matt_dancho (X, ♥287, 공유67)
- "Stop Prompting LLMs. Start Programming LLMs."
- 프롬프트가 아닌 프로그래밍으로 파운데이션 모델 제어
- 모듈러 AI 시스템 빠르게 iterate
- 분류기, RAG 파이프라인, Agent 루프 등에 활용

## 기타
- keke_appa 댓글들: "이제 스타트업 할 게 없어요. 클로드로 다 개발됨 ㅎㅎ"
- snleaf_official: "스타트업에 스 자도 안붙이고 있습니다"

---
**태그**: #claude-code #tips #boris-cherny #karpathy #happy #openclaw #dspy #dev-setup
