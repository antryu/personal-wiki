<!-- GitHub Trending: Rust | 9,065 stars | +5 today -->

# embassy-rs/embassy

> Modern embedded framework, using Rust and async.

## Repository Info
- **URL**: https://github.com/embassy-rs/embassy
- **Stars**: 9,065
- **Forks**: 1,447
- **Language**: Rust
- **License**: Apache License 2.0
- **Created**: 2020-09-22
- **Updated**: 2026-04-16
- **Topics**: async, drivers, embedded, executor, hal, rust
- **Open Issues**: 684

## README (excerpt)
# Embassy

Embassy is the next-generation framework for embedded applications. Write safe, correct, and energy-efficient embedded code faster, using the Rust programming language, its async facilities, and the Embassy libraries.

## [Documentation](https://embassy.dev/book/index.html) - [API reference](https://docs.embassy.dev/) - [Website](https://embassy.dev/) - [Chat](https://matrix.to/#/#embassy-rs:matrix.org)

## Rust + async ❤️ embedded

The Rust programming language is blazingly fast and memory-efficient, with no runtime, garbage collector, or OS. It catches a wide variety of bugs at compile time, thanks to its full memory- and thread-safety, and expressive type system.

Rust's [async/await](https://rust-lang.github.io/async-book/) allows for unprecedentedly easy and efficient multitasking in embedded systems. Tasks get transformed at compile time into state machines that get run cooperatively. It requires no dynamic memory allocation and runs on a single stack, so no per-task stack size tuning is required. It obsoletes the need for a traditional RTOS with kernel context switching, and is [faster and smaller than one!](https://tweedegolf.nl/en/blog/65/async-rust-vs-rtos-showdown)

## Batteries included

- **Hardware Abstraction Layers**
    - HALs implement safe, idiomatic Rust APIs to use the hardware capabilities, so raw register manipulation is not needed. The Embassy project maintains HALs for select hardware, but you can still use HALs from other projects with Embassy.
    - [embassy-stm32](https://docs.embassy.dev/embassy-stm32/), for all STM32 microcontroller families.
    - [embassy-nrf](https://docs.embassy.dev/embassy-nrf/), for the Nordic Semiconductor nRF52, nRF53, nRF54 and nRF91 series.
    - [embassy-rp](https://docs.embassy.dev/embassy-rp/), for the Raspberry Pi RP2040 and RP23xx microcontrollers.
    - [embassy-mspm0](https://docs.embassy.dev/embassy-mspm0/), for the Texas Instruments MSPM0 microcontrollers.
    - [embassy-mcxa](https://docs.embassy.dev/embassy-mcxa/), for NXP's MCX-A series of microcontrollers.
    - [esp-rs](https://github.com/esp-rs), for the Espressif Systems ESP32 series of chips.
        - Embassy HAL support for Espressif chips, as well as Async Wi-Fi, Bluetooth, and ESP-NOW, is being developed in the [esp-rs/esp-hal](https://github.com/esp-rs/esp-hal) repository.
    - [ch32-hal](https://github.com/ch32-rs/ch32-hal), for the WCH 32-bit RISC-V(CH32V) series of chips.
    - [mpfs-hal](https://github.com/AlexCharlton/mpfs-hal), for the Microchip PolarFire SoC.
    - [py32-hal](https://github.com/py32-rs/py32-hal), for the Puya Semiconductor PY32 series of microcontrollers.

- **Time that Just Works** -
  No more messing with hardware timers. [embassy_time](https://docs.embassy.dev/embassy-time) provides Instant, Duration, and Timer types that are globally available and never overflow.

- **Real-time ready** -
  Tasks on the same async executor run cooperatively, but you can create multiple executors with different priorities so that higher priority tasks preempt lower priority ones. See the [example](https://github.com/embassy-rs/embassy/blob/main/examples/nrf52840/src/bin/multiprio.rs).

- **Low-power ready** -
  Easily build devices with years of battery life. The async executor automatically puts the core to sleep when there's no work to do. Tasks are woken by interrupts, there is no busy-loop polling while waiting.

- **Networking** -
  The [embassy-net](https://docs.embassy.dev/embassy-net/) network stack implements extensive networking functionality, including Ethernet, IP, TCP, UDP, ICMP, and DHCP. Async drastically simplifies managing timeouts and serving multiple connections concurrently.

- **Bluetooth**
    - The [trouble](https://github.com/embassy-rs/trouble) crate provides a Bluetooth Low Energy 4.x and 5.x Host that runs on any microcontroller implementing the [bt-hci](https://github.com/embassy-rs/bt-hci) traits (currently
      `nRF52`, `nrf54`, `rp2040`, `rp23xx` 