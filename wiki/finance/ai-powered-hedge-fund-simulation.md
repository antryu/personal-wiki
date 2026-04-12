# AI-Powered Hedge Fund Simulation

> A simulation of an AI-driven hedge fund team with 19 specialized agents mimicking real-world investment strategies. This project explores AI's potential in financial decision-making while emphasizing educational use.  
> Last updated: 2026-04-12

## Overview  
### Repository Info  
- **URL**: [https://github.com/virattt/ai-hedge-fund](https://github.com/virattt/ai-hedge-fund)  
- **Stars**: 52,130  
- **Forks**: 9,042  
- **Language**: Python  
- **License**: N/A  
- **Created**: 2024-11-29  
- **Updated**: 2026-04-12  
- **Open Issues**: 97  

### System Architecture  
The simulation employs **19 AI agents** modeling real-world investment strategies:  
1. **Valuation Agent** (intrinsic value calculation)  
2. **Sentiment Agent** (market sentiment analysis)  
3. **Fundamentals Agent** (financial data analysis)  
4. **Technicals Agent** (technical indicators)  
5. **Risk Manager** (position limits and risk metrics)  
6. **Portfolio Manager** (final trading decisions)  
7. **14 Investor Agents** (e.g., Warren Buffett, Cathie Wood, Michael Burry, etc.)  

Agents collaborate to generate trading signals but **do not execute real trades**.  

### Key Features  
- **Educational focus**: Not for real trading or investment  
- **Modular design**: Supports multiple LLM providers (OpenAI, GROQ, Anthropic, DeepSeek)  
- **API-driven**: Requires financial data APIs (e.g., `FINANCIAL_DATASETS_API_KEY`)  
- **Deployment options**: Command-line interface or web application  

### Installation & Usage  
1. **Clone repository**:  
   ```bash  
   git clone https://github.com/virattt/ai-hedge-fund.git  
   cd ai-hedge-fund  
   ```  
2. **Set up API keys**:  
   - Create `.env` file using `.env.example` template  
   - Required: At least one LLM API key (e.g., `OPENAI_API_KEY`)  
   - Optional: Financial data API key (`FINANCIAL_DATASETS_API_KEY`)  

3. **Run via CLI or Web App** (detailed in repository documentation).  

### Legal Disclaimer  
- **No financial advice**: Creator assumes no liability for losses  
- **Strictly educational**: Users must consult licensed financial advisors for real investments  
- **No guarantees**: Past performance ≠ future results  

## Key Points  
- Combines AI-driven fundamental, technical, and sentiment analysis  
- Simulates 14 real-world investment philosophies (Buffett, Taleb, etc.)  
- Requires API keys for LLMs and financial data  
- Includes both CLI and web application deployment options  
- Emphasizes risk management and theoretical trading  

## Sources  
- [GitHub](https://github.com/virattt/ai-hedge-fund)  
- [원본](raw/ingest/finance/2026-04-12-ai-powered-hedge-fund-simulation.md)