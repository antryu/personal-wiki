# BAML Framework

> An AI framework that transforms prompt engineering into schema engineering, enabling reliable LLM workflows and agents across multiple programming languages. Notable for its type safety, streaming capabilities, and support for diverse models and tools.  
> Last updated: 2026-04-13

## Overview

### Repository Info
- **URL**: https://github.com/BoundaryML/baml  
- **Stars**: 7,971  
- **Forks**: 411  
- **Language**: Rust  
- **License**: Apache License 2.0  
- **Created**: 2023-10-06  
- **Updated**: 2026-04-13  
- **Topics**: `baml`, `boundaryml`, `guardrails`, `llm`, `prompt-templates`, `structured-output`, etc.  
- **Open Issues**: 247  

### Core Principle: LLM Prompts as Functions
BAML treats prompts as functions with defined inputs and outputs. Each function specifies a model (e.g., `openai/gpt-4o-mini`) and a structured prompt template. Example:

```rust
function ChatAgent(message: Message[], tone: "happy" | "sad") -> StopTool | ReplyTool {
    client "openai/gpt-4o-mini"

    prompt #"
        Be a {{ tone }} bot.

        {{ ctx.output_format }}

        {% for m in message %}
        {{ _.role(m.role) }}
        {{ m.content }}
        {% endfor %}
    "#
}
```

### Multi-Language Integration
BAML functions can be called from Python, TypeScript, Ruby, Java, C#, Rust, Go, and others. The Rust compiler generates a `baml_client` for type-safe interactions. Example in Python:

```python
from baml_client import b
from baml_client.types import Message, StopTool

messages = [Message(role="assistant", content="How can I help?")]

while True:
  print(messages[-1].content)
  user_reply = input()
  messages.append(Message(role="user", content=user_reply))
  tool = b.ChatAgent(messages, "happy")
  if isinstance(tool, StopTool):
    print("Goodbye!")
    break
```

### Streaming and Retries
BAML supports streaming responses with partial results and full type safety:

```python
stream = b.stream.ChatAgent(messages, "happy")
for tool in stream:
    if isinstance(tool, StopTool):
      ...
final = stream.get_final_response()
```

### IDE Tooling
BAML integrates with [VS Code](https://docs.boundaryml.com/guide/installation-editors/vs-code-extension) and [JetBrains IDEs](https://docs.boundaryml.com/guide/installation-editors/jetbrains-ide) for in-editor prompt testing and debugging.

---

## Key Points
- **Schema Engineering**: Focus on structured input/output models for reliable LLM outputs.  
- **Language Agnostic**: Works with Python, TypeScript, Ruby, Go, and more.  
- **Type Safety**: Enforces strict typing for prompts and responses.  
- **Streaming & Retries**: Built-in support for real-time streaming and error recovery.  
- **Model Flexibility**: Compatible with major models (OpenAI, Anthropic, etc.), even without native tool-calling APIs.  
- **Testing Tools**: Test prompts directly in IDEs with [Prompt Fiddle](https://www.promptfiddle.com).  

## Sources
- [GitHub](https://github.com/BoundaryML/baml)
- [원본](raw/ingest/tech/2026-04-13-baml-framework.md)