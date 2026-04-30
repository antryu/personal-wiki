---
title: Smart Money Concepts (SMC) Python Library — Cap 평가
tags: [trading, smc, ict, library-evaluation, cap]
created: 2026-04-23
source: joshyattridge/smart-money-concepts
bookmark-status: hold
confidence: low-medium
---

# Smart Money Concepts (SMC) Python Library

**Repo**: https://github.com/joshyattridge/smart-money-concepts

Andrew 가 2026-04-23 #cap 에 공유. Cap 이 Downside-first 판정 완료, 현재 **도입 보류 · 북마크** 상태.

## 한줄 요약

ICT 계열 지표 8종 (FVG · Order Block · BOS · CHOCH · Liquidity Zones · Swing · Sessions · Retracements) 을 구현한 순수 파이썬 분석 라이브러리. 백테스트·실행·리스크 관리 없음. V23 시스템의 필터 컴포넌트로 통합 검증 필요.

## Key Stats

- 1.5k stars · 699 forks · MIT · v0.0.26 (2025-03) · 16 releases
- API: `smc.fvg(ohlc, join_consecutive=False)` 같은 함수형
- 입력: pandas OHLCV DataFrame

## Cap 평가 — Downside First

**Failure modes** (먼저):
- SMC 재현성 논쟁적 (retroactive storytelling 패턴)
- V23 (WR 79.8% / PF 1.76, Long-only) baseline 대비 악화 시 즉시 폐기 규칙 필요
- v0.0.x · 1인 메인테이너 → 라이브러리 신뢰성 리스크
- 실시간 성능 (매 틱 재계산) 미검증
- 과최적화 위험 (지표 8개 조합 in-sample 피팅)

**Confidence**: LOW → MEDIUM

## 검증 프로토콜 (도입 시)

1. 지표 1개만 필터로 추가 (Order Block 권고)
2. V23 OOS 기간 동일 사용 (2025 H2 데이터)
3. WR · PF 동시 개선 증거 필수, 하나라도 악화 → 폐기
4. Nerdy 연구 브리프 → Buildy 백테스트 스크립트 (2-3일)

## 상태

- [x] 2026-04-23 Cap 평가 완료 · 보류 결정
- [ ] OOS 백테스트 (Andrew 결정 대기)
- [ ] Nerdy 연구 브리프 (미착수)

## Related

- [[V21_거래로직]] · [[V21_breakdown]]
- [[V22_breakdown]]
- [[V23_breakdown]] — 현재 baseline
- [[2026-Q1-Trading-Summary]]
- [[변경이력]] — 파라미터 튜닝 히스토리
- [[다종목확장_리서치]] — 대안 확장 방향
- Personal wiki: `finance/trading/smart-money-concepts-library.md` (동기화)

## Note

이 문서는 **평가 기록이지 도입 결정 아님**. V23 가 현재 라이브 운영 중이고 SMC 도입은 보조 가설 검증 대상. Andrew 가 OOS 백테스트 지시 내린 이후 실제 구현 단계 시작.
