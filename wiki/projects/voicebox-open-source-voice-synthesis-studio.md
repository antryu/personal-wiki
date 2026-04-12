# Voicebox: Open-Source Voice Synthesis Studio

> Voicebox is a local-first voice cloning studio offering privacy-focused voice synthesis, supporting 5 TTS engines, 23 languages, and post-processing effects. It serves as an open-source alternative to commercial tools like ElevenLabs.  
> Last updated: 2026-04-12

## Overview

**Voicebox** is an open-source voice synthesis platform enabling users to clone voices, generate speech, apply audio effects, and build voice-powered applications entirely locally. Key features include:

- **Privacy-first design**: All models and voice data remain on the user's machine.
- **Multi-engine support**: Five TTS engines (Qwen3-TTS, LuxTTS, Chatterbox Multilingual, Chatterbox Turbo, HumeAI TADA) with language and performance tradeoffs.
- **Cross-platform compatibility**: Runs natively on macOS (MLX/Metal), Windows (CUDA), Linux, AMD ROCm, Intel Arc, and Docker.
- **Advanced editing**: Timeline-based "Stories" editor for multi-voice projects, paralinguistic tags (e.g., `[laugh]`), and unlimited-length text-to-speech via auto-chunking.
- **Performance**: Built with Tauri (Rust) for native performance, avoiding Electron's overhead.

### Repository Info
- **Stars**: 15,320  
- **Forks**: 1,833  
- **Language**: TypeScript  
- **License**: MIT License  
- **Created**: 2026-01-25  
- **Open Issues**: 204  

### TTS Engine Comparison
| Engine                  | Languages | Strengths                          |
|-------------------------|-----------|------------------------------------|
| Qwen3-TTS               | 23        | High-quality, multilingual         |
| LuxTTS                  | 10        | Fast inference, low latency        |
| Chatterbox Multilingual | 15        | Broad language support             |
| Chatterbox Turbo        | 8         | Speed-optimized, paralinguistic tags |
| HumeAI TADA             | 5         | Emotional tone modeling            |

---

## Key Points
- Supports voice cloning from seconds of audio, with post-processing effects (reverb, pitch shift, etc.).
- Offers REST API for custom integrations and app development.
- Provides pre-built binaries for macOS, Windows, and Docker; Linux requires manual installation.

## Sources
- [GitHub](https://github.com/jamiepine/voicebox)
- [원본](raw/ingest/projects/2026-04-12-voicebox-open-source-voice-synthesis-studio.md)