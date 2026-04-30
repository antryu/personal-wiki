# Z4nzu/hackingtool — All-in-one 공격 도구 wrapper

- **Source**: https://github.com/Z4nzu/hackingtool
- **Date saved**: 2026-04-27
- **Saved from**: Discord #buddy
- **Stars**: 65,380 (2026-04-27 기준)
- **License**: MIT (도구 자체. 묶인 하위 도구들은 라이선스 제각각)
- **Topics**: allinonehackingtool, ddos-attack-tool, password-attack, web-attack, wireless-attack, xss-attacks, ctf-tools

## 한줄 요약

Python으로 다른 OSS 공격 도구들(메타스플로잇·Aircrack·sqlmap·Hydra 등)을 묶어서 메뉴 띄워주는 wrapper. 본질은 "여러 OSS 한 번에 깔아주는 스크립트". 본인 코드는 거의 없음.

## 무엇을 묶었나

토픽 기준 다음 카테고리 wrapper:
- 익명·정찰 (anonymity / OSINT)
- 무선 공격 (Aircrack, Wifite 등)
- SQL injection (sqlmap)
- XSS, 웹 취약점 (XSStrike, WebSploit)
- 패스워드 공격 (Hydra, Hashcat 래핑)
- DDoS, 페이로드 생성, 스테가노그래피, 포렌식 등

## y-Holdings 관점 평가

| 측면 | 적합도 | 메모 |
|---|---|---|
| **Cap (트레이딩)** | ❌ | 무관 |
| **Bid (MyBidWise)** | ❌ | 공격용 도구라 직접 활용 불가 |
| **Vita (헬스 데이터)** | ❌ | 동일. 의료 데이터 + 공격 도구 = 규제 위험 |
| **자체 인프라 모의 점검 (방어)** | △ | wrapper 자체보다 OWASP ZAP / nuclei / kali 베이스라인이 적절 |
| **CTF 학습** | △ | HackTheBox / TryHackMe / picoCTF 가 시간 ROI 더 좋음 |

## 활용 가능 시나리오

- ✅ **자체 호스팅 자산(MyBidWise prod, Capital 대시보드, Vita PoC) 보안 점검** — 다만 이 wrapper 보다 nuclei/ZAP 권장
- ✅ **공격 트렌드 학습** — "어떤 공격이 들어올 수 있는지" 카테고리 파악용 카탈로그
- ❌ **무단 대상 공격 자동화** — Andrew 정책상 금지, Buddy/Cap/Bid/Vita 모두 거부
- ❌ **클라이언트 자산 점검** — 명시적 서면 동의 + 변호사 검토 없이는 금지

## Buddy 룰 (이 도구 관련)

- 공격 실행/회피 자동화는 도와주지 않음
- 다음 맥락에서는 같이 다룸:
  1. CTF 풀이
  2. 본인 보유 자산 보안 점검 (방어 목적)
  3. 어떤 공격이 들어올 수 있는지 → 로깅·차단 정책 설계

## 차용 가능 패턴

- "메뉴 기반 도구 wrapping" UX는 OMC 스킬 카탈로그 디자인에 참고 가능 (다만 OMC는 이미 더 정교함)
- 카테고리 분류는 보안 점검 체크리스트 작성 시 reference로 가치 있음

## 결론

**y-Holdings 직접 채택 부적합 + 일부 활용 부적절**. 자체 인프라 보안 점검 트랙으로 가려면 OWASP ZAP / nuclei + 클라우드 보안 점검 체크리스트가 더 적절. 카테고리만 reference로 활용 가능.

---

## 결정 trail

### 2026-04-26 — Andrew 의도 확인
Andrew #buddy: "해킹툴은 내 시스템 보안점검용으로 사용하면 좋겠네" → 방어 목적. Buddy 응답: wrapper 자체보다 전용 도구(gitleaks/nuclei/testssl.sh) 권장.

### 2026-04-26 — Guardy 스킬화 결정
Andrew #buddy: "에이전트중에 보안관련된 친구있잖아?" → Guardy(`~/.claude/agents/security-reviewer.md`) 식별. Andrew: "guardy 에게 스킬로 해킹툴 지식을 가지게 하는게 좋겠어. y-lawfirm 처럼" → Legaly 패턴(스크립트 + 지식 베이스) 차용 결정.

### 2026-04-26 — 실행 모드 "a -> c"
Andrew #buddy: "a -> c" → Phase 1(MVP, 풀 패키지) 먼저, Phase 2(자체 audit API 서버, kolaw 패턴)로 진화.

### 결과 정리
- **하지 않을 것**: Z4nzu/hackingtool wrapper 직접 설치·실행
- **할 것 (Phase 1)**:
  - `~/.claude/agents/guardy.md` (security-reviewer.md 확장 + Andrew 자산 매핑)
  - `~/.claude/scripts/sec_secrets.sh` (gitleaks wrapper, redact secrets)
  - `~/.claude/scripts/sec_web.sh` (nuclei + testssl.sh, allowlist URLs only)
  - `~/.claude/scripts/sec_audit.sh` (디스패처, --quick / --full)
  - `~/Thairon/obsidian-vault/References/Security/` 지식 베이스 (hackingtool 카테고리 + 권장 전용 도구 + 방어 패턴)
- **할 것 (Phase 2)**: `~/PRJs/guardy/` FastAPI 서버 (kolaw 패턴), 캐시·중복 제거·remediation 추적, cron 주간 baseline
- **위임**: Buildy. 의뢰서 `~/y-tower/tasks/buildy-guardy-skill-mvp.md` (Andrew 승인 대기)
- **룰 사수**: 공격 *실행* 금지 (read-only), 제3자 자산 금지, 본인 보유 자산만 (mybidwise.com, 100.119.97.60, antryu/* GitHub repos, Mac M4 Max + M1)
