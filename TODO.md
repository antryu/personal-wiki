# Personal Wiki - TODO

## Overview
Karpathy + FarzaTV 방식의 개인 위키피디아 시스템.
기존 Obsidian Vault 데이터(333개 .md)를 LLM이 크롤 가능한 wiki로 컴파일.
Claude Code + OpenClaw 에이전트가 wiki를 활용해 Q&A, 자동 업데이트.

## Data Sources
- `~/Documents/Obsidian Vault/` (메인, 333개 .md)
  - Clippings/: Notion 내보내기 (BM, AI, 인사이트, Thairon)
  - Projects/: Babylon, y-Holdings
  - References/: AI Papers, Tools, Trends, Strategy
  - inbox/: 새 자료
  - Daily/: 일간 노트
  - 루트: AI-COMPANY, 수익화 로드맵, SEO 전략
- `~/ObsidianVault/` (서브)
  - Resources/: Karpathy, Ilya, 재정관리
  - Projects/: 자동매매, OpenClaw Setup

## Architecture
```
~/PRJs/personal-wiki/
├── CLAUDE.md                    # 프로젝트 컨텍스트
├── TODO.md                      # 이 파일
├── scripts/
│   ├── compile.ts               # raw → wiki 컴파일러
│   ├── ingest.ts                # 새 문서 인제스트
│   └── lint.ts                  # wiki 정합성 체크
├── raw/                         # 원본 데이터 (symlink to Obsidian)
├── wiki/
│   ├── index.md                 # 전체 카탈로그 (에이전트 진입점)
│   ├── _meta/
│   │   ├── categories.md        # 카테고리 인덱스
│   │   ├── people.md            # 인물 인덱스
│   │   └── timeline.md          # 시간순 인덱스
│   ├── business/                # 비즈니스 아이디어, BM, 전략
│   ├── projects/                # 프로젝트별 article
│   ├── people/                  # 인물 article
│   ├── tech/                    # 기술, AI, 도구
│   ├── research/                # 논문, 리서치
│   ├── finance/                 # 트레이딩, 재정
│   ├── insights/                # 인사이트, 교훈
│   └── reference/               # 참고자료, 가이드
└── skills/
    └── wiki-query.md            # /wiki-query 스킬 정의
```

## Tasks

### Phase 1: 뼈대 구축
- [x] 프로젝트 디렉토리 생성
- [ ] wiki/ 디렉토리 구조 생성
- [ ] raw/ → Obsidian Vault symlink
- [ ] index.md 초기 템플릿 생성
- [ ] CLAUDE.md 작성

### Phase 2: 컴파일 파이프라인
- [ ] compile 스크립트 작성 (raw → wiki 변환)
  - 원본 문서 읽기
  - 카테고리 분류
  - article 생성 (제목, 요약, 백링크, 카테고리)
  - index.md 자동 업데이트
- [ ] ingest 스크립트 작성 (새 문서 추가 시)
- [ ] lint 스크립트 작성 (정합성 체크)

### Phase 3: 에이전트 연동
- [ ] /wiki-query 스킬 작성
- [ ] /wiki-compile 스킬 작성
- [ ] /wiki-ingest 스킬 작성
- [ ] OpenClaw 에이전트 연동 테스트

### Phase 4: 테스트 & 최적화
- [ ] 샘플 문서 10개로 컴파일 테스트
- [ ] Q&A 테스트
- [ ] 자동 업데이트 테스트
- [ ] Obsidian에서 wiki 열기 확인
