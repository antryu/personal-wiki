# _y Holdings Company Simulator — Design Doc

## 비전
Andrew Tower (DNA 나선형 빌딩)를 배경으로, 29명의 _y 에이전트가 층별 부서에서 일하고, 회의하고, 보고하는 **실시간 회사 시뮬레이터 겸 대시보드**.

## 핵심 기능

### 1. 빌딩 구조 (층별 부서)
```
🏢 Andrew Tower (_y Holdings)

[옥상] 안테나/사이니지 "_y Holdings"
[10F] 🏛️ 회장실 — Andrew (전체회의실 포함)
[9F]  📋 기획조정실 — Tasky, Finy, Legaly
[8F]  🔴 리스크챌린지실 — Skepty / 🔍 감사실 — Audity
[7F]  💻 SW개발본부 — Pixely, Buildy, Testy
[6F]  📺 콘텐츠본부 — Buzzy, Wordy, Edity, Searchy
[5F]  📈 마케팅본부 — Growthy, Logoy, Helpy, Clicky, Selly
[4F]  🖥️ ICT본부 — Stacky, Watchy, Guardy
[3F]  👥 인사실 — Hiry, Evaly
[2F]  💰 _y Capital — Quanty, Tradey, Globy, Fieldy, Hedgy, Valuey
[1F]  ☁️ _y SaaS — Opsy / 로비
```

### 2. 에이전트 행동 시뮬레이션
- **일반 업무**: 자기 자리에서 모니터 보기, 타이핑
- **회의**: 같은 부서 에이전트끼리 회의실에 모임
- **보고**: 개별 에이전트가 엘리베이터 타고 10F 회장실로 이동
- **전체 회의**: 모든 에이전트(or 팀장급)가 10F 대회의실 집합
- **점심/휴식**: 1F 로비나 옥상에서 쉬는 에이전트
- **야근**: 밤에도 일부 에이전트 불 켜진 상태 (Capital팀 등)

### 3. 인터랙션
- **층 클릭** → 해당 부서 확대, 에이전트 목록/상태
- **에이전트 클릭** → 프로필 패널 + **채팅 인터페이스** (실제 AI 대화)
- **회장실 클릭** → 전체 현황 대시보드 + 전체회의 트리거
- **줌 인/아웃** → 빌딩 외관 ↔ 개별 사무실

### 4. 실시간 요소
- 시간대별 빌딩 조명 변화 (낮/밤)
- 에이전트 상태 표시등 (초록=작업중, 노랑=대기, 빨강=오프라인)
- 활동 로그 (우측 피드)
- KPI 카운터 (완료 태스크, 수익 등)

## 기술 스택

### Option A: 2.5D 사이드뷰 (추천 — 빠른 구현)
- **React + PixiJS** (or HTML Canvas)
- 빌딩 단면도 (사이드뷰), 각 층 내부 보이는 구조
- 에이전트 스프라이트가 좌우로 이동
- 엘리베이터 애니메이션
- 참고: SimTower, Tiny Tower 스타일

### Option B: 3D 빌딩 (인상적이지만 복잡)
- **React Three Fiber** 유지
- 빌딩 3D 모델 (층별 단면 가능)
- 카메라 회전 + 줌
- 참고: The Sims 스타일

### Option C: 아이소메트릭 (중간)
- **React + CSS/Canvas**
- 45도 각도 빌딩 뷰
- 참고: Theme Hospital, Two Point Hospital

**추천: Option A (2.5D 사이드뷰)** — 가장 빠르게 구현 가능하고, 빌딩 내부가 잘 보이며, 모바일에서도 작동.

## 채팅 연동
- 에이전트 클릭 → 채팅 패널 오픈
- API: `/api/chat?agent=tasky&message=...`
- 백엔드: Claude API (or OpenClaw 세션 연동)
- 각 에이전트의 페르소나 프롬프트 적용

## 개발 단계

### Phase 1: 빌딩 + 정적 배치 (1-2일)
- [ ] 2.5D 빌딩 사이드뷰 렌더링
- [ ] 10개 층 + 부서 배치
- [ ] 29명 에이전트 캐릭터 스프라이트 배치
- [ ] 층 클릭 → 확대

### Phase 2: 에이전트 움직임 (1-2일)
- [ ] 에이전트 좌우 이동 애니메이션
- [ ] 엘리베이터 이동
- [ ] 행동 스케줄 (업무/회의/보고 사이클)
- [ ] 시간대별 조명

### Phase 3: 인터랙션 + 채팅 (2-3일)
- [ ] 에이전트 클릭 → 프로필 + 채팅
- [ ] Claude API 연동 (에이전트 페르소나)
- [ ] 회장실 대시보드
- [ ] 활동 로그 피드

### Phase 4: 폴리시 (1-2일)
- [ ] 빌딩 외관 + DNA 나선 디테일
- [ ] 사운드 이펙트
- [ ] 모바일 반응형
- [ ] 배포

## 레퍼런스
- Stanford Smallville (에이전트 행동 시뮬레이션)
- NVIDIA Smart City (실시간 시각화)
- WorldGrow (성장 시뮬)
- SimTower / Tiny Tower (빌딩 사이드뷰)
- The Sims (에이전트 자율 행동)

---
*Created: 2026-03-07*
