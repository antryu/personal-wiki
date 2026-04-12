<!-- GitHub Trending: Rust | 16,871 stars | +5 today -->

# launchbadge/sqlx

> 🧰 The Rust SQL Toolkit. An async, pure Rust SQL crate featuring compile-time checked queries without a DSL. Supports PostgreSQL, MySQL, and SQLite.

## Repository Info
- **URL**: https://github.com/launchbadge/sqlx
- **Stars**: 16,871
- **Forks**: 1,590
- **Language**: Rust
- **License**: Apache License 2.0
- **Created**: 2019-12-28
- **Updated**: 2026-04-12
- **Topics**: async, await, mariadb, mysql, postgres, postgresql, rust, sql, sqlite
- **Open Issues**: 737

## README (excerpt)
<h1 align="center">SQLx</h1>
<div align="center">
 <strong>
   🧰 The Rust SQL Toolkit
 </strong>
</div>

<br />

<div align="center">
  <!-- Github Actions -->
  <a href="https://github.com/launchbadge/sqlx/actions/workflows/sqlx.yml?query=branch%3Amain">
    <img src="https://img.shields.io/github/actions/workflow/status/launchbadge/sqlx/sqlx.yml?branch=main&style=flat-square" alt="actions status" /></a>
  <!-- Version -->
  <a href="https://crates.io/crates/sqlx">
    <img src="https://img.shields.io/crates/v/sqlx.svg?style=flat-square"
    alt="Crates.io version" /></a>
  <!-- Discord -->
  <a href="https://discord.gg/uuruzJ7">
  <img src="https://img.shields.io/discord/665528275556106240?style=flat-square" alt="chat" /></a>
  <!-- Docs -->
  <a href="https://docs.rs/sqlx">
  <img src="https://img.shields.io/badge/docs-latest-blue.svg?style=flat-square" alt="docs.rs docs" /></a>
  <!-- Downloads -->
  <a href="https://crates.io/crates/sqlx">
    <img src="https://img.shields.io/crates/d/sqlx.svg?style=flat-square" alt="Download" />
  </a>
</div>

<div align="center">
  <h4>
    <a href="#install">
      Install
    </a>
    <span> | </span>
    <a href="#usage">
      Usage
    </a>
    <span> | </span>
    <a href="https://docs.rs/sqlx">
      Docs
    </a>
    <span> | </span>
    <a href="https://github.com/launchbadge/sqlx/wiki/Ecosystem">
      Ecosystem
    </a>    
    <span> | </span>
    <a href="https://discord.gg/uuruzJ7">
      Discord
    </a>
  </h4>
</div>

<br />

<div align="center">
  <small>Built with ❤️ by <a href="https://launchbadge.com">The LaunchBadge team</a></small>
</div>

<br />

<div align="center">
    <h5>Have a question? Be sure to <a href="FAQ.md">check the FAQ first!</a></h5>
</div>

<br />

SQLx is an async, pure Rust<sub>†</sub> SQL crate featuring compile-time checked queries without a DSL.

-   **Truly Asynchronous**. Built from the ground-up using async/await for maximum concurrency.

-   **Compile-time checked queries** (if you want). See [SQLx is not an ORM](#sqlx-is-not-an-orm).

-   **Database Agnostic**. Support for [PostgreSQL], [MySQL], [MariaDB], [SQLite].
    -   [MSSQL] was supported prior to version 0.7, but has been removed pending a full rewrite of the driver as part of our [SQLx Pro initiative].

-   **Pure Rust**. The Postgres and MySQL/MariaDB drivers are written in pure Rust using **zero** unsafe<sub>††</sub> code.

-   **Runtime Agnostic**. Works on different runtimes ([`async-std`] / [`tokio`] / [`actix`]) and TLS backends ([`native-tls`], [`rustls`]).

<small><small>

† The SQLite driver uses the libsqlite3 C library as SQLite is an embedded database (the only way
we could be pure Rust for SQLite is by porting _all_ of SQLite to Rust).

†† SQLx uses `#![forbid(unsafe_code)]` unless the `sqlite` feature is enabled.
The SQLite driver directly invokes the SQLite3 API via `libsqlite3-sys`, which requires `unsafe`.

</small></small>

[postgresql]: http://postgresql.org/
[sqlite]: https://sqlite.org/
[mysql]: https://www.mysql.com/
[mariadb]: https://www.mariadb.org/
[mssql]: https://www.microsoft.com/en-us/sql-server
[SQLx Pro initiative]: https://github.com/launchbadge/sqlx/discussions/1616

---

-   Cross-platform. Being native Rust, SQLx will compile anywhere Rust is supported.

-   Built-in connection pooling with `sqlx::Pool`.

-   Row streaming. Data is read asynchronously from the database and decoded on demand.

-   Automatic statement preparation and caching. When using the high-level query API (`sqlx::query`), statements are
    prepared and cached per connection.

-   Simple (unprepared) query execution including fetching results into the same `Row` types used by
    the high-level API. Supports batch execution and returns results from all statements.

-   Transport Layer Security (TLS) where supported ([MySQL], [MariaDB] and [PostgreSQL]).

-   Asynchronous notifications using `LISTEN` and `NOTIFY` for [PostgreSQL].

-   Nested transactions with support for 