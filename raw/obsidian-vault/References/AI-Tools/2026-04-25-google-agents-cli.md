# google/agents-cli — Gemini Enterprise Agent Platform CLI

- **Source**: https://github.com/google/agents-cli
- **Date saved**: 2026-04-25
- **Stars**: 1,033 (이날 업데이트)
- **License**: Apache 2.0
- **Tags**: #AI #에이전트 #google #cli #gemini #vendor-lockin

## 한줄 요약

Google 이 만든 공식 CLI + 스킬 번들. 코딩 에이전트(Claude Code/Codex/Gemini CLI 등)에게 **Gemini Enterprise Agent Platform** 위에서 에이전트를 빌드·평가·배포하는 expert 능력을 부여.

## 설치

```bash
# 풀 설치 (CLI + 스킬 + Google Cloud 통합)
uvx google-agents-cli setup

# 스킬만 (Claude Code 등에서 invoke 가능)
npx skills add google/agents-cli
# 또는
skills add google/agents-cli -y -g
```

전제 조건: Python 3.11+, [uv](https://docs.astral.sh/uv/), Node.js.

## 어떤 일을 하나

코딩 에이전트에게 다음 능력을 추가:
- 에이전트 시나리오 정의 (예: "verbose 텍스트 → 짧은 grunt 으로 압축하는 caveman 스타일 에이전트")
- 평가(eval) 셋업 + 자동 채점
- Vertex AI / Gemini Enterprise 에 배포
- 거버넌스 / observability / cost 모니터링

> 사용자가 "이런 에이전트 만들어줘" → CLI 스킬이 자동으로 코드 생성 + Google Cloud 연결.

## y-Holdings 관점 평가 (2026-04-25)

| 측면 | y-Tower | google/agents-cli |
|---|---|---|
| 호스팅 | 로컬 · Vercel · 자가 | **Google Cloud (Vertex AI)** |
| LLM | Multi (Claude · Qwen · 로컬) | **Gemini 중심** |
| Lock-in | 없음 | **Google Cloud 강함** |
| 빌링 | 본인 통제 | GCP 빌링 |

**메모리 `no_vendor_lockin` 룰과 충돌 방향**. y-Tower 공통 기반으로 채택은 **부적합**.

## 활용 가능 시나리오

- ✅ **외부 컨설팅 자산** — 클라이언트가 Google Cloud 환경 요구 시
- ✅ **Vita B2B 영업** — Google Cloud 사용하는 잠재 고객 대비 익혀두기
- △ **MyBidWise 공공조달** — 정부 기관 Google Cloud 사용 사례 드묾
- ❌ **y-Tower 자체 인프라 대체** — vendor neutrality 훼손

## 차용 가능 패턴 (vendor lock-in 없이)

스킬 구조나 평가 자동화 패턴은 OS 적이라 차용 가능:
- "에이전트 시나리오 → 스킬 → 평가셋 → 배포" 4단계 파이프라인 디자인
- Eval framework (golden answer 비교, LLM-as-judge 패턴)

이런 부분만 골라서 y-Tower 의 EPARE harness 에 반영 가능.

## 결론

당장 Andrew 가 채택할 도구는 아님. **외부 시장 동향 파악** 및 **컨설팅 자산** 으로 보관. 30분 정도 코드를 둘러보면 평가 자동화 패턴을 y-Tower 에 차용할 가치 있을 수 있음.

## 관련 레퍼런스

- `2026-04-01-Claw-Dev-Analysis.md`
- `2026-04-16-Hermes-vs-OpenClaw.md`
- `2026-04-23-future-slide.md` (별도 추가 가능)
