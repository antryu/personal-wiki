<!-- GitHub Trending: Go | 16,775 stars | +14 today -->

# VictoriaMetrics/VictoriaMetrics

> VictoriaMetrics: fast, cost-effective monitoring solution and time series database

## Repository Info
- **URL**: https://github.com/VictoriaMetrics/VictoriaMetrics
- **Stars**: 16,776
- **Forks**: 1,613
- **Language**: Go
- **License**: Apache License 2.0
- **Created**: 2018-09-30
- **Updated**: 2026-04-16
- **Topics**: database, grafana, graphite, influxdb, kubernetes, monitoring, observability, opentelemetry, opentsdb, prometheus, promql, thanos, tsdb
- **Open Issues**: 783

## README (excerpt)
# VictoriaMetrics

[![Latest Release](https://img.shields.io/github/v/release/VictoriaMetrics/VictoriaMetrics?sort=semver&label=&filter=!*-victorialogs&logo=github&labelColor=gray&color=gray&link=https%3A%2F%2Fgithub.com%2FVictoriaMetrics%2FVictoriaMetrics%2Freleases%2Flatest)](https://github.com/VictoriaMetrics/VictoriaMetrics/releases)
[![Docker Pulls](https://img.shields.io/docker/pulls/victoriametrics/victoria-metrics?label=&logo=docker&logoColor=white&labelColor=2496ED&color=2496ED&link=https%3A%2F%2Fhub.docker.com%2Fr%2Fvictoriametrics%2Fvictoria-metrics)](https://hub.docker.com/u/victoriametrics)
[![Go Report](https://goreportcard.com/badge/github.com/VictoriaMetrics/VictoriaMetrics?link=https%3A%2F%2Fgoreportcard.com%2Freport%2Fgithub.com%2FVictoriaMetrics%2FVictoriaMetrics)](https://goreportcard.com/report/github.com/VictoriaMetrics/VictoriaMetrics)
[![Build Status](https://github.com/VictoriaMetrics/VictoriaMetrics/actions/workflows/build.yml/badge.svg?branch=master&link=https%3A%2F%2Fgithub.com%2FVictoriaMetrics%2FVictoriaMetrics%2Factions)](https://github.com/VictoriaMetrics/VictoriaMetrics/actions/workflows/build.yml)
[![License](https://img.shields.io/github/license/VictoriaMetrics/VictoriaMetrics?labelColor=green&label=&link=https%3A%2F%2Fgithub.com%2FVictoriaMetrics%2FVictoriaMetrics%2Fblob%2Fmaster%2FLICENSE)](https://github.com/VictoriaMetrics/VictoriaMetrics/blob/master/LICENSE)
[![Join Slack](https://img.shields.io/badge/Join%20Slack-4A154B?logo=slack)](https://slack.victoriametrics.com)
[![X](https://img.shields.io/twitter/follow/VictoriaMetrics?style=flat&label=Follow&color=black&logo=x&labelColor=black&link=https%3A%2F%2Fx.com%2FVictoriaMetrics)](https://x.com/VictoriaMetrics/)
[![Reddit](https://img.shields.io/reddit/subreddit-subscribers/VictoriaMetrics?style=flat&label=Join&labelColor=red&logoColor=white&logo=reddit&link=https%3A%2F%2Fwww.reddit.com%2Fr%2FVictoriaMetrics)](https://www.reddit.com/r/VictoriaMetrics/)

<picture>
  <source srcset="docs/victoriametrics/logo_white.webp" media="(prefers-color-scheme: dark)">
  <source srcset="docs/victoriametrics/logo.webp" media="(prefers-color-scheme: light)">
  <img src="docs/victoriametrics/logo.webp" width="300" alt="VictoriaMetrics logo">
</picture>

VictoriaMetrics is a fast, cost-effective, and scalable solution for monitoring and managing time series data. It delivers high performance and reliability, making it an ideal choice for businesses of all sizes.

Here are some resources and information about VictoriaMetrics:

- **Case studies**: [Grammarly, Roblox, Wix, Spotify,...](https://docs.victoriametrics.com/victoriametrics/casestudies/).
- **Available**: [Binary releases](https://github.com/VictoriaMetrics/VictoriaMetrics/releases/latest), Docker images on [Docker Hub](https://hub.docker.com/r/victoriametrics/victoria-metrics/) and [Quay](https://quay.io/repository/victoriametrics/victoria-metrics), [Source code](https://github.com/VictoriaMetrics/VictoriaMetrics).
- **Deployment types**: [Single-node version](https://docs.victoriametrics.com/victoriametrics/single-server-victoriametrics/) and [Cluster version](https://docs.victoriametrics.com/victoriametrics/cluster-victoriametrics/) under [Apache License 2.0](https://github.com/VictoriaMetrics/VictoriaMetrics/blob/master/LICENSE).
- **Getting started:** Read [key concepts](https://docs.victoriametrics.com/victoriametrics/keyconcepts/) and follow the
  [quick start guide](https://docs.victoriametrics.com/victoriametrics/quick-start/).
- **Community**: [Slack](https://slack.victoriametrics.com/) (join via [Slack Inviter](https://slack.victoriametrics.com/)), [X (Twitter)](https://x.com/VictoriaMetrics), [YouTube](https://www.youtube.com/@VictoriaMetrics). See full list [here](https://docs.victoriametrics.com/victoriametrics/#community-and-contributions).
- **Changelog**: Project evolves fast - check the [CHANGELOG](https://docs.victoriametrics.com/victoriametrics/changelog/), and [How to upgrade](h