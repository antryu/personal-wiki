<!-- GitHub Trending: Rust | 642 stars | +261 today -->

# Jakedismo/codegraph-rust

> 100% Rust implementation of code graphRAG with blazing fast AST+FastML parsing, surrealDB backend and advanced agentic code analysis tools through MCP for efficient code agent context management

## Repository Info
- **URL**: https://github.com/Jakedismo/codegraph-rust
- **Stars**: 642
- **Forks**: 60
- **Language**: Rust
- **License**: N/A
- **Created**: 2025-09-12
- **Updated**: 2026-05-14
- **Topics**: agents, ai-agents, ai-coding, claude-code, code-search, codex, coding-agent, context-engine, cursor, gemini-cli, graphrag, rag, rust, search-engines, semantic-search, vibe-coding
- **Open Issues**: 32

## README (excerpt)
![CodeGraph](docs/assets/banner.png)

# CodeGraph

**Your codebase, understood.**

CodeGraph transforms your entire codebase into a semantically searchable knowledge graph that AI agents can actually *reason* about—not just grep through.

> **Ready to get started?** Jump to the [Installation Guide](docs/INSTALLATION_GUIDE.md) for step-by-step setup instructions.
>
> **Already set up?** See the [Usage Guide](docs/USAGE_GUIDE.md) for tips on getting the most out of CodeGraph with your AI assistant.

---

## The Problem

AI coding assistants are powerful, but they're flying blind. They see files one at a time, grep for patterns, and burn tokens trying to understand your architecture. Every conversation starts from zero.

**What if your AI assistant already knew your codebase?**

---

## What CodeGraph Does Differently

### 1. Graph + Embeddings = True Understanding

Most semantic search tools create embeddings and call it a day. CodeGraph builds a **real knowledge graph**:

```
Your Code → Build Context → AST + FastML → LSP Resolution → Enrichment → Graph + Embeddings
              ↓               ↓              ↓              ↓              ↓         ↓
          Packages        Nodes/edges    Type-aware     API surface      Graph    Semantic
          Features        Fast patterns  linking        Module graph   traversal   search
          Targets         Spans          Definitions    Dataflow/Docs             (hybrid)
```

When you search, you don't just get "similar code"—you get code with its **relationships intact**. The function that matches your query, plus what calls it, what it depends on, and where it fits in the architecture.

Indexing enrichment adds:
- Module nodes and module-level import/containment edges for cross-file navigation
- Rust-local dataflow edges (`defines`, `uses`, `flows_to`, `returns`, `mutates`) for impact analysis
- Document/spec nodes linked to backticked symbols in `README.md`, `docs/**/*.md`, and `schema/**/*.surql`
- Architecture signals (package cycles + optional boundary violations)

#### Indexing tiers (speed vs richness)

Indexing is tiered so you can choose between speed/storage and graph richness. The default is **fast**.

| Tier | What it enables | Typical use |
|------|-----------------|-------------|
| `fast` | AST nodes + core edges only (no LSP or enrichment) | Quick indexing, low storage |
| `balanced` | LSP symbols + docs/enrichment + module linking | Good agentic results without full cost |
| `full` | All analyzers + LSP definitions + dataflow + architecture | Maximum accuracy/richness |

Tier behavior details:
- `fast`: disables build context, LSP, enrichment, module linking, dataflow, docs/contracts, and architecture; filters out `Uses`/`References` edges.
- `balanced`: enables build context, LSP symbols, enrichment, module linking, and docs/contracts; filters out `References` edges.
- `full`: enables all analyzers and LSP definitions; no edge filtering.

Configure the tier:
- CLI: `codegraph index --index-tier balanced`
- Env: `CODEGRAPH_INDEX_TIER=balanced`
- Config: `[indexing] tier = "balanced"`

#### Indexing prerequisites (LSP-enabled tiers)

When the tier enables LSP (`balanced`/`full`), indexing **fails fast** if required external tools are missing.

Required tools by language:
- Rust: `rust-analyzer`
- TypeScript/JavaScript: `node` and `typescript-language-server`
- Python: `node` and `pyright-langserver`
- Go: `gopls`
- Java: `jdtls`
- C/C++: `clangd`

If indexing appears to stall during LSP resolution, you can adjust the per-request timeout:

- `CODEGRAPH_LSP_REQUEST_TIMEOUT_SECS` (default `600`, minimum `5`)

If LSP resolution fails immediately and the error includes something like `Unknown binary 'rust-analyzer' in official toolchain ...`, your `rust-analyzer` is a rustup shim without an installed binary. Install a runnable `rust-analyzer` (e.g. via `brew install rust-analyzer` or by switching to a toolchain that provides it).

#### Optional architecture boundary rul