# Polymarket AI Agents

> Polymarket AI Agents is a developer framework for building autonomous AI agents to trade on Polymarket prediction markets. It integrates with the Polymarket API, supports AI-driven decision-making, and provides tools for data sourcing, RAG, and LLM prompt engineering. The project's modular architecture and MIT license make it notable for community-driven innovation in decentralized finance.
> Last updated: 2026-04-16

## Overview

### Repository Info
- **URL**: [https://github.com/Polymarket/agents](https://github.com/Polymarket/agents)
- **Stars**: 3,027
- **Forks**: 685
- **Language**: Python
- **License**: MIT License
- **Created**: 2024-07-03
- **Updated**: 2026-04-16
- **Open Issues**: 48

### README Excerpt
The project provides a CLI and application scripts for autonomous trading, along with modular APIs for Polymarket integration, vectorized data storage (Chroma DB), and LLM tools. Developers can extend the framework with custom data sources and trading strategies.

### Features
- Integration with Polymarket API for market data and trade execution
- AI agent utilities for prediction market analysis
- Local/remote RAG support for news and API data vectorization
- Data aggregation from betting services, news, and web search
- Comprehensive LLM tools for prompt engineering and decision-making

### Getting Started
1. Clone the repository:  
   ```bash
   git clone https://github.com/Polymarket/agents.git
   cd agents
   ```
2. Create and activate a Python 3.9 virtual environment.
3. Install dependencies:  
   ```bash
   pip install -r requirements.txt
   ```
4. Configure environment variables (`.env` file) for:
   - `POLYGON_WALLET_PRIVATE_KEY`
   - `OPENAI_API_KEY`
5. Run the CLI or trading scripts:  
   ```bash
   python scripts/python/cli.py
   # or
   python agents/application/trade.py
   ```
6. Docker support available via:  
   ```bash
   ./scripts/bash/build-docker.sh
   ./scripts/bash/run-docker-dev.sh
   ```

### Architecture
- **APIs**:
  - `Chroma.py`: Vector database for news and API data (supports custom implementations)
  - `Gamma.py`: Interfaces with Polymarket's Gamma API for market/event metadata
  - `Polymarket.py`: Executes trades and manages market data via Polymarket DEX
  - `Objects.py`: Pydantic data models for trades, markets, and events
- **Scripts**: Includes CLI tools, Docker configurations, and environment setup utilities.

## Key Points
- Enables autonomous trading on Polymarket using AI agents
- Modular design allows community contributions to APIs and data sources
- Combines LLMs, RAG, and real-time market data for predictive trading

## Sources
- [GitHub](https://github.com/Polymarket/agents)
- [원본](raw/ingest/tech/2026-04-16-polymarket-ai-agents.md)