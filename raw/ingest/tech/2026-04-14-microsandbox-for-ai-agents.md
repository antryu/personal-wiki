<!-- GitHub Trending: Rust | 5,362 stars | +25 today -->

# superradcompany/microsandbox

> 🧱 secure, local, cross-platform and programmable sandboxes for AI agents

## Repository Info
- **URL**: https://github.com/superradcompany/microsandbox
- **Stars**: 5,362
- **Forks**: 255
- **Language**: Rust
- **License**: Apache License 2.0
- **Created**: 2024-10-03
- **Updated**: 2026-04-14
- **Topics**: agents, ai, container, docker, linux, macos, mcp, nodejs, orchestration, rust, sandbox, sandboxing, security, self-hosted, typescript, virtualization, vm, windows
- **Open Issues**: 38

## README (excerpt)
<div align="center">
    <a href="./#gh-dark-mode-only" target="_blank" align="center">
        <img width="35%" src="./assets/microsandbox-gh-banner-dark.png" alt="microsandbox-banner-xl-dark">
    </a>
</div>

<div align="center">
    <a href="./#gh-light-mode-only" target="_blank">
        <img width="35%" src="./assets/microsandbox-gh-banner-light.png" alt="microsandbox-banner-xl">
    </a>
</div>

<br />

<div align="center"><b>——&nbsp;&nbsp;&nbsp;every agent deserves its own computer&nbsp;&nbsp;&nbsp;——</b></div>

<br />
<br />

<div align='center'>
  <a href="https://github.com/superradcompany/microsandbox/releases"><img src="https://img.shields.io/github/v/release/superradcompany/microsandbox?include_prereleases&style=for-the-badge" alt="GitHub release"></a>
  <a href="https://discord.gg/T95Y3XnEAK"><img src="https://img.shields.io/discord/1315784565562019870?label=Discord&logo=discord&logoColor=white&color=5865F2&style=for-the-badge" alt="Discord"></a>
  <a href="LICENSE"><img src="https://img.shields.io/badge/License-Apache 2.0-blue.svg?style=for-the-badge" alt="Apache 2.0 License"></a>
</div>

<br />

**Microsandbox** spins up **lightweight VMs in milliseconds** from our SDKs. Runs locally on your machine. No server to set up. No lingering daemon. It is all embedded and rootless!

##

- <img height="14" src="https://octicons-col.vercel.app/shield-lock/A770EF"> **Hardware Isolation**: Hardware-level isolation with microVM technology.
- <img height="14" src="https://octicons-col.vercel.app/zap/A770EF"> **Instant Startup**: Average boot times under 100 milliseconds.
- <img height="14" src="https://octicons-col.vercel.app/plug/A770EF"> **Embeddable**: Spawn VMs right within your code. No setup server. No long-running daemon.
- <img height="14" src="https://octicons-col.vercel.app/lock/A770EF"> **Secrets That Can't Leak**: Unexploitable secret keys that never enter the VM.
- <img height="14" src="https://octicons-col.vercel.app/package/A770EF"> **OCI Compatible**: Runs standard container images from Docker Hub, GHCR, or any OCI registry.
- <img height="14" src="https://octicons-col.vercel.app/database/A770EF"> **Long-Running**: Sandboxes can run in detached mode. Great for long-lived sessions.
- <img height="14" src="https://octicons-col.vercel.app/terminal/A770EF"> **Agent-Ready**: Your agents can create their own sandboxes with our [Agent Skills](https://github.com/superradcompany/skills) and [MCP server](https://github.com/superradcompany/microsandbox-mcp).


<br />

## <a href="./#gh-dark-mode-only" target="_blank"><img height="13" src="https://octicons-col.vercel.app/rocket/ffffff" alt="rocket-dark"></a><a href="./#gh-light-mode-only" target="_blank"><img height="13" src="https://octicons-col.vercel.app/rocket/000000" alt="rocket"></a>&nbsp;&nbsp;Getting Started

#### <img height="14" src="https://octicons-col.vercel.app/move-to-bottom/A770EF">&nbsp;&nbsp;Install the SDK

> ```sh
> cargo add microsandbox    # 🦀 Rust
> ```
> ```sh
> uv add microsandbox       # 🐍 Python
> ```
> ```sh
> npm i microsandbox        # 🟦 TypeScript
> ```

#### <img height="14" src="https://octicons-col.vercel.app/download/A770EF">&nbsp;&nbsp;Install the CLI **(Optional)**

> ```sh
> curl -fsSL https://install.microsandbox.dev | sh
> ```

##

> **Requirements**: Linux with KVM enabled, or macOS with Apple Silicon.<br />
> **Warning**: Microsandbox is still **beta software**. Expect breaking changes, missing features, and rough edges.

<br />

## <a href="./#gh-dark-mode-only" target="_blank"><img height="18" src="https://octicons-col.vercel.app/package-dependencies/ffffff" alt="sdk-dark"></a><a href="./#gh-light-mode-only" target="_blank"><img height="18" src="https://octicons-col.vercel.app/package-dependencies/000000" alt="sdk"></a>&nbsp;&nbsp;SDK

The SDK lets you create and control sandboxes directly from your application. `Sandbox::builder("...").create()` boots a microVM as a child process. No infrastructure required.

#### <img hei