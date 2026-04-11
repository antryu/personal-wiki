<!-- GitHub Trending: Rust | 2,743 stars | +0 today -->

# paritytech/polkadot-sdk

> The Parity Polkadot Blockchain SDK

## Repository Info
- **URL**: https://github.com/paritytech/polkadot-sdk
- **Stars**: 2,743
- **Forks**: 1,178
- **Language**: Rust
- **License**: N/A
- **Created**: 2023-08-04
- **Updated**: 2026-04-11
- **Topics**: blockchain, cumulus, polkadot, substrate
- **Open Issues**: 2235

## README (excerpt)
<div align="center">

![SDK Logo](./docs/images/Polkadot_Logo_Horizontal_Pink_White.png#gh-dark-mode-only)
![SDK Logo](./docs/images/Polkadot_Logo_Horizontal_Pink_Black.png#gh-light-mode-only)

# Polkadot SDK

![GitHub stars](https://img.shields.io/github/stars/paritytech/polkadot-sdk)&nbsp;&nbsp;![GitHub
forks](https://img.shields.io/github/forks/paritytech/polkadot-sdk)

<!-- markdownlint-disable-next-line MD013 -->
[![StackExchange](https://img.shields.io/badge/StackExchange-Community%20&%20Support-222222?logo=stackexchange)](https://substrate.stackexchange.com/)&nbsp;&nbsp;![GitHub contributors](https://img.shields.io/github/contributors/paritytech/polkadot-sdk)&nbsp;&nbsp;![GitHub commit activity](https://img.shields.io/github/commit-activity/m/paritytech/polkadot-sdk)&nbsp;&nbsp;![GitHub last commit](https://img.shields.io/github/last-commit/paritytech/polkadot-sdk)

> The Polkadot SDK repository provides all the components needed to start building on the
> [Polkadot](https://polkadot.com/) network, a multi-chain blockchain platform that enables
> different blockchains to interoperate and share information in a secure and scalable way.

</div>

## ⚡ Quickstart
If you want to get an example node running quickly you can execute the following getting started script:

```
curl --proto '=https' --tlsv1.2 -sSf https://raw.githubusercontent.com/paritytech/polkadot-sdk/master/scripts/getting-started.sh | bash
```

## 👩🏽‍💻 Building

In order to build this project you need to install some dependencies, follow the instructions in [this guide](https://docs.polkadot.com/develop/parachains/install-polkadot-sdk).

### 🎯 Build targets

When building full runtimes, the WASM builder takes care of all required configuration.  
For individual crates, however, there are a few caveats when targeting `no_std`.

#### WASM
Set `RUSTFLAGS="--cfg substrate_runtime"` when building for WASM. See the
[WASM build](https://paritytech.github.io/polkadot-sdk/master/polkadot_sdk_docs/polkadot_sdk/substrate/index.html#wasm-build)
in the Polkadot SDK Documentation.

#### PolkaVM
PolkaVM builds require some `riscv32` or `riscv64` target architecture.  
See the CI example: [RiscV-build](https://github.com/paritytech/polkadot-sdk/blob/6de451a105ca0a5feb675a215d4e8de5207febf6/.github/workflows/build-misc.yml#L55).

## 📚 Documentation

* [Polkadot Documentation Portal](https://docs.polkadot.com)
* [🦀 rust-docs](https://paritytech.github.io/polkadot-sdk/master/polkadot_sdk_docs/index.html): Where we keep track of
the API docs of our Rust crates. Includes:
  * [Introduction](https://paritytech.github.io/polkadot-sdk/master/polkadot_sdk_docs/polkadot_sdk/index.html)
	to each component of the Polkadot SDK: Substrate, FRAME, Cumulus, and XCM
  * [Guides](https://paritytech.github.io/polkadot-sdk/master/polkadot_sdk_docs/guides/index.html),
	namely how to build your first FRAME pallet
  * [Templates](https://paritytech.github.io/polkadot-sdk/master/polkadot_sdk_docs/polkadot_sdk/templates/index.html)
    for starting a new project.
  * [External Resources](https://paritytech.github.io/polkadot-sdk/master/polkadot_sdk_docs/external_resources/index.html)
* Have a question? You can ask in the Polkadot SDK Developers Chat.
Messages from either of these channels are bridged to the other, so you can use whichever one you like.
  * [Telegram](https://t.me/substratedevs)
  * [Matrix](https://matrix.to/#/#substratedevs:matrix.org)
  * [Discord](https://discord.com/channels/722223075629727774/997505821955076196)
  * [Polkadot and Substrate StackExchange](https://substrate.stackexchange.com/)

## 🚀 Releases

<!-- markdownlint-disable-next-line MD013 -->
![Current Stable Release](https://raw.githubusercontent.com/paritytech/release-registry/main/badges/polkadot-sdk-latest.svg)&nbsp;&nbsp;![Next Stable Release](https://raw.githubusercontent.com/paritytech/release-registry/main/badges/polkadot-sdk-next.svg)

The Polkadot SDK is released every three months as a `Polkadot stab