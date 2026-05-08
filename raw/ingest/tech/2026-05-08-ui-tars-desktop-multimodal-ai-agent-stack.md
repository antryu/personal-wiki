<!-- GitHub Trending: TypeScript | 30,833 stars | +873 today -->

# bytedance/UI-TARS-desktop

> The Open-Source Multimodal AI Agent Stack: Connecting Cutting-Edge AI Models and Agent Infra

## Repository Info
- **URL**: https://github.com/bytedance/UI-TARS-desktop
- **Stars**: 30,835
- **Forks**: 3,057
- **Language**: TypeScript
- **License**: Apache License 2.0
- **Created**: 2025-01-19
- **Updated**: 2026-05-08
- **Topics**: agent, agent-tars, browser-use, computer-use, cowork, gui-agent, gui-operator, mcp, mcp-server, multimodal, tars, ui-tars, vision, vlm
- **Open Issues**: 380

## README (excerpt)
<picture>
  <img alt="Agent TARS Banner" src="./images/tars.png">
</picture>

<br/>

## Introduction

English | [简体中文](./README.zh-CN.md)

[![](https://trendshift.io/api/badge/repositories/13584)](https://trendshift.io/repositories/13584)

<b>TARS<sup>\*</sup></b> is a Multimodal AI Agent stack, currently shipping two projects: [Agent TARS](#agent-tars) and [UI-TARS-desktop](#ui-tars-desktop):

<table>
  <thead>
    <tr>
      <th width="50%" align="center"><a href="#agent-tars">Agent TARS</a></th>
      <th width="50%" align="center"><a href="#ui-tars-desktop">UI-TARS-desktop</a></th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td align="center">
        <video src="https://github.com/user-attachments/assets/c9489936-afdc-4d12-adda-d4b90d2a869d" width="50%"></video>
      </td>
      <td align="center">
        <video src="https://github.com/user-attachments/assets/e0914ce9-ad33-494b-bdec-0c25c1b01a27" width="50%"></video>
      </td>
    </tr>
    <tr>
      <td align="left">
        <b>Agent TARS</b> is a general multimodal AI Agent stack, it brings the power of GUI Agent and Vision into your terminal, computer, browser and product.
        <br>
        <br>
        It primarily ships with a <a href="https://agent-tars.com/guide/basic/cli.html" target="_blank">CLI</a> and <a href="https://agent-tars.com/guide/basic/web-ui.html" target="_blank">Web UI</a> for usage.
        It aims to provide a workflow that is closer to human-like task completion through cutting-edge multimodal LLMs and seamless integration with various real-world <a href="https://agent-tars.com/guide/basic/mcp.html" target="_blank">MCP</a> tools.
      </td>
      <td align="left">
        <b>UI-TARS Desktop</b> is a desktop application that provides a native GUI Agent based on the <a href="https://github.com/bytedance/UI-TARS" target="_blank">UI-TARS</a> model.
        <br>
        <br>
        It primarily ships a
        <a href="https://github.com/bytedance/UI-TARS-desktop/blob/main/docs/quick-start.md#get-model-and-run-local-operator" target="_blank">local</a> and 
        <a href="https://github.com/bytedance/UI-TARS-desktop/blob/main/docs/quick-start.md#run-remote-operator" target="_blank">remote</a> computer as well as browser operators.
      </td>
    </tr>
  </tbody>
</table>

## Table of Contents

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->

- [News](#news)
- [Agent TARS](#agent-tars)
  - [Showcase](#showcase)
  - [Core Features](#core-features)
  - [Quick Start](#quick-start)
  - [Documentation](#documentation)
- [UI-TARS Desktop](#ui-tars-desktop)
  - [Showcase](#showcase-1)
  - [Features](#features)
  - [Quick Start](#quick-start-1)
- [Contributing](#contributing)
- [License](#license)
- [Citation](#citation)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## News

- **\[2025-11-05\]** 🎉 We're excited to announce the release of [Agent TARS CLI v0.3.0](https://github.com/bytedance/UI-TARS-desktop/releases/tag/v0.3.0)! This version brings streaming support for multiple tools (shell commands, multi-file structured display), runtime settings with timing statistics for tool calls and deep thinking, Event Stream Viewer for data flow tracking and debugging. Additionally, it features exclusive support for [AIO agent Sandbox](https://github.com/agent-infra/sandbox) as isolated all-in-one tools execution environment.
- **\[2025-06-25\]** We released an Agent TARS Beta and Agent TARS CLI - [Introducing Agent TARS Beta](https://agent-tars.com/blog/2025-06-25-introducing-agent-tars-beta.html), a multimodal AI agent that aims to explore a work form that is closer to human-like task completion through rich multimodal capabilities (such as GUI Agent, Vision) and seamless integration with various real-world tools.
- **\[2025-06-12\]** - 🎁 We are thrilled to announce the release of UI-TARS Desktop v0.2.0! This update i