<!-- GitHub Trending: Rust | 3,284 stars | +9 today -->

# modelcontextprotocol/rust-sdk

> The official Rust SDK for the Model Context Protocol

## Repository Info
- **URL**: https://github.com/modelcontextprotocol/rust-sdk
- **Stars**: 3,284
- **Forks**: 497
- **Language**: Rust
- **License**: Other
- **Created**: 2025-02-18
- **Updated**: 2026-04-11
- **Topics**: N/A
- **Open Issues**: 26

## README (excerpt)
<div align = "right">
<a href="docs/readme/README.zh-cn.md">简体中文</a>
</div>

# RMCP
[![Crates.io Version](https://img.shields.io/crates/v/rmcp)](https://crates.io/crates/rmcp)
[![docs.rs](https://img.shields.io/docsrs/rmcp)](https://docs.rs/rmcp/latest/rmcp)
[![CI](https://github.com/modelcontextprotocol/rust-sdk/actions/workflows/ci.yml/badge.svg)](https://github.com/modelcontextprotocol/rust-sdk/actions/workflows/ci.yml)
[![License](https://img.shields.io/crates/l/rmcp)](LICENSE)

An official Rust Model Context Protocol SDK implementation with tokio async runtime.

> **Migrating to 1.x?** See the [migration guide](https://github.com/modelcontextprotocol/rust-sdk/discussions/716) for breaking changes and upgrade instructions.

This repository contains the following crates:

- [rmcp](crates/rmcp): The core crate providing the RMCP protocol implementation - see [rmcp](crates/rmcp/README.md)
- [rmcp-macros](crates/rmcp-macros): A procedural macro crate for generating RMCP tool implementations - see [rmcp-macros](crates/rmcp-macros/README.md)

For the full MCP specification, see [modelcontextprotocol.io](https://modelcontextprotocol.io/specification/2025-11-25).

## Table of Contents

- [Usage](#usage)
- [Tools](#tools)
- [Resources](#resources)
- [Prompts](#prompts)
- [Sampling](#sampling)
- [Roots](#roots)
- [Logging](#logging)
- [Completions](#completions)
- [Notifications](#notifications)
- [Subscriptions](#subscriptions)
- [Examples](#examples)
- [OAuth Support](#oauth-support)
- [Related Resources](#related-resources)
- [Related Projects](#related-projects)
- [Development](#development)

## Usage

### Import the crate

```toml
rmcp = { version = "0.16.0", features = ["server"] }
## or dev channel
rmcp = { git = "https://github.com/modelcontextprotocol/rust-sdk", branch = "main" }
```
### Third Dependencies

Basic dependencies:
- [tokio](https://github.com/tokio-rs/tokio)
- [serde](https://github.com/serde-rs/serde)
Json Schema generation (version 2020-12):
- [schemars](https://github.com/GREsau/schemars)

### Build a Client

<details>
<summary>Start a client</summary>

```rust, ignore
use rmcp::{ServiceExt, transport::{TokioChildProcess, ConfigureCommandExt}};
use tokio::process::Command;

#[tokio::main]
async fn main() -> Result<(), Box<dyn std::error::Error>> {
    let client = ().serve(TokioChildProcess::new(Command::new("npx").configure(|cmd| {
        cmd.arg("-y").arg("@modelcontextprotocol/server-everything");
    }))?).await?;
    Ok(())
}
```
</details>

### Build a Server

<details>
<summary>Build a transport</summary>

```rust, ignore
use tokio::io::{stdin, stdout};
let transport = (stdin(), stdout());
```

</details>

<details>
<summary>Build a service</summary>

You can easily build a service by using [`ServerHandler`](crates/rmcp/src/handler/server.rs) or [`ClientHandler`](crates/rmcp/src/handler/client.rs).

```rust, ignore
let service = common::counter::Counter::new();
```
</details>

<details>
<summary>Start the server</summary>

```rust, ignore
// this call will finish the initialization process
let server = service.serve(transport).await?;
```
</details>

<details>
<summary>Interact with the server</summary>

Once the server is initialized, you can send requests or notifications:

```rust, ignore
// request
let roots = server.list_roots().await?;

// or send notification
server.notify_cancelled(...).await?;
```
</details>

<details>
<summary>Waiting for service shutdown</summary>

```rust, ignore
let quit_reason = server.waiting().await?;
// or cancel it
let quit_reason = server.cancel().await?;
```
</details>

---

## Tools

Tools let servers expose callable functions to clients. Each tool has a name, description, and a JSON Schema for its parameters. Clients discover tools via `list_tools` and invoke them via `call_tool`.

**MCP Spec:** [Tools](https://modelcontextprotocol.io/specification/2025-11-25/server/tools)

### Server-side

The `#[tool]`, `#[tool_router]`, and `#[tool_handler]` macros handle all