<!-- GitHub Trending: TypeScript | 1,088 stars | +148 today -->

# colbymchenry/codegraph

> Pre-indexed code knowledge graph for Claude Code — fewer tokens, fewer tool calls, 100% local

## Repository Info
- **URL**: https://github.com/colbymchenry/codegraph
- **Stars**: 1,089
- **Forks**: 121
- **Language**: TypeScript
- **License**: MIT License
- **Created**: 2026-01-18
- **Updated**: 2026-05-08
- **Topics**: N/A
- **Open Issues**: 41

## README (excerpt)
<div align="center">

# CodeGraph

### Supercharge Claude Code with Semantic Code Intelligence

**94% fewer tool calls · 77% faster exploration · 100% local**

[![npm version](https://img.shields.io/npm/v/@colbymchenry/codegraph.svg)](https://www.npmjs.com/package/@colbymchenry/codegraph)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Node.js](https://img.shields.io/badge/Node.js-18+-green.svg)](https://nodejs.org/)

[![Windows](https://img.shields.io/badge/Windows-supported-blue.svg)](#)
[![macOS](https://img.shields.io/badge/macOS-supported-blue.svg)](#)
[![Linux](https://img.shields.io/badge/Linux-supported-blue.svg)](#)

<br />

### Get Started

```bash
npx @colbymchenry/codegraph
```

<sub>Interactive installer configures Claude Code automatically</sub>

#### Initialize Projects

```bash
cd your-project
codegraph init -i
```

![1_C_VYnhpys0UHrOuOgpgoyw](https://github.com/user-attachments/assets/f168182f-4d9a-44e0-94d7-08d018cc8a3a)

</div>

---

## Why CodeGraph?

When Claude Code explores a codebase, it spawns **Explore agents** that scan files with grep, glob, and Read — consuming tokens on every tool call.

**CodeGraph gives those agents a pre-indexed knowledge graph** — symbol relationships, call graphs, and code structure. Agents query the graph instantly instead of scanning files.

### Benchmark Results

Tested across 6 real-world codebases comparing Claude Code's Explore agent **with** and **without** CodeGraph:

> **Average: 92% fewer tool calls · 71% faster**

| Codebase | With CG | Without CG | Improvement |
|----------|---------|------------|-------------|
| **VS Code** · TypeScript | 3 calls, 17s | 52 calls, 1m 37s | **94% fewer · 82% faster** |
| **Excalidraw** · TypeScript | 3 calls, 29s | 47 calls, 1m 45s | **94% fewer · 72% faster** |
| **Claude Code** · Python + Rust | 3 calls, 39s | 40 calls, 1m 8s | **93% fewer · 43% faster** |
| **Claude Code** · Java | 1 call, 19s | 26 calls, 1m 22s | **96% fewer · 77% faster** |
| **Alamofire** · Swift | 3 calls, 22s | 32 calls, 1m 39s | **91% fewer · 78% faster** |
| **Swift Compiler** · Swift/C++ | 6 calls, 35s | 37 calls, 2m 8s | **84% fewer · 73% faster** |

<details>
<summary><strong>Full benchmark details</strong></summary>

All tests used Claude Opus 4.6 (1M context) with Claude Code v2.1.91. Each test spawned a single Explore agent with the same question.

**Queries used:**
| Codebase | Query |
|----------|-------|
| VS Code | "How does the extension host communicate with the main process?" |
| Excalidraw | "How does collaborative editing and real-time sync work?" |
| Claude Code (Python+Rust) | "How does tool execution work end to end?" |
| Claude Code (Java) | "How does tool execution work end to end?" |
| Alamofire | "Trace how a request flows from Session.request() through to the URLSession layer" |
| Swift Compiler | "How does the Swift compiler handle error diagnostics?" |

**With CodeGraph — the agent uses `codegraph_explore` and stops:**
| Codebase | Files Indexed | Nodes | Tool Uses | Tokens | Time | File Reads |
|----------|--------------|-------|-----------|--------|------|------------|
| VS Code (TypeScript) | 4,002 | 59,377 | 3 | 56.6k | 17s | 0 |
| Excalidraw (TypeScript) | 626 | 9,859 | 3 | 57.1k | 29s | 0 |
| Claude Code (Python+Rust) | 115 | 3,080 | 3 | 67.1k | 39s | 0 |
| Claude Code (Java) | — | — | 1 | 40.8k | 19s | 0 |
| Alamofire (Swift) | 102 | 2,624 | 3 | 57.3k | 22s | 0 |
| Swift Compiler (Swift/C++) | 25,874 | 272,898 | 6 | 77.4k | 35s | 0 |

**Without CodeGraph — the agent uses grep, find, ls, and Read extensively:**
| Codebase | Tool Uses | Tokens | Time | File Reads |
|----------|-----------|--------|------|------------|
| VS Code (TypeScript) | 52 | 89.4k | 1m 37s | ~15 |
| Excalidraw (TypeScript) | 47 | 77.9k | 1m 45s | ~20 |
| Claude Code (Python+Rust) | 40 | 69.3k | 1m 8s | ~15 |
| Claude Code (Java) | 26 | 73.3k | 1m 22s | ~15 |
| Alamofire (Swift) | 32 | 52.4k 