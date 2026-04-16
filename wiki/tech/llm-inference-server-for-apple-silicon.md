# LLM Inference Server for Apple Silicon

> oMLX is a macOS-native LLM inference server optimized for Apple Silicon, featuring continuous batching, tiered SSD caching, and menu bar integration for seamless local model management. It enables developers to run high-performance LLM workloads on Macs while maintaining compatibility with OpenAI APIs.  
> Last updated: 2026-04-16

## Overview
oMLX (pronounced "Oh-MLX") provides a production-grade local LLM inference solution specifically optimized for Apple Silicon Macs (M1/M2/M3/M4). The project addresses the challenge of managing multiple LLMs with constrained memory by implementing **continuous batching** for efficient GPU utilization and **tiered key-value (KV) caching** that persists context across sessions between an in-memory tier and an SSD-backed cold storage tier.

Key technical innovations include:
- **Continuous batching**: Processes multiple requests simultaneously to maximize Apple Silicon GPU throughput
- **Tiered KV caching**: Maintains active contexts in RAM while offloading less-used sequences to SSD, preserving full conversation history
- **Menu bar interface**: Provides real-time monitoring and model management without leaving the desktop
- **OpenAI compatibility**: Serves models via a standard `/v1` API endpoint for integration with tools like Claude Code, OpenClaw, and OpenCode

Installation supports macOS apps, Homebrew, and source builds, requiring macOS 15.0+ (Sequoia) and Python 3.10+. The server automatically discovers models in specified directories and includes a built-in admin dashboard for monitoring and chat testing.

## Key Points
- Native Apple Silicon optimization with M1/M2/M3/M4 GPU acceleration
- Maintains 10,387 GitHub stars and 895 forks since its February 2026 launch
- Implements production-grade continuous batching and tiered caching for memory-constrained devices
- Menu bar interface enables real-time model management and resource monitoring
- OpenAI API compatibility allows integration with existing tools and workflows
- Supports MCP (Model Context Protocol) for advanced model context management

## Sources
- [GitHub](https://github.com/jundot/omlx)
- [원본](raw/ingest/tech/2026-04-16-llm-inference-server-for-apple-silicon.md)