<!-- GitHub Trending: Rust | 8,962 stars | +1 today -->

# risingwavelabs/risingwave

> Event streaming platform for agentic AI. Continuously ingest, transform, and serve event streams in real time, at scale.

## Repository Info
- **URL**: https://github.com/risingwavelabs/risingwave
- **Stars**: 8,962
- **Forks**: 761
- **Language**: Rust
- **License**: Apache License 2.0
- **Created**: 2022-01-28
- **Updated**: 2026-04-29
- **Topics**: apache-iceberg, data-engineering, database, etl-pipeline, event-streaming, kafka, materialized-view, postgresql, rust, stream-processing, webhook
- **Open Issues**: 1467

## README (excerpt)

<p align="center">
  <picture>
    <source srcset=".github/RisingWave-logo-dark.svg" width="500px" media="(prefers-color-scheme: dark)">
    <img src=".github/RisingWave-logo-light.svg" width="500px">
  </picture>
</p>


<div align="center">

### 🌊 Event Streaming for Agentic AI

</div>
<p align="center">
  <a href="https://docs.risingwave.com/">Docs</a> | <a href="https://docs.risingwave.com/get-started/rw-benchmarks-stream-processing">Benchmarks</a> | <a href="https://docs.risingwave.com/demos/overview">Demos</a> | <a href="https://risingwave.com/customers/">Case Studies</a>
</p>

<p align="center">

<div align="center">
  <a
    href="https://github.com/risingwavelabs/risingwave/releases/latest"
    target="_blank"
  >
    <img alt="Release" src="https://img.shields.io/github/v/release/risingwavelabs/risingwave.svg?sort=semver" />
  </a>
  <a
    href="https://go.risingwave.com/slack"
    target="_blank"
  >
    <img alt="Slack" src="https://badgen.net/badge/Slack/Join%20RisingWave/0abd59?icon=slack" />
  </a>
  <a
    href="https://x.com/risingwavelabs"
    target="_blank"
  >
    <img alt="X" src="https://img.shields.io/twitter/follow/risingwavelabs" />
  </a>
  <a
    href="https://www.youtube.com/@risingwave-labs"
    target="_blank"
  >
    <img alt="YouTube" src="https://img.shields.io/youtube/channel/views/UCsHwdyBRxBpmkA5RRd0YNEA" />
  </a>
</div>

RisingWave is an event streaming platform for agentic AI. It continuously ingests data from databases, event streams, and webhooks, processes it incrementally, and serves fresh results at low latency, replacing the traditional event streaming stack (e.g., Debezium + Kafka + Flink + serving DB) with a single system.

![RisingWave](./docs/dev/src/images/architecture_20250609.jpg)

---

## Try it out in 60 seconds

```shell
curl -L https://risingwave.com/sh | sh
```

For Docker, Kubernetes, and other options, see the [quick start guide](https://docs.risingwave.com/get-started/quickstart).

---

## The problem

Agents and real-time applications need data that is always fresh and queryable at low latency. The standard approach chains together Debezium for CDC, Kafka for transport, Flink for processing, and a database for serving. Each hop adds latency and each system adds operational overhead.

RisingWave replaces the whole stack: ingest, process, serve, store.

---

## How it works

### Ingest from any source

RisingWave ingests across the full data spectrum:

- **Webhooks**: HTTP-based event ingestion from SaaS applications and external systems
- **Database changes**: native CDC from PostgreSQL, MySQL, and others via transaction log reading
- **Event streams**: Kafka, Pulsar, Kinesis, and other message brokers
- **Historical data**: batch ingestion from S3, data warehouses, and other storage systems

All sources are unified under the same SQL interface. Streams and tables can be joined freely.

### Process continuously

RisingWave performs incremental computation over ingested data. When upstream data changes, only the affected results are recomputed. End-to-end freshness is under 100 ms.

This is the core mechanism behind everything RisingWave does: materialized views that are always up to date, without full recomputation on every query.

### Serve at low latency

Query results are maintained in RisingWave's internal row store and served at 10-20 ms p99 latency. Agents and applications query this layer directly using standard SQL. No polling, no cache warming, no TTL management.

### Store in Apache Iceberg™

For long-term retention and analytical access, RisingWave writes to Apache Iceberg™ tables. It hosts the Iceberg REST catalog directly and handles table maintenance — compaction, small-file optimization, snapshot cleanup — without external tooling. Iceberg queries are executed via [Apache DataFusion](https://datafusion.apache.org/), a vectorized query engine. Because Iceberg is an open format, data is also readable by Spark, Trino, DuckDB, and other engines.

The row