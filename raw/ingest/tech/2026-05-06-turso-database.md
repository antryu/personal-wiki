<!-- GitHub Trending: Rust | 18,595 stars | +25 today -->

# tursodatabase/turso

> Turso is an in-process SQL database, compatible with SQLite.

## Repository Info
- **URL**: https://github.com/tursodatabase/turso
- **Stars**: 18,595
- **Forks**: 868
- **Language**: Rust
- **License**: MIT License
- **Created**: 2023-08-26
- **Updated**: 2026-05-06
- **Topics**: database, embedded-database, sql, sqlite3, webassembly
- **Open Issues**: 659

## README (excerpt)
<p align="center">
  <img src="assets/turso.png" alt="Turso Database" width="800"/>
  <h1 align="center">Turso Database</h1>
</p>

<p align="center">
  An in-process SQL database, compatible with SQLite.
</p>

<p align="center">
  <a title="Build Status" target="_blank" href="https://github.com/tursodatabase/turso/actions/workflows/rust.yml"><img src="https://img.shields.io/github/actions/workflow/status/tursodatabase/turso/rust.yml?style=flat-square"></a>
  <a title="Releases" target="_blank" href="https://github.com/tursodatabase/turso/releases"><img src="https://img.shields.io/github/release/tursodatabase/turso?style=flat-square&color=9CF"></a>
  <a title="Rust" target="_blank" href="https://crates.io/crates/turso"><img alt="Crate" src="https://img.shields.io/crates/v/turso"></a>
  <a title="JavaScript" target="_blank" href="https://www.npmjs.com/package/@tursodatabase/database"><img alt="NPM" src="https://img.shields.io/npm/v/@tursodatabase/database"></a>
  <a title="Python" target="_blank" href="https://pypi.org/project/pyturso/"><img alt="PyPI" src="https://img.shields.io/pypi/v/pyturso"></a>
  <a title="Java" target="_blank" href="https://central.sonatype.com/artifact/tech.turso/turso"><img alt="Maven Central" src="https://img.shields.io/maven-central/v/tech.turso/turso"></a>
  <a title="MIT" target="_blank" href="https://github.com/tursodatabase/turso/blob/main/LICENSE.md"><img src="http://img.shields.io/badge/license-MIT-orange.svg?style=flat-square"></a>
  <br>
  <a title="GitHub Pull Requests" target="_blank" href="https://github.com/tursodatabase/turso/pulls"><img src="https://img.shields.io/github/issues-pr-closed/tursodatabase/turso.svg?style=flat-square&color=FF9966"></a>
  <a title="GitHub Commits" target="_blank" href="https://github.com/tursodatabase/turso/commits/main"><img src="https://img.shields.io/github/commit-activity/m/tursodatabase/turso.svg?style=flat-square"></a>
  <a title="Last Commit" target="_blank" href="https://github.com/tursodatabase/turso/commits/main"><img src="https://img.shields.io/github/last-commit/tursodatabase/turso.svg?style=flat-square&color=FF9900"></a>
</p>
<p align="center">
  <a title="Developer's Discord" target="_blank" href="https://discord.gg/jgjmyYgHwB"><img alt="Chat with the Core Developers on Discord" src="https://img.shields.io/discord/1258658826257961020?label=Discord&logo=Discord&style=social&label=Core%20Developers"></a>
</p>
<p align="center">
  <a title="Users's Discord" target="_blank" href="https://tur.so/discord"><img alt="Chat with other users of Turso (and Turso Cloud) on Discord" src="https://img.shields.io/discord/933071162680958986?label=Discord&logo=Discord&style=social&label=Users"></a>
</p>

---

## About

Turso Database is an in-process SQL database written in Rust, compatible with SQLite.

> **⚠️ Warning:** This software is in BETA. It may still contain bugs and unexpected behavior. Use caution with production data and ensure you have backups.

## Features and Roadmap

* **SQLite compatibility** for SQL dialect, file formats, and the C API [see [document](COMPAT.md) for details]
* **`BEGIN CONCURRENT`** for improved write throughput using multi-version concurrency control (MVCC).
* **Change data capture (CDC)** for real-time tracking of database changes.
* **Multi-language support** for
  * [Go](bindings/go)
  * [JavaScript](bindings/javascript)
  * [Java](bindings/java)
  * [.NET](bindings/dotnet)
  * [Python](bindings/python)
  * [Rust](bindings/rust)
  * [WebAssembly](bindings/javascript)
* **Asynchronous I/O** support on Linux with `io_uring`
* **Cross-platform** support for Linux, macOS, Windows and browsers (through WebAssembly)
* **Vector support** support including exact search and vector manipulation
* **Improved schema management** including extended `ALTER` support and faster schema changes.

The database has the following experimental features:

* **Encryption at rest** for protecting the data locally.
* **Incremental computation** using 