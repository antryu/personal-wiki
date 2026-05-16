# Miri: Rust Undefined Behavior Detector

> Miri is an interpreter and Undefined Behavior (UB) detection tool for Rust, designed to help catch unsafe code violations and ensure correctness. It interprets Rust's mid-level intermediate representation (MIR) to identify potential bugs and enforce memory safety rules. Notably, it has helped uncover real-world bugs in Rust code.
> Last updated: 2026-05-16

## Overview
Miri is a Rust tool that detects undefined behavior by interpreting Rust's MIR. It isolates the program from the host system and emulates execution with deterministic behavior, catching a wide range of issues such as out-of-bounds memory access, invalid use of uninitialized data, and type invariant violations. It also supports cross-interpretation, allowing users to test programs for different targets like different endianness. Miri is used both in development and testing to improve code safety and correctness, especially in unsafe Rust code. It is actively maintained and integrated with the Rust compiler to track changes in the language's understanding of undefined behavior.

## Key Points
- Miri detects undefined behavior in Rust, especially in unsafe code.
- It identifies memory safety issues such as out-of-bounds access and use-after-free.
- It supports cross-target testing, like checking code for both big and little-endian systems.
- Miri runs in a deterministic environment and isolates programs from host system APIs.
- It does not catch every violation of the Rust specification, as it uses its own approximation of UB.

## Sources
- [GitHub](https://github.com/rust-lang/miri)
- [원본](raw/ingest/tech/2026-05-16-miri-rust-undefined-behavior-detector.md)