<!-- GitHub Trending: TypeScript | 33,337 stars | +160 today -->

# ruvnet/ruflo

> 🌊 The leading agent orchestration platform for Claude. Deploy intelligent multi-agent swarms, coordinate autonomous workflows, and build conversational AI systems. Features    enterprise-grade architecture, distributed swarm intelligence, RAG integration, and native Claude Code / Codex Integration

## Repository Info
- **URL**: https://github.com/ruvnet/ruflo
- **Stars**: 33,337
- **Forks**: 3,768
- **Language**: TypeScript
- **License**: MIT License
- **Created**: 2025-06-02
- **Updated**: 2026-04-25
- **Topics**: agentic-ai, agentic-engineering, agentic-framework, agentic-rag, agentic-workflow, agents, ai-assistant, ai-tools, anthropic-claude, autonomous-agents, claude-code, claude-code-skills, codex, huggingface, mcp-server, model-context-protocol, multi-agent, multi-agent-systems, swarm, swarm-intelligence
- **Open Issues**: 485

## README (excerpt)
# 🌊 RuFlo v3.5: Enterprise AI Orchestration Platform

<div align="center">

![Ruflo Banner](ruflo/assets/ruflo-small.jpeg)



[![GitHub Project of the Day](https://img.shields.io/badge/GitHub-Project%20of%20the%20Day-ff6600?style=for-the-badge&logo=github&logoColor=white)](https://github.com/ruvnet/claude-flow)

[![Star on GitHub](https://img.shields.io/github/stars/ruvnet/claude-flow?style=for-the-badge&logo=github&color=gold)](https://github.com/ruvnet/claude-flow)
[![Monthly Downloads](https://img.shields.io/npm/dm/claude-flow?style=for-the-badge&logo=npm&color=blue&label=Monthly%20Downloads)](https://www.npmjs.com/package/claude-flow)
[![Total Downloads](https://img.shields.io/npm/dt/claude-flow?style=for-the-badge&logo=npm&color=cyan&label=Total%20Downloads)](https://www.npmjs.com/package/claude-flow)
[![ruv.io](https://img.shields.io/badge/ruv.io-AI%20Platform-green?style=for-the-badge&logo=data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCI+PHBhdGggZmlsbD0id2hpdGUiIGQ9Ik0xMiAyQzYuNDggMiAyIDYuNDggMiAxMnM0LjQ4IDEwIDEwIDEwIDEwLTQuNDggMTAtMTBTMTcuNTIgMiAxMiAyem0wIDE4Yy00LjQyIDAtOC0zLjU4LTgtOHMzLjU4LTggOC04IDggMy41OCA4IDgtMy41OCA4LTggOHoiLz48L3N2Zz4=)](https://ruv.io)
[![Agentics Foundation](https://img.shields.io/badge/Agentics-Foundation-crimson?style=for-the-badge&logo=openai)](https://discord.com/invite/dfxmpwkG2D)
[![Claude Code](https://img.shields.io/badge/Claude%20Code-SDK%20Integrated-green?style=for-the-badge&logo=anthropic)](https://github.com/ruvnet/claude-flow)
[![MIT License](https://img.shields.io/badge/License-MIT-yellow?style=for-the-badge&logo=opensourceinitiative)](https://opensource.org/licenses/MIT)
---
[![Follow @ruv](https://img.shields.io/badge/Follow%20%40ruv-000000?style=for-the-badge&logo=x&logoColor=white)](https://x.com/ruv)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Connect-0A66C2?style=for-the-badge&logo=linkedin)](https://www.linkedin.com/in/reuvencohen/)
[![YouTube](https://img.shields.io/badge/YouTube-Subscribe-FF0000?style=for-the-badge&logo=youtube&logoColor=white)](https://www.youtube.com/@ReuvenCohen)

# **Multi-agent AI orchestration for Claude Code**
*Deploy 16 specialized agent roles + custom types in coordinated swarms with self-learning capabilities, fault-tolerant consensus, and enterprise-grade security.*

</div>

> **Why Ruflo?** Claude Flow is now Ruflo — named by Ruv, who loves Rust, flow states, and building things that feel inevitable. The "Ru" is the Ruv. The "flo" is the flow. Underneath, WASM kernels written in Rust power the policy engine, embeddings, and proof system. 6,000+ commits later, this is v3.5.

## Getting into the Flow

Ruflo is a comprehensive AI agent orchestration framework that transforms Claude Code into a powerful multi-agent development platform. It enables teams to deploy, coordinate, and optimize specialized AI agents working together on complex software engineering tasks.

### Self-Learning/Self-Optimizing Agent Architecture

```
User → Ruflo (CLI/MCP) → Router → Swarm → Agents → Memory → LLM Providers
                       ↑                          ↓
                       └──── Learning Loop ←──────┘
```

<details>
<summary>📐 <strong>Expanded Architecture</strong> — Full system diagram with RuVector intelligence</summary>

```mermaid
flowchart TB
    subgraph USER["👤 User Layer"]
        U[User]
    end

    subgraph ENTRY["🚪 Entry Layer"]
        CLI[CLI / MCP Server]
        AID[AIDefence Security]
    end

    subgraph ROUTING["🧭 Routing Layer"]
        QL[Q-Learning Router]
        MOE[MoE - 8 Experts]
        SK[Skills - 130+]
        HK[Hooks - 27]
    end

    subgraph SWARM["🐝 Swarm Coordination"]
        TOPO[Topologies<br/>mesh/hier/ring/star]
        CONS[Consensus<br/>Raft/BFT/Gossip]
        CLM[Claims<br/>Human-Agent Coord]
    end

    subgraph AGENTS["🤖 100+ Agents"]
        AG1[coder]
        AG2[tester]
        AG3[reviewer]
        AG4[architect]
        AG5[se