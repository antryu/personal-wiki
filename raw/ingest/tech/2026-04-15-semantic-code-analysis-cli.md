<!-- GitHub Trending: Rust | 1,745 stars | +78 today -->

# Ataraxy-Labs/sem

> Semantic version control CLI. Entity-level diff, blame, graph, and impact analysis for code. 24 languages via tree-sitter.

## Repository Info
- **URL**: https://github.com/Ataraxy-Labs/sem
- **Stars**: 1,746
- **Forks**: 49
- **Language**: Rust
- **License**: Apache License 2.0
- **Created**: 2026-02-05
- **Updated**: 2026-04-15
- **Topics**: ai-agents, cli, code-review, developer-tools, diff, git, rust, semantic-diff, tree-sitter
- **Open Issues**: 8

## README (excerpt)
<p align="center">
  <img src="assets/banner.svg" alt="sem" width="600" />
</p>

<p align="center">
  <strong>Semantic version control built on Git.</strong><br>
  Instead of lines changed, sem tells you what entities changed: functions, methods, classes.
</p>

<p align="center">
  <a href="https://ataraxy-labs.com/blogs/code-is-not-text">Why sem?</a> ·
  <a href="#install">Install</a> ·
  <a href="#commands">Commands</a> ·
  <a href="#mcp-server">MCP Server</a> ·
  <a href="https://github.com/Ataraxy-Labs/sem/releases/latest">Releases</a>
</p>

<p align="center">
  <a href="https://github.com/Ataraxy-Labs/sem/releases/latest"><img src="https://img.shields.io/github/v/release/Ataraxy-Labs/sem?color=blue&label=release" alt="Release"></a>
  <img src="https://img.shields.io/badge/rust-stable-orange" alt="Rust">
  <img src="https://img.shields.io/badge/tests-133_passing-brightgreen" alt="Tests">
  <a href="LICENSE"><img src="https://img.shields.io/badge/license-MIT-yellow" alt="License"></a>
  <img src="https://img.shields.io/badge/languages-23-blue" alt="Languages">
</p>

sem is a semantic version control tool that works on top of Git. It parses your code with tree-sitter, extracts every function, class, and method as an entity, and diffs at the entity level instead of lines. This means you see "function `blahh` was modified" instead of "lines x-y changed."

It works in any Git repo with no setup.

<p align="center">
  <img src="assets/terminal.svg" alt="sem diff" width="800" />
</p>

## Install

```bash
brew install sem-cli
```

Or install the npm wrapper into `node_modules`:

```bash
npm install --save-dev @ataraxy-labs/sem
```

With Bun, trust the package so its `postinstall` script can download the binary:

```bash
bun add -d @ataraxy-labs/sem
bun pm trust @ataraxy-labs/sem
```

Or build from source (requires Rust):

```bash
git clone https://github.com/Ataraxy-Labs/sem
cd sem/crates
cargo install --path sem-cli
```

Or grab a binary from [GitHub Releases](https://github.com/Ataraxy-Labs/sem/releases).

Or run via Docker:

```bash
docker build -t sem .
docker run --rm -it -u "$(id -u):$(id -g)" -v "$(pwd):/repo" sem diff
```

## Commands

Works in any Git repo. No setup required. Also works outside Git for arbitrary file comparison.

### sem diff

Entity-level diff with rename detection, structural hashing, and word-level inline highlights.

```bash
# Semantic diff of working changes
sem diff

# Staged changes only
sem diff --staged

# Specific commit
sem diff --commit abc1234

# Commit range
sem diff --from HEAD~5 --to HEAD

# Verbose mode (word-level inline diffs for each entity)
sem diff -v

# Plain text output (git status style)
sem diff --format plain

# JSON output (for AI agents, CI pipelines)
sem diff --format json

# Markdown output (for PRs, reports)
sem diff --format markdown

# Compare any two files (no git repo needed)
sem diff file1.ts file2.ts

# Read file changes from stdin (no git repo needed)
echo '[{"filePath":"src/main.rs","status":"modified","beforeContent":"...","afterContent":"..."}]' \
  | sem diff --stdin --format json

# Only specific file types
sem diff --file-exts .py .rs
```

### sem impact

Cross-file dependency graph shows what breaks if an entity changes.

```bash
# Full impact analysis
sem impact authenticateUser

# Direct dependencies only
sem impact authenticateUser --deps

# Direct dependents only
sem impact authenticateUser --dependents

# Affected tests only
sem impact authenticateUser --tests

# JSON output
sem impact authenticateUser --json

# Disambiguate by file
sem impact authenticateUser --file src/auth.ts
```

### sem blame

Entity-level blame showing who last modified each function, class, or method.

```bash
sem blame src/auth.ts

# JSON output
sem blame src/auth.ts --json
```

### sem log

Track how a single entity evolved through git history.

```bash
sem log authenticateUser

# Verbose mode (show content diff between versions)
sem log authenticateUser -v

# Limit commits scann