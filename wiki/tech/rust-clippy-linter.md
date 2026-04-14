# Rust Clippy Linter

> A linter for Rust that identifies common mistakes and improves code quality through over 800 lints. Notable for its extensive lint categories and integration with Rust tooling.  
> Last updated: 2026-04-14

## Overview  
The **Rust Clippy Linter** is a tool designed to catch common mistakes and enforce idiomatic Rust code. Hosted at [rust-lang/rust-clippy](https://github.com/rust-lang/rust-clippy), it provides over 800 lints grouped into categories like correctness, style, and performance. Key features include:

- **Repository Info**  
  - **Stars**: 13,052  
  - **Forks**: 1,962  
  - **License**: Apache License 2.0 (dual-licensed MIT/Apache-2.0)  
  - **Created**: 2014-11-19  
  - **Open Issues**: 2,725  

- **Lint Categories**  
  | Category              | Description | Default Level |  
  |-----------------------|-------------|---------------|  
  | `clippy::all`         | Combines all default lints (correctness, suspicious, style, complexity, perf) | **warn/deny** |  
  | `clippy::correctness` | Code that is outright wrong | **deny** |  
  | `clippy::suspicious`  | Likely incorrect code | **warn** |  
  | `clippy::style`       | Non-idiomatic code | **warn** |  
  | `clippy::complexity`  | Overly complex implementations | **warn** |  
  | `clippy::perf`        | Performance-inefficient code | **warn** |  
  | `clippy::pedantic`    | Strict lints with potential false positives | **allow** |  
  | `clippy::restriction` | Prevents specific language/library features | **allow** |  

- **Usage**  
  Clippy integrates with `cargo` as a subcommand (`cargo clippy`). Users can install it via `rustup` and configure lint levels in `Cargo.toml` or via CLI flags. The `restriction` category requires caution, as it may block valid code patterns.  

## Key Points  
- Over 800 lints grouped into 10+ categories for comprehensive code analysis.  
- Default lint levels prioritize correctness (`deny`) and style (`warn`), with optional stricter categories like `pedantic`.  
- Easy integration via `cargo clippy` and configuration through `rustup` or project settings.  

## Sources  
- [GitHub](https://github.com/rust-lang/rust-clippy)  
- [원본](raw/ingest/tech/2026-04-14-rust-clippy-linter.md)