# _y Asset 포트폴리오 — Obsidian Tier 1 가이드

> **중요**: 이 폴더는 2-tier 포트폴리오 저장 인프라의 **Tier 1 (1차 편집원본)**입니다.
> 실제 거래 실행은 절대 이 폴더에서 이루어지지 않습니다.
> S&P500/MES 선물은 Cap 관할이므로 여기서 제외합니다.

---

## 1. 파일명 규칙

```
YYYY-MM-DD-snapshot.md
```

- 날짜 = 스냅샷 기준일 (예: `2026-04-29-snapshot.md`)
- 파일명과 frontmatter의 `date:` 필드를 **반드시 일치**시킬 것
- `_template-snapshot.md`를 복사해서 작성하세요

---

## 2. Frontmatter 스키마

| 필드 | 타입 | 필수 | 설명 |
|------|------|------|------|
| `date` | YYYY-MM-DD | ✓ | 스냅샷 기준일 |
| `total_kw` | 정수 (원) | ✓ | 전체 포트폴리오 평가액 |
| `breakdown` | 맵 | ✓ | 자산군별 금액 (stock/crypto/real_estate/bond/etf/commodity/cash) |
| `holdings` | 목록 | 선택 | 개별 자산 목록 (아래 참조) |
| `notes` | 문자열 | 선택 | 스냅샷 메모 |

### holdings 항목 스키마

| 필드 | 필수 | 설명 |
|------|------|------|
| `id` | ✓ | 고유 식별자 (영문소문자+하이픈, **변경 금지**) |
| `type` | ✓ | stock / crypto / real_estate / bond / etf / commodity / cash |
| `name` | ✓ | 자산명 |
| `ticker` | 선택 | 종목코드 또는 티커 |
| `quantity` | ✓ | 수량 |
| `avg_price_kw` | 선택 | 평균 매입단가 (원화) |
| `currency` | 선택 | 통화 (기본값: KRW) |
| `custodian` | 선택 | 보관처 (kiwoom, upbit, kebhana, direct …) |
| `notes` | 선택 | 메모 |

---

## 3. Watcher 동작 방식

```
Obsidian markdown (Tier 1)
       ↓ 15분마다
SQLCipher DB ~/y-asset/data/portfolio.db (Tier 2)
```

- **launchd 데몬**: `com.y-asset.sync` (15분 간격 `StartInterval=900`)
- **로그**: `~/y-asset/logs/sync-YYYY-MM-DD.log`
- **idempotent**: 같은 파일을 두 번 돌려도 DB 상태 동일 (ON CONFLICT DO UPDATE)
- **파싱 오류 처리**: frontmatter 파싱 실패 시 해당 파일 스킵, 로그에 에러 기록 후 계속 진행

### 수동 실행

```bash
# 전체 디렉토리 sync
python3 ~/y-asset/scripts/sync-obsidian-to-sqlite.py

# 특정 파일만
python3 ~/y-asset/scripts/sync-obsidian-to-sqlite.py --file ~/Thairon/obsidian-vault/Projects/y-Holdings/Asset/portfolio/2026-04-29-snapshot.md

# 파싱 확인만 (DB 쓰기 없음)
python3 ~/y-asset/scripts/sync-obsidian-to-sqlite.py --dry-run
```

---

## 4. DB 비밀번호 — 최초 설정 절차 (Andrew 직접 실행)

인프라 초기화 시 임시 비밀번호가 Keychain에 저장되어 있습니다.
**보안을 위해 아래 절차로 즉시 교체하세요.**

### 4-1. 새 비밀번호 Keychain 등록

```bash
# Keychain 항목 교체 (기존 임시 비밀번호 삭제 후 새 비밀번호 등록)
security delete-generic-password -s "y-asset-sqlcipher" -a "andrew" 2>/dev/null
security add-generic-password \
  -s "y-asset-sqlcipher" \
  -a "andrew" \
  -w "YOUR_SECURE_PASSWORD" \
  -T "" \
  -j "y-asset portfolio.db SQLCipher encryption key"
```

### 4-2. DB 재암호화 (새 비밀번호로)

```bash
OLD_PASS="CHANGE-ME-bcdf116f750b236f"   # 현재 임시 비밀번호
NEW_PASS="YOUR_SECURE_PASSWORD"          # 위에서 설정한 새 비밀번호

/opt/homebrew/bin/sqlcipher ~/y-asset/data/portfolio.db \
  "PRAGMA key = '${OLD_PASS}'; PRAGMA rekey = '${NEW_PASS}';"
echo "rekey 완료"
```

### 4-3. 검증

```bash
NEW_PASS="YOUR_SECURE_PASSWORD"
/opt/homebrew/bin/sqlcipher ~/y-asset/data/portfolio.db \
  "PRAGMA key = '${NEW_PASS}'; SELECT name FROM sqlite_master WHERE type='table';"
# portfolio_holdings, portfolio_snapshots 출력되면 성공
```

### 4-4. 비밀번호 분실 대비

- Keychain 서비스명: `y-asset-sqlcipher`, 계정: `andrew`
- 1Password 또는 별도 안전 보관소에 백업 권장
- **비밀번호 분실 시 DB 복호화 불가** — Obsidian markdown(Tier 1)이 원본이므로 DB는 재생성 가능

---

## 5. DB 직접 조회

```bash
# 패스워드 가져오기
DB_PASS=$(security find-generic-password -s "y-asset-sqlcipher" -a "andrew" -w)

# 보유 자산 전체 조회
printf "PRAGMA key = '%s';\nSELECT * FROM portfolio_holdings;\n" "$DB_PASS" \
  | /opt/homebrew/bin/sqlcipher ~/y-asset/data/portfolio.db

# 스냅샷 최근 5개
printf "PRAGMA key = '%s';\nSELECT date, total_kw FROM portfolio_snapshots ORDER BY date DESC LIMIT 5;\n" "$DB_PASS" \
  | /opt/homebrew/bin/sqlcipher ~/y-asset/data/portfolio.db
```

---

## 6. 파일 구조 요약

```
~/y-asset/
  data/portfolio.db          # SQLCipher DB (Tier 2)
  scripts/
    init-db.sh               # DB 초기화 (스키마 재생성용)
    sync-obsidian-to-sqlite.py  # Obsidian→SQLite watcher
    reset-db-password.sh     # 비밀번호 교체 헬퍼 (아래 생성됨)
  logs/
    sync-YYYY-MM-DD.log      # 동기화 로그
    launchd-stdout.log       # launchd stdout
    launchd-stderr.log       # launchd stderr
  tests/
    test-sync.sh             # 동기화 검증 테스트

~/Thairon/obsidian-vault/Projects/y-Holdings/Asset/portfolio/
  README.md                  # 이 파일
  _template-snapshot.md      # 스냅샷 템플릿
  YYYY-MM-DD-snapshot.md     # 실제 스냅샷 파일들
```
