<!-- GitHub Trending: Swift | 415 stars | +11 today -->

# pHequals7/muesli

> Muesli - local meeting transcription + dictation for macOS (Granola + WisprFlow alternative)

## Repository Info
- **URL**: https://github.com/pHequals7/muesli
- **Stars**: 415
- **Forks**: 32
- **Language**: Swift
- **License**: MIT License
- **Created**: 2026-03-05
- **Updated**: 2026-05-13
- **Topics**: N/A
- **Open Issues**: 21

## README (excerpt)
<p align="center">
  <img src="assets/muesli-readme-og.jpg" alt="Muesli - Speech that is free, Speech that is yours" width="900" />
</p>

<h1 align="center">Muesli</h1>

<p align="center">
  <strong>Local-first dictation & meeting transcription for macOS</strong><br>
  100% on-device speech-to-text · Zero cloud costs · Privacy by default
</p>

<p align="center">
  <a href="LICENSE"><img src="https://img.shields.io/badge/license-MIT-blue.svg" alt="MIT License" /></a>
  <a href="https://buymeacoffee.com/phequals7"><img src="https://img.shields.io/badge/Buy%20Me%20A%20Coffee-support-yellow?logo=buymeacoffee&logoColor=white" alt="Buy Me A Coffee" /></a>
  <img src="https://img.shields.io/badge/platform-macOS%2014.2%2B-lightgrey?logo=apple" alt="macOS 14.2+" />
  <img src="https://img.shields.io/badge/Apple%20Silicon-optimized-green" alt="Apple Silicon" />
</p>

---

## What is Muesli?

Muesli is a **lightweight native macOS app** that combines **WisprFlow-style dictation** and **Granola-style meeting transcription** in one tool. All transcription runs locally on Apple Silicon — your audio never leaves your device unless you choose a cloud-backed meeting summary provider.

<p align="center">
  <img src="assets/muesli-github-ss.png" alt="Muesli interface showing dictations and meeting history" width="900" />
</p>

### Dictation
Hold your hotkey (or double-tap for hands-free mode) → speak → release → transcribed text is pasted at your cursor. **~0.13 second latency** via Parakeet TDT on the Apple Neural Engine.

### Meeting Transcription
Start a meeting recording → Muesli captures your mic (You) and system audio (Others) simultaneously → VAD-driven chunked transcription happens during the meeting at natural speech boundaries → speaker diarization identifies individual remote speakers (Speaker 1, Speaker 2, etc.) → when you stop, the transcript is ready in seconds, not minutes. Generate structured meeting notes via OpenAI, free OpenRouter models, your ChatGPT Plus/Pro subscription, or local Ollama models.

---

## Features

- **Native Swift, zero Python** — Pure Swift app with CoreML and Metal backends. No bundled runtimes, no subprocess IPC.
- **Multiple ASR models** — Parakeet TDT (Neural Engine), Cohere Transcribe 2B (mixed precision CoreML), Whisper Small/Medium/Large Turbo (CoreML/ANE via WhisperKit), and Qwen3 ASR (52 languages, CoreML).
- **Hold-to-talk & hands-free** — Hold hotkey for quick dictation, or double-tap for sustained recording.
- **Meeting recording** — Captures mic + system audio (including Bluetooth/AirPods) with a CoreAudio process tap by default and ScreenCaptureKit fallback. System audio from Zoom, Teams, and other call clients stays on the Others side of the transcript.
- **VAD-driven chunk rotation** — Silero VAD detects natural speech boundaries in real-time, splitting mic audio at pauses instead of fixed intervals. No mid-sentence cuts.
- **Speaker diarization** — Identifies individual speakers in system audio (Speaker 1, Speaker 2, etc.) using FluidAudio's pyannote-based CoreML diarization model.
- **Camera-based meeting detection** — Detects when your webcam + mic activate in a recognized meeting app (Zoom, Chrome, Teams, FaceTime, Slack, WhatsApp). Camera alone (e.g. Photo Booth) won't trigger false positives.
- **Join & Record** — Extracts meeting URLs from calendar events (Zoom, Google Meet, Teams, Webex, Chime, FaceTime). Split-button notification: "Join & Record" opens the meeting + starts recording, "Join Only" opens without recording, "Record Only" starts recording without joining. Platform icons (Zoom, Meet) in the notification panel.
- **Google Calendar integration** — Connect your Google Calendar to see upcoming meetings in the Coming Up section and status bar. Event-driven notifications via `EKEventStoreChangedNotification` for instant calendar change detection. Pre-meeting countdowns via Marauder's Map easter egg.
- **Meeting export** — Export meeting notes or transcripts as PDF (paginated US