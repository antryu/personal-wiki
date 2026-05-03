---
title: 위키가 자동으로 업데이트 되는 방법
category: _meta
tags: [automation, cron, AI, llama-server]
last_updated: 2026-05-03
audience: 중·고등학생도 이해할 수 있는 수준
---

# 위키가 자동으로 업데이트 되는 방법

이 문서는 _y Tower 의 **개인위키** 가 어떻게 *알아서* 매일 새 내용으로 채워지는지 설명합니다.

## 핵심 흐름 (그림)

```
의장이 하루 종일 무언가를 함:
  📝 Obsidian 에 메모
  💬 텔레그램 / 디스코드 봇에 사진·메시지
  💭 Claude AI 와 대화
  ⭐ GitHub 트렌딩 자료

      │
      │ 새벽에 자동으로...
      ↓

🌙 새벽 자동 작업 (사람 손 X)
  06:00  청소 + 정리
  06:30  Obsidian 메모 가져오기
  07:00  GitHub 트렌딩 크롤링
  01:00  ⭐ AI 가 모든 raw 자료 → 위키 article 작성

      │
      ↓

📚 다음 날 의장이 위키 열어보면 정리된 내용 표시
  - personal-wiki-cyan.vercel.app
  - y-Tower 우측 하단 "개인위키" 버튼
```

## 8 가지 자동 작업 — 사람 말로

### 1. 매일 06:00 — *청소부 봇*
"하루 시작 시 책상 정리"
- 깨진 링크 검사
- 외부에서 변경된 파일 받아오기
- 위키 목차 새로 작성
- GitHub 에 업로드

### 2. 매일 06:30 — *Obsidian 복사기*
"손글씨 메모 → 위키 raw 폴더에 보관"
- 의장이 Obsidian 에 어제 쓴 *논문 메모* + *AI 도구 메모*
- raw 폴더로 자동 복사
- 다음 새벽 1시 AI 가 정리할 수 있게 준비

### 3. 매일 07:00 — *트렌딩 크롤러*
"어제 인기 GitHub 프로젝트 자동 스크랩"
- GitHub 트렌딩 사이트에서 가장 starred 된 repo 30개
- AI 카테고리·Python·Rust 등
- 자동으로 위키에 자료 보관

### 4. 매일 01:00 — *AI 기자* ⭐ (가장 중요)
"raw 자료 → AI 가 정리해서 책으로 출판"
- 어제 모인 모든 raw 자료를 *llama-server (qwen3:32b)* 한테 던짐
- "이걸 위키 article 형태로 요약·정리해줘"
- AI 출력 → 위키 폴더에 저장
- 표지 (index.html) 의 'Last built' 시간 갱신
- GitHub 에 commit + push → Vercel 사이트 자동 배포

> *2026-04-30 ~ 2026-05-02*: AI 가 죽어서 (Ollama 다운) 한 달간 책이 안 나왔음.
> *2026-05-02 야간 fix*: AI 살아남, 5/3 새벽 1시부터 다시 자동 출판.

### 5. 24/7 항상 켜진 봇
"의장 카톡 받는 비서 로봇"
- 의장이 텔레그램·디스코드로 사진·텍스트 보내면
- 봇이 즉시 받아서 raw 폴더에 보관
- 새벽 1시 AI 기자가 정리

### 6. 매일 00:30 — Claude 대화 백업
"오늘 의장이 AI 와 무슨 대화 했는지 자동 백업"

### 7. 일요일 02:00 — 프로젝트 정보 갱신
"일주일에 한 번, 작업 중인 프로젝트 목록 정리"

### 8. 매일 09:00 — 오전 점검
"잘못된 자료 / 깨진 링크 체크"

## 두 머신이 하는 일

| 시간 | m4max (의장 컴) | M1 (서버) |
|---|---|---|
| 00:00 | — | daily-backup |
| 00:15 | — | claude-sessions backup |
| 00:30 | claude backup | — |
| **01:00** | **AI 기자 (compile-wiki)** | — |
| 02:00 | sync-projects (일요일) | — |
| 06:00 | 청소부 (daily-automation) | — |
| 06:30 | Obsidian 복사기 | — |
| 07:00 | GitHub 트렌딩 | — |
| 09:00 | 오전 점검 | — |
| **24/7** | **봇 (ingest-bot)** | — |

m4max = *주 작업장* (대부분의 작업)
M1 = *백업 보장* (의장 컴 슬립 시에도 백업)

## 핵심 한 줄

> **의장 손 안 대도 매일 새벽 1시에 AI 가 raw 자료를 정리해서 위키 책으로 만들어 줌. 다음날 깨끗한 책 한 권이 추가돼 있음.**

## 자료가 어디서 오는가

```
의장 → 4 가지 input source:

1. Obsidian 메모     (~/Documents/Obsidian Vault/)
2. 텔레그램·디스코드   (봇이 받음)
3. Claude Code      (Andrew AI 대화)
4. GitHub 트렌딩      (자동 크롤)
```

## 자료가 어디로 가는가

```
4 가지 output target:

1. Personal Wiki repo   (GitHub: antryu/personal-wiki)
2. Vercel 사이트        (personal-wiki-cyan.vercel.app)
3. y-Tower WikiPanel    (의장 브라우저 우측 하단 "개인위키")
4. y-Tower 검색         (통합 검색 시 노출)
```

## 자주 묻는 질문

**Q: 매일 01:00 에 의장 컴이 자동으로 깨어나는가?**
A: 안 깸. m4max 가 슬립 중이면 그날 작업 X. 단 ingest-bot 은 launchd KeepAlive 로 *깨어 있을 수 있음* (Apple 정책 따라).

**Q: 한 달 동안 왜 갱신 안 됐나?**
A: AI 엔진 (Ollama) 이 다운 → compile-wiki.sh 매일 실패 → 새 article 안 만들어짐. 2026-05-02 야간 fix 적용.

**Q: 위키 직접 수정해도 되나?**
A: 가능. wiki/<카테고리>/<slug>.md 직접 편집 → git push. AI 가 다음 cron 시 *기존 article* 은 건드리지 않음 (raw 만 새로 처리).

**Q: 새 자료가 즉시 위키에 반영되나?**
A: AI 정리 단계 거쳐서 *다음 새벽 1시 이후* 반영. 즉시 보고 싶으면 raw 폴더에 직접 추가 + manually compile-wiki.sh 실행.

## 기술 상세 (보너스)

```yaml
LLM:        llama-server (qwen3:32b)
포트:       8080 (m4max)
이전:       Ollama (port 11434, 2026-05-02 폐기)
저장소:     /Users/andrew/PRJs/personal-wiki/
GitHub:     antryu/personal-wiki
배포:       Vercel auto-deploy on push
크론 위치:  m4max + M1 (이중화)
스케줄링:   launchd (slet wake 가능) + crontab (sleep 시 X)
```

---

마지막 갱신: 2026-05-03 (위키 자동 업데이트 시스템 fix 완료)
