<!-- GitHub Trending: Python | 3,255 stars | +76 today -->

# Q00/ouroboros

> Agent OS: Stop prompting. Start specifying.

## Repository Info
- **URL**: https://github.com/Q00/ouroboros
- **Stars**: 3,255
- **Forks**: 320
- **Language**: Python
- **License**: MIT License
- **Created**: 2026-01-14
- **Updated**: 2026-05-04
- **Topics**: agent-os, ai-agent, mcp
- **Open Issues**: 26

## README (excerpt)
<p align="right">
  <strong>English</strong> | <a href="./README.ko.md">한국어</a>
</p>

<p align="center">
  <br/>
  ◯ ─────────── ◯
  <br/><br/>
  <img src="./docs/images/ouroboros.png" width="520" alt="Ouroboros">
  <br/><br/>
  <strong>O U R O B O R O S</strong>
  <br/><br/>
  ◯ ─────────── ◯
  <br/>
</p>


<p align="center">
  <strong>Stop prompting. Start specifying.</strong>
  <br/>
  <sub>Agent OS for replayable, specification-first AI coding workflows</sub>
</p>

<p align="center">
  <a href="https://pypi.org/project/ouroboros-ai/"><img src="https://img.shields.io/pypi/v/ouroboros-ai?color=blue" alt="PyPI"></a>
  <a href="https://github.com/Q00/ouroboros/actions/workflows/test.yml"><img src="https://img.shields.io/github/actions/workflow/status/Q00/ouroboros/test.yml?branch=main" alt="Tests"></a>
  <a href="LICENSE"><img src="https://img.shields.io/badge/license-MIT-green" alt="License"></a>
</p>

<p align="center">
  <a href="#quick-start">Quick Start</a> ·
  <a href="#why-ouroboros">Why</a> ·
  <a href="#what-you-get">Results</a> ·
  <a href="#the-loop">How It Works</a> ·
  <a href="#commands">Commands</a> ·
  <a href="#from-wonder-to-ontology">Philosophy</a>
</p>

**Turn a vague idea into a verified, working codebase -- across Claude Code, Codex CLI, OpenCode, and Hermes.**

Ouroboros is an Agent OS for AI coding: a local-first runtime layer that turns
non-deterministic agent work into a replayable, observable, policy-bound
execution contract. It replaces ad-hoc prompting with a structured
specification-first workflow: interview, crystallize, execute, evaluate,
evolve.

---

## Why Ouroboros?

Most AI coding fails at the **input**, not the output. The bottleneck is not AI capability -- it is human clarity.

| Problem       | What Happens                     | Ouroboros Fix                                 |
| :------------ | :------------------------------- | :-------------------------------------------- |
| Vague prompts | AI guesses, you rework           | Socratic interview exposes hidden assumptions |
| No spec       | Architecture drifts mid-build    | Immutable seed spec locks intent before code  |
| Manual QA     | "Looks good" is not verification | 3-stage automated evaluation gate             |

---

## Quick Start

**Install** — one command, everything auto-detected:

```bash
curl -fsSL https://raw.githubusercontent.com/Q00/ouroboros/main/scripts/install.sh | bash
```

**Build** — open your AI coding agent and go:

```
> ooo interview "I want to build a task management CLI"
```

> Works with Claude Code, Codex CLI, OpenCode, and Hermes. The installer detects Claude Code, Codex CLI, and Hermes CLI automatically and registers the MCP server. For OpenCode, run `ouroboros setup --runtime opencode` after installation.

<details>
<summary><strong>Other install methods</strong></summary>

**Claude Code plugin only** (no system package):
```bash
claude plugin marketplace add Q00/ouroboros && claude plugin install ouroboros@ouroboros
```
Then run `ooo setup` inside a Claude Code session.

**pip / uv / pipx**:
```bash
pip install ouroboros-ai                # base
pip install ouroboros-ai[claude]        # + Claude Code deps
pip install ouroboros-ai[litellm]       # + LiteLLM multi-provider
pip install ouroboros-ai[mcp]           # + MCP server/client support
pip install ouroboros-ai[tui]           # + Textual terminal UI
pip install ouroboros-ai[all]           # everything (claude + litellm + mcp + tui + dashboard)
ouroboros setup                         # configure runtime
```

Legacy compatibility: `ouroboros-ai[dashboard]` is still accepted as a compatibility alias while extras migrate.

See runtime guides: [Claude Code](./docs/runtime-guides/claude-code.md) · [Codex CLI](./docs/runtime-guides/codex.md) · [Hermes](./docs/runtime-guides/hermes.md) · [OpenCode](./docs/runtime-guides/opencode.md)

</details>

<details>
<summary><strong>Uninstall</strong></summary>

```bash
ouroboros uninstall
```

Removes all configura