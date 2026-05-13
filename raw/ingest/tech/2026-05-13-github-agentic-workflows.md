<!-- GitHub Trending: Go | 4,465 stars | +13 today -->

# github/gh-aw

> GitHub Agentic Workflows

## Repository Info
- **URL**: https://github.com/github/gh-aw
- **Stars**: 4,465
- **Forks**: 385
- **Language**: Go
- **License**: MIT License
- **Created**: 2025-08-12
- **Updated**: 2026-05-13
- **Topics**: actions, cai, ci, claude-code, codex, copilot, gh-extension, github-actions
- **Open Issues**: 210

## README (excerpt)
<!--

Hello fellow agent! Welcome to GitHub Agentic Workflows = Actions + Agent + Safety. 
Here are some pointers to get you started in using this tool.

- Create a new workflow: https://raw.githubusercontent.com/github/gh-aw/main/create.md
- Install: https://raw.githubusercontent.com/github/gh-aw/main/install.md
- Reference: https://raw.githubusercontent.com/github/gh-aw/main/.github/aw/github-agentic-workflows.md

-->

# GitHub Agentic Workflows

Write agentic workflows in natural language markdown, and run them in GitHub Actions.

> [!NOTE]
> **Releases 0.68.4 through 0.71.3 are being retired** due to a bug that impacts billing. If you are running one of these versions, please upgrade to the latest release as soon as possible.

## Contents

- [Quick Start](#quick-start)
- [Overview](#overview)
- [Guardrails](#guardrails)
- [Documentation](#documentation)
- [FAQ](#faq)
- [Contributing](#contributing)
- [Community Contributions](#-community-contributions)
- [Share Feedback](#share-feedback)
- [Peli's Agent Factory](#pelis-agent-factory)
- [Related Projects](#related-projects)

## Quick Start

Ready to get your first agentic workflow running? Follow our step-by-step [Quick Start Guide](https://github.github.com/gh-aw/setup/quick-start/) to install the extension, add a sample workflow, and see it in action.

## Overview

Learn about the concepts behind agentic workflows, explore available workflow types, and understand how AI can automate your repository tasks. See [How It Works](https://github.github.com/gh-aw/introduction/how-they-work/).

## Guardrails

Guardrails, safety and security are foundational to GitHub Agentic Workflows. Workflows run with read-only permissions by default, with write operations only allowed through sanitized `safe-outputs`. The system implements multiple layers of protection including sandboxed execution, input sanitization, network isolation, supply chain security (SHA-pinned dependencies), tool allow-listing, and compile-time validation. Access can be gated to team members only, with human approval gates for critical operations, ensuring AI agents operate safely within controlled boundaries. See the [Security Architecture](https://github.github.com/gh-aw/introduction/architecture/) for comprehensive details on threat modeling, implementation guidelines, and best practices.

Using agentic workflows in your repository requires careful attention to security considerations and careful human supervision, and even then things can still go wrong. Use it with caution, and at your own risk.

## Documentation

For complete documentation, examples, and guides, see the [Documentation](https://github.github.com/gh-aw/). If you are an agent, download the [llms.txt](https://github.github.com/gh-aw/llms.txt).

If you are running a version between 0.68.4 and 0.71.3, upgrading is strongly recommended due to a bug that impacts billing.

## Contributing

For development setup and contribution guidelines, see [CONTRIBUTING.md](CONTRIBUTING.md).

### Custom Go linters

To build and test repository custom linters:

- `go test ./pkg/linters/<linter-name>/...`
- `go build ./cmd/linters`
- `make golint-custom`

`make golint-custom` builds `cmd/linters` and runs the custom analyzers against `./cmd/...` and `./pkg/...`.

## 🌍 Community Contributions

<details>
<summary>Thank you to the community members whose issue reports were resolved in this project! This list is updated automatically and reflects all attributed contributions.</summary>

- @abillingsley: [#23736](https://github.com/github/gh-aw/issues/23736) _(direct issue)_
- @adamhenson: [#25345](https://github.com/github/gh-aw/issues/25345) _(direct issue)_, [#24282](https://github.com/github/gh-aw/issues/24282) _(direct issue)_
- @ahmadabdalla: [#27473](https://github.com/github/gh-aw/issues/27473) _(direct issue)_
- @ajfeldman6: [#23924](https://github.com/github/gh-aw/issues/23924) _(direct issue)_
- @AlexDeMichieli: [#26645](https://github.com/github/gh-aw/issues/