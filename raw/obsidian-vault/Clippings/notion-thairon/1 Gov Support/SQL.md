# SQL

사용자가 PostgreSQL의 용도에 대해 질문하셨습니다. 설명드리겠습니다:

현재 프로젝트는 **이중 데이터베이스 구조**를 사용하고 있습니다:

1. **Supabase (PostgreSQL 클라우드)**:
    - 입찰공고 원본 데이터 저장 (bid_notices_goods, bid_notices_service 등)
    - Python 동기화 스크립트가 나라장터 API에서 데이터 수집 후 Supabase에 저장
    - 공개 데이터 저장소 역할
2. **로컬 PostgreSQL**:
    - 키워드 온톨로지 (keyword_ontology 테이블) 저장
    - 회사 정보, 매칭 정보, 사용자 인증 등 애플리케이션 데이터
    - Prisma ORM으로 관리

**온톨로지 추출 프로세스**:

```
Supabase (입찰공고 원본)
    → 키워드 추출
        → 로컬 PostgreSQL (keyword_ontology 테이블)에 저장

```

ontology.ts의 `/extract` 엔드포인트는:

1. Supabase에서 입찰공고 읽기
2. 한글 키워드 추출 (2-6글자)
3. 빈도수 계산
4. 로컬 PostgreSQL의 keyword_ontology 테이블에 저장

그래서 로컬 PostgreSQL이 실행되어야 온톨로지 기능이 작동합니다. 시작할까요?