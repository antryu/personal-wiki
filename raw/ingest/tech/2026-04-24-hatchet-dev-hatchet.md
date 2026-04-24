<!-- GitHub Trending: Go | 6,969 stars | +75 today -->

# hatchet-dev/hatchet

> 🪓 Run Background Tasks at Scale

## Repository Info
- **URL**: https://github.com/hatchet-dev/hatchet
- **Stars**: 6,969
- **Forks**: 352
- **Language**: Go
- **License**: MIT License
- **Created**: 2023-12-15
- **Updated**: 2026-04-24
- **Topics**: concurrency, dag, distributed, distributed-systems, durable-execution, event-driven, fastapi, golang, nodejs, python, queue, typescript, workflow-engine
- **Open Issues**: 89

## README (excerpt)
<div align="center">
<a href ="https://hatchet.run?utm_source=github&utm_campaign=readme">
<picture>
  <source media="(prefers-color-scheme: dark)" srcset="./assets/hatchet_logo_dark.svg">
  <img width="200" alt="Hatchet Logo" src="./assets/hatchet_logo_light.svg">
</picture>
</a>

### Run Background Tasks at Scale

[![Docs](https://img.shields.io/badge/docs-docs.hatchet.run-3F16E4)](https://docs.hatchet.run) [![License: MIT](https://img.shields.io/badge/License-MIT-purple.svg)](https://opensource.org/licenses/MIT) [![Go Reference](https://pkg.go.dev/badge/github.com/hatchet-dev/hatchet.svg)](https://pkg.go.dev/github.com/hatchet-dev/hatchet) [![NPM Downloads](https://img.shields.io/npm/dm/%40hatchet-dev%2Ftypescript-sdk)](https://www.npmjs.com/package/@hatchet-dev/typescript-sdk)

[![Discord](https://img.shields.io/discord/1088927970518909068?style=social&logo=discord)](https://hatchet.run/discord)
[![Twitter](https://img.shields.io/twitter/url/https/twitter.com/hatchet-dev.svg?style=social&label=Follow%20%40hatchet-dev)](https://twitter.com/hatchet_dev)
[![GitHub Repo stars](https://img.shields.io/github/stars/hatchet-dev/hatchet?style=social)](https://github.com/hatchet-dev/hatchet)

  <p align="center">
    <a href="https://cloud.onhatchet.run">Hatchet Cloud</a>
    ·
    <a href="https://docs.hatchet.run">Documentation</a>
    ·
    <a href="https://hatchet.run">Website</a>
    ·
    <a href="https://github.com/hatchet-dev/hatchet/issues">Issues</a>
  </p>

</div>

### What is Hatchet?

Hatchet is a platform for running background tasks and durable workflows, built on top of Postgres. It bundles a durable task queue, observability, alerting, a dashboard, and a CLI into a single platform.

### Get started quickly

The fastest way to get started with a running Hatchet instance is to install the Hatchet CLI (on MacOS, Linux or WSL) - note that this requires [Docker](https://www.docker.com/get-started) installed locally to work:

```sh
curl -fsSL https://install.hatchet.run/install.sh | bash
hatchet --version
hatchet server start
```

You can also sign up on [Hatchet Cloud](https://cloud.onhatchet.run) to try it out! We recommend this even if you plan on self-hosting, so you can have a look at what a fully-deployed Hatchet platform looks like.

To view full documentation for self-hosting and using cloud, have a look at the [docs](https://docs.hatchet.run).

### When should I use Hatchet?

Background tasks are critical for offloading work from your main web application. Usually background tasks are sent through a FIFO (first-in-first-out) queue, which helps guard against traffic spikes (queues can absorb a lot of load) and ensures that tasks are retried when your task handlers error out. Most stacks begin with a library-based queue backed by Redis or RabbitMQ (like Celery or BullMQ). But as your tasks become more complex, these queues become difficult to debug, monitor and start to fail in unexpected ways.

This is where Hatchet comes in. Hatchet is a full-featured background task management platform, with built-in support for chaining complex tasks together into workflows, alerting on failures, making tasks more durable, and viewing tasks in a real-time web dashboard.

### Features

<details open><summary><strong>📥 Queues</strong></summary>

####

Hatchet is built on a durable task queue that enqueues your tasks and sends them to your workers at a rate that your workers can handle. Hatchet will track the progress of your task and ensure that the work gets completed (or you get alerted), even if your application crashes.

**This is particularly useful for:**

- Ensuring that you never drop a user request
- Flattening large spikes in your application
- Breaking large, complex logic into smaller, reusable tasks

[Read more ➶](https://docs.hatchet.run/home/your-first-task)

- <details>

    <summary><code>Python</code></summary>

  ```python
  # 1. Define your task input
  class SimpleInput(BaseModel):
      message: str

  # 2.