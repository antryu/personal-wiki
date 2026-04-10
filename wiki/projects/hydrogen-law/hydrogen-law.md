# Hydrogen Law — 수소법률 지능형 검색 프로젝트

> 회사 프로젝트로, 수소법·고압가스법·KGS CODE 중심의 법령 검색 웹앱. 2026-04-02에 기존 Supabase+ChromaDB 아키텍처에서 법망 API로 전환 완료. KGS CODE 비교표 기능 설계 진행.
> Last updated: 2026-04-05

## Overview

hydrogen-law는 수소/가스 산업 종사자를 위한 법령 검색 시스템이다. URL: https://hydrogen-law.vercel.app (antryu1b Vercel 계정). _y Holdings와는 완전 별개의 회사 프로젝트이며, 개인 API 키를 사용하지 않는 것이 원칙이다.

**타겟 법령:**
1. 수소법 (수소경제 육성 및 수소 안전관리에 관한 법률)
2. 고압가스법 (고압가스 안전관리법)
3. KGS CODE (한국가스안전공사 기술기준)

## Key Topics

### 한국 법령 서비스 비교 분석 (2026-04-02)

4개 서비스를 비교 분석하고 추천 전략을 수립했다.

| 서비스 | 특징 | 장점 | 단점 |
|--------|------|------|------|
| **법망 (beopmang.org)** | PostgreSQL + pgvector, 20만 조문 임베딩 | 무료, API 키 불필요, 법제처 대비 10배 빠름, 토큰 1/10 | 공식 출처 아님, 주 단위 동기화 |
| **legalize-kr** | 로컬 Markdown 저장소 2,303개 법령 | 초고속(로컬 grep), Git 기반 버전 관리, 오프라인 작동 | 수동 업데이트, API 없음 |
| **법제처 Open API** | 국가법령정보센터 공식, XML 출력 | 유일한 공식 출처, 100% 정확성 | 느림, XML 파싱, API 키 필요 |
| **korean-law-mcp** | MCP 프로토콜 64개 도구 | 판례+행정규칙+조례 커버, Claude Desktop 통합 | MCP 환경 필요, 문서화 부족 |

**추천 전략:** Tier 1 법망(Primary) → Tier 2 legalize-kr(Offline) → Tier 3 법제처(Fallback) → Tier 4 korean-law-mcp(판례/해석)

### MCP 환경의 장점 (2026-04-02)

MCP 서버의 핵심 이점:
- **한 번 만들면 어디서나 작동** — Claude Desktop, OpenClaw, Cursor 등 모든 MCP 호환 클라이언트
- **보안 격리** — 도구가 별도 프로세스로 실행, AI 직접 접근 차단
- **표준 프로토콜** — JSON-RPC 기반, Anthropic 사실상 표준
- **멀티 에이전트 호환** — 여러 에이전트가 동일 MCP 서버 공유
- **업데이트 간편** — 서버만 업데이트하면 모든 AI 자동 반영

MCP 서버 구축 위치 추천: 개인용은 로컬 머신, _y Holdings용은 M4 Max(192.168.219.105)에 중앙 구축.
단, hydrogen-law는 웹앱이므로 MCP 불필요.

### 기존 아키텍처 분석 (Supabase + ChromaDB + Ko-SRoBERTa) (2026-04-02)

**기존 시스템 구조:**
```
Next.js (Vercel) → RAG Engine (Python FastAPI) → ChromaDB (로컬 파일)
                 → Supabase PostgreSQL (클라우드)
```

**핵심 구성 요소:**
- **Ko-SRoBERTa** (`jhgan/ko-sroberta-multitask`): 한국어 특화 768차원 벡터 임베딩, 모델 크기 ~100MB
- **ChromaDB**: 파일 기반 벡터 DB, FAISS 인덱스 사용, 코사인 유사도 검색
- **Supabase PostgreSQL**: 원본 텍스트 저장 + 키워드 검색 (FTS)
- **Hybrid 검색**: 벡터 검색(가중치 0.7) + BM25 키워드 검색(가중치 0.3)

**실제 운영 실태:**
| 환경 | ChromaDB | RAG Engine | Supabase |
|------|----------|------------|----------|
| 로컬 개발 | 사용 | localhost:8000 | 선택사항 |
| Vercel 프로덕션 | 없음 | 없음 | Primary |

- ChromaDB는 **로컬 개발 전용**이었고, Vercel에서는 stateless 환경 때문에 배포 불가
- RAG Engine(Python FastAPI)도 Vercel에 배포하지 않음
- **Supabase에는 고압가스법 45개 조문만 존재, 수소법 데이터 0개** (테스트 데이터만 수집)
- `collect_laws.py`에서 `articles[:5]`로 처음 5개만 수집하는 코드 → 완전한 데이터 미구축
- **실제 프로덕션 서비스는 사실상 제대로 작동하지 않았음**

### 법망 API 전환 (2026-04-02)

회사 프로젝트이므로 개인 API 키 의존을 제거하고 법망 API로 전환했다.

**전환 전:**
```
Next.js → Ko-SRoBERTa(로컬 임베딩) → ChromaDB(로컬 벡터 DB) → 법제처 Open API
```

**전환 후:**
```
Next.js → 법망 API (https://api.beopmang.org)
```

**개선 효과:**

| 항목 | 기존 | 법망 API |
|------|------|----------|
| 검색 속도 | 2-3초 | 0.5-1초 |
| API 키 | Supabase KEY 필요 | 불필요 |
| 데이터 범위 | 45개 조문(불완전) | 5,573건 법령 + 171K 판례 |
| 모델 크기 | ~100MB | 0MB |
| 환경변수 | 3개+ | 0개 |
| 유지보수 | 수동 동기화 | 법망 자동 관리(매주) |

**코드 변경:** `apps/web/src/app/api/search/route.ts`에서 Supabase/RAG fallback 로직을 법망 API 직접 호출로 교체.

### KGS CODE 비교표 기능 설계 (2026-04-02)

KGS CODE는 법망 API에 포함되어 있지 않아 별도 수집이 필요하다.

**기능 구상:**
- KGS CODE 여러 개를 선택하여 주요 항목별 비교표 생성
- 고급 필터로 직접 선택 또는 AI 추천

**비교표 UI 예시:**
```
| 항목         | KGS FP217    | KGS FP216    | KGS AC111    |
|-------------|-------------|-------------|-------------|
| 최대압력     | 87.5 MPa    | 70 MPa      | 35 MPa      |
| 안전거리     | 5m 이상      | 8m 이상      | 10m 이상     |
| 검사주기     | 연 1회       | 연 2회       | 분기 1회     |
```

**고급 필터 플로우:**
1. Option 1: CODE 직접 선택 (체크박스 리스트)
2. Option 2: AI 추천 — 검색어/시나리오 입력 시 관련 CODE 자동 추천
3. 비교 항목 선택 후 비교표 생성

**구현 단계:**
1. 수동 데이터 정리 (주요 KGS CODE 3-5개, 핵심 비교 항목 5-10개, JSON 저장)
2. 비교표 UI + CODE 선택 UI 구현
3. 추후 PDF 파싱 자동화

## Key Decisions

- **2026-04-02**: hydrogen-law는 회사 프로젝트로 _y Holdings와 완전 분리
- **2026-04-02**: 개인 API 키 의존 제거 원칙 확정
- **2026-04-02**: 법망 API를 Primary 검색 소스로 전환 (Supabase/ChromaDB/법제처 의존 제거)
- **2026-04-02**: KGS CODE는 법망에 미포함 → 별도 수집 필요
- **2026-04-02**: KGS CODE 비교표 기능을 고급 필터(직접 선택 + AI 추천) 방식으로 설계

## Results & Outcomes

- 법망 API 전환 코드 작성 및 로컬 테스트 성공 (검색어 "수소충전소" → 3건, 1.1초)
- GitHub push 완료 (`antryu1b/hydrogen-law` main 브랜치)
- Vercel 배포 진행 중 503 에러 발생 — 캐시/이전 버전 활성 문제로 추정, 빈 커밋으로 재배포 트리거
- 기존 시스템의 근본 문제 발견: Supabase에 수소법 데이터 0개, 테스트 데이터 45개만 존재

## Tech Stack

- **Frontend**: Next.js 15 + React 19 + Tailwind CSS
- **검색 API**: 법망 API v4 (https://api.beopmang.org)
- **배포**: Vercel (antryu1b 계정)
- **레포**: `antryu1b/hydrogen-law`

## Phase Roadmap

- [x] Phase 1: Ko-SRoBERTa + ChromaDB + Supabase 기본 검색
- [x] 법망 API 전환
- [ ] Phase 2: Supabase/RAG engine 의존성 완전 제거
- [ ] Phase 3: KGS CODE 데이터 수집 및 비교표 기능
- [ ] Phase 4: 판례 검색, 법령 비교, 개정 이력 추적, AI 해석 레이어

## Related

- [[tech/mcp-architecture]] — MCP 프로토콜 및 서버 구축
- [[tech/vector-search]] — 벡터 검색 (Ko-SRoBERTa, ChromaDB, pgvector)
- [[tech/beopmang-api]] — 법망 API 사용법
- [[business/mybidwise]] — 법망 API 사용 프로젝트

## Sources

- [2026-04-02](raw/discord/hydrogen-law/2026-04-02.md)
