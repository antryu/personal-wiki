# Discord Channel Analysis Report (Complete)
> Period: 2026-02-23 ~ 2026-04-06 | Source: compiled raw data (M4) | Total: ~187,000 lines

---

## Channel Volume (실제 데이터)

| Channel | Lines | Files | Category |
|---------|-------|-------|----------|
| **#_y-tower** | 63,304 | 32 | _y Holdings 개발 본부 |
| **#knowledge** | 26,038 | 39 | 지식 아카이브 (두뇌) |
| **#mybidwise** | 17,395 | 33 | 정부입찰 플랫폼 |
| **#_y-strategy** | 16,173 | 26 | _y 마케팅/론칭 |
| **#world-model** | 11,337 | 12 | JEPA/World Models 연구 |
| **#ultra-trader** | 10,188 | 7 | 크립토 선물 봇 |
| **#m116gmac** | 9,107 | 31 | M1 Mac 관리 |
| **#snp500-trading** | 8,151 | 22 | MES 선물 자동매매 |
| **#daily-tracker** | 5,703 | 38 | 일상 기록 |
| **#hydrogen-law** | 5,464 | 1 | 수소법 법령 검색 |
| **#m4max128g** | 4,699 | 10 | M4 Mac 관리 |
| **#mybidwise-marketing** | 2,744 | 6 | 마케팅 자동화 |
| **#ai-papers** | 1,862 | 22 | 논문 자동 스캔 |
| **#investing** | 1,621 | 3 | 투자 분석 |
| **#github-trending** | 1,499 | 11 | 기술 트렌드 |
| **#_y-directive** | 1,045 | 7 | 업무 지시 |
| **#moltbook** | 522 | 8 | AI 소셜 |
| **#imacsbot** | 25 | 2 | 테스트 |
| **#snptradingbot** | 0 | 0 | 미사용 |

---

## Category Distribution (진짜 비중)

```
_y Holdings        ████████████████████  43% (81K줄)
  ├ tower 63K | strategy 16K | directive 1K | ai-papers 2K

트레이딩            ████████░░░░░░░░░░░░  17% (31K줄)
  ├ world-model 11K | ultra-trader 10K | snp500 8K | investing 2K

지식/생산성          ██████░░░░░░░░░░░░░░  18% (33K줄)
  ├ knowledge 26K | daily-tracker 6K | github-trending 1.5K

사업 (MyBidWise+법률) █████░░░░░░░░░░░░░░░  14% (26K줄)
  ├ mybidwise 17K | hydrogen-law 5K | mybidwise-marketing 3K | moltbook 0.5K

인프라              ████░░░░░░░░░░░░░░░░   8% (14K줄)
  ├ m116gmac 9K | m4max128g 5K
```

---

## 3대 핵심 프로젝트

### 1. _y Holdings — AI 에이전트 회사 (43%)
- 30명 AI 에이전트, 10층 건물 시뮬레이션
- 현대차 조직도 → AI 회사로 변환
- company.yml PnP: 누구나 YAML로 AI 회사 생성
- GitHub 오픈소스 (Stars 19, Forks 1)
- 데모: https://y-company-oss.vercel.app
- M4 Max에서 Ollama 기반 에이전트 실행

### 2. 트레이딩 시스템 (17%)
- **MES 선물** (VBA, 키움증권): 승률 78.6%, +19.25pt
- **크립토 봇** (Python, 25K줄): 15개 전략, BB +59.6%
- **JEPA 모델**: PF 1.63→2.61 (+60%), MDD -73%
- **로직 수정 이력**: SL 하드리밋, 트레일링 스탑, 레짐 감지, 백테스트 60폴드

### 3. 사업 프로젝트 (14%)
- **MyBidWise**: 정부입찰 플랫폼, SEO/AEO 최적화
- **hydrogen-law**: 수소법 법령 검색 (법망 API, 10x 빠름)
- **법령 통합**: korean-law-mcp 64개 도구, legalize-kr 2,303개 법령

---

## 시기별 흐름

```
2월 말: 초기 세팅
  MyBidWise SEO, 옵시디언 구조화, S&P500 Short 비활성화
  ↓
3월 초: 방향 전환
  _y Holdings 확정, 30명 에이전트 시뮬레이터 착수
  ↓
3월 초~중: 집중 빌드 (피크)
  _y 대시보드 개발 (63K줄), 오픈소스 런칭 준비
  ↓
3월 중~하: 깊이 확장
  World Models JEPA 연구, 864조합 백테스트
  크립토 봇 개발 (15전략, 25K줄)
  법령 통합, 논문 자동 스캔 시스템
  ↓
4월 초: 도구 탐색 + 인프라 확장
  Claude Code 소스 분석, Obsidian 멀티디바이스
  Gemini→Ollama 전환, M1↔M4 연결
```

---

## 핵심 인사이트

### 1. 생산적 채널 비중: 92%
인프라(8%)를 제외한 거의 모든 대화가 실질적 작업과 연결

### 2. 자동화 수준
- **ai-papers**: 매일 arXiv 자동 스캔 (일 9편)
- **mybidwise-marketing**: 크론잡 무인 운영
- **daily-tracker**: 일일 리뷰 자동 생성
- **Tradey 에이전트**: arXiv/Reddit 전략 리서치

### 3. 연구 → 실전 파이프라인
```
#ai-papers (논문) → #world-model (연구) → #snp500-trading (실전 적용)
#knowledge (아이디어) → #_y-tower (개발) → #_y-strategy (배포)
```

### 4. 미활용/저활용 채널
- #investing (3일만 사용) — ARK 분석 이후 중단
- #moltbook (522줄) — 분석만, 실행 없음
- #snptradingbot (0줄) — 미사용
- #imacsbot (25줄) — 테스트만

---

## Related Notes
- [[Discord-Knowledge]] — 지식 아카이브 상세 (38개 GitHub 레포)
- [[Discord-WorldModel]] — JEPA 트레이딩 연구 상세
- [[Discord-SNP500]] — MES 선물 로직 수정/백테스트 이력
- [[Discord-YTower]] — _y Holdings 개발 상세
- [[Discord-OtherChannels]] — 나머지 채널 상세
- [[Discord-Timeline]] — 시계열 기록
