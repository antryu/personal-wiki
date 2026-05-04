# DeepSeek Terminal Coding Agent

> DeepSeek Terminal Coding Agent (DeepSeek TUI) is a powerful coding agent built for DeepSeek V4 models that runs entirely in your terminal. It allows developers to interact with AI models for coding tasks, including file editing, shell execution, and managing repositories, all within a fast, TUI-based environment. The tool is notable for its native thinking-mode streaming, full tool suite, and support for a 1M-token context window, making it a highly efficient and user-friendly development assistant.
> Last updated: 2026-05-04

## Overview

DeepSeek TUI is a terminal-native coding agent designed for the DeepSeek V4 (`deepseek-v4-pro` / `deepseek-v4-flash`) models. It provides a single binary interface with no external runtime dependencies like Node or Python. The application includes an MCP client, a sandbox for safe execution, and a durable task queue, allowing users to manage tasks across sessions.

The agent supports a range of operations including file manipulation, shell command execution, web searches, and git management. It features a streamlined interface and advanced capabilities such as reasoning-level mode (RLM), parallel task execution, and session checkpointing. The user experience is enhanced with keyboard-driven navigation and real-time thinking-mode feedback.

Developed in Rust and available under the MIT License, DeepSeek TUI is open-source and actively maintained. It supports multiple platforms, including Linux, macOS, and Windows. The project has gained traction with over 3,800 stars and 258 forks on GitHub, with over 130 open issues for community and developer discussion.

## Key Points
- **Native RLM (Reasoning-Level Mode)**: Enables parallel execution of up to 16 `deepseek-v4-flash` child tasks for batched reasoning and analysis.
- **Thinking-mode streaming**: Real-time display of the model’s chain-of-thought during task execution.
- **1M-token context support**: Intelligent compaction and prefix-cache aware for cost efficiency.
- **Three operational modes**: Plan (read-only), Agent (interactive), and YOLO (auto-approval).
- **Session checkpointing**: Save and resume sessions, enabling long-running tasks.
- **HTTP/SSE API and MCP integration**: Supports headless workflows and extended tooling via the Model Context Protocol.
- **LSP diagnostics**: Inline error and warning checks using language servers like rust-analyzer and typescript-language-server.
- **User memory system**: Stores user preferences across sessions.
- **Localized UI**: Available in English, Japanese, Simplified Chinese, and Brazilian Portuguese.
- **Live cost tracking**: Tracks token usage and estimates costs per session and per turn.

## Sources
- [GitHub](https://github.com/Hmbown/DeepSeek-TUI)
- [원본](raw/ingest/tech/2026-05-04-deepseek-terminal-coding-agent.md)