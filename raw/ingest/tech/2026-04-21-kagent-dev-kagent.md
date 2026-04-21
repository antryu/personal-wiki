<!-- GitHub Trending: Go | 2,608 stars | +6 today -->

# kagent-dev/kagent

> Cloud Native Agentic AI | Discord: https://bit.ly/kagentdiscord

## Repository Info
- **URL**: https://github.com/kagent-dev/kagent
- **Stars**: 2,608
- **Forks**: 521
- **Language**: Go
- **License**: Apache License 2.0
- **Created**: 2025-01-21
- **Updated**: 2026-04-21
- **Topics**: agents, ai, cncf, devops, mcp
- **Open Issues**: 154

## README (excerpt)
<div align="center">
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="https://raw.githubusercontent.com/kagent-dev/kagent/main/img/icon-dark.svg" alt="kagent" width="400">
    <source media="(prefers-color-scheme: light)" srcset="https://raw.githubusercontent.com/kagent-dev/kagent/main/img/icon-light.svg" alt="kagent" width="400">
    <img alt="kagent" src="https://raw.githubusercontent.com/kagent-dev/kagent/main/img/icon-light.svg">
  </picture>
  <div>
    <a href="https://github.com/kagent-dev/kagent/releases">
      <img src="https://img.shields.io/github/v/release/kagent-dev/kagent?style=flat&label=Latest%20version" alt="Release">
    </a>
    <a href="https://github.com/kagent-dev/kagent/actions/workflows/ci.yaml">
      <img src="https://github.com/kagent-dev/kagent/actions/workflows/ci.yaml/badge.svg" alt="Build Status" height="20">
    </a>
      <a href="https://opensource.org/licenses/Apache-2.0">
      <img src="https://img.shields.io/badge/License-Apache2.0-brightgreen.svg?style=flat" alt="License: Apache 2.0">
    </a>
    <a href="https://github.com/kagent-dev/kagent">
      <img src="https://img.shields.io/github/stars/kagent-dev/kagent.svg?style=flat&logo=github&label=Stars" alt="Stars">
    </a>
     <a href="https://discord.gg/Fu3k65f2k3">
      <img src="https://img.shields.io/discord/1346225185166065826?style=flat&label=Join%20Discord&color=6D28D9" alt="Discord">
    </a>
    <a href="https://deepwiki.com/kagent-dev/kagent"><img src="https://deepwiki.com/badge.svg" alt="Ask DeepWiki"></a>
    <a href='https://codespaces.new/kagent-dev/kagent'>
      <img src='https://github.com/codespaces/badge.svg' alt='Open in Github Codespaces' style='max-width: 100%;' height="20">
    </a>
    <a href="https://www.bestpractices.dev/projects/10723"><img src="https://www.bestpractices.dev/projects/10723/badge" alt="OpenSSF Best Practices"></a>
  </div>
</div>

---

**kagent** is a Kubernetes native framework for building AI agents. Kubernetes is the most popular orchestration platform for running workloads, and **kagent** makes it easy to build, deploy and manage AI agents in Kubernetes. The **kagent** framework is designed to be easy to understand and use, and to provide a flexible and powerful way to build and manage AI agents.

<div align="center">
  <img src="img/hero.png" alt="Autogen Framework" width="500">
</div>

---

<!-- markdownlint-disable MD033 -->
<table align="center">
  <tr>
    <td>
      <a href="#getting-started"><b><i>Getting Started</i></b></a>
    </td>
    <td>
      <a href="#technical-details"><b><i>Technical Details</i></b></a>
    </td>
    <td>
      <a href="#get-involved"><b><i>Get Involved</i></b></a>
    </td>
    <td>
      <a href="#reference"><b><i>Reference</i></b></a>
    </td>
  </tr>
</table>
<!-- markdownlint-disable MD033 -->

---

## Getting Started

- [Quick Start](https://kagent.dev/docs/kagent/getting-started/quickstart)
- [Installation guide](https://kagent.dev/docs/kagent/introduction/installation)

## Technical Details

### Core Concepts

- **Agents**: Agents are the main building block of kagent. They are a system prompt, a set of tools and agents, and an LLM configuration represented with a Kubernetes custom resource called "Agent". 
- **LLM Providers**: Kagent supports multiple LLM providers, including [OpenAI](https://kagent.dev/docs/kagent/supported-providers/openai), [Azure OpenAI](https://kagent.dev/docs/kagent/supported-providers/azure-openai), [Anthropic](https://kagent.dev/docs/kagent/supported-providers/anthropic), [Google Vertex AI](https://kagent.dev/docs/kagent/supported-providers/google-vertexai), [Ollama](https://kagent.dev/docs/kagent/supported-providers/ollama) and any other [custom providers and models](https://kagent.dev/docs/kagent/supported-providers/custom-models) accessible via AI gateways. Providers are represented by the ModelConfig resource.
- **MCP Tools**: Agents can connect to any MCP server that provides tools. Kagent comes