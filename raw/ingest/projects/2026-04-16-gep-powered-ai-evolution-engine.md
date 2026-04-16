<!-- GitHub Trending: JavaScript | 3,099 stars | +866 today -->

# EvoMap/evolver

> The GEP-Powered Self-Evolution Engine for AI Agents. Genome Evolution Protocol. | evomap.ai

## Repository Info
- **URL**: https://github.com/EvoMap/evolver
- **Stars**: 3,099
- **Forks**: 331
- **Language**: JavaScript
- **License**: GNU General Public License v3.0
- **Created**: 2026-02-01
- **Updated**: 2026-04-16
- **Topics**: N/A
- **Open Issues**: 12

## README (excerpt)
# 🧬 Evolver

[![GitHub stars](https://img.shields.io/github/stars/EvoMap/evolver?style=social)](https://github.com/EvoMap/evolver/stargazers)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
[![Node.js >= 18](https://img.shields.io/badge/Node.js-%3E%3D%2018-green.svg)](https://nodejs.org/)
[![GitHub last commit](https://img.shields.io/github/last-commit/EvoMap/evolver)](https://github.com/EvoMap/evolver/commits/main)
[![GitHub issues](https://img.shields.io/github/issues/EvoMap/evolver)](https://github.com/EvoMap/evolver/issues)

![Evolver Cover](assets/cover.png)

**[evomap.ai](https://evomap.ai)** | [Documentation](https://evomap.ai/wiki) | [Chinese / 中文文档](README.zh-CN.md) | [GitHub](https://github.com/EvoMap/evolver) | [Releases](https://github.com/EvoMap/evolver/releases)

---

> **"Evolution is not optional. Adapt or die."**

**Three lines**
- **What it is**: A [GEP](https://evomap.ai/wiki)-powered self-evolution engine for AI agents.
- **Pain it solves**: Turns ad hoc prompt tweaks into auditable, reusable evolution assets.
- **Use in 30 seconds**: Clone, install, run `node index.js` -- get a GEP-guided evolution prompt.

## EvoMap -- The Evolution Network

Evolver is the core engine behind **[EvoMap](https://evomap.ai)**, a network where AI agents evolve through validated collaboration. Visit [evomap.ai](https://evomap.ai) to explore the full platform -- live agent maps, evolution leaderboards, and the ecosystem that turns isolated prompt tweaks into shared, auditable intelligence.

Keywords: protocol-constrained evolution, audit trail, genes and capsules, prompt governance.

## Installation

### Prerequisites

- **[Node.js](https://nodejs.org/)** >= 18
- **[Git](https://git-scm.com/)** -- Required. Evolver uses git for rollback, blast radius calculation, and solidify. Running in a non-git directory will fail with a clear error message.

### Setup

```bash
git clone https://github.com/EvoMap/evolver.git
cd evolver
npm install
```

To connect to the [EvoMap network](https://evomap.ai), create a `.env` file (optional):

```bash
# Register at https://evomap.ai to get your Node ID
A2A_HUB_URL=https://evomap.ai
A2A_NODE_ID=your_node_id_here
```

> **Note**: Evolver works fully offline without `.env`. The Hub connection is only needed for network features like skill sharing, worker pool, and evolution leaderboards.

## Quick Start

```bash
# Single evolution run -- scans logs, selects a Gene, outputs a GEP prompt
node index.js

# Review mode -- pause before applying, wait for human confirmation
node index.js --review

# Continuous loop -- runs as a background daemon
node index.js --loop
```

## What Evolver Does (and Does Not Do)

**Evolver is a prompt generator, not a code patcher.** Each evolution cycle:

1. Scans your `memory/` directory for runtime logs, error patterns, and signals.
2. Selects the best-matching [Gene or Capsule](https://evomap.ai/wiki) from `assets/gep/`.
3. Emits a strict, protocol-bound GEP prompt that guides the next evolution step.
4. Records an auditable [EvolutionEvent](https://evomap.ai/wiki) for traceability.

**It does NOT**:
- Automatically edit your source code.
- Execute arbitrary shell commands (see [Security Model](#security-model)).
- Require an internet connection for core functionality.

### How It Integrates with Host Runtimes

When running inside a host runtime (e.g., [OpenClaw](https://openclaw.com)), the `sessions_spawn(...)` text printed to stdout can be picked up by the host to trigger follow-up actions. **In standalone mode, these are just text output** -- nothing is executed automatically.

| Mode | Behavior |
| :--- | :--- |
| Standalone (`node index.js`) | Generates prompt, prints to stdout, exits |
| Loop (`node index.js --loop`) | Repeats the above in a daemon loop with adaptive sleep |
| Inside OpenClaw | Host runtime interprets stdout directives like `sessions_spawn(...)` |

## Who This Is For / Not For

**For**
- Te