# Turso Database

> Turso is an in-process SQL database, compatible with SQLite. It aims to provide high-performance, cross-platform compatibility, and modern database features like CDC, MVCC, and vector support.
> Last updated: 2026-05-06

## Overview

Turso is an in-process SQL database written in Rust, designed to be fully compatible with SQLite in terms of SQL syntax, file formats, and C API. It supports various features that enhance performance, concurrency, and usability in modern applications.

The project is actively maintained and has a growing community, with bindings for multiple languages and platforms, including Go, JavaScript, Java, .NET, Python, Rust, and WebAssembly. It is currently in beta, and developers are advised to use caution when handling production data.

Key highlights include:

- **SQLite compatibility**, making it a drop-in replacement for existing SQLite applications.
- **Concurrent transactions** with `BEGIN CONCURRENT` and multi-version concurrency control (MVCC).
- **Change data capture (CDC)** for tracking database changes in real time.
- **Cross-platform support** for Linux, macOS, Windows, and WebAssembly.
- **Experimental features**, such as encryption at rest and incremental computation.

The repository is open source and uses the MIT License. It has a vibrant development cycle and a strong presence on Discord for both developers and users.

## Key Points

- SQLite-compatible, making it ideal for developers already using SQLite.
- Supports high-throughput writes with MVCC.
- Offers real-time change tracking with CDC.
- Multi-language and cross-platform support.
- Actively maintained with a strong developer and user community.

## Sources

- [GitHub](https://github.com/tursodatabase/turso)
- [원본](raw/ingest/tech/2026-05-06-turso-database.md)