<!-- GitHub Trending: Jupyter Notebook | 770 stars | +153 today -->

# oracle-devrel/oracle-ai-developer-hub

> Technical resources for AI developers to build applications, agents, and systems using Oracle AI Database and OCI services

## Repository Info
- **URL**: https://github.com/oracle-devrel/oracle-ai-developer-hub
- **Stars**: 770
- **Forks**: 228
- **Language**: Jupyter Notebook
- **License**: N/A
- **Created**: 2024-01-16
- **Updated**: 2026-05-09
- **Topics**: agentmemory, agents, ai, ai-developer, artificial-intelligence, generative-ai, kubernetes, kustomize, oracle-database, oracleaidatabase, oraclejet, rag
- **Open Issues**: 8

## README (excerpt)
# Oracle AI Developer Hub

This repository contains technical resources to help AI Developers and Engineers build AI applications, agents, and systems using Oracle AI Database and OCI services alongside other key components of the AI/Agent stack.

## What You'll Find

This repository is organized into several key areas:

### 📱 **Apps** (`/apps`)

Applications and reference implementations demonstrating how to build AI-powered solutions with Oracle technologies. These complete, working examples showcase end-to-end implementations of AI applications, agents, and systems that leverage Oracle AI Database and OCI services. Each application includes source code, deployment configurations, and documentation to help developers understand architectural patterns, integration approaches, and best practices for building production-grade AI solutions.

| Name                     | Description                                                                                                                      | Link                                                                                                           |
| ------------------------ | -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| FitTracker               | Gamified fitness platform built with Oracle 26ai JSON Duality Views (FastAPI + Redis), created live during a webinar.            | [![View App](https://img.shields.io/badge/View%20App-blue?style=flat-square)](./apps/FitTracker)               |
| agentic_rag              | Intelligent RAG system with multi-agent Chain of Thought (CoT), PDF/Web/Repo processing, and Oracle AI Database 26ai integration | [![View App](https://img.shields.io/badge/View%20App-blue?style=flat-square)](./apps/agentic_rag)              |
| finance-ai-agent-demo    | Financial services AI agent with Oracle AI Database as a unified memory core for vector, graph, spatial, and relational queries  | [![View App](https://img.shields.io/badge/View%20App-blue?style=flat-square)](./apps/finance-ai-agent-demo)    |
| oci-generative-ai-jet-ui | Full-stack AI application with Oracle JET UI, OCI Generative AI integration, Kubernetes deployment, and Terraform infrastructure | [![View App](https://img.shields.io/badge/View%20App-blue?style=flat-square)](./apps/oci-generative-ai-jet-ui) |
| tanstack-shoe-store      | AI chat app using TanStack Start and Oracle 26ai Select AI to query a shoe store database with natural language                  | [![View App](https://img.shields.io/badge/View%20App-blue?style=flat-square)](./apps/tanstack-shoe-store)      |

### 📓 **Notebooks** (`/notebooks`)

Jupyter notebooks and interactive tutorials covering:

- AI/ML model development and experimentation
- Oracle Database AI features and capabilities
- OCI AI services integration patterns
- Data preparation and analysis workflows
- Agent development and orchestration examples

| Name                                | Description                                                                                                     | Stack                                                     | Link                                                                                                                                             |
| ----------------------------------- | --------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| agentic_rag_langchain_oracledb_demo | Multi-agent RAG with langchain-oracledb: OracleVS, OracleEmbeddings, OracleTextSplitter, and CoT agents         | Oracle AI Database, langchain-oracledb, Ollam