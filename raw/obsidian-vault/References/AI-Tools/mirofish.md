---
title: MiroFish (666ghj/MiroFish) — Swarm Intelligence Prediction Engine
url: https://github.com/666ghj/MiroFish
saved: 2026-05-13 22:28 KST
saved_by: Buddy (Counsely)
trigger: Andrew #buddy 공유 2026-05-13 22:27 KST
category: AI-Tools / Multi-Agent / Prediction / Simulation
relevance: 🔴 HIGH — Cap / Asset / Counsely 다중 적용 가능
license: (확인 필요 — README 미명시, Shanda backed)
stars: **60,458** · forks: **9,439** · 매우 큰 community
updated: 2026-05-13 (오늘 update)
backed_by: 上海 Shanda (中国 上海 大型 게임/IT 기업)
---

# MiroFish — Swarm Intelligence Prediction Engine

## 한 줄 요약
**Seed (뉴스 / 정책 / 금융 신호) 주입 → 수천 AI agent (personality + 기억 + 행동 로직) 시뮬레이션 → 미래 예측 보고서 출력**.

다중 agent "대규모 사회 진화" simulation 으로 "what if" scenario 분석. 정책 / 금융 / 소설 결말 / 정치 등 광범위 응용.

## 핵심 capabilities

### Workflow (5 단계)
1. **Graph Building**: Seed 정보 추출 + GraphRAG 구축 + 개인/집단 기억 inject
2. **Environment Setup**: Entity 관계 + Persona 생성 + Agent 설정
3. **Simulation**: 양면 platform 병렬 simulation + 자동 예측 요구 파싱 + 동적 시간/기억 update
4. **Report Generation**: ReportAgent 가 simulation 후 환경에서 deep interaction 으로 보고서 생성
5. **Deep Interaction**: 시뮬레이션 안 어떤 agent 와도 chat 가능

### Use cases (이미 검증된 데모)
- **무한대 公의 시뮬레이션** (Wuhan University public opinion event)
- **'홍루몽' 잃어버린 결말 예측** (80장 input → 100장+ ending generation)
- **금융 예측 (coming soon)** ← Cap / Asset 관련
- **정치 뉴스 예측**

## 기술 스택
- Python (762KB) + Vue (545KB) + JavaScript (13KB)
- LLM-agnostic — OpenAI SDK format 인 어떤 LLM 도 가능 (Qwen-plus 권장 — 알리바바 Bailian Platform)
- GraphRAG 기반 구조
- Docker 배포 가능
- High API 소비 — 40 rounds 미만 권장

## y-Tower 적용성 (의장 직관 정확 — **많이 적용 가능**)

### 🔴 Cap (_y Trading) — HIGH
**시나리오 시뮬레이션 도구**:
- "Fed +25bp 인상 발표" → Seed inject
- 100+ agent (Fed members / 기관 trader / 헤지펀드 / retail / 의장 본인) 시뮬레이션
- → S&P500 24h trajectory prediction
- V27/V29g 의 entry signal 강화 input

**알파머신 Phase B 와 정합**:
- 현재 Phase B = statistical correlation (수동 lag analysis)
- MiroFish = agent-based simulation (능동 reasoning)
- 결합: 통계 correlation + 시뮬레이션 = 두 lens

### 🔴 Asset (_y Asset) — HIGH
**한국 시장 sentiment 시뮬레이션**:
- "삼성전자 외인 -257억 순매도" → Seed inject
- Agent (외인 펀드 / 기관 / 사모 / 의장 본인) 시뮬레이션
- → 익일 외인 행동 + 가격 trajectory
- 의장 own thesis 검증 (인적 정보 + simulation 결과 비교)

**Cross-asset 시뮬레이션**:
- Sector spillover (반도체 약세 → 보험사 portfolio 영향)
- 의장 portfolio rebalance 시 multi-agent reaction

### 🔴 Counsely / Buddy (비서실장) — HIGH
**의장 의사결정 multi-agent simulation**:
- "Cap V29g 라이브 전환" Seed → trader / Quanty / Skepty / Risk manager / 의장 → 시뮬레이션
- 정반합 framework 의 자연 확장
- Byzantine + agent simulation = robust decision

### 🟡 Bid (MyBidWise) — MEDIUM
**입찰 경쟁사 행동 예측**:
- "5월 입찰 X 종목" seed → 경쟁업체 (HWP/AI/공공조달 자동화 업체) agent → 예상 가격 / 응찰 행동
- 의장 가격 전략 input

**5 returning user 결제 의사결정 simulation**:
- User persona (현재 free, 사용 패턴) → 결제 trigger event → simulation
- 어떤 가격 + 어떤 기능이 결제로 이끌까

### 🟡 Vita (Moeum Health) — MEDIUM
**B2B sales 시나리오**:
- 보험사 / 병원 / 연구소 대표 agent → Moeum Health pitch presentation 시뮬레이션
- "어떤 메시지 / 어떤 가격 / 어떤 demo 가 LOI 로 이끌까"
- 대표 미팅 preparation 도구

**의료기기법 변경 영향**:
- 식약처 정책 변경 seed → 의료기기 업체 / 보험사 / 환자 agent → Moeum Health 영향 시뮬레이션

### 🔴 알파머신 환경 — Layer 7 (신규 추가)
**기존**: Layer 1 (universal data) ~ Layer 5 (portfolio optimization) ~ Layer 6 (reflection + discovery)
**신규 Layer 7**: **Agent-based forward simulation**
- 통계 correlation (Layer 3) + agent simulation (Layer 7) = 정/반 framework
- "Layer 3 says X correlation, Layer 7 simulates Y trajectory — 합치 voted 결과"

## 비용 분석
- 코드: 무료 (오픈소스)
- LLM API: OpenAI compatible (어떤 모델도 가능)
  - 추천: Qwen-plus (알리바바, 저렴) — Bailian Platform
  - 대체: Claude (의장 OAuth subprocess) / DeepSeek (M4 local)
- High consumption: 40 rounds 시뮬레이션 시 LLM tokens 100k~500k 추정
- 의장 비용 영향: M4 local DeepSeek 사용 시 무료. 클라우드 LLM 사용 시 시뮬레이션 당 $5~30 추정

## 보안 / 의장 룰 정합성
- `no_anthropic_api_key` 메모리: ✅ Anthropic 안 씀 (다른 LLM 사용)
- `infra_separation`: ✅ 별도 toolchain, 의장 자산/트레이딩 인프라 영향 X
- 단 — Chinese-origin (Shanda backed) → IP/data security 검토 필요 시 Legaly [LR]

## 채택 옵션
- (a) **PoC**: m4max 에 local 설치 + Qwen / DeepSeek 연결 → Cap "Fed 인상 시뮬레이션" 1 case 검증 (1~2일)
- (b) **알파머신 Layer 7 통합**: Phase C 작업 (5/14~5/16, 1주) — 통계 correlation 과 함께
- (c) **참고만 + Counsely 정반합 framework 추가 옵션**: 향후 의장 결재 시점에 spawn

## Counsely 권고

### 🔴 의장 직관 적중 — "적용할곳 많음" 정확
의장 4 entity (Cap / Asset / Vita / Bid) + Counsely + 알파머신 = **6 적용 영역**.

### 우선순위 추천
**(a) PoC 즉시** (1~2일) — Cap "Fed +25bp 시나리오" 가장 빠른 검증:
- Seed: 2025-12 Fed 발표 (실제 이벤트)
- Agents: 100+ trader / 기관 / retail
- Output: simulated S&P500 24h trajectory
- Comparison: 실제 발생한 trajectory 와 비교 (validation)
- ROI: 큰 catalyst event 예측 정확도 측정

성공 시 → (b) 알파머신 Layer 7 통합.

## 메모리 룰 적용
[oss_link_obsidian_save](memory:oss_link_obsidian_save) — OSS 링크 자동 분석 + 저장.

## 진행 결재
의장 #buddy 또는 #cap 에서 결재 시:
- (a) PoC spawn (Cap Fed scenario)
- (b) 알파머신 Layer 7 통합 (Phase C 일부로)
- (c) Multi-channel use case 정리 (전략 문서)
