<!-- GitHub Trending: Rust | 7,970 stars | +9 today -->

# BoundaryML/baml

> The AI framework that adds the engineering to prompt engineering (Python/TS/Ruby/Java/C#/Rust/Go compatible)

## Repository Info
- **URL**: https://github.com/BoundaryML/baml
- **Stars**: 7,971
- **Forks**: 411
- **Language**: Rust
- **License**: Apache License 2.0
- **Created**: 2023-10-06
- **Updated**: 2026-04-13
- **Topics**: baml, boundaryml, guardrails, llm, llm-playground, playground, prompt, prompt-config, prompt-templates, structured-data, structured-generation, structured-output, vscode
- **Open Issues**: 247

## README (excerpt)
<div align="center">
<a href="https://boundaryml.com?utm_source=github" target="_blank" rel="noopener noreferrer">
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="fern/assets/baml-lamb-white.png">
    <img src="fern/assets/baml-lamb-white.png" height="64" id="top">
  </picture>
</a>

</div>

<div align="center">

[![BAML Version](https://img.shields.io/pypi/v/baml-py?color=006dad&label=BAML%20Version)](https://pypi.org/project/baml-py/)

## BAML: Basically a Made-up Language
<h4>

[Homepage](https://www.boundaryml.com/) | [Docs](https://docs.boundaryml.com) | [BAML AI Chat](https://www.boundaryml.com/chat) | [Discord](https://discord.gg/BTNBeXGuaS)



</h4>


</div>

BAML is a simple prompting language for building reliable **AI workflows and agents**.

BAML makes prompt engineering easy by turning it into _schema engineering_ -- where you mostly focus on the models of your prompt -- to get more reliable outputs. 
You don't need to write your whole app in BAML, only the prompts! You can wire-up your LLM Functions in any language of your choice! See our quickstarts for [Python](https://docs.boundaryml.com/guide/installation-language/python), [TypeScript](https://docs.boundaryml.com/guide/installation-language/typescript), [Ruby](https://docs.boundaryml.com/guide/installation-language/ruby) and [Go, and more](https://docs.boundaryml.com/guide/installation-language/rest-api-other-languages).

BAML comes with all batteries included -- with full typesafety, streaming, retries, wide model support, even when they don't support native [tool-calling APIs](#enable-reliable-tool-calling-with-any-model)

**Try BAML**: [Prompt Fiddle](https://www.promptfiddle.com) • [Interactive App Examples](https://baml-examples.vercel.app/)


## The core BAML principle: LLM Prompts are functions

The fundamental building block in BAML is a function. Every prompt is a function that takes in parameters and returns a type.

```rust
function ChatAgent(message: Message[], tone: "happy" | "sad") -> string
```

Every function additionally defines which models it uses and what its prompt is.

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

class Message {
    role string
    content string
}

class ReplyTool {
  response string
}

class StopTool {
  action "stop" @description(#"
    when it might be a good time to end the conversation
  "#)
}
```

## BAML Functions can be called from any language
Below we call the ChatAgent function we defined in BAML through Python. BAML's Rust compiler generates a "baml_client" to access and call them.

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
  else:
    messages.append(Message(role="assistant", content=tool.response))
```
You can write any kind of agent or workflow using chained BAML functions. An agent is a while loop that calls a Chat BAML Function with some state.

And if you need to stream, add a couple more lines:
```python
stream = b.stream.ChatAgent(messages, "happy")
# partial is a Partial type with all Optional fields
for tool in stream:
    if isinstance(tool, StopTool):
      ...
    
final = stream.get_final_response()
```
And get fully type-safe outputs for each chunk in the stream.

## Test prompts 10x faster, right in your IDE
BAML comes with native tooling for [VS Code](https://docs.boundaryml.com/guide/installation-editors/vs-code-extension) and [JetBrains IDEs](https://docs.boundarym