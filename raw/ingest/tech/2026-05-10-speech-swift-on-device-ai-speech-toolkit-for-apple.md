<!-- GitHub Trending: Swift | 706 stars | +2 today -->

# soniqo/speech-swift

> AI speech toolkit for Apple Silicon — ASR, TTS, speech-to-speech, VAD, and diarization powered by MLX and CoreML

## Repository Info
- **URL**: https://github.com/soniqo/speech-swift
- **Stars**: 706
- **Forks**: 89
- **Language**: Swift
- **License**: Apache License 2.0
- **Created**: 2026-02-04
- **Updated**: 2026-05-10
- **Topics**: apple-silicon, asr, coreml, ios, macos, mlx, neural-engine, on-device, speaker-diarization, speech-enhancement, speech-recognition, speech-to-speech, swift, text-to-speech, tts, voice-activity-detection
- **Open Issues**: 7

## README (excerpt)
# Speech Swift

AI speech models for Apple Silicon, powered by MLX Swift and CoreML.

📖 Read in: [English](README.md) · [中文](README_zh.md) · [日本語](README_ja.md) · [한국어](README_ko.md) · [Español](README_es.md) · [Deutsch](README_de.md) · [Français](README_fr.md) · [हिन्दी](README_hi.md) · [Português](README_pt.md) · [Русский](README_ru.md)

On-device speech recognition, synthesis, and understanding for Mac and iOS. Runs locally on Apple Silicon — no cloud, no API keys, no data leaves your device.

**[📚 Full Documentation →](https://soniqo.audio)** · **[🤗 HuggingFace Models](https://huggingface.co/aufklarer)** · **[📝 Blog](https://blog.ivan.digital)** · **[💬 Discord](https://discord.gg/TnCryqEMgu)**

- **[Qwen3-ASR](https://soniqo.audio/guides/transcribe)** — Speech-to-text (automatic speech recognition, 52 languages, MLX + CoreML)
- **[Parakeet TDT](https://soniqo.audio/guides/parakeet)** — Speech-to-text via CoreML (Neural Engine, NVIDIA FastConformer + TDT decoder, 25 languages)
- **[Omnilingual ASR](https://soniqo.audio/guides/omnilingual)** — Speech-to-text (Meta wav2vec2 + CTC, **1,672 languages** across 32 scripts, CoreML 300M + MLX 300M/1B/3B/7B)
- **[Streaming Dictation](https://soniqo.audio/guides/dictate)** — Real-time dictation with partials and end-of-utterance detection (Parakeet-EOU-120M)
- **[Nemotron Streaming](https://soniqo.audio/guides/nemotron)** — Low-latency streaming ASR with native punctuation and capitalization (NVIDIA Nemotron-Speech-Streaming-0.6B, CoreML, English)
- **[Qwen3-ForcedAligner](https://soniqo.audio/guides/align)** — Word-level timestamp alignment (audio + text → timestamps)
- **[Qwen3-TTS](https://soniqo.audio/guides/speak)** — Text-to-speech (highest quality, streaming, custom speakers, 10 languages)
- **[CosyVoice TTS](https://soniqo.audio/guides/cosyvoice)** — Streaming TTS with voice cloning, multi-speaker dialogue, emotion tags (9 languages)
- **[Kokoro TTS](https://soniqo.audio/guides/kokoro)** — On-device TTS (82M, CoreML/Neural Engine, 54 voices, iOS-ready, 10 languages)
- **[VibeVoice TTS](https://soniqo.audio/guides/vibevoice)** — Long-form / multi-speaker TTS (Microsoft VibeVoice Realtime-0.5B + 1.5B, MLX, up to 90-min podcast/audiobook synthesis, EN/ZH)
- **[Qwen3.5-Chat](https://soniqo.audio/guides/chat)** — On-device LLM chat (0.8B, MLX INT4 + CoreML INT8, DeltaNet hybrid, streaming tokens)
- **[MADLAD-400](https://soniqo.audio/guides/translate)** — Many-to-many translation across 400+ languages (3B, MLX INT4 + INT8, T5 v1.1, Apache 2.0)
- **[PersonaPlex](https://soniqo.audio/guides/respond)** — Full-duplex speech-to-speech (7B, audio in → audio out, 18 voice presets)
- **[DeepFilterNet3](https://soniqo.audio/guides/denoise)** — Real-time noise suppression (2.1M params, 48 kHz)
- **[Source Separation](https://soniqo.audio/guides/separate)** — Music source separation via Open-Unmix (UMX-HQ / UMX-L, 4 stems: vocals/drums/bass/other, 44.1 kHz stereo)
- **[Wake-word](https://soniqo.audio/guides/wake-word)** — On-device keyword spotting (KWS Zipformer 3M, CoreML, 26× real-time, configurable keyword list)
- **[VAD](https://soniqo.audio/guides/vad)** — Voice activity detection (Silero streaming, Pyannote offline, FireRedVAD 100+ languages)
- **[Speaker Diarization](https://soniqo.audio/guides/diarize)** — Who spoke when (Pyannote pipeline, Sortformer end-to-end on Neural Engine)
- **[Speaker Embeddings](https://soniqo.audio/guides/embed-speaker)** — WeSpeaker ResNet34 (256-dim), CAM++ (192-dim)

Papers: [Qwen3-ASR](https://arxiv.org/abs/2601.21337) (Alibaba) · [Qwen3-TTS](https://arxiv.org/abs/2601.15621) (Alibaba) · [Omnilingual ASR](https://arxiv.org/abs/2511.09690) (Meta) · [Parakeet TDT](https://arxiv.org/abs/2304.06795) (NVIDIA) · [CosyVoice 3](https://arxiv.org/abs/2505.17589) (Alibaba) · [Kokoro](https://arxiv.org/abs/2301.01695) (StyleTTS 2) · [PersonaPlex](https://arxiv.org/abs/2602.06053) (NVIDIA) · [Mimi](https://arxiv.org/abs/2410.00037) (Kyutai) · [Sortformer](htt