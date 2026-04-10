# MiniMind: 2h GPT Training

> MiniMind 是一个开源项目，旨在从零开始在不到 2 小时和 3 元人民币的成本下训练出一个约 64M 参数的轻量级语言模型。该项目不仅提供了完整的训练链路，还为开发者提供了一个可复现、可理解、可扩展的起点，以推动 AI 社区的发展。
> Last updated: 2026-04-10

## Overview

MiniMind 是一个开源的 GPT 训练项目，专注于为开发者提供一个从零开始训练语言模型的完整流程。项目使用 PyTorch 原生实现，不依赖第三方框架的抽象接口，从而让开发者能够深入理解底层代码逻辑。MiniMind 的目标是让普通用户也能快速训练出一个轻量级模型，最低硬件需求为 NVIDIA 3090 单卡，训练时间控制在 2 小时以内，成本不到 3 元人民币。

该项目不仅是一个开源实现，还是一套完整的 LLM 入门与实践教程。MiniMind 提供了从数据准备、预训练、微调、强化学习到模型蒸馏的全过程代码，并兼容主流框架如 `transformers`、`trl`、`peft` 等。此外，MiniMind 还拓展了多模态、扩散模型和线性模型等变体，如 MiniMind-V、MiniMind-dLM 和 MiniMind-Linear。

## Key Points

- 从零开始训练一个 64M 参数的 GPT 模型，仅需 2 小时和 3 元人民币成本。
- 完整训练流程，包括数据清洗、预训练、SFT、LoRA、DPO、RLAIF、工具使用、模型蒸馏等。
- 提供开源代码与数据集，核心模块从 0 实现，便于学习与扩展。
- 支持单卡与多卡训练，并兼容主流训练与推理框架。
- 提供 OpenAI API 兼容的极简服务端，便于接入第三方 UI。

## Sources

- [GitHub](https://github.com/jingyaogong/minimind)
- [원본](raw/ingest/tech/2026-04-10-minimind-2h-gpt-training.md)