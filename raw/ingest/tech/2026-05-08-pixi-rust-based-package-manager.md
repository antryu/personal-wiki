<!-- GitHub Trending: Rust | 7,002 stars | +13 today -->

# prefix-dev/pixi

> Powerful system-level package manager for Linux, macOS and Windows written in Rust – building on top of the Conda ecosystem.

## Repository Info
- **URL**: https://github.com/prefix-dev/pixi
- **Stars**: 7,002
- **Forks**: 506
- **Language**: Rust
- **License**: BSD 3-Clause "New" or "Revised" License
- **Created**: 2023-04-28
- **Updated**: 2026-05-08
- **Topics**: conda, conda-environment, conda-packages, package-management, package-manager, package-manager-tool, python-virtual-environment, rust, rust-lang
- **Open Issues**: 683

## README (excerpt)
<h1>
  <a href="https://github.com/prefix-dev/pixi/">
    <picture>
      <source srcset="https://github.com/user-attachments/assets/fb67afa5-1c2a-4f47-9b8e-d60648557bfc" type="image/png">
      <source srcset="https://github.com/user-attachments/assets/fa2e98c2-0913-4098-9579-8f2efff7f814" type="image/webp">
      <img src="https://github.com/user-attachments/assets/fb67afa5-1c2a-4f47-9b8e-d60648557bfc" alt="banner">
    </picture>
  </a>
</h1>

<h1 align="center">

![License][license-badge]
[![Project Chat][chat-badge]][chat-url]
[![Pixi Badge][pixi-badge]][pixi-url]


[license-badge]: https://img.shields.io/badge/license-BSD--3--Clause-blue?style=flat-square
[chat-badge]: https://img.shields.io/discord/1082332781146800168.svg?label=&logo=discord&logoColor=ffffff&color=7389D8&labelColor=6A7EC2&style=flat-square
[chat-url]: https://discord.gg/kKV8ZxyzY4
[pixi-badge]:https://img.shields.io/endpoint?url=https://raw.githubusercontent.com/prefix-dev/pixi/main/assets/badge/v0.json&style=flat-square
[pixi-url]: https://pixi.sh

</h1>

# Pixi: Package Management Made Easy

## Overview

`pixi` is a cross-platform, multi-language package manager and workflow tool built on the foundation of the conda ecosystem. It provides developers with an exceptional experience similar to popular package managers like [`cargo`](https://doc.rust-lang.org/cargo/) or [`npm`](https://docs.npmjs.com), but for any language.

Developed with ❤️ at [prefix.dev](https://prefix.dev).
[![Real-time pixi_demo](https://github.com/prefix-dev/pixi/assets/12893423/0fc8f8c8-ac13-4c14-891b-dc613f25475b)](https://asciinema.org/a/636482)

## Highlights

- Supports **multiple languages** including Python, C++, and R using Conda packages. You can find available packages on [prefix.dev](https://prefix.dev).
- Compatible with all major operating systems: Linux, Windows, macOS (including Apple Silicon).
- Always includes an up-to-date [**lock file**](https://pixi.sh/latest/workspace/lockfile/).
- Provides a clean and simple Cargo-like **command-line interface**.
- Allows you to install tools **per-project** or **system-wide**.
- Entirely written in **Rust** and built on top of the **[rattler](https://github.com/conda/rattler)** library.

## Getting Started

- ⚡ [Installation](#installation)
- ⚙️ [Examples](/examples)
- 📚 [Documentation](https://pixi.sh/)
- 😍 [Contributing](#contributing)
- 🔨 [Built using Pixi](#built-using-pixi)
- 🚀 [GitHub Action](https://github.com/prefix-dev/setup-pixi)

## Status

Pixi is ready for production!
We are working hard to keep file-format changes compatible with the previous
versions so that you can rely on Pixi with peace of mind.

Some notable features we envision for upcoming releases are:

- **Build and publish** your project as a Conda package.
- Support for **dependencies from source**.
- More powerful "global installation" of packages towards a deterministic setup of global packages on multiple machines.

## Installation

`pixi` can be installed on macOS, Linux, and Windows. The provided scripts will automatically download the latest version of `pixi`, extract it, and move the `pixi` binary to `~/.pixi/bin`. If this directory does not exist, the script will create it.

### macOS and Linux

To install Pixi on macOS and Linux, open a terminal and run the following command:

```bash
curl -fsSL https://pixi.sh/install.sh | sh
# or with brew
brew install pixi
```

The script will also update your `~/.bashrc` to include `~/.pixi/bin` in your `PATH`, allowing you to invoke the `pixi` command from anywhere.
You might need to restart your terminal or source your shell for the changes to take effect.

Starting with macOS Catalina [zsh is the default login shell and interactive shell](https://support.apple.com/en-us/102360). Therefore, you might want to use `zsh` instead of `bash` in the install command:

```zsh
curl -fsSL https://pixi.sh/install.sh | zsh
```

The script will also update your `~/.zshrc` to include `~/.pixi/bin` in your `PATH`, 