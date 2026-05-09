<!-- GitHub Trending: Swift | 2,901 stars | +11 today -->

# supertone-inc/supertonic

> Lightning-Fast, On-Device, Multilingual TTS — running natively via ONNX.

## Repository Info
- **URL**: https://github.com/supertone-inc/supertonic
- **Stars**: 2,901
- **Forks**: 260
- **Language**: Swift
- **License**: MIT License
- **Created**: 2025-11-18
- **Updated**: 2026-05-09
- **Topics**: cpp, csharp, go, ios, java, lightweight, nodejs, on-device, python, rust, swift, text-to-speech, tts, web
- **Open Issues**: 72

## README (excerpt)
# Supertonic — Lightning Fast, On-Device, Accurate TTS

[![v3 Demo](https://img.shields.io/badge/🤗%20v3-Demo-yellow)](https://huggingface.co/spaces/Supertone/supertonic-3)
[![v3 Models](https://img.shields.io/badge/🤗%20v3-Models-blue)](https://huggingface.co/Supertone/supertonic-3)
[![v2 Branch](https://img.shields.io/badge/v2-release%2Fsupertonic--2-lightgrey)](https://github.com/supertone-inc/supertonic/tree/release/supertonic-2)
[![v1 Demo](https://img.shields.io/badge/🤗%20v1%20(old)-Demo-lightgrey)](https://huggingface.co/spaces/Supertone/supertonic#interactive-demo)
[![v1 Models](https://img.shields.io/badge/🤗%20v1%20(old)-Models-lightgrey)](https://huggingface.co/Supertone/supertonic)

<p align="center">
  <img src="img/Supertonic3_HeroImage.png" alt="Supertonic 3 Banner">
</p>

**Supertonic** is a lightning-fast, on-device text-to-speech system designed for local inference with minimal overhead. Powered by ONNX Runtime, it runs entirely on your device—no cloud, no API calls, no privacy concerns.

### 📰 Update News

- **2026.04.29** - 🎉 **Supertonic 3** released with **31-language support**, improved reading accuracy, fewer repeat/skip failures, and v2-compatible public ONNX assets. [Demo](https://huggingface.co/spaces/Supertone/supertonic-3) | [Models](https://huggingface.co/Supertone/supertonic-3)
- **2026.01.22** - **[Voice Builder](https://supertonic.supertone.ai/voice_builder)** is now live! Turn your voice into a deployable, edge-native TTS with permanent ownership.
- **2026.01.06** - 🎉 **Supertonic 2** released with 5-language support. The v2 code path is preserved on the [`release/supertonic-2`](https://github.com/supertone-inc/supertonic/tree/release/supertonic-2) branch.
- **2025.12.10** - Added `supertonic` PyPI package! Install via `pip install supertonic`. For details, visit [supertonic-py documentation](https://supertone-inc.github.io/supertonic-py)
- **2025.12.10** - Added [6 new voice styles](https://huggingface.co/Supertone/supertonic/tree/b10dbaf18b316159be75b34d24f740008fddd381) (M3, M4, M5, F3, F4, F5). See [Voices](https://supertone-inc.github.io/supertonic-py/voices/) for details
- **2025.12.08** - Optimized ONNX models via [OnnxSlim](https://github.com/inisis/OnnxSlim) now available on [Hugging Face Models](https://huggingface.co/Supertone/supertonic)
- **2025.11.24** - Added Flutter SDK support with macOS compatibility

## Quick Start

Install the Python SDK and generate speech immediately. On the first run, Supertonic downloads the model assets from Hugging Face automatically.

```bash
pip install supertonic
```

### Python

```python
from supertonic import TTS

# First run downloads the model from Hugging Face automatically.
tts = TTS(auto_download=True)

style = tts.get_voice_style(voice_name="M1")

text = "A gentle breeze moved through the open window while everyone listened to the story."
wav, duration = tts.synthesize(text, voice_style=style, lang="en")

tts.save_audio(wav, "output.wav")
print(f"Generated {duration:.2f}s of audio")
```

## Getting Started

First, clone the repository:

```bash
git clone https://github.com/supertone-inc/supertonic.git
cd supertonic
```

### Prerequisites

Before running the examples, download the ONNX models and preset voices, and place them in the `assets` directory:

> **Note:** The Hugging Face repository uses Git LFS. Please ensure Git LFS is installed and initialized before cloning or pulling large model files.
> - macOS: `brew install git-lfs && git lfs install`
> - Generic: see `https://git-lfs.com` for installers

```bash
git lfs install
git clone https://huggingface.co/Supertone/supertonic-3 assets
```

Some language examples need native runtimes:
- **Go**: install the ONNX Runtime C library. On macOS, `brew install onnxruntime` is enough; the Go example auto-detects Homebrew paths.
- **Java**: use a JDK, not just a JRE. On macOS, `brew install openjdk@17` works.
- **C#**: targets .NET 9 and allows major-version roll-forward, so .NET 9 or newe