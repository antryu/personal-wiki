# Time Series Foundation Model

> TimesFM (Time Series Foundation Model) is a pretrained time-series foundation model developed by Google Research for time-series forecasting. It introduces a decoder-only architecture, integrates into Google products like BigQuery ML and Sheets, and offers scalable forecasting with support for up to 16k context lengths and quantile predictions.
> Last updated: 2026-04-16

## Overview
**TimesFM** is an open-source, decoder-only foundation model for time-series forecasting, developed by Google Research. The model supports enterprise and consumer applications, including BigQuery ML for SQL-based forecasting and Google Sheets for spreadsheet use. Key updates include:

- **TimesFM 2.5** (Sept. 2025): Reduced parameters (200M vs. 500M), extended context length (16k), and optional quantile forecasting via a 30M-head architecture.
- **Integration**: Available as a Hugging Face collection, with Dockerized endpoints in Vertex Model Garden and SQL support in BigQuery ML.
- **Recent Enhancements** (Apr. 2026): Added fine-tuning examples using HuggingFace Transformers + PEFT (LoRA), unit tests, and covariate support via XReg.
- **Community Contributions**: AGENTs integration (Mar. 2026) and documentation improvements.

Installation requires cloning the repository and using `uv` to manage dependencies, with optional PyTorch, JAX/Flax, or XReg configurations. The model supports both inference and fine-tuning workflows.

## Key Points
- Decoder-only architecture for time-series forecasting, eliminating the need for frequency indicators.
- Scalable to 16k context length and 1k forecast horizon with quantile predictions.
- Integrated into Google products: BigQuery ML, Google Sheets, and Vertex AI.
- Open-source under Apache 2.0, with checkpoints hosted on Hugging Face.
- Supports fine-tuning via LoRA and includes unit tests for core components.

## Sources
- [GitHub](https://github.com/google-research/timesfm)
- [원본](raw/ingest/research/2026-04-16-time-series-foundation-model.md)