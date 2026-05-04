# Rust-based POSIX-compatible Shell

> `brush` is a modern shell implemented in Rust that aims to be compatible with bash and POSIX standards, enabling existing scripts and `.bashrc` to be run without modification. It includes features such as syntax highlighting and auto-suggestions. Last updated: 2026-05-04.

## Overview

The `brush` shell, also known as the **Born Rusty Shell**, is a modern implementation of a shell written in Rust. It is designed to be compatible with the widely used `bash` and POSIX standards. This compatibility allows users to run their existing `.bashrc`, aliases, functions, and completions without needing to change anything. Beyond compatibility, `brush` includes modern features like syntax highlighting and auto-suggestions, making the interactive shell experience more intuitive and powerful.

Developed with a focus on performance and safety, `brush` is written in Rust, which helps avoid common bugs like segmentation faults and memory leaks. It is also embeddable in other Rust applications via the `brush_core::Shell` module, offering flexibility for developers.

The shell has been validated using approximately 1700 compatibility tests against `bash`, ensuring robust support for essential shell features. While `brush` is largely complete, some features like the `select` command and certain edge cases are not yet supported. The project maintains a [Compatibility Reference](docs/reference/compatibility.md) to track progress.

Installation is straightforward via popular package managers such as Cargo, Homebrew, and Arch Linux's `pacman`. Users can also install it from source using `cargo install`.

## Key Points

- Fully compatible with bash and POSIX standards.
- Supports syntax highlighting and auto-suggestions for enhanced user experience.
- Embeddable in Rust applications via the `brush_core::Shell` API.
- Validated against bash with ~1700 compatibility tests.
- Easy installation through package managers or from source.

## Sources

- [GitHub](https://github.com/reubeno/brush)
- [원본](raw/ingest/tech/2026-05-04-rust-based-posix-compatible-shell.md)