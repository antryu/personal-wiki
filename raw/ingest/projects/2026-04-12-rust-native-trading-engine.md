<!-- GitHub Trending: Rust | 21,822 stars | +21 today -->

# nautechsystems/nautilus_trader

> Production-grade Rust-native trading engine with deterministic event-driven architecture

## Repository Info
- **URL**: https://github.com/nautechsystems/nautilus_trader
- **Stars**: 21,823
- **Forks**: 2,633
- **Language**: Rust
- **License**: GNU Lesser General Public License v3.0
- **Created**: 2018-06-25
- **Updated**: 2026-04-12
- **Topics**: algorithmic-trading-engine, artificial-intelligence, crypto-trading, equity-trading, forex, futures-trading, machine-learning, options-trading, python, rust, sports-betting, trading, trading-platform
- **Open Issues**: 64

## README (excerpt)
# <img src="https://github.com/nautechsystems/nautilus_trader/raw/develop/assets/nautilus-trader-logo.png" width="500">

[![codecov](https://codecov.io/gh/nautechsystems/nautilus_trader/branch/master/graph/badge.svg?token=DXO9QQI40H)](https://codecov.io/gh/nautechsystems/nautilus_trader)
[![codspeed](https://img.shields.io/endpoint?url=https://codspeed.io/badge.json)](https://codspeed.io/nautechsystems/nautilus_trader)
![pythons](https://img.shields.io/pypi/pyversions/nautilus_trader)
![pypi-version](https://img.shields.io/pypi/v/nautilus_trader)
![pypi-format](https://img.shields.io/pypi/format/nautilus_trader?color=blue)
[![Downloads](https://pepy.tech/badge/nautilus-trader)](https://pepy.tech/project/nautilus-trader)
[![Discord](https://img.shields.io/badge/Discord-%235865F2.svg?logo=discord&logoColor=white)](https://discord.gg/NautilusTrader)

| Branch    | Version                                                                                                                                                                                                                     | Status                                                                                                                                                                                            |
| :-------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `master`  | [![version](https://img.shields.io/endpoint?url=https%3A%2F%2Fraw.githubusercontent.com%2Fnautechsystems%2Fnautilus_trader%2Fmaster%2Fversion.json)](https://packages.nautechsystems.io/simple/nautilus-trader/index.html)  | [![build](https://github.com/nautechsystems/nautilus_trader/actions/workflows/build.yml/badge.svg?branch=master)](https://github.com/nautechsystems/nautilus_trader/actions/workflows/build.yml)  |
| `nightly` | [![version](https://img.shields.io/endpoint?url=https%3A%2F%2Fraw.githubusercontent.com%2Fnautechsystems%2Fnautilus_trader%2Fnightly%2Fversion.json)](https://packages.nautechsystems.io/simple/nautilus-trader/index.html) | [![build](https://github.com/nautechsystems/nautilus_trader/actions/workflows/build.yml/badge.svg?branch=nightly)](https://github.com/nautechsystems/nautilus_trader/actions/workflows/build.yml) |
| `develop` | [![version](https://img.shields.io/endpoint?url=https%3A%2F%2Fraw.githubusercontent.com%2Fnautechsystems%2Fnautilus_trader%2Fdevelop%2Fversion.json)](https://packages.nautechsystems.io/simple/nautilus-trader/index.html) | [![build](https://github.com/nautechsystems/nautilus_trader/actions/workflows/build.yml/badge.svg?branch=develop)](https://github.com/nautechsystems/nautilus_trader/actions/workflows/build.yml) |

| Platform           | Rust   | Python    |
| :----------------- | :----- | :-------- |
| `Linux (x86_64)`   | 1.94.1 | 3.12-3.14 |
| `Linux (ARM64)`    | 1.94.1 | 3.12-3.14 |
| `macOS (ARM64)`    | 1.94.1 | 3.12-3.14 |
| `Windows (x86_64)` | 1.94.1 | 3.12-3.14 |

- **Docs**: <https://nautilustrader.io/docs/>
- **Website**: <https://nautilustrader.io>
- **Support**: [support@nautilustrader.io](mailto:support@nautilustrader.io)

## Introduction

NautilusTrader is an open-source, production-grade, Rust-native engine for multi-asset,
multi-venue trading systems.

The system spans research, deterministic simulation, and live execution within a single
event-driven architecture, with Python serving as the control plane for strategy logic,
configuration, and orchestration.

This separation provides the performance and safety of a compiled trading engine with
the flexibility of Python for system composition and strategy development.
Trading systems can also be written enti