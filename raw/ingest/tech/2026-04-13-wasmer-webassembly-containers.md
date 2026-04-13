<!-- GitHub Trending: Rust | 20,599 stars | +14 today -->

# wasmerio/wasmer

> 🚀 Fast, secure, lightweight containers based on WebAssembly

## Repository Info
- **URL**: https://github.com/wasmerio/wasmer
- **Stars**: 20,599
- **Forks**: 951
- **Language**: Rust
- **License**: MIT License
- **Created**: 2018-10-11
- **Updated**: 2026-04-13
- **Topics**: emscripten, linux, macos, rust, wasi, wasix, wasm, wasmer, webassembly, windows
- **Open Issues**: 217

## README (excerpt)
<div align="center">
  <a href="https://wasmer.io" target="_blank">
    <picture>
      <source srcset="https://raw.githubusercontent.com/wasmerio/wasmer/master/assets/logo-white.png"  media="(prefers-color-scheme: dark)">
      <img width="300" src="https://raw.githubusercontent.com/wasmerio/wasmer/master/assets/logo.png" alt="Wasmer logo">
    </picture>
  </a>

  <p>
     <a href="https://github.com/wasmerio/wasmer/releases">
      <img src="https://shields.io/github/v/tag/wasmerio/wasmer" alt="Github release">
    </a>
    <a href="https://github.com/wasmerio/wasmer/blob/main/LICENSE">
      <img src="https://img.shields.io/github/license/wasmerio/wasmer.svg" alt="License">
    </a>
    <a href="https://docs.wasmer.io">
      <img src="https://img.shields.io/static/v1?label=Docs&message=docs.wasmer.io&color=blue" alt="Wasmer Docs">
    </a>
    <a href="https://discord.gg/rWkMNStrEW">
      <img src="https://img.shields.io/discord/1110300506942881873?label=Wasmer&logo=discord&logoColor=white" alt="Wasmer on Discord">
    </a>
    <a href="https://x.com/wasmerio">
      <img src="https://img.shields.io/twitter/follow/wasmerio" alt="Wasmer on X">
    </a>  
  </p>
</div>

<br /> 

Wasmer is a _blazing fast_ and _secure_ [**WebAssembly**](https://webassembly.org) runtime that enables incredibly
_lightweight containers_ to run anywhere: from _Desktop_ to the _Cloud_, _Edge_ and your browser.

- **Secure** by default. No file, network, or environment access, unless explicitly enabled.
- **Pluggable**. supports [**WASIX**](https://wasix.org/), [WASI](https://github.com/WebAssembly/WASI) out of the box.
- **Incredibly Fast**. Run WebAssembly at near-native speeds.
- **Embeddable** [anywhere via Wasmer SDKs](https://github.com/wasmerio/wasmer/#wasmer-sdk)

### Install Wasmer

```sh
curl https://get.wasmer.io -sSfL | sh
```

<details>
  <summary>Other installation options (Powershell, Brew, Cargo, ...)</summary>
  
  _Wasmer can be installed from various package managers. Choose the one that fits best for your environment:_
  
  * Powershell (Windows)
    ```powershell
    iwr https://win.wasmer.io -useb | iex
    ```

- <a href="https://formulae.brew.sh/formula/wasmer">Homebrew</a> (macOS, Linux)

  ```sh
  brew install wasmer
  ```

- <a href="https://github.com/ScoopInstaller/Main/blob/master/bucket/wasmer.json">Scoop</a> (Windows)

  ```sh
  scoop install wasmer
  ```

- <a href="https://chocolatey.org/packages/wasmer">Chocolatey</a> (Windows)

  ```sh
  choco install wasmer
  ```

- <a href="https://crates.io/crates/cargo-binstall/">Cargo binstall</a>

  ```sh
  cargo binstall wasmer-cli
  ```

- <a href="https://crates.io/crates/wasmer-cli/">Cargo</a>

  _Note: All the available
  features are described in the [`wasmer-cli`
  crate docs](https://github.com/wasmerio/wasmer/tree/main/lib/cli/README.md)_

  ```sh
  cargo install wasmer-cli
  ```

> Looking for more installation options? See [the `wasmer-install`
> repository](https://github.com/wasmerio/wasmer-install) to learn
> more!

</details>

> Note: You can also try Wasmer online in [wasmer.sh](https://wasmer.sh/)

### Quickstart

> [!Tip]  
> As part of our commitment to open source, we want to reward all GitHub users. In addition to the free tier, you can get up to $200 in [Wasmer Edge](https://wasmer.io/products/edge) credits for your open-source contributions - [Claim here](https://github.com/wasmerio/wasmer/discussions/5560).

You can start by running
[Cowsay](https://wasmer.io/syrusakbary/cowsay):

```bash
$ wasmer run cowsay "hello world"
 _____________
< hello world >
 -------------
        \   ^__^
         \  (oo)\_______
            (__)\       )\/\
               ||----w |
                ||     ||
```

> There are many more available packages, such as [`wasmer/python`](https://wasmer.io/wasmer/python) or [`quickjs`](https://wasmer.io/saghul/quickjs). [Create your own package](https://docs.wasmer.io/registry/get-started), or explore packages from the community