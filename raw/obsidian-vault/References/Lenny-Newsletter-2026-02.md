# Lenny's Newsletter 핵심 정리 (2026.01~02)

- **Source:** https://www.lennysnewsletter.com
- **Tags:** #프로덕트 #그로스 #AI #ChatGPT

---

## 1. ChatGPT Apps = 새로운 배포 채널 (1/20)

**Author:** Colin Matthews
**Link:** https://www.lennysnewsletter.com/p/chatgpt-apps-are-about-to-be-the

- ChatGPT가 대화 맥락에 따라 앱을 **자동 추천**하는 시대
- MCP 기반, React 위젯으로 제작
- 3가지 포맷: Inline(카드/리스트), Fullscreen(대시보드), PiP(백그라운드)
- 제약: 메시지당 위젯 1개
- **App Store 2008, SEO 초기와 같은 레벨의 기회** — 먼저 진입하는 게 핵심

### 아키텍처
1. ChatGPT 대화 (유저 인텐트 해석)
2. 앱의 Tools (백엔드 서버/API — `search_restaurants`, `book_ticket` 등)
3. 유저 위젯 (React, ChatGPT 샌드박스 내 실행)

### 적용 가능성
- MyBidWise를 ChatGPT App으로 → "정부 입찰 찾아줘"에 자동 노출
- 한국 정부입찰 도메인은 아직 아무도 없음 → 선점 기회

---

## 2. AI Product Sense 키우기 (2/3)

**Authors:** Tal Raviv, Aman Khan
**Link:** https://www.lennysnewsletter.com/p/how-to-build-ai-product-sense

- ChatGPT 같은 소비자 UI 대신 **Cursor/Claude Code 같은 코딩 에이전트**를 일상 업무에 쓰라
- 코딩 에이전트는 추론과정, tool call, context window를 투명하게 보여줌
- "subagent", "context engineering", "agent memory" 개념을 실전 체득
- Cursor로 3개월 비기술 업무 → ChatGPT 3년 사용보다 더 많이 배움

### 모델별 특성
- **Claude:** 깊이/뉘앙스 최고, 넓은 커버리지
- **Gemini:** 증거 기반 최고, 비디오 분석 가능
- **ChatGPT:** 프레이밍/커뮤니케이션 최고, 인용은 부정확

---

## 3. AI 분석 신뢰성 확보법 (2/17)

**Author:** Caitlin Sullivan
**Link:** https://www.lennysnewsletter.com/p/how-to-do-ai-analysis-you-can-actually

- AI 아웃풋은 항상 자신만만 — 틀려도
- 4가지 실패 모드:
  1. **증거 조작** (Invented evidence)
  2. **가짜/일반적 인사이트** (False or generic insights)
  3. **실행 불가한 시그널** (Signal that doesn't guide decisions)
  4. **모순된 인사이트** (Contradictory insights)
- 검증 없이 AI 분석 → 잘못된 백만 달러 의사결정으로 이어짐
- 프롬프팅으로 방지 가능: 원문 유지, 표면 패턴 너머 파기, 모순 탐지
