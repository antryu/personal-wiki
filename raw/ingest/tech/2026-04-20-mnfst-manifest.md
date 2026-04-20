<!-- GitHub Trending: TypeScript | 5,333 stars | +381 today -->

# mnfst/manifest

> Smart Model Routing for Personal AI Agents. Cut Costs up to 70% 🦞👧🦚

## Repository Info
- **URL**: https://github.com/mnfst/manifest
- **Stars**: 5,334
- **Forks**: 300
- **Language**: TypeScript
- **License**: MIT License
- **Created**: 2022-09-27
- **Updated**: 2026-04-20
- **Topics**: cheap, cost-tracking, hermes-agent, llm-observability, llm-router, open, openclaw, openclaw-extension, openclaw-plugin, personal-ai, token-tracking
- **Open Issues**: 58

## README (excerpt)
<p align="center">
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="https://raw.githubusercontent.com/mnfst/manifest/HEAD/.github/assets/logo-white.svg" />
    <source media="(prefers-color-scheme: light)" srcset="https://raw.githubusercontent.com/mnfst/manifest/HEAD/.github/assets/logo-dark.svg" />
    <img src="https://raw.githubusercontent.com/mnfst/manifest/HEAD/.github/assets/logo-dark.svg" alt="Manifest" height="53" title="Manifest"/>
  </picture>
</p>
<p align="center">
    Affordable Personal AI
</p>

![manifest-gh](https://github.com/user-attachments/assets/7dd74fc2-f7d6-4558-a95a-014ed754a125)

<p align="center">
  <span><img src="https://img.shields.io/badge/status-beta-yellow" alt="beta" /></span>
  &nbsp;
  <a href="https://github.com/mnfst/manifest/stargazers"><img src="https://img.shields.io/github/stars/mnfst/manifest?style=flat" alt="GitHub stars" /></a>
  &nbsp;
  <a href="https://hub.docker.com/r/manifestdotbuild/manifest"><img src="https://img.shields.io/docker/pulls/manifestdotbuild/manifest?color=2496ED&label=docker%20pulls" alt="Docker pulls" /></a>
  &nbsp;
  <a href="https://hub.docker.com/r/manifestdotbuild/manifest/tags"><img src="https://img.shields.io/docker/image-size/manifestdotbuild/manifest/latest?color=2496ED&label=image%20size" alt="Docker image size" /></a>
  &nbsp;
  <a href="https://github.com/mnfst/manifest/actions/workflows/ci.yml"><img src="https://img.shields.io/github/actions/workflow/status/mnfst/manifest/ci.yml?branch=main&label=CI" alt="CI status" /></a>
  &nbsp;
  <a href="https://app.codecov.io/gh/mnfst/manifest"><img src="https://img.shields.io/codecov/c/github/mnfst/manifest?label=coverage" alt="Codecov" /></a>
  &nbsp;
  <a href="LICENSE"><img src="https://img.shields.io/github/license/mnfst/manifest?color=blue" alt="license" /></a>
  &nbsp;
  <a href="https://discord.gg/FepAked3W7"><img src="https://img.shields.io/badge/Discord-Join-5865F2?logo=discord&logoColor=white" alt="Discord" /></a>
</p>

<p align="center">
<a href="https://trendshift.io/repositories/12890" target="_blank"><img src="https://trendshift.io/api/badge/repositories/12890" alt="mnfst%2Fmanifest | Trendshift" style="width: 250px; height: 55px;" width="250" height="55"/></a>
</p>

## What is Manifest?

Manifest is a smart model router for Personal AI Agents like OpenClaw or Hermes. It sits between your agent and your LLM providers, scores each request, and routes it to the cheapest model that can handle it. Simple questions go to fast, cheap models. Hard problems go to expensive ones. You save money without thinking about it.

- Route requests to the right model: Cut costs up to 70%
- Automatic fallbacks: If a model fails, the next one picks up
- Set limits: Don't exceed your budget

## Quick start

### Cloud version

Go to [app.manifest.build](https://app.manifest.build) and follow the guide.

### Self-hosted (Docker)

Manifest ships as a [Docker image](https://hub.docker.com/r/manifestdotbuild/manifest). One command:

```bash
bash <(curl -sSL https://raw.githubusercontent.com/mnfst/manifest/main/docker/install.sh)
```

The installer downloads the compose file, generates a secret, and brings up the stack. Give it about 30 seconds to boot.

Open [http://localhost:3001](http://localhost:3001) and sign up. The first account you create becomes the admin. Full self-hosting guide: [docker/DOCKER_README.md](docker/DOCKER_README.md).

> Docker is the only supported distribution. The legacy `manifest` npm package is deprecated and no longer published.

## How it works

Every request to `manifest/auto` goes through a 23-dimension scoring algorithm (runs in under 2ms). The scorer picks a tier (simple, standard, complex, or reasoning) and routes to the best model in that tier from your connected providers.

All routing data (tokens, costs, model, duration) is recorded automatically. You see it in the dashboard. No extra setup.

## Manifest vs OpenRouter

|              | Manifest                      