<!-- GitHub Trending: Go | 18,260 stars | +21 today -->

# livekit/livekit

> End-to-end realtime stack for connecting humans and AI

## Repository Info
- **URL**: https://github.com/livekit/livekit
- **Stars**: 18,260
- **Forks**: 1,905
- **Language**: Go
- **License**: Apache License 2.0
- **Created**: 2020-09-30
- **Updated**: 2026-04-18
- **Topics**: golang, media-server, sfu, video, voice, voice-ai, webrtc
- **Open Issues**: 173

## README (excerpt)
<!--BEGIN_BANNER_IMAGE-->

<picture>
  <source media="(prefers-color-scheme: dark)" srcset="/.github/banner_dark.png">
  <source media="(prefers-color-scheme: light)" srcset="/.github/banner_light.png">
  <img style="width:100%;" alt="The LiveKit icon, the name of the repository and some sample code in the background." src="https://raw.githubusercontent.com/livekit/livekit/main/.github/banner_light.png">
</picture>

<!--END_BANNER_IMAGE-->

# LiveKit: Real-time video, audio and data for developers

[LiveKit](https://livekit.io) is an open source project that provides scalable, multi-user conferencing based on WebRTC.
It's designed to provide everything you need to build real-time video audio data capabilities in your applications.

LiveKit's server is written in Go, using the awesome [Pion WebRTC](https://github.com/pion/webrtc) implementation.

[![GitHub stars](https://img.shields.io/github/stars/livekit/livekit?style=social&label=Star&maxAge=2592000)](https://github.com/livekit/livekit/stargazers/)
[![Slack community](https://img.shields.io/endpoint?url=https%3A%2F%2Flivekit.io%2Fbadges%2Fslack)](https://livekit.io/join-slack)
[![Twitter Follow](https://img.shields.io/twitter/follow/livekit)](https://twitter.com/livekit)
[![Ask DeepWiki](https://deepwiki.com/badge.svg)](https://deepwiki.com/livekit/livekit)
[![GitHub release (latest SemVer)](https://img.shields.io/github/v/release/livekit/livekit)](https://github.com/livekit/livekit/releases/latest)
[![GitHub Workflow Status](https://img.shields.io/github/actions/workflow/status/livekit/livekit/buildtest.yaml?branch=master)](https://github.com/livekit/livekit/actions/workflows/buildtest.yaml)
[![License](https://img.shields.io/github/license/livekit/livekit)](https://github.com/livekit/livekit/blob/master/LICENSE)

## Features

-   Scalable, distributed WebRTC SFU (Selective Forwarding Unit)
-   Modern, full-featured client SDKs
-   Built for production, supports JWT authentication
-   Robust networking and connectivity, UDP/TCP/TURN
-   Easy to deploy: single binary, Docker or Kubernetes
-   Advanced features including:
    -   [speaker detection](https://docs.livekit.io/home/client/tracks/subscribe/#speaker-detection)
    -   [simulcast](https://docs.livekit.io/home/client/tracks/publish/#video-simulcast)
    -   [end-to-end optimizations](https://blog.livekit.io/livekit-one-dot-zero/)
    -   [selective subscription](https://docs.livekit.io/home/client/tracks/subscribe/#selective-subscription)
    -   [moderation APIs](https://docs.livekit.io/home/server/managing-participants/)
    -   end-to-end encryption
    -   SVC codecs (VP9, AV1)
    -   [webhooks](https://docs.livekit.io/home/server/webhooks/)
    -   [distributed and multi-region](https://docs.livekit.io/home/self-hosting/distributed/)

## Documentation & Guides

https://docs.livekit.io

## Live Demos

-   [LiveKit Meet](https://meet.livekit.io) ([source](https://github.com/livekit-examples/meet))
-   [Spatial Audio](https://spatial-audio-demo.livekit.io/) ([source](https://github.com/livekit-examples/spatial-audio))
-   Livestreaming from OBS Studio ([source](https://github.com/livekit-examples/livestream))
-   [AI voice assistant using ChatGPT](https://livekit.io/kitt) ([source](https://github.com/livekit-examples/kitt))

## Ecosystem

-   [Agents](https://github.com/livekit/agents): build real-time multimodal AI applications with programmable backend participants
-   [Egress](https://github.com/livekit/egress): record or multi-stream rooms and export individual tracks
-   [Ingress](https://github.com/livekit/ingress): ingest streams from external sources like RTMP, WHIP, HLS, or OBS Studio

## SDKs & Tools

### Client SDKs

Client SDKs enable your frontend to include interactive, multi-user experiences.

<table>
  <tr>
    <th>Language</th>
    <th>Repo</th>
    <th>
        <a href="https://docs.livekit.io/home/client/events/#declarative-ui" target="_blank" rel="noopener noreferrer">Declarative UI</a>
    </t