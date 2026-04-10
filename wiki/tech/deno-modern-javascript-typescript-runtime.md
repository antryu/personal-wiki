# Deno: Modern JavaScript/TypeScript Runtime

> Deno is a modern runtime for JavaScript and TypeScript, offering secure defaults, native TypeScript support, and a robust developer experience. Built on V8, Rust, and Tokio, it's notable for its simplicity and security features.  
> Last updated: 2026-04-10

## Overview

### Repository Info
- **URL**: [https://github.com/denoland/deno](https://github.com/denoland/deno)
- **Stars**: 106,432
- **Forks**: 6,003
- **Language**: Rust
- **License**: MIT License
- **Created**: 2018-05-15
- **Updated**: 2026-04-10
- **Topics**: deno, javascript, rust, typescript
- **Open Issues**: 2308

### Core Features
Deno is a runtime for JavaScript, TypeScript, and WebAssembly with:
- **Secure defaults**: Permissions-based security model (e.g., `--allow-net` for network access).
- **Native TypeScript support**: No external compiler needed.
- **Modern tooling**: Built on [V8](https://v8.dev/), [Rust](https://www.rust-lang.org/), and [Tokio](https://tokio.rs/).
- **Cross-platform**: Works on Mac, Linux, and Windows via multiple installation methods.

### Installation
Deno offers diverse installation methods:
- **Shell (Mac/Linux)**:  
  ```sh
  curl -fsSL https://deno.land/install.sh | sh
  ```
- **PowerShell (Windows)**:  
  ```powershell
  irm https://deno.land/install.ps1 | iex
  ```
- **Package managers**:
  - [Homebrew (Mac)](https://formulae.brew.sh/formula/deno)
  - [Chocolatey (Windows)](https://chocolatey.org/packages/deno)
  - [WinGet (Windows)](https://winstall.app/apps/DenoLand.Deno)
  - [Scoop (Windows)](https://scoop.sh/#/apps?q=deno&id=678d8fb557b611df996989c675b1099630a5bbee)

### Getting Started
Create a `server.ts` file with:
```ts
Deno.serve((_req: Request) => {
  return new Response("Hello, world!");
});
```
Run the server:
```sh
deno run --allow-net server.ts
```
Access it at [http://localhost:8000](http://localhost:8000).

### Additional Resources
- **[Deno Docs](https://docs.deno.com)**: Official guides and references.
- **[Deno Standard Library](https://jsr.io/@std)**: Common utilities for Deno programs.
- **[JSR](https://jsr.io/)**: Open-source package registry for JavaScript/TypeScript.
- **[Developer Blog](https://deno.com/blog)**: Updates and tutorials from the Deno team.

## Key Points
- Secure defaults with permission-based execution.
- Native TypeScript support without external tools.
- Built on modern technologies: V8, Rust, and Tokio.
- Cross-platform compatibility with multiple installation options.
- Active community and ecosystem (106k+ GitHub stars).
- Integration with WebAssembly for performance-critical tasks.

## Sources
- [GitHub](https://github.com/denoland/deno)
- [원본](raw/ingest/tech/2026-04-10-deno-modern-javascript-typescript-runtime.md)