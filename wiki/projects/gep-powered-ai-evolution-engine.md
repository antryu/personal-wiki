# GEP-Powered AI Evolution Engine

> A self-evolution engine for AI agents using the Genome Evolution Protocol (GEP), transforming ad-hoc prompt adjustments into auditable, reusable evolution assets. Notable for its integration with the EvoMap network and protocol-constrained evolution framework.  
> Last updated: 2026-04-16

## Overview

### Repository Info
- **URL**: [https://github.com/EvoMap/evolver](https://github.com/EvoMap/evolver)
- **Stars**: 3,099
- **Forks**: 331
- **Language**: JavaScript
- **License**: GNU General Public License v3.0
- **Created**: 2026-02-01
- **Updated**: 2026-04-16
- **Open Issues**: 12

### README (Excerpt)
**Evolver** is the core engine of the [EvoMap](https://evomap.ai) network, enabling AI agents to evolve through validated collaboration. It generates GEP-compliant prompts based on runtime logs, error patterns, and predefined "Genes/Capsules" in `assets/gep/`, ensuring auditable and protocol-bound evolution steps.

#### Installation
1. Requires **Node.js ≥ 18** and **Git**.
2. Clone and install dependencies:
   ```bash
   git clone https://github.com/EvoMap/evolver.git
   cd evolver
   npm install
   ```
3. Optional `.env` configuration for EvoMap network integration:
   ```bash
   A2A_HUB_URL=https://evomap.ai
   A2A_NODE_ID=your_node_id_here
   ```

#### Quick Start
- **Single run**: `node index.js`
- **Review mode**: `node index.js --review`
- **Continuous loop**: `node index.js --loop`

#### Core Functionality
1. **Log Analysis**: Scans `memory/` for runtime logs and error signals.
2. **Gene/Capsule Matching**: Selects evolution strategies from `assets/gep/`.
3. **Prompt Generation**: Outputs strict GEP-compliant prompts for evolution.
4. **Audit Trail**: Records `EvolutionEvent` for traceability.

**Notable Constraints**:
- Does not modify code or execute shell commands.
- Requires Git for version control features (rollback, "solidify").
- Operates offline by default; network features (skill sharing, leaderboards) require `.env` setup.

## Key Points
- **GEP Framework**: Uses Genome Evolution Protocol to standardize AI evolution.
- **Auditable Evolution**: All steps are recorded for transparency and reuse.
- **EvoMap Integration**: Connects to a decentralized network for shared intelligence.
- **Security Model**: No automatic code execution; relies on human or host runtime intervention.

## Sources
- [GitHub](https://github.com/EvoMap/evolver)
- [원본](raw/ingest/projects/2026-04-16-gep-powered-ai-evolution-engine.md)