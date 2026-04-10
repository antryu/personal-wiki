# .md 파일 참조방식

## **Claude Code의 .md 파일 참조 방식**

- **자동으로 읽는 파일들**

```bash
# 이런 파일들은 Claude Code가 자동으로 읽어요
CLAUDE.md          # 최우선 - 프로젝트 컨텍스트
README.md          # 기본 프로젝트 설명
.clauderc          # 설정 파일
```

- **명시적으로 지시해야 하는 것들**

```bash
COMMANDS.md
WORKFLOW.md
TROUBLESHOOTING.md
API.md
```

## **실제 테스트해보기**

```bash
claude "현재 프로젝트에서 어떤 .md 파일들을 읽을 수 있는지 확인해줘:

1. CLAUDE.md 파일이 있다면 내용을 요약해줘
2. README.md 내용도 보여줘
3. 다른 .md 파일들도 찾아서 리스트해줘
4. 각 파일의 역할을 설명해줘

지금 당신이 자동으로 읽고 있는 컨텍스트 정보가 뭔지 알려줘."
```

## **예상되는 동작 방식**

- **시나리오 1: 자동 읽기**

```
You: "환율 모니터링 기능을 개선해줘"
Claude: (CLAUDE.md 자동 참조)
"이탈리아 공급업체 특성을 고려한 EUR/KRW 환율 모니터링을..."
```

- **시나리오 2: 명시적 참조**

```
You: "개발 서버 실행 명령어 알려줘"
Claude: "COMMANDS.md 파일을 확인해보겠습니다."
(파일을 찾아서 읽은 후)
"COMMANDS.md에 따르면..."
```

## **확실하게 하는 방법**

- **1. Claude Code에게 직접 물어보기**

```bash
claude "지금 이 프로젝트에서 당신이 자동으로 읽고 있는 파일들이 뭐야?
그리고 COMMANDS.md, WORKFLOW.md 같은 파일들도 자동으로 읽어?
아니면 내가 명시적으로 참조하라고 해야 해?"
```

- **2. .claudeignore 파일 확인**

```bash
# 만약 특정 파일을 제외하고 싶다면
echo "*.log" >> .claudeignore
echo "node_modules/" >> .claudeignore
```

- **3. 프로젝트 설정 확인**

```bash
# .clauderc 파일이 있는지 확인
ls -la | grep claude

# package.json에 Claude 관련 설정이 있는지
cat package.json | grep -i claude
```

## **최적화 방법**

- **확실한 참조를 위해:**

```bash
claude "다음 파일들을 읽어서 프로젝트 컨텍스트를 완전히 이해해줘:

1. CLAUDE.md - 프로젝트 전체 컨텍스트
2. COMMANDS.md - 자주 사용하는 명령어들
3. WORKFLOW.md - 개발 워크플로우
4. README.md - 기본 프로젝트 설명

이 정보들을 바탕으로 앞으로 모든 작업을 진행해줘."
```

- **또는 모든 .md 파일 참조:**

```bash
claude "현재 프로젝트의 모든 .md 파일들을 읽어서
전체 프로젝트를 완벽히 이해해줘.
그리고 어떤 파일들을 읽었는지 알려줘."
```

## **실험해볼 것**

- **지금 바로 테스트:**

```bash
claude "현재 당신이 이 프로젝트에 대해 알고 있는 정보를 모두 알려줘:
- 프로젝트 이름
- 기술 스택
- 주요 기능들
- 아키텍처
- 개발 진행 상황

그리고 이 정보들을 어디서 얻었는지도 알려줘
(.md 파일에서? 대화 히스토리에서? 코드 분석에서?)"
```

### **⇒** Claude Code가 프로젝트 정보를 파악하는 방식에 대한 이해 가능