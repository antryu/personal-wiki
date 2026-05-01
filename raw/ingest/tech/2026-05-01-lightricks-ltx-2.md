<!-- GitHub Trending: Python | 6,250 stars | +30 today -->

# Lightricks/LTX-2

> Official Python inference and LoRA trainer package for the LTX-2 audio–video generative model.

## Repository Info
- **URL**: https://github.com/Lightricks/LTX-2
- **Stars**: 6,250
- **Forks**: 1,002
- **Language**: Python
- **License**: Other
- **Created**: 2026-01-03
- **Updated**: 2026-05-01
- **Topics**: generative-ai, ltx, ltx-2
- **Open Issues**: 92

## README (excerpt)
# LTX-2

[![Website](https://img.shields.io/badge/Website-LTX-181717?logo=google-chrome)](https://ltx.io)
[![Model](https://img.shields.io/badge/HuggingFace-Model-orange?logo=huggingface)](https://huggingface.co/Lightricks/LTX-2.3)
[![Demo](https://img.shields.io/badge/Demo-Try%20Now-brightgreen?logo=data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAAXNSR0IArs4c6QAAAERlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAAAFKADAAQAAAABAAAAFAAAAACy3fD9AAACmElEQVQ4Ea1VP2haYRA/fRo0mESRIIqb2IwxuNUl0CGFQBC6OAWcikMottCpqYtDQIgdQsBFhAjZqiQhbhmySJBOgmNU0EGCg9r61Bivd0ffoykE0iQH37/77n7f3e/uqQFIPB7P/N3d3QeDwfAFEedZ91ghnyH5JM1m87dWq6UavF6vdTKZfDcajW/p4rE49+wIFMj33Gq1vlNo+kxg758KpiETqP/29vaXweVyqaS0aBfPXEfGFwTjWCwM+KBQoWA4HAJx/KDNvxcmTTGbzYAH8SljOp2C2+2GjY0NqNfrcHFxAXNzc2LDfCuKIq78KBdFOwsgGzidTnA4HHBzcwO9Xg8sFgtsbm7C3t4eVCoVaDQa0O12YXl5GUwmk5z5cZ/PB6PRCNrttgADFQUXFhbw8PAQVVXF3d1dJAeMx+P0zn0Jh8OYz+eRADCRSGAqlcLxeIz7+/u4tLSEjKUDZrNZ8U4mk0jR4fr6Op6enoru+voa0+k0rq2tYTAYxE6ng9QiSLRgrVZDv9+PFLkA6kUhT+GEC8C8XF5ewtHRkejICShiaDabwPvj42NJm3k7ODiQdDl9Fr0ocqJpdXUVIpEIdz7Y7XZRr6ysQDQahXK5LORvbW1p5rC9vQ2UifAooBqHuVxO0vt72tnZwWq1qqtisRgWCgU5ZzIZPDk50fdUUEmZvxTmAgKBgAxunT/fJpRKJWmhUCgEVDi4uroSG46kWCzC4uKitNVgMICzszOhSgA5fiJZhp4Lbbh1KARpbF65D/lx3vMdP05Vlkf5zKIDyukFJi7N6AVwNAhVsdlsM+LsjaZ56sq8kyQUqs4P6rsAKV49B4x4Padf7Y9Kv9+fEmiBQH8S4Gsa5v8EHpL9VwL7xH8BvwEcd4ccVf02KQAAAABJRU5ErkJggg==)](https://console.ltx.video/playground)
[![Paper](https://img.shields.io/badge/Paper-PDF-EC1C24?logo=adobeacrobatreader&logoColor=white)](https://arxiv.org/abs/2601.03233)
[![Discord](https://img.shields.io/badge/Join-Discord-5865F2?logo=discord)](https://discord.gg/ltxplatform)

**LTX-2** is the first DiT-based audio-video foundation model that contains all core capabilities of modern video generation in one model: synchronized audio and video, high fidelity, multiple performance modes, production-ready outputs, API access, and open access.

<div align="center">
  <video src="https://github.com/user-attachments/assets/4414adc0-086c-43de-b367-9362eeb20228" width="70%" poster=""> </video>
</div>

## 🚀 Quick Start

```bash
# Clone the repository
git clone https://github.com/Lightricks/LTX-2.git
cd LTX-2

# Set up the environment
uv sync --frozen
source .venv/bin/activate
```

### Required Models

Download the following models from the [LTX-2.3 HuggingFace repository](https://huggingface.co/Lightricks/LTX-2.3):

**LTX-2.3 Model Checkpoint** (choose and download one of the following)
  * [`ltx-2.3-22b-dev.safetensors`](https://huggingface.co/Lightricks/LTX-2.3/blob/main/ltx-2.3-22b-dev.safetensors) - [Download](https://huggingface.co/Lightricks/LTX-2.3/resolve/main/ltx-2.3-22b-dev.safetensors)
  * [`ltx-2.3-22b-distilled-1.1.safetensors`](https://huggingface.co/Lightricks/LTX-2.3/blob/main/ltx-2.3-22b-distilled-1.1.safetensors) - [Download](https://huggingface.co/Lightricks/LTX-2.3/resolve/main/ltx-2.3-22b-distilled-1.1.safetensors)

**Spatial Upscaler** - Required for current two-stage pipeline implementations in this repository
  * [`ltx-2.3-spatial-upscaler-x2-1.1.safetensors`](https://huggingface.co/Lightricks/LTX-2.3/blob/main/ltx-2.3-spatial-upscaler-x2-1.1.safetensors) - [Download](https://huggingface.co/Lightricks/LTX-2.3/resolve/main/ltx-2.3-spatial-upscaler-x2-1.1.safetensors)
  * [`ltx-2.3-spatial-upscaler-x1.5-1.0.safetensors`](https://huggingface.co/Lightricks/LTX-2.3/blob/main/ltx-2.3-spatial-upscaler-x1.5-1.0.safetensors) - [Download](https://huggingface.co/Lightricks/LTX-2.3/resolve/main/ltx-2.3-spatial-upscaler-x1.5-1.0.safetensors)

**Temporal Upscaler** - Supported by the model and will be required for future pipeline implementations
  * [`ltx-2.3-temporal-upscaler-x2-1.0.safetensors`](https://huggingface.co/Lightricks/LTX-2.3/blob/main/ltx-2.3-temporal-upscaler-x2-1.0.safetensors) - [Download](https://huggingface.co/Lightricks/LTX-2.3/resolve/main/ltx-2.3-temporal-upscaler-x2-1.0.safetensors)

**Distilled LoRA** - Required f