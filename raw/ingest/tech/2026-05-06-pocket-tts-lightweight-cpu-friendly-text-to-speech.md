<!-- GitHub Trending: Python | 4,224 stars | +38 today -->

# kyutai-labs/pocket-tts

> A TTS that fits in your CPU (and pocket)

## Repository Info
- **URL**: https://github.com/kyutai-labs/pocket-tts
- **Stars**: 4,224
- **Forks**: 468
- **Language**: Python
- **License**: MIT License
- **Created**: 2026-01-07
- **Updated**: 2026-05-06
- **Topics**: N/A
- **Open Issues**: 43

## README (excerpt)
# Pocket TTS

<img width="1446" height="622" alt="pocket-tts-logo-v2-transparent" src="https://github.com/user-attachments/assets/637b5ed6-831f-4023-9b4c-741be21ab238" />

A lightweight text-to-speech (TTS) application designed to run efficiently on CPUs.
Forget about the hassle of using GPUs and web APIs serving TTS models. With Kyutai's Pocket TTS, generating audio is just a pip install and a function call away.

Supports Python 3.10, 3.11, 3.12, 3.13 and 3.14. Requires PyTorch 2.5+. Does not require the gpu version of PyTorch.

[🔊 Demo](https://kyutai.org/pocket-tts) | 
[🐱‍💻GitHub Repository](https://github.com/kyutai-labs/pocket-tts) | 
[🤗 Hugging Face Model Card](https://huggingface.co/kyutai/pocket-tts) | 
[⚙️ Tech report](https://kyutai.org/blog/2026-01-13-pocket-tts) |
[📄 Paper](https://arxiv.org/abs/2509.06926) | 
[📚 Documentation](https://kyutai-labs.github.io/pocket-tts/)


## Main takeaways
* Runs on CPU
* Small model size, 100M parameters
* Audio streaming
* Low latency, ~200ms to get the first audio chunk
* Faster than real-time, ~6x real-time on a CPU of MacBook Air M4
* Uses only 2 CPU cores
* Python API and CLI
* Voice cloning
* Multi-language support: english, french, german, portuguese, italian, spanish
* Can handle infinitely long text inputs
* [Can run on client-side in the browser](#in-browser-implementations)

Additional languages may be added in the future.

## Trying it from the website, without installing anything

Navigate to the [Kyutai website](https://kyutai.org/pocket-tts) to try it out directly in your browser. You can input text, select different voices, and generate speech without any installation.

## Trying it with the CLI

### The `generate` command
You can use pocket-tts directly from the command line. We recommend using
`uv` as it installs any dependencies on the fly in an isolated environment (uv installation instructions [here](https://docs.astral.sh/uv/getting-started/installation/#standalone-installer)).
You can also use `pip install pocket-tts` to install it manually.

This will generate a wav file `./tts_output.wav` saying the default text with the default voice, and display some speed statistics.
```bash
uvx pocket-tts generate
# or if you installed it manually with pip:
pocket-tts generate
```
Modify the voice with `--voice` and the text with `--text`. We provide a small catalog of voices.
Choose a pretrained language model with `--language` when running `generate`, `export-voice`, or `serve` (default: `english`). Non-english languages have also biggers 24 layers variants that are higher quality but slower. You can select them by using for example `--language italian_24l`.
The `--config` option accepts only a local YAML path for custom weights.

You can take a look at [this page](https://huggingface.co/kyutai/tts-voices) which details the licenses
for each voice.

* [alba](https://huggingface.co/kyutai/tts-voices/blob/main/alba-mackenna/casual.wav) (en)
* [giovanni](https://huggingface.co/kyutai/pocket-tts/blob/add_lang_not_documented/common_voice_it_36520747-enhanced-v2.mp3) (it)
* [lola](https://huggingface.co/kyutai/pocket-tts/blob/add_lang_not_documented/common_voice_es_19762977-enhanced-v2.mp3) (es)
* [juergen](https://huggingface.co/kyutai/pocket-tts/blob/add_lang_not_documented/de-DE-juergen.mp3) (de)
* [rafael](https://huggingface.co/kyutai/pocket-tts/blob/add_lang_not_documented/g-Vi8PgmSY0-enhanced-v2.wav) (pt)
* [estelle](https://huggingface.co/kyutai/tts-voices/blob/main/unmute-prod-website/developpeuse-3.wav) (fr)
* [anna](https://huggingface.co/kyutai/tts-voices/blob/main/vctk/p228_023_enhanced.wav) (en)
* [azelma](https://huggingface.co/kyutai/tts-voices/blob/main/vctk/p303_023_enhanced.wav) (en)
* [bill_boerst](https://huggingface.co/kyutai/tts-voices/blob/main/voice-zero/bill_boerst.wav) (en)
* [caro_davy](https://huggingface.co/kyutai/tts-voices/blob/main/voice-zero/caro_davy.wav) (en)
* [charles](https://huggingface.co/kyutai/tts-voices/blob/main/vctk/p254