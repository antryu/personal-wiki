# 📦 Previous Knowledge Dump (file_0 ~ file_18)

> 생성일: 2026-02-23
> 소스: /Users/andrew/.openclaw/media/inbound/file_0 ~ file_18

---

## 1. MacBook 배터리 설정 (file_0)
**요약:** macOS 배터리 설정 화면. 잔량 42%, 성능 상태 정상. 지난 24시간 충전/사용 그래프 표시. 2월 16~17일 사용 패턴 기록.
**🎯 적용:**
- [ ] 개발환경 참고자료 — 특별한 액션 없음

---

## 2. MacBook 배터리 옵션 설정 (file_1)
**요약:** 배터리 옵션 다이얼로그. "배터리 사용 시 화면 밝기 낮추기" ON, "디스플레이 꺼져도 전원어댑터 시 잠자지 않기" ON, "비디오 스트리밍 최적화" OFF. 네트워크 연결 시 깨우기는 전원 어댑터 연결 시에만.
**🎯 적용:**
- [ ] 개발환경 참고자료 — 특별한 액션 없음

---

## 3. Vercel 배포 실패 — Mindful 앱 TypeScript 에러 (file_2)
**요약:** Next.js 16.1.6 (Turbopack) 빌드 실패. `app-shell.tsx:63`에서 TypeScript 타입 에러 — `Screen` 타입에 `"profile"` 값이 없어서 비교 불가. 화면 종류: journey, together, profile, stats, pricing. Vercel 배포 로그.
**🎯 적용:**
- [ ] **Mindful**: `Screen` 타입 정의에 `"profile"` | `"stats"` | `"pricing"` 추가 확인
- [ ] **Mindful**: Vercel 배포 파이프라인 TypeScript strict 모드 점검

---

## 4. Supabase OAuth 에러 (file_3)
**요약:** 모바일 브라우저에서 Supabase 인증 엔드포인트 접근 시 400 에러. `"Unsupported provider: provider is not enabled"`. OAuth 소셜 로그인 프로바이더가 Supabase 대시보드에서 활성화되지 않음.
**🎯 적용:**
- [ ] **Mindful**: Supabase 프로젝트에서 Google/소셜 로그인 프로바이더 활성화
- [ ] **Mindful**: 인증 플로우 테스트 체크리스트 작성

---

## 5. localhost:3000 연결 거부 에러 (file_4)
**요약:** 모바일에서 `localhost:3000/?error` 접속 시 ERR_CONNECTION_REFUSED. OAuth 콜백이 localhost로 리다이렉트되어 모바일에서 접속 불가.
**🎯 적용:**
- [ ] **Mindful**: OAuth 콜백 URL을 Vercel 배포 URL로 설정 (개발/프로덕션 분리)
- [ ] 모바일 테스트 시 ngrok 또는 실제 도메인 사용

---

## 6. Mindful 명상앱 — 홈 화면 (file_5)
**요약:** `rototype-xi.vercel.app`에서 구동되는 명상앱 홈 화면. 다크 네이비/틸 배경에 빛나는 오브(구체) 중앙 배치. "시작하기" 버튼, "지금 147명이 함께 수련 중" 실시간 카운터. 하단 네비게이션 4개 아이콘.
**🎯 적용:**
- [ ] **Mindful**: 현재 프로토타입 UI 레퍼런스로 보존
- [ ] **Mindful**: 실시간 사용자 카운터 기능 — WebSocket 또는 Supabase Realtime 구현 확인

---

## 7. Mindful 명상앱 — 다른 시간대 홈 화면 (file_6)
**요약:** 같은 앱, 다른 시간(오후 5:07). 배경색이 더 muted teal-green으로 변경됨 — 시간대별 색상 변화 기능. "221명이 함께 수련 중".
**🎯 적용:**
- [ ] **Mindful**: 시간대별 앰비언트 색상 변화 기능 문서화
- [ ] **Mindful**: 동시접속자 수 변동 패턴 분석

---

## 8. Mindful 명상앱 — 호흡 운동 (들이쉬기) (file_7)
**요약:** 호흡 운동 세션 활성 상태. 오브가 크게 확장되어 "들이쉬세요" 표시. 심박수 62bpm, 타이머 1:50. X 닫기 버튼.
**🎯 적용:**
- [ ] **Mindful**: 호흡 오브 애니메이션 (확장/수축) 구현 상태 확인
- [ ] **Mindful**: 심박수 연동 — Web Bluetooth API 또는 Health API 활용

---

## 9. Mindful 명상앱 — 호흡 운동 (내쉬기) (file_8)
**요약:** 호흡 운동 "내쉬세요" 단계. 배경이 거의 검정으로 전환, 오브 수축. 심박수 62bpm, 타이머 1:48. 시각적으로 호흡 단계 표현 우수.
**🎯 적용:**
- [ ] **Mindful**: 들이쉬기/내쉬기 시각 피드백 완성도 높음 — 이 디자인 유지
- [ ] **Mindful**: 호흡 패턴 커스터마이징 (4-7-8, 박스 브리딩 등) 추가

---

## 10. Knowledge Base System 아키텍처 다이어그램 (file_9)
**요약:** 손그림 스타일 시스템 아키텍처. 입력: Articles, YouTube, X/Twitter, PDFs → Ingest + Embed → SQLite + Vectors → "Ask in Plain English". 선택적으로 Slack 연동. RAG 패턴 설계도.
**🎯 적용:**
- [ ] **AI 지식 파이프라인**: 이 아키텍처를 기반으로 구현 — 현재 OpenClaw + Obsidian 파이프라인과 통합
- [ ] **AI 지식 파이프라인**: SQLite + Vector 저장소 선택 (sqlite-vec 또는 ChromaDB)
- [ ] **hydrogen-law-rag**: 동일 아키텍처 적용 가능 — PDF 인제스트 파이프라인 재사용

---

## 11. FxTwitter API 테스트 — Polymarket 통계적 트레이딩 (file_10)
**요약:** 터미널에서 `curl https://api.fxtwitter.com/browomo/status/...` 실행. 트윗 내용: Jim Simons의 Medallion Fund 전략을 Polymarket에 적용. 핵심 공식: small edge × many positions × low correlation. 96 포지션, $53K 수익, Sharpe Ratio 상위 91%.
**🎯 적용:**
- [ ] **S&P500 자동매매**: 통계적 차익거래 원칙 참고 — 다수 포지션 × 낮은 상관관계 전략
- [ ] **AI 지식 파이프라인**: FxTwitter API로 트윗 자동 수집 파이프라인 구현 (TOOLS.md에 이미 기록됨)
- [ ] 투자 리서치: Jim Simons 통계적 차익거래 방법론 심화 학습

---

## 12. Obsidian 모바일 — PARA 폴더 구조 (file_11)
**요약:** Obsidian 모바일 앱 파일 탐색기. PARA 방법론 적용: Projects, Areas, Resources, Archives. daily-notes, Trading (2월 날짜별), ai-learning/Papers 폴더. 84개 파일, 31개 폴더.
**🎯 적용:**
- [ ] **AI 지식 파이프라인**: 현재 Obsidian vault 구조 레퍼런스 — inbox→PARA 자동 분류 고려
- [ ] Obsidian vault 구조 표준화 문서 작성

---

## 13. Obsidian 커뮤니티 플러그인 — Git (file_12)
**요약:** Obsidian 커뮤니티 플러그인 설정. Git 플러그인 v2.37.1 (Vinzent) 1개만 설치, 활성화됨. 자동 업데이트 체크 OFF.
**🎯 적용:**
- [ ] **AI 지식 파이프라인**: Obsidian Git 자동 백업 주기 설정 확인
- [ ] 추가 플러그인 검토: Dataview, Templater, Tasks 등

---

## 14. 수소법 본문 (file_13, PDF)
**요약:** 「수소경제 육성 및 수소 안전관리에 관한 법률」 전문. 시행 2025.10.1, 법률 제21065호. 주요 정의: 수소경제, 수소산업, 수소전문기업, 청정수소(무탄소/저탄소), 수소발전, 수소용품 등. 기본계획 수립, 수소경제위원회 심의 체계.
**🎯 적용:**
- [ ] **hydrogen-law-rag**: RAG 시스템 핵심 소스 문서 — 청크 분할 및 임베딩 대상
- [ ] **hydrogen-law-rag**: 제2조 정의 조항을 엔티티 사전으로 활용
- [ ] **hydrogen-law-rag**: 법률 → 시행령 → 시행규칙 계층 관계 메타데이터 설계

---

## 15. 수소법 시행령 (file_14, PDF)
**요약:** 「수소법 시행령」 전문. 시행 2026.1.2, 대통령령 제35947호. 수소전문기업 범위 상세 기준 (매출액 규모별 비율), 저탄소수소 기준, 기본계획 수립 협의 절차, 추진실적 점검/평가 절차 규정.
**🎯 적용:**
- [ ] **hydrogen-law-rag**: 시행령 청크 분할 — 특히 수소전문기업 판단 기준표 구조화
- [ ] **hydrogen-law-rag**: 법률↔시행령 크로스레퍼런스 매핑 (제2조 → 시행령 제2조)

---

## 16. 수소법 시행규칙 (file_15, PDF)
**요약:** 「수소법 시행규칙」 전문. 시행 2025.10.1, 기후에너지환경부령 제1호. 수소제조설비(수전해/추출), 수소저장설비, 수소가스설비 정의. 수소연료공급시설 대상 (자동차, 건설기계, 선박, 드론, 항공기 등). 수소전문기업 확인 신청 서류.
**🎯 적용:**
- [ ] **hydrogen-law-rag**: 시행규칙 포함 — 법/시행령/시행규칙 3단 계층 완성
- [ ] **hydrogen-law-rag**: 별지 서식 등 부록도 구조화 필요

---

## 17. Discord 봇 대화 — OpenClaw/Luna (file_16)
**요약:** Discord #일반 채널. openclaw_bot → "Luna"로 이름 변경 완료. 2월 23일 M1Pro16Gbot 새로 등장 (페어링 요청). R.Andrew가 페어링코드 요청.
**🎯 적용:**
- [ ] OpenClaw 노드 페어링: M1Pro16G MacBook 노드 설정 완료 확인
- [ ] OpenClaw 멀티노드 구성 문서화

---

## 18. Discord Developer Portal — M1Pro16Gbot 설정 (file_17)
**요약:** Discord Developer Portal에서 M1Pro16Gbot#3675 봇 생성. 아이콘/배너 설정 가능, 토큰 관리 안내.
**🎯 적용:**
- [ ] M1Pro16Gbot 아이콘 설정 (커스텀 로고 제작)
- [ ] 봇 토큰 보안 관리 확인

---

## 19. Discord Developer Portal — 봇 Intents & Permissions (file_18)
**요약:** M1Pro16Gbot의 Privileged Gateway Intents 설정. Server Members Intent ON, Message Content Intent ON. Bot Permissions는 아직 미설정 (Administrator 등 모두 미체크).
**🎯 적용:**
- [ ] 봇 권한 최소 원칙 적용 — 필요한 퍼미션만 체크
- [ ] 100서버 이상 시 Intent 검증 필요 — 현재는 문제없음

---

## ⚡ 즉시 실행 TOP 3

1. **🧘 Mindful 앱 인증 수정** — Supabase OAuth 프로바이더 활성화 + 콜백 URL을 Vercel 도메인으로 변경 + Screen 타입 수정 (file_3, 4, 5 관련)
2. **⚖️ hydrogen-law-rag 데이터 파이프라인** — 수소법 본문/시행령/시행규칙 3개 PDF를 RAG 시스템에 인제스트, 청크 분할 + 계층 메타데이터 설계 시작 (file_13, 14, 15)
3. **🧠 AI 지식 파이프라인 아키텍처 구현** — file_9의 설계도 기반으로 Articles/YouTube/Twitter/PDF → Embed → SQLite+Vector → Query 파이프라인 MVP 구축 (FxTwitter API 활용 포함)
