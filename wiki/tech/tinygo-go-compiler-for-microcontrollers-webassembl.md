# TinyGo: Go Compiler for Microcontrollers & WebAssembly

> TinyGo is a Go compiler designed for resource-constrained environments like microcontrollers, WebAssembly (WASM/WASI), and command-line tools. It leverages LLVM to optimize performance and reduce binary size, making Go viable for small devices and edge computing.  
> Last updated: 2026-04-13

## Overview

**TinyGo** is a specialized Go compiler focused on enabling Go for embedded systems, WebAssembly, and lightweight applications. The project, hosted on GitHub since 2018, has gained significant traction with over 17,342 stars and 1,018 forks. It uses LLVM under the hood to generate efficient code tailored for microcontrollers and WebAssembly runtimes.

### Repository Highlights
- **URL**: [https://github.com/tinygo-org/tinygo](https://github.com/tinygo-org/tinygo)  
- **Language**: Go  
- **License**: Other (custom)  
- **Topics**: `adafruit`, `arduino`, `avr`, `wasm`, `webassembly`, and more  
- **Open Issues**: 552  

The compiler supports over 94 microcontroller boards (e.g., Arduino, ESP32, STM32) and compiles programs for WASI/WASM runtimes like Fastly Compute and Fermyon Spin. Example use cases include blinking LEDs on microcontrollers and exporting functions for WebAssembly hosts.

### Embedded Development
TinyGo simplifies embedded programming with Go. For instance, a simple LED blinking program can be compiled and flashed to devices like Arduino Uno or Adafruit ItsyBitsy M0 using commands like:  
```shell
tinygo flash -target arduino examples/blinky1
```

### WebAssembly (WASM/WASI)
TinyGo produces compact WebAssembly binaries for browsers and edge servers. A WASI-compatible function like `add(x, y)` can be compiled with:  
```shell
tinygo build -buildmode=c-shared -o add.wasm -target=wasip1 add.go
```

### Supported Platforms
- **Microcontrollers**: 94+ boards (ARM, AVR, Nordic nRF51/52, etc.)  
- **WebAssembly**: WASI Preview 1 and browser-compatible WASM  
- **Operating Systems**: Linux, macOS, Windows  

Installation instructions and Docker integration are available via [TinyGo's documentation](https://tinygo.org/getting-started/).

## Key Points
- Compiles Go for microcontrollers, WebAssembly, and CLI tools with LLVM optimization.  
- Supports over 94 microcontroller boards and multiple WebAssembly runtimes.  
- Actively maintained since 2018, with a large community and 552 open issues for contribution.  

## Sources
- [GitHub](https://github.com/tinygo-org/tinygo)
- [원본](raw/ingest/tech/2026-04-13-tinygo-go-compiler-for-microcontrollers-webassembl.md)