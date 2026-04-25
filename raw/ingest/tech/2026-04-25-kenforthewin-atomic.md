<!-- GitHub Trending: Rust | 1,301 stars | +94 today -->

# kenforthewin/atomic

> Self-hosted, semantically-connected personal knowledge base

## Repository Info
- **URL**: https://github.com/kenforthewin/atomic
- **Stars**: 1,301
- **Forks**: 86
- **Language**: Rust
- **License**: MIT License
- **Created**: 2025-11-25
- **Updated**: 2026-04-25
- **Topics**: knowledge-base
- **Open Issues**: 25

## README (excerpt)
<picture>
  <source media="(prefers-color-scheme: dark)" srcset="./docs/images/logo-dark.svg">
  <source media="(prefers-color-scheme: light)" srcset="./docs/images/logo.svg">
  <img alt="Atomic" src="./docs/images/logo.svg" width="300">
</picture>

[![Discord](https://img.shields.io/discord/1489017497200885800?label=discord&logo=discord&logoColor=white&color=5865F2)](https://discord.gg/fT4vTERhz3)
[![Desktop App](https://img.shields.io/github/v/release/kenforthewin/atomic?label=desktop&logo=github)](https://github.com/kenforthewin/atomic/releases/latest)
[![Server Image](https://img.shields.io/github/v/tag/kenforthewin/atomic?label=server&logo=docker)](https://github.com/kenforthewin/atomic/pkgs/container/atomic-server)
[![Web Image](https://img.shields.io/github/v/tag/kenforthewin/atomic?label=web&logo=docker)](https://github.com/kenforthewin/atomic/pkgs/container/atomic-web)

A personal knowledge base that turns markdown notes into a semantically-connected, AI-augmented knowledge graph.

Atomic stores knowledge as **atoms** — markdown notes that are automatically chunked, embedded, tagged, and linked by semantic similarity. Your atoms can be synthesized into wiki articles, explored on a spatial canvas, and queried through an agentic chat interface.

https://github.com/user-attachments/assets/e8cd771f-6e23-46cf-86d1-3c70cb8d1954

*Daily briefing — AI summary of recent atoms with inline citations that highlight the source on a mini-canvas*

https://github.com/user-attachments/assets/282da0e3-4969-42dd-b591-7da974078e87

*Atoms — markdown notes with tags, sources, and neighborhood graph*

![Atom Viewer](./docs/images/atom.png)

*Wiki synthesis — LLM-generated articles with inline citations*

![Wiki Synthesis](./docs/images/wiki.png)

*Canvas — view your knowledge on an interactive graph*

![Canvas](./docs/images/canvas.png)

*Semantic search — find by meaning, not keywords*

![Semantic Search](./docs/images/search.png)

## Features

- **Atoms** — Markdown notes with hierarchical tagging, source URLs, and automatic chunking
- **Semantic Search** — Vector search over your knowledge base using sqlite-vec
- **Canvas** — Force-directed spatial visualization where semantic similarity determines layout
- **Wiki Synthesis** — LLM-generated articles with inline citations, built from your notes
- **Chat** — Agentic RAG interface that searches your knowledge base during conversation
- **Auto-Tagging** — LLM-powered tag extraction organized into hierarchical categories
- **Multiple AI Providers** — OpenRouter, Ollama, or any OpenAI-compatible provider for embeddings and LLMs
- **RSS Feeds** — Subscribe to feeds and automatically sync new articles as atoms
- **Browser Extension** — Capture web content directly into Atomic ([Chrome Web Store](https://chromewebstore.google.com/detail/bknijbafnefbaklndpglcmlhaglikccf))
- **MCP Server** — Expose your knowledge base to Claude and other AI tools
- **Multi-Database** — Multiple knowledge bases with a shared registry
- **iOS App** — Native SwiftUI client for reading and writing atoms on mobile ([App Store](https://apps.apple.com/us/app/atomic-kb/id6759266634))

## Getting Started

Atomic runs as a **desktop app** (Tauri), a **headless server** (Docker/Fly.io), or both.

### Desktop App

Download the latest release for your platform from [GitHub Releases](https://github.com/kenforthewin/atomic/releases) (macOS, Linux, Windows).

On first launch, the setup wizard walks you through AI provider configuration.

### Self-Host with Docker Compose

```bash
git clone https://github.com/kenforthewin/atomic.git
cd atomic
docker compose up -d
```

This starts three services: the API server, the web frontend, and an nginx reverse proxy. Open `http://localhost:8080` and claim your instance through the setup wizard.

The proxy service is provided for convenience — if you already run your own reverse proxy (Caddy, Traefik, etc.), you can skip it and route traffic to the `server` and `web` containers directly. See