<!-- GitHub Trending: Rust | 22,426 stars | +36 today -->

# slint-ui/slint

> Slint is an open-source declarative GUI toolkit to build native user interfaces for Rust, C++, JavaScript, or Python apps.

## Repository Info
- **URL**: https://github.com/slint-ui/slint
- **Stars**: 22,426
- **Forks**: 872
- **Language**: Rust
- **License**: Other
- **Created**: 2020-05-04
- **Updated**: 2026-04-30
- **Topics**: cpp, declarative-ui, desktop, embedded-devices, gui, javascript, language, lsp-server, native, rust, rust-lang, toolkit, ui, user-interface, wasm, webassembly, widgets
- **Open Issues**: 853

## README (excerpt)

![Slint](./logo/slint-logo-full-light.svg#gh-light-mode-only) ![Slint](./logo/slint-logo-full-dark.svg#gh-dark-mode-only)

[![Build Status](https://github.com/slint-ui/slint/workflows/CI/badge.svg)](https://github.com/slint-ui/slint/actions)
[![REUSE status](https://api.reuse.software/badge/github.com/slint-ui/slint)](https://api.reuse.software/info/github.com/slint-ui/slint)
[![Discussions](https://img.shields.io/github/discussions/slint-ui/slint)](https://github.com/slint-ui/slint/discussions)

**Slint** is an open-source declarative GUI toolkit for building native user interfaces for embedded systems, desktops, and mobile platforms.

Write your UI once in `.slint`, a simple markup language. Connect it to business logic written in Rust, C++, JavaScript, or Python.

## Why Slint?

The name *Slint* is derived from our design goals:

- **Scalable**: Slint should support responsive UI design, allow cross-platform
    usage across operating systems and processor architectures and support
    multiple programming languages.
- **Lightweight**: Slint should require minimal resources, in terms of memory
    and processing power, and yet deliver a smooth, smartphone-like user
    experience on any device.
- **Intuitive**: Designers and developers should feel productive while enjoying
    the GUI design and development process. The design creation tools should be
    intuitive to use for the designers. Similarly for the developers, the APIs
    should be consistent and easy to use, no matter which programming language
    they choose.
- **Native**: GUI built with Slint should match the end users' expectations of a
    native application irrespective of the platform - desktop, mobile, web or
    embedded system. The UI design should be compiled to machine code and provide
    flexibility that only a native application can offer: Access full operating
    system APIs, utilize all CPU and GPU cores, connect to any peripheral.

Beyond the design goals, here’s what makes Slint stand out:

- **Independent UI Design**: Use a declarative language similar to separate your UI from business logic. Designers can work in parallel with developers.
- **Tooling**: Iterate quickly with our Live Preview & editor integrations. Integrate from Figma with the [Figma to Slint plugin](https://www.figma.com/community/plugin/1474418299182276871/figma-to-slint).
- **Stable APIs**: Slint follows a stable 1.x API. We evolve carefully without breaking your code.

See what others have built: [#MadeWithSlint](https://madewithslint.com)

## Examples

### Embedded

| RaspberryPi                          | STM32                         | RP2040                         |
| ------------------------------------ | ----------------------------- | ------------------------------ |
| [Video of Slint on Raspberry Pi][#1] | [Video of Slint on STM32][#2] | [Video of Slint on RP2040][#3] |

### Desktop

| Windows                                     | macOS                                     | Linux                                     |
| ------------------------------------------- | ----------------------------------------- | ----------------------------------------- |
| ![Screenshot of the Gallery on Windows][#4] | ![Screenshot of the Gallery on macOS][#5] | ![Screenshot of the Gallery on Linux][#6] |

### Web using WebAssembly

| Printer Demo                                | Slide Puzzle                                 | Energy Monitor                                       | Widget Gallery                                | Weather demo                                  |
| ------------------------------------------- | -------------------------------------------- | ---------------------------------------------------- | --------------------------------------------- | --------------------------------------------- |
| [![Screenshot of the Printer Demo][#7]][#8] | [![Screenshot of the Slide Puzzle][#9]][#10] | [![Screenshot of the Energy Monitor Demo][#11]][#12] | [![Screenshot of the