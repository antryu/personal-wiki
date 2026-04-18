<!-- GitHub Trending: Python | 3,001 stars | +14 today -->

# AI4Finance-Foundation/FinRL-Trading

> FinRL-X: An AI-Native Modular Infrastructure for Quantitative Trading

## Repository Info
- **URL**: https://github.com/AI4Finance-Foundation/FinRL-Trading
- **Stars**: 3,001
- **Forks**: 927
- **Language**: Python
- **License**: Apache License 2.0
- **Created**: 2020-07-26
- **Updated**: 2026-04-18
- **Topics**: a2c-algorithm, automated-stock-trading, ddpg, deep-reinforcement-learning, ensemble-strategy, finrl, finrl-x, portfolio, portfolio-allocation, ppo, sharpe-ratio, stock-selection, stock-trading, stock-trading-strategy
- **Open Issues**: 49

## README (excerpt)

<div align="center">

# FinRL-X

### An AI-Native Modular Infrastructure for Quantitative Trading

<img src="https://github.com/user-attachments/assets/80fe89bb-fb09-4267-b29a-76030512f8cf" width="420">

[![Paper](https://img.shields.io/badge/Paper-arXiv_2603.21330-b31b1b?style=for-the-badge)](https://arxiv.org/abs/2603.21330)
&nbsp;
[![PyPI](https://img.shields.io/badge/PyPI-finrl--trading-3775A9?style=for-the-badge&logo=pypi&logoColor=white)](https://pypi.org/project/finrl-trading/)

[![Python 3.11](https://img.shields.io/badge/python-3.11+-blue.svg)](https://www.python.org/downloads/)
![License](https://img.shields.io/github/license/AI4Finance-Foundation/FinRL-Trading.svg?color=brightgreen)
[![Downloads](https://static.pepy.tech/badge/finrl-trading)](https://pepy.tech/project/finrl-trading)
[![Downloads](https://static.pepy.tech/badge/finrl-trading/week)](https://pepy.tech/project/finrl-trading)
[![Join Discord](https://img.shields.io/badge/Discord-Join-5865F2?logo=discord&logoColor=white)](https://discord.gg/trsr8SXpW5)

![](https://img.shields.io/github/issues-raw/AI4Finance-Foundation/FinRL-Trading?label=Issues)
![](https://img.shields.io/github/issues-pr-raw/AI4Finance-Foundation/FinRL-Trading?label=PRs)
![Visitors](https://api.visitorbadge.io/api/VisitorHit?user=AI4Finance-Foundation&repo=FinRL-Trading&countColor=%23B17A)

*A deployment-consistent trading system that unifies data processing, strategy composition, backtesting, and broker execution through a weight-centric interface.*

[Paper](https://arxiv.org/abs/2603.21330) | [Quick Start](#quick-start) | [Strategies](#strategies) | [Results](#results) | [Discord](https://discord.gg/trsr8SXpW5)

</div>

---

## About

**FinRL-X** is a next-generation, **AI-native** quantitative trading infrastructure that redefines how researchers and practitioners build, test, and deploy algorithmic trading strategies. 

Introduced in our paper *"FinRL-X: An AI-Native Modular Infrastructure for Quantitative Trading"* ([arXiv:2603.21330](https://arxiv.org/abs/2603.21330)), FinRL-X succeeds the original [FinRL](https://github.com/AI4Finance-Foundation/FinRL) framework with a fully modernized architecture designed for the LLM and agentic AI era.

> FinRL-X is **not just a library** — it is a full-stack trading platform engineered around modularity, reproducibility, and production-readiness, supporting everything from ML-based stock selection and professional backtesting to live brokerage execution.

At its core is a **weight-centric architecture** — the target portfolio weight vector is the sole interface contract between strategy logic and downstream execution:

$$w_t = \mathcal{R}_t\bigl(\mathcal{T}_t\bigl(\mathcal{A}_t\bigl(\mathcal{S}_t(\mathcal{X}_{\le t})\bigr)\bigr)\bigr)$$

where $\mathcal{S}$ denotes stock selection, $\mathcal{A}$ portfolio allocation, $\mathcal{T}$ timing adjustment, and $\mathcal{R}$ portfolio-level risk overlay. Each transformation is contract-preserving — you can swap any module (e.g. equal-weight $\to$ DRL allocator) without touching the rest of the pipeline, and the same weights flow identically through backtesting and live execution.

---

## Architecture

<div align="center">
  <img src="https://github.com/AI4Finance-Foundation/FinRL-Trading/blob/master/figs/FinRL_X_Framework.png" width="880"/>
</div>

<br/>

| Layer | Role | Components |
|:------|:-----|:-----------|
| **Data** | Unified market data pipeline | FMP, Yahoo Finance, WRDS; LLM sentiment preprocessing; SQLite cache |
| **Strategy** | Weight-centric signal generation | Stock selection, portfolio allocation, timing adjustment, risk overlay |
| **Backtest** | Offline evaluation | `bt`-powered engine with multi-benchmark comparison and transaction costs |
| **Execution** | Live/paper trading | Alpaca multi-account integration with pre-trade risk checks |

```
finrl-trading/
├── src/
│   ├── config/                     # ⚙️  Centralized configuration management
│   │   └── settings.py          