# Personal Moat α — Build Report
**Date**: 2026-05-02  
**Builder**: Executor (claude-sonnet-4-6)

---

## Files Created / Modified

### Component A — Thesis Template (Obsidian)
- `~/Thairon/obsidian-vault/Projects/y-Holdings/Asset/thesis/_template-thesis.md` ← NEW

### Component B — Verification Cron
- `~/y-asset/scripts/thesis_verify.py` ← NEW (Python 3, no external deps)

### Component C — Dashboard Widget
- `~/PRJs/y-company/src/components/AssetThesisLedger.tsx` ← NEW
- `~/PRJs/y-company/src/app/api/asset/thesis/route.ts` ← NEW
- `~/PRJs/y-company/src/app/asset/dashboard/page.tsx` ← MODIFIED (import + widget added)

### Component D — Backfill (20 thesis files)
All 20 current holdings, `status: open`, `thesis_date: 2026-05-02`, `horizon_days: 90`.

| asset_id | ticker | position_size_kw |
|---|---|---|
| coin | COIN | 4,187,048 |
| bitx | BITX | 3,577,427 |
| oih | OIH | 3,301,832 |
| xle | XLE | 2,641,057 |
| sil | SIL | 2,622,100 |
| agq | AGQ | 2,476,650 |
| eth | ETH | 2,974,572 |
| ethu | ETHU | 1,494,208 |
| xrp | XRP | 1,942,617 |
| pltu | PLTU | 1,170,145 |
| ionq | IONQ | 993,929 |
| ugl | UGL | 603,949 |
| rgti | RGTI | 511,446 |
| nvdx | NVDX | 264,314 |
| nutrien | NTR | 112,550 |
| kodex_leverage | 122630 | 115,450 |
| pharmsville | 318010 | 73,852 |
| tiger_reits | 329200 | 18,660 |
| kodex_kr_reits | 352560 | 14,565 |
| btc | BTC | 99,661 |

**Backfill count: 20**

### Component E — LaunchD Plist
- `~/y-asset/launchd/com.y-asset.thesis-verify.plist` ← NEW

**Cron schedule**: `StartCalendarInterval Hour=0 Minute=0` = 매일 00:00 UTC = **09:00 KST**

To register:
```bash
cp ~/y-asset/launchd/com.y-asset.thesis-verify.plist ~/Library/LaunchAgents/
launchctl load ~/Library/LaunchAgents/com.y-asset.thesis-verify.plist
```

### Component F — README
- `~/Thairon/obsidian-vault/Projects/y-Holdings/Asset/thesis/README.md` ← NEW

---

## Verification

### Build
```
cd ~/PRJs/y-company && npm run build
✓ Compiled successfully in 1436.3ms
✓ Generating static pages (43/43)
```
**Result: PASS — zero TypeScript errors**

### thesis_verify.py dry-run
```
python3 ~/y-asset/scripts/thesis_verify.py --dry-run
→ 보유 종목: 20개
→ 20개 open — 기한까지 90일 남음
→ 완료: open=20 evaluated=0 hit=0 missed=0 invalidated=0 skipped=0
```
**Result: PASS**

### Synthetic data test
```
python3 ~/y-asset/scripts/thesis_verify.py --test
exit: 0 (PASS)
```
테스트 조건: +15% PnL → +10% target → hit 예상 → hit 판정 ✓

---

## Plist Content

```xml
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE plist ...>
<plist version="1.0">
<dict>
    <key>Label</key>
    <string>com.y-asset.thesis-verify</string>
    <key>ProgramArguments</key>
    <array>
        <string>/usr/bin/python3</string>
        <string>/Users/andrew/y-asset/scripts/thesis_verify.py</string>
    </array>
    <key>StartCalendarInterval</key>
    <dict>
        <key>Hour</key><integer>0</integer>
        <key>Minute</key><integer>0</integer>
    </dict>
    <key>StandardOutPath</key>
    <string>/Users/andrew/y-asset/logs/thesis-verify-stdout.log</string>
    <key>StandardErrorPath</key>
    <string>/Users/andrew/y-asset/logs/thesis-verify-stderr.log</string>
</dict>
</plist>
```

---

## Sample Thesis File (Coinbase)

파일: `coin-2026-05-02.md`

```yaml
---
asset_id: coin
asset_name: Coinbase Global
ticker: COIN
thesis_date: 2026-05-02
thesis_type: long
entry_price_kw: 305612
position_size_kw: 4187048
horizon_days: 90
expected_outcome:
  metric: price_pct
  target: '+15%'
  direction: up
thesis_grounds:
  - 백필 포지션 — thesis 미기록 상태에서 소급 등록
  - 실제 진입 근거 별도 기록 필요
risk_factors:
  - crypto 규제 리스크
  - BTC 가격 연동 하락
status: open
---
```

Horizon: 2026-08-01 (90일 후)

---

## README Content Summary

1. 6요소 검증 기준 매핑 (timestamp/근거/horizon/expected/actual/miss reason)
2. 신규 포지션 진입 시 워크플로우 (5단계)
3. 자동 검증 흐름 (매일 09:00 KST)
4. 미스 발생 시 Andrew 처리 절차
5. 파일 명명 규칙 + status 값 설명
6. 대시보드 접근 경로
7. 스크립트 경로 + launchctl 등록 명령

---

## Dashboard Widget

`AssetThesisLedger` — Asset Dashboard 하단에 추가됨.
- API: `GET /api/asset/thesis` → 모든 thesis 파일 파싱
- 컬럼: 자산 · 근거일 · 기한(일) · 예측 · 실제 · 검증 · 투자액
- 색상: green(적중) / red(미스) / gray(대기중) / amber(무효화)
- D-14 이내 기한: amber 하이라이트
- 상태별 필터 pill
- 컬럼 클릭 → 정렬 토글

---

## 남은 작업 (Andrew 직접)

1. `launchctl load ~/y-asset/launchd/com.y-asset.thesis-verify.plist` — LaunchD 등록
2. M1 배포: `~/Thairon/y-company`에서 `git pull` + `npm run build` + 서버 재시작 (의장 승인 필요)
3. 각 backfill thesis의 `## 상세 근거` 를 실제 진입 이유로 업데이트 (선택)
4. 다음 포지션 진입 시 template 복사 → 실제 thesis 기입
