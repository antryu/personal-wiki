# VoxCPM2: Multilingual TTS and Voice Cloning

> VoxCPM2 is a tokenizer-free Text-to-Speech (TTS) system capable of generating studio-quality multilingual speech, designing custom voices from text descriptions, and cloning voices with unprecedented fidelity. It supports 30 languages and achieves real-time performance on modern GPUs.  
> Last updated: 2026-04-10

## Overview
**VoxCPM2** is an advanced TTS model developed by OpenBMB, built on a 2B-parameter architecture trained on over 2 million hours of multilingual speech data. It eliminates the need for discrete tokenization by using an end-to-end diffusion autoregressive architecture, enabling direct generation of continuous speech representations. Key innovations include:

- **Multilingual Support**: Synthesizes speech in 30 languages without requiring language tags.
- **Voice Design**: Creates novel voices from natural-language descriptions (e.g., gender, tone, pace).
- **Voice Cloning**: Replicates voices using short reference clips, with optional style adjustments.
- **High-Quality Audio**: Outputs 48kHz studio-grade audio via an asymmetric AudioVAE V2 design.
- **Real-Time Performance**: Achieves ~0.13 RTF on NVIDIA RTX 4090 with Nano-VLLM acceleration.

The model is open-source under the Apache-2.0 license and includes a Hugging Face demo, documentation, and community support via Discord and Feishu.

---

### Repository Info
- **URL**: [GitHub](https://github.com/OpenBMB/VoxCPM)
- **Stars**: 8,082
- **Forks**: 936
- **Language**: Python
- **License**: [Apache License 2.0](LICENSE)
- **Created**: 2025-09-16
- **Updated**: 2026-04-10
- **Topics**: audio, deeplearning, multilingual, speech-synthesis, voice-cloning
- **Open Issues**: 55

---

## Key Points
- Supports **30 languages** with no language tags required.
- Enables **creative voice design** from text descriptions (no reference audio needed).
- Offers **controllable voice cloning** with style customization (emotion, pace, expression).
- Produces **48kHz audio** directly from 16kHz reference clips.
- Achieves **real-time synthesis** (~0.3 RTF on RTX 4090) and is free for commercial use.

## Sources
- [GitHub](https://github.com/OpenBMB/VoxCPM)
- [원본](raw/ingest/projects/2026-04-10-voxcpm2-multilingual-tts-and-voice-cloning.md)