<!-- OCR from screenshot -->

KT 4:28 38
unclejobs.ai
unclejobs.ai > AI Threads 03/16
4. output-skill - AI가 게으름 피우는 걸 막는 스킬
이건 디자인이 아니라 행동 교정이에요. AI가 코드를 쓰다가 // 나머지는 여기에 구현 "와 같이 플레이스홀더만 남기고 넘어가거나, 코드 블록을 건너뛰며, 반만 쓰고 끝내는 걸 방지합니다. 전부 다 쓰게 강제하는 거예요.
이거은 군더더기 없어요. 아무리 디자인 스킬이 좋아도 AI가 코드를 짤막만 쓰면 소용없으니까. 6/10
10 1
unclejobs.ai > AI Threads 03/16
"Q. 그래서 어떻게 쓰나요?"
SKILL[.md] 파일을 프로젝트에 복사하고, AI한테 읽으라고 하면 끝이에요.
Claude Code에서는 .claude/skills/ 폴더에 넣으면 자동 발동. Cursor에서는 SKILL[.md]로 참조. 다른 AI 에디터에서도 마찬가지.
4개를 전부 넣어도 되고, 필요한 것만 골라 써도 됩니다. 새 프로젝트면 taste-skill + soft-skill + output-skill. 기존 프로젝트 개선이면 redesign-skill + output-skill. 7/10
Documentation
Overview
A simple, open format for giving agents new capabilities and expertise.
agentskills.io
Overview - Agent Skills
17 1 3 8
unclejobs.ai > AI Threads 03/16
"Q. frontend-design vs Taste Skill 뭐가 더 낫나요?"
Claude Code의 frontend-design은 Anthropic이 만든 빌트인 스킬이에요. Claude Code에 기본 내장되어 있고, 별도 설치 없이 바로 쓸 수 있습니다. 범용적이고 안정적이에요.
Taste Skill은 커뮤니티가 만든 오픈소스 스킬이에요. 4개로 쪼개서 각각 다른 문제를 해결하고, 세팅 숫자로 디자인 방향을 조절할 수 있다는 게 차별점. 특히 soft-skill의 "비싸 보이게" 접근이나, output-skill의 "게으름 방지"는 frontend-design에 없는 영역이에요.
둘 다 쓸 수도 있어요. frontend-design이 기본 품질을 잡아주고, Taste Skill이 그 위에 프리미엄 레이어를 올리는 구조. 8/10
10 1 1
unclejobs.ai님에게 답글 남기기 GIF