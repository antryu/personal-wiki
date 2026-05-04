<!-- GitHub Trending: Python | 4,501 stars | +20 today -->

# ag2ai/ag2

> AG2 (formerly AutoGen): The Open-Source AgentOS.Join us at: https://discord.gg/sNGSwQME3x

## Repository Info
- **URL**: https://github.com/ag2ai/ag2
- **Stars**: 4,501
- **Forks**: 613
- **Language**: Python
- **License**: Apache License 2.0
- **Created**: 2024-11-11
- **Updated**: 2026-05-04
- **Topics**: a2a, ag2, agent-framework, agentic, agentic-ai, ai, ai-agents-framework, aiagents, genai, llm, llms, mcp, multi-agent, multi-agent-system, open-source, python
- **Open Issues**: 155

## README (excerpt)
<a name="readme-top"></a>

<p align="center">
  <!-- The image URL points to the GitHub-hosted content, ensuring it displays correctly on the PyPI website.-->
  <img src="https://raw.githubusercontent.com/ag2ai/ag2/27b37494a6f72b1f8050f6bd7be9a7ff232cf749/website/static/img/ag2.svg" width="150" title="hover text">

  <br>
  <br>

  <a href="https://www.pepy.tech/projects/ag2">
    <img src="https://static.pepy.tech/personalized-badge/ag2?period=month&units=international_system&left_color=grey&right_color=green&left_text=downloads/month" alt="Downloads"/>
  </a>

  <a href="https://pypi.org/project/autogen/">
    <img src="https://img.shields.io/pypi/v/ag2?label=PyPI&color=green">
  </a>

  <img src="https://img.shields.io/pypi/pyversions/ag2.svg?label=">

  <a href="https://github.com/ag2ai/ag2/actions/workflows/python-package.yml">
    <img src="https://github.com/ag2ai/ag2/actions/workflows/python-package.yml/badge.svg">
  </a>
  <a href="https://discord.gg/pAbnFJrkgZ">
    <img src="https://img.shields.io/discord/1153072414184452236?logo=discord&style=flat">
  </a>

  <br>

  <a href="https://x.com/ag2oss">
    <img src="https://img.shields.io/twitter/url/https/twitter.com/cloudposse.svg?style=social&label=Follow%20%40ag2ai">
  </a>
</p>

<p align="center">
  <a href="https://docs.ag2.ai/">📚 Documentation</a> |
  <a href="https://github.com/ag2ai/build-with-ag2">💡 Examples</a> |
  <a href="https://docs.ag2.ai/latest/docs/contributor-guide/contributing">🤝 Contributing</a> |
  <a href="#related-papers">📝 Cite paper</a> |
  <a href="https://discord.gg/pAbnFJrkgZ">💬 Join Discord</a>
</p>

<p align="center">
AG2 was evolved from AutoGen. Fully open-sourced. We invite collaborators from all organizations to contribute.
</p>

> [!IMPORTANT]
> **AG2 is on the path to v1.0.** The current framework will be tidied up through deprecations over the next few minor versions and moved to maintenance mode. The beta framework (`autogen.beta`) will become the official version of AG2 at v1.0.
>
> [Read the full release roadmap →](https://docs.ag2.ai/latest/docs/user-guide/release-roadmap/)

# AG2: Open-Source AgentOS for AI Agents

AG2 (formerly AutoGen) is an open-source programming framework for building AI agents and facilitating cooperation among multiple agents to solve tasks. AG2 aims to streamline the development and research of agentic AI. It offers features such as agents capable of interacting with each other, facilitates the use of various large language models (LLMs) and tool use support, autonomous and human-in-the-loop workflows, and multi-agent conversation patterns.

The project is currently maintained by a [dynamic group of volunteers](MAINTAINERS.md) from several organizations. Contact project administrators Chi Wang and Qingyun Wu via [support@ag2.ai](mailto:support@ag2.ai) if you are interested in becoming a maintainer.

## Table of contents

- [AG2: Open-Source AgentOS for AI Agents](#ag2-open-source-agentos-for-ai-agents)
  - [Table of contents](#table-of-contents)
  - [Getting started](#getting-started)
    - [Installation](#installation)
    - [Setup your API keys](#setup-your-api-keys)
    - [Run your first agent](#run-your-first-agent)
  - [Example applications](#example-applications)
  - [Introduction of different agent concepts](#introduction-of-different-agent-concepts)
    - [Conversable agent](#conversable-agent)
    - [Orchestrating Multiple Agents](#orchestrating-multiple-agents)
    - [Human in the Loop](#human-in-the-loop)
    - [Tools](#tools)
    - [Advanced agentic design patterns](#advanced-agentic-design-patterns)
  - [Announcements](#announcements)
  - [Code style and linting](#code-style-and-linting)
  - [Related papers](#related-papers)
  - [Contributors Wall](#contributors-wall)
  - [Cite the project](#cite-the-project)
  - [License](#license)

## Getting started

For a step-by-step walk through of AG2 concepts and code, see [Basic Concepts](https://docs.ag2.ai/latest/docs/user-guide/basic-conce