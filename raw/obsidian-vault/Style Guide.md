---
categories: meta
created: 2026-02-23
---

# Style Guide

Kepano 스타일 기반, Andrew 맞춤.

## 폴더 구조
- **루트** — 내가 쓴 것 (에세이, 아이디어, 프로젝트 노트, 일기)
- **Daily/** — 일일 노트 (YYYY-MM-DD.md)
- **References/** — 외부 것들 (도구, 사람, 서비스, 책, 영화)
- **Clippings/** — 남이 쓴 글 (기사, 트윗, knowledge dump)
- **Templates/** — 템플릿
- **Attachments/** — 이미지, 파일
- **Trading/** — 트레이딩 프로젝트 (예외적 폴더)

## 규칙
- 폴더로 분류하지 않는다. `categories` 프로퍼티로 분류
- 태그는 항상 **복수형** (예: #tools, #projects, #ideas)
- 날짜는 항상 **YYYY-MM-DD**
- 내부 링크를 적극 사용 — 첫 언급에 항상 `[[링크]]`
- 평점은 **1~7 스케일** (7=인생작, 4=그저그럼, 1=최악)
- 서브폴더 쓰지 않는다
- Quick Switcher + 백링크로 탐색

## 프로퍼티 컨벤션
- `categories` — 노트 유형 (projects, tools, people, clippings, dailies...)
- `tags` — 주제 태그 (복수형)
- `url` — 외부 링크
- `author` — 저자/출처
- `rating` — 1~7 정수
- `status` — active, done, archived, idea
- `created` — 생성일

## Fractal Journaling
- 매일: Daily 노트에 생각 기록
- 매주: 주간 리뷰 → 중요한 것 루트에 노트로 승격
- 매월: 월간 리뷰 → 패턴, 교훈 정리
- Random Revisit: 가끔 랜덤 노트 돌려보며 링크 연결
