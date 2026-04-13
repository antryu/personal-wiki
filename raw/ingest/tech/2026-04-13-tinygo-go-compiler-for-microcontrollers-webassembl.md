<!-- GitHub Trending: Go | 17,342 stars | +4 today -->

# tinygo-org/tinygo

> Go compiler for small places. Microcontrollers, WebAssembly (WASM/WASI), and command-line tools. Based on LLVM.

## Repository Info
- **URL**: https://github.com/tinygo-org/tinygo
- **Stars**: 17,342
- **Forks**: 1,018
- **Language**: Go
- **License**: Other
- **Created**: 2018-06-07
- **Updated**: 2026-04-13
- **Topics**: adafruit, arduino, arm, avr, esp32, gpio, i2c, llvm, microbit, microcontroller, nrf51, nrf52, samd21, spi, stm32, tinygo, wasi, wasm, webassembly
- **Open Issues**: 552

## README (excerpt)
# TinyGo - Go compiler for small places

[![Linux](https://github.com/tinygo-org/tinygo/actions/workflows/linux.yml/badge.svg?branch=dev)](https://github.com/tinygo-org/tinygo/actions/workflows/linux.yml) [![macOS](https://github.com/tinygo-org/tinygo/actions/workflows/build-macos.yml/badge.svg?branch=dev)](https://github.com/tinygo-org/tinygo/actions/workflows/build-macos.yml) [![Windows](https://github.com/tinygo-org/tinygo/actions/workflows/windows.yml/badge.svg?branch=dev)](https://github.com/tinygo-org/tinygo/actions/workflows/windows.yml) [![Docker](https://github.com/tinygo-org/tinygo/actions/workflows/docker.yml/badge.svg?branch=dev)](https://github.com/tinygo-org/tinygo/actions/workflows/docker.yml) [![Nix](https://github.com/tinygo-org/tinygo/actions/workflows/nix.yml/badge.svg?branch=dev)](https://github.com/tinygo-org/tinygo/actions/workflows/nix.yml) [![CircleCI](https://circleci.com/gh/tinygo-org/tinygo/tree/dev.svg?style=svg)](https://circleci.com/gh/tinygo-org/tinygo/tree/dev)

TinyGo is a Go compiler intended for use in small places such as microcontrollers, WebAssembly (wasm/wasi), and command-line tools.

It reuses libraries used by the [Go language tools](https://golang.org/pkg/go/) alongside [LLVM](http://llvm.org) to provide an alternative way to compile programs written in the Go programming language.

> [!IMPORTANT]
> You can help TinyGo with a financial contribution using OpenCollective. Please see https://opencollective.com/tinygo for more information. Thank you!

## Embedded

Here is an example program that blinks the built-in LED when run directly on any supported board with onboard LED:

```go
package main

import (
    "machine"
    "time"
)

func main() {
    led := machine.LED
    led.Configure(machine.PinConfig{Mode: machine.PinOutput})
    for {
        led.Low()
        time.Sleep(time.Millisecond * 1000)

        led.High()
        time.Sleep(time.Millisecond * 1000)
    }
}
```

The above program can be compiled and run without modification on an Arduino Uno, an Adafruit ItsyBitsy M0, or any of the supported boards that have a built-in LED, just by setting the correct TinyGo compiler target. For example, this compiles and flashes an Arduino Uno:

```shell
tinygo flash -target arduino examples/blinky1
```

## WebAssembly

TinyGo is very useful for compiling programs both for use in browsers (WASM) as well as for use on servers and other edge devices (WASI).

TinyGo programs can run in [Fastly Compute](https://www.fastly.com/documentation/guides/compute/go/), [Fermyon Spin](https://developer.fermyon.com/spin/go-components), [wazero](https://wazero.io/languages/tinygo/) and many other WebAssembly runtimes.

Here is a small TinyGo program for use by a WASI host application:

```go
package main

//go:wasmexport add
func add(x, y uint32) uint32 {
	return x + y
}
```

This compiles the above TinyGo program for use on any WASI Preview 1 runtime:

```shell
tinygo build -buildmode=c-shared -o add.wasm -target=wasip1 add.go
```

You can also use the same syntax as Go 1.24+:

```shell
GOOS=wasip1 GOARCH=wasm tinygo build -buildmode=c-shared -o add.wasm add.go
```

## Installation

See the [getting started instructions](https://tinygo.org/getting-started/) for information on how to install TinyGo, as well as how to run the TinyGo compiler using our Docker container.

## Supported targets

### Embedded

You can compile TinyGo programs for over 94 different microcontroller boards.

For more information, please see https://tinygo.org/docs/reference/microcontrollers/

### WebAssembly

TinyGo programs can be compiled for both WASM and WASI targets.

For more information, see https://tinygo.org/docs/guides/webassembly/

### Operating Systems

You can also compile programs for Linux, macOS, and Windows targets.

For more information:

- Linux https://tinygo.org/docs/guides/linux/

- macOS https://tinygo.org/docs/guides/macos/

- Windows https://tinygo.org/docs/guides/windows/

## Currently supported features:
