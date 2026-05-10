<!-- GitHub Trending: Python | 6,440 stars | +60 today -->

# zai-org/GLM-OCR

> GLM-OCR: Accurate ×  Fast × Comprehensive

## Repository Info
- **URL**: https://github.com/zai-org/GLM-OCR
- **Stars**: 6,440
- **Forks**: 595
- **Language**: Python
- **License**: Apache License 2.0
- **Created**: 2026-02-02
- **Updated**: 2026-05-10
- **Topics**: glm, image2text, ocr
- **Open Issues**: 31

## README (excerpt)
## GLM-OCR

[中文阅读](README_zh.md)

<div align="center">
<img src=resources/logo.svg width="40%"/>
</div>
<p align="center">
    👋 Join our <a href="resources/WECHAT.md" target="_blank">WeChat</a> and <a href="https://discord.gg/QR7SARHRxK" target="_blank">Discord</a> community
    <br>
    📖 Check out the GLM-OCR <a href="https://arxiv.org/abs/2603.10910" target="_blank">technical report</a>
    <br>
    📍 Use GLM-OCR's <a href="https://docs.z.ai/guides/vlm/glm-ocr" target="_blank">API</a>
</p>

### Model Introduction

GLM-OCR is a multimodal OCR model for complex document understanding, built on the GLM-V encoder–decoder architecture. It introduces Multi-Token Prediction (MTP) loss and stable full-task reinforcement learning to improve training efficiency, recognition accuracy, and generalization. The model integrates the CogViT visual encoder pre-trained on large-scale image–text data, a lightweight cross-modal connector with efficient token downsampling, and a GLM-0.5B language decoder. Combined with a two-stage pipeline of layout analysis and parallel recognition based on PP-DocLayout-V3, GLM-OCR delivers robust and high-quality OCR performance across diverse document layouts.

**Key Features**

- **State-of-the-Art Performance**: Achieves a score of 94.62 on OmniDocBench V1.5, ranking #1 overall, and delivers state-of-the-art results across major document understanding benchmarks, including formula recognition, table recognition, and information extraction.

- **Optimized for Real-World Scenarios**: Designed and optimized for practical business use cases, maintaining robust performance on complex tables, code-heavy documents, seals, and other challenging real-world layouts.

- **Efficient Inference**: With only 0.9B parameters, GLM-OCR supports deployment via vLLM, SGLang, and Ollama, significantly reducing inference latency and compute cost, making it ideal for high-concurrency services and edge deployments.

- **Easy to Use**: Fully open-sourced and equipped with a comprehensive [SDK](https://github.com/zai-org/GLM-OCR) and inference toolchain, offering simple installation, one-line invocation, and smooth integration into existing production pipelines.

### News & Updates

- **[2026.3.12]** GLM-OCR SDK now supports agent-friendly Skill mode — just `pip install glmocr` + set API key, ready to use via CLI or Python with no GPU or YAML config needed. See: [GLM-OCR Skill](skills/glmocr/SKILL.md)
- **[2026.3.12]** GLM-OCR Technical Report is now available. See: [GLM-OCR Technical Report](https://arxiv.org/abs/2603.10910)
- **[2026.2.12]** Fine-tuning tutorial based on LLaMA-Factory is now available. See: [GLM-OCR Fine-tuning Guide](examples/finetune/README.md)

### Download Model

| Model   | Download Links                                                                                                              | Precision |
| ------- | --------------------------------------------------------------------------------------------------------------------------- | --------- |
| GLM-OCR | [🤗 Hugging Face](https://huggingface.co/zai-org/GLM-OCR)<br> [🤖 ModelScope](https://modelscope.cn/models/ZhipuAI/GLM-OCR) | BF16      |

## GLM-OCR SDK

We provide an SDK for using GLM-OCR more efficiently and conveniently.

### Install SDK

Choose the lightest installation that matches your scenario:

```bash
# Cloud / MaaS + local images / PDFs (fastest install)
pip install glmocr

# Self-hosted pipeline (layout detection)
pip install "glmocr[selfhosted]"

# Flask service support
pip install "glmocr[server]"
```

Install from source for development:

```bash
# Install from source
git clone https://github.com/zai-org/glm-ocr.git
cd glm-ocr
uv venv --python 3.12 --seed && source .venv/bin/activate
uv pip install -e .
```

### Model Deployment

Two ways to use GLM-OCR:

#### Option 1: Zhipu MaaS API (Recommended for Quick Start)

Use the hosted cloud API – no GPU needed. The cloud service runs the complete GLM-OCR pipeline internally, so t