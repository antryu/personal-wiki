<!-- GitHub Trending: Python | 12,404 stars | +26 today -->

# microsoft/TRELLIS

> Official repo for paper "Structured 3D Latents for Scalable and Versatile 3D Generation" (CVPR'25 Spotlight).

## Repository Info
- **URL**: https://github.com/microsoft/TRELLIS
- **Stars**: 12,404
- **Forks**: 1,173
- **Language**: Python
- **License**: MIT License
- **Created**: 2024-12-02
- **Updated**: 2026-05-01
- **Topics**: 3d, 3d-aigc, 3d-generation, image-to-3d, text-to-3d
- **Open Issues**: 252

## README (excerpt)
<img src="assets/logo.webp" width="100%" align="center">
<h1 align="center">Structured 3D Latents<br>for Scalable and Versatile 3D Generation</h1>
<p align="center"><a href="https://arxiv.org/abs/2412.01506"><img src='https://img.shields.io/badge/arXiv-Paper-red?logo=arxiv&logoColor=white' alt='arXiv'></a>
<a href='https://microsoft.github.io/TRELLIS/'><img src='https://img.shields.io/badge/Project_Page-Website-green?logo=googlechrome&logoColor=white' alt='Project Page'></a>
<a href='https://huggingface.co/spaces/Microsoft/TRELLIS'><img src='https://img.shields.io/badge/%F0%9F%A4%97%20Hugging%20Face-Live_Demo-blue'></a>
</p>
<p align="center"><img src="assets/teaser.png" width="100%"></p>

<span style="font-size: 16px; font-weight: 600;">T</span><span style="font-size: 12px; font-weight: 700;">RELLIS</span> is a large 3D asset generation model. It takes in text or image prompts and generates high-quality 3D assets in various formats, such as Radiance Fields, 3D Gaussians, and meshes. The cornerstone of <span style="font-size: 16px; font-weight: 600;">T</span><span style="font-size: 12px; font-weight: 700;">RELLIS</span> is a unified Structured LATent (<span style="font-size: 16px; font-weight: 600;">SL</span><span style="font-size: 12px; font-weight: 700;">AT</span>) representation that allows decoding to different output formats and Rectified Flow Transformers tailored for <span style="font-size: 16px; font-weight: 600;">SL</span><span style="font-size: 12px; font-weight: 700;">AT</span> as the powerful backbones. We provide large-scale pre-trained models with up to 2 billion parameters on a large 3D asset dataset of 500K diverse objects. <span style="font-size: 16px; font-weight: 600;">T</span><span style="font-size: 12px; font-weight: 700;">RELLIS</span> significantly surpasses existing methods, including recent ones at similar scales, and showcases flexible output format selection and local 3D editing capabilities which were not offered by previous models.

***Check out our [Project Page](https://microsoft.github.io/TRELLIS/) for more videos and interactive demos!***

<!-- Features -->
## 🌟 Features
- **High Quality**: It produces diverse 3D assets at high quality with intricate shape and texture details.
- **Versatility**: It takes text or image prompts and can generate various final 3D representations including but not limited to *Radiance Fields*, *3D Gaussians*, and *meshes*, accommodating diverse downstream requirements.
- **Flexible Editing**: It allows for easy editings of generated 3D assets, such as generating variants of the same object or local editing of the 3D asset.

<!-- Updates -->
## ⏩ Updates

**03/25/2025**
- Release training code.
- Release **TRELLIS-text** models and asset variants generation.
  - Examples are provided as [example_text.py](example_text.py) and [example_variant.py](example_variant.py).
  - Gradio demo is provided as [app_text.py](app_text.py).
  - *Note: It is always recommended to do text to 3D generation by first generating images using text-to-image models and then using TRELLIS-image models for 3D generation. Text-conditioned models are less creative and detailed due to data limitations.*

**12/26/2024**
- Release [**TRELLIS-500K**](https://github.com/microsoft/TRELLIS#-dataset) dataset and toolkits for data preparation.

**12/18/2024**
- Implementation of multi-image conditioning for **TRELLIS-image** model. ([#7](https://github.com/microsoft/TRELLIS/issues/7)). This is based on tuning-free algorithm without training a specialized model, so it may not give the best results for all input images.
- Add Gaussian export in `app.py` and `example.py`. ([#40](https://github.com/microsoft/TRELLIS/issues/40))

<!-- Installation -->
## 📦 Installation

### Prerequisites
- **System**: The code is currently tested only on **Linux**.  For windows setup, you may refer to [#3](https://github.com/microsoft/TRELLIS/issues/3) (not fully tested).
- **Hardware**: An NVIDIA GPU with at least 16GB of m