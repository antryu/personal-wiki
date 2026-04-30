# codejunkie99/agentic-stack — Portable `.agent/` 메모리·스킬 폴더

- **Source**: https://github.com/codejunkie99/agentic-stack
- **Date saved**: 2026-04-27
- **Saved from**: Discord #buddy
- **Stars**: 1,649 (생성 2026-04-15, 어제도 push — 매우 활발)
- **License**: Apache-2.0
- **Tags**: #AI #에이전트 #메모리 #harness #portable #cross-platform

## 한줄 요약

"One brain, many harnesses." `.agent/` 폴더(메모리 + 스킬 + 프로토콜 + 도구)를 Claude Code, Cursor, Windsurf, OpenCode, **OpenClaw, Hermes**, Pi, Codex, Antigravity 사이에 *옮겨다니게* 만드는 portable layer. 하니스 갈아탈 때 기억·기술 유실 방지.

## 무엇을 하나

- `.agent/` 안에 다음을 표준화:
  - **memory**: working / episodic / semantic / personal 4계층
  - **skills**: 인덱스된 매니페스트
  - **protocols**: 권한·스키마
  - **tools**: host-agent CLI (learn, recall, show, data export)
  - **harness**: hook 구현
  - **AGENTS.md**: 맵
- **adapters/**: 하니스별 shim. Claude Code면 `~/.claude/`로, Cursor면 `.cursor/rules/`로 변환

## MCP / 일반 스킬 파일과의 차이

| 항목 | MCP 서버 | 일반 스킬 파일 | agentic-stack |
|---|---|---|---|
| 외부 도구 통합 | ✓ | ✗ | (포함 안함, MCP 보완) |
| 메모리 자체 보유 | ✗ | ✗ | **✓ (4계층)** |
| 권한 강제 | 부분 | ✗ | ✓ |
| 야간 staging cycle | ✗ | ✗ | ✓ |
| 다중 하니스 동기화 | ✗ | ✗ | **✓ (핵심 차별점)** |
| 메모리 decay 정책 | n/a | n/a | 공유 정책 |

요컨대 MCP는 "도구 연결", agentic-stack은 "추론 layer 자체". 보완 관계.

## 설치

```bash
# 빠른 경로
brew install agentic-stack

# 또는 clone + install
git clone https://github.com/codejunkie99/agentic-stack.git
cd agentic-stack
./install.sh <harness-name>   # 예: claude-code, hermes, openclaw
```

위저드가 기존 하니스 자동 탐지 + onboarding으로 `PREFERENCES.md` 채움.

서브커맨드: `add`, `status`, `doctor`, `manage`, `remove`.

## y-Holdings 관점 평가

| 측면 | 적합도 | 메모 |
|---|---|---|
| **OMC (현재 운영 중)** | ⚠️ 매우 관련, 충돌 위험 | OMC 자체가 비슷한 layer. 통합 vs 대체 결정 필요 |
| **현재 메모리 시스템 (`~/.claude/projects/-Users-andrew-y-tower-test/memory/`)** | ⚠️ 충돌 가능 | 이미 4계층 비슷한 구조. agentic-stack 도입 시 마이그레이션 필요 |
| **OpenClaw / Hermes 사용** | ✅ 직접 지원 | adapter에 명시 — 하니스 갈아탈 때 가치 큼 |
| **Cap (트레이딩)** | △ | Andrew 1인이라 메모리 portable 가치 낮음 |
| **Bid / Vita** | △ | 동일 |
| **외부 컨설팅 자산** | ✅ | 클라이언트 환경(Cursor/Windsurf) 대응 시 호환성 가치 |

## 활용 가능 시나리오

- ✅ **OMC와 비교 평가** — 어느 layer가 더 견고한지 PoC. 4계층 메모리가 OMC보다 정교하면 일부 흡수 검토
- ✅ **하니스 transition 비용 대비** — Claude Code → 다른 도구 전환 가능성 보험
- ✅ **외부 컨설팅 시 호환성** — 클라이언트 환경 다양할 때 같은 .agent/ 들고 다님
- △ **즉시 도입** — 현재 메모리 시스템 마이그레이션 비용 있음, 신중히
- ❌ **운영 production 의존** — alpha 컴포넌트(memory search BETA) 있음, 트레이딩·B2B 영업에 단독 의존 금지

## 차용 가능 패턴 (도입 안 해도)

- **4계층 메모리 분류** (working / episodic / semantic / personal) — 현재 `auto memory` 룰을 정교화할 reference
- **Manifest-driven adapter** 디자인 — 다중 환경 지원할 때 표준 패턴
- **Nightly staging cycle** — 메모리 graduate 절차 (host agent가 manual 검토 후 승인) — 현재 메모리 시스템에 빠진 부분, 도입 검토 가치

## 한계 / 알파 상태

- 메모리 검색 `[BETA]` (FTS5 기반, optional)
- 데이터 layer / data-flywheel 기능은 local-only 표시 (production-ready 라곤 함)
- **자율 reasoning 없음** — host agent가 CLI로 candidate 수동 검토·승인 필요 (이건 안전성 측면에서 장점)

## 결론

**OMC와의 관계 정리가 우선**. 단순히 "추가 설치"가 아니라 메모리·스킬 layer 충돌 가능성. PoC로 평가하되 production 운영(트레이딩·B2B 영업)에는 도입 보류. 4계층 메모리 + nightly staging 패턴은 **차용 가치 높음** — 도입 안 해도 현재 메모리 시스템 개선에 reference로 사용 권장.

**Andrew 결정 후보**:
- (a) PoC 트랙 — `~/sandbox/agentic-stack-eval/` 에 별도 환경 만들고 OMC와 평행 비교 (Buildy 위임 가능, 1주)
- (b) 패턴만 차용 — 4계층 메모리 + staging 절차를 OMC에 흡수 (architect 검토 필요)
- (c) 현재는 보류 — 트렌드만 추적
