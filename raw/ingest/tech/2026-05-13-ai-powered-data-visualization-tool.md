<!-- GitHub Trending: TypeScript | 15,549 stars | +22 today -->

# microsoft/data-formulator

> 🪄 Create rich visualizations with AI 

## Repository Info
- **URL**: https://github.com/microsoft/data-formulator
- **Stars**: 15,549
- **Forks**: 1,448
- **Language**: TypeScript
- **License**: MIT License
- **Created**: 2024-06-07
- **Updated**: 2026-05-13
- **Topics**: N/A
- **Open Issues**: 70

## README (excerpt)
<h1 align="center">
  <img src="./public/favicon.ico" alt="Data Formulator icon" width="28">&nbsp;
  Data Formulator: AI-powered Data Visualization
</h1>


<p align="center">
  🪄 Explore data with visualizations, powered by AI agents.
</p>

<p align="center">
  <a href="https://data-formulator.ai"><img src="https://img.shields.io/badge/🚀_Try_Online_Demo-data--formulator.ai-F59E0B?style=for-the-badge" alt="Try Online Demo"></a>
  &nbsp;
  <a href="#get-started"><img src="https://img.shields.io/badge/💻_Install_Locally-uvx_|_pip-3776AB?style=for-the-badge" alt="Install Locally"></a>
</p>

<p align="center">
  <a href="https://arxiv.org/abs/2408.16119"><img src="https://img.shields.io/badge/Paper-arXiv:2408.16119-b31b1b.svg" alt="arXiv"></a>&ensp;
  <a href="https://opensource.org/licenses/MIT"><img src="https://img.shields.io/badge/License-MIT-yellow.svg" alt="License: MIT"></a>&ensp;
  <a href="https://www.youtube.com/watch?v=GfTE2FLyMrs"><img src="https://img.shields.io/badge/YouTube-white?logo=youtube&logoColor=%23FF0000" alt="YouTube"></a>&ensp;
  <a href="https://github.com/microsoft/data-formulator/actions/workflows/python-build.yml"><img src="https://github.com/microsoft/data-formulator/actions/workflows/python-build.yml/badge.svg" alt="build"></a>&ensp;
  <a href="https://discord.gg/mYCZMQKYZb"><img src="https://img.shields.io/badge/discord-chat-green?logo=discord" alt="Discord"></a>
</p>

<!-- [![Open in GitHub Codespaces](https://github.com/codespaces/badge.svg)](https://codespaces.new/microsoft/data-formulator?quickstart=1) -->
<!-- 
https://github.com/user-attachments/assets/8ca57b68-4d7a-42cb-bcce-43f8b1681ce2 -->

<kbd>
  <img src="https://github.com/user-attachments/assets/3ffb15aa-93ce-42b8-92cf-aaf321f9a06a">
</kbd>


## News 🔥🔥🔥

[05-11-2026] **Data Formulator 0.7 (alpha 2)** — A new chapter for AI-powered data exploration
-  🔌 **Data connectors** — first-class persistent connection to Superset, Kusto, Cosmos DB, MySQL, PostgreSQL, MSSQL, S3, Azure Blob, BigQuery, and more, with SSO, lazy catalog loading, search, and smart filters.
-  💬 **Conversational agent with thread memory** — a unified `DataAgent` that weaves explanation, exploration, visualization, and recommendation into one fluid conversation, carrying context across turns so the agent stays in sync with your train of thought.
-  🗂️ **Persistent session & workspace management** — identity-isolated workspaces with local and Azure Blob backends; sessions persist across restarts with timestamps and sort.
-  📊 **Expressive visualization** — 30+ chart types via a new semantic chart engine (area, streamgraph, candlestick, pie, radar, maps, …), plus a chart style-refinement agent that turns rough charts into presentation-ready visuals: restyle in one click, refine typography, color, layout, and annotations through natural language.
-  📚 **Knowledge distillation (experimental)** — agents distill reusable skills and experiences from your sessions into a shared knowledge library that informs future sessions.

> Install the pre-release with `pip install --pre data-formulator` or pin `==0.7.0a2`.

> [!TIP]
> **Are you a developer?** Join us to shape the future of AI-powered data exploration!
> We're looking for help with new agents, data connectors, chart templates, and more.
> Check out the [Developers' Guide](DEVELOPMENT.md) and our [open issues](https://github.com/microsoft/data-formulator/issues).

## Previous Updates

Here are milestones that lead to the current design:
- **v0.6** ([Demo](https://github.com/microsoft/data-formulator/releases/tag/0.6)): Real-time insights from live data — connect to URLs and databases with automatic refresh
- **uv support**: Faster installation with [uv](https://docs.astral.sh/uv/) — `uvx data_formulator` or `uv pip install data_formulator`
- **v0.5.1** ([Demo](https://github.com/microsoft/data-formulator/pull/200#issue-3635408217)): Community data loaders, US Map & Pie Chart, editable reports, snappier UI
- **v0.5**