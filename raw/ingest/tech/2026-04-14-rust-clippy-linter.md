<!-- GitHub Trending: Rust | 13,052 stars | +5 today -->

# rust-lang/rust-clippy

> A bunch of lints to catch common mistakes and improve your Rust code. Book: https://doc.rust-lang.org/clippy/

## Repository Info
- **URL**: https://github.com/rust-lang/rust-clippy
- **Stars**: 13,052
- **Forks**: 1,962
- **Language**: Rust
- **License**: Apache License 2.0
- **Created**: 2014-11-19
- **Updated**: 2026-04-14
- **Topics**: lint, rust
- **Open Issues**: 2725

## README (excerpt)
# Clippy

[![License: MIT OR Apache-2.0](https://img.shields.io/crates/l/clippy.svg)](#license)

A collection of lints to catch common mistakes and improve your [Rust](https://github.com/rust-lang/rust) code.

[There are over 800 lints included in this crate!](https://rust-lang.github.io/rust-clippy/master/index.html)

Lints are divided into categories, each with a default [lint level](https://doc.rust-lang.org/rustc/lints/levels.html).
You can choose how much Clippy is supposed to ~~annoy~~ help you by changing the lint level by category.

| Category              | Description                                                                         | Default level |
|-----------------------|-------------------------------------------------------------------------------------|---------------|
| `clippy::all`         | all lints that are on by default (correctness, suspicious, style, complexity, perf) | **warn/deny** |
| `clippy::correctness` | code that is outright wrong or useless                                              | **deny**      |
| `clippy::suspicious`  | code that is most likely wrong or useless                                           | **warn**      |
| `clippy::style`       | code that should be written in a more idiomatic way                                 | **warn**      |
| `clippy::complexity`  | code that does something simple but in a complex way                                | **warn**      |
| `clippy::perf`        | code that can be written to run faster                                              | **warn**      |
| `clippy::pedantic`    | lints which are rather strict or have occasional false positives                    | allow         |
| `clippy::restriction` | lints which prevent the use of language and library features[^restrict]             | allow         |
| `clippy::nursery`     | new lints that are still under development                                          | allow         |
| `clippy::cargo`       | lints for the cargo manifest                                                        | allow         |

More to come, please [file an issue](https://github.com/rust-lang/rust-clippy/issues) if you have ideas!

The `restriction` category should, *emphatically*, not be enabled as a whole. The contained
lints may lint against perfectly reasonable code, may not have an alternative suggestion,
and may contradict any other lints (including other categories). Lints should be considered
on a case-by-case basis before enabling.

[^restrict]: Some use cases for `restriction` lints include:
    - Strict coding styles (e.g. [`clippy::else_if_without_else`]).
    - Additional restrictions on CI (e.g. [`clippy::todo`]).
    - Preventing panicking in certain functions (e.g. [`clippy::unwrap_used`]).
    - Running a lint only on a subset of code (e.g. `#[forbid(clippy::float_arithmetic)]` on a module).

[`clippy::else_if_without_else`]: https://rust-lang.github.io/rust-clippy/master/index.html#else_if_without_else
[`clippy::todo`]: https://rust-lang.github.io/rust-clippy/master/index.html#todo
[`clippy::unwrap_used`]: https://rust-lang.github.io/rust-clippy/master/index.html#unwrap_used

---

Table of contents:

* [Usage instructions](#usage)
* [Configuration](#configuration)
* [Contributing](#contributing)
* [License](#license)

## Usage

Below are instructions on how to use Clippy as a cargo subcommand,
in projects that do not use cargo, or in Travis CI.

### As a cargo subcommand (`cargo clippy`)

One way to use Clippy is by installing Clippy through rustup as a cargo
subcommand.

#### Step 1: Install Rustup

You can install [Rustup](https://rustup.rs/) on supported platforms. This will help
us install Clippy and its dependencies.

If you already have Rustup installed, update to ensure you have the latest
Rustup and compiler:

```terminal
rustup update
```

#### Step 2: Install Clippy

Once you have rustup and the latest stable release (at least Rust 1.29) installed, run the following command:

```