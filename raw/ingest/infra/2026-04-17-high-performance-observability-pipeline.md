<!-- GitHub Trending: Rust | 21,669 stars | +6 today -->

# vectordotdev/vector

> A high-performance observability data pipeline.

## Repository Info
- **URL**: https://github.com/vectordotdev/vector
- **Stars**: 21,669
- **Forks**: 2,093
- **Language**: Rust
- **License**: Mozilla Public License 2.0
- **Created**: 2018-08-27
- **Updated**: 2026-04-17
- **Topics**: agent, cloud-native, data-transformation, datadog, etl, events, forwarder, hacktoberfest, high-performance, logs, metrics, monitoring, observability, pipelines, rust-lang, stream-processing, telemetry, traces
- **Open Issues**: 2390

## README (excerpt)
[![Nightly](https://github.com/vectordotdev/vector/actions/workflows/nightly.yml/badge.svg)](https://github.com/vectordotdev/vector/actions/workflows/nightly.yml)
[![Integration/E2E Test Suite](https://github.com/vectordotdev/vector/actions/workflows/integration.yml/badge.svg)](https://github.com/vectordotdev/vector/actions/workflows/integration.yml/badge.svg?event=merge_group)
[![Component Features](https://github.com/vectordotdev/vector/actions/workflows/component_features.yml/badge.svg)](https://github.com/vectordotdev/vector/actions/workflows/component_features.yml)

<p align="center">
  <img src="website/static/img/diagram.svg" alt="Vector">
</p>

<p align="center">
  <strong>
    <a href="https://vector.dev/docs/setup/quickstart/">Quickstart</a>&nbsp;&nbsp;&bull;&nbsp;&nbsp;
    <a href="https://vector.dev/docs/">Docs</a>&nbsp;&nbsp;&bull;&nbsp;&nbsp;
    <a href="https://vector.dev/guides/">Guides</a>&nbsp;&nbsp;&bull;&nbsp;&nbsp;
    <a href="https://vector.dev/components/">Integrations</a>&nbsp;&nbsp;&bull;&nbsp;&nbsp;
    <a href="https://chat.vector.dev">Chat</a>&nbsp;&nbsp;&bull;&nbsp;&nbsp;
    <a href="https://vector.dev/releases/latest/download/">Download</a>&nbsp;&nbsp;&bull;&nbsp;&nbsp;
    <a href="https://rust-doc.vector.dev/">Rust Crate Docs</a>
  </strong>
</p>

## What is Vector?

Vector is a high-performance, end-to-end (agent & aggregator) observability data
pipeline that puts you in control of your observability data.
[Collect][docs.sources], [transform][docs.transforms], and [route][docs.sinks]
all your logs and metrics to any vendors you want today and any other
vendors you may want tomorrow. Vector enables dramatic cost reduction, novel
data enrichment, and data security where you need it, not where it is most
convenient for your vendors. Additionally, it is open source and up to 10x
faster than every alternative in the space.

To get started, follow our [**quickstart guide**][docs.quickstart] or [**install
Vector**][docs.installation].

Vector is maintained by Datadog's [Community Open Source Engineering team](https://opensource.datadoghq.com/about/#the-community-open-source-engineering-team).

### Principles

* **Reliable** - Built in [Rust][urls.rust], Vector's primary design goal is reliability.
* **End-to-end** - Deploys as an [agent][docs.roles#agent] or [aggregator][docs.roles#aggregator]. Vector is a complete platform.
* **Unified** - [Logs][docs.data-model.log], [metrics][docs.data-model.metric] (beta), and traces (coming soon). One tool for all of your data.

### Use cases

* Reduce total observability costs.
* Transition vendors without disrupting workflows.
* Enhance data quality and improve insights.
* Consolidate agents and eliminate agent fatigue.
* Improve overall observability performance and reliability.

### Community

* Vector is relied on by startups and enterprises like **Atlassian**, **T-Mobile**,
  **Comcast**, **Zendesk**, **Discord**, **Fastly**, **CVS**, **Trivago**,
  **Tuple**, **Douban**, **Visa**, **Mambu**, **Blockfi**, **Claranet**,
  **Instacart**, **Forcepoint**, and [many more][urls.production_users].
* Vector is **downloaded over 100,000 times per day**.
* Vector's largest user **processes over 500TB daily**.
* Vector has **over 500 contributors** and growing.

## Documentation

All user documentation is available at **[vector.dev/docs](https://vector.dev/docs)**.

Other Resources:

* [**Vector Calendar**][urls.vector_calendar]
* **Policies**:
  * [**Code of Conduct**][urls.vector_code_of_conduct]
  * [**Contributing**][urls.vector_contributing_policy]
  * [**Privacy**][urls.vector_privacy_policy]
  * [**Releases**][urls.vector_releases_policy]
  * [**Versioning**][urls.vector_versioning_policy]
  * [**Security**][urls.vector_security_policy]

## Comparisons

### Performance

The following performance tests demonstrate baseline performance between
common protocols with the exception of the Regex Parsing test.

| Test                                               