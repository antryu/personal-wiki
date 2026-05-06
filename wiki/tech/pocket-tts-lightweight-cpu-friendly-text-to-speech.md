# Pocket TTS: Lightweight CPU-Friendly Text-to-Speech

> Pocket TTS is a lightweight, CPU-optimized text-to-speech (TTS) application that eliminates the need for GPU resources or web APIs. It allows users to generate high-quality audio with minimal setup—just a Python package and a function call. It's notable for its small model size, low latency, and browser-compatible execution.
> Last updated: 2026-05-06

## Overview

Pocket TTS is a text-to-speech (TTS) tool designed to run efficiently on CPU hardware, making it accessible for users without GPU access or high system requirements. Developed by Kyutai Labs, this open-source project is built around a lightweight model with 100 million parameters, enabling fast and low-latency audio generation. Pocket TTS supports multiple languages and offers features such as voice cloning, streaming audio output, and compatibility with web browsers.

The TTS application works out of the box with the Python API or a command-line interface (CLI), and it is compatible with several Python versions (3.10 to 3.14) and PyTorch 2.5+. The project includes a growing list of pre-trained voices in various languages, and users can easily try it without installation through the Kyutai website.

## Key Points

- Runs efficiently on CPUs, eliminating the need for GPU resources.
- Compact model size with 100 million parameters, enabling fast inference.
- Supports multiple languages: English, French, German, Portuguese, Italian, Spanish, and more.
- Low latency (~200ms for the first audio chunk).
- Fast generation speed (up to 6x real-time on a MacBook Air M4 CPU).
- Can be used in browser environments without additional dependencies.
- Offers voice cloning and streaming audio capabilities.
- Python API and CLI for integration and standalone use.
- Open-source and MIT licensed.

## Sources

- [GitHub](https://github.com/kyutai-labs/pocket-tts)
- [원본](raw/ingest/tech/2026-05-06-pocket-tts-lightweight-cpu-friendly-text-to-speech.md)