<!-- GitHub Trending: Go | 31,485 stars | +18 today -->

# containers/podman

> Podman: A tool for managing OCI containers and pods.

## Repository Info
- **URL**: https://github.com/containers/podman
- **Stars**: 31,485
- **Forks**: 3,067
- **Language**: Go
- **License**: Apache License 2.0
- **Created**: 2017-11-01
- **Updated**: 2026-04-23
- **Topics**: containers, docker, kubernetes, linux, oci
- **Open Issues**: 1082

## README (excerpt)
![PODMAN logo](https://raw.githubusercontent.com/containers/common/main/logos/podman-logo-full-vert.png)

# Podman: A tool for managing OCI containers and pods
![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)
![GitHub release (latest SemVer)](https://img.shields.io/github/v/release/containers/podman)
[![Go Report Card](https://goreportcard.com/badge/github.com/containers/podman/v6)](https://goreportcard.com/report/github.com/containers/podman/v6)
[![OpenSSF Best Practices](https://www.bestpractices.dev/projects/10499/badge)](https://www.bestpractices.dev/projects/10499)

[![LFX Health Score](https://insights.linuxfoundation.org/api/badge/health-score?project=podman-container-tools&repos=https://github.com/containers/podman)](https://insights.linuxfoundation.org/project/podman-container-tools/repository/containers-podman)
[![LFX Contributors](https://insights.linuxfoundation.org/api/badge/contributors?project=podman-container-tools&repos=https://github.com/containers/podman)](https://insights.linuxfoundation.org/project/podman-container-tools/repository/containers-podman)


<br/>

Podman (the POD MANager) is a tool for managing containers and images, volumes mounted into those containers, and pods made from groups of containers.
Podman runs containers on Linux, but can also be used on Mac and Windows systems using a Podman-managed virtual machine.
Podman is based on libpod, a library for container lifecycle management that is also contained in this repository. The libpod library provides APIs for managing containers, pods, container images, and volumes.

Podman releases a new major or minor release 4 times a year, during the second week of February, May, August, and November. Patch releases are more frequent and may occur at any time to get bugfixes out to users. All releases are PGP signed. Public keys of members of the team approved to make releases are located [here](https://github.com/containers/release-keys/tree/main/podman).

* Continuous Integration:
  * [![Build Status](https://api.cirrus-ci.com/github/containers/podman.svg)](https://cirrus-ci.com/github/containers/podman/main)
  * [GoDoc: ![GoDoc](https://godoc.org/github.com/containers/podman/libpod?status.svg)](https://godoc.org/github.com/containers/podman/libpod)
  * [Downloads](DOWNLOADS.md)

## Overview and scope

At a high level, the scope of Podman and libpod is the following:

* Support for multiple container image formats, including OCI and Docker images.
* Full management of those images, including pulling from various sources (including trust and verification), creating (built via Containerfile or Dockerfile or committed from a container), and pushing to registries and other storage backends.
* Full management of container lifecycle, including creation (both from an image and from an exploded root filesystem), running, checkpointing and restoring (via CRIU), and removal.
* Full management of container networking, using Netavark.
* Support for pods, groups of containers that share resources and are managed together.
* Support for running containers and pods without root or other elevated privileges.
* Resource isolation of containers and pods.
* Support for a Docker-compatible CLI interface, which can both run containers locally and on remote systems.
* No manager daemon, for improved security and lower resource utilization at idle.
* Support for a REST API providing both a Docker-compatible interface and an improved interface exposing advanced Podman functionality.
* Support for running on Windows and Mac via virtual machines run by `podman machine`.

## Roadmap

The future of Podman feature development can be found in its **[roadmap](ROADMAP.md)**.

## Communications

If you think you've identified a security issue in the project, please *DO NOT* report the issue publicly via the GitHub issue tracker, mailing list, or IRC.
Instead, send an email with as many details as possible to `security@lists.podman.io`. This is a private mailing li