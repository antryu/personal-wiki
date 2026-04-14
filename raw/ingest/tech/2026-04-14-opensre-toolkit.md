<!-- GitHub Trending: Python | 724 stars | +128 today -->

# Tracer-Cloud/opensre

> Build your own AI SRE agents. The open source toolkit for the AI era ✨ 

## Repository Info
- **URL**: https://github.com/Tracer-Cloud/opensre
- **Stars**: 724
- **Forks**: 102
- **Language**: Python
- **License**: Apache License 2.0
- **Created**: 2026-01-13
- **Updated**: 2026-04-14
- **Topics**: ai-sre, alerting, datadog, grafana, incident-management, observability, remediation, root-cause-analysis, site-reliability-engineering, slack, sre
- **Open Issues**: 82

## README (excerpt)
<div align="center">

<p align="center">
  <img src="docs/logo/opensre-logomark-full.svg" alt="OpenSRE" width="360" />
</p>

<h3>OpenSRE: Build Your Own AI SRE Agents</h3>

<p>The open-source framework for AI SRE agents, and the training and evaluation environment they need to improve. Connect the 40+ tools you already run, define your own workflows, and investigate incidents on your own infrastructure.</p>

<p>
  <a href="https://github.com/Tracer-Cloud/opensre/stargazers"><img src="https://img.shields.io/github/stars/Tracer-Cloud/opensre?style=flat-square&color=FF6B00" alt="Stars"></a>
  <a href="https://github.com/Tracer-Cloud/opensre/blob/main/LICENSE"><img src="https://img.shields.io/badge/license-Apache%202.0-blue?style=flat-square" alt="License"></a>
  <a href="https://github.com/Tracer-Cloud/opensre/blob/main/.github/workflows/ci.yml"><img src="https://img.shields.io/github/actions/workflow/status/Tracer-Cloud/opensre/ci.yml?style=flat-square&label=CI" alt="CI"></a>
  <img src="https://img.shields.io/badge/open%20source-forever-brightgreen?style=flat-square" alt="Open Source">
  <a href="https://discord.gg/7NTpevXf7w"><img src="https://img.shields.io/badge/Discord-Join%20Us-5865F2?style=flat-square&logo=discord&logoColor=white" alt="Discord"></a>
</p>

<p align="center">
  <strong>
    <a href="https://www.opensre.com/docs/quickstart">Quickstart</a> ·
    <a href="https://www.opensre.com/docs">Docs</a> ·
    <a href="https://tracer.mintlify.app/faq">FAQ</a> ·
    <a href="https://trust.tracer.cloud/">Security</a>
  </strong>
</p>

</div>

---

## Why OpenSRE?

When something breaks in production, the evidence is scattered across logs, metrics, traces, runbooks, and Slack threads. OpenSRE is an open-source framework for AI SRE agents that resolve production incidents, built to run on your own infrastructure.

We do that because SWE-bench<sup>1</sup> gave coding agents scalable training data and clear feedback. Production incident response still lacks an equivalent.

Distributed failures are slower, noisier, and harder to simulate and evaluate than local code tasks, which is why AI SRE, and AI for production debugging more broadly, remains unsolved.

OpenSRE is building _that_ missing layer:

> an open reinforcement learning environment for agentic infrastructure incident response, with end-to-end tests and synthetic incident simulations for realistic production failures

We do that by:

- building easy-to-deploy, customizable AI SRE agents for production incident investigation and response
- running scored synthetic RCA suites that check root-cause accuracy, required evidence, and adversarial red herrings [(tests/synthetic)](tests/synthetic/rds_postgres)
- running real-world end-to-end tests across cloud-backed scenarios including Kubernetes, EC2, CloudWatch, Lambda, ECS Fargate, and Flink [(tests/e2e)](tests/e2e)
- keeping semantic test-catalog naming so e2e vs synthetic and local vs cloud boundaries stay obvious [(tests/README.md)](tests/README.md)

Our mission is to build AI SRE agents on top of this, scale it to thousands of realistic infrastructure failure scenarios, and establish OpenSRE as the benchmark and training ground for AI SRE.

<sup>1</sup> https://arxiv.org/abs/2310.06770

---

## Install

```bash
curl -fsSL https://raw.githubusercontent.com/Tracer-Cloud/opensre/main/install.sh | bash
```

```bash
brew install Tracer-Cloud/opensre/opensre
```

```powershell
irm https://raw.githubusercontent.com/Tracer-Cloud/opensre/main/install.ps1 | iex
```

<!--
```bash
pipx install opensre
``` -->

---

## Quick Start

```bash
opensre onboard
opensre investigate -i tests/e2e/kubernetes/fixtures/datadog_k8s_alert.json
opensre update
```

---


## Development

> **New to OpenSRE?** See [SETUP.md](SETUP.md) for detailed platform-specific setup instructions, including Windows setup, environment configuration, and more.

```bash
git clone https://github.com/Tracer-Cloud/opensre
cd opensre
make install
# run opensre onboard