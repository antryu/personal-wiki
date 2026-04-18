<!-- GitHub Trending: Python | 22,811 stars | +2 today -->

# saleor/saleor

> Saleor Core: the high performance, composable, headless commerce API.

## Repository Info
- **URL**: https://github.com/saleor/saleor
- **Stars**: 22,811
- **Forks**: 5,974
- **Language**: Python
- **License**: BSD 3-Clause "New" or "Revised" License
- **Created**: 2013-02-12
- **Updated**: 2026-04-18
- **Topics**: cart, checkout, commerce, composable, e-commerce, ecommerce, graphql, headless, headless-commerce, multichannel, oms, order-management, payments, pim, python, shop, shopping-cart, store
- **Open Issues**: 248

## README (excerpt)
<div align="center" width="100px">

 <picture>
   <source media="(prefers-color-scheme: dark)" srcset="https://github.com/user-attachments/assets/76e3079f-696a-4fcd-8658-89739647090b">
   <source media="(prefers-color-scheme: light)" srcset="https://github.com/user-attachments/assets/8477d643-a905-4c63-8ed3-03d0976f6fc3">
   <img width="200" alt="saleor-commerce-logo" src="https://user-images.githubusercontent.com/4006792/214636328-8e4f83e8-66cb-4114-a3d8-473eb908b9c3.png">

 </picture>
</div>

<div align="center">
  <strong>Commerce that works with your language and stack</strong>
</div>

<div align="center">
  GraphQL native, API-only platform for scalable composable commerce.
</div>

<br>

<div align="center">
 Get to know Saleor: <br>
  <a href="https://saleor.io/cloud/talk-to-us?utm_source=github&utm_medium=readme&utm_campaign=repo_saleor">Talk to a human</a>
  <span> | </span>
  <a href="https://cloud.saleor.io/signup?utm_source=github&utm_medium=readme&utm_campaign=repo_saleor">Talk to the API</a>
</div>

<br>

<div align="center">
  Join our community: <br>
  <a href="https://saleor.io/">Website</a>
  <span> | </span>
  <a href="https://twitter.com/getsaleor">Twitter</a>
  <span> | </span>
  <a href="https://saleor.io/discord">Discord</a>
</div>

<div align="center">
   <a href="https://saleor.io/blog">Blog</a>
  <span> | </span>
  <a href="https://saleor.typeform.com/to/JTJK0Nou">Subscribe to newsletter</a>
</div>

<br>

<div align="center">
  <a href="https://codecov.io/gh/saleor/saleor" >
    <img src="https://codecov.io/gh/saleor/saleor/graph/badge.svg?token=qkNcTJ4TmI" alt="Coverage"/>
  </a>
  <a href="https://docs.saleor.io/">
    <img src="https://img.shields.io/badge/docs-docs.saleor.io-brightgreen.svg" alt="Documentation" />
  </a>
  <a href="https://github.com/astral-sh/ruff">
    <img src="https://img.shields.io/endpoint?url=https://raw.githubusercontent.com/astral-sh/ruff/main/assets/badge/v2.json" alt="Linted by Ruff">
  </a>
 <a href="https://saleor.io/discord">
   <img src="https://img.shields.io/discord/864066819866624010"  alt="Discord" >
 </a>
</div>

## Table of Contents

- [What makes Saleor special?](#what-makes-saleor-special)
- [Why API-only Architecture?](#why-api-only-architecture)
- [Features](#features)
- [Installation](#installation)
- [Documentation](#documentation)
- [Saleor Platform](#saleor-platform)
- [Storefront](#storefront)
- [Dashboard](#dashboard)
- [Contributing](#contributing)
- [License](#license)

## What makes Saleor special?

- **Technology-agnostic** - no monolithic plugin architecture or technology lock-in.

- **GraphQL only** - Not afterthought API design or fragmentation across different styles of API.

- **Headless and API only** - APIs are the only way to interact, configure, or extend the backend.

- **Open source** -  a single version of Saleor without feature fragmentation or commercial limitations.

- **Cloud native** - battle tested on global brands.

- **Native-multichannel** - Per [channel](https://docs.saleor.io/developer/channels/overview) control of pricing, currencies, stock, product, and more.

## Why API-only Architecture?

Saleor's API-first extensibility provides powerful tools for developers to extend backend using [webhooks](https://docs.saleor.io/developer/extending/webhooks/overview), attributes, [metadata](https://docs.saleor.io/api-usage/metadata), [apps](https://docs.saleor.io/developer/extending/apps/overview), [subscription queries](https://docs.saleor.io/developer/extending/webhooks/subscription-webhook-payloads), [API extensions](https://docs.saleor.io/developer/extending/webhooks/synchronous-events/overview), [dashboard iframes](https://docs.saleor.io/developer/extending/apps/overview).

Compared to traditional plugin architectures (monoliths) it provides the following benefits:

- There is less downtime as apps are deployed independently.
- Reliability and performance - custom logic is separated from the core.
- Simplified upgrade paths - el