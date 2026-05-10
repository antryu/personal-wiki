<!-- GitHub Trending: Rust | 5,081 stars | +26 today -->

# trailbaseio/trailbase

> An open, sub-millisecond, single-executable Firebase alternative with type-safe APIs, built-in WebAssembly runtime, realtime subscriptions, auth, and admin UI built on Rust, SQLite & Wasmtime.

## Repository Info
- **URL**: https://github.com/trailbaseio/trailbase
- **Stars**: 5,082
- **Forks**: 158
- **Language**: Rust
- **License**: Open Software License 3.0
- **Created**: 2024-10-29
- **Updated**: 2026-05-10
- **Topics**: authentication, database, rest-api, rust
- **Open Issues**: 40

## README (excerpt)
<p align="center">
  <a href="https://trailbase.io" target="_blank">
    <picture>
      <img alt="TrailBase logo" width="150" src="assets/logo.svg" />
    </picture>
  </a>
</p>

<p align="center">
  An open, <a href="https://trailbase.io/reference/benchmarks/">sub-millisecond</a>,
  single-executable Firebase alternative with type-safe REST & realtime APIs,
  multi-DB, WebAssembly runtime, geospatial support, SSR, auth and admin
  UI built on Rust, SQLite & Wasmtime.
<p>

<p align="center">
  Simplify with fewer moving parts: an easy to self-host, single-executable,
  extensible backend for your mobile, web or desktop application.
  Sub-millisecond latencies eliminate the need for dedicated caches, no more
  stale or inconsistent data.
<p>

<p align="center">
  <a href="https://github.com/trailbaseio/trailbase/stargazers/">
    <img src="https://img.shields.io/github/stars/trailbaseio/trailbase?style=social&label=Star" />
  </a>
  <a href="https://github.com/trailbaseio/trailbase/actions?query=branch%3Amain">
    <img src="https://github.com/trailbaseio/trailbase/actions/workflows/test.yml/badge.svg?branch=main" alt="Build Status">
  </a>
  <a href="https://github.com/trailbaseio/trailbase/blob/main/LICENSE">
    <img src="https://img.shields.io/badge/license-OSL_3.0-blue" alt="License - OSL 3.0">
  </a>
  <a href="https://trailbase.io/reference/roadmap/">
    <img src="https://img.shields.io/badge/status-alpha-orange" alt="Status - Alpha">
  </a>
</p>

# TrailBase

<p align="center">
  <a
    href="https://demo.trailbase.io/_/admin?loginMessage=E-mail:%20admin@localhost%20%E2%80%A2%20Password:%20secret"
    target="_blank"
  >
    <picture>
      <img alt="Admin UI" width="600" src="docs/src/assets/screenshots.webp" />
    </picture>
  </a>
</p>

<p align="center">
  <strong>
    Try the
    <a href="https://demo.trailbase.io/_/admin?loginMessage=E-mail:%20admin@localhost%20%E2%80%A2%20Password:%20secret" target="_blank">demo</a> online
  </strong>
  <br/>Email: <em>admin@localhost</em>
  <br/>password: <em>secret</em>
</p>

For more context, documentation, and a live demo, check out the website:
[trailbase.io](https://trailbase.io).
Questions? Thoughts? - Take a look at the
[FAQ](https://trailbase.io/reference/faq/) or reach out.
If you like TrailBase or want to follow along, consider leaving a ⭐🙏.

## Project Structure & Releases

This repository contains all components that make up TrailBase including the
server, client libraries, tests, documentation and examples.
Only the [benchmarks](https://github.com/trailbaseio/trailbase-benchmark) are
kept separately due to their external dependencies.

Pre-built binaries are available as
[GitHub releases](https://github.com/trailbaseio/trailbase/releases/) for
Linux, MacOS and Windows or [Docker images](https://hub.docker.com/r/trailbase/trailbase).

Client packages for various languages are available via:

- [JavaScript/TypeScript](https://www.npmjs.com/package/trailbase)
- [Dart/Flutter](https://pub.dev/packages/trailbase)
- [Rust](https://crates.io/crates/trailbase-client)
- [C#/.Net](https://www.nuget.org/packages/TrailBase/)
- [Swift](https://github.com/trailbaseio/trailbase/tree/main/client/swift/trailbase)
- [Kotlin](https://mvnrepository.com/artifact/io.trailbase/trailbase-client)
- [Go](https://github.com/trailbaseio/trailbase/tree/main/client/go/trailbase)
- [Python](https://pypi.org/project/trailbase/)

## Getting Started

TrailBase is a **single executable** and therefore very easy to
[deploy](https://trailbase.io/getting-started/install/).
You can simply download the appropriate pre-built
[GitHub release](https://github.com/trailbaseio/trailbase/releases/) bundle for
your system (MacOS, Linux or Windows), unpack and run the executable w/o having
to worry about dependencies or shared-library skew.

If you want to get started even quicker, install TrailBase with the following
command:

```sh
# Linux & MacOS
curl -sSL https://trailbase.io/install.sh | bash

# Windows
i