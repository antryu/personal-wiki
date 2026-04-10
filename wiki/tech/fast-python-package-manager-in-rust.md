# Fast Python Package Manager in Rust

> A fast Python package and project manager written in Rust, designed to replace multiple tools like `pip`, `poetry`, and `virtualenv`. It offers significant performance improvements and comprehensive project management features.
> Last updated: 2026-04-10

## Overview
The `uv` project is an extremely fast Python package and project manager, written in Rust. It aims to replace multiple tools like `pip`, `pip-tools`, `pipx`, `poetry`, `pyenv`, `twine`, and `virtualenv`. uv is known for its speed, being 10-100x faster than `pip`, and provides comprehensive project management features such as a universal lockfile, support for Cargo-style workspaces, and a global cache for efficient dependency management. It is backed by Astral, the creators of Ruff and ty.

Key highlights of uv include:
- A single tool to replace multiple Python tools.
- High performance, significantly faster than `pip`.
- Comprehensive project management with a universal lockfile.
- Script execution with inline dependency metadata.
- Python version management.
- Tool installation from Python packages.
- Pip-compatible interface for performance boost.
- Cross-platform support for macOS, Linux, and Windows.

uv can be installed using standalone installers via `curl` or `pip`, and it supports self-updates. The documentation is available at [docs.astral.sh/uv](https://docs.astral.sh/uv), and it includes features for managing projects, lockfiles, and workspaces.

## Key Points
- uv is a fast and efficient Python package manager written in Rust.
- It offers 10-100x faster performance compared to `pip`.
- It supports project management with universal lockfiles and Cargo-style workspaces.
- uv can manage Python versions and run scripts with inline dependencies.

## Sources
- [GitHub](https://github.com/astral-sh/uv)
- [원본](raw/ingest/tech/2026-04-10-fast-python-package-manager-in-rust.md)