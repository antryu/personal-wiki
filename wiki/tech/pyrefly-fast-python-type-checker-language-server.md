# Pyrefly: Fast Python Type Checker & Language Server

> Pyrefly is a fast type checker and language server for Python that provides lightning-fast type checking and powerful IDE features like code navigation, semantic highlighting, and code completion. It is notably used at scale by Meta and open source projects like PyTorch and JAX.
> Last updated: 2026-05-15

## Overview
Pyrefly is a high-performance type checker and language server for Python, developed in Rust. It supports a wide range of IDEs and editors, including VSCode, Neovim, and Zed. Pyrefly is production-proven at Meta and is used to type-check large codebases like Instagram's 20-million-line Python code. It also supports popular frameworks such as Pydantic and Django, enabling developers to work with complex Python projects efficiently.

The tool provides a CLI for command-line usage and an extension model for IDE integration. Pyrefly checks millions of lines of code per second, outperforming tools like Mypy and Pyright in type-checking speed. It offers features like semantic highlighting, inlay hints, and consistent type checking across different environments. Pyrefly also includes migration tools to transition from Mypy or Pyright with features like `pyrefly init`, `pyrefly suppress`, and `pyrefly infer`.

## Key Points
- **Fast performance**: Type-checks 1.85 million lines per second, 15x faster than Mypy and Pyright.
- **Production-proven**: Used at Meta for Instagram's 20M-line codebase and adopted by PyTorch and JAX.
- **IDE integration**: Supports VSCode, Neovim, Zed, and other editors.
- **Framework support**: Built-in support for Pydantic and Django.
- **Migratable**: Tools to move from Mypy or Pyright with minimal disruption.
- **Active development**: Monthly minor versions with patch-level fixes as needed.

## Sources
- [GitHub](https://github.com/facebook/pyrefly)
- [원본](raw/ingest/tech/2026-05-15-pyrefly-fast-python-type-checker-language-server.md)