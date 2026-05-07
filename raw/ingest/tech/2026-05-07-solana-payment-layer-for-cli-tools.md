<!-- GitHub Trending: Rust | 1,636 stars | +42 today -->

# solana-foundation/pay

> Let your agents pay for any API

## Repository Info
- **URL**: https://github.com/solana-foundation/pay
- **Stars**: 1,636
- **Forks**: 551
- **Language**: Rust
- **License**: MIT License
- **Created**: 2021-10-19
- **Updated**: 2026-05-07
- **Topics**: N/A
- **Open Issues**: 28

## README (excerpt)
# pay

**The missing payment layer for HTTP. `pay` handles x402 and MPP payment challenges with user-authorized stablecoin signing.**

Wrap a selected set of command line tools (`curl`, `claude`, `codex`, `whoami`, etc.) -- when a stablecoin-gated API returns 402, `pay` detects the payment protocol, prepares the stablecoin transaction, asks the local wallet to authorize and sign it, then retries with the payment proof.

[Install](#installation) · [Quick Start](#quick-start) · [Docs](https://docs.solanapay.com)

</div>

---

```sh
# Without pay — you get a 402
curl https://debugger.pay.sh/mpp/quote/AAPL

# With pay -- it handles the 402 challenge and returns the response
pay --sandbox curl https://debugger.pay.sh/mpp/quote/AAPL
```

## Key Features

### 💵 Transparent 402 Handling

Wrap your CLI (`curl`, `claude`, `codex`, etc.) -- when an API returns 402, `pay` detects the payment protocol, prepares the stablecoin transaction, asks the local wallet to authorize and sign it, then retries with the payment proof.

Supports both live payment standards on Solana:
- **[MPP](https://paymentauth.org/draft-solana-charge-00.html/)** — Machine Payments Protocol
- **[x402](https://x402.org/)** — x402 Payment Protocol

Stablecoins deployed to Solana are supported out of the box.

### 🤖 AI-Native with MCP

`pay` ships with a built-in [MCP](https://modelcontextprotocol.io/) server, letting AI assistants request paid API calls through the same local wallet-approval flow.

```sh
# Run Claude Code or Codex with pay injected into the agent session
pay claude
pay codex
```

### 🛠️ Payment debugging and simulations

`pay` ships with an embedded Payment Debugger — a local web UI that visualizes every 402 challenge-response cycle as a sequence diagram. See exactly which headers were sent, which protocol was used (MPP or x402), and where things went wrong.

Everything runs locally — no data leaves your machine.

```sh
# Start a gateway with the debugger on any API spec
pay server start --debugger spec.yml

# Or run the bundled demo (sandbox + debugger + sample endpoints)
pay server demo
```

A [public debugger](https://debugger.pay.sh) is also available.

### 🔐 Gated Payments via Biometrics

`pay` lets AI agents use paid APIs without giving them your private key or an API-wide spending credential.

When a command, Claude Code, Codex, or another MCP client hits a paid endpoint, `pay` prepares the payment locally and asks your wallet backend to authorize the signature. On macOS, that means Touch ID via Keychain. On Windows, Windows Hello. On Linux, GNOME Keyring / polkit. If you reject the prompt, the payment is not signed and the request does not go through.

  
```sh
pay setup    # Touch ID on macOS, Windows Hello on Windows, GNOME Keyring on Linux, or choose 1Password
```

### 📚 Open Source Catalog

The paid API catalog is open source in the [`pay-skills`](https://github.com/solana-foundation/pay-skills) repo.

Anyone can contribute a provider listing, improve endpoint metadata, or add usage guidance for agents. Catalog entries follow the [`pay-skills` contributing guide](https://github.com/solana-foundation/pay-skills/blob/main/CONTRIBUTING.md), which defines the metadata, pricing, endpoint, and usage-note standards that keep **Agent experience** consistent.
  
```sh
  pay skills search "maps"
```

Good catalog entries make paid APIs easier for both humans and agents to discover, compare, and use safely.

## Installation

### Prebuilt Binaries

```sh
# macOS
brew install pay

# via NPM
npm install -g @solana/pay
```

### From Source

```sh
git clone https://github.com/solana-foundation/pay.git
cd pay
just install pay
```

### Verify

```sh
pay --version
```

## Quick Start

```sh
# 1. Setup your account
pay setup
pay whoami

# 2. Make a paid gated API call to https://debugger.pay.sh sandbox endpoints
pay --sandbox curl https://debugger.pay.sh/mpp/quote/AAPL

# 3. Or let your AI agent handle it
pay claude
```

## Contributing

```sh
cd rust
just