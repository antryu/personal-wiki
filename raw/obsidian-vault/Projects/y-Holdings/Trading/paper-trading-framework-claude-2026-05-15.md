# Paper Trading Framework 구축 보고서

**날짜**: 2026-05-15  
**작성**: Claude executor (Codex M1 폴백 lane)  
**의장 결재**: 5/15 #cap "진행하자"  
**상태**: 완료 — 첫 paper trade 데이터 생성됨

---

## 1. 배경

| 항목 | 내용 |
|---|---|
| 포트폴리오 | 현금 100% (1달간 홀드) |
| 재진입 예정 | 2026-06-15 |
| 검증 목적 | 실 거래 없는 동안 V27 전략 신호 품질 모니터링 |

---

## 2. 구현 내용

### 파일 목록

| 파일 | 역할 |
|---|---|
| `~/y-trading/scripts/paper_trade_engine.py` | ES futures 가격 fetch → BB_ATR 신호 → SQLite 저장 |
| `~/y-trading/scripts/paper_summary_discord.py` | 일일 요약 Discord #cap 전송 |
| `~/y-trading/tests/test_paper_trade_engine.py` | 단위 테스트 17개 |
| `~/y-trading/cron/paper_trading_cron.sh` | cron 설정 가이드 (STAGED) |
| `~/y-trading/data/trades.sqlite` | paper_trades 테이블 |

### paper_trades 테이블 (SQLite)

```sql
CREATE TABLE paper_trades (
  trade_id TEXT PRIMARY KEY,          -- SHA1 해시 (entry_time+direction+version)
  entry_time TEXT NOT NULL,
  entry_price REAL NOT NULL,
  exit_time TEXT,                      -- NULL = 미청산
  exit_price REAL,
  qty INTEGER DEFAULT 2,              -- 의장 기본 사이즈 2계약
  direction TEXT,                     -- LONG / SHORT
  strategy_version TEXT,              -- BB_ATR_V27
  regime TEXT,                        -- T(trending) / R(ranging)
  kronos_confidence REAL,             -- 향후 확장 예약
  pnl_dollar REAL,                    -- qty × $5 × pts
  holding_minutes INTEGER,
  created_at TEXT DEFAULT CURRENT_TIMESTAMP
);
```

### V27 BB_ATR 신호 로직

- BB 20기간 ±2σ  
- ATR 14기간 (Wilder's EWM)  
- 진입: 전봉이 밴드 이탈 → 현봉 회귀  
- Stop-Loss: ATR × 1.5  
- Take-Profit: ATR × 3.0  
- Regime: BB width 50기간 중앙값 기준 T/R 분류  

---

## 3. 첫 실행 결과 (5/11~5/15 backfill)

| 지표 | 값 |
|---|---|
| 총 trades | 63 |
| 승 | 18 |
| 패 | 45 |
| 승률 | 28.6% |
| 누적 P&L (paper) | -$767.95 |
| 실제 P&L (의장) | $0 (현금) |

> 참고: backfill 기간(5/11~5/15)은 ES 하락 추세 구간. LONG 편향 신호가 연속 SL 히트.  
> 1달 데이터(5/15~6/15) 축적 후 전략 평가 예정.

---

## 4. cron 설정 (STAGED — 의장 결재 대기)

```bash
# 5분마다 신호 계산 + DB 저장
*/5 * * * * /Users/andrew/y-trading/.venv/bin/python3 \
  /Users/andrew/y-trading/scripts/paper_trade_engine.py \
  >> /Users/andrew/y-trading/logs/cron_engine.log 2>&1

# 09:00 KST 일일 요약 Discord 전송
0 9 * * * TZ=Asia/Seoul DISCORD_WEBHOOK_CAP="<WEBHOOK_URL>" \
  /Users/andrew/y-trading/.venv/bin/python3 \
  /Users/andrew/y-trading/scripts/paper_summary_discord.py \
  >> /Users/andrew/y-trading/logs/cron_summary.log 2>&1
```

cron 설치 전 `DISCORD_WEBHOOK_CAP` 환경변수 설정 필요.

---

## 5. V&V 결과

| Dim | 항목 | 결과 |
|---|---|---|
| 1 Static | Python 문법 오류 없음 | PASS |
| 3 단위 | pytest 17개 테스트 | 17/17 PASS |
| 4 시스템 | backfill e2e: 가격→신호→DB 63 trades | PASS |
| 7 수학 | P&L = pts × 2 × $5 검증 | PASS |
| 8 FDIR | idempotent (동일 trade_id 중복 방지) | PASS |

---

## 6. 다음 단계

1. `DISCORD_WEBHOOK_CAP` 설정 → cron 의장 결재 후 설치
2. 6/15 시점: 1달 paper trade 데이터 리뷰
3. 승률/PF 기준 V27 파라미터 조정 검토
4. kronos_confidence 컬럼 — Kronos 시스템 연동 시 활성화

---

**Git**: `feat/paper-trading-framework-claude` (M1 local, push 미진행)
