# Discord Timeline (시계열 기록)
> Period: 2026-03-15 ~ 2026-04-06

---

## 2026-03-15 (토) — Day 1: 시작

### #daily-tracker
- 08:00 골프 레슨 후 숙취 낮잠
- 14:00 보이차집에서 작업 (4시간)
- 18:00 도반이랑 족발
- AI에게 일과 기록 시작
- 주말 루틴 확립:
  - 토: 골프 레슨
  - 일: 테니스 레슨 + 지유명차 명상

---

## 2026-03-15 (일) — Day 2: 루틴 형성

### #daily-tracker
- 08:00~10:00 광교동산 + 호수 산책 (2시간)
- 10:30~11:30 테니스 연습 + 레슨
- ~15:00 AI 작업 (STT/Whisper 세팅)
- 15:00~18:30 지유명차 — 불경 공부 + 명상 (도반 8명)
- 저녁: 청국장 → 지유명차 차
- **Whisper STT 연동 성공** — 음성 메시지 자동 변환
- **S&P 500 크론잡 설정** — 내일 아침 7:30 알림

---

## 2026-03-16 (월) — Day 3: 트레이딩 시작

### #daily-tracker
- S&P 500 선물 롤오버 논의
  - MES 마이크로 (1포인트 = $5)
  - 3월물(MESH26) → 6월물(MESM26) 전환 시기 분석
  - 거래량 크로스오버 기준 설명
- 키움증권 CME 거래 확인

---

## 2026-03-15 ~ 04-04 — 자동화 구축 기간

### #mybidwise-marketing (자동 실행)
- 251건의 AI 자동 생성 마케팅 콘텐츠
- 크론잡 기반 무인 운영

### #daily-tracker (자동 실행)
- 일일 리뷰 자동 생성
- 주간 패턴 분석

---

## 2026-04-05 (토) — 대전환일

### #m116gmac (132건 — 최대 활동일)

**오전: Obsidian 연동 시작**
- 09:49 메모리 저장 요청
- 10:03 "옵시디언과 연계해서 구성해줘"
- 10:09~11:29 personal-wiki 프로젝트 세팅 반복 시도
  - Git clone, TypeScript 설정
  - Anthropic API 키 이슈
  - @anthropic-ai/sdk 패키지 설치

**오후: 모델 스위치 시스템**
- 13:41 "opus로 바꾸는 걸 스위치 같은 걸로 할 수 있어?"
- 13:58 모델 스위치 버튼 생성 (Opus/Sonnet/Qwen3)
- 13:59 "채널별로 모델을 설정할 수 있어?" → 에이전트 분리 논의
- 14:01 "에이전트 분리해볼까?" → config 분석
- 14:03 **19개 채널에 모델 스위치 버튼 동시 배포**

**밤: Karpathy Wiki 패턴**
- Karpathy의 llm-wiki gist 발견
- RAG vs Wiki 차이점 분석
- wiki 구조에 log.md + lint 워크플로우 추가

### #wiki
- 22:02 "어떻게 사용하면 되?"
- "위키피디아처럼 보여줄 수 있어?"
- "웹앱으로 만들어서 보여주는 건 어때?"
- "내 머릿속 구조와 내용을 보는 것 같은 느낌"
- Obsidian 데이터 연동 확인

### #knowledge
- claw-code GitHub 레포 분석
- career-ops GitHub 레포 분석

### #y-tower
- "현재 상황 점검해봐"
- "구현하자. 웹페이지로 보고 싶네"
- Sonnet으로 모델 전환

---

## 2026-04-06 (일) — 인프라 완성일

### #m116gmac (계속)

**새벽: M1↔M4 연결**
- 02:23 "누구니?" → Jarvis 확인
- 02:24 "대화 데이터는 어디에 저장되고 있어?" → M1 확인
- 02:46 "M4에서 디스코드 전체 채널 내용을 옵시디언에 컴파일했는데 확인 가능해?"
- 02:47 M4 personal-wiki 데이터 발견 (`~/PRJs/personal-wiki/raw/discord/`)
- 02:49 M4→M1 SSH 양방향 설정 완료
- 02:50 Karpathy gist → wiki 구조 보강

**아침: 디바이스 연동**
- 02:58 "위키는 항상 M1 M4가 연동되어야 하고, 아이패드, 핸드폰하고도 되면 좋겠는데"
- 03:03 GitHub SSH 키 등록, M1 git sync
- 03:07 Obsidian vault 추가 (M4, M1 모두)
- 03:11 Galaxy Obsidian Git 설정
- 03:13 **PAT 토큰 Discord 노출 → 즉시 revoke 안내**
- 03:15 Galaxy 새 vault 설정
- 03:26 y-tower에 위키 대시보드 시각화
- 03:30 iPad Obsidian 설정

**오전: 배포 & 최적화**
- 04:05 Vercel 배포 완료 (personal-wiki-cyan.vercel.app)
- 04:10 Qwen Coder 32B 다운로드 시작
- 04:11 API 비용 분석 → compile.ts를 Claude→Ollama로 전환
- 04:13 "어디서 API를 사용했는지 확인해봐" → 크론잡 Gemini 발견
- 04:17 searchy + daily-operations → Ollama 전환
- 04:25 y-company 사이트와 wiki 결합 논의

### #wiki
- 위키 내용 품질 확인
- LLM 모델 확인 (현재 Sonnet)
- M4 데이터 접근 논의

### #y-tower
- 위키 대시보드 시각화 요청
- 타임아웃 이슈 (180초→600초)
- "너가 직접 해봐" → GitHub Pages 배포 시도

### #github-trending
- "여기 채널은 올라마 모델로 바꾸자"

### #world-model
- "결과 올려야 되지 않아?"

---

## Key Turning Points (전환점)

| Date | Event | Impact |
|------|-------|--------|
| 03-15 | Daily tracker 시작 | 일상 기록 습관 형성 |
| 03-15 | Whisper STT 연동 | 음성→텍스트 자동화 |
| 03-16 | S&P 500 트레이딩 시작 | 투자 관심 본격화 |
| 04-05 | 모델 스위치 시스템 | 전 채널 AI 접근성 향상 |
| 04-05 | Karpathy wiki 패턴 | 지식 관리 패러다임 전환 |
| 04-06 | M1↔M4 연결 | 인프라 통합 |
| 04-06 | 멀티디바이스 Obsidian | 어디서든 wiki 접근 |
| 04-06 | Gemini→Ollama 전환 | API 비용 절감 |
| 04-06 | Vercel 배포 | wiki 웹 접근 가능 |

---

*Next: 인프라 안정화 후 → 생산적 대화 비중 확대 단계*
