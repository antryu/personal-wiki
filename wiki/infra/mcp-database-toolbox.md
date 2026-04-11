# MCP Database Toolbox

> MCP Database Toolbox is an open-source Model Context Protocol (MCP) server that connects AI agents, IDEs, and applications directly to enterprise databases. It provides prebuilt tools for instant data exploration and a framework for building secure, customized AI tools.  
> Last updated: 2026-04-11

## Overview
**MCP Database Toolbox** (formerly *Gen AI Toolbox for Databases*) is a dual-purpose tool designed to streamline database interactions for AI systems and developers. Hosted on GitHub with 14,394 stars and 1,427 forks, it is built in Go under the Apache License 2.0. Key features include:

- **Prebuilt Generic Tools (Build-Time):**  
  Offers ready-to-use MCP server capabilities to connect AI clients like Gemini CLI, Claude Code, or Codex directly to databases. Supports 15+ databases (e.g., PostgreSQL, MySQL, MongoDB, BigQuery) for schema exploration, SQL execution, and code generation without boilerplate.

- **Custom Tools Framework (Run-Time):**  
  A secure framework for building production-grade AI tools with structured queries, semantic search, and natural language-to-SQL (NL2SQL) capabilities.

- **SDK Ecosystem:**  
  Includes Python, JavaScript/TypeScript, Go, and Java SDKs for integration into applications.  
  - [Python SDK](https://pypi.org/project/toolbox-core/)  
  - [JS/TS SDK](https://www.npmjs.com/package/@toolbox-sdk/core)  
  - [Go SDK](https://pkg.go.dev/github.com/googleapis/mcp-toolbox-sdk-go)  
  - [Java SDK](https://mvnrepository.com/artifact/com.google.cloud.mcp/mcp-toolbox-sdk-java)

The project was renamed from `genai-toolbox` to `mcp-toolbox` to align with MCP compatibility standards.

## Key Points
- Dual functionality: Ready-to-use MCP server + customizable tool framework.
- Supports 15+ databases (PostgreSQL, MySQL, MongoDB, BigQuery, etc.).
- Open-source under Apache 2.0 with active community (196 open issues).
- SDKs for Python, JS/TS, Go, and Java for application integration.

## Sources
- [GitHub](https://github.com/googleapis/mcp-toolbox)
- [원본](raw/ingest/infra/2026-04-11-mcp-database-toolbox.md)