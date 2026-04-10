<!-- GitHub Trending: Rust | 1,341 stars | +14 today -->

# stakpak/agent

> Ship your code, on autopilot. An open source agent that lives on your machines 24/7 and keeps your apps running. 🦀

## Repository Info
- **URL**: https://github.com/stakpak/agent
- **Stars**: 1,341
- **Forks**: 133
- **Language**: Rust
- **License**: Apache License 2.0
- **Created**: 2024-12-10
- **Updated**: 2026-04-10
- **Topics**: agent, ai-agent, autonomous-agent, devops, devops-agents, devtool, generative-ai, hacktoberfest, infrastructure, llm-agent
- **Open Issues**: 31

## README (excerpt)


<p align="center">
  <picture>
    <source srcset="assets/stakpak-light.png" media="(prefers-color-scheme: dark)">
    <img src="assets/stakpak-dark.png" width="400" />
  </picture>
</p>

<h3 align="center">Ship your code, on autopilot.</h3>

<p align="center">
An open source agent that lives on your machines 24/7, keeps your apps running, and only pings when it needs a human. All the upside of a PaaS, none of the lock-in.
</p>

<br />

<!-- Badges Section -->
<p align="center">
  <!-- Built With Ratatui -->
  <a href="https://ratatui.rs/"><img src="https://ratatui.rs/built-with-ratatui/badge.svg" /></a>
  <!-- License -->
  <img src="https://img.shields.io/badge/License-Apache%202.0-blue.svg?style=flat-square" />
  <!-- Release (latest GitHub tag) -->
  <img src="https://img.shields.io/github/v/release/stakpak/agent?style=flat-square" />
  <!-- Build CI status (GitHub Actions) -->
  <img src="https://github.com/stakpak/agent/actions/workflows/ci.yml/badge.svg?style=flat-square" />
  <!-- Downloads (GitHub releases total) -->
  <img src="https://img.shields.io/github/downloads/stakpak/agent/total?style=flat-square" />
  <!-- Documentation -->
  <a href="https://stakpak.gitbook.io/docs/"><img src="https://img.shields.io/badge/Docs-Documentation-0A84FF?style=flat-square" /></a>
  <!-- Discord Community -->
  <a href="https://discord.gg/QTZjETP7GB"><img src="https://img.shields.io/badge/Discord-Join%20Community-5865F2?logo=discord&logoColor=white&style=flat-square" /></a>

:star: Help us reach more developers and grow the Stakpak community. Star this repo!

![til](./assets/stakpak-overview.gif)

</p>

### Try Stakpak Now
```bash
curl -sSL https://stakpak.dev/install.sh | sh # install Stakpak
stakpak init # understand your apps and tech stack
stakpak autopilot up # start the autonomous agent, running 24/7 in the background
```
[For more installation options...](https://github.com/stakpak/agent#installation)

You can't trust most AI agents with your DevOps. One mistake, and your production is toast.
Stakpak is built different:
- **Secret Substitution** - The LLM works with your credentials without ever seeing them
- **Warden Guardrails** - Network-level policies block destructive operations before they run
- **DevOps Playbooks Baked-in** - Curated library of DevOps knowledge in Stakpak Rulebooks

Generate infrastructure code, debug Kubernetes, configure CI/CD, automate deployments, without giving an LLM the keys to production.

### 🤖 Autopilot (24/7 Autonomous Runtime)

Use the new lifecycle aliases for one-command setup/start/stop:

```bash
stakpak up        # alias for: stakpak autopilot up
stakpak down      # alias for: stakpak autopilot down
```

You can also use the canonical subcommands:

```bash
stakpak autopilot up
stakpak autopilot status
stakpak autopilot logs
stakpak autopilot down
stakpak autopilot doctor
```

#### Autopilot prerequisites

Before running autopilot on a remote VM:

- Docker must be installed and accessible to the current user
- 2GB+ RAM is recommended for reliable autopilot + sandbox runs
- Swap is strongly recommended on small Linux hosts
- Linux user services may require linger to survive logout

`stakpak up` now runs preflight checks before startup, and `stakpak autopilot doctor` can be used as a deployment-readiness check before first boot:

```bash
stakpak autopilot doctor
stakpak up
```

See also: [cli/README.md](cli/README.md)

#### Unified configuration (profiles + autopilot wiring)

- `~/.stakpak/config.toml`: profile behavior (`model`, `allowed_tools`, `auto_approve`, `system_prompt`, `max_turns`, provider credentials)
- `~/.stakpak/autopilot.toml`: runtime wiring (`schedules`, `channels`, service/server settings)

Use `profile = "name"` on schedules/channels and keep behavior inside profile definitions.

```bash
# schedule profile
stakpak autopilot schedule add health --cron '*/5 * * * *' --prompt 'Check health' --profile monitoring

# channel profile
stakpak autopilot channel add slack --b