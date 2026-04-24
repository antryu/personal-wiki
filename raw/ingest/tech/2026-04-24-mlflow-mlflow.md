<!-- GitHub Trending: Python | 25,538 stars | +20 today -->

# mlflow/mlflow

> The open source AI engineering platform for agents, LLMs, and ML models. MLflow enables teams of all sizes to debug, evaluate, monitor, and optimize production-quality AI applications while controlling costs and managing access to models and data.

## Repository Info
- **URL**: https://github.com/mlflow/mlflow
- **Stars**: 25,538
- **Forks**: 5,629
- **Language**: Python
- **License**: Apache License 2.0
- **Created**: 2018-06-05
- **Updated**: 2026-04-24
- **Topics**: agentops, agents, ai, ai-governance, apache-spark, evaluation, langchain, llm-evaluation, llmops, machine-learning, ml, mlflow, mlops, model-management, observability, open-source, openai, prompt-engineering
- **Open Issues**: 2020

## README (excerpt)
<h1 align="center" style="border-bottom: none">
    <a href="https://mlflow.org/">
        <img alt="MLflow logo" src="https://raw.githubusercontent.com/mlflow/mlflow/refs/heads/master/assets/logo.svg" width="200" />
    </a>
</h1>
<h2 align="center" style="border-bottom: none">The Open Source AI Engineering Platform for Agents, LLMs & Models</h2>

MLflow is the largest open source **AI engineering platform for agents, LLMs, and ML models**. MLflow enables teams of all sizes to [debug](https://mlflow.org/llm-tracing),
[evaluate](https://mlflow.org/llm-evaluation), [monitor](https://mlflow.org/ai-monitoring), and [optimize](https://mlflow.org/prompt-optimization) production-quality AI applications while
controlling costs and managing access to models and data. With over **60 million monthly downloads**,
thousands of organizations rely on MLflow each day to ship AI to production with confidence.

MLflow's comprehensive feature set for agents and LLM applications includes production-grade [observability](https://mlflow.org/docs/latest/genai/tracing), [evaluation](https://mlflow.org/docs/latest/genai/eval-monitor),
[prompt management](https://mlflow.org/docs/latest/genai/prompt-registry), [prompt optimization](https://mlflow.org/prompt-optimization) and an [AI Gateway](https://mlflow.org/docs/latest/genai/governance/ai-gateway) for managing costs and model access.
Learn more at [MLflow for LLMs and Agents](https://mlflow.org/docs/latest/genai).

<div align="center">

[![Python SDK](https://img.shields.io/pypi/v/mlflow)](https://pypi.org/project/mlflow/)
[![PyPI Downloads](https://img.shields.io/pypi/dm/mlflow)](https://pepy.tech/projects/mlflow)
[![License](https://img.shields.io/github/license/mlflow/mlflow)](https://github.com/mlflow/mlflow/blob/master/LICENSE.txt)
<a href="https://twitter.com/intent/follow?screen_name=mlflow" target="_blank">
<img src="https://img.shields.io/twitter/follow/mlflow?logo=X&color=%20%23f5f5f5"
      alt="follow on X(Twitter)"></a>
<a href="https://www.linkedin.com/company/mlflow-org/" target="_blank">
<img src="https://custom-icon-badges.demolab.com/badge/LinkedIn-0A66C2?logo=linkedin-white&logoColor=fff"
      alt="follow on LinkedIn"></a>
[![Ask DeepWiki](https://deepwiki.com/badge.svg)](https://deepwiki.com/mlflow/mlflow)

</div>

<div align="center">
   <div>
      <a href="https://mlflow.org/"><strong>Website</strong></a> ·
      <a href="https://mlflow.org/docs/latest"><strong>Docs</strong></a> ·
      <a href="https://github.com/mlflow/mlflow/issues/new/choose"><strong>Feature Request</strong></a> ·
      <a href="https://mlflow.org/blog"><strong>News</strong></a> ·
      <a href="https://www.youtube.com/@mlflowoss"><strong>YouTube</strong></a> ·
      <a href="https://lu.ma/mlflow?k=c"><strong>Events</strong></a>
   </div>
</div>

<br>

## Get Started in 3 Simple Steps

From zero to full-stack LLMOps in minutes. No complex setup or major code changes required. [Get Started →](https://mlflow.org/docs/latest/genai/tracing/quickstart/)

**1. Start MLflow Server**

```bash
uvx mlflow server
```

**2. Enable Logging**

```python
import mlflow

mlflow.set_tracking_uri("http://localhost:5000")
mlflow.openai.autolog()
```

**3. Run Your Code**

```python
from openai import OpenAI

client = OpenAI()
client.responses.create(
    model="gpt-5.4-mini",
    input="Hello!",
)
```

Explore traces and metrics in the MLflow UI at `http://localhost:5000`.

## LLMs & Agents

MLflow provides everything you need to build, debug, evaluate, and deploy production-quality LLM applications and AI agents. Supports Python, TypeScript/JavaScript, Java and any other programming language. MLflow also natively integrates with [OpenTelemetry](https://opentelemetry.io/) and MCP.

<table>
  <tr>
    <td width="50%">
    <img src="https://raw.githubusercontent.com/mlflow/mlflow/refs/heads/master/assets/readme-tracing.png" alt="Observability" width=100%>
    <div align="center">
        <br>
        <a href="https://mlflow.org