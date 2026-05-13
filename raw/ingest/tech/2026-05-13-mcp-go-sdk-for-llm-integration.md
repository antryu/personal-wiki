<!-- GitHub Trending: Go | 8,695 stars | +7 today -->

# mark3labs/mcp-go

> A Go implementation of the Model Context Protocol (MCP), enabling seamless integration between LLM applications and external data sources and tools.

## Repository Info
- **URL**: https://github.com/mark3labs/mcp-go
- **Stars**: 8,695
- **Forks**: 829
- **Language**: Go
- **License**: MIT License
- **Created**: 2024-11-27
- **Updated**: 2026-05-13
- **Topics**: N/A
- **Open Issues**: 17

## README (excerpt)
<!-- omit in toc -->
<div align="center">
<img src="./logo.png" alt="MCP Go Logo">

[![Build](https://github.com/mark3labs/mcp-go/actions/workflows/ci.yml/badge.svg?branch=main)](https://github.com/mark3labs/mcp-go/actions/workflows/ci.yml)
[![Go Report Card](https://goreportcard.com/badge/github.com/mark3labs/mcp-go?cache)](https://goreportcard.com/report/github.com/mark3labs/mcp-go)
[![GoDoc](https://pkg.go.dev/badge/github.com/mark3labs/mcp-go.svg)](https://pkg.go.dev/github.com/mark3labs/mcp-go)

[![AgentRank](https://agentrank-ai.com/api/badge/tool/mark3labs--mcp-go)](https://agentrank-ai.com/tool/mark3labs--mcp-go/)
<strong>A Go implementation of the Model Context Protocol (MCP), enabling seamless integration between LLM applications and external data sources and tools.</strong>

<br>

[![Tutorial](http://img.youtube.com/vi/qoaeYMrXJH0/0.jpg)](http://www.youtube.com/watch?v=qoaeYMrXJH0 "Tutorial")

<br>

Discuss the SDK on [Discord](https://discord.gg/RqSS2NQVsY)

</div>


```go
package main

import (
    "context"
    "fmt"

    "github.com/mark3labs/mcp-go/mcp"
    "github.com/mark3labs/mcp-go/server"
)

func main() {
    // Create a new MCP server
    s := server.NewMCPServer(
        "Demo 🚀",
        "1.0.0",
        server.WithToolCapabilities(false),
    )

    // Add tool
    tool := mcp.NewTool("hello_world",
        mcp.WithDescription("Say hello to someone"),
        mcp.WithString("name",
            mcp.Required(),
            mcp.Description("Name of the person to greet"),
        ),
    )

    // Add tool handler
    s.AddTool(tool, helloHandler)

    // Start the stdio server
    if err := server.ServeStdio(s); err != nil {
        fmt.Printf("Server error: %v\n", err)
    }
}

func helloHandler(ctx context.Context, request mcp.CallToolRequest) (*mcp.CallToolResult, error) {
    name, err := request.RequireString("name")
    if err != nil {
        return mcp.NewToolResultError(err.Error()), nil
    }

    return mcp.NewToolResultText(fmt.Sprintf("Hello, %s!", name)), nil
}
```

That's it!

MCP Go handles all the complex protocol details and server management, so you can focus on building great tools. It aims to be high-level and easy to use.

### Key features:
* **Fast**: High-level interface means less code and faster development
* **Simple**: Build MCP servers with minimal boilerplate
* **Complete***: MCP Go aims to provide a full implementation of the core MCP specification

(\*emphasis on *aims*)

🚨 🚧 🏗️ *MCP Go is under active development, as is the MCP specification itself. Core features are working but some advanced capabilities are still in progress.* 


<!-- omit in toc -->
## Table of Contents

- [Installation](#installation)
- [Quickstart](#quickstart)
- [What is MCP?](#what-is-mcp)
- [Core Concepts](#core-concepts)
  - [Server](#server)
  - [Resources](#resources)
  - [Tools](#tools)
  - [Prompts](#prompts)
- [Examples](#examples)
- [Extras](#extras)
  - [Transports](#transports)
  - [OAuth Protected Resource Metadata](#oauth-protected-resource-metadata)
  - [Session Management](#session-management)
    - [Basic Session Handling](#basic-session-handling)
    - [Per-Session Tools](#per-session-tools)
    - [Tool Filtering](#tool-filtering)
    - [Working with Context](#working-with-context)
  - [Request Hooks](#request-hooks)
  - [Tool Handler Middleware](#tool-handler-middleware)
  - [Regenerating Server Code](#regenerating-server-code)

## Installation

```bash
go get github.com/mark3labs/mcp-go
```

## Quickstart

Let's create a simple MCP server that exposes a calculator tool and some data:

```go
package main

import (
    "context"
    "fmt"

    "github.com/mark3labs/mcp-go/mcp"
    "github.com/mark3labs/mcp-go/server"
)

func main() {
    // Create a new MCP server
    s := server.NewMCPServer(
        "Calculator Demo",
        "1.0.0",
        server.WithToolCapabilities(false),
        server.WithRecovery(),
    )

    // Add a calculator tool
    calculatorTool := mcp.NewTool("