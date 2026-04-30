# Chronos: Temporal-Aware Conversational Agents with Structured Event Retrieval for Long-Term Memory

- **Source:** https://arxiv.org/abs/2603.16862v1
- **Date:** 2026-03-17
- **Authors:** Sahil Sen et al.
- **Category:** cs.CL (Computation and Language)

## Summary
LLM 대화 에이전트의 장기 메모리 문제 해결 프레임워크. 몇 주~몇 달에 걸친 대화에서 시간 기반 사실/선호를 정확히 추적하고 검색.

## Key Ideas
1. **이벤트 튜플 분해** — 대화를 주어-동사-목적어(SVO) 이벤트 튜플로 분해, datetime 범위 + entity alias 해소
2. **이중 캘린더 구조** — 이벤트 캘린더(구조화된 사실) + 턴 캘린더(원본 대화 컨텍스트)
3. **동적 프롬프팅** — 쿼리 시 뭘 검색할지, 시간 필터 방법, multi-hop reasoning 접근법 자동 생성
4. **Iterative tool-calling loop** — 양쪽 캘린더에 대한 반복적 도구 호출로 multi-hop 질문 해결

## Results
- LongMemEvalS 벤치마크 (500 questions, 6 categories)
- Chronos Low: 92.60%, Chronos High: **95.60%** (SOTA +7.67%)
- 이벤트 캘린더 기여: baseline 대비 +58.9%
- 기타 컴포넌트: +15.5% ~ +22.3%

## _y Holdings 적용 가능성: 7/10

### 적용 포인트
- **agent_memory 구조화** — 현재 단순 텍스트 → SVO 이벤트 튜플로 업그레이드
- **Counsely 시간 기반 검색** — "지난달 Searchy가 보고한 경쟁사 동향" 같은 쿼리
- **의사결정 히스토리** — "3월에 rejected된 directive들" 시계열 검색
- **에이전트 간 정보 공유** — 시간축 기반으로 cross-agent 지식 검색

### 도입 시점
- 현재 agent_memory 248건 → 전체 스캔으로 충분
- **500건+ 넘으면 도입 검토**
- 이벤트 캘린더 인덱싱이 가장 큰 개선 효과 (58.9%)

## Tags
#ai #memory #temporal #long-term #conversational #_y-applicable
