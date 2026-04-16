<!-- GitHub Trending: Rust | 1,962 stars | +32 today -->

# always-further/nono

> nono - a capability-based, multiplexing sandbox tool, built for developers - lift'n'shift seamless path to prod. Run agents securely without needing any additional infra, zero setup, zero latency. 

## Repository Info
- **URL**: https://github.com/always-further/nono
- **Stars**: 1,964
- **Forks**: 131
- **Language**: Rust
- **License**: Apache License 2.0
- **Created**: 2026-01-31
- **Updated**: 2026-04-16
- **Topics**: agent-sandbox, agent-security, ai-agent-sandbox, ai-agent-security, ai-agents, ai-security, ai-security-tool, code-execution, llm-sandbox, llm-security, mcp, mcp-security, prompt-injection, runtime-security, security, sigstore, supply-chain-security, zero-trust
- **Open Issues**: 101

## README (excerpt)
<div align="center">

<img src="assets/logo.gif" alt="nono logo" width="600"/>

<p>
  From the creator of
  <a href="https://sigstore.dev"><strong>Sigstore</strong></a>
  <br/>
  <sub>The standard for secure software attestation, used by PyPI, npm, brew, and Maven Central</sub>
</p>
<p>
  <a href="https://opensource.org/licenses/Apache-2.0"><img src="https://img.shields.io/badge/License-Apache%202.0-blue.svg" alt="License"/></a>
  <a href="https://github.com/always-further/nono/actions/workflows/ci.yml"><img src="https://github.com/always-further/nono/actions/workflows/ci.yml/badge.svg" alt="CI Status"/></a>
  <a href="https://docs.nono.sh"><img src="https://img.shields.io/badge/Docs-docs.nono.sh-green.svg" alt="Documentation"/></a>
</p>
<p>
  <a href="https://discord.gg/pPcjYzGvbS">
    <img src="https://img.shields.io/badge/Chat-Join%20Discord-7289da?style=for-the-badge&logo=discord&logoColor=white" alt="Join Discord"/>
  </a>
  <a href="https://github.com/marketplace/actions/agent-sign">
    <img src="https://img.shields.io/badge/Secure_Action-agent--sign-2088FF?style=for-the-badge&logo=github-actions&logoColor=white" alt="agent-sign GitHub Action"/>
  </a>
</p>

---
</div>


<div align="center">

<img src="assets/term.gif" alt="nono terminal demo" width="800"/>

</div>

> [!WARNING]
> Early alpha -- not yet security audited for production use. Active development may cause breakage.

---

Most sandboxes feel like sandboxes. Rigid, sluggish, and designed for a different problem entirely. nono was built from the ground up for AI agents - and the developer workfows they need to thrive - agent multiplexing, snapshots, credential injection, supply chain security out of the box. Develop alongside nono, then deploy anywhere: CI pipelines, Kubernetes, cloud VMs, microVMs. The one stop shop for all your clankers.

---

## Latest News

- **nono registry** - we will be bringing online a skill and policy registry to allow uses to contribute agent skills (SKILLS.md, hooks, scripts etc), and policy - this will allow us to more easily scale to supporting all of the different agents, installers and linux dists. Security will be baked in from the start. [Read more here](https://github.com/always-further/nono/issues/630)

- **WSL2 support** -- Auto-detection with ~84% feature coverage out of the box. Run `nono setup --check-only` to see what's available. ([#522](https://github.com/always-further/nono/pull/522))

[All updates](https://github.com/always-further/nono/discussions/categories/announcements)

---

**Platform support:** macOS, Linux, and [WSL2](https://nono.sh/docs/cli/internals/wsl2).

**Install:**
```bash
brew install nono
```

Other options in the [Installation Guide](https://docs.nono.sh/cli/getting_started/installation).

---

## Quick Start

Built-in profiles for [Claude Code](https://docs.nono.sh/cli/clients/claude-code), [Codex](https://docs.nono.sh/cli/clients/codex), [OpenCode](https://docs.nono.sh/cli/clients/opencode), [OpenClaw](https://docs.nono.sh/cli/clients/openclaw), and [Swival](https://docs.nono.sh/cli/clients/swival) -- or [define your own](https://docs.nono.sh/cli/features/profiles-groups).

## Libraries and Bindings

The core is a Rust library that can be embedded into any application. Policy-free - it applies only what clients explicitly request.

```rust
use nono::{CapabilitySet, Sandbox};

let mut caps = CapabilitySet::new();
caps.allow_read("/data/models")?;
caps.allow_write("/tmp/workspace")?;

Sandbox::apply(&caps)?;  // Irreversible -- kernel-enforced from here on
```

Also available as [Python](https://github.com/always-further/nono-py) , [TypeScript](https://github.com/always-further/nono-ts), [Go](https://github.com/always-further/nono-go)  bindings.

## Key Features

| Feature | Description |
|---------|-------------|
| **Kernel sandbox** | Landlock (Linux) + Seatbelt (macOS). Irreversible, inherited by child processes. |
| **Credential injection** | Proxy mode keeps API keys outside the sandbox ent