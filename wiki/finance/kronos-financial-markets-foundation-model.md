# Kronos: Financial Markets Foundation Model

> Kronos is the first open-source foundation model for financial candlesticks (K-lines), trained on data from over 45 global exchanges. It is designed to understand the "language" of financial markets and supports a wide range of quantitative tasks.
> Last updated: 2026-04-10

## Overview
Kronos is a family of decoder-only foundation models specifically pre-trained for financial K-line sequences. It introduces a novel two-stage framework that first quantizes continuous, multi-dimensional K-line data (OHLCV) into hierarchical discrete tokens, followed by autoregressive Transformer pre-training. This architecture allows Kronos to handle the unique, high-noise characteristics of financial data, making it a unified model for diverse quantitative tasks.

The model is trained on data from over 45 global exchanges and supports a range of capacities to suit different computational needs. A live demo is available to visualize forecasting results for the BTC/USDT trading pair. The project has been recognized with acceptance into AAAI 2026 and includes fine-tuning scripts for custom adaptation.

## Key Points
- Kronos is the first open-source foundation model for financial candlesticks.
- It uses a two-stage framework: tokenization of K-line data and autoregressive Transformer pre-training.
- Available on Hugging Face with multiple model sizes for different use cases.
- A live demo is provided for real-time visualization of forecasting results.
- The model has been accepted into AAAI 2026 and includes tools for fine-tuning.

## Sources
- [GitHub](https://github.com/shiyu-coder/Kronos)
- [원본](raw/ingest/finance/2026-04-10-kronos-financial-markets-foundation-model.md)