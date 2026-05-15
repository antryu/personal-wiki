# KRX Backfill + 일일 cron 등록 보고 (2026-05-15)

**작업 일시**: 2026-05-15  
**작업자**: executor  
**DB**: `~/y-trading/alpha-machine/data/alpha_machine.duckdb` (M1)

---

## B (긴급): 소룩스 290690 최신 데이터 — 완료

### 적재 결과

| 날짜 | 시가 | 고가 | 저가 | 종가 | 등락 | 거래량 |
|------|------|------|------|------|------|--------|
| 2026-05-11 | 3,300 | 3,345 | 3,155 | 3,280 | — | 708,470 |
| 2026-05-12 | 3,270 | 3,315 | 3,100 | 3,160 | -3.7% | 562,273 |
| 2026-05-13 | 3,175 | 3,360 | 3,150 | 3,300 | +4.4% | 550,372 |
| **2026-05-14** | **4,290** | **4,290** | **4,290** | **4,290** | **+30.0% (상한가)** | **1,380,688** |
| 2026-05-15 | 미적재 | — | — | — | — | — |

**5/14 상한가 (+30%) 확인됨.** (고가=저가=종가=4,290 — 단일가 상한가 패턴)  
5/15 데이터: KRX API 당일 미제공 (마감 후 제공 구조 — 오늘 18:00 cron이 처음 처리 예정)

---

## A: 전체 KRX Backfill — 완료

### KRX backfill 결과 (2026-05-12 ~ 2026-05-14)

| 날짜 | 적재 종목 수 | 비고 |
|------|-------------|------|
| 2026-05-12 | 2,769 | 정상 |
| 2026-05-13 | 2,769 | 정상 |
| 2026-05-14 | 2,770 | 정상 |
| 2026-05-15 | 0 | KRX 당일 미제공 (cron 대기) |

**총 적재: 8,308 rows (3거래일)**

### yfinance US Backfill 결과 (전체 36 티커)

- 총 적재: 43,007 rows
- 실패 티커: 없음 (36/36 성공)
- 최신 데이터: 2026-05-14 (IONQ close $57.47)

---

## DB 최종 상태

| Exchange | Rows | Tickers |
|----------|------|---------|
| KOSDAQ | 2,540,622 | 2,095 |
| KOSPI | 1,471,118 | 1,019 |
| NYSE | 28,647 | 22 |
| NASDAQ | 13,013 | 13 |
| CBOE | 1,347 | 1 |
| **TOTAL** | **4,054,747** | **3,150** |

**KRX 최신 날짜: 2026-05-14**

---

## cron 등록 — 완료

`crontab -l` 확인:

```
# Alpha Machine — 일일 데이터 자동 업데이트
# KRX (KOSPI+KOSDAQ): 평일 장 마감 후 18:00 KST
0 18 * * 1-5 /usr/bin/python3 /Users/andrew/y-trading/alpha-machine/connectors/krx_connector.py >> /Users/andrew/y-trading/alpha-machine/logs/krx_daily.log 2>&1
# yfinance US: 미국 장 마감 후 KST 화~토 07:00
0 7 * * 2-6 /usr/bin/python3 /Users/andrew/y-trading/alpha-machine/connectors/yfinance_connector.py >> /Users/andrew/y-trading/alpha-machine/logs/yfinance_daily.log 2>&1
```

| Cron | 스케줄 | 대상 |
|------|--------|------|
| KRX | `0 18 * * 1-5` (평일 18:00 KST) | KOSPI + KOSDAQ 전체 |
| yfinance | `0 7 * * 2-6` (화~토 07:00 KST) | US 36 티커 |

로그 경로:
- `~/y-trading/alpha-machine/logs/krx_daily.log`
- `~/y-trading/alpha-machine/logs/yfinance_daily.log`

**idempotent 설계**: 이미 적재된 날짜는 자동 skip (중복 없음)

---

## 검증 요약

- [x] 소룩스 290690 5/12~5/14 데이터 적재 확인
- [x] 5/14 상한가 +30% 직접 쿼리 검증
- [x] KRX 3거래일 (5/12~5/14) 8,308 rows 적재
- [x] yfinance 36 티커 43,007 rows 적재
- [x] DB 총 4,054,747 rows
- [x] crontab -l 등록 확인
