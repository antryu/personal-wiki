# GLM-OCR: Multimodal OCR Model for Document Understanding

> GLM-OCR is a state-of-the-art multimodal OCR model designed for complex document understanding. Built on the GLM-V encoder-decoder architecture, it excels in layout analysis and recognition, offering high accuracy and efficiency.
> Last updated: 2026-05-10

## Overview
GLM-OCR is a multimodal OCR model for complex document understanding, built on the GLM-V encoder–decoder architecture. It introduces Multi-Token Prediction (MTP) loss and stable full-task reinforcement learning to improve training efficiency, recognition accuracy, and generalization. The model integrates the CogViT visual encoder pre-trained on large-scale image–text data, a lightweight cross-modal connector with efficient token downsampling, and a GLM-0.5B language decoder. Combined with a two-stage pipeline of layout analysis and parallel recognition based on PP-DocLayout-V3, GLM-OCR delivers robust and high-quality OCR performance across diverse document layouts.

### Repository Info
- **URL**: https://github.com/zai-org/GLM-OCR
- **Stars**: 6,440
- **Forks**: 595
- **Language**: Python
- **License**: Apache License 2.0
- **Created**: 2026-02-02
- **Updated**: 2026-05-10
- **Topics**: glm, image2text, ocr
- **Open Issues**: 31

## Key Points
- GLM-OCR achieves a score of 94.62 on OmniDocBench V1.5, ranking #1 overall.
- Optimized for real-world scenarios such as complex tables and code-heavy documents.
- Efficient inference with only 0.9B parameters supports deployment via vLLM, SGLang, and Ollama.
- Easy to use with a comprehensive SDK and inference toolchain.

## Sources
- [GitHub](https://github.com/zai-org/GLM-OCR)
- [원본](raw/ingest/tech/2026-05-10-glm-ocr-multimodal-ocr-model-for-document-understa.md)