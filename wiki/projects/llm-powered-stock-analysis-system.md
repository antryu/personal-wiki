# LLM-Powered Stock Analysis System

> An open-source, LLM-driven stock analysis system for A-shares, H-shares, and US markets that aggregates real-time market data, news, and AI-generated insights into a decision dashboard. Notable for its MIT license, 29.5k+ stars, and integration with multiple notification channels.  
> Last updated: 2026-04-12

## Overview
**Repository**: [ZhuLinsen/daily_stock_analysis](https://github.com/ZhuLinsen/daily_stock_analysis)  
**Language**: Python | **License**: MIT | **Stars**: 29,501 | **Forks**: 30,220  
**Created**: 2026-01-10 | **Updated**: 2026-04-12 | **Open Issues**: 57  

### Core Functionality
- **Multi-market support**: Analyzes A-shares (A股), H-shares (港股), and US stocks (SPX, DJI, IXIC).
- **AI Decision Dashboard**: Generates concise buy/sell signals, technical analysis (MA, volume distribution), and actionable checklists.
- **Real-time data integration**: Combines market prices, institutional flow, earnings reports, and news via SerpApi and Tushare/AkShare.
- **Multi-channel notifications**: Sends analysis reports to WeCom, Feishu, Telegram, Discord, Slack, email, and more.
- **Automation**: Runs on GitHub Actions with zero infrastructure cost.

### Technical Architecture
- **LLM Integration**: Uses AI models for sentiment analysis, pattern recognition, and strategy execution (e.g., moving average crossovers, wave theory).
- **Data Pipeline**: Aggregates structured data (valuation, earnings) and unstructured data (news, announcements) for hybrid analysis.
- **Web Interface**: Dual-theme (light/dark) dashboard with modules for portfolio management, backtesting, and strategy Q&A.
- **Scalability**: Supports batch operations, multi-worker deployment, and fail-open resilience for critical workflows.

## Key Points
- **Zero-cost automation**: Leverages GitHub Actions for scheduled execution without dedicated servers.
- **Hybrid analysis**: Combines technical indicators (MA, volume) with fundamental data (earnings, institutional flow) and sentiment analysis.
- **Customizable strategies**: Implements 11 built-in trading strategies (e.g., regime shifts, three-phase A-share reviews).
- **Backtesting capabilities**: Evaluates AI predictions vs actual performance using 1-day window validation.
- **Open ecosystem**: MIT-licensed with community contributions and sponsor integrations (e.g., SerpApi for real-time news).

## Sources
- [GitHub](https://github.com/ZhuLinsen/daily_stock_analysis)
- [원본](raw/ingest/projects/2026-04-12-llm-powered-stock-analysis-system.md)