<!-- GitHub Trending: Rust | 3,807 stars | +5 today -->

# restatedev/restate

> Restate is the platform for building resilient applications that tolerate all infrastructure faults w/o the need for a PhD.

## Repository Info
- **URL**: https://github.com/restatedev/restate
- **Stars**: 3,807
- **Forks**: 153
- **Language**: Rust
- **License**: Other
- **Created**: 2023-01-04
- **Updated**: 2026-05-01
- **Topics**: async-await, cli, consistent-state, distributed-systems, durable-execution, event-driven, microservices, reliable-communication, serverless, workflow-engine
- **Open Issues**: 364

## README (excerpt)
[![Documentation](https://img.shields.io/badge/doc-reference-blue)](https://docs.restate.dev)
[![Examples](https://img.shields.io/badge/view-examples-blue)](https://github.com/restatedev/examples)
[![Discord](https://img.shields.io/discord/1128210118216007792?logo=discord)](https://discord.gg/skW3AZ6uGd)
[![Slack](https://img.shields.io/badge/Slack-4A154B?logo=slack&logoColor=fff)](https://join.slack.com/t/restatecommunity/shared_invite/zt-2v9gl005c-WBpr167o5XJZI1l7HWKImA)
[![Twitter](https://img.shields.io/twitter/follow/restatedev.svg?style=social&label=Follow)](https://x.com/intent/follow?screen_name=restatedev)

# Restate - Building resilient applications made easy!

<p align="center">
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="https://restate.dev/use-cases-dark.png">
    <source media="(prefers-color-scheme: light)" srcset="https://restate.dev/use-cases-light.png">
    <img alt="Restate overview" src="https://restate.dev/use-cases-light.png" width="100%">
  </picture>
</p>

[Restate](https://restate.dev) is the simplest way to build resilient applications.

Restate provides a distributed durable version of your everyday building blocks, letting you build a wide range of use cases:

* [Durable AI Agents](https://github.com/restatedev/ai-examples)
* [Workflows-as-Code](https://docs.restate.dev/use-cases/workflows)
* [Microservice Orchestration](https://docs.restate.dev/use-cases/microservice-orchestration)
* [Event Processing](https://docs.restate.dev/use-cases/event-processing)
* [Async Tasks](https://docs.restate.dev/use-cases/async-tasks)
* [Agents, Stateful Actors, state machines, and much more](https://github.com/restatedev/examples)

## Get started with Restate

1. 🏎 [Follow the Quickstart](https://docs.restate.dev/get_started/quickstart) to get Restate up and running within 2 minutes!
1. 💡 [The Tour of Restate](https://docs.restate.dev/get_started/tour) walks you through the most important features of Restate.

## SDKs

Restate supports the following SDKs:

* [Typescript](https://github.com/restatedev/sdk-typescript)
* [Java and Kotlin](https://github.com/restatedev/sdk-java)
* [Python](https://github.com/restatedev/sdk-python)
* [Go](https://github.com/restatedev/sdk-go)
* [Rust](https://github.com/restatedev/sdk-rust)

## Install

We offer pre-built binaries of the CLI and the server for MacOS and Linux.

Have a look at the [Quickstart](https://docs.restate.dev/get_started/quickstart) or [installation instructions in the docs](https://docs.restate.dev/develop/local_dev). 

### Install the server

Install via Homebrew:
```bash
brew install restatedev/tap/restate-server
```

Run via npx:
```bash
npx @restatedev/restate-server
```

Run via docker:
```bash
docker run --rm -p 8080:8080 -p 9070:9070 -p 9071:9071 \
    --add-host=host.docker.internal:host-gateway docker.restate.dev/restatedev/restate:latest
```

### Install the CLI

Install via Homebrew:
```bash
brew install restatedev/tap/restate
```

Install via npm:
```bash
npm install --global @restatedev/restate
```

Run via npx:
```bash
npx @restatedev/restate
```

You can also download the binaries from the [release page](https://github.com/restatedev/restate/releases) or our [download page](https://restate.dev/get-restate/).

## Community

* 🤗️ Join our online community on [Discord](https://discord.gg/skW3AZ6uGd) or [Slack](https://join.slack.com/t/restatecommunity/shared_invite/zt-2v9gl005c-WBpr167o5XJZI1l7HWKImA) for help, sharing feedback and talking to the community.
* 📖 [Check out our documentation](https://docs.restate.dev) to get started quickly!
* 📣 [Follow us on Twitter](https://twitter.com/restatedev) for staying up to date.
* 🙋 [Create a GitHub issue](https://github.com/restatedev/restate/issues) for requesting a new feature or reporting a problem.
* 🏠 [Visit our GitHub org](https://github.com/restatedev) for exploring other repositories.

## Core primitives

The basic primitives Restate offers to simplify application de