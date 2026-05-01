<!-- GitHub Trending: Python | 753 stars | +48 today -->

# Tencent/AngelSlim

> Model compression toolkit engineered for enhanced usability, comprehensiveness, and efficiency.

## Repository Info
- **URL**: https://github.com/Tencent/AngelSlim
- **Stars**: 753
- **Forks**: 92
- **Language**: Python
- **License**: Other
- **Created**: 2025-07-04
- **Updated**: 2026-05-01
- **Topics**: audio, deepseek, dflash, diffusion, eagle, fp4, hunyuan, llm, llm-compression, quantization, qwen, speculative-decoding, vlm
- **Open Issues**: 45

## README (excerpt)
English | [简体中文](README_cn.md)

<p align="center">
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="./docs/source/assets/logos/angelslim_logo_light.png">
    <img alt="AngelSlim" src="./docs/source/assets/logos/angelslim_logo.png" width=55%>
  </picture>
</p>

<h3 align="center">
A more accessible, comprehensive, and efficient toolkit for large model compression.
</h3>

<p align="center">
          ✒️ <a href="https://arxiv.org/abs/2602.21233">TechnicalReport</a>&nbsp&nbsp | &nbsp&nbsp 📖 <a href="https://angelslim.readthedocs.io/">Documentation</a>&nbsp&nbsp | &nbsp&nbsp🤗 <a href="https://huggingface.co/AngelSlim">Hugging Face</a>&nbsp&nbsp | &nbsp&nbsp🤖 <a href="https://modelscope.cn/organization/AngelSlim">ModelScope</a>
<br>
</p>

<p align="center">
          💬 <a href="./docs/source/assets/angel_slim_wechat.png">WeChat</a> | &nbsp&nbsp🫨 <a href="https://discord.com/invite/dHVNeuNdFt">Discord</a>
<br>
</p>

## 📣Latest News
- [26/04/29] We have released 2-bit and 1.25-bit versions of Tencent Hy-MT1.5-1.8B Translation Model: [Hy-MT1.5-1.8B-2bit](https://huggingface.co/AngelSlim/Hy-MT1.5-1.8B-2bit) and [Hy-MT1.5-1.8B-1.25bit](https://huggingface.co/AngelSlim/Hy-MT1.5-1.8B-1.25bit). Additionally, we have make an [offline translation demo](https://huggingface.co/AngelSlim/Hy-MT1.5-1.8B-1.25bit/blob/main/Hy-MT-demo.apk) for you to try out. We invite you to give it a spin! 🔥🔥🔥
- [26/04/23] We now support FP8-Static quantization for **Hy3-preview** (MoE A20B).
- [26/03/25] We have released **DAQ**, the quantization algorithm that preserves the knowledge acquired while the update of parameters is relatively small during post-training training.[[Paper]](https://arxiv.org/abs/2603.22324) | [[Docs]](docs/source/features/quantization/daq.md)
- [26/02/09] We have released HY-1.8B-2Bit, 2bit on-device large language model,[[Huggingface]](https://huggingface.co/AngelSlim/HY-1.8B-2Bit).
- [26/01/13] We have released v0.3. We support the training and deployment of Eagle3 for all-scale LLMs/VLMs/Audio models, as detailed in the [guidance documentation](https://angelslim.readthedocs.io/zh-cn/latest/features/speculative_decoding/eagle/index.html). And We released **Sherry**, the hardware-efficient 1.25 bit quantization algorithm [[Paper]](https://arxiv.org/abs/2601.07892) | [[Code]](https://github.com/Tencent/AngelSlim/tree/sherry/Sherry)🔥🔥🔥

<details>
<summary>Previous News</summary>

- [25/11/05] We have released v0.2. Quantization support for new models, such as `GLM-4.6`, `Qwen3-VL` and `Qwen3-Omni`, open-sources the Eagle3 speculative decoding training framework, and updates the Diffusion model quantization tools.
- [25/09/30] We have released **SpecExit**, the reasoning early-exit algorithm: [[Paper]](http://arxiv.org/abs/2509.24248) | [[Docs]](https://angelslim.readthedocs.io/zh-cn/latest/features/speculative_decoding/spec_exit.html) | [[vLLM Code]](https://github.com/vllm-project/vllm/pull/27192)
- [25/09/26] We have released **TEQUILA**, the ternary quantization algorithm [[Paper]](https://arxiv.org/abs/2509.23809) | [[Code]](https://github.com/Tencent/AngelSlim/tree/tequila/TernaryQuant)
- [25/09/24] We now support the PTQ quantization of NVFP4 for the Qwen3 series models. We also opensource [Qwen3-32B-NVFP4](https://huggingface.co/AngelSlim/Qwen3-32B_nvfp4) and [Qwen3-235B-A22B-NVFP4](https://huggingface.co/AngelSlim/Qwen3-235B-A22B_nvfp4) weights.
- [25/09/01] We now support ​FP8 quantization​ of the [Hunyuan-MT-7B](https://huggingface.co/tencent/Hunyuan-MT-7B-fp8) translation model. And enabled ​Torch inference and Benchmark evaluation​ for Eagle3. And implemented support for ​quantization and Cache​ for [FLUX](https://github.com/Tencent/AngelSlim/tree/main/configs/flux). And support ​quantization​ for the [Seed-OSS](https://github.com/Tencent/AngelSlim/tree/main/configs/seed_oss).
- [25/08/06] We now support quantization for `Hunyuan 0.5B/1.8B/4B/7B` and multimodal model `Qwen2.5VL 3B/7B/32B/72B`, i