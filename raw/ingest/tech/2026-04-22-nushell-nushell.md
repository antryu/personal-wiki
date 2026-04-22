<!-- GitHub Trending: Rust | 39,138 stars | +35 today -->

# nushell/nushell

> A new type of shell

## Repository Info
- **URL**: https://github.com/nushell/nushell
- **Stars**: 39,138
- **Forks**: 2,113
- **Language**: Rust
- **License**: MIT License
- **Created**: 2019-05-10
- **Updated**: 2026-04-22
- **Topics**: nushell, rust, shell
- **Open Issues**: 1474

## README (excerpt)
# Nushell <!-- omit in toc -->
[![Crates.io](https://img.shields.io/crates/v/nu.svg)](https://crates.io/crates/nu)
[![Build Status](https://img.shields.io/github/actions/workflow/status/nushell/nushell/ci.yml?branch=main)](https://github.com/nushell/nushell/actions)
[![Nightly Build](https://github.com/nushell/nushell/actions/workflows/nightly-build.yml/badge.svg)](https://github.com/nushell/nushell/actions/workflows/nightly-build.yml)
[![Discord](https://img.shields.io/discord/601130461678272522.svg?logo=discord)](https://discord.gg/NtAbbGn)
[![The Changelog #363](https://img.shields.io/badge/The%20Changelog-%23363-61c192.svg)](https://changelog.com/podcast/363)
[![GitHub commit activity](https://img.shields.io/github/commit-activity/m/nushell/nushell)](https://github.com/nushell/nushell/graphs/commit-activity)
[![GitHub contributors](https://img.shields.io/github/contributors/nushell/nushell)](https://github.com/nushell/nushell/graphs/contributors)

A new type of shell.

![Example of nushell](assets/nushell-autocomplete6.gif "Example of nushell")

## Table of Contents <!-- omit in toc -->

- [Status](#status)
- [Learning About Nu](#learning-about-nu)
- [Installation](#installation)
- [Configuration](#configuration)
- [Philosophy](#philosophy)
  - [Pipelines](#pipelines)
  - [Opening files](#opening-files)
  - [Plugins](#plugins)
- [Goals](#goals)
- [Officially Supported By](#officially-supported-by)
- [Contributing](#contributing)
- [License](#license)

## Status

This project has reached a minimum-viable-product level of quality. Many people use it as their daily driver, but it may be unstable for some commands. Nu's design is subject to change as it matures.

## Learning About Nu

The [Nushell book](https://www.nushell.sh/book/) is the primary source of Nushell documentation. You can find [a full list of Nu commands in the book](https://www.nushell.sh/commands/), and we have many examples of using Nu in our [cookbook](https://www.nushell.sh/cookbook/).

We're also active on [Discord](https://discord.gg/NtAbbGn); come and chat with us!

## Installation

To quickly install Nu:

```bash
# Linux and macOS
brew install nushell
# Windows
winget install nushell
```

To use `Nu` in GitHub Action, check [setup-nu](https://github.com/marketplace/actions/setup-nu) for more detail.

Detailed installation instructions can be found in the [installation chapter of the book](https://www.nushell.sh/book/installation.html). Nu is available via many package managers:

[![Packaging status](https://repology.org/badge/vertical-allrepos/nushell.svg?columns=3)](https://repology.org/project/nushell/versions)

For details about which platforms the Nushell team actively supports, see [our platform support policy](devdocs/PLATFORM_SUPPORT.md).

## Configuration

The default configurations can be found at [sample_config](crates/nu-utils/src/default_files)
which are the configuration files one gets when they startup Nushell for the first time.

It sets all of the default configuration to run Nushell.  From here one can
then customize this file for their specific needs.

To see where *config.nu* is located on your system simply type this command.

```rust
$nu.config-path
```

Please see our [book](https://www.nushell.sh) for all of the Nushell documentation.


## Philosophy

Nu draws inspiration from projects like PowerShell, functional programming languages, and modern CLI tools.
Rather than thinking of files and data as raw streams of text, Nu looks at each input as something with structure.
For example, when you list the contents of a directory what you get back is a table of rows, where each row represents an item in that directory.
These values can be piped through a series of steps, in a series of commands called a 'pipeline'.

### Pipelines

In Unix, it's common to pipe between commands to split up a sophisticated command over multiple steps.
Nu takes this a step further and builds heavily on the idea of _pipelines_.
As in the Unix philosophy, Nu