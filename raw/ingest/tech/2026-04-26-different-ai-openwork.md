<!-- GitHub Trending: TypeScript | 14,374 stars | +103 today -->

# different-ai/openwork

> An open-source alternative to Claude Cowork built for teams, powered by opencode

## Repository Info
- **URL**: https://github.com/different-ai/openwork
- **Stars**: 14,374
- **Forks**: 1,372
- **Language**: TypeScript
- **License**: Other
- **Created**: 2026-01-14
- **Updated**: 2026-04-26
- **Topics**: N/A
- **Open Issues**: 174

## README (excerpt)
> OpenWork is the open source alternative to Claude Cowork/Codex (desktop app).


## Core Philosophy

- Local-first, cloud-ready: OpenWork runs on your machine in one click. Send a message instantly.
- Composable: desktop app, Slack/Telegram connector, or server. Use what fits, no lock-in.
- Ejectable: OpenWork is powered by OpenCode, so everything OpenCode can do works in OpenWork, even without a UI yet.
- Sharing is caring: start solo on localhost, then explicitly opt into remote sharing when you need it.

<p align="center">
  <img src="./app-demo.gif" alt="OpenWork demo" width="800" />
</p>

OpenWork is designed around the idea that you can easily ship your agentic workflows for your team as a repeatable, productized process.

> [!TIP]
> **Looking for an [Enterprise Plan](https://openworklabs.com/enterprise)?** [Speak with our Sales Team today](https://cal.com/team/openwork/enterprise)
>
> Get enhanced capabilities including feature prioritization, SSO, SLA support, LTS versions, and more.

## Alternate UIs
- **OpenWork Orchestrator (CLI host)**: run OpenCode + OpenWork server without the desktop UI.
  - install: `npm install -g openwork-orchestrator`
  - run: `openwork start --workspace /path/to/workspace --approval auto`
  - docs: [apps/orchestrator/README.md](./apps/orchestrator/README.md)

## Quick start

Download the desktop app from [openworklabs.com/download](https://openworklabs.com/download), grab the latest [GitHub release](https://github.com/different-ai/openwork/releases), or install from source below.

- macOS and Linux downloads are available directly.
- Windows access is currently handled through the paid support plan on [openworklabs.com/pricing#windows-support](https://openworklabs.com/pricing#windows-support).
- Hosted OpenWork Cloud workers are launched from the web app after checkout, then connected from the desktop app via `Add a worker` -> `Connect remote`.

## Why

Current CLI and GUIs for opencode are anchored around developers. That means a focus on file diffs, tool names, and hard to extend capabilities without relying on exposing some form of cli.

OpenWork is designed to be:

- **Extensible**: skill and opencode plugins are installable modules.
- **Auditable**: show what happened, when, and why.
- **Permissioned**: access to privileged flows.
- **Local/Remote**: OpenWork works locally as well as can connect to remote servers.

## What’s Included

- **Host mode**: runs opencode locally on your computer
- **Client mode**: connect to an existing OpenCode server by URL.
- **Sessions**: create/select sessions and send prompts.
- **Live streaming**: SSE `/event` subscription for realtime updates.
- **Execution plan**: render OpenCode todos as a timeline.
- **Permissions**: surface permission requests and reply (allow once / always / deny).
- **Templates**: save and re-run common workflows (stored locally).
- **Debug exports**: copy or export the runtime debug report and developer log stream from Settings -> Debug when you need to file a bug.
- **Skills manager**:
  - list installed `.opencode/skills` folders
  - import a local skill folder into `.opencode/skills/<skill-name>`

## Skill Manager

<img width="1292" height="932" alt="image" src="https://github.com/user-attachments/assets/b500c1c6-a218-42ce-8a11-52787f5642b6" />

## Works on local computer or servers

<img width="1292" height="932" alt="Screenshot 2026-01-13 at 7 05 16 PM" src="https://github.com/user-attachments/assets/9c864390-de69-48f2-82c1-93b328dd60c3" />

## Quick Start

### Requirements

- Node.js + `pnpm`
- Rust toolchain (for Tauri): install via `curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh`
- Tauri CLI: `cargo install tauri-cli`
- OpenCode CLI installed and available on PATH: `opencode`

### Local Dev Prerequisites (Desktop)

Before running `pnpm dev`, ensure these are installed and active in your shell:

- Node + pnpm (repo uses `pnpm@10.27.0`)
- **Bun 1.3.9+** (`bun --version`)
- Rust toolchain (for Tauri), wit