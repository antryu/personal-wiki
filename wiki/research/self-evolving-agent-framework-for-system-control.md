# Self-Evolving Agent Framework for System Control

> GenericAgent is a minimal, self-evolving autonomous agent framework that enables LLMs to achieve full system control with minimal code and token consumption. It automatically grows a personalized skill tree by crystallizing execution paths into reusable skills, offering powerful automation capabilities for desktop, mobile, and web tasks.
> Last updated: 2026-04-15

## Overview

**GenericAgent** is a lightweight, self-evolving autonomous agent framework designed to grant any large language model (LLM) full system-level control over a local computer. The core of the system consists of just **~3,300 lines of code**, with an agent loop of approximately **100 lines**. It provides direct control over the browser, terminal, filesystem, keyboard/mouse input, screen vision, and mobile devices (via ADB). The framework's key innovation lies in its **self-evolution mechanism**, where each new task solved by the agent is automatically transformed into a reusable skill, forming a growing skill tree unique to each user.

The system supports major models like Claude, Gemini, Kimi, and MiniMax, and is cross-platform with no complex dependencies or deployment overhead. It has already demonstrated its capabilities by autonomously managing Git operations, including cloning, initializing repositories, and writing commits — without any human intervention.

## Key Points

- **Self-Evolving Architecture**: Automatically crystallizes execution paths into reusable skills, forming a personalized skill tree that grows with use.
- **Minimalist Design**: Requires only ~3K lines of code and no heavy dependencies, making it easy to deploy and maintain.
- **Strong System Integration**: Offers direct control over system components like the browser, terminal, filesystem, and mobile devices.
- **High Model Compatibility**: Supports leading LLMs including Claude, Gemini, Kimi, and MiniMax.
- **Proven Self-Bootstrap**: The repository was fully set up by the agent autonomously, without user input in a terminal.

## Sources

- [GitHub](https://github.com/lsdefine/GenericAgent)
- [원본](raw/ingest/research/2026-04-15-self-evolving-agent-framework-for-system-control.md)