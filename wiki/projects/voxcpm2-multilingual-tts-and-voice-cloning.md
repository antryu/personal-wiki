# VoxCPM2: Multilingual TTS and Voice Cloning

> VoxCPM2 is a tokenizer-free, end-to-end Text-to-Speech (TTS) system capable of generating high-quality multilingual speech, designing custom voices from text descriptions, and cloning voices with unprecedented fidelity. It supports 30 languages, 48kHz studio-grade audio, and real-time streaming.  
> Last updated: 2026-04-10

## Overview

VoxCPM2 is the latest release of the VoxCPM series, a diffusion autoregressive TTS model trained on **2 million hours of multilingual speech data**. Built on a **MiniCPM-4 backbone**, it eliminates traditional tokenization by directly generating continuous speech representations, enabling natural and expressive synthesis. The model supports **30 languages**, **voice design from natural language descriptions**, **controllable voice cloning**, and **48kHz high-fidelity audio output**.  

Key features include:
- **Tokenizer-free architecture**: Directly maps text to speech without discrete tokens.
- **Voice Design**: Create novel voices using descriptions (e.g., "young female with energetic tone").
- **Controllable Cloning**: Clone voices from short reference clips while adjusting style (emotion, pace).
- **Ultimate Cloning**: Preserve all vocal nuances (timbre, rhythm, emotion) with reference audio + transcript.
- **Asymmetric AudioVAE V2**: Converts 16kHz input to 48kHz output without external upsampling.
- **Real-time performance**: Achieves ~0.3 RTF on RTX 4090, accelerated to ~0.13 with Nano-VLLM.

Repository metadata:
- **Stars**: 8,704  
- **Forks**: 1,033  
- **Language**: Python  
- **License**: Apache License 2.0  
- **Open Issues**: 59  

Project links:  
[GitHub](https://github.com/OpenBMB/VoxCPM) | [Live Demo](https://huggingface.co/spaces/OpenBMB/VoxCPM-Demo) | [Documentation](https://voxcpm.readthedocs.io/en/latest/) | [Hugging Face](https://huggingface.co/openbmb/VoxCPM2) | [ModelScope](https://modelscope.cn/models/OpenBMB/VoxCPM2) | [Audio Samples](https://openbmb.github.io/voxcpm2-demopage/)

## Key Points
- Supports **30 languages** (no language tags required).
- Generates **48kHz studio-quality audio** with built-in super-resolution.
- Enables **voice cloning** with reference audio (as low as 16kHz input).
- Allows **custom voice design** via natural language descriptions.
- Open-source under **Apache-2.0**, with commercial use permitted.

## Sources
- [GitHub](https://github.com/OpenBMB/VoxCPM)
- [원본](raw/ingest/projects/2026-04-10-voxcpm2-multilingual-tts-and-voice-cloning.md)