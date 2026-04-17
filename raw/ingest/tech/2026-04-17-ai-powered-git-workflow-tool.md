<!-- GitHub Trending: Go | 3,986 stars | +14 today -->

# entireio/cli

> Entire CLI hooks into your Git workflow to capture AI agent sessions as you work. Sessions are indexed alongside commits, creating a searchable record of how code was written in your repo.

## Repository Info
- **URL**: https://github.com/entireio/cli
- **Stars**: 3,986
- **Forks**: 303
- **Language**: Go
- **License**: MIT License
- **Created**: 2026-01-02
- **Updated**: 2026-04-17
- **Topics**: agents, ai, claude, developer, developer-platform, gemini
- **Open Issues**: 116

## README (excerpt)
# Entire CLI

Entire hooks into your Git workflow to capture AI agent sessions as you work. Sessions are indexed alongside commits, creating a searchable record of how code was written in your repo.

With Entire, you can:

- **Understand why code changed** — see the full prompt/response transcript and files touched
- **Recover instantly** — rewind to a known-good checkpoint when an agent goes sideways and resume seamlessly
- **Keep Git history clean** — preserve agent context on a separate branch
- **Onboard faster** — show the path from prompt → change → commit
- **Maintain traceability** — support audit and compliance requirements when needed

## Why Entire

- **Understand why code changed, not just what** — Transcripts, prompts, files touched, token usage, tool calls, and more are captured alongside every commit.
- **Rewind and resume from any checkpoint** — Go back to any previous agent session and pick up exactly where you or a coworker left off.
- **Full context preserved and searchable** — A versioned record of every AI interaction tied to your git history, with nothing lost.
- **Zero context switching** — Git-native, two-step setup, works with Claude Code, Codex, Gemini, and more.

## Table of Contents

- [Why Entire](#why-entire)
- [Quick Start](#quick-start)
- [Typical Workflow](#typical-workflow)
- [Key Concepts](#key-concepts)
  - [How It Works](#how-it-works)
  - [Strategy](#strategy)
- [Local Device Auth Testing](#local-device-auth-testing)
- [Commands Reference](#commands-reference)
- [Configuration](#configuration)
- [Security & Privacy](#security--privacy)
- [Troubleshooting](#troubleshooting)
- [Development](#development)
- [Getting Help](#getting-help)
- [License](#license)

## Requirements

- Git
- macOS, Linux or Windows
- [Supported agent](#agent-hook-configuration) installed and authenticated

## Quick Start

```bash
# Install stable via Homebrew
brew tap entireio/tap
brew install --cask entire

# Or install nightly via Homebrew
brew tap entireio/tap
brew install --cask entire@nightly

# Or install stable via install.sh
curl -fsSL https://entire.io/install.sh | bash

# Or install nightly via install.sh
curl -fsSL https://entire.io/install.sh | bash -s -- --channel nightly

# Or install stable via Scoop (Windows)
scoop bucket add entire https://github.com/entireio/scoop-bucket.git
scoop install entire/cli

# Or install via Go (development/manual setup)
go install github.com/entireio/cli/cmd/entire@latest

# Linux: Add Go binaries to PATH (add to ~/.zshrc or ~/.bashrc if not already configured)
export PATH="$HOME/go/bin:$PATH"

# Enable in your project
cd your-project && entire enable

# Check status
entire status
```

After the initial setup, use `entire configure` to add/remove agents or update setup-related options, and use `entire enable` / `entire disable` to toggle Entire on or off.

## Release Channels

Entire currently ships two release channels:

- `stable`: recommended for most users. Stable releases change less often and are the default for Homebrew, Scoop, and `install.sh`.
- `nightly`: prerelease builds for users who want the latest changes earlier. Nightlies are published more frequently and may include newer, less-proven changes than stable.

How to use each channel:

- Homebrew stable: `brew install --cask entire`
- Homebrew nightly: `brew install --cask entire@nightly`
- `install.sh` stable: `curl -fsSL https://entire.io/install.sh | bash`
- `install.sh` nightly: `curl -fsSL https://entire.io/install.sh | bash -s -- --channel nightly`
- Scoop: currently supports `stable` only via `scoop install entire/cli`

## Typical Workflow

### 1. Enable Entire in Your Repository

```
entire enable
```

On a repo that has not been enabled yet, `entire enable` runs the initial enable flow: it creates Entire settings, installs git hooks, and prompts you to choose which agent hooks to install. To enable a specific agent non-interactively, use `entire enable --agent <name>` (for example, `entire enable --a