# 3D AI 회사 대시보드 레퍼런스 리서치

> 작성: 2026-03-06 | -y Group 대시보드 설계용

---

## 1. Stanford Smallville (Generative Agents)

### 핵심 개념
- 25명 AI 에이전트가 **가상 마을**에서 자율 생활
- 픽셀아트 마을 (The Sims 스타일)
- 에이전트끼리 대화, 관계 형성, 이벤트 기획 (발렌타인 파티 등)

### 아키텍처 (우리에게 핵심)

```
에이전트 루프:
Perceive(환경 인식) → Memory Stream(기억 저장) → Retrieve(관련 기억 검색)
    → Reflect(고차원 통찰 추출) → Plan(행동 계획) → Act(실행)
```

**Memory Stream (기억 스트림)**
- 모든 행동/대화를 자연어로 저장
- 기억 검색 시 3가지 기준:
  - Recency (최근성) — 최근 기억일수록 가중치
  - Relevance (관련성) — 현재 상황과 코사인 유사도
  - Importance (중요도) — LLM이 부여한 중요도 점수

**Reflection (반성/성찰)**
- 주기적으로 최근 기억을 종합 → 고차원 인사이트 추출
- "나는 최근 Buzzy와 많이 대화했다" → "Buzzy는 콘텐츠 전략에 강하다"
- 인사이트도 Memory Stream에 저장 (인용 포함)

**Planning (계획)**
- 장기 계획 → 시간별 → 분별 세분화
- 새로운 상황 발생 시 계획 업데이트

### -y Group 적용

| Smallville 요소 | -y Group 적용 |
|----------------|--------------|
| Memory Stream | 각 에이전트 workspace의 memory/ 파일 |
| Reflection | 주기적 MEMORY.md 업데이트 (이미 하고 있음!) |
| Planning | HEARTBEAT.md + 크론 작업 |
| 가상 마을 | 3D 오피스 대시보드 |
| 에이전트간 대화 | 디스코드 채널 |

**핵심 인사이트:** 우리는 이미 Smallville 아키텍처의 절반을 갖고 있다! Memory Stream = memory/, Reflection = MEMORY.md. 빠진 건 3D 시각화 + 에이전트간 자율 대화.

**GitHub:** https://github.com/joonspk-research/generative_agents
**논문:** https://arxiv.org/abs/2304.03442

---

## 2. NVIDIA Smart City (Omniverse Blueprint)

### 핵심 개념
- 도시 전체의 **디지털 트윈** (물리적으로 정확한 복제)
- AI 에이전트가 실시간 모니터링/최적화
- 센서 데이터 → 디지털 트윈 → AI 분석 → 액션

### 기술 스택

```
NVIDIA Omniverse (디지털 트윈 생성/시뮬레이션)
  + Cosmos (합성 데이터 생성)
  + NeMo (VLM/LLM 학습)
  + Metropolis (비디오 분석 AI 에이전트)
```

### 3단계 워크플로우
1. **SimReady 디지털 트윈 생성** — 항공/위성/지도 데이터로 3D 도시 구축
2. **AI 모델 학습** — 합성 데이터로 파인튜닝
3. **실시간 AI 에이전트 배포** — 모니터링, 최적화, 예측

### 실적 사례
- SNCF (프랑스 철도): 에너지 20% 절감, 다운타임 50% 감소
- Palermo: 1,000개 영상 스트림, 초당 10만 예측
- Kaohsiung: 사고 대응 시간 80% 단축

### -y Group 적용

| NVIDIA 요소 | -y Group 적용 |
|------------|--------------|
| 도시 디지털 트윈 | 회사 디지털 트윈 (3D 오피스) |
| 센서 데이터 | 디스코드 메시지, API 로그, 에이전트 상태 |
| 실시간 대시보드 | KPI 오버레이 (매출, 유저, 토큰) |
| AI 에이전트 | -y 에이전트 28명 |
| 이상 감지 | 장애/이슈 시 빨간 경고 이펙트 |

**핵심 인사이트:** NVIDIA는 "물리 세계의 디지털 복제"를 하는데, 우리는 "AI 조직의 디지털 시각화"를 하면 된다. 복잡도가 훨씬 낮아서 실현 가능.

---

## 3. WorldGrow (Infinite 3D World Generation)

### 핵심 개념
- **무한 확장 가능한 3D 환경** 자동 생성
- 하나의 "시드 블록"에서 시작 → 블록 단위로 확장
- 방/복도가 유기적으로 연결

### 아키텍처

```
Seed Block (시드)
  → Block-by-block Synthesis (블록 단위 생성)
    → Coarse-to-Fine Refinement (거친→섬세 단계적 개선)
      → Infinite 3D World
```

### 핵심 기술
- **3D Block Inpainting** — 문맥을 고려한 공간 확장
- **Coarse-to-Fine** — 전체 레이아웃 → 세부 텍스처 단계적
- 3D-FRONT 데이터셋 기반

### -y Group 적용

| WorldGrow 요소 | -y Group 적용 |
|---------------|--------------|
| Seed Block | 회장실 (기본 공간) |
| Block Extension | 새 부서/계열사 추가 시 공간 자동 확장 |
| Inpainting | 기존 공간과 자연스럽게 연결 |
| Infinite World | 계열사 늘어날수록 가상 캠퍼스 확장 |

**핵심 인사이트:** 현실적으로 WorldGrow 수준의 자동 3D 생성은 과한데, **컨셉은 적용 가능** — 계열사 추가 시 대시보드에 새 건물/구역이 자동으로 생성되는 방식.

**GitHub:** https://github.com/world-grow/WorldGrow
**논문:** https://arxiv.org/abs/2510.21682

---

## 4. 종합: -y Group 3D 대시보드 설계

### Phase 1: MVP (2주)
```
React Three Fiber + Next.js
├── 3D 노드 그래프 (에이전트 28명, 부서별 클러스터)
├── 실시간 활동 피드 (디스코드 메시지 연동)
├── KPI 패널 (매출, 유저, 에이전트 상태)
└── 다크 테마, 회전/줌 가능
```

### Phase 2: Smallville 적용 (1개월)
```
├── 에이전트 캐릭터 배치 (3D 오피스)
├── Memory Stream 시각화 (각 에이전트 기억)
├── 에이전트간 대화 말풍선
├── 자율 행동 애니메이션
└── 반성/계획 상태 표시
```

### Phase 3: 디지털 트윈 (3개월)
```
├── NVIDIA 스타일 실시간 데이터 오버레이
├── 장애 시 3D 경고 이펙트
├── WorldGrow 스타일 공간 확장
├── VR/AR 지원 (WebXR)
└── SNS 공유용 스크린샷/녹화 기능
```

---

## 5. 경쟁/유사 프로젝트

| 프로젝트 | 차이점 |
|----------|--------|
| Smallville | 연구 목적 / 우리는 실제 회사 운영 |
| NVIDIA | 도시 규모 / 우리는 회사 규모 (가볍다) |
| WorldGrow | 3D 생성 기술 / 우리는 시각화 (더 쉽다) |
| Moltbook | 소셜 네트워크 / 우리는 폐쇄형 조직 |
| gather.town | 2D / 우리는 3D + AI 에이전트 |

**우리의 차별점: "실제로 돌아가는 AI 그룹사"를 3D로 보여준다**

---
*리서치: Jarvis | 2026-03-06*
