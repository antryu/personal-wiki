# y-Tower System Architecture

> 29명 AI 에이전트가 10층 빌딩에서 운영하는 AI 회사. EPARE 하네스 기반 실행 + 3중 품질 검증 + 자기진화.
> Last updated: 2026-04-15

## Overview

y-Tower는 실제 기업 조직처럼 부서/위계가 있는 AI 회사 시스템.
회장(사용자)이 지시하면 AI 직원이 5단계로 자동 처리하고, 팀장→경영진→비서실장 순으로 검증 후 보고.

## 실행 흐름

```
트리거 → EPARE(5단계) → 위계 리뷰 → 자기진화
```

### EPARE 5단계
1. **Explore** — 데이터 수집, 현황 파악
2. **Plan** — 계획 + SDART 체크리스트 생성
3. **Act** — 실행 + Karpathy 자가점검 (95%+ or max 3회)
4. **Report** — 결과 종합
5. **Evaluate** — 독립 평가 (15/20 기준, max 2 재시도)

### 위계 품질 게이트
- **Supervisor** (Director): 부서 전문 기준으로 검증, REVISION → 하위 수정 (max 2회)
- **C-Suite**: 교차 부서 관점 검증, REVISION → Supervisor 수정 (max 2회)
- **Counsely**: 회장 보고서 편성 (🔴 의사결정 / 🟡 핵심 발견 / 🟢 참고)

## 에이전트 조직

| 층 | 부서 | 에이전트 |
|----|------|---------|
| 10F | 비서실 | Counsely (Chief of Staff) |
| 9F | 기획조정실 | Tasky, Finy, Legaly |
| 8F | 리스크/감사 | Skepty, Audity |
| 7F | SW개발 | Buildy, Pixely, Testy |
| 6F | 콘텐츠 | Buzzy, Wordy, Edity, Searchy |
| 5F | 마케팅 | Growthy, Logoy, Helpy, Clicky, Selly |
| 4F | ICT | Stacky, Watchy, Guardy |
| 3F | 인사 | Hiry, Evaly |
| 2F | _y Capital | Quanty, Tradey, Globy, Fieldy, Hedgy, Valuey |
| 1F | _y SaaS | Opsy |

## 품질 시스템 (3중)

1. **Inner**: Karpathy Autoresearch — SDART 체크리스트 자가점검, 한 번에 1개 수정
2. **Middle**: EPARE Evaluate — 독립 평가자(Skepty/Pixely/Counsely) 2기준 채점
3. **Outer**: 위계 리뷰 — Supervisor(부서 전문) + C-Suite(교차 부서) APPROVED/REVISION

## 자기진화

- **Layer 1**: XP/레벨업 (매 실행, 레벨 1~10)
- **Layer 2**: 프롬프트 자동 진화 (같은 실패 3회+ → Counsely가 개선)
- **Layer 3**: 백그라운드 리뷰 (5회마다 메타분석)
- **Layer 4**: 턴 기반 메모리/스킬 저장 (Hermes 방식)

## 외부 통합

| 소스 | 적용 | 에이전트 |
|------|------|---------|
| seomachine | SEO/콘텐츠 22 commands + 10 agents | Wordy, Searchy |
| design-farmer | 디자인 시스템 16 phases | Pixely, Logoy |
| Agent-Reach/jina/last30days | 웹 인텔리전스 | Searchy, Buzzy, Quanty |
| Hermes Agent | 자기진화 메커니즘 | 전 에이전트 |

## 하네스 102개

dev(10) + strategy(5) + content(7) + marketing(5) + legal(15) + finance(5) + capital(10) + infra(10) + security(6) + hr(3) + research(8) + pm(18)

## 접속

- 웹: http://100.119.97.60:3000 (Tailscale)
- 가이드: /guide
- 대시보드: /capabilities

## Related

- [[y-holdings-index]]
- [[DECISION-ENGINE]]
- [[DECISION-INTELLIGENCE]]
- [[운영방식-Operating-System]]

## Sources

- [Obsidian 노트](raw/obsidian/main/Projects/y-Holdings/)
- [AGENT-CAPABILITIES.md](https://github.com/antryu/y-company)
