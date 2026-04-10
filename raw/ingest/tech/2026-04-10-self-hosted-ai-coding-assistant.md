<!-- GitHub Trending: Rust | 33,372 stars | +54 today -->

# TabbyML/tabby

> Self-hosted AI coding assistant

## Repository Info
- **URL**: https://github.com/TabbyML/tabby
- **Stars**: 33,373
- **Forks**: 1,730
- **Language**: Rust
- **License**: Other
- **Created**: 2023-03-16
- **Updated**: 2026-04-10
- **Topics**: ai, codegen, coding-assistant, coding-language, developer-experience, developer-tools, gen-ai, ide, llms
- **Open Issues**: 305

## README (excerpt)
<div align="center">
  
# 🐾 Tabby

[📚 Docs](https://tabby.tabbyml.com/docs/welcome/) • [💬 Slack](https://links.tabbyml.com/join-slack) • [🗺️ Roadmap](https://tabby.tabbyml.com/docs/roadmap/)

[![latest release](https://shields.io/github/v/release/TabbyML/tabby)](https://github.com/TabbyML/tabby/releases/latest)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](https://makeapullrequest.com)
[![Docker pulls](https://img.shields.io/docker/pulls/tabbyml/tabby)](https://hub.docker.com/r/tabbyml/tabby)
[![codecov](https://codecov.io/gh/TabbyML/tabby/graph/badge.svg?token=WYVVH8MKK3)](https://codecov.io/gh/TabbyML/tabby)

[English](/README.md) |
[简体中文](/README-zh.md) |
[日本語](/README-ja.md)

</div>

Tabby is a self-hosted AI coding assistant, offering an open-source and on-premises alternative to GitHub Copilot. It boasts several key features:
* Self-contained, with no need for a DBMS or cloud service.
* OpenAPI interface, easy to integrate with existing infrastructure (e.g Cloud IDE).
* Supports consumer-grade GPUs.

<p align="center">
  <a target="_blank" href="https://tabby.tabbyml.com"><img alt="Open Live Demo" src="https://img.shields.io/badge/OPEN_LIVE_DEMO-blue?logo=xcode&style=for-the-badge&logoColor=green"></a>
</p>

<p align="center">
  <img alt="Demo" src="https://user-images.githubusercontent.com/388154/230440226-9bc01d05-9f57-478b-b04d-81184eba14ca.gif">
</p>

## 🔥 What's New
* **12/12/2025** Get your GitHub issues implemented by connecting them to [Pochi](https://github.com/TabbyML/pochi) tasks and create PRs directly from the sidebar with a breakdown of CI/Lint/Test results [vscode@0.20.0](https://github.com/TabbyML/pochi/releases/tag/vscode%400.20.0).
* **07/02/2025** [v0.30](https://github.com/TabbyML/tabby/releases/tag/v0.30.0) supports indexing GitLab Merge Request as Context! 
* **05/25/2025** 💡Interested in joining [Agent](https://links.tabbyml.com/pochi-github-readme) private preview? DM in [X](https://x.com/getpochi) for early waitlist approval!🎫
* **05/20/2025** Enhance Tabby with your own documentation📃 through REST APIs in [v0.29](https://github.com/TabbyML/tabby/releases/tag/v0.29.0)! 🎉
* **05/01/2025** [v0.28](https://github.com/TabbyML/tabby/releases/tag/v0.28.0) transforming Answer Engine messages into persistent, shareable Pages
* **03/31/2025** [v0.27](https://github.com/TabbyML/tabby/releases/tag/v0.27.0) released with a richer `@` menu in the chat side panel.


<details>
  <summary>Archived</summary>

* **02/05/2025** LDAP Authentication and better notification for background jobs coming in Tabby [v0.24.0](https://github.com/TabbyML/tabby/releases/tag/v0.24.0)!✨
* **02/04/2025** [VSCode 1.20.0](https://marketplace.visualstudio.com/items/TabbyML.vscode-tabby/changelog) upgrade! @-mention files to add them as chat context, and edit inline with a new right-click option are available!
* **01/10/2025** Tabby [v0.23.0](https://github.com/TabbyML/tabby/releases/tag/v0.23.0) featuring enhanced code browser experience and chat side panel improvements!
* **12/24/2024** Introduce **Notification Box** in Tabby [v0.22.0](https://github.com/TabbyML/tabby/releases/tag/v0.22.0)!
* **12/06/2024** Llamafile deployment integration and enhanced Answer Engine user experience are coming in Tabby [v0.21.0](https://github.com/TabbyML/tabby/releases/tag/v0.21.0)!🚀
* **11/10/2024** Switching between different backend chat models is supported in Answer Engine with Tabby [v0.20.0](https://github.com/TabbyML/tabby/releases/tag/v0.20.0)!
* **10/30/2024** Tabby [v0.19.0](https://github.com/TabbyML/tabby/releases/tag/v0.19.0) featuring recent shared threads on the main page to improve their discoverability. 
* **07/09/2024** 🎉Announce [Codestral integration in Tabby](https://tabby.tabbyml.com/blog/2024/07/09/tabby-codestral/)!
* **07/05/2024** Tabby [v0.13.0](https://github.com/TabbyML/tabby/releases/tag/v0.13.0) introduces ***Answer Engine***, a central knowledge engine for inte