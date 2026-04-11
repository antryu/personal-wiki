<!-- GitHub Trending: Go | 3,263 stars | +11 today -->

# Project-HAMi/HAMi

> Heterogeneous GPU Sharing on Kubernetes

## Repository Info
- **URL**: https://github.com/Project-HAMi/HAMi
- **Stars**: 3,263
- **Forks**: 506
- **Language**: Go
- **License**: Apache License 2.0
- **Created**: 2021-09-14
- **Updated**: 2026-04-11
- **Topics**: ascend, cambricon, cncf, device-plugin, gpu-acceleration, gpu-management, gpu-shareable, gpu-virtualization, hygon, iluvatar, kubernetes, kubernetes-gpu-cluster, metax, mthreads, nvidia, vgpu, vgpu-hypervisor
- **Open Issues**: 353

## README (excerpt)
English version | [中文版](README_cn.md) | [日本語版](README_ja.md)

<img src="imgs/hami-horizontal-colordark.png" width="600px">

[![LICENSE](https://img.shields.io/github/license/Project-HAMi/HAMi.svg)](/LICENSE)
[![build status](https://github.com/Project-HAMi/HAMi/actions/workflows/ci.yaml/badge.svg)](https://github.com/Project-HAMi/HAMi/actions/workflows/ci.yaml)
[![Releases](https://img.shields.io/github/v/release/Project-HAMi/HAMi)](https://github.com/Project-HAMi/HAMi/releases/latest)
[![OpenSSF Best Practices](https://www.bestpractices.dev/projects/9416/badge)](https://www.bestpractices.dev/en/projects/9416)
[![Go Report Card](https://goreportcard.com/badge/github.com/Project-HAMi/HAMi)](https://goreportcard.com/report/github.com/Project-HAMi/HAMi)
[![codecov](https://codecov.io/gh/Project-HAMi/HAMi/branch/master/graph/badge.svg?token=ROM8CMPXZ6)](https://codecov.io/gh/Project-HAMi/HAMi)
[![FOSSA Status](https://app.fossa.com/api/projects/git%2Bgithub.com%2FProject-HAMi%2FHAMi.svg?type=shield)](https://app.fossa.com/projects/git%2Bgithub.com%2FProject-HAMi%2FHAMi?ref=badge_shield)
[![docker pulls](https://img.shields.io/docker/pulls/projecthami/hami.svg)](https://hub.docker.com/r/projecthami/hami)
[![Contact Me](https://img.shields.io/badge/Contact%20Me-blue)](https://github.com/Project-HAMi/HAMi#meeting--contact)
[![slack](https://img.shields.io/badge/slack-green?style=for-the-badge&logo=googlechat)](https://cloud-native.slack.com/archives/C07T10BU4R2)
[![discord](https://img.shields.io/badge/discord-grey?style=for-the-badge&logo=discord)](https://discord.gg/Amhy7XmbNq)
[![website](https://img.shields.io/badge/website-blue?style=for-the-badge&logo=readthedocs)](http://project-hami.io)

## Project-HAMi: Heterogeneous AI Computing Virtualization Middleware

## Introduction

HAMi, formerly known as 'k8s-vGPU-scheduler', is a Heterogeneous device management middleware for Kubernetes. It can manage different types of heterogeneous devices (like GPU, NPU, etc.), share heterogeneous devices among pods, make better scheduling decisions based on topology of devices and scheduling policies.

It aims to remove the gap between different Heterogeneous devices, and provide a unified interface for users to manage with no changes to their applications. As of December 2024, HAMi has been widely used not only in Internet, public cloud and private cloud, but also broadly adopted in various vertical industries including finance, securities, energy, telecommunications, education, and manufacturing. More than 50 companies or institutions are not only end users but also active contributors. 

![cncf_logo](imgs/cncf-logo.png)

HAMi is a sandbox and [landscape](https://landscape.cncf.io/?item=orchestration-management--scheduling-orchestration--hami) project of  
[Cloud Native Computing Foundation](https://cncf.io/)(CNCF), 
[CNAI Landscape project](https://landscape.cncf.io/?group=cnai&item=cnai--general-orchestration--hami).


## Device virtualization

HAMi provides device virtualization for several heterogeneous devices including GPU, by supporting device sharing and device resource isolation. For the list of devices supporting device virtualization, see [supported devices](#supported-devices)

### Device sharing

- Allows partial device allocation by specifying device core usage.
- Allows partial device allocation by specifying device memory.
- Imposes a hard limit on streaming multiprocessors.
- Requires zero changes to existing programs.
- Support [dynamic-mig](docs/dynamic-mig-support.md) feature, [example](examples/nvidia/dynamic_mig_example.yaml)

<img src="./imgs/example.png" width = "500" /> 

### Device Resources Isolation

A simple demonstration of device isolation:
A task with the following resources will see 3000M device memory inside container:

```yaml
      resources:
        limits:
          nvidia.com/gpu: 1 # declare how many physical GPUs the pod needs
          nvidia.com/gpumem: 3000 # identifies 3G GPU memory each physical G