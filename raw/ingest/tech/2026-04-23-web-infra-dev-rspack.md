<!-- GitHub Trending: Rust | 12,632 stars | +7 today -->

# web-infra-dev/rspack

> Fast Rust-based bundler for the web with a modernized webpack API 🦀

## Repository Info
- **URL**: https://github.com/web-infra-dev/rspack
- **Stars**: 12,632
- **Forks**: 788
- **Language**: Rust
- **License**: MIT License
- **Created**: 2022-04-01
- **Updated**: 2026-04-23
- **Topics**: build-tool, bundler, compiler, esm, javascript, jsx, loaders, module-bundler, rspack, rstack, rust, typescript, web, web-performance, webpack
- **Open Issues**: 169

## README (excerpt)
<picture>
  <img alt="Rspack Banner" src="https://assets.rspack.rs/rspack/rspack-banner.png">
</picture>

# Rspack

<p>
  <a href="https://discord.gg/79ZZ66GH9E"><img src="https://img.shields.io/badge/chat-discord-blue?style=flat-square&logo=discord&colorA=564341&colorB=EDED91" alt="discord channel" /></a>
  <a href="https://www.npmjs.com/package/@rspack/core?activeTab=readme"><img src="https://img.shields.io/npm/v/@rspack/core?style=flat-square&colorA=564341&colorB=EDED91" alt="npm version" /></a>
  <a href="https://crates.io/crates/rspack_core"><img src="https://img.shields.io/crates/v/rspack_core?style=flat-square&colorA=564341&colorB=EDED91" alt="crates version" /></a>
  <a href="https://npmcharts.com/compare/@rspack/core?minimal=true"><img src="https://img.shields.io/npm/dm/@rspack/core.svg?style=flat-square&colorA=564341&colorB=EDED91" alt="downloads" /></a>
  <a href="https://nodejs.org/en/about/previous-releases"><img src="https://img.shields.io/node/v/@rspack/core.svg?style=flat-square&colorA=564341&colorB=EDED91" alt="node version"></a>
  <a href="https://github.com/web-infra-dev/rspack/blob/main/LICENSE"><img src="https://img.shields.io/badge/License-MIT-blue.svg?style=flat-square&colorA=564341&colorB=EDED91" alt="license" /></a>
  <a href="https://codspeed.io/web-infra-dev/rspack"><img src="https://img.shields.io/endpoint?url=https%3A%2F%2Fcodspeed.io%2Fbadge.json&style=flat-square&colorA=564341&colorB=EDED91" alt="codspeed" /></a>
</p>

English | [简体中文](./README.zh-CN.md)

Rspack is a fast Rust-based bundler for the web. It modernizes the webpack API to enable seamless replacement of webpack while delivering lightning-fast build speeds.

## ✨ Features

- 🚀 **Fast Startup**: Based on Rust, the build speed is extremely fast, bringing you the ultimate development experience.
- ⚡ **Lightning HMR**: With a built-in incremental compilation mechanism, HMR is extremely fast and fully capable of developing large-scale projects.
- 📦 **Webpack Compatible**: Compatible with plugins and loaders in the webpack ecosystem, seamlessly integrating excellent libraries built by the community.
- 🎨 **Module Federation**: Provide first-class support for Module Federation to facilitate the development of large-scale web applications.
- 🛠️ **Production Optimization**: Various optimization strategies are built in by default, such as tree shaking, minification, etc.
- 🎯 **Framework Agnostic**: Not bound to any frontend framework, ensuring enough flexibility.

Read [Introduction](https://rspack.rs/guide/start/introduction) for details.

## 🦀 Rstack

Rstack is a unified JavaScript toolchain centered on Rspack, with high performance and consistent architecture.

| Name                                                  | Description              | Version                                                                                                                                                                          |
| ----------------------------------------------------- | ------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [Rspack](https://github.com/web-infra-dev/rspack)     | Bundler                  | <a href="https://npmjs.com/package/@rspack/core"><img src="https://img.shields.io/npm/v/@rspack/core?style=flat-square&colorA=564341&colorB=EDED91" alt="npm version" /></a>     |
| [Rsbuild](https://github.com/web-infra-dev/rsbuild)   | Build tool               | <a href="https://npmjs.com/package/@rsbuild/core"><img src="https://img.shields.io/npm/v/@rsbuild/core?style=flat-square&colorA=564341&colorB=EDED91" alt="npm version" /></a>   |
| [Rslib](https://github.com/web-infra-dev/rslib)       | Library development tool | <a href="https://npmjs.com/package/@rslib/core"><img src="https://img.shields.io/npm/v/@rslib/core?style=flat-square&colorA=564341&colorB=EDED91" alt="npm vers