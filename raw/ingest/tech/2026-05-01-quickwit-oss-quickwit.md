<!-- GitHub Trending: Rust | 11,138 stars | +9 today -->

# quickwit-oss/quickwit

> Cloud-native search engine for observability. An open-source alternative to Datadog, Elasticsearch, Loki, and Tempo.

## Repository Info
- **URL**: https://github.com/quickwit-oss/quickwit
- **Stars**: 11,138
- **Forks**: 540
- **Language**: Rust
- **License**: Apache License 2.0
- **Created**: 2021-04-13
- **Updated**: 2026-05-01
- **Topics**: big-data, cloud-native, cloud-storage, distributed-tracing, log-management, logs, open-source, rust, search-engine, tantivy
- **Open Issues**: 750

## README (excerpt)
[![CI](https://github.com/quickwit-oss/quickwit/actions/workflows/ci.yml/badge.svg)](https://github.com/quickwit-oss/quickwit/actions?query=workflow%3ACI+branch%3Amain)
[![codecov](https://codecov.io/gh/quickwit-oss/quickwit/branch/main/graph/badge.svg?token=06SRGAV5SS)](https://codecov.io/gh/quickwit-oss/quickwit)
[![OpenSSF Scorecard](https://api.scorecard.dev/projects/github.com/quickwit-oss/quickwit/badge)](https://scorecard.dev/viewer/?uri=github.com/quickwit-oss/quickwit)
[![Contributor Covenant](https://img.shields.io/badge/Contributor%20Covenant-2.0-4baaaa.svg)](CODE_OF_CONDUCT.md)
[![License: Apache 2.0](https://img.shields.io/badge/license-Apache%202.0-blue?style=flat-square)](LICENSE)
[![Twitter Follow](https://img.shields.io/twitter/follow/Quickwit_Inc?color=%231DA1F2&logo=Twitter&style=plastic)](https://twitter.com/Quickwit_Inc)
[![Discord](https://img.shields.io/discord/908281611840282624?logo=Discord&logoColor=%23FFFFFF&style=plastic)](https://discord.quickwit.io)
<br/>

<br/>
<br/>
<p align="center">
  <img src="docs/assets/images/logo_horizontal.svg#gh-light-mode-only" alt="Quickwit Cloud-Native Search Engine" height="40">
  <img src="docs/assets/images/quickwit-dark-theme-logo.png#gh-dark-mode-only" alt="Quickwit Cloud-Native Search Engine" height="40">
</p>

<h2 align="center">
Cloud-native search engine for observability (logs, traces, and soon metrics!). An open-source alternative to Datadog, Elasticsearch,  Loki, and Tempo.
</h2>

<h4 align="center">
  <a href="https://quickwit.io/docs/get-started/quickstart">Quickstart</a> |
  <a href="https://quickwit.io/docs/">Docs</a> |
  <a href="https://quickwit.io/tutorials">Tutorials</a> |
  <a href="https://discord.quickwit.io">Chat</a> |
  <a href="https://quickwit.io/docs/get-started/installation">Download</a>
</h4>
<br/>

<b>We just released Quickwit 0.8! Read the [blog post](https://quickwit.io/blog/quickwit-0.8) to learn about the latest powerful features!</b>

### **Quickwit is the fastest search engine on cloud storage. It's the perfect fit for observability use cases**

- [Log management](https://quickwit.io/docs/log-management/overview)
- [Distributed tracing](https://quickwit.io/docs/distributed-tracing/overview)
- Metrics support is on the roadmap

### 🚀 Quickstart

- [Search and analytics on Stack Overflow dataset](https://quickwit.io/docs/get-started/quickstart)
- [Trace analytics with Grafana](https://quickwit.io/docs/get-started/tutorials/trace-analytics-with-grafana)
- [Distributed tracing with Jaeger](https://quickwit.io/docs/get-started/tutorials/tutorial-jaeger)

<br/>

<video src="https://github.com/quickwit-oss/quickwit/assets/653704/020b94b9-deeb-4376-9a3a-b82e1168094c" controls="controls" style="max-width: 1200px;">
</video>

<br/>

# 💡 Features

- Full-text search and aggregation queries
- Elasticsearch-compatible API, use Quickwit with any Elasticsearch or OpenSearch client
- [Jaeger-native](https://quickwit.io/docs/distributed-tracing/plug-quickwit-to-jaeger)
- OTEL-native for [logs](https://quickwit.io/docs/log-management/overview) and [traces](https://quickwit.io/docs/distributed-tracing/overview)
- [Schemaless](https://quickwit.io/docs/guides/schemaless) or strict schema indexing
- Schemaless analytics
- Sub-second search on cloud storage (Amazon S3, Azure Blob Storage, Google Cloud Storage, …)
- Decoupled compute and storage, stateless indexers & searchers
- [Grafana data source](https://github.com/quickwit-oss/quickwit-datasource)
- Kubernetes ready - See our [helm-chart](https://quickwit.io/docs/deployment/kubernetes/helm)
- RESTful API

## Enterprise ready

- Multiple [data sources](https://quickwit.io/docs/ingest-data/) Kafka / Kinesis / Pulsar native
- Multi-tenancy: indexing with many indexes and partitioning
- Retention policies
- Delete tasks (for GDPR use cases)
- Distributed and highly available* engine that scales out in seconds (*HA indexing only with Kafka)

# 📑 Architecture overview

![Quickwit Distributed Tracing](.