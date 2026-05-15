<!-- GitHub Trending: Rust | 90,583 stars | +395 today -->

# oven-sh/bun

> Incredibly fast JavaScript runtime, bundler, test runner, and package manager – all in one

## Repository Info
- **URL**: https://github.com/oven-sh/bun
- **Stars**: 90,583
- **Forks**: 4,507
- **Language**: Rust
- **License**: Other
- **Created**: 2021-04-14
- **Updated**: 2026-05-15
- **Topics**: bun, bundler, javascript, javascriptcore, jsx, nodejs, npm, react, transpiler, typescript, zig, ziglang
- **Open Issues**: 6913

## README (excerpt)
<p align="center">
  <a href="https://bun.com"><img src="https://github.com/user-attachments/assets/50282090-adfd-4ddb-9e27-c30753c6b161" alt="Logo" height=170></a>
</p>
<h1 align="center">Bun</h1>

<p align="center">
<a href="https://bun.com/discord" target="_blank"><img height=20 src="https://img.shields.io/discord/876711213126520882" /></a>
<img src="https://img.shields.io/github/stars/oven-sh/bun" alt="stars">
<a href="https://twitter.com/jarredsumner/status/1542824445810642946"><img src="https://img.shields.io/static/v1?label=speed&message=fast&color=success" alt="Bun speed" /></a>
</p>

<div align="center">
  <a href="https://bun.com/docs">Documentation</a>
  <span>&nbsp;&nbsp;•&nbsp;&nbsp;</span>
  <a href="https://bun.com/discord">Discord</a>
  <span>&nbsp;&nbsp;•&nbsp;&nbsp;</span>
  <a href="https://github.com/oven-sh/bun/issues/new">Issues</a>
  <span>&nbsp;&nbsp;•&nbsp;&nbsp;</span>
  <a href="https://github.com/oven-sh/bun/issues/159">Roadmap</a>
  <br />
</div>

### [Read the docs →](https://bun.com/docs)

## What is Bun?

Bun is an all-in-one toolkit for JavaScript and TypeScript apps. It ships as a single executable called `bun`.

At its core is the _Bun runtime_, a fast JavaScript runtime designed as **a drop-in replacement for Node.js**. It's written in Zig and powered by JavaScriptCore under the hood, dramatically reducing startup times and memory usage.

```bash
bun run index.tsx             # TS and JSX supported out-of-the-box
```

The `bun` command-line tool also implements a test runner, script runner, and Node.js-compatible package manager. Instead of 1,000 node_modules for development, you only need `bun`. Bun's built-in tools are significantly faster than existing options and usable in existing Node.js projects with little to no changes.

```bash
bun test                      # run tests
bun run start                 # run the `start` script in `package.json`
bun install <pkg>             # install a package
bunx cowsay 'Hello, world!'   # execute a package
```

## Install

Bun supports Linux (x64 & arm64), macOS (x64 & Apple Silicon), and Windows (x64 & arm64).

> **Linux users** — Kernel version 5.6 or higher is strongly recommended, but the minimum is 5.1.

> **x64 users** — if you see "illegal instruction" or similar errors, check our [CPU requirements](https://bun.com/docs/installation#cpu-requirements-and-baseline-builds)

```sh
# with install script (recommended)
curl -fsSL https://bun.com/install | bash

# on windows
powershell -c "irm bun.sh/install.ps1 | iex"

# with npm
npm install -g bun

# with Homebrew
brew tap oven-sh/bun
brew install bun

# with Docker
docker pull oven/bun
docker run --rm --init --ulimit memlock=-1:-1 oven/bun
```

### Upgrade

To upgrade to the latest version of Bun, run:

```sh
bun upgrade
```

Bun automatically releases a canary build on every commit to `main`. To upgrade to the latest canary build, run:

```sh
bun upgrade --canary
```

[View canary build](https://github.com/oven-sh/bun/releases/tag/canary)

## Quick links

- Intro
  - [What is Bun?](https://bun.com/docs/index)
  - [Installation](https://bun.com/docs/installation)
  - [Quickstart](https://bun.com/docs/quickstart)
  - [TypeScript](https://bun.com/docs/typescript)
  - [TypeScript 6](https://bun.com/docs/typescript-6)

- Templating
  - [`bun init`](https://bun.com/docs/runtime/templating/init)
  - [`bun create`](https://bun.com/docs/runtime/templating/create)

- Runtime
  - [`bun run`](https://bun.com/docs/runtime/index)
  - [File types (Loaders)](https://bun.com/docs/runtime/file-types)
  - [JSX](https://bun.com/docs/runtime/jsx)
  - [Environment variables](https://bun.com/docs/runtime/environment-variables)
  - [Bun APIs](https://bun.com/docs/runtime/bun-apis)
  - [Web APIs](https://bun.com/docs/runtime/web-apis)
  - [Node.js compatibility](https://bun.com/docs/runtime/nodejs-compat)
  - [Plugins](https://bun.com/docs/runtime/plugins)
  - [Watch mode / Hot Reloading](https://bun.com/docs/runtime/wat