<!-- GitHub Trending: Go | 63,713 stars | +29 today -->

# prometheus/prometheus

> The Prometheus monitoring system and time series database.

## Repository Info
- **URL**: https://github.com/prometheus/prometheus
- **Stars**: 63,713
- **Forks**: 10,349
- **Language**: Go
- **License**: Apache License 2.0
- **Created**: 2012-11-24
- **Updated**: 2026-04-22
- **Topics**: alerting, graphing, hacktoberfest, metrics, monitoring, prometheus, time-series
- **Open Issues**: 751

## README (excerpt)
<h1 align="center" style="border-bottom: none">
    <a href="https://prometheus.io" target="_blank"><img alt="Prometheus" src="/documentation/images/prometheus-logo.svg"></a><br>Prometheus
</h1>

<p align="center">Visit <a href="https://prometheus.io" target="_blank">prometheus.io</a> for the full documentation,
examples and guides.</p>

<div align="center">

[![CI](https://github.com/prometheus/prometheus/actions/workflows/ci.yml/badge.svg)](https://github.com/prometheus/prometheus/actions/workflows/ci.yml)
[![Docker Repository on Quay](https://quay.io/repository/prometheus/prometheus/status)][quay]
[![Docker Pulls](https://img.shields.io/docker/pulls/prom/prometheus.svg?maxAge=604800)][hub]
[![Go Report Card](https://goreportcard.com/badge/github.com/prometheus/prometheus)](https://goreportcard.com/report/github.com/prometheus/prometheus)
[![CII Best Practices](https://bestpractices.coreinfrastructure.org/projects/486/badge)](https://bestpractices.coreinfrastructure.org/projects/486)
[![govulncheck](https://github.com/prometheus/prometheus/actions/workflows/govulncheck.yml/badge.svg?event=schedule)](https://github.com/prometheus/prometheus/actions/workflows/govulncheck.yml)
[![OpenSSF Scorecard](https://api.securityscorecards.dev/projects/github.com/prometheus/prometheus/badge)](https://securityscorecards.dev/viewer/?uri=github.com/prometheus/prometheus)
[![CLOMonitor](https://img.shields.io/endpoint?url=https://clomonitor.io/api/projects/cncf/prometheus/badge)](https://clomonitor.io/projects/cncf/prometheus)
[![Fuzzing Status](https://oss-fuzz-build-logs.storage.googleapis.com/badges/prometheus.svg)](https://bugs.chromium.org/p/oss-fuzz/issues/list?sort=-opened&can=1&q=proj:prometheus)

</div>

Prometheus, a [Cloud Native Computing Foundation](https://cncf.io/) project, is a systems and service monitoring system. It collects metrics
from configured targets at given intervals, evaluates rule expressions,
displays the results, and can trigger alerts when specified conditions are observed.

The features that distinguish Prometheus from other metrics and monitoring systems are:

* A **multi-dimensional** data model (time series defined by metric name and set of key/value dimensions)
* PromQL, a **powerful and flexible query language** to leverage this dimensionality
* No dependency on distributed storage; **single server nodes are autonomous**
* An HTTP **pull model** for time series collection
* **Pushing time series** is supported via an intermediary gateway for batch jobs
* Targets are discovered via **service discovery** or **static configuration**
* Multiple modes of **graphing and dashboarding support**
* Support for hierarchical and horizontal **federation**

## Architecture overview

![Architecture overview](documentation/images/architecture.svg)

## Install

There are various ways to install Prometheus.

### Precompiled binaries

Precompiled binaries for released versions are available in the
[*download* section](https://prometheus.io/download/)
on [prometheus.io](https://prometheus.io). Using the latest production release binary
is the recommended way to install Prometheus.
See the [Installing](https://prometheus.io/docs/introduction/install/)
chapter in the documentation for all the details.

### Docker images

Docker images are available on [Quay.io](https://quay.io/repository/prometheus/prometheus) or [Docker Hub](https://hub.docker.com/r/prom/prometheus/).

You can launch a Prometheus container for trying it out with

```bash
docker run --name prometheus -d -p 127.0.0.1:9090:9090 prom/prometheus
```

Prometheus will now be reachable at <http://localhost:9090/>.

### Building from source

To build Prometheus from source code, you need:

* Go: Version specified in [go.mod](./go.mod) or greater.
* NodeJS: Version specified in [.nvmrc](./web/ui/.nvmrc) or greater.
* npm: Version 10 or greater (check with `npm --version` and [here](https://www.npmjs.com/)).

Start by cloning the repository:

```bash
git clone https://g