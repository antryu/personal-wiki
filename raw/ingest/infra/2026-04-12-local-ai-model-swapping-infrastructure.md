<!-- GitHub Trending: Go | 3,225 stars | +30 today -->

# mostlygeek/llama-swap

> Reliable model swapping for any local OpenAI/Anthropic compatible server - llama.cpp, vllm, etc

## Repository Info
- **URL**: https://github.com/mostlygeek/llama-swap
- **Stars**: 3,226
- **Forks**: 240
- **Language**: Go
- **License**: MIT License
- **Created**: 2024-10-04
- **Updated**: 2026-04-12
- **Topics**: golang, llama, llamacpp, localllama, localllm, openai, openai-api, vllm
- **Open Issues**: 42

## README (excerpt)
![llama-swap header image](docs/assets/hero3.webp)
![GitHub Downloads (all assets, all releases)](https://img.shields.io/github/downloads/mostlygeek/llama-swap/total)
![GitHub Actions Workflow Status](https://img.shields.io/github/actions/workflow/status/mostlygeek/llama-swap/go-ci.yml)
![GitHub Repo stars](https://img.shields.io/github/stars/mostlygeek/llama-swap)

# llama-swap

Run multiple generative AI models on your machine and hot-swap between them on demand. llama-swap works with any OpenAI and Anthropic API compatible server and is used by thousands of people to power their local AI workflows. 

Built in Go for performance and simplicity, llama-swap has zero dependencies and is incredibly easy to set up. Get started in minutes - just one binary and one configuration file.

## Features:

- ✅ Easy to deploy and configure: one binary, one configuration file. no external dependencies
- ✅ On-demand model switching
- ✅ Use any local OpenAI compatible server (llama.cpp, vllm, tabbyAPI, stable-diffusion.cpp, etc.)
  - future proof, upgrade your inference servers at any time.
- ✅ OpenAI API supported endpoints:
  - `v1/completions`
  - `v1/chat/completions`
  - `v1/responses`
  - `v1/embeddings`
  - `v1/audio/speech` ([#36](https://github.com/mostlygeek/llama-swap/issues/36))
  - `v1/audio/transcriptions` ([docs](https://github.com/mostlygeek/llama-swap/issues/41#issuecomment-2722637867))
  - `v1/audio/voices`
  - `v1/images/generations`
  - `v1/images/edits`
- ✅ Anthropic API supported endpoints:
  - `v1/messages`
  - `v1/messages/count_tokens`
- ✅ llama-server (llama.cpp) supported endpoints
  - `v1/rerank`, `v1/reranking`, `/rerank`
  - `/infill` - for code infilling
  - `/completion` - for completion endpoint
- ✅ SDAPI via [stable-diffusion.cpp's server](https://github.com/leejet/stable-diffusion.cpp/tree/master/examples/server)
  - `/sdapi/v1/txt2img`
  - `/sdapi/v1/img2img`
  - `/sdapi/v1/loras` - requires `model` in request body to fetch the correct loras
- ✅ llama-swap API
  - `/ui` - web UI
  - `/upstream/:model_id` - direct access to upstream server ([demo](https://github.com/mostlygeek/llama-swap/pull/31))
  - `/models/unload` - manually unload running models ([#58](https://github.com/mostlygeek/llama-swap/issues/58))
  - `/running` - list currently running models ([#61](https://github.com/mostlygeek/llama-swap/issues/61))
  - `/log` - remote log monitoring
  - `/health` - just returns "OK"
- ✅ API Key support - define keys to restrict access to API endpoints
- ✅ Customizable
  - Run multiple models at once with `Groups` ([#107](https://github.com/mostlygeek/llama-swap/issues/107))
  - Automatic unloading of models after timeout by setting a `ttl`
  - Reliable Docker and Podman support using `cmd` and `cmdStop` together
  - Preload models on startup with `hooks` ([#235](https://github.com/mostlygeek/llama-swap/pull/235))

### Web UI

llama-swap includes a real time web interface with a playground for testing out all sorts of local models: 

<img width="1125" height="876" alt="image" src="https://github.com/user-attachments/assets/8ee41947-97af-463d-b0f0-8e9c478fac07" />

View detailed token metrics:

<img width="1111" height="515" alt="image" src="https://github.com/user-attachments/assets/64bfb280-d7a3-4126-971a-a128fd40410c" />

Inspect request and responses:

<img width="1111" height="720" alt="image" src="https://github.com/user-attachments/assets/24fe4aca-1448-4d7c-b9e8-a967589bda6c" />

Manually load and unload models: 

<img width="1109" height="719" alt="image" src="https://github.com/user-attachments/assets/02b1e1f2-abd0-4050-84ae-facd66ff01c4" />


Real time log streaming: 

<img width="1107" height="559" alt="image" src="https://github.com/user-attachments/assets/39669a10-cff2-409e-836a-5bad8bd0140c" />


## Installation

llama-swap can be installed in multiple ways

1. Docker
2. Homebrew (OSX and Linux)
3. WinGet
4. From release binaries
5. From source

### Docker Install ([download images](https://github