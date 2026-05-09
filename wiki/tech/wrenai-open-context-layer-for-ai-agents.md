# WrenAI - Open Context Layer for AI Agents

> WrenAI is an open context layer that enables AI agents to perform grounded, governed SQL across 20+ data sources, making it ideal for building GenBI, dashboards, and advanced analytics. It bridges the gap between business data and AI, allowing agents to understand complex data structures through a modeling language (MDL). Last updated: 2026-05-09

## Overview

WrenAI is a Rust-based open-source project developed by Canner to provide AI agents with a structured way to query business data. Instead of directly accessing raw databases, AI agents use WrenAI's context layer to generate accurate SQL based on predefined business logic and data models.

By using the Modeling Definition Language (MDL), teams can define entities, relationships, and calculations that represent the structure of their data warehouse. This makes it easier for any AI agent to query the data warehouse with the same level of understanding as human data analysts.

WrenAI integrates with multiple data sources such as PostgreSQL, BigQuery, Snowflake, and Spark, and can be used as a CLI, a Python SDK, a WASM module in the browser, or as part of agent skills. The Rust engine is powered by Apache DataFusion, ensuring efficient query execution.

## Key Points
- Provides a **grounded, governed SQL layer** for AI agents across 20+ data sources.
- Uses **Modeling Definition Language (MDL)** to define business logic, making AI queries as accurate as human data analysts.
- Integrates with major data platforms like **PostgreSQL, BigQuery, Snowflake**, and more.
- Offers multiple deployment options: **CLI, Python SDK, WASM, agent skills**.
- Open-source with **15,148 stars** and growing community support.

## Sources
- [GitHub](https://github.com/Canner/WrenAI)
- [원본](raw/ingest/tech/2026-05-09-wrenai-open-context-layer-for-ai-agents.md)