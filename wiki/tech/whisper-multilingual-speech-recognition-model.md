# Whisper: Multilingual Speech Recognition Model

> Whisper is a robust speech recognition model capable of handling multilingual speech recognition, translation, and language identification, all trained on a diverse dataset using weak supervision. It is notable for its ability to perform multiple speech tasks with a single model.
> Last updated: 2026-05-13

## Overview

Whisper is a general-purpose speech recognition model developed by OpenAI. It is designed to handle a variety of speech processing tasks, including multilingual speech recognition, speech translation, spoken language identification, and voice activity detection. The model is trained on a large dataset of diverse audio, making it highly versatile. The model is built using a Transformer sequence-to-sequence architecture and is trained via large-scale weak supervision.

The codebase is written in Python and is compatible with Python versions 3.8–3.11. It requires PyTorch and additional packages like `tiktoken` for fast tokenization. Installation is straightforward via pip, and it also requires the command-line tool `ffmpeg` for audio processing.

Whisper supports six model sizes, offering a balance between speed and accuracy. The smallest (`tiny`) and largest (`large`) models are available in both English-only and multilingual variants. These models vary in memory usage and inference speed, with the largest model requiring more VRAM but offering higher accuracy.

## Key Points
- Whisper is a multitask model capable of performing speech recognition, translation, language identification, and voice activity detection using a single model.
- It supports over 100 languages, making it highly multilingual and globally applicable.
- The model uses a Transformer-based architecture and is trained on a large dataset, enabling it to generalize well across diverse audio inputs.
- It is designed for ease of use and can be deployed on various platforms, including via the command-line interface or integration into Python applications.

## Sources
- [GitHub](https://github.com/openai/whisper)
- [원본](raw/ingest/tech/2026-05-13-whisper-multilingual-speech-recognition-model.md)