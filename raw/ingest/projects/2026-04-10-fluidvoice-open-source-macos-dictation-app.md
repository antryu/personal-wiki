<!-- GitHub Trending: Swift | 1,731 stars | +15 today -->

# altic-dev/FluidVoice

> FluidVoice - Fastest macOS Offline Dictation app - Voice to Text fully Local. One ⭐ takes us a long way :)) 

## Repository Info
- **URL**: https://github.com/altic-dev/FluidVoice
- **Stars**: 1,732
- **Forks**: 108
- **Language**: Swift
- **License**: GNU General Public License v3.0
- **Created**: 2025-09-21
- **Updated**: 2026-04-10
- **Topics**: N/A
- **Open Issues**: 34

## README (excerpt)
# FluidVoice

[![Supported Models](https://img.shields.io/badge/Models-Parakeet%20Flash%20%7C%20Parakeet%20v3%20%26%20v2%20%7C%20Cohere%20Transcribe%20%7C%20Apple%20Speech%20%7C%20Whisper-blue)](https://huggingface.co/nvidia/parakeet_realtime_eou_120m-v1)

Fully open source voice-to-text dictation app for macOS with AI enhancement.

**Get the latest release from [here](https://github.com/altic-dev/Fluid-oss/releases/latest)**

> [!IMPORTANT]
> This project is completely free and open source. If you find FluidVoice useful, please star the repository. It helps with visibility and motivates continued development. Your support means a lot.

## Latest Update

- Added **[Parakeet Flash (Beta)](https://huggingface.co/nvidia/parakeet_realtime_eou_120m-v1)** for low-latency live English dictation on Apple Silicon
- Added **Cohere Transcribe** support for higher-accuracy multilingual dictation on Apple Silicon
- Expanded the voice engine lineup with **Parakeet Flash, Parakeet v3/v2, Cohere, Apple Speech, and Whisper**

## Star History

<a href="https://star-history.com/#altic-dev/Fluid-oss&Date">
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="https://api.star-history.com/svg?repos=altic-dev/Fluid-oss&type=Date&theme=dark" />
    <source media="(prefers-color-scheme: light)" srcset="https://api.star-history.com/svg?repos=altic-dev/Fluid-oss&type=Date" />
    <img alt="Star History Chart" src="https://api.star-history.com/svg?repos=altic-dev/Fluid-oss&type=Date" />
  </picture>
</a>

## Demo

### Command Mode - Take any action on your mac using FluidVoice  

https://github.com/user-attachments/assets/ffb47afd-1621-432a-bdca-baa4b8526301

### Write Mode - Write/Rewrite text in ANY text box in ANY App on your mac  

https://github.com/user-attachments/assets/c57ef6d5-f0a1-4a3f-a121-637533442c24

## Screenshots

### Command Mode Preview

![Command Mode Preview](assets/cmd_mode_ss.png)

### FluidVoice History

![FluidVoice History](assets/history__ss.png)

## New Features (v1.5)   
- **Overlay with Notch support**
- **Command Mode**  
- **Write Mode**    
- **New History stats**  
- **Stats to monitor usage**  


## Features
- **Live Preview Mode**: Real-time transcription preview in overlay
- **Multiple Speech Models**: Parakeet Flash, Parakeet TDT v3 & v2, Cohere Transcribe, Apple Speech, and Whisper
- **Real-time transcription** with extremely low latency
- **AI enhancement** with OpenAI, Groq, and custom providers
- **Global hotkey** for instant voice capture
- **Smart typing** directly into any app
- **Menu bar integration** for quick access
- **Auto-updates** with seamless restart
- **Opt-in beta channel** for early preview builds

## Supported Models

| Model | Best for | Language support | Download size | Hardware |
| --- | --- | --- | --- | --- |
| [Parakeet Flash (Beta)](https://huggingface.co/nvidia/parakeet_realtime_eou_120m-v1) | Lowest-latency live English dictation | English only | ~250 MB | Apple Silicon |
| Parakeet TDT v3 | Fast default multilingual dictation | [25 languages](#parakeet-tdt-v3-languages) | ~500 MB | Apple Silicon |
| Parakeet TDT v2 | Fastest English-only dictation | [English only](#parakeet-tdt-v2-languages) | ~500 MB | Apple Silicon |
| Cohere Transcribe | High-accuracy multilingual dictation | [14 languages](#cohere-transcribe-languages) | ~1.4 GB | Apple Silicon |
| Apple Speech | Zero-download native macOS speech recognition | [System languages](#apple-speech-languages) | Built-in | Apple Silicon + Intel |
| Whisper Tiny / Base / Small / Medium / Large | Broad compatibility, including Intel Macs | [99 languages](#whisper-language-support) | ~75 MB to ~2.9 GB | Apple Silicon + Intel |

Notes:
Parakeet Flash is the best pick when you want words to appear live with the lowest latency. Parakeet TDT v3 remains the default multilingual Apple Silicon model. Cohere is the stronger pick if you want a larger multilingual model with higher displayed accuracy. Whisper remains the fallback for I