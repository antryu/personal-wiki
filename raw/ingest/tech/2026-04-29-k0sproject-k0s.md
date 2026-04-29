<!-- GitHub Trending: Go | 6,001 stars | +23 today -->

# k0sproject/k0s

> k0s - The Zero Friction Kubernetes

## Repository Info
- **URL**: https://github.com/k0sproject/k0s
- **Stars**: 6,001
- **Forks**: 495
- **Language**: Go
- **License**: Other
- **Created**: 2020-06-10
- **Updated**: 2026-04-29
- **Topics**: kubernetes
- **Open Issues**: 193

## README (excerpt)
<!--
SPDX-FileCopyrightText: 2020 k0s authors
SPDX-License-Identifier: CC-BY-SA-4.0
-->

# k0s - The Zero Friction Kubernetes

<!-- When changing this file, consider to change docs/README.md, too! -->

[![OpenSSF Best Practices](https://www.bestpractices.dev/projects/9994/badge)](https://www.bestpractices.dev/projects/9994)
[![FOSSA Status](https://app.fossa.com/api/projects/git%2Bgithub.com%2Fk0sproject%2Fk0s.svg?type=shield)](https://app.fossa.com/projects/git%2Bgithub.com%2Fk0sproject%2Fk0s?ref=badge_shield)
[![Go build](https://github.com/k0sproject/k0s/actions/workflows/go.yml/badge.svg?branch=main)](https://github.com/k0sproject/k0s/actions/workflows/go.yml?query=branch%3Amain)
[![OS tests :: Nightly](https://github.com/k0sproject/k0s/actions/workflows/ostests-nightly.yaml/badge.svg)](https://github.com/k0sproject/k0s/actions/workflows/ostests-nightly.yaml)
![GitHub Repo stars](https://img.shields.io/github/stars/k0sproject/k0s?color=blueviolet&label=Stargazers)
[![Releases](https://img.shields.io/github/downloads/k0sproject/k0s/total.svg)](https://github.com/k0sproject/k0s/tags?label=Downloads)

![GitHub release (latest by date)](https://img.shields.io/github/v/release/k0sproject/k0s?label=latest%20stable)
![GitHub release (latest SemVer including pre-releases)](https://img.shields.io/github/v/release/k0sproject/k0s?include_prereleases&label=latest-release%20%28including+pre-release%29) ![GitHub commits since latest release (by date)](https://img.shields.io/github/commits-since/k0sproject/k0s/latest)

![k0s-logo-dark](docs/img/k0s-logo-2025-horizontal-inverted.svg#gh-dark-mode-only)
![k0s-logo-light](docs/img/k0s-logo-2025-horizontal.svg#gh-light-mode-only)

<!-- Start Overview -->
## Overview

k0s is an open source, all-inclusive Kubernetes distribution, which is configured with all of the features needed to build a Kubernetes cluster and packaged as a single binary for ease of use. Due to its simple design, flexible deployment options and modest system requirements, k0s is well suited for

- Any cloud
- Bare metal
- Edge and IoT

k0s drastically reduces the complexity of installing and running a CNCF certified Kubernetes distribution. With k0s new clusters can be bootstrapped in minutes and developer friction is reduced to zero. This allows anyone with no special skills or expertise in Kubernetes to easily get started.

k0s is distributed as a single binary with zero host OS dependencies besides the host OS kernel. It works with any Linux without additional software packages or configuration. Any security vulnerabilities or performance issues can be fixed directly in the k0s distribution that makes it extremely straightforward to keep the clusters up-to-date and secure.
<!-- End Overview -->

<!-- Start Key Features -->
## Key Features

- Certified and 100% upstream Kubernetes
- Multiple installation methods: [single-node](docs/install.md), [multi-node](docs/k0sctl-install.md), [airgap](docs/airgap-install.md) and [Docker](docs/k0s-in-docker.md)
- Automatic lifecycle management with k0sctl: [upgrade](docs/upgrade.md), [backup and restore](docs/backup.md)
- Modest [system requirements](docs/system-requirements.md) (1 vCPU, 1 GB RAM)
- Available as a single binary with no [external runtime dependencies](docs/external-runtime-deps.md) besides the kernel
- Flexible deployment options with [control plane isolation](docs/networking.md#controller-worker-communication) as default
- Scalable from a single node to large, [high-available](docs/high-availability.md) clusters
- Supports custom [Container Network Interface (CNI)](docs/networking.md) plugins (Kube-Router is the default, Calico is offered as a preconfigured alternative)
- Supports custom [Container Runtime Interface (CRI)](docs/runtime.md) plugins (containerd is the default)
- Supports all Kubernetes storage options with [Container Storage Interface (CSI)](docs/storage.md)
- Supports a variety of [datastore backends](docs/configuration.md#specstorage): etcd (default 