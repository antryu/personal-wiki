# LangChain for Go

> LangChain for Go provides a robust framework for building LLM-based applications in Go, emphasizing composability and ease of integration. With over 9,000 stars and active community support, it's a notable tool for developers leveraging AI in Go ecosystems.  
> Last updated: 2026-04-11

## Overview

### Repository Info
- **URL**: [https://github.com/tmc/langchaingo](https://github.com/tmc/langchaingo)
- **Stars**: 9,035
- **Forks**: 1,077
- **Language**: Go
- **License**: MIT License
- **Created**: 2023-02-18
- **Updated**: 2026-04-11
- **Topics**: ai, go, golang, langchain
- **Open Issues**: 399

### Documentation
- [Documentation Site](https://tmc.github.io/langchaingo/docs/)
- [API Reference](https://pkg.go.dev/github.com/tmc/langchaingo)

### Example Usage
A simple example demonstrates generating a company name for colorful socks using OpenAI's LLM:
```go
package main

import (
  "context"
  "fmt"
  "log"

  "github.com/tmc/langchaingo/llms"
  "github.com/tmc/langchaingo/llms/openai"
)

func main() {
  ctx := context.Background()
  llm, err := openai.New()
  if err != nil {
    log.Fatal(err)
  }
  prompt := "What would be a good company name for a company that makes colorful socks?"
  completion, err := llms.GenerateFromSinglePrompt(ctx, llm, prompt)
  if err != nil {
    log.Fatal(err)
  }
  fmt.Println(completion)
}
```
**Output**:
```shell
$ go run .
Socktastic
```

### Community & Resources
- **Discord**: [Join Discord](https://discord.gg/t9UbBQs2rG) for discussions and support.
- **Blog Posts**:
  - [Using Gemini models in Go with LangChainGo](https://eli.thegreenplace.net/2024/using-gemini-models-in-go-with-langchaingo/)
  - [Using Ollama with LangChainGo](https://eli.thegreenplace.net/2023/using-ollama-with-langchaingo/)
  - [Creating a simple ChatGPT clone with Go](https://sausheong.com/creating-a-simple-chatgpt-clone-with-go-c40b4bec9267)

### Contributors
The project encourages community involvement. [View contributors](https://github.com/tmc/langchaingo/graphs/contributors).

## Key Points
- MIT-licensed framework for building composable LLM applications in Go.
- Active development and community engagement via Discord and open issues.
- Supports integrations with models like OpenAI, Gemini, and Ollama.
- Comprehensive documentation and example-driven learning resources.

## Sources
- [GitHub](https://github.com/tmc/langchaingo)
- [원본](raw/ingest/tech/2026-04-11-langchain-for-go.md)