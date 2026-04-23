<!-- GitHub Trending: Rust | 901 stars | +29 today -->

# emanuele-em/proxelar

> A programmable MITM proxy that intercepts HTTP/HTTPS traffic so you don't have to guess what your app is    doing. Forward & reverse modes, TLS interception, TUI, terminal, and web GUI.

## Repository Info
- **URL**: https://github.com/emanuele-em/proxelar
- **Stars**: 901
- **Forks**: 56
- **Language**: Rust
- **License**: MIT License
- **Created**: 2023-01-19
- **Updated**: 2026-04-23
- **Topics**: cli, http-proxy, https-proxy, man-in-the-middle, mitm, network, network-security, proxy, reverse-proxy, rust, ssl, tls, traffic-inspection, tui, websockets
- **Open Issues**: 5

## README (excerpt)
<div align="center">
<img src="assets/logo.png" width="80"><br><br>
<h1>Proxelar</h1>
<p><strong>A Man-in-the-Middle proxy written in Rust.</strong><br>
Intercept, inspect, and modify HTTP/HTTPS traffic with Lua scripting, a TUI, and a web interface.</p>

<p>
<a href="https://crates.io/crates/proxelar"><img src="https://img.shields.io/crates/v/proxelar" alt="Crates.io"></a>
<a href="https://formulae.brew.sh/formula/proxelar"><img src="https://img.shields.io/homebrew/v/proxelar" alt="Homebrew"></a>
<a href="LICENSE-MIT"><img src="https://img.shields.io/crates/l/proxelar" alt="License: MIT"></a>
<a href="https://github.com/emanuele-em/proxelar/actions/workflows/autofix.yml"><img src="https://github.com/emanuele-em/proxelar/actions/workflows/autofix.yml/badge.svg" alt="CI"></a>
<a href="https://proxelar.micheletti.io"><img src="https://img.shields.io/badge/docs-proxelar.micheletti.io-blue" alt="Docs"></a>
</p>

<img src="assets/screenshots/tui.gif" alt="TUI demo" width="800"><br><br>
<img src="assets/screenshots/gui.gif" alt="Web GUI demo" width="800">

</div>

---

## What is Proxelar?

Proxelar sits between your application and the internet, giving you full visibility into every HTTP/HTTPS request — and the power to transform it on the fly with Lua.

```
Your App  ──►  Proxelar :8080  ──►  Internet
                    │
              Inspect · Modify · Mock
```

Useful for debugging APIs, reverse engineering third-party services, testing mobile apps, injecting headers, mocking responses, or automating any request/response transform without touching your source code.

---

## Features

- **Lua scripting** — write `on_request` / `on_response` hooks to modify, block, or mock traffic at runtime
- **HTTPS interception** — automatic CA generation and per-host certificate minting
- **Forward & reverse proxy** — CONNECT tunneling or upstream URI rewriting
- **Three interfaces** — terminal (stdout), interactive TUI (ratatui), web GUI (axum + WebSocket)
- **WebSocket inspection** — connections captured alongside HTTP traffic; browse frames by direction, opcode, and payload
- **Column-scoped filtering** — `time:14:`, `proto:https`, `method:POST`, `host:github`, `path:/api`, `status:404`, `type:json`, `size:1KB`, `duration:slow` or plain text search
- **Easy CA install** — visit `http://proxel.ar` through the proxy to download and install the root cert

---

## Installation

### Homebrew (macOS / Linux)

```bash
brew install proxelar
```

### Cargo

```bash
cargo install proxelar
```

### Docker / Podman

```bash
# Web GUI
docker run --rm -it -v ~/.proxelar:/root/.proxelar -p 8080:8080 -p 127.0.0.1:8081:8081 ghcr.io/emanuele-em/proxelar --interface gui --addr 0.0.0.0

# Terminal
docker run --rm -it -v ~/.proxelar:/root/.proxelar -p 8080:8080 ghcr.io/emanuele-em/proxelar --interface terminal --addr 0.0.0.0
```

The `-v ~/.proxelar:/root/.proxelar` mount reuses your existing trusted CA certificate so you won't get browser warnings.

---

## Quick Start

**1. Start the proxy**
```bash
proxelar
```

**2. Install the CA certificate**

Visit `http://proxel.ar` while routing traffic through the proxy — it serves the cert with install instructions.  
Or install it manually: `~/.proxelar/proxelar-ca.pem`

**3. Configure your system proxy**

Set HTTP and HTTPS proxy to `127.0.0.1:8080` in your OS, browser, or tool of choice.

Traffic will start appearing in the TUI immediately.

---

## Interfaces

```bash
proxelar              # interactive TUI (default)
proxelar -i terminal  # plain terminal output
proxelar -i gui       # web GUI at http://localhost:8081
```

---

## Usage

```bash
proxelar -m reverse --target http://localhost:3000   # reverse proxy
proxelar -b 0.0.0.0 -p 9090                         # custom bind/port
proxelar --script examples/scripts/block_domain.lua  # with a Lua script
```

<details>
<summary><strong>All CLI options</strong></summary>

| Flag | Description | Default |
|------|-------------|---------|
| `-i, --interface` | `te