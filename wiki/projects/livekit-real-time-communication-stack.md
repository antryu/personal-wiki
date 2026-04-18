# LiveKit Real-Time Communication Stack

> LiveKit is an open-source real-time communication stack that provides scalable, multi-user conferencing using WebRTC. It offers robust features like selective forwarding, speaker detection, and cross-platform SDKs, making it a production-ready solution for developers building interactive video, audio, and data applications.  
> Last updated: 2026-04-18

## Overview

### Repository Info
- **URL**: [GitHub](https://github.com/livekit/livekit)
- **Stars**: 18,260
- **Forks**: 1,905
- **Language**: Go
- **License**: [Apache License 2.0](https://github.com/livekit/livekit/blob/master/LICENSE)
- **Created**: 2020-09-30
- **Updated**: 2026-04-18
- **Topics**: golang, media-server, sfu, video, voice, voice-ai, webrtc
- **Open Issues**: 173

LiveKit is an open-source project providing a scalable, WebRTC-based infrastructure for real-time video, audio, and data communication. The server is written in Go, leveraging the [Pion WebRTC](https://github.com/pion/webrtc) library. It emphasizes production readiness with features like JWT authentication, robust networking (UDP/TCP/TURN), and easy deployment via single-binary, Docker, or Kubernetes.

### Features
- **Scalable, distributed SFU (Selective Forwarding Unit)** for efficient media routing.
- Modern client SDKs for web, mobile, and desktop platforms.
- Advanced capabilities: speaker detection, simulcast, selective subscription, end-to-end encryption, and SVC codecs (VP9, AV1).
- Production-grade tools: moderation APIs, webhooks, and multi-region deployment support.
- Ecosystem integrations: [Egress](https://github.com/livekit/egress) for recording, [Ingress](https://github.com/livekit/ingress) for external stream ingestion, and [Agents](https://github.com/livekit/agents) for AI-powered backend participants.

### Documentation & Demos
- **Documentation**: [docs.livekit.io](https://docs.livekit.io)
- **Live Demos**:
  - [LiveKit Meet](https://meet.livekit.io) (video conferencing)
  - [Spatial Audio](https://spatial-audio-demo.livekit.io/) (3D audio experience)
  - [AI Voice Assistant (Kitt)](https://livekit.io/kitt) (ChatGPT integration)

### SDKs & Tools
Client SDKs support declarative UI for real-time features like track publishing/subscribing and participant management. Server tools include APIs for room moderation, analytics, and event handling.

---

## Key Points
- **Scalable WebRTC SFU**: Efficiently handles multi-user conferencing with selective media forwarding.
- **Production-Ready**: Supports JWT authentication, robust networking, and deployment flexibility (Docker, Kubernetes).
- **Advanced Features**: Includes speaker detection, simulcast, end-to-end encryption, and multi-region support.
- **Cross-Platform SDKs**: Enables real-time video/audio integration across web, mobile, and desktop.
- **Ecosystem Extensibility**: Integrates with Egress, Ingress, and AI agents for advanced use cases.

## Sources
- [GitHub](https://github.com/livekit/livekit)
- [원본](raw/ingest/projects/2026-04-18-livekit-real-time-communication-stack.md)