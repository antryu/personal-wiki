<!-- GitHub Trending: Rust | 6,937 stars | +12 today -->

# cocoindex-io/cocoindex

> Data transformation framework for AI. Ultra performant, with incremental processing.  🌟 Star if you like it!

## Repository Info
- **URL**: https://github.com/cocoindex-io/cocoindex
- **Stars**: 6,937
- **Forks**: 502
- **Language**: Rust
- **License**: Apache License 2.0
- **Created**: 2025-03-03
- **Updated**: 2026-04-21
- **Topics**: agentic-data-framework, ai, ai-agents, change-data-capture, context-engineering, data, data-engineering, data-indexing, data-processing, etl, help-wanted, indexing, knowledge-graph, llm, long-horizon-agent, python, rag, real-time, rust, semantic-search
- **Open Issues**: 52

## README (excerpt)
<p align="center">
    <img src="https://cocoindex.io/images/github.svg" alt="CocoIndex">
</p>

<h1 align="center">Data transformation for AI</h1>

<div align="center">

[![GitHub](https://img.shields.io/github/stars/cocoindex-io/cocoindex?color=5B5BD6)](https://github.com/cocoindex-io/cocoindex)
[![Documentation](https://img.shields.io/badge/Documentation-394e79?logo=readthedocs&logoColor=00B9FF)](https://cocoindex.io/docs/getting_started/quickstart)
[![License](https://img.shields.io/badge/license-Apache%202.0-5B5BD6?logoColor=white)](https://opensource.org/licenses/Apache-2.0)
[![PyPI version](https://img.shields.io/pypi/v/cocoindex?color=5B5BD6)](https://pypi.org/project/cocoindex/)
<!--[![PyPI - Downloads](https://img.shields.io/pypi/dm/cocoindex)](https://pypistats.org/packages/cocoindex) -->
[![PyPI Downloads](https://static.pepy.tech/badge/cocoindex/month)](https://pepy.tech/projects/cocoindex)
[![CI](https://github.com/cocoindex-io/cocoindex/actions/workflows/CI.yml/badge.svg?event=push&color=5B5BD6)](https://github.com/cocoindex-io/cocoindex/actions/workflows/CI.yml)
[![release](https://github.com/cocoindex-io/cocoindex/actions/workflows/release.yml/badge.svg?event=push&color=5B5BD6)](https://github.com/cocoindex-io/cocoindex/actions/workflows/release.yml)
[![Link Check](https://github.com/cocoindex-io/cocoindex/actions/workflows/links.yml/badge.svg)](https://github.com/cocoindex-io/cocoindex/actions/workflows/links.yml)
[![prek](https://img.shields.io/endpoint?url=https://raw.githubusercontent.com/j178/prek/master/docs/assets/badge-v0.json)](https://github.com/j178/prek)
[![Discord](https://img.shields.io/discord/1314801574169673738?logo=discord&color=5B5BD6&logoColor=white)](https://discord.com/invite/zpA9S2DR7s)

</div>

<div align="center">
    <a href="https://trendshift.io/repositories/13939" target="_blank"><img src="https://trendshift.io/api/badge/repositories/13939" alt="cocoindex-io%2Fcocoindex | Trendshift" style="width: 250px; height: 55px;" width="250" height="55"/></a>
</div>

Ultra performant data transformation framework for AI, with core engine written in Rust. Support incremental processing and data lineage out-of-box.  Exceptional developer velocity. Production-ready at day 0.

⭐ Drop a star to help us grow!

<div align="center">

<!-- Keep these links. Translations will automatically update with the README. -->
[Deutsch](https://readme-i18n.com/cocoindex-io/cocoindex?lang=de) |
[English](https://readme-i18n.com/cocoindex-io/cocoindex?lang=en) |
[Español](https://readme-i18n.com/cocoindex-io/cocoindex?lang=es) |
[français](https://readme-i18n.com/cocoindex-io/cocoindex?lang=fr) |
[日本語](https://readme-i18n.com/cocoindex-io/cocoindex?lang=ja) |
[한국어](https://readme-i18n.com/cocoindex-io/cocoindex?lang=ko) |
[Português](https://readme-i18n.com/cocoindex-io/cocoindex?lang=pt) |
[Русский](https://readme-i18n.com/cocoindex-io/cocoindex?lang=ru) |
[中文](https://readme-i18n.com/cocoindex-io/cocoindex?lang=zh)

</div>

</br>

<p align="center">
    <img src="https://cocoindex.io/images/transformation.svg" alt="CocoIndex Transformation">
</p>

</br>

CocoIndex makes it effortless to transform data with AI, and keep source data and target in sync. Whether you’re building a vector index, creating knowledge graphs for context engineering or performing any custom data transformations — goes beyond SQL.

</br>

<p align="center">
<img alt="CocoIndex Features" src="https://cocoindex.io/images/venn2.svg" />
</p>

</br>

## Exceptional velocity

Just declare transformation in dataflow with ~100 lines of python

```python
# import
data['content'] = flow_builder.add_source(...)

# transform
data['out'] = data['content']
    .transform(...)
    .transform(...)

# collect data
collector.collect(...)

# export to db, vector db, graph db ...
collector.export(...)
```

CocoIndex follows the idea of [Dataflow](https://en.wikipedia.org/wiki/Dataflow_programming) programming model. Each transformation creates a new field solel