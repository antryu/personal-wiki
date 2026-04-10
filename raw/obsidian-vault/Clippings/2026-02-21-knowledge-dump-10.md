# Knowledge Dump - Batch 10 (2026-02-21)

## Peter Steinberger (Moltbot/Clawd) 심층 분석 — unclejobs.ai 스레드

### 배경 스토리
- 120번 실패, 3년 실종
- 과거 '애플이 만든 것처럼' 완벽한 코드에 집착
- 5만 페이지 성경 PDF의 50만 개 링크 처리하며 깨달음: **인간의 디테일은 확장 불가능**
- 번아웃 끝에 3년간 테크 판 떠남
- 2024년 4월 복귀, Claude와 Codex 손에 쥐고 돌아옴
- **이제 코드를 짜는 대신 '시스템'을 지휘**

### 핵심 철학: "Closing the Loop" (Vibe Coding 아님)
- 대충 짜는 코드 혐오 → 대신 **검증 루프 설계**
  1. 에이전트가 코드 짜면 → 스스로 테스트 코드도 작성
  2. 로컬에서 'Full Gate'(린트+빌드+테스트) 통과까지 에이전트 돌린 후 머지
  3. Codex가 10분간 파일 읽으며 스스로 모순 찾게 유도
- **프롬프트 = 설계도이자 문서**

### Maltbot: 자율형 에이전트
- 휴가 중 모로코에서 WhatsApp으로 Mac Studio에 명령
- FFmpeg 찾아서 음성 파일 변환, 주인 답장 늦으면 꾸짖기까지
- user.md + soul.md = 구조화된 메모리 → 가치관 학습하는 '페르소나'

### PR = "Prompt Request"
- 팀원에게 코드 대신 프롬프트 요구
- "어떤 해결책에 도달하기 위해 무엇을 물었는가?" > 코드 한 줄
- "PSPDFKit을 다시 만든다면 인력의 30%로 충분"

### AI 개발 워크플로우 (steipete.me)
- **Ghostty + Claude Code + 최소한의 툴링 = 극강 생산성**
- 복잡한 설정은 오히려 속도 저하
- VS Code는 코드 조회용, 메인 작업은 Ghostty
- **에이전트를 직접 제어(Steering)하는 것이 핵심**
- Vercel, psql 같은 CLI 환경 구축 → 에이전트가 헤매지 않게
- **효율성 = 도구의 숫자가 아니라 제어의 깊이**
- Ghostty 추천 (iTerm 버릴 만큼 좋다)

### 3단계 워크플로우 (LinkedIn 상세)
1. **Specify**: 사람과 핑퐁하며 스펙 고도화. 코드 탐색 + 외부 조사 + 코드베이스 컨텍스트 기반 대화. 사람 체크포인트 지정 → AI 혼자 달려나가지 않게
2. **Execute**: 완성된 스펙 → 구현만 집중. Task를 DAG로 구성, worker에게 배분. E2E 테스트/빌드/린트 검수조건 전부 통과해야 완료. 마무리 될 때까지 멈추지 않고 반복
3. **Compound**: 작업 중 learning + 외부 피드백(PR 리뷰, 세션 등)을 코드베이스에 컨텍스트로 남김. Compound Engineering — 코드만 성장이 아니라 컨텍스트도 함께 성장. (team-attention/ctx 도입 예정)
- **ultrawork 스킬**: /ultrawork 한 번 치면 specify→compound까지 전체 플로우 자동, 사람 체크포인트만 거침
- **핵심 가치**: 일관성(Plan 문서 = SSoT, Task = 런타임 그래프) + 완결성(skill과 subagent 사이에 hook → 빌드 깨짐 방지)

## AI 도구 카테고리 맵 — choi.openai

- **출처**: @choi.openai (Threads, ♥154, RT41)
- AI 올인원 스페이스 = **Genspark**
- AI 에이전트 = **Manus**
- 바이브 코딩 (개발자용) = **Claude Code**
- 바이브 코딩 (비개발자용) = **AI Studio, Lovable, V0**
- 회의록 정리 = **Tiro**
- 과학/연구 = **GPT Pro**
- 가벼운 검색 = **구글 AI Mode**
- 유튜브/세미나 요약 = **Lilys**
- 보고서/리서치 자동화 = **챗GPT 에이전트 모드, Gemini 딥리서치**
- 문서 요약/이해 = **NotebookLM**
- UI 디자이너 = **MagicPath, Stitch**
- AI 크리에이터 = **Higgsfield**
- PDF/이미지/논문 분석 = **Gemini**
- 영상 생성 = **Kling**

## 투자 프롬프트 — human__bro

- 한국 개인투자자 맞춤 포트폴리오 설계 프롬프트:
- "내 투자금은 [금액]원이고, 투자 성향은 [보수/중립/공격]이야. 단기·중기·장기 나눠서 구성해줘. 종목별 비중, 예상 변동성, 기대 수익률, 손절 기준, 리밸런싱 주기를 포함한 현실적인 포트폴리오를 만들어줘."

## 기타

### 재복당 — 띠별 2026년 긴급 조언
- 뱀띠: 동굴에서 나와라, 밝은 광장에서 귀인을 찾아라
- 용띠: 허세와 망상 버려라, 현실적 조언자가 귀인
- 토끼띠: 착한 아이 콤플렉스 버려라, 단호함이 귀인

### 루마 썬팅 보증서
- 유성필 고객, 프리미엄 영등포점(보라매), 보증서 no. vxse20-0008022
- 2026년 1월 28일 시공

---
**태그**: #peter-steinberger #moltbot #ghostty #claude-code #workflow #ai-tools #investment #띠별운세
