<!-- GitHub Trending: Go | 14,391 stars | +253 today -->

# googleapis/mcp-toolbox

> MCP Toolbox for Databases is an open source MCP server for databases.

## Repository Info
- **URL**: https://github.com/googleapis/mcp-toolbox
- **Stars**: 14,394
- **Forks**: 1,427
- **Language**: Go
- **License**: Apache License 2.0
- **Created**: 2024-06-07
- **Updated**: 2026-04-11
- **Topics**: agent, agents, ai, bigquery, clickhouse, cockroachdb, database, elasticsearch, firestore, genai, llm, mcp, mongodb, mysql, oracle, postgresql, redis, server, spanner, tidb
- **Open Issues**: 196

## README (excerpt)
<div align="center">

![logo](./logo.png)

# MCP Toolbox for Databases

<a href="https://trendshift.io/repositories/13019" target="_blank"><img src="https://trendshift.io/api/badge/repositories/13019" alt="googleapis%2Fmcp-toolbox | Trendshift" style="width: 250px; height: 55px;" width="250" height="55"/></a>

[![Go Report Card](https://goreportcard.com/badge/github.com/googleapis/mcp-toolbox)](https://goreportcard.com/report/github.com/googleapis/mcp-toolbox)
[![License: Apache
2.0](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)
[![Docs](https://img.shields.io/badge/Docs-MCP_Toolbox-blue)](https://mcp-toolbox.dev/)
[![Discord](https://img.shields.io/badge/Discord-%235865F2.svg?style=flat&logo=discord&logoColor=white)](https://discord.gg/Dmm69peqjh)
[![Medium](https://img.shields.io/badge/Medium-12100E?style=flat&logo=medium&logoColor=white)](https://medium.com/@mcp_toolbox)

[![Python SDK](https://img.shields.io/pypi/v/toolbox-core?logo=python&logoColor=white&label=Python%20SDK)](https://pypi.org/project/toolbox-core/)
[![JS/TS SDK](https://img.shields.io/npm/v/@toolbox-sdk/core?logo=javascript&logoColor=white&label=JS%20SDK)](https://www.npmjs.com/package/@toolbox-sdk/core)
[![Go SDK](https://img.shields.io/github/v/release/googleapis/mcp-toolbox-sdk-go?logo=go&logoColor=white&label=Go%20SDK)](https://pkg.go.dev/github.com/googleapis/mcp-toolbox-sdk-go)
[![Java SDK](https://img.shields.io/maven-central/v/com.google.cloud.mcp/mcp-toolbox-sdk-java?logo=apache-maven&logoColor=white&label=Java%20SDK)](https://mvnrepository.com/artifact/com.google.cloud.mcp/mcp-toolbox-sdk-java)
</div>

MCP Toolbox for Databases is an open source Model Context Protocol (MCP) server that connects your AI agents, IDEs, and applications directly to your enterprise databases. 

<p align="center">
<img src="docs/en/documentation/introduction/architecture.png" alt="architecture" width="50%"/>
</p>

It serves a **dual purpose**:
1. **Ready-to-use MCP Server (Build-Time):** Instantly connect Gemini CLI, Google Antigravity, Claude Code, Codex, or other MCP clients to your databases using our *prebuilt generic tools*. Talk to your data, explore schemas, and generate code without writing boilerplate.
2. **Custom Tools Framework (Run-Time):** A robust framework to build specialized, highly secure AI tools for your production agents. Define structured queries, semantic search, and NL2SQL capabilities safely and easily.


This README provides a brief overview. For comprehensive details, see the [full documentation](https://mcp-toolbox.dev/).

> [!IMPORTANT]  
> **Repository Name Update:** The `genai-toolbox` repository has been officially renamed to `mcp-toolbox`. To ensure your local environment reflects the new name, you may update your remote:
> `git remote set-url origin https://github.com/googleapis/mcp-toolbox.git`

> [!NOTE]
> This solution was originally named “Gen AI Toolbox for Databases” (github.com/googleapis/mcp-toolbox) as its initial development predated MCP, but was renamed to align with the MCP compatibility.

<!-- TOC ignore:true -->
## Table of Contents

- [Why MCP Toolbox?](#why-mcp-toolbox)
- [Quick Start: Prebuilt Tools](#quick-start-prebuilt-tools)
- [Quick Start: Custom Tools](#quick-start-custom-tools)
- [Install & Run the Toolbox server](#install--run-the-toolbox-server)
- [Connect to Toolbox](#connect-to-toolbox)
  - [MCP Client](#mcp-client)
  - [Toolbox SDKs: Integrate with your Application](#toolbox-sdks-integrate-with-your-application)
- [Additional Features](#additional-features)
- [Versioning](#versioning)
- [Contributing](#contributing)
- [Community](#community)

---

## Why MCP Toolbox?

- **Out-of-the-Box Database Access:** Prebuilt generic tools for instant data exploration (e.g., `list_tables`, `execute_sql`) directly from your IDE or CLI.
- **Custom Tools Framework:** Build production-ready tools with your own predefined logic, ensuring safety through Restricted Ac