# Claude Skills

## Claude Skills 저장소 소개

[**Claude Skills**](https://discuss.pytorch.kr/t/anthropic-claude-claude-agent-skills/7979)

는 Anthropic의 대화형 AI Claude에게 특정한 능력을 학습시키기 위한 일종의 확장 모듈입니다. 각 스킬은 폴더 단위로 구성되며, 내부에는

```
SKILL.md
```

같은 설명 파일, 관련 코드, 그리고 실행 가능한 스크립트가 포함되어 있습니다. 이 스킬들은 Claude가 문서 생성, API 테스트, 데이터 분석 등과 같은 다양한 작업을 보다 전문적으로 수행할 수 있게 만들어 줍니다. Claude Skills에 대해서 더 알아보시려면 다음 글을 참고해주세요

![:backhand_index_pointing_right:](https://discuss.pytorch.kr/images/emoji/fluentui/backhand_index_pointing_right.png?v=15)

[Anthropic, Claude에 업무 방식과 조직 환경에 맞게 직접 커스터마이징할 수 있는 Claude Agent용 Skills 기능 출시](https://discuss.pytorch.kr/t/anthropic-claude-claude-agent-skills/7979)

이번에 소개하는 [**VoltAgent/awesome-claude-skills** 저장소](https://github.com/VoltAgent/awesome-claude-skills?utm_source=pytorchkr&ref=pytorchkr)는 [VoltAgent](https://github.com/voltagent/voltagent?utm_source=pytorchkr&ref=pytorchkr)가 Claude Skills를 한곳에 모아 정리한 오픈소스 큐레이션 프로젝트로, Anthropic이 공개한 공식 스킬부터 커뮤니티 제작 스킬까지 전반적인 Claude Skills를 아우르고 있습니다. 개발자나 AI 엔지니어는 이 저장소를 통해 원하는 기능을 빠르게 찾아 Claude에 적용할 수 있습니다. 예를 들어, Word 문서를 자동으로 작성하는 스킬([anthropics/docx](https://github.com/anthropics/skills/tree/main/document-skills/docx?utm_source=pytorchkr&ref=pytorchkr))이나 Playwright를 이용해 웹앱을 테스트하는 스킬([anthropics/webapp-testing](https://github.com/anthropics/skills/tree/main/webapp-testing?utm_source=pytorchkr&ref=pytorchkr)) 등이 있습니다.

Claude Skills의 가장 큰 특징은 필요한 스킬만 불러오는 **지연 로드(Lazy Loading)** 방식입니다. 필요한 스킬만 필요할 때에 불러오기 때문에, 수백 개의 스킬을 관리하더라도 토큰의 낭비나 성능 저하 없이 사용할 수 있습니다. 또 여러 스킬을 동시에 조합해 복잡한 업무 흐름을 자동화할 수 있으며, 이는 Claude를 단순한 대화형 모델에서 도메인 특화형 AI 에이전트로 발전시키는 핵심 요소입니다.

## Anthropic의 공식 스킬

### 문서 생성 스킬

| **Skill** | **코드** | **설명** |
| --- | --- | --- |
| **anthropics/docx** | [Link](https://github.com/anthropics/skills/tree/main/document-skills/docx?utm_source=pytorchkr&ref=pytorchkr) | Microsoft Word 문서를 생성, 편집 및 분석합니다. Claude가 자동으로 문서 구조를 생성하고, 스타일 적용, 표 삽입, 요약 및 콘텐츠 비교까지 수행할 수 있습니다. |
| **anthropics/pptx** | [Link](https://github.com/anthropics/skills/tree/main/document-skills/pptx?utm_source=pytorchkr&ref=pytorchkr) | PowerPoint 프레젠테이션을 생성·편집·분석하며, 슬라이드 구성, 디자인 템플릿 적용, 요약 슬라이드 자동 생성 기능을 지원합니다. |
| **anthropics/xlsx** | [Link](https://github.com/anthropics/skills/tree/main/document-skills/xlsx?utm_source=pytorchkr&ref=pytorchkr) | Excel 스프레드시트를 생성, 수정, 수식 계산 및 데이터 분석에 활용할 수 있습니다. Claude가 자동으로 표, 차트, 피벗 테이블을 생성합니다. |
| **anthropics/pdf** | [Link](https://github.com/anthropics/skills/tree/main/document-skills/pdf?utm_source=pytorchkr&ref=pytorchkr) | PDF 문서에서 텍스트를 추출하거나, 새로운 PDF를 작성하고, 폼 필드 검증 및 데이터 입력 자동화를 수행합니다. |

### 창작 및 디자인 스킬

| **Skill** | **코드** | **설명** |
| --- | --- | --- |
| **anthropics/algorithmic-art** | [Link](https://github.com/anthropics/skills/tree/main/algorithmic-art?utm_source=pytorchkr&ref=pytorchkr) | p5.js를 기반으로 난수 시드(seed) 생성 예술을 구현합니다. Claude가 코드로부터 시각 예술 작품을 자동 생성할 수 있습니다. |
| **anthropics/canvas-design** | [Link](https://github.com/anthropics/skills/tree/main/canvas-design?utm_source=pytorchkr&ref=pytorchkr) | PNG 및 PDF 형식의 그래픽 아트워크를 설계합니다. 사용자는 색상 팔레트, 모양, 레이아웃을 제어할 수 있습니다. |
| **anthropics/slack-gif-creator** | [Link](https://github.com/anthropics/skills/tree/main/slack-gif-creator?utm_source=pytorchkr&ref=pytorchkr) | Slack 전송 크기 제한에 최적화된 GIF 애니메이션을 자동 생성하며, 텍스트 및 이미지 요소를 결합할 수 있습니다. |
| **anthropics/theme-factory** | [Link](https://github.com/anthropics/skills/tree/main/theme-factory?utm_source=pytorchkr&ref=pytorchkr) | 디자인 산출물에 전문적인 테마를 적용하거나 사용자 정의 테마를 생성하는 기능을 제공합니다. |

### 개발 및 테스트 스킬

| **Skill** | **코드** | **설명** |
| --- | --- | --- |
| **anthropics/artifacts-builder** | [Link](https://github.com/anthropics/skills/tree/main/artifacts-builder?utm_source=pytorchkr&ref=pytorchkr) | Claude가 React와 Tailwind CSS를 사용해 복잡한 HTML 아티팩트를 빌드합니다. 예를 들어, 웹앱 UI나 대시보드를 자동으로 생성할 수 있습니다. |
| **anthropics/mcp-builder** | [Link](https://github.com/anthropics/skills/tree/main/mcp-builder?utm_source=pytorchkr&ref=pytorchkr) | MCP(Modal Command Protocol) 서버를 구축하여 외부 API 및 서비스와 Claude를 통합하는 기능을 제공합니다. |
| **anthropics/webapp-testing** | [Link](https://github.com/anthropics/skills/tree/main/webapp-testing?utm_source=pytorchkr&ref=pytorchkr) | Playwright를 이용해 로컬 웹 애플리케이션을 자동 테스트합니다. 브라우저 동작 시뮬레이션과 UI 회귀 테스트를 포함합니다. |

### 브랜드 & 커뮤니케이션 스킬

| **Skill** | **코드** | **설명** |
| --- | --- | --- |
| **anthropics/brand-guidelines** | [Link](https://github.com/anthropics/skills/tree/main/brand-guidelines?utm_source=pytorchkr&ref=pytorchkr) | Anthropic의 브랜드 색상, 폰트, 로고 가이드를 자동 적용하여 일관된 디자인 산출물을 만듭니다. |
| **anthropics/internal-comms** | [Link](https://github.com/anthropics/skills/tree/main/internal-comms?utm_source=pytorchkr&ref=pytorchkr) | 팀 내 커뮤니케이션을 위한 보고서, 뉴스레터, FAQ 작성 자동화를 지원합니다. |

### 메타 스킬

| **Skill** | **코드** | **설명** |
| --- | --- | --- |
| **anthropics/skill-creator** | [Link](https://github.com/anthropics/skills/tree/main/skill-creator?utm_source=pytorchkr&ref=pytorchkr) | 새로운 Claude Skill을 생성하고 등록하는 과정을 단계별로 안내하는 가이드 스킬입니다. |
| **anthropics/template-skill** | [Link](https://github.com/anthropics/skills/tree/main/template-skill?utm_source=pytorchkr&ref=pytorchkr) | 새로운 스킬을 만들 때 사용할 수 있는 기본 템플릿 구조를 제공합니다. |

## 커뮤니티 제작 스킬

### 생산성 및 협업 스킬

| **Skill** | **리소스** | **설명** |
| --- | --- | --- |
| **notiondevs/Notion Skills for Claude** | [Link](https://www.notion.so/28da4445d27180c7af1df7d8615723d0?pvs=21) | Claude가 Notion 데이터베이스와 상호작용할 수 있도록 돕는 스킬입니다. Notion 페이지를 읽고 수정하며, 노트 작성, 회의 요약, 작업 관리 자동화를 수행합니다. |
| **obra/superpowers-lab** | [Link](https://github.com/obra/superpowers-lab?utm_source=pytorchkr&ref=pytorchkr) | Claude의 실험적 기능과 병렬 작업 능력을 테스트할 수 있는 “Superpowers Lab” 환경을 제공합니다. |
| **obra/brainstorming** | [Link](https://github.com/obra/superpowers/blob/main/skills/brainstorming/SKILL.md?utm_source=pytorchkr&ref=pytorchkr) | 아이디어 발상 및 확장을 위한 구조화된 브레인스토밍 도우미입니다. |
| **obra/writing-plans** | [Link](https://github.com/obra/superpowers/blob/main/skills/writing-plans/SKILL.md?utm_source=pytorchkr&ref=pytorchkr) | 전략 문서나 프로젝트 계획을 자동 작성하고 구체화합니다. |
| **obra/executing-plans** | [Link](https://github.com/obra/superpowers/blob/main/skills/executing-plans/SKILL.md?utm_source=pytorchkr&ref=pytorchkr) | 생성된 계획을 실행 가능한 단계로 전환하고, 진행 상황을 추적합니다. |
| **obra/dispatching-parallel-agents** | [Link](https://github.com/obra/superpowers/blob/main/skills/dispatching-parallel-agents/SKILL.md?utm_source=pytorchkr&ref=pytorchkr) | Claude의 여러 하위 에이전트를 병렬로 실행하고 협업시킬 수 있습니다. |
| **obra/sharing-skills** | [Link](https://github.com/obra/superpowers/blob/main/skills/sharing-skills/SKILL.md?utm_source=pytorchkr&ref=pytorchkr) | 스킬을 다른 사용자나 시스템과 공유하고 재사용할 수 있도록 설정합니다. |
| **obra/using-superpowers** | [Link](https://github.com/obra/superpowers/blob/main/skills/using-superpowers/SKILL.md?utm_source=pytorchkr&ref=pytorchkr) | Claude의 확장 기능을 활용해 복합 작업을 실행하는 가이드 스킬입니다. |
| **ComposioHQ/content-research-writer** | [Link](https://github.com/ComposioHQ/awesome-claude-skills/tree/master/content-research-writer?utm_source=pytorchkr&ref=pytorchkr) | Claude가 웹 리서치를 수행한 뒤, 인사이트 기반의 콘텐츠를 작성하도록 지원합니다. |
| **ComposioHQ/meeting-insights-analyzer** | [Link](https://github.com/ComposioHQ/awesome-claude-skills/tree/master/meeting-insights-analyzer?utm_source=pytorchkr&ref=pytorchkr) | 회의 대화에서 주요 통찰, 의사결정, 감정 패턴을 분석합니다. |
| **ComposioHQ/competitive-ads-extractor** | [Link](https://github.com/ComposioHQ/awesome-claude-skills/tree/master/competitive-ads-extractor?utm_source=pytorchkr&ref=pytorchkr) | 경쟁사의 광고 데이터를 수집·분석하여 마케팅 인사이트를 제공합니다. |
| **ComposioHQ/image-enhancer** | [Link](https://github.com/ComposioHQ/awesome-claude-skills/tree/master/image-enhancer?utm_source=pytorchkr&ref=pytorchkr) | 이미지 품질을 개선하고, 해상도 향상 및 색상 보정을 수행합니다. |

### 개발 및 테스트 스킬

| **Skill** | **코드** | **설명** |
| --- | --- | --- |
| **conorluddy/ios-simulator-skill** | [Link](https://github.com/conorluddy/ios-simulator-skill?utm_source=pytorchkr&ref=pytorchkr) | Claude가 macOS 환경에서 iOS 시뮬레이터를 제어하고 테스트 자동화를 수행할 수 있도록 합니다. |
| **jthack/ffuf-claude-skill** | [Link](https://github.com/jthack/ffuf_claude_skill?utm_source=pytorchkr&ref=pytorchkr) | 보안 테스트 도구 ffuf를 Claude 환경에서 활용할 수 있게 하며, 웹 퍼징 및 엔드포인트 검색을 자동화합니다. |
| **lackeyjb/playwright-skill** | [Link](https://github.com/lackeyjb/playwright-skill?utm_source=pytorchkr&ref=pytorchkr) | Playwright를 이용한 브라우저 테스트 및 웹 자동화를 수행하는 Skill입니다. |
| **obra/test-driven-development** | [Link](https://github.com/obra/superpowers/blob/main/skills/test-driven-development/SKILL.md?utm_source=pytorchkr&ref=pytorchkr) | 테스트 우선 접근법으로 코드를 작성하도록 Claude를 안내합니다. |
| **ComposioHQ/changelog-generator** | [Link](https://github.com/ComposioHQ/awesome-claude-skills/tree/master/changelog-generator?utm_source=pytorchkr&ref=pytorchkr) | Git 커밋 이력을 기반으로 자동 릴리스 노트를 생성합니다. |
| **obra/subagent-driven-development** | [Link](https://github.com/obra/superpowers/blob/main/skills/subagent-driven-development/SKILL.md?utm_source=pytorchkr&ref=pytorchkr) | 여러 Claude 서브에이전트를 활용한 협업형 개발 프로세스를 지원합니다. |
| **obra/systematic-debugging** | [Link](https://github.com/obra/superpowers/blob/main/skills/systematic-debugging/SKILL.md?utm_source=pytorchkr&ref=pytorchkr) | 코드 오류를 단계적으로 분석하고 근본 원인을 추적하는 체계적 디버깅 프로세스를 제공합니다. |
| **obra/root-cause-tracing** | [Link](https://github.com/obra/superpowers/blob/main/skills/root-cause-tracing/SKILL.md?utm_source=pytorchkr&ref=pytorchkr) | 복잡한 시스템 오류의 근본 원인을 식별하고 시각화합니다. |
| **obra/testing-skills-with-subagents** | [Link](https://github.com/obra/superpowers/blob/main/skills/testing-skills-with-subagents/SKILL.md?utm_source=pytorchkr&ref=pytorchkr) | 여러 에이전트 간 협력 테스트를 수행합니다. |
| **obra/testing-anti-patterns** | [Link](https://github.com/obra/superpowers/blob/main/skills/testing-anti-patterns/SKILL.md?utm_source=pytorchkr&ref=pytorchkr) | 비효율적인 테스트 패턴을 식별하고 개선책을 제안합니다. |
| **obra/finishing-a-development-branch** | [Link](https://github.com/obra/superpowers/blob/main/skills/finishing-a-development-branch/SKILL.md?utm_source=pytorchkr&ref=pytorchkr) | Git 브랜치 병합 및 마무리 자동화를 수행합니다. |
| **obra/requesting-code-review** | [Link](https://github.com/obra/superpowers/blob/main/skills/requesting-code-review/SKILL.md?utm_source=pytorchkr&ref=pytorchkr) | 코드 리뷰 요청 과정을 자동화합니다. |
| **obra/receiving-code-review** | [Link](https://github.com/obra/superpowers/blob/main/skills/receiving-code-review/SKILL.md?utm_source=pytorchkr&ref=pytorchkr) | 코드 리뷰 피드백을 처리하고 수정합니다. |
| **obra/using-git-worktrees** | [Link](https://github.com/obra/superpowers/blob/main/skills/using-git-worktrees/SKILL.md?utm_source=pytorchkr&ref=pytorchkr) | 여러 Git 워크트리를 관리하며 멀티 브랜치 개발을 지원합니다. |
| **obra/verification-before-completion** | [Link](https://github.com/obra/superpowers/blob/main/skills/verification-before-completion/SKILL.md?utm_source=pytorchkr&ref=pytorchkr) | 작업 완료 전 검증 단계를 자동화합니다. |
| **obra/condition-based-waiting** | [Link](https://github.com/obra/superpowers/blob/main/skills/condition-based-waiting/SKILL.md?utm_source=pytorchkr&ref=pytorchkr) | 특정 조건 충족 시까지 대기하거나 딜레이를 조정합니다. |
| **obra/commands** | [Link](https://github.com/obra/superpowers/tree/main/skills/commands?utm_source=pytorchkr&ref=pytorchkr) | 명령 구조 생성과 자동 명령 실행을 지원합니다. |
| **obra/writing-skills** | [Link](https://github.com/obra/superpowers/blob/main/skills/writing-skills/SKILL.md?utm_source=pytorchkr&ref=pytorchkr) | 새로운 스킬 문서(Skill YAML) 작성 및 구조화 가이드를 제공합니다. |

### 도메인별 특화 스킬

| **Skill** | **코드** | **설명** |
| --- | --- | --- |
| **K-Dense-AI/claude-scientific-skills** | [Link](https://github.com/K-Dense-AI/claude-scientific-skills?utm_source=pytorchkr&ref=pytorchkr) | 과학 논문 분석, 데이터 처리, 수학적 계산 등 연구 중심의 Skill 모음입니다. |
| **NotMyself/claude-win11-speckit-update-skill** | [Link](https://github.com/NotMyself/claude-win11-speckit-update-skill?utm_source=pytorchkr&ref=pytorchkr) | Windows 11 환경에서 시스템 업데이트 및 스펙 관리 자동화를 수행합니다. |
| **jeffersonwarrior/claudisms** | [Link](https://github.com/jeffersonwarrior/claudisms?utm_source=pytorchkr&ref=pytorchkr) | SMS 메시징 통합을 지원하여 Claude가 메시지를 전송하고 응답을 처리할 수 있게 합니다. |
| **obra/defense-in-depth** | [Link](https://github.com/obra/superpowers/blob/main/skills/defense-in-depth/SKILL.md?utm_source=pytorchkr&ref=pytorchkr) | 다층 방어 전략을 적용하여 Claude가 보안 문제를 체계적으로 분석하도록 합니다. |

## VoltAgent의 Awesome Claude Skills GitHub 저장소

![:scroll:](https://discuss.pytorch.kr/images/emoji/fluentui/scroll.png?v=15)

[github.com](https://github.com/VoltAgent/awesome-claude-skills?utm_source=pytorchkr&ref=pytorchkr)
**[GitHub - VoltAgent/awesome-claude-skills: The awesome collection of Claude Skills and...](https://github.com/VoltAgent/awesome-claude-skills?utm_source=pytorchkr&ref=pytorchkr)**
The awesome collection of Claude Skills and resources.

[](https://opengraph.githubassets.com/961f1e1447cff1fbdd607a7e26ae2fae/VoltAgent/awesome-claude-skills)

## 더 읽어보기

### Anthropic 공식 문서

- [Get started with Agent Skills in the API - Claude Docs](https://docs.claude.com/en/docs/agents-and-tools/agent-skills/quickstart?utm_source=pytorchkr&ref=pytorchkr)
- [Skill authoring best practices - Claude Docs](https://docs.claude.com/en/docs/agents-and-tools/agent-skills/best-practices?utm_source=pytorchkr&ref=pytorchkr)
- [claude-cookbooks/skills/README.md at main · anthropics/claude-cookbooks · GitHub](https://github.com/anthropics/claude-cookbooks/blob/main/skills/README.md?utm_source=pytorchkr&ref=pytorchkr)
- [How to create custom Skills | Claude Help Center](https://support.claude.com/en/articles/12512198-how-to-create-custom-skills?utm_source=pytorchkr&ref=pytorchkr)
- [Equipping agents for the real world with Agent Skills \ Anthropic](https://www.anthropic.com/engineering/equipping-agents-for-the-real-world-with-agent-skills?utm_source=pytorchkr&ref=pytorchkr)

### 커뮤니티 & 블로그 글

- [Claude Skills are awesome, maybe a bigger deal than MCP](https://simonwillison.net/2025/Oct/16/claude-skills/?utm_source=pytorchkr&ref=pytorchkr)
- [Why Everyone Should Try Claude Skills | Nick Nisi](https://nicknisi.com/posts/claude-skills/?utm_source=pytorchkr&ref=pytorchkr)
- [Understanding Claude Code: Skills vs Commands vs Subagents vs Plugins | #95](https://www.youngleaders.tech/p/claude-skills-commands-subagents-plugins?utm_source=pytorchkr&ref=pytorchkr)