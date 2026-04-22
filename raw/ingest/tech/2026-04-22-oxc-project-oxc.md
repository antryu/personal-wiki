<!-- GitHub Trending: Rust | 20,828 stars | +28 today -->

# oxc-project/oxc

> ⚓ A collection of high-performance JavaScript tools.

## Repository Info
- **URL**: https://github.com/oxc-project/oxc
- **Stars**: 20,828
- **Forks**: 992
- **Language**: Rust
- **License**: MIT License
- **Created**: 2023-02-09
- **Updated**: 2026-04-22
- **Topics**: compiler, javascript, linter, minifier, parser, transpiler, typescript
- **Open Issues**: 639

## README (excerpt)
<p align="center">
  <br>
  <br>
  <a href="https://oxc.rs" target="_blank" rel="noopener noreferrer">
    <picture>
      <source media="(prefers-color-scheme: dark)" srcset="https://oxc.rs/oxc-light.svg">
      <source media="(prefers-color-scheme: light)" srcset="https://oxc.rs/oxc-dark.svg">
      <img alt="Oxc logo" src="https://oxc.rs/oxc-dark.svg" height="60">
    </picture>
  </a>
  <br>
  <br>
  <br>
</p>

<div align="center">

[![MIT licensed][license-badge]][license-url]
[![Build Status][ci-badge]][ci-url]
[![Code Coverage][code-coverage-badge]][code-coverage-url]
[![CodSpeed Badge](https://img.shields.io/endpoint?url=https://codspeed.io/badge.json)](https://codspeed.io/oxc-project/oxc)
[![Sponsors][sponsors-badge]][sponsors-url]

[![Discord chat][discord-badge]][discord-url]
[![Playground][playground-badge]][playground-url]
[![Website][website-badge]][website-url]

</div>

## ⚓ Oxc

_/oʊ ɛks siː/_

The Oxidation Compiler is a collection of high-performance tools for JavaScript and TypeScript written in Rust.

Oxc is part of [VoidZero](https://voidzero.dev/)'s vision for a unified, high-performance toolchain for JavaScript. It powers [Rolldown](https://rolldown.rs) ([Vite]'s future bundler) and enables the next generation of ultra-fast development tools that work seamlessly together.

For more information, check out our website at [oxc.rs](https://oxc.rs).

<sub>\* Oxidation is the chemical process that creates rust</sub>

## 🙋 Who's using Oxc?

[Rolldown] and [Nuxt] use Oxc for parsing. [Rolldown] also uses Oxc for transformation and minification. [Nova], [swc-node], and [knip] use [oxc_resolver][docs-resolver-url] for module resolution. [Preact], [Shopify], [ByteDance], and [Shopee] use oxlint for linting.

[See more projects using Oxc →](https://oxc.rs/docs/guide/projects.html)

## 🔧 Lint or Format a Codebase

- **Lint**: [Oxlint](https://oxc.rs/docs/guide/usage/linter) — `npx oxlint@latest`
- **Format**: [Oxfmt](https://oxc.rs/docs/guide/usage/formatter) — `npx oxfmt@latest`

## 🧰 Build Tooling on Top of Oxc

- Parse JavaScript and TypeScript: [Parser](https://oxc.rs/docs/guide/usage/parser)
- Transform TypeScript, JSX, and modern JavaScript: [Transformer](https://oxc.rs/docs/guide/usage/transformer)
- Minify JavaScript for production builds: [Minifier](https://oxc.rs/docs/guide/usage/minifier)
- Resolve modules for JavaScript and TypeScript: [Resolver](https://oxc.rs/docs/guide/usage/resolver)

## ✍️ Contribute

Check out some of the [good first issues](https://github.com/oxc-project/oxc/contribute) or ask us on [Discord][discord-url].

See [CONTRIBUTING.md](./CONTRIBUTING.md) for guidance, or read the complete [contributing guide on our website →](https://oxc.rs/docs/contribute/introduction.html)

If you are unable to contribute by code, you can still participate by:

- Add a [GitHub Star](https://github.com/oxc-project/oxc/stargazers) to the project
- Join us on [Discord][discord-url]
- [Follow me on X](https://x.com/boshen_c) and post about this project

## 📚 Other Resources

- [Troubleshooting](https://oxc.rs/docs/guide/troubleshooting)
- [Benchmarks](https://oxc.rs/docs/guide/benchmarks)
- [Talks and media](https://oxc.rs/docs/guide/media)
- [Team](https://oxc.rs/team)
- [Endorsements](https://oxc.rs/endorsements)
- [Releases](https://github.com/oxc-project/oxc/releases)

## ❤ Who's [Sponsoring Oxc](https://github.com/sponsors/Boshen)?

<p align="center">
  <a href="https://github.com/sponsors/Boshen">
    <img src="https://raw.githubusercontent.com/Boshen/sponsors/main/sponsors.svg" alt="My sponsors" />
  </a>
</p>

## 📖 License

Oxc is free and open-source software licensed under the [MIT License](./LICENSE).

Thank you to [namespace.so](https://namespace.so) for powering our CI/CD pipelines with fast, free macOS and Linux runners.

Oxc ports or copies code from other open source projects, their licenses are listed in [**Third-party library licenses**](./THIRD-PARTY-LICENSE).

[discord-badge]: https