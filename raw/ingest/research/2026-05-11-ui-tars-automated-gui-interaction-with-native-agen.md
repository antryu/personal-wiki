<!-- GitHub Trending: Python | 10,429 stars | +67 today -->

# bytedance/UI-TARS

> Pioneering Automated GUI Interaction with Native Agents

## Repository Info
- **URL**: https://github.com/bytedance/UI-TARS
- **Stars**: 10,429
- **Forks**: 771
- **Language**: Python
- **License**: Apache License 2.0
- **Created**: 2025-01-19
- **Updated**: 2026-05-11
- **Topics**: research
- **Open Issues**: 50

## README (excerpt)
<!-- <p align="center">
  <img alt="UI-TARS"  width="260" src="figures/icon.png">
</p>

# UI-TARS: Pioneering Automated GUI Interaction with Native Agents -->
![Local Image](figures/writer.png)
<div align="center">
<p>
        🌐 <a href="https://seed-tars.com/">Website</a>&nbsp&nbsp | 🤗 <a href="https://huggingface.co/ByteDance-Seed/UI-TARS-1.5-7B">Hugging Face Models</a>&nbsp&nbsp 
        | &nbsp&nbsp 🔧 <a href="README_deploy.md">Deployment</a> &nbsp&nbsp  | &nbsp&nbsp 📑 <a href="https://arxiv.org/abs/2501.12326">Paper</a> &nbsp&nbsp  |&nbsp&nbsp</a>
🖥️ <a href="https://github.com/bytedance/UI-TARS-desktop">UI-TARS-desktop</a>&nbsp&nbsp  <br>🏄 <a href="https://github.com/web-infra-dev/Midscene">Midscene (Browser Automation) </a>&nbsp&nbsp | &nbsp&nbsp🫨 <a href="https://discord.gg/pTXwYVjfcs">Discord</a>&nbsp&nbsp
</p>

[![](https://trendshift.io/api/badge/repositories/13561)](https://trendshift.io/repositories/13561)
</div>

We also offer a **UI-TARS-desktop** version, which can operate on your **local personal device**. To use it, please visit [https://github.com/bytedance/UI-TARS-desktop](https://github.com/bytedance/UI-TARS-desktop). To use UI-TARS in web automation, you may refer to the open-source project [Midscene.js](https://github.com/web-infra-dev/Midscene).
**❗Notes**: Since Qwen 2.5vl based models ultilizes absolute coordinates to ground objects, please kindly refer to our illustration about how to process coordinates in this <a href="README_coordinates.md">guide</a>.

## Updates
- 🌟 2025.09.04: We’re excited to announce the release the **UI-TARS-2**, which is a major upgrade from UI-TARS-1.5, featuring with enhanced capabilities in GUI, Game, Code and Tool Use. It is an "All In One" Agent model, enabling seamless integration of multiple abilities for complex tasks. Please check our new [technical report](https://arxiv.org/abs/2509.02544) for more details. Refer to more fantastic showcases at our [website](https://seed-tars.com/showcase/ui-tars-2/).
- 🌟 2025.04.16: We shared the latest progress of the UI-TARS-1.5 model in our [blog](https://seed-tars.com/1.5), which excels in playing games and performing GUI tasks, and we open-sourced the [UI-TARS-1.5-7B](https://huggingface.co/ByteDance-Seed/UI-TARS-1.5-7B).
- ✨ 2025.03.23: We updated the OSWorld inference scripts from the original official [OSWorld repository](https://github.com/xlang-ai/OSWorld/blob/main/run_uitars.py). Now, you can use the OSWorld official inference scripts to reproduce our results.

## Introduction

UI-TARS-1.5, an open-source multimodal agent built upon a powerful vision-language model. It is capable of effectively performing diverse tasks within virtual worlds.

Leveraging the foundational architecture introduced in [our recent paper](https://arxiv.org/abs/2501.12326), UI-TARS-1.5 integrates advanced reasoning enabled by reinforcement learning. This allows the model to reason through its thoughts before taking action, significantly enhancing its performance and adaptability, particularly in inference-time scaling. Our new 1.5 version achieves state-of-the-art results across a variety of standard benchmarks, demonstrating strong reasoning capabilities and notable improvements over prior models.
<!-- ![Local Image](figures/UI-TARS.png) -->
<p align="center">
    <video controls width="480">
      <source src="https://huggingface.co/datasets/JjjFangg/Demo_video/resolve/main/GUI_demo.mp4" type="video/mp4">
    </video>

<p>
<p align="center">
    <video controls width="480">
      <source src="https://huggingface.co/datasets/JjjFangg/Demo_video/resolve/main/Game_demo.mp4" type="video/mp4">
    </video>
<p>

## 🚀 Quick Start Guide: Deploying and Using Our Model

To help you get started quickly with our model, we recommend following the steps below in order. These steps will guide you through deployment, prediction post-processing to make the model take actions in your environment.


### ✅ Step 1: Deployment & Inference

👉 <a href="REA