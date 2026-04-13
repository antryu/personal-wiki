# Wasmer: WebAssembly Containers

> Wasmer is a fast, secure, and lightweight WebAssembly runtime that enables containers to run anywhere — from desktop to cloud, edge, and even browsers. It is notable for its high performance, security-first approach, and support for multiple platforms and package managers.  
> Last updated: 2026-04-13

## Overview

Wasmer is a **blazing fast** and **secure** WebAssembly runtime that enables incredibly **lightweight containers** to run anywhere — from **desktop** to the **cloud**, **edge**, and your **browser**. It provides a secure-by-default environment, meaning no file, network, or environment access is allowed unless explicitly enabled. Wasmer supports both **WASI** and **WASIX**, and is embeddable through Wasmer SDKs.

### Repository Info

- **URL**: https://github.com/wasmerio/wasmer
- **Stars**: 20,599
- **Forks**: 951
- **Language**: Rust
- **License**: MIT License
- **Created**: 2018-10-11
- **Updated**: 2026-04-13
- **Topics**: emscripten, linux, macos, rust, wasi, wasix, wasm, wasmer, webassembly, windows
- **Open Issues**: 217

### Key Features

- **Secure by default**: No file, network, or environment access unless explicitly enabled.
- **Pluggable**: Supports **WASIX** and **WASI** out of the box.
- **Incredibly Fast**: Runs WebAssembly at near-native speeds.
- **Embeddable**: Can be embedded via Wasmer SDKs into various applications.

### Installation

Wasmer can be installed using multiple methods, including:

- **Shell (Linux/macOS)**:  
  ```sh
  curl https://get.wasmer.io -sSfL | sh
  ```

- **PowerShell (Windows)**:  
  ```powershell
  iwr https://win.wasmer.io -useb | iex
  ```

- **Homebrew (macOS/Linux)**:  
  ```sh
  brew install wasmer
  ```

- **Scoop (Windows)**:  
  ```sh
  scoop install wasmer
  ```

- **Chocolatey (Windows)**:  
  ```sh
  choco install wasmer
  ```

- **Cargo (Rust)**:  
  ```sh
  cargo install wasmer-cli
  ```

> You can also try Wasmer online at [wasmer.sh](https://wasmer.sh/).

### Quickstart

To get started with Wasmer, try running the [Cowsay](https://wasmer.io/syrusakbary/cowsay) example:

```bash
$ wasmer run cowsay "hello world"
 _____________
< hello world >
 -------------
        \   ^__^
         \  (oo)\_______
            (__)\       )\/\
               ||----w |
                ||     ||
```

Explore more available packages like [`wasmer/python`](https://wasmer.io/wasmer/python) or [`quickjs`](https://wasmer.io/saghul/quickjs), or create your own package using the Wasmer Registry.

> [!Tip]  
> As part of Wasmer's commitment to open source, GitHub users can claim up to $200 in [Wasmer Edge](https://wasmer.io/products/edge) credits for open-source contributions — [Claim here](https://github.com/wasmerio/wasmer/discussions/5560).

## Key Points

- Wasmer is a high-performance WebAssembly runtime designed for secure and lightweight container execution.
- It supports multiple platforms and installation methods, including package managers like Homebrew, Scoop, Chocolatey, and Cargo.
- Wasmer offers a secure-by-default model, making it ideal for environments where safety and isolation are critical.
- It provides both community and enterprise-level support through its registry and cloud offerings.

## Sources

- [GitHub](https://github.com/wasmerio/wasmer)
- [원본](raw/ingest/tech/2026-04-13-wasmer-webassembly-containers.md)