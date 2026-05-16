# Octos - Agentic Operating System

> Octos is a Rust-native, API-first Agentic Operating System designed to manage AI agents at scale. It offers multi-tenant support, a rich set of REST APIs, and integration with various LLM providers and messaging channels. Notable for its lightweight 31MB binary and robust architecture, Octos is positioned as the backend OS for AI agent systems.
> Last updated: 2026-05-16

## Overview
Octos is an open-source platform that serves as an operating system for managing AI agents. It allows users to deploy a single Rust binary and configure multiple AI agent profiles with their own prompts, models, tools, and channels. This makes it easy to run AI systems on a single machine or across a cloud-and-device setup.

The system is designed to be API-first, with around 140 REST endpoints available for use in web, mobile, CLI, or CI/CD environments. It supports multi-tenancy by design, meaning a single 31MB binary can serve over 200 profiles on a 16GB machine. Each profile operates as an isolated OS process with its own memory, sessions, and data.

Three main deployment options are available:

1. **Octos Cloud signup** – Users can create an account and deploy on their device using a setup command.
2. **Self-hosted local-only** – Run Octos on a local machine or network with no internet access.
3. **Self-hosted cloud + tenant pair** – Run a public VPS and a private device to enable remote access.

Octos supports multiple LLM providers and messaging channels, and it includes features such as multi-LLM DOT pipelines, swarm dispatchers, provider failover, and session control. It is notable for its robust architecture, sandboxed execution, and native support for office file formats.

## Key Points
- API-first design with ~140 REST endpoints.
- Multi-tenant architecture for 200+ isolated profiles.
- 3 deployment options: Octos Cloud signup, local-only, and cloud + tenant pair.
- Multi-LLM pipeline support with dynamic task execution.
- Swarm dispatcher for parallel agent execution.
- Robust memory management and session control.
- Native support for PPTX, DOCX, and XLSX file formats.
- Security-focused with sandbox execution and prompt injection testing.

## Sources
- [GitHub](https://github.com/octos-org/octos)
- [원본](raw/ingest/tech/2026-05-16-octos-agentic-operating-system.md)