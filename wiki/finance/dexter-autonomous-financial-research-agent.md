# Dexter: Autonomous Financial Research Agent

> Dexter is an autonomous financial research agent designed to perform deep financial analysis by decomposing complex queries into structured research steps, executing those tasks using real-time market data, and self-validating its results. It represents a new frontier in financial automation by combining AI-driven task planning with domain-specific financial data.  
> Last updated: 2026-05-04

## Overview

Dexter is an autonomous agent that automates complex financial research tasks. Built for financial professionals and enthusiasts, it leverages AI, real-time financial data, and a robust planning system to answer intricate financial queries. The agent operates by formulating step-by-step plans, executing them using available tools, and refining results through self-assessment. It is designed to handle a wide array of financial data, including income statements, balance sheets, and cash flow statements.

### Repository Info

- **URL**: https://github.com/virattt/dexter
- **Stars**: 23,131
- **Forks**: 2,837
- **Language**: TypeScript
- **License**: N/A
- **Created**: 2025-10-14
- **Updated**: 2026-05-04
- **Topics**: N/A
- **Open Issues**: 84

### Key Capabilities

- **Intelligent Task Planning**: Breaks down complex financial questions into structured research steps.
- **Autonomous Execution**: Selects and executes appropriate tools to gather financial data.
- **Self-Validation**: Iteratively checks and refines results until satisfied.
- **Real-Time Financial Data**: Accesses live financial datasets such as income statements and balance sheets.
- **Safety Features**: Prevents infinite loops and runaway execution with built-in step limits.

### Getting Started

To use Dexter, you need:

- The [Bun](https://bun.com) runtime (v1.0 or higher).
- An [OpenAI API key](https://platform.openai.com/api-keys).
- A [Financial Datasets API key](https://financialdatasets.ai).
- Optionally, an [Exa API key](https://exa.ai) for web search.

After installing Bun and setting up required environment variables, Dexter can be cloned and run using:

```bash
git clone https://github.com/virattt/dexter.git
cd dexter
bun install
bun start
```

For development, use:

```bash
bun dev
```

Dexter also includes evaluation tools using LangSmith for tracking and scoring correctness, allowing users to test the agent against a dataset of financial questions:

```bash
bun run src/evals/run.ts
```

### Integration and Community

Dexter offers integration with WhatsApp for real-time financial updates and has active community channels on Twitter and Discord. Contributors are encouraged to participate, and the project is actively maintained.

## Key Points

- Dexter is an autonomous financial research agent built for complex financial analysis.
- It leverages real-time market data and AI planning to execute and refine financial tasks.
- The agent includes self-validation and safety features to ensure accuracy and prevent errors.
- Users can evaluate Dexter using an included evaluation suite with LLM-as-judge scoring.
- The project is open-source, actively maintained, and has a large and growing community.

## Sources

- [GitHub](https://github.com/virattt/dexter)
- [원본](raw/ingest/finance/2026-05-04-dexter-autonomous-financial-research-agent.md)