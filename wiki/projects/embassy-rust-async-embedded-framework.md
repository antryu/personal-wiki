# Embassy: Rust Async Embedded Framework

> Embassy is a modern embedded framework that uses Rust and async to enable developers to write safe, correct, and energy-efficient code for embedded systems. It simplifies multitasking and eliminates the need for traditional RTOS by leveraging Rust's async capabilities.  
> Last updated: 2026-04-16

## Overview

Embassy is a next-generation framework for embedded applications, designed to streamline the development process through the use of Rust and asynchronous programming. It provides a robust set of tools and libraries that allow developers to build efficient and reliable embedded systems with minimal hardware manipulation.

The framework includes hardware abstraction layers (HALs) for a wide range of microcontrollers, such as STM32, Nordic nRF, Raspberry Pi RP2040, Texas Instruments MSPM0, and more. These HALs offer safe and idiomatic Rust APIs, removing the need for direct register manipulation.

Embassy also features a real-time and low-power ready executor that manages tasks efficiently, enabling cooperative multitasking without busy-loop polling. It includes a comprehensive network stack for Ethernet, IP, TCP, UDP, and more, and supports Bluetooth Low Energy through the `trouble` crate.

## Key Points

- Uses Rust and async to enable efficient and safe embedded development.
- Eliminates the need for traditional RTOS with cooperative multitasking.
- Offers hardware abstraction layers for multiple microcontroller families.
- Provides real-time and low-power capabilities with automatic sleep and interrupt-based task waking.
- Includes a full-featured network stack and Bluetooth Low Energy support.

## Sources

- [GitHub](https://github.com/embassy-rs/embassy)
- [원본](raw/ingest/projects/2026-04-16-embassy-rust-async-embedded-framework.md)