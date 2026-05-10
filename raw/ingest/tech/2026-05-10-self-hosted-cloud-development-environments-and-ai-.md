<!-- GitHub Trending: Go | 13,136 stars | +9 today -->

# coder/coder

> Secure environments for developers and their agents

## Repository Info
- **URL**: https://github.com/coder/coder
- **Stars**: 13,136
- **Forks**: 1,284
- **Language**: Go
- **License**: GNU Affero General Public License v3.0
- **Created**: 2021-12-22
- **Updated**: 2026-05-10
- **Topics**: agents, dev-tools, development-environment, go, golang, ide, jetbrains, remote-development, terraform, vscode
- **Open Issues**: 940

## README (excerpt)
<!-- markdownlint-disable MD041 -->
<div align="center">
  <a href="https://coder.com#gh-light-mode-only">
    <img src="./docs/images/logo-black.png" alt="Coder Logo Light" style="width: 128px">
  </a>
  <a href="https://coder.com#gh-dark-mode-only">
    <img src="./docs/images/logo-white.png" alt="Coder Logo Dark" style="width: 128px">
  </a>

  <h1>
  Self-Hosted Cloud Development Environments and AI Agents
  </h1>

  <a href="https://coder.com#gh-light-mode-only">
    <img src="./docs/images/banner-black.png" alt="Coder Banner Light" style="width: 650px">
  </a>
  <a href="https://coder.com#gh-dark-mode-only">
    <img src="./docs/images/banner-white.png" alt="Coder Banner Dark" style="width: 650px">
  </a>

  <br>
  <br>

[Quickstart](#quickstart) | [Docs](https://coder.com/docs) | [Why Coder](https://coder.com/why) | [Premium](https://coder.com/pricing#compare-plans)

[![discord](https://img.shields.io/discord/747933592273027093?label=discord)](https://discord.gg/coder)
[![release](https://img.shields.io/github/v/release/coder/coder)](https://github.com/coder/coder/releases/latest)
[![godoc](https://pkg.go.dev/badge/github.com/coder/coder.svg)](https://pkg.go.dev/github.com/coder/coder)
[![Go Report Card](https://goreportcard.com/badge/github.com/coder/coder/v2)](https://goreportcard.com/report/github.com/coder/coder/v2)
[![OpenSSF Best Practices](https://www.bestpractices.dev/projects/9511/badge)](https://www.bestpractices.dev/projects/9511)
[![OpenSSF Scorecard](https://api.securityscorecards.dev/projects/github.com/coder/coder/badge)](https://scorecard.dev/viewer/?uri=github.com%2Fcoder%2Fcoder)
[![license](https://img.shields.io/github/license/coder/coder)](./LICENSE)

</div>

[Coder](https://coder.com) is a self-hosted platform for cloud development environments and AI coding agents. Workspaces are defined with Terraform, connected through a secure Wireguard® tunnel, and automatically shut down when not used. Coder Agents runs a native AI coding agent whose loop executes in the control plane on your infrastructure, with no API keys in workspaces.

- Define cloud development environments in Terraform
  - EC2 VMs, Kubernetes Pods, Docker Containers, etc.
- Automatically shutdown idle resources to save on costs
- Onboard developers in seconds instead of days
- Delegate coding work to AI agents on your infrastructure
  - Bring any model (Anthropic, OpenAI, Google, Bedrock, self-hosted)
  - No LLM credentials in workspaces, user identity on every action
  - Centralized model governance, cost tracking, and audit logging

<p align="center">
  <img src="./docs/images/hero-image.png" alt="Coder platform showing templates and a running workspace">
</p>

## Quickstart

The most convenient way to try Coder is to install it on your local machine and experiment with provisioning cloud development environments using Docker (works on Linux, macOS, and Windows).

```shell
# First, install Coder
curl -L https://coder.com/install.sh | sh

# Start the Coder server (caches data in ~/.cache/coder)
coder server

# Navigate to http://localhost:3000 to create your initial user,
# create a Docker template and provision a workspace
```

## Install

The easiest way to install Coder is to use the
[install script](https://github.com/coder/coder/blob/main/install.sh) for Linux
and macOS. For Windows, use the latest `..._installer.exe` file from GitHub
Releases.

```shell
curl -L https://coder.com/install.sh | sh
```

You can run the install script with `--dry-run` to see the commands that will be used to install without executing them. Run the install script with `--help` for additional flags.

> See [install](https://coder.com/docs/install) for additional methods.

Once installed, you can start a production deployment with a single command:

```shell
# Automatically sets up an external access URL on *.try.coder.app
coder server

# Requires a PostgreSQL instance (version 13 or higher) and external access URL
coder server --postgres-url <url> --ac