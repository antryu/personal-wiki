# Semantic Code Analysis CLI

> Semantic version control CLI that replaces line-based Git diffs with entity-level analysis of functions, classes, and methods. Notable for its AI-agent compatibility and integration with tree-sitter for 24 languages.  
> Last updated: 2026-04-15

## Overview
**sem** is a Git-compatible semantic version control tool that parses code into entities (functions, classes, methods) and tracks changes at this level. Built on Rust and tree-sitter, it eliminates ambiguous line-based diffs by showing exact entity modifications, renames, and dependencies. Key features include:

### Repository Highlights
- **Stars**: 1,746 | **Forks**: 49 | **Language**: Rust
- **License**: Apache License 2.0 (conflict noted: README badge shows MIT)
- **Topics**: `ai-agents`, `semantic-diff`, `code-review`, `tree-sitter`
- **Releases**: [Latest](https://github.com/Ataraxy-Labs/sem/releases/latest)

### Installation Options
- **Homebrew**: `brew install sem-cli`
- **Node.js**: `npm install --save-dev @ataraxy-labs/sem` or `bun add -d @ataraxy-labs/sem`
- **Source**: `cargo install --path sem-cli` (requires Rust)
- **Docker**: `docker run --rm -it -v "$(pwd):/repo" sem diff`

### Core Commands
- **`sem diff`**: Entity-level diffs with rename detection, word-level highlights, and format options (JSON, Markdown).
- **`sem impact`**: Cross-file dependency graph showing breakage risks from entity changes.
- **`sem blame`**: Entity-level blame tracking for functions/methods.
- **`sem log`**: Tracks entity evolution through Git history with content diffs.

### Language Support
Leverages [tree-sitter](https://tree-sitter.github.io/) for semantic parsing in 24+ languages including:
- **JavaScript/TypeScript**
- **Python**
- **Rust**
- **Java**
- **C/C++**
- **Go**
- **Rust**

## Key Points
- Replaces line-based diffs with **entity-aware** changes (e.g., "function `authUser` modified")
- **No setup required** – works in any Git repo or standalone file comparisons
- **AI/CI integration** via JSON output and test impact analysis
- **Cross-platform** with Docker, npm, and native binary support
- **Visual clarity** through inline word-level diffs and terminal diagrams

## Sources
- [GitHub](https://github.com/Ataraxy-Labs/sem)
- [원본](raw/ingest/tech/2026-04-15-semantic-code-analysis-cli.md)