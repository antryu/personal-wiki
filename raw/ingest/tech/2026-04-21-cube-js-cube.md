<!-- GitHub Trending: Rust | 19,830 stars | +10 today -->

# cube-js/cube

> 📊 Cube Core is open-source semantic layer for AI, BI and embedded analytics

## Repository Info
- **URL**: https://github.com/cube-js/cube
- **Stars**: 19,830
- **Forks**: 2,002
- **Language**: Rust
- **License**: Other
- **Created**: 2018-09-16
- **Updated**: 2026-04-21
- **Topics**: agentic-analytics, agents, ai, analytics, bi, bigquery, business-intelligence, businessintelligence, conversational-analytics, cube, databricks, embedded-analytics, headless-bi, mysql, postgresql, rust, semantic-layer, snowflake, sql
- **Open Issues**: 947

## README (excerpt)
![]()
<p align="center">
  <a href="https://cube.dev?ref=github-readme"><img src="https://raw.githubusercontent.com/cube-js/cube/master/docs/content/cube-core-logo.png" alt="Cube Core — Open-Source Semantic Layer" width="300px"></a>
</p>
<br/>

[Website](https://cube.dev?ref=github-readme) • [Docs](https://cube.dev/docs?ref=github-readme) • [Examples](https://cube.dev/docs/examples?ref=github-readme) • [Blog](https://cube.dev/blog?ref=github-readme) • [Slack](https://slack.cube.dev?ref=github-readme) • [X](https://twitter.com/the_cube_dev)

[![npm version](https://badge.fury.io/js/%40cubejs-backend%2Fserver.svg)](https://badge.fury.io/js/%40cubejs-backend%2Fserver)
[![GitHub Actions](https://github.com/cube-js/cube/workflows/Build/badge.svg)](https://github.com/cube-js/cube/actions?query=workflow%3ABuild+branch%3Amaster)
[![FOSSA Status](https://app.fossa.io/api/projects/git%2Bgithub.com%2Fcube-js%2Fcube.js.svg?type=shield)](https://app.fossa.io/projects/git%2Bgithub.com%2Fcube-js%2Fcube.js?ref=badge_shield)

__Cube Core is an open-source semantic layer.__ Cube Core can be used to build embedded analytics in your applications, create your own business intelligence tool or provide context about data to AI agents. Cube Core is headless and comes with multiple APIs for embedded analytics and BI: REST, GraphQL, and SQL.

If you are looking for a fully integrated platform, check out [Cube](https://cube.dev), a modern AI-first business intelligence platform. We use Cube Core to power it.

<img
  src="https://lgo0ecceic.ucarecd.net/418db1f9-7597-4e00-8c10-eba19fcac20f/"
  style="border: none"
  width="100%"
/>

<p align="center">
  <i>Learn more about connecting Cube to <a href="https://cube.dev/cube-core/getting-started/create-a-project?ref=github-readme" target="_blank">data sources</a> and <a href="https://cube.dev/docs/integrations?ref=github-readme" target="_blank">analytics & visualization tools</a>.</i>
</p>

Cube Core was designed to work with all SQL data sources, including cloud data warehouses like Snowflake, Databricks, and BigQuery; query engines like Presto and Amazon Athena; and application databases like Postgres. Cube Core has a built-in relational caching engine to provide sub-second latency and high concurrency for API requests.

## Why Cube Core?

Every business intelligence tool relies on a semantic layer as its core engine—a critical component that defines metrics, dimensions, and business logic while abstracting the complexity of underlying data sources. However, most semantic layers are proprietary, tightly coupled to specific BI platforms, and cannot be reused across different applications.

Cube Core is an open-source project that aims to create an open, modern semantic layer that can be used to power any analytics applications and AI agents. By decoupling the semantic layer from specific tools and making it accessible through standard APIs, Cube Core enables organizations to define their metrics once and use them everywhere—from BI tools to embedded analytics to AI agents.

## Getting Started 🚀

You can get started with Cube locally or self-host it with [Docker](https://www.docker.com/).

Once Docker is installed, in a new folder for your project, run the following command:

```bash
docker run -p 4000:4000 \
  -p 15432:15432 \
  -v ${PWD}:/cube/conf \
  -e CUBEJS_DEV_MODE=true \
  cubejs/cube
```

Then, open http://localhost:4000 in your browser to continue setup.

For a step-by-step guide, [see the docs](https://cube.dev/cube-core/getting-started/create-a-project?ref=github-readme).

### Cube — Complete Modern BI Tool from Cube Core Creators

[Cube](https://cube.dev?ref=github-readme) is a complete modern agentic analytics platform built on Cube Core. It provides a fully integrated solution with a user-friendly interface, advanced analytics capabilities, and managed infrastructure.

<a href="https://cubecloud.dev/auth/signup?ref=github-readme"><img src="https://cubedev-blog-images.s3.us-east-2.amazonaws.c