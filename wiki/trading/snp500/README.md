# S&P 500 MES Trading

> Instrument: MES (Micro E-mini S&P500), exit-on-close + ATR + SL strategy
> Auto-logged from Discord `#snp500-trading` webhook

## Structure

```
snp500/
├── README.md              이 문서
├── trades/YYYY-MM.md      월별 거래 테이블 (요약 + 전체 행)
├── daily/YYYY-MM-DD.md    일일 상세 로그
├── monthly/YYYY-MM-summary.md   월말 자동 요약 (Quanty)
└── strategies/*.md        전략별 문서
```

## Discord Message Format

### Entry (🔔)
```
:bell: **MESM26**
 DIRECTION: LONG/SHORT
 PRICE: 7101.00
SL: 7086.00
 REGIME: UP_HIGH / UP_LOW / DOWN_*
 DT: 2026-04-17 21:00:05
```

### Exit (✅)
```
:white_check_mark: **MESM26**
 DIRECTION: LONG/SHORT
 PRICE: 7162.00
PnL: +61.25pt ($+306.25)
 EXIT: 휴장전청산_S / ATR_S / SL
 REGIME: UP_HIGH
 DT: 2026-04-18 05:21:02
```

Bell(entry) → matching Check(exit) by time order = 1 complete trade.

## Exit Types

- `휴장전청산_S` — pre-close liquidation (session-ending exit)
- `ATR_S` — ATR-based trailing stop
- `SL` — fixed stop loss hit

## Regime

- `UP_HIGH` / `UP_LOW` — bull market, high/low volatility
- `DOWN_HIGH` / `DOWN_LOW` — bear market

## Links

- [[snp500-regime-strategy]]
- [[s-p-500-transaction-records]]
- [[s-p500-performance-summary-march-16-april-15]]
