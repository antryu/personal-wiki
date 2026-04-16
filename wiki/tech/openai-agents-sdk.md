# OpenAI Agents SDK

> The OpenAI Agents SDK is a lightweight, powerful framework for building multi-agent workflows. It supports multiple LLM providers (including OpenAI) and offers features like sandbox agents, tools, guardrails, and real-time tracing. With 21k+ stars, it enables flexible AI orchestration for complex tasks.  
> Last updated: 2026-04-16

## Overview

The **OpenAI Agents SDK** (Python) is a framework for designing and managing multi-agent systems using large language models (LLMs). Hosted on GitHub with an MIT license, it emphasizes modularity, scalability, and cross-LLM compatibility. Key components include:

- **Core Features**:  
  - **Agents**: Configurable LLMs with instructions, tools, and handoffs.  
  - **Sandbox Agents**: Preconfigured agents for long-term tasks using containerized environments (introduced in v0.14.0).  
  - **Tools**: Support for functions, MCP (Model-Calling Protocol), and hosted tools.  
  - **Guardrails**: Safety checks for input/output validation.  
  - **Realtime Agents**: Voice-capable agents using `gpt-realtime-1.5`.  
  - **Tracing UI**: Built-in workflow tracking for debugging and optimization.  

- **Installation**:  
  Requires Python 3.10+. Install via `pip` or `uv` with optional dependencies for voice (`pip install 'openai-agents[voice]'`) or Redis session support.  

- **Usage Example**:  
  Sandbox agents can inspect files, run commands, or apply patches in controlled environments. Example code initializes a sandbox agent linked to a Git repository.  

- **Repository Stats**:  
  - **Stars**: 21,174 | **Forks**: 3,449  
  - **Language**: Python | **License**: MIT  
  - **Open Issues**: 79  

For JavaScript/TypeScript users, a separate [Agents SDK JS/TS](https://github.com/openai/openai-agents-js) is available.

## Key Points
- Provider-agnostic support for OpenAI and 100+ other LLMs.  
- Sandbox agents enable persistent, filesystem-aware workflows.  
- Built-in tools for human-in-the-loop interactions and session history management.  

## Sources
- [GitHub](https://github.com/openai/openai-agents-python)
- [원본](raw/ingest/tech/2026-04-16-openai-agents-sdk.md)