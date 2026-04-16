<!-- GitHub Trending: Python | 2,902 stars | +123 today -->

# dimensionalOS/dimos

> Dimensional is the agentic operating system for physical space. Vibecode humanoids, quadrupeds, drones, and other hardware platforms in natural language and build multi-agent systems that work seamlessly with physical input (cameras, lidar, actuators).

## Repository Info
- **URL**: https://github.com/dimensionalOS/dimos
- **Stars**: 2,903
- **Forks**: 465
- **Language**: Python
- **License**: Other
- **Created**: 2024-10-19
- **Updated**: 2026-04-16
- **Topics**: N/A
- **Open Issues**: 266

## README (excerpt)
<div align="center">

<img width="1000" alt="banner_bordered_trimmed" src="https://github.com/user-attachments/assets/64f13b39-da06-4f58-add0-cfc44f04db4e" />

<h2>The Agentive Operating System for Physical Space</h2>

[![Discord](https://img.shields.io/discord/1341146487186391173?style=flat-square&logo=discord&logoColor=white&label=Discord&color=5865F2)](https://discord.gg/dimos)
[![Stars](https://img.shields.io/github/stars/dimensionalOS/dimos?style=flat-square)](https://github.com/dimensionalOS/dimos/stargazers)
[![Forks](https://img.shields.io/github/forks/dimensionalOS/dimos?style=flat-square)](https://github.com/dimensionalOS/dimos/fork)
[![Contributors](https://img.shields.io/github/contributors/dimensionalOS/dimos?style=flat-square)](https://github.com/dimensionalOS/dimos/graphs/contributors)
![Nix](https://img.shields.io/badge/Nix-flakes-5277C3?style=flat-square&logo=NixOS&logoColor=white)
![NixOS](https://img.shields.io/badge/NixOS-supported-5277C3?style=flat-square&logo=NixOS&logoColor=white)
![CUDA](https://img.shields.io/badge/CUDA-supported-76B900?style=flat-square&logo=nvidia&logoColor=white)
[![Docker](https://img.shields.io/badge/Docker-ready-2496ED?style=flat-square&logo=docker&logoColor=white)](https://www.docker.com/)

<a href="https://trendshift.io/repositories/23169" target="_blank"><img src="https://trendshift.io/api/badge/repositories/23169" alt="dimensionalOS%2Fdimos | Trendshift" style="width: 250px; height: 55px;" width="250" height="55"/></a>

<big><big>

[Hardware](#hardware) •
[Installation](#installation) •
[Agent CLI & MCP](#agent-cli-and-mcp) •
[Blueprints](#blueprints) •
[Development](#development)

⚠️ **Pre-Release Beta** ⚠️

</big></big>

</div>

# Intro

Dimensional is the modern operating system for generalist robotics. We are setting the next-generation SDK standard, integrating with the majority of robot manufacturers.

With a simple install and no ROS required, build physical applications entirely in python that run on any humanoid, quadruped, or drone.

Dimensional is agent native -- "vibecode" your robots in natural language and build (local & hosted) multi-agent systems that work seamlessly with your hardware. Agents run as native modules — subscribing to any embedded stream, from perception (lidar, camera) and spatial memory down to control loops and motor drivers.
<table>
  <tr>
    <td align="center" width="50%">
      <a href="docs/capabilities/navigation/native/index.md"><img src="assets/readme/navigation.gif" alt="Navigation" width="100%"></a>
    </td>
    <td align="center" width="50%">
      <img src="assets/readme/perception.png" alt="Perception" width="100%">
    </td>
  </tr>
  <tr>
    <td align="center" width="50%">
      <h3><a href="docs/capabilities/navigation/native/index.md">Navigation and Mapping</a></h3>
      SLAM, dynamic obstacle avoidance, route planning, and autonomous exploration — via both DimOS native and ROS<br><a href="https://x.com/stash_pomichter/status/2010471593806545367">Watch video</a>
    </td>
    <td align="center" width="50%">
      <h3>Perception</h3>
      Detectors, 3d projections, VLMs, Audio processing
    </td>
  </tr>
  <tr>
    <td align="center" width="50%">
      <a href="docs/capabilities/agents/readme.md"><img src="assets/readme/agentic_control.gif" alt="Agents" width="100%"></a>
    </td>
    <td align="center" width="50%">
      <img src="assets/readme/spatial_memory.gif" alt="Spatial Memory" width="100%">
    </td>
  </tr>
  <tr>
    <td align="center" width="50%">
      <h3><a href="docs/capabilities/agents/readme.md">Agentive Control, MCP</a></h3>
      "hey Robot, go find the kitchen"<br><a href="https://x.com/stash_pomichter/status/2015912688854200322">Watch video</a>
    </td>
    <td align="center" width="50%">
      <h3>Spatial Memory</a></h3>
      Spatio-temporal RAG, Dynamic memory, Object localization and permanence<br><a href="https://x.com/stash_pomichter/status/1980741077205414328">Watch video</a>
    </td>
  </tr>