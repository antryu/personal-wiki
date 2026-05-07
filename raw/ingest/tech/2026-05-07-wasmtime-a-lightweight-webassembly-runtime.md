<!-- GitHub Trending: Rust | 17,966 stars | +5 today -->

# bytecodealliance/wasmtime

> A lightweight WebAssembly runtime that is fast, secure, and standards-compliant

## Repository Info
- **URL**: https://github.com/bytecodealliance/wasmtime
- **Stars**: 17,966
- **Forks**: 1,694
- **Language**: Rust
- **License**: Apache License 2.0
- **Created**: 2017-08-29
- **Updated**: 2026-05-07
- **Topics**: aot, cranelift, jit, lightweight, portable, runtime, rust, sandbox, standalone, wasi, wasm, wasmtime, webassembly
- **Open Issues**: 867

## README (excerpt)
<div align="center">
  <h1><code>wasmtime</code></h1>

  <p>
    <strong>A standalone runtime for
    <a href="https://webassembly.org/">WebAssembly</a></strong>
  </p>

  <strong>A <a href="https://bytecodealliance.org/">Bytecode Alliance</a> project</strong>

  <p>
    <a href="https://github.com/bytecodealliance/wasmtime/actions?query=workflow%3ACI"><img src="https://github.com/bytecodealliance/wasmtime/workflows/CI/badge.svg" alt="build status" /></a>
    <a href="https://bytecodealliance.zulipchat.com/#narrow/stream/217126-wasmtime"><img src="https://img.shields.io/badge/zulip-join_chat-brightgreen.svg" alt="zulip chat" /></a>
    <img src="https://img.shields.io/badge/rustc-stable+-green.svg" alt="supported rustc stable" />
    <a href="https://docs.rs/wasmtime"><img src="https://docs.rs/wasmtime/badge.svg" alt="Documentation Status" /></a>
  </p>

  <h3>
    <a href="https://bytecodealliance.github.io/wasmtime/">Guide</a>
    <span> | </span>
    <a href="https://bytecodealliance.github.io/wasmtime/contributing.html">Contributing</a>
    <span> | </span>
    <a href="https://wasmtime.dev/">Website</a>
    <span> | </span>
    <a href="https://bytecodealliance.zulipchat.com/#narrow/stream/217126-wasmtime">Chat</a>
  </h3>
</div>

## Installation

The Wasmtime CLI can be installed on Linux and macOS (locally) with a small install
script:

```console
curl https://wasmtime.dev/install.sh -sSf | bash
```
This script installs into `$WASMTIME_HOME` (defaults to `$HOME/.wasmtime`), and executable is placed in `$WASMTIME_HOME/bin`.

After running the install script above, follow the on-screen instructions.

Windows or otherwise interested users can download installers and
binaries directly from the [GitHub
Releases](https://github.com/bytecodealliance/wasmtime/releases) page.

For additional installation options, refer to the [online book CLI installation page](https://docs.wasmtime.dev/cli-install.html).

Documentation on Wasmtime's currently supported versions can be found [in the
online book
documentation](https://docs.wasmtime.dev/stability-release.html#current-versions).

## Example

If you've got the [Rust compiler
installed](https://www.rust-lang.org/tools/install) then you can take some Rust
source code:

```rust
fn main() {
    println!("Hello, world!");
}
```

and compile it into a WebAssembly component with:

```console
rustup target add wasm32-wasip2
rustc hello.rs --target wasm32-wasip2
```

Once compiled, you can run your component:

```console
wasmtime hello.wasm
```

You should see the following output:

```text
Hello, world!
```

(Note: make sure you installed Rust using the [`rustup`][rustup] method in the official
instructions above, and do not have a copy of the Rust toolchain installed on
your system in some other way as well (e.g. the system package manager). Otherwise, the `rustup target add...`
command may not install the target for the correct copy of Rust.)

[rustup]: https://rustup.rs

## Features

* **Fast**. Wasmtime is built on the optimizing [Cranelift] code generator to
  quickly generate high-quality machine code either at runtime or
  ahead-of-time. Wasmtime is optimized for efficient instantiation, low-overhead
  calls between the embedder and wasm, and scalability of concurrent instances.

* **[Secure]**. Wasmtime's development is strongly focused on correctness and
  security. Building on top of Rust's runtime safety guarantees, each Wasmtime
  feature goes through careful review and consideration via an [RFC
  process]. Once features are designed and implemented, they undergo 24/7
  fuzzing donated by [Google's OSS Fuzz]. As features stabilize they become part
  of a [release][release policy], and when things go wrong we have a
  well-defined [security policy] in place to quickly mitigate and patch any
  issues. We follow best practices for defense-in-depth and integrate
  protections and mitigations for issues like Spectre. Finally, we're working to
  push the state-of-the-art by collaborat