# _y AI 도구 스택 (2026-04-12)

> 현재 사용 중 + 활용 가능한 AI 도구 전체 정리
> Last updated: 2026-04-12

## 현재 활성 스택

| 도구 | 역할 | 상태 |
|------|------|:---:|
| **y-bot** | Discord + Telegram 봇 | ✅ 운영 중 |
| **Ollama + Qwen 32B** | 로컬 LLM | ✅ 운영 중 |
| **Claude Code + OMC** | 코딩 에이전트 | ✅ 운영 중 |
| **Personal Wiki** | 지식 베이스 (150 articles) | ✅ 운영 중 |
| **Obsidian** | Wiki 뷰어/편집기 | ✅ |
| **SEO Machine** | 블로그 콘텐츠 최적화 | ✅ 설치됨 |
| **Karpathy Guidelines** | Claude Code 행동 개선 | ✅ 적용 중 |

## 활용 가능한 도구 (미적용)

### Tier 1: 즉시 적용 가능

| # | 도구 | 역할 | 적용처 |
|---|------|------|--------|
| 1 | **Hermes Agent** | 에이전트 런타임 (크론, 스킬, 메모리) | OpenClaw 대체/보완 |
| 2 | **Hermes Self-Evolution (GEPA)** | 프롬프트/스킬 유전적 진화 | y-bot 프롬프트 최적화 |
| 3 | **Autoresearch (Karpathy)** | 모델 웨이트 자율 최적화 루프 | Qwen 파인튜닝 |
| 4 | **Multica** | 멀티에이전트 프로젝트 관리 | _y Tower 구현 |
| 5 | **Ralph** | 자율 개발 루프 (OMC에 포함) | 이미 있음 |

### Tier 2: 인프라 보강

| # | 도구 | 역할 | 적용처 |
|---|------|------|--------|
| 6 | **ollmcp** | Ollama↔MCP 브릿지 | Claude Code에서 Ollama 직접 사용 |
| 7 | **Graphify** | 코드→지식 그래프 | 프로젝트 구조 시각화 |
| 8 | **DSPy** | 프롬프트 최적화 프레임워크 | 체계적 프롬프트 엔지니어링 |

## Autoresearch (Karpathy Loop)

**핵심:** 630줄 스크립트. AI 에이전트가 밤새 자율 실험.

```
코드 수정 → 5분 훈련 → 결과 비교 → 유지/폐기 → 반복
시간당 ~12개 실험, 밤새 ~100개 실험
```

GitHub 66K+ stars. Fortune이 "The Karpathy Loop"로 명명.

### _y 스택에서 활용법

**Self-Evolution (프롬프트) + Autoresearch (모델) = 복리 효과**

```
1. GEPA로 y-bot 시스템 프롬프트 진화
   → 같은 Qwen으로 더 좋은 답변

2. Autoresearch로 Qwen 파인튜닝
   → wiki 컴파일 특화 모델
   → M4 Max GPU로 밤새 100번 실험

3. 결합하면 Qwen으로 Sonnet급 결과 가능
```

### 실행 계획

| 순서 | 작업 | 예상 시간 |
|------|------|----------|
| 1 | Autoresearch 설치 | 30분 |
| 2 | Qwen wiki 태스크 벤치마크 생성 | 2시간 |
| 3 | 밤새 자율 실험 (100회) | 8시간 (수면 중) |
| 4 | 결과 비교 + 최적 모델 선택 | 1시간 |
| 5 | GEPA 프롬프트 진화 적용 | 2시간 |

## 전체 아키텍처 (목표)

```
사용자 (Discord/Telegram/Obsidian)
    ↓
y-bot (라우팅)
    ├── 일반 대화 → Qwen 32B (파인튜닝된)
    ├── 코딩 → Claude Code CLI
    ├── 검색 → wiki + 웹
    └── 복잡한 분석 → Sonnet API (폴백)
    ↓
Personal Wiki (150 articles)
    ↓
자동 개선 루프
    ├── GEPA → 프롬프트 진화
    ├── Autoresearch → 모델 진화
    └── wiki lint → 지식 정제
```

## Related
- [[tech/y-platform-design]] — y-platform 설계
- [[tech/openclaw-explained]] — OpenClaw 분석
- [[research/world-model/world-model]] — JEPA/GLP 연구

## Sources
- Autoresearch: github.com/karpathy/autoresearch
- Hermes: github.com/NousResearch/hermes-agent
- GEPA: Hermes Self-Evolution 논문
