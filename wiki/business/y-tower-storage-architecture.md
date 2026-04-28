---
date: 2026-04-28
type: framework
owner: Tasky (기조실장)
domain: y-Tower self-operation
tags: [y-tower, storage, memory, obsidian, wiki, tasky, framework]
---

# Y-Tower Storage Architecture — 3-Tier Rule

> 기조실장(Tasky) 영역. 회장(Andrew)·비서실장(Counsely)·각 계열사 페르소나가 정보를 어디에 저장·검색하는지의 *원칙*.

## 3-Tier 구조

| Tier | 위치 | 누가 읽음 | 용도 | 길이 |
|------|------|---------|------|------|
| **Auto-memory** | `~/.claude/projects/.../memory/` | **Claude (AI) 자동 로드** | 룰·결정·active 프로젝트 *상태·플래그* | thin (≤30줄/항목) |
| **Obsidian vault** | `~/Thairon/obsidian-vault/` | **Andrew (사람)** | 활성 프로젝트 문서·딜리버러블·자료 | full (필요만큼) |
| **Personal wiki** | `~/PRJs/personal-wiki/wiki/` | Andrew + Claude (참조 시) | *evergreen* 지식·skills·framework·reference | full + reusable |

## 각 Tier 정의

### 🤖 Auto-memory — AI 작업 기억

**무엇**: Claude Code가 매 세션 자동 로드하는 *thin pointer + 룰*.

**언제 사용**:
- 페르소나 정체성·룰 (예: Counsely=비서실장, Tasky=기조실장)
- 활성 프로젝트의 *상태·플래그·다음 결정* 포인터
- 영구 룰 (예: "5명 결제의향 검증 전 빌드 X")
- 자산 위치 reference

**언제 사용 X**:
- 사람이 *읽기 위한* 긴 문서 → Obsidian
- 재사용 framework·skill → Wiki
- ephemeral 작업 상태 → Tasks (TaskCreate)

**길이**: 항목당 ≤30줄 권장 (200줄 index 한도)

**구조**: frontmatter (name·description·type) + body + 관련 메모리 링크

### 📓 Obsidian — Andrew의 active workspace

**무엇**: Andrew가 Obsidian app으로 검색·편집·연결·외부 공유하는 *active project doc*.

**언제 사용**:
- 진행 중 프로젝트의 *full document* (계약서·제안서·인터뷰 결과·자료)
- Andrew가 회의에서 보거나 *외부와 공유* (PDF export 등)
- 의사결정 *이력 + 근거 자료*
- 신사업 pipeline의 *active 항목들*

**언제 사용 X**:
- AI에게 매번 자동 로드돼야 하는 룰 → Memory
- 여러 프로젝트 *재사용* framework → Wiki

**Path 패턴**:
- `Projects/y-Holdings/` — 회사 단위 도큐먼트
- `Projects/y-Holdings/신사업/` — Tasky 검토 자료
- `References/AI-Tools/` — OSS 분석 자료
- `Trading/`, `legal/`, etc. — 도메인별

### 📚 Wiki — evergreen 지식 + 재사용 framework

**무엇**: *재사용 가능한* framework·methodology·skill·playbook·reference.

**언제 사용**:
- 여러 프로젝트에 *반복 적용*할 framework (예: 신사업 검토 7차원, 인터뷰 7개 질문 템플릿)
- 도메인 reference (예: 한국 마켓플레이스 API 가이드, 셀러 SaaS landscape)
- 학습된 anti-pattern (예: Bid 0 paid conversion 패턴)
- skills 폴더: ai-seo·cold-email·competitor-alternatives·content-strategy 등 *플레이북*
- insights 폴더: 분석·인사이트 (Karpathy guidelines 등)

**언제 사용 X**:
- 특정 프로젝트의 *active 상태* → Obsidian
- AI 룰 → Memory

**Path 패턴**:
- `wiki/business/` — 사업 framework (이 파일 위치)
- `wiki/skills/` — playbook
- `wiki/insights/` — 학습된 인사이트
- `wiki/reference/` — 도메인 reference
- `wiki/projects/y-holdings/` — 회사 reference

## Decision Tree — 어디에 저장할지

```
새 정보 발생
   │
   ├─ AI가 자동으로 알아야 하는 *룰·정체성·active flag* ?
   │     YES → Memory (thin, ≤30줄)
   │
   ├─ Andrew가 *읽거나 외부 공유*할 active project doc ?
   │     YES → Obsidian
   │
   ├─ *여러 프로젝트에 재사용*할 framework·skill·reference ?
   │     YES → Wiki
   │
   └─ ephemeral 작업 상태 ?
         YES → Tasks (TaskCreate)
```

## 중복 저장 금지 원칙

- 같은 내용을 **2개 tier에 풀로 저장 X**
- Memory는 *Obsidian path 포인터* + 핵심 플래그만 가짐
- Obsidian은 *full doc*
- Wiki는 *Obsidian doc에서 추출한 evergreen* 부분만

예: MCD 사례
- Memory `mcd_playauto_replacement.md` — owner·플래그·Obsidian path *thin*
- Obsidian `Projects/y-Holdings/신사업/2026-04-28-MCD-PlayAuto-SmartPD-대체.md` — full project doc
- Wiki `business/y-tower-storage-architecture.md` (이 파일) — *3-tier 룰 framework* (재사용)
- Wiki `business/신사업-검토-7차원-framework.md` (TBD) — 평가 framework
- Wiki `business/anti-patterns/bid-0-paid-conversion.md` (TBD) — anti-pattern

## Owner 매핑

| Storage | 주 owner | 보조 owner |
|---------|---------|---------|
| Auto-memory | Tasky (룰·active state) | Counsely (보고용 thin pointer) |
| Obsidian active project docs | Tasky (작성·관리) | Counsely (Andrew 결재 정리) |
| Wiki framework·skill | **Tasky** | — |
| Tasks | (작업별) | — |

## 적용 시작

- 기존 자료 retrofit — 직전 MCD 케이스 (memory + Obsidian 중복 80%) 정정 진행 중
- 향후 모든 신규 자료 — Decision Tree 따라 단일 tier에만 저장 (중복 X)
- Wiki에 신규 framework 추가 시 — Tasky 영역, evergreen 검증 후만

## 관련 메모리

- `tasky_kijo_chief_role.md` — Tasky owner role
- `buddy_counsely_identity.md` — Counsely 비서실장
