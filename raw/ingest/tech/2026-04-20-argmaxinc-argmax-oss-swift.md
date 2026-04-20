<!-- GitHub Trending: Swift | 6,013 stars | +3 today -->

# argmaxinc/argmax-oss-swift

> On-device Speech AI for Apple Silicon

## Repository Info
- **URL**: https://github.com/argmaxinc/argmax-oss-swift
- **Stars**: 6,013
- **Forks**: 547
- **Language**: Swift
- **License**: MIT License
- **Created**: 2024-01-26
- **Updated**: 2026-04-20
- **Topics**: diarization, inference, ios, macos, pyannote, qwen3-tts, speech-recognition, speech-to-text, swift, text-to-speech, transformers, visionos, watchos, whisper
- **Open Issues**: 116

## README (excerpt)

<div align="center">

<a href="https://github.com/argmaxinc/argmax-oss-swift#gh-light-mode-only">
  <img src="https://github.com/user-attachments/assets/2ef4d2b4-b4f1-4b9b-9590-4e57432633ed" alt="Argmax Logo" width="20%" />
</a>

<a href="https://github.com/argmaxinc/argmax-oss-swift#gh-dark-mode-only">
  <img src="https://github.com/user-attachments/assets/6f2c77c4-94b5-4ce5-8647-b177641e6f02" alt="Argmax Logo" width="20%" />
</a>

# Argmax Open-Source SDK

[![Tests](https://github.com/argmaxinc/argmax-oss-swift/actions/workflows/release-tests.yml/badge.svg)](https://github.com/argmaxinc/argmax-oss-swift/actions/workflows/release-tests.yml)
[![Supported Swift Version](https://img.shields.io/endpoint?url=https%3A%2F%2Fswiftpackageindex.com%2Fapi%2Fpackages%2Fargmaxinc%2Fargmax-oss-swift%2Fbadge%3Ftype%3Dswift-versions&labelColor=353a41&color=32d058)](https://swiftpackageindex.com/argmaxinc/argmax-oss-swift) [![Supported Platforms](https://img.shields.io/endpoint?url=https%3A%2F%2Fswiftpackageindex.com%2Fapi%2Fpackages%2Fargmaxinc%2Fargmax-oss-swift%2Fbadge%3Ftype%3Dplatforms&labelColor=353a41&color=32d058)](https://swiftpackageindex.com/argmaxinc/argmax-oss-swift)
[![License](https://img.shields.io/github/license/argmaxinc/argmax-oss-swift?logo=github&logoColor=969da4&label=License&labelColor=353a41&color=32d058)](LICENSE.md)
<br/>
[![Discord](https://img.shields.io/discord/1171912382512115722?style=flat&logo=discord&logoColor=969da4&label=Discord&labelColor=353a41&color=32d058&link=https%3A%2F%2Fdiscord.gg%2FG5F5GZGecC)](https://discord.gg/G5F5GZGecC)
[![Hugging Face](https://img.shields.io/badge/dynamic/json?url=https%3A%2F%2Fhuggingface.co%2Fapi%2Fmodels%2Fargmaxinc%2Fwhisperkit-coreml&query=%24.downloads&suffix=%2Fmonth&logo=huggingface&logoColor=969da4&label=Downloads&labelColor=353a41&color=32d058)](https://huggingface.co/argmaxinc/whisperkit-coreml)


</div>

[Argmax](https://argmaxinc.com/blog) Open-Source SDK Swift is a collection of turn-key on-device inference frameworks:
- **WhisperKit** for speech-to-text with OpenAI Whisper
- **SpeakerKit** for speaker diarization Pyannote
- **TTSKit** for text-to-speech with Qwen-TTS

> [!IMPORTANT]
> [Argmax Pro SDK](https://www.argmaxinc.com/blog/argmax-sdk-2) supports additional models and advanced features such as:
> - Real-time transcription with speakers
> - Frontier accuracy for your use case with custom vocabulary
> - Argmax Local Server for non-native apps
> - Android support with Argmax Pro SDK Kotlin
> 
> Further resources:
> - [Open-source vs Pro SDK](https://app.argmaxinc.com/docs/wiki/open-source-vs-pro-sdk)
> - [Try Pro SDK on TestFlight](https://testflight.apple.com/join/Q1cywTJw)
> - [Model Gallery](https://app.argmaxinc.com/docs/models)

## Table of Contents

- [Installation](#installation)
  - [Swift Package Manager](#swift-package-manager)
  - [Prerequisites](#prerequisites)
  - [Xcode Steps](#xcode-steps)
  - [Package.swift](#packageswift)
  - [Homebrew](#homebrew)
- [Getting Started](#getting-started)
  - [Quick Example](#quick-example)
  - [Model Selection](#model-selection)
  - [Generating Models](#generating-models)
  - [Swift CLI](#swift-cli)
  - [Local Server](#local-server)
    - [Building the Server](#building-the-server)
    - [Starting the Server](#starting-the-server)
    - [API Endpoints](#api-endpoints)
    - [Supported Parameters](#supported-parameters)
    - [Client Examples](#client-examples)
    - [Generating the API Specification](#generating-the-api-specification)
    - [Client Generation](#client-generation)
    - [API Limitations](#api-limitations)
    - [Fully Supported Features](#fully-supported-features)
- [TTSKit](#ttskit)
  - [Quick Example](#quick-example-1)
  - [Model Selection](#model-selection-1)
    - [Custom Voices](#custom-voices)
    - [Real-Time Streaming Playback](#real-time-streaming-playback)
  - [Generation Options](#generation-options)
    - [Style Instructions (1.7B only)](#style-instructions-17b-only)
  - [Saving Au