# Remodex: Remote Control for Codex

> Remodex is an open-source iOS app and local-first bridge that allows users to control the Codex AI coding assistant from their iPhone, while keeping the runtime on their Mac. It features secure, end-to-end encrypted sessions and a flexible architecture suitable for self-hosting.  
> Last updated: 2026-05-10

## Overview

Remodex is a local-first bridge and iOS app designed to remotely control OpenAI’s Codex from an iPhone while keeping the AI runtime on a macOS machine. It offers a secure and private way to access Codex with features like end-to-end encrypted pairing, live streaming, and custom access controls.

The app supports a variety of features, including Git operations from a phone, reasoning controls, subagent execution, and queueable prompts. The architecture uses a WebSocket bridge between the Mac and iOS device, with an optional background service on macOS via `launchd`.

Remodex is open-source, with both the iOS app and bridge source code available for self-hosting. It is distributed via the App Store and can also be built and installed from source using Xcode. The project is in early development, and contributions are not yet being accepted.

## Key Points
- End-to-end encrypted pairing and communication between iPhone and Mac
- Fast and plan modes for optimized Codex interaction
- Git actions from mobile, including commit, push, pull, and branch switching
- Local-first and self-host-friendly architecture
- Available on the App Store and as open-source code on GitHub

## Sources
- [GitHub](https://github.com/Emanuele-web04/remodex)
- [원본](raw/ingest/tech/2026-05-10-remodex-remote-control-for-codex.md)