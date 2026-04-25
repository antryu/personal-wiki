<!-- GitHub Trending: Python | 1,402 stars | +25 today -->

# zilliztech/memsearch

> A Markdown-first memory system, a standalone library for any AI agent. Inspired by OpenClaw.

## Repository Info
- **URL**: https://github.com/zilliztech/memsearch
- **Stars**: 1,402
- **Forks**: 125
- **Language**: Python
- **License**: MIT License
- **Created**: 2026-02-09
- **Updated**: 2026-04-25
- **Topics**: agent, agent-memory, ai-agents, claude-code, claude-code-plugin, clawdbot, embeddings, harness, hybrid-search, long-term-memory, memory, milvus, openclaw, opencode, progressive-disclosure, rag, reranker, semantic-search, skills
- **Open Issues**: 194

## README (excerpt)
<h1 align="center">
  <img src="assets/logo-icon.jpg" alt="" width="100" valign="middle">
  &nbsp;
  memsearch
</h1>

<p align="center">
  <strong>Cross-platform semantic memory for AI coding agents.</strong>
</p>

<p align="center">
  <a href="https://pypi.org/project/memsearch/"><img src="https://img.shields.io/pypi/v/memsearch?style=flat-square&color=blue" alt="PyPI"></a>
  <a href="https://zilliztech.github.io/memsearch/platforms/claude-code/"><img src="https://img.shields.io/badge/Claude_Code-plugin-c97539?style=flat-square&logo=claude&logoColor=white" alt="Claude Code"></a>
  <a href="https://zilliztech.github.io/memsearch/platforms/openclaw/"><img src="https://img.shields.io/badge/OpenClaw-plugin-4a9eff?style=flat-square" alt="OpenClaw"></a>
  <a href="https://zilliztech.github.io/memsearch/platforms/opencode/"><img src="https://img.shields.io/badge/OpenCode-plugin-22c55e?style=flat-square" alt="OpenCode"></a>
  <a href="https://zilliztech.github.io/memsearch/platforms/codex/"><img src="https://img.shields.io/badge/Codex_CLI-plugin-ff6b35?style=flat-square" alt="Codex CLI"></a>
  <a href="https://pypi.org/project/memsearch/"><img src="https://img.shields.io/badge/python-%3E%3D3.10-blue?style=flat-square&logo=python&logoColor=white" alt="Python"></a>
  <a href="https://github.com/zilliztech/memsearch/blob/main/LICENSE"><img src="https://img.shields.io/github/license/zilliztech/memsearch?style=flat-square" alt="License"></a>
  <a href="https://github.com/zilliztech/memsearch/actions/workflows/test.yml"><img src="https://img.shields.io/github/actions/workflow/status/zilliztech/memsearch/test.yml?branch=main&style=flat-square" alt="Tests"></a>
  <a href="https://zilliztech.github.io/memsearch/"><img src="https://img.shields.io/badge/docs-memsearch-blue?style=flat-square" alt="Docs"></a>
  <a href="https://github.com/zilliztech/memsearch/stargazers"><img src="https://img.shields.io/github/stars/zilliztech/memsearch?style=flat-square" alt="Stars"></a>
  <a href="https://discord.com/invite/FG6hMJStWu"><img src="https://img.shields.io/badge/Discord-chat-7289da?style=flat-square&logo=discord&logoColor=white" alt="Discord"></a>
  <a href="https://x.com/zilliz_universe"><img src="https://img.shields.io/badge/follow-%40zilliz__universe-000000?style=flat-square&logo=x&logoColor=white" alt="X (Twitter)"></a>
</p>

<p align="center">
  <img src="https://github.com/user-attachments/assets/427b7152-bc16-408c-a8b0-59a2b05fd1e0" alt="memsearch demo" width="800">
</p>

### Why memsearch?

- 🌐 **All Platforms, One Memory** — memories flow across [Claude Code](plugins/claude-code/README.md), [OpenClaw](plugins/openclaw/README.md), [OpenCode](plugins/opencode/README.md), and [Codex CLI](plugins/codex/README.md). A conversation in one agent becomes searchable context in all others — no extra setup
- 👥 **For Agent Users**, install a plugin and get persistent memory with zero effort; **for Agent Developers**, use the full [CLI](https://zilliztech.github.io/memsearch/cli/) and [Python API](https://zilliztech.github.io/memsearch/python-api/) to build memory and harness engineering into your own agents
- 📄 **Markdown is the source of truth** — inspired by [OpenClaw](https://github.com/openclaw/openclaw). Your memories are just `.md` files — human-readable, editable, version-controllable. Milvus is a "shadow index": a derived, rebuildable cache
- 🔍 **Progressive retrieval, hybrid search, smart dedup, live sync** — 3-layer recall (search → expand → transcript); dense vector + BM25 sparse + RRF reranking; SHA-256 content hashing skips unchanged content; file watcher auto-indexes in real time

---

## 🧑‍💻 For Agent Users

Pick your platform, install the plugin, and you're done. Each plugin captures conversations automatically and provides semantic recall with zero configuration.

### For Claude Code Users

```bash
# Install
/plugin marketplace add zilliztech/memsearch
/plugin install memsearch
# Restart Claude Code to activate the plugin
```

Aft