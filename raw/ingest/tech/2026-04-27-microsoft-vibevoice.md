<!-- GitHub Trending: Python | 42,979 stars | +771 today -->

# microsoft/VibeVoice

> Open-Source Frontier Voice AI

## Repository Info
- **URL**: https://github.com/microsoft/VibeVoice
- **Stars**: 42,979
- **Forks**: 4,884
- **Language**: Python
- **License**: MIT License
- **Created**: 2025-08-25
- **Updated**: 2026-04-27
- **Topics**: N/A
- **Open Issues**: 136

## README (excerpt)
<div align="center">

## 🎙️ VibeVoice: Open-Source Frontier Voice AI
[![Project Page](https://img.shields.io/badge/Project-Page-blue?logo=githubpages)](https://microsoft.github.io/VibeVoice)
[![Hugging Face](https://img.shields.io/badge/HuggingFace-Collection-orange?logo=huggingface)](https://huggingface.co/collections/microsoft/vibevoice-68a2ef24a875c44be47b034f)
[![TTS Report](https://img.shields.io/badge/TTS-Report-red?logo=arxiv)](https://openreview.net/pdf?id=FihSkzyxdv)
[![ASR Report](https://img.shields.io/badge/ASR-Report-yellow?logo=arxiv)](https://arxiv.org/pdf/2601.18184)
[![Colab](https://img.shields.io/badge/StreamingTTS-Colab-green?logo=googlecolab)](https://colab.research.google.com/github/microsoft/VibeVoice/blob/main/demo/VibeVoice_colab.ipynb)
[![ASR Playground](https://img.shields.io/badge/ASR-Playground-6F42C1?logo=gradio)](https://aka.ms/vibevoice-asr)

[![microsoft%2FVibeVoice | Trendshift](https://trendshift.io/api/badge/repositories/15465)](https://trendshift.io/repositories/15465)

</div>


<div align="center">
<picture>
  <source media="(prefers-color-scheme: dark)" srcset="Figures/VibeVoice_logo_white.png">
  <img src="Figures/VibeVoice_logo.png" alt="VibeVoice Logo" width="300">
</picture>
</div>

<div align="left">

<h3>📰 News</h3>




<strong>2026-03-06: 🚀 VibeVoice ASR is now part of a <a href="https://huggingface.co/microsoft/VibeVoice-ASR-HF">Transformers release</a>! You can now use our speech recognition model directly through the Hugging Face Transformers library for seamless integration into your projects.</strong>

<strong>2026-01-21:</strong> 📣 We open-sourced <a href="docs/vibevoice-asr.md"><strong>VibeVoice-ASR</strong></a>, a unified speech-to-text model designed to handle 60-minute long-form audio in a single pass, generating structured transcriptions containing Who (Speaker), When (Timestamps), and What (Content), with support for User-Customized Context. Try it in [Playground](https://aka.ms/vibevoice-asr).
- ⭐️ VibeVoice-ASR is natively multilingual, supporting over 50 languages — check the [supported languages](docs/vibevoice-asr.md#language-distribution) for details.
- 🔥 The VibeVoice-ASR [finetuning code](finetuning-asr/README.md) is now available!
- ⚡️ **vLLM inference** is now supported for faster inference; see [vllm-asr](docs/vibevoice-vllm-asr.md) for more details.
- 📑 [VibeVoice-ASR Technique Report](https://arxiv.org/pdf/2601.18184) is available.

2025-12-16: 📣 We added experimental speakers to <a href="docs/vibevoice-realtime-0.5b.md"><strong>VibeVoice‑Realtime‑0.5B</strong></a> for exploration, including multilingual voices in nine languages (DE, FR, IT, JP, KR, NL, PL, PT, ES) and 11 distinct English style voices. [Try it](docs/vibevoice-realtime-0.5b.md#optional-more-experimental-voices). More speaker types will be added over time.

2025-12-03: 📣 We open-sourced <a href="docs/vibevoice-realtime-0.5b.md"><strong>VibeVoice‑Realtime‑0.5B</strong></a>, a real‑time text‑to‑speech model that supports streaming text input and robust long-form speech generation. Try it on [Colab](https://colab.research.google.com/github/microsoft/VibeVoice/blob/main/demo/vibevoice_realtime_colab.ipynb).


2025-09-05: VibeVoice is an open-source research framework intended to advance collaboration in the speech synthesis community. After release, we discovered instances where the tool was used in ways inconsistent with the stated intent. Since responsible use of AI is one of Microsoft’s guiding principles, we have removed the VibeVoice-TTS code from this repository.


2025-08-25: 📣 We open-sourced <a href="docs/vibevoice-tts.md"><strong>VibeVoice-TTS</strong></a>, a long-form multi-speaker text-to-speech model that can synthesize speech up to 90 minutes long with up to 4 distinct speakers. — accepted as an [Oral](https://openreview.net/forum?id=FihSkzyxdv) at ICLR 2026! 🔥

</div>

## Overview

VibeVoice is a **family of open-source frontier voice AI models** that includes both Text-t