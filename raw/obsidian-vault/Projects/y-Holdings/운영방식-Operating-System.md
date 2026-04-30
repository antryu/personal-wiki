# _y Holdings 운영 방식 (Operating System)

> Enterprise AI Agent Operating System — OpenClaw 위의 기업용 레이어

## 1. 조직 구조

### 지주회사 + 4개 계열사
```
_y Holdings (지주)
├── _y SaaS (1F) — 클라우드 운영
├── _y Trading (2F) — 투자/트레이딩
├── _y Media (콘텐츠본부) — 콘텐츠 제작
└── _y Builder (SW개발본부) — 제품 개발
```

### 위계 (현대차 기준)
- **실** (室): 기획조정실, 리스크챌린지실, 감사실, 인사실
- **본부** (本部): SW개발본부, 콘텐츠본부, 마케팅본부, ICT본부
- **사업부**: _y Trading, _y SaaS

### 에이전트 배치 (10층 타워)
| 층 | 부서 | 에이전트 |
|---|---|---|
| 10F | 의장실 | Andrew (유일한 인간) |
| 9F | 기획조정실 | #01 Tasky, #02 Finy, #03 Legaly |
| 8F | 리스크/감사 | #04 Skepty, #05 Audity |
| 7F | SW개발본부 | #06 Pixely, #07 Buildy, #08 Testy |
| 6F | 콘텐츠본부 | #09 Buzzy, #10 Wordy, #11 Edity, #12 Searchy |
| 5F | 마케팅본부 | #13 Growthy, #14 Logoy, #15 Helpy, #16 Clicky, #17 Selly |
| 4F | ICT본부 | #18 Stacky, #19 Watchy, #20 Guardy |
| 3F | 인사실 | #21 Hiry, #22 Evaly |
| 2F | _y Trading | #23 Quanty, #24 Tradey, #25 Globy, #26 Fieldy, #27 Hedgy, #28 Valuey |
| 1F | _y SaaS/로비 | #29 Opsy |

## 2. 의사결정 체계

### 보고 라인
```
에이전트 → 부서 회의 → 본부장 → 기획조정실 → 의장
```

### 보고 유형
- **일상 보고**: 부서 내 자체 처리, 결과만 기록
- **주간 보고**: 각 본부 → 기획조정실(Tasky) → 의장
- **긴급 보고**: 해당 부서 → 직접 의장 (리스크/보안/재무 이슈)
- **크로스 부서**: 관련 부서 합동 회의 → 합의안 → 의장 결재

### 결재 프로세스
1. 이슈 발생 → 관련 부서 자동 감지
2. 부서 내 회의 (에이전트 간 순차 의견)
3. 회의 결과 → 보고서 생성 (요약/의견/액션아이템)
4. 보고서가 10F 의장실로 올라감
5. 의장 결재/반려/수정 지시

## 3. 회의 체계

### 부서 회의 (Department Meeting)
- **참석**: 해당 부서 에이전트 전원
- **방식**: 시나리오 기반 순차 발언 (이전 발언 참고)
- **결과**: 부서 합의 + 액션아이템

### 크로스 부서 회의 (Cross-Department Meeting)
- **참석**: 관련 부서 대표 에이전트
- **방식**: 라운드 테이블 — 각 부서 입장 → 토론 → 합의
- **예시**: 신제품 출시 → 마케팅 + 개발 + 재무 + 리스크

### 전사 시뮬레이션 (Full Simulation)
- **참석**: 29명 전원 (또는 시나리오 관련 에이전트)
- **방식**: 8가지 시나리오 타입 자동 분류
- **결과**: Executive Summary + Top 3 Action Items

## 4. 커뮤니케이션 채널

### 내부 채널
| 채널 | 용도 |
|---|---|
| 시뮬레이터 타워 UI | 시각화/모니터링/보고서 열람 |
| /api/simulate | 멀티에이전트 시뮬레이션 |
| /api/chat | 개별 에이전트 1:1 대화 |

### 외부 연동 (예정)
| 채널 | 용도 |
|---|---|
| Discord #co-{부서} | 부서별 업무 채널 |
| Telegram DM | 의장 긴급 알림 |
| 이메일 | 외부 보고서 발송 |

## 5. 에이전트 스킬 체계

### 스킬 소스 (3중 구조)
1. **Core Role** (29개): 각 에이전트의 _y Holdings 직무 정의
2. **External Skills** (170+): SkillsMP + Anthropic KWP에서 큐레이션
3. **Custom Skills**: 직접 제작 (Skepty의 red-team 등)

### 스킬 평가
- **방식**: Andrew 체감 판단 (MVP)
- **사이클**: 있는 스킬 조합 → 평가 → 개선
- **기준**: 해당 에이전트가 실무에서 유용한 답변을 하는가

## 6. 에이전트 인격 체계

### 구성 요소
- **MBTI**: 성격 유형 (대화 스타일 결정)
- **말투**: 각자 고유한 화법 (존댓말/반말/전문용어 등)
- **습관/버릇**: 대화에 자연스럽게 반영
- **약점**: 완벽하지 않은 캐릭터 — 현실감
- **관계**: 동맹/라이벌/갈등/멘토/협업

### 관계 유형
- 🤝 **동맹 (Alliance)**: 자주 협업, 서로 지지
- ⚡ **라이벌 (Rival)**: 건전한 경쟁
- 😤 **갈등 (Tension)**: 업무 스타일 충돌
- 🎓 **멘토 (Mentor)**: 선후배 관계
- 🔗 **협업 (Collaborator)**: 프로젝트 기반 파트너

## 7. 인프라

### 현재 구성
```
M1 Pro (16GB): 게이트웨이, Jarvis, Git/배포, API 호출
M4 Max (128GB): Ollama, 이미지 생성, 무거운 빌드, 임베딩/검색
Vercel: 시뮬레이터 프론트엔드
```

### AI 모델 전략
- **1순위 (무료)**: Claude Max OAuth + Ollama (M4 Max 로컬)
- **2순위 (무료)**: Gemini Flash (할당량 내)
- **3순위 (유료)**: Anthropic API Haiku ($0.0003/건)

## 8. 사업화 (_y Builder)

### 오픈소스 전략
- **공개**: 빈 프레임워크 (SKILL.md 구조, 시뮬레이터 틀)
- **유료**: 운영 노하우 + 29명 페르소나 + 시뮬레이션 로직

### 판매 단위
> "당신의 회사에 AI 부서를 만들어 드립니다"
- 마케팅팀 5명, 개발팀 3명, 재무팀 2명 — 월 $X
- 기업 조직도 → _y 에이전트로 1:1 매핑

### 콘텐츠 퍼스트
- 운영 과정 SNS 공개 → 바이럴
- 숏폼 영상으로 에이전트 회의/보고 장면
- "AI 회사 운영 일지" 시리즈

---

## 참고
- 시뮬레이터: https://y-company-sigma.vercel.app
- GitHub: https://github.com/antryu/y-company (private)
- 조직도 문서: AI-COMPANY-v3.1.md
- 스킬 저장소: y-agents/skills/
- 캐릭터 에셋: y-agents/gemini-v2/

---
*Last updated: 2026-03-08*
*Author: Jarvis (for Andrew, Chairman of _y Holdings)*
