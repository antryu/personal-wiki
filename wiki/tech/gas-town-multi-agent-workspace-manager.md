# Gas Town - Multi-Agent Workspace Manager

> Gas Town is a multi-agent orchestration system that allows coordination of AI coding agents like Claude Code, GitHub Copilot, Codex, and others through persistent work tracking. It solves the problem of agent coordination and context retention using a git-backed architecture, making it notable for enabling reliable, scalable multi-agent workflows in complex software development environments.
> Last updated: 2026-05-16

## Overview

Gas Town is a workspace manager designed to coordinate multiple AI coding agents across different tasks. It ensures that agents do not lose context upon restart by persisting work state in git-backed hooks. This enables robust and reliable multi-agent workflows. The system is built around persistent identities, task orchestration, and a modular architecture that allows for scalability and fault tolerance.

Key components include The Mayor (AI coordinator), Rigs (project containers), Crew Members (personal workspace), Polecats (worker agents), Hooks (persistent storage), and Convoys (work tracking units). Gas Town also includes monitoring tools like Witness, Deacon, and Dogs to maintain agent health and workflow efficiency.

## Key Points
- Coordinates multiple AI coding agents (Claude Code, GitHub Copilot, etc.) with persistent work tracking.
- Uses git-backed hooks to retain work state across agent restarts.
- Supports large-scale orchestration with 20-30 agents and includes smart recovery and workflow management.
- Implements Beads, a structured work tracking system using git for storage.
- Provides a modular architecture with components like Mayor, Rigs, Polecats, and monitoring systems.

## Sources
- [GitHub](https://github.com/gastownhall/gastown)
- [원본](raw/ingest/tech/2026-05-16-gas-town-multi-agent-workspace-manager.md)