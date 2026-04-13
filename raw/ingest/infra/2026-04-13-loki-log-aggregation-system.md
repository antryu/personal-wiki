<!-- GitHub Trending: Go | 27,980 stars | +8 today -->

# grafana/loki

> Like Prometheus, but for logs.

## Repository Info
- **URL**: https://github.com/grafana/loki
- **Stars**: 27,981
- **Forks**: 3,974
- **Language**: Go
- **License**: GNU Affero General Public License v3.0
- **Created**: 2018-04-16
- **Updated**: 2026-04-13
- **Topics**: cloudnative, grafana, hacktoberfest, logging, loki, prometheus
- **Open Issues**: 1765

## README (excerpt)
<p align="center"><img src="docs/sources/logo_and_name.png" alt="Loki Logo"></p>

<a href="https://github.com/grafana/loki/actions/workflows/check.yml"><img src="https://github.com/grafana/loki/actions/workflows/check.yml/badge.svg" alt="Check" /></a>
<a href="https://goreportcard.com/report/github.com/grafana/loki"><img src="https://goreportcard.com/badge/github.com/grafana/loki" alt="Go Report Card" /></a>
<a href="https://slack.grafana.com/"><img src="https://img.shields.io/badge/join%20slack-%23loki-brightgreen.svg" alt="Slack" /></a>
[![Fuzzing Status](https://oss-fuzz-build-logs.storage.googleapis.com/badges/loki.svg)](https://bugs.chromium.org/p/oss-fuzz/issues/list?sort=-opened&can=1&q=proj:loki)

# Loki: like Prometheus, but for logs.

Loki is a horizontally-scalable, highly-available, multi-tenant log aggregation system inspired by [Prometheus](https://prometheus.io/).
It is designed to be very cost effective and easy to operate.
It does not index the contents of the logs, but rather a set of labels for each log stream.

Compared to other log aggregation systems, Loki:

- does not do full text indexing on logs. By storing compressed, unstructured logs and only indexing metadata, Loki is simpler to operate and cheaper to run.
- indexes and groups log streams using the same labels you’re already using with Prometheus, enabling you to seamlessly switch between metrics and logs using the same labels that you’re already using with Prometheus.
- is an especially good fit for storing [Kubernetes](https://kubernetes.io/) Pod logs. Metadata such as Pod labels is automatically scraped and indexed.
- has native support in Grafana (needs Grafana v6.0).

A Loki-based logging stack consists of 3 components:

- [Alloy](https://github.com/grafana/alloy) is agent, responsible for gathering logs and sending them to Loki.
- [Loki](https://github.com/grafana/loki) is the main service, responsible for storing logs and processing queries.
- [Grafana](https://github.com/grafana/grafana) for querying and displaying the logs.

**Note that Alloy replaced Promtail in the stack, because Promtail is considered to be feature complete, and future development for logs collection will be in [Grafana Alloy](https://github.com/grafana/alloy).**

Loki is like Prometheus, but for logs: we prefer a multidimensional label-based approach to indexing, and want a single-binary, easy to operate system with no dependencies.
Loki differs from Prometheus by focusing on logs instead of metrics, and delivering logs via push, instead of pull.

## Getting started

* [Installing Loki](https://grafana.com/docs/loki/latest/installation/)
* [Installing Alloy](https://grafana.com/docs/loki/latest/send-data/alloy/)
* [Getting Started](https://grafana.com/docs/loki/latest/get-started/)

### ⚠️ Helm Chart Migration
Effective March 16, 2026, the Grafana Loki Helm chart will be forked to a new repository [grafana-community/helm-charts](https://github.com/grafana-community/helm-charts).  The chart in the Loki repository will continue to be maintained for GEL users only.  See [#20705](https://github.com/grafana/loki/issues/20705) for details.

## Upgrading

* [Upgrading Loki](https://grafana.com/docs/loki/latest/upgrading/)

## Documentation

* [Latest release](https://grafana.com/docs/loki/latest/)
* [Upcoming release](https://grafana.com/docs/loki/next/), at the tip of the main branch

Commonly used sections:

- [API documentation](https://grafana.com/docs/loki/latest/api/) for getting logs into Loki.
- [Labels](https://grafana.com/docs/loki/latest/getting-started/labels/)
- [Operations](https://grafana.com/docs/loki/latest/operations/)
- [Docker Driver Client](https://grafana.com/docs/loki/latest/clients/docker-driver/) is a Docker plugin to send logs directly to Loki from Docker containers.
- [LogCLI](https://grafana.com/docs/loki/latest/query/logcli/) provides a command-line interface for querying logs.
- [Loki Canary](https://grafana.com/docs/loki/latest/operations/loki-c