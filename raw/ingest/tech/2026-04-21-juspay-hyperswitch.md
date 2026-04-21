<!-- GitHub Trending: Rust | 42,508 stars | +24 today -->

# juspay/hyperswitch

> An open source payments switch written in Rust to make payments fast, reliable and affordable

## Repository Info
- **URL**: https://github.com/juspay/hyperswitch
- **Stars**: 42,508
- **Forks**: 4,600
- **Language**: Rust
- **License**: Apache License 2.0
- **Created**: 2022-10-17
- **Updated**: 2026-04-21
- **Topics**: beginner-friendly, featured, finance, hacktoberfest, high-performance, open-source, orchestration, payments, postgresql, redis, restful-api, rust, sdk, works-with-react
- **Open Issues**: 1523

## README (excerpt)
<p align="center">
  <img src="./docs/imgs/hyperswitch-logo-dark.svg#gh-dark-mode-only" alt="Hyperswitch-Logo" width="40%" />
  <img src="./docs/imgs/hyperswitch-logo-light.svg#gh-light-mode-only" alt="Hyperswitch-Logo" width="40%" />
</p>

<h1 align="center">Composable Open-Source Payments Infrastructure</h1>

<p align="center">
  <img src="https://raw.githubusercontent.com/juspay/hyperswitch/main/docs/gifs/quickstart.gif" alt="Quickstart demo" />
</p>


<!-- @import "[TOC]" {cmd="toc" depthFrom=1 depthTo=6 orderedList=false} -->

<p align="center">
  <a href="https://github.com/juspay/hyperswitch/actions?query=workflow%3ACI+branch%3Amain">
    <img src="https://github.com/juspay/hyperswitch/workflows/CI-push/badge.svg" />
  </a>
  <a href="https://github.com/juspay/hyperswitch/blob/main/LICENSE">
    <img src="https://img.shields.io/github/license/juspay/hyperswitch" />
  </a>
  <a href="https://github.com/juspay/hyperswitch/blob/main/LICENSE">
    <img src="https://img.shields.io/badge/Made_in-Rust-orange" />
  </a>
</p>

<p align="center">
  <a href="https://www.linkedin.com/company/hyperswitch/">
    <img src="https://img.shields.io/badge/follow-hyperswitch-blue?logo=linkedin&labelColor=grey"/>
  </a>
  <a href="https://x.com/hyperswitchio">
    <img src="https://img.shields.io/badge/follow-%40hyperswitchio-white?logo=x&labelColor=grey"/>
  </a>
  <a href="https://inviter.co/hyperswitch-slack">
    <img src="https://img.shields.io/badge/chat-on_slack-blue?logo=slack&labelColor=grey&color=%233f0e40"/>
  </a>
</p>

<hr/>

<details>
<summary><strong>📁 Table of Contents</strong></summary>

- [What Can I Do with Hyperswitch?](#-what-can-i-do-with-hyperswitch)
- [Quickstart (Local Setup)](#-quickstart-local-setup)
- [Cloud Deployment](#cloud-deployment)
- [Hosted Sandbox (No Setup Required)](#hosted-sandbox-no-setup-required)
- [Why Hyperswitch?](#-why-hyperswitch)
- [Architectural Overview](#architectural-overview)
- [Our Vision](#our-vision)
- [Community & Contributions](#community--contributions)
- [Feature Requests & Bugs](#feature-requests--bugs)
- [Versioning](#versioning)
- [License](#copyright-and-license)
- [Team Behind Hyperswitch](#team-behind-hyperswitch)

</details>

<summary><h2> What Can I Do with Hyperswitch?</h2></summary>

Hyperswitch offers a modular, open-source payments infrastructure designed for flexibility and control. Apart from our Payment Suite offering, this solution allows businesses to pick and integrate only the modules they need on top of their existing payment stack — without unnecessary complexity or vendor lock-in.

Each module is independent and purpose-built to optimize different aspects of payment processing.

<h3> Learn More About The Payment Modules </h3>
<details>

- **Cost Observability**  
  Advanced observability tools to audit, monitor, and optimize your payment costs. Detect hidden fees, downgrades, and penalties with self-serve dashboards and actionable insights.  
  _[Read more](https://docs.hyperswitch.io/about-hyperswitch/payments-modules/ai-powered-cost-observability)_

- **Revenue Recovery**  
  Combat passive churn with intelligent retry strategies tuned by card bin, region, method, and more. Offers fine-grained control over retry algorithms, penalty budgets, and recovery transparency.  
  _[Read more](https://docs.hyperswitch.io/about-hyperswitch/payments-modules/revenue-recovery)_

- **Vault**  
  A PCI-compliant vault service to store cards, tokens, wallets, and bank credentials. Provides a unified, secure, and reusable store of customer-linked payment methods.  
  _[Read more](https://docs.hyperswitch.io/about-hyperswitch/payments-modules/vault)_

- **Intelligent Routing**  
  Route each transaction to the PSP with the highest predicted auth rate. Reduce retries, avoid downtime, and minimize latency while maximizing first attempt success.  
  _[Read more](https://docs.hyperswitch.io/about-hyperswitch/payments-modules/intelligent-routing)_

- **Reconciliation**  
  Automa