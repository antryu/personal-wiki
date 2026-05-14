<!-- GitHub Trending: Python | 799 stars | +28 today -->

# NVIDIA-AI-Blueprints/video-search-and-summarization

> Suite of reference architectures for building GPU-accelerated vision agents and AI-powered video analytics applications.

## Repository Info
- **URL**: https://github.com/NVIDIA-AI-Blueprints/video-search-and-summarization
- **Stars**: 801
- **Forks**: 243
- **Language**: Python
- **License**: Other
- **Created**: 2024-10-22
- **Updated**: 2026-05-14
- **Topics**: agents, llm, rag, skills, video-analytics, video-search, vlm
- **Open Issues**: 59

## README (excerpt)
<h2>NVIDIA AI Blueprint: Video Search and Summarization (VSS)</h2>

### Table of Contents
- [Overview](#overview)
- [Use Case / Problem Description](#use-case--problem-description)
- [Agent Workflows](#agent-workflows)
- [Software Components](#software-components)
- [Target Audience](#target-audience)
- [Repository Structure Overview](#repository-structure-overview)
- [Documentation](#documentation)
- [Prerequisites](#prerequisites)
- [Hardware Requirements](#hardware-requirements)
- [Quickstart Guide](#quickstart-guide)
- [License](#license)

## Overview

The [NVIDIA Blueprint for Video Search and Summarization (VSS)](https://docs.nvidia.com/vss/latest/index.html) provides a suite of reference architectures for building vision agents and AI-powered video analytics applications. Those architectures bring together accelerated vision microservices, vision language models (VLMs), and large language models (LLMs) so you can use them in existing applications, as standalone microservices, or as part of a larger vision agent.

VSS is organized into three areas of processing and analysis: **real-time video intelligence** (feature extraction, embeddings, and stream understanding with results published to a message broker), **downstream analytics** (enrichment of metadata into trajectories, incidents, and verified alerts), and **agentic and offline processing** (orchestrated tools for search, Q&A, summarization, and clip retrieval, including via the Model Context Protocol).

This repository implements the blueprint and powers the [NVIDIA build experience](https://build.nvidia.com/nvidia/video-search-and-summarization) for natural-language video agents—search, summarization, visual Q&A, and related workflows—backed by generative AI, VLMs and LLMs, and [NVIDIA NIM](https://build.nvidia.com/) microservices as configured in the stacks below.

## Use Case / Problem Description

The NVIDIA AI Blueprint for Video Search and Summarization addresses the challenge of deploying visual agents capable of interacting with large volumes of video data, both stored and streamed. This can be used to create vision AI agents, that can be applied to a multitude of use cases such as monitoring smart spaces, warehouse automation, and SOP validation. This is important where quick and accurate video analysis can lead to better decision-making and enhanced operational efficiency.

## Agent Workflows
We provide multiple reference [Agent Workflows](https://docs.nvidia.com/vss/3.1.0/adding-workflows.html) which demonstrate how the individual components can be leveraged by an agent:

| Workflow | Description |
|----------|-------------|
| [Q&A and Report Generation (Quickstart)](https://docs.nvidia.com/vss/3.1.0/quickstart.html) | Video retrieval, VLM-based Q&A, and report generation on short video clips |
| [Alert Verification](https://docs.nvidia.com/vss/3.1.0/agent-workflow-alert-verification.html) | Realtime processing of videos using perception (object detection, tracking) and behavior analytics to generate alerts, which are subsequently verified with VLM to reduce false positives |
| [Real-Time Alerts](https://docs.nvidia.com/vss/3.1.0/agent-workflow-rt-alert.html) | Continuous processing of video streams through VLM for anomaly detection |
| [Video Search](https://docs.nvidia.com/vss/3.1.0/agent-workflow-search.html) | Natural language search across video archives using video embeddings (alpha) |
| [Long Video Summarization](https://docs.nvidia.com/vss/3.1.0/agent-workflow-lvs.html) | Analysis and summarization of extended video recordings through chunking and aggregation of dense captions |

## Software Components
<div align="center">
  <img src="https://github.com/NVIDIA-AI-Blueprints/video-search-and-summarization/raw/main/assets/vss-architecture.png" width="800">
</div>

1. **NIM microservices**: Here are models used in this blueprint:

    - [Cosmos-Reason2-8B](https://build.nvidia.com/nvidia/cosmos-reason2-8b)
    - [NVIDIA Nemotron-Nano-9B-v2](https://