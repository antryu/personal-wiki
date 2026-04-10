# M1 Pro 16G Mac 서버 — 개발 허브 & 프로젝트 운영 기록

> M1Pro16Gbot(Jarvis)을 통한 개발 작업 허브 채널. Hydrogen Law RAG 데이터 파이프라인 구축, AI 지식 파이프라인 설계, MyBidWise 운영 이슈, 프로젝트 포트폴리오 리뷰 등 핵심 개발 의사결정이 이루어진 채널.
> Last updated: 2026-04-05

## Overview
#m116gmac 채널은 M1 Pro 16GB MacBook에서 운영되는 Jarvis 봇(M1Pro16Gbot)과의 주요 작업 채널이다. 2024년 11월 Midjourney 이미지 생성 실험으로 시작하여, 2026년 2월부터는 Hydrogen Law RAG 프로젝트의 Supabase 데이터 적재, AI 지식 파이프라인 설계, MyBidWise 운영 등 핵심 프로젝트들의 실질적인 개발 작업이 집중적으로 이루어졌다.

## Key Topics

### Midjourney 이미지 생성 실험
- **2024-11-19**: "cute ant with white background" 프롬프트로 다양한 변형 생성
- v6.1 버전 사용, Strong Variations, Creative Upscale 등 기능 활용
- 참조 이미지 기반 변형 시도: Toy Story 스타일 캐릭터, carbon neutral 캐릭터 등
- 개인 사진 기반 캐릭터 변형도 시도 (raw/discord/m116gmac/2024-11-19.md)

### Discord 봇 이름 변경 (Luna)
- **2026-02-16**: M4Max128GBot과 첫 대화, 봇 이름 변경 시도
- Luna → Deepmac으로 변경 요청 → IDENTITY.md, SOUL.md 파일 반영
- Discord 멘션 이름은 OpenClaw 게이트웨이 설정이 별도 필요함을 확인
- 최종적으로 **Luna(루나)**로 롤백 결정 (raw/discord/m116gmac/2026-02-16.md)

### Hydrogen Law RAG — Supabase 데이터 파이프라인
- **2026-02-22~23**: 수소경제법 PDF를 Supabase에 적재하는 핵심 작업 수행
- **대상 법률**: 고압가스 안전관리법 + 수소경제법 (각각 법률/시행령/시행규칙)
- **기술 스택**: Ko-SRoBERTa 768차원 임베딩, Supabase PostgreSQL + pgvector, Vercel 배포
- **Supabase 프로젝트**: `ygohwygdwbckgtotlogm` (antryu1b 계정)
- **배포 URL**: hydrogen-law.vercel.app

#### 데이터 적재 과정과 문제 해결
1. **초기 적재**: 수소경제법 3개 PDF → 214개 청크 저장 (Ko-SRoBERTa 임베딩 포함)
2. **검색 함수 이슈**: `search_law_documents` RPC가 텍스트(LIKE) 기반이라 벡터 검색 불가
3. **하이브리드 검색 함수** 설계: 벡터 코사인 유사도 + 키워드 RRF 방식의 `hybrid_search_law_documents`
4. **SQL 파일 전달 이슈**: Discord 메시지가 분할되어 SQL 복사 어려움 → .sql 파일로 첨부 해결
5. **핵심 버그 발견**: regex `제(\d+)조`가 본문 내 참조(「자동차관리법」 제2조)까지 매칭 → 조문이 수십 조각으로 분리됨
   - 제2조 원본 1,945자 중 368자만 저장되는 문제
   - **수정**: regex를 `(?:^|\n)\s*제(\d+)조`로 변경 → 독립 조문만 매칭
6. **전면 재적재 결정**: 부분 파싱의 구멍 문제로 전체 데이터를 고정 크기 슬라이딩 윈도우(500자 + 100자 overlap)로 재청킹
   - **최종 결과**: 6개 PDF, 470,653자, **1,179개 청크** (이전 438개 → 텍스트 100% 수록)
7. **max_results 제한 제거**: 법령 검색에서 갯수 제한 시 조문 누락 위험 → 기본값 10000으로 변경

#### SQL 파일 구성 (실행 순서)
1. `supabase_schema.sql` — 테이블/인덱스 생성
2. `search_function.sql` — 기본 검색 RPC 함수
3. `verify_search.sql` — LIKE 기반 검색 함수 + 테스트
4. `hybrid_search_function.sql` — 하이브리드 벡터+키워드 검색 (선택)
5. `check_content.sql`, `test_tokenizer.sql` — 확인/테스트용

(raw/discord/m116gmac/2026-02-22.md, raw/discord/m116gmac/2026-02-23.md)

### 프로젝트 포트폴리오 리뷰 & 다음 프로젝트 결정
- **2026-02-22**: Andrew의 전체 프로젝트 현황 파악 및 다음 단계 논의

#### Andrew 프로필 (확인된 정보)
- 한국 기반 회사원 (수소/에너지 관련), 하루 5시간 투자 가능
- 풀스택 개발 (Next.js + Vercel + Supabase + Python)
- **최우선 관심사**: 수익화
- **AI 모임**: 2주 1회 참석

#### 실전 운용 중인 프로젝트
| 프로젝트 | 상태 | 비고 |
|---------|------|------|
| **MyBidWise** (GovRFP) | 3명 프로토타입 테스트, Paddle 결제 구현 | mybidwise.com, 7개 정부기관 통합 |
| **S&P500 자동매매** | 지난주부터 실전 운용 | 키움증권 CME 선물, 자체 서버 |
| **hydrogen-law-rag** | Phase 1 완료 | 회사용 (재미), antryu1b 계정 |

#### 기타 프로젝트
- Mindful (명상앱, 배포됨), 말해봐 (한국어교육, UI만), CutFlow (영상편집, 데모), Meeting Notes (아이디어)

(raw/discord/m116gmac/2026-02-23.md)

### AI 지식 파이프라인 설계
- **2026-02-23**: 정보 과다 수집 → 정리/적용 미흡 문제 해결을 위한 시스템 설계
- **핵심 페인포인트**: X, LinkedIn, 스레드 등에서 정보를 스크린캡처/노션으로 저장하지만 정리가 안 되어 적용까지 못 가는 문제

#### 설계된 파이프라인 흐름
```
입력 (Discord #knowledge 채널)
  → URL / 스크린캡처 / 텍스트
  → Jarvis 자동 처리 (FxTwitter API, OCR 등)
  → 요약 + 분류 + 액션 아이템 추출
  → 옵시디언 Vault에 .md 저장 + git push
```

#### 구현 단계 (Phase)
1. **Phase 1**: URL → 추출 + 요약 + 옵시디언 저장
2. **Phase 2**: 기존 노트 연결 + 액션 아이템 관리
3. **Phase 3**: AI 모임 녹음 정리 + 주간 다이제스트
4. **Phase 4**: 이미지 OCR + 지식 그래프

#### 트리거 방식 결정
- **채널 분리 방식 채택**: Discord `#knowledge` 채널(ID: `1475342369971769517`)에 던지면 무조건 정리
- 옵시디언 Vault는 git(`antryu/obsidian-vault`)으로 M4 ↔ M1 동기화 중
- `inbox/`, `action-items/` 폴더 생성 + push 완료

(raw/discord/m116gmac/2026-02-23.md)

### MyBidWise Supabase 용량 이슈
- **2026-02-24**: Supabase 무료 플랜 500MB 한도에 근접
- 기한 만료 공고 아카이브(삭제/이동) 필요
- 대상 테이블: `service`, `construction`, `goods`
- Supabase 프로젝트: `ksdbrovnwphwqonexsus`
- **나라장터용 Supabase 계정 분리**: antryunaraserv@gmail.com (용역), antryunaraconst@gmail.com (공사)

#### 봇 세션 한계 확인
- Discord Jarvis와 Telegram Jarvis는 **별도 세션** (대화 연속성 없음)
- `MEMORY.md`/`memory/` 파일을 통해 크로스 세션 맥락 공유 가능
- 1:1 작업은 텔레그램 추천, 디스코드는 가벼운 용도

(raw/discord/m116gmac/2026-02-24.md)

## Key Decisions
- **2024-11-19**: Midjourney v6.1로 캐릭터 디자인 실험 시작
- **2026-02-16**: Discord 봇 이름을 Luna(루나)로 최종 결정
- **2026-02-22**: 수소경제법 RAG → Supabase 저장 방식으로 진행 결정
- **2026-02-22**: 검색 방식을 텍스트(LIKE)에서 **벡터 코사인 유사도**로 전환
- **2026-02-23**: 법령 데이터 전면 재청킹 결정 (고정 크기 500자 + 100자 overlap, 빈틈 없이)
- **2026-02-23**: max_results 제한 제거 — 법령 검색에서 조문 누락 방지
- **2026-02-23**: 다음 프로젝트로 **AI 지식 파이프라인** 선정 (GovRFP 수익화와 병행)
- **2026-02-23**: 지식 입력 채널로 Discord `#knowledge` 채널 분리 방식 채택
- **2026-02-24**: MyBidWise Supabase 계정을 용역/공사로 분리

## Results & Outcomes
- Hydrogen Law RAG Supabase 적재 완료: 6개 PDF → 1,179개 청크 (470,653자 전체 텍스트, 빈틈 없음)
- hydrogen-law.vercel.app 검색 API 정상 동작 확인
- AI 지식 파이프라인 설계서 작성 완료 (`projects/knowledge-pipeline/DESIGN.md`)
- Discord `#knowledge` 채널 생성 및 옵시디언 Vault `inbox/` 폴더 준비 완료
- MyBidWise(GovRFP)가 3명 유료 테스트 중으로 가장 수익화에 근접한 프로젝트로 확인
- S&P500 자동매매 실전 운용 시작 (키움증권 CME 선물)

## Related
- [[wiki/projects/hydrogen-law-rag]]
- [[wiki/projects/mybidwise]]
- [[wiki/projects/knowledge-pipeline]]
- [[wiki/projects/snp500-trading]]
- [[wiki/tech/supabase-vector-search]]
- [[wiki/tech/rag-chunking-strategies]]
- [[wiki/infra/m1-pro-server]]
- [[wiki/infra/m4-max-server]]

## Sources
- [2024-11-19](raw/discord/m116gmac/2024-11-19.md)
- [2025-02-04](raw/discord/m116gmac/2025-02-04.md)
- [2025-10-11](raw/discord/m116gmac/2025-10-11.md)
- [2026-02-16](raw/discord/m116gmac/2026-02-16.md)
- [2026-02-22](raw/discord/m116gmac/2026-02-22.md)
- [2026-02-23](raw/discord/m116gmac/2026-02-23.md)
- [2026-02-24](raw/discord/m116gmac/2026-02-24.md)
