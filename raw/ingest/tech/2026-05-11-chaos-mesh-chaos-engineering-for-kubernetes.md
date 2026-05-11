<!-- GitHub Trending: Go | 7,686 stars | +13 today -->

# chaos-mesh/chaos-mesh

> A Chaos Engineering Platform for Kubernetes.

## Repository Info
- **URL**: https://github.com/chaos-mesh/chaos-mesh
- **Stars**: 7,686
- **Forks**: 970
- **Language**: Go
- **License**: Apache License 2.0
- **Created**: 2019-09-04
- **Updated**: 2026-05-11
- **Topics**: chaos, chaos-engineering, chaos-experiments, chaos-mesh, chaos-testing, cloud-native, cncf, fault-injection, golang, kubernetes, microservices, operator, site-reliability-engineering
- **Open Issues**: 543

## README (excerpt)
<img src="static/logo.svg#gh-light-mode-only" alt="Chaos Mesh Logo" width="450"/>
<img src="static/logo-white.svg#gh-dark-mode-only" alt="Chaos Mesh Logo" width="450"/>

---

<!-- markdown-link-check-disable -->

[![LICENSE](https://img.shields.io/github/license/chaos-mesh/chaos-mesh.svg)](https://github.com/chaos-mesh/chaos-mesh/blob/master/LICENSE)
[![codecov](https://codecov.io/gh/chaos-mesh/chaos-mesh/branch/master/graph/badge.svg)](https://codecov.io/gh/chaos-mesh/chaos-mesh)
[![Go Report Card](https://goreportcard.com/badge/github.com/chaos-mesh/chaos-mesh)](https://goreportcard.com/report/github.com/chaos-mesh/chaos-mesh)
[![GoDoc](https://img.shields.io/badge/Godoc-reference-blue.svg)](https://godoc.org/github.com/chaos-mesh/chaos-mesh)
[![Upload Image](https://github.com/chaos-mesh/chaos-mesh/actions/workflows/upload_image.yml/badge.svg?event=schedule)](https://github.com/chaos-mesh/chaos-mesh/actions/workflows/upload_image.yml)

[![FOSSA Status](https://app.fossa.com/api/projects/git%2Bgithub.com%2Fchaos-mesh%2Fchaos-mesh.svg?type=shield)](https://app.fossa.com/projects/git%2Bgithub.com%2Fchaos-mesh%2Fchaos-mesh?ref=badge_shield)
[![CII Best Practices](https://bestpractices.coreinfrastructure.org/projects/3680/badge)](https://bestpractices.coreinfrastructure.org/projects/3680)
[![Artifact Hub](https://img.shields.io/endpoint?url=https%3A%2F%2Fartifacthub.io%2Fbadge%2Frepository%2Fchaos-mesh)](https://artifacthub.io/packages/helm/chaos-mesh/chaos-mesh)

<!-- markdown-link-check-enable -->

Chaos Mesh is an open source cloud-native Chaos Engineering platform. It offers various types of fault simulation and has an enormous capability to orchestrate fault scenarios.

Using Chaos Mesh, you can conveniently simulate various abnormalities that might occur in reality during the development, testing, and production environments and find potential problems in the system. To lower the threshold for a Chaos Engineering project, Chaos Mesh provides you with a visualization operation. You can easily design your Chaos scenarios on the Web UI and monitor the status of Chaos experiments.

![cncf_logo](./static/cncf.png#gh-light-mode-only)
![cncf_logo](./static/cncf-white.png#gh-dark-mode-only)

Chaos Mesh is a [Cloud Native Computing Foundation (CNCF)](https://www.cncf.io/) incubating project. If you are an organization that wants to help shape the evolution of technologies that are container-packaged, dynamically-scheduled and microservices-oriented, consider joining the CNCF. For details about who's involved and how Chaos Mesh plays a role, read the CNCF [announcement](https://www.cncf.io/announcements/2020/09/02/cloud-native-computing-foundation-announces-tikv-graduation/).

---

At the current stage, Chaos Mesh has the following components:

- **Chaos Operator**: the core component for chaos orchestration. Fully open sourced.
- **Chaos Dashboard**: a Web UI for managing, designing, monitoring Chaos Experiments.

See the following demo video for a quick view of Chaos Mesh:

[![Watch the video](./static/demo.gif)](https://www.youtube.com/watch?v=ifZEwdJO868)

## Chaos Operator

Chaos Operator injects chaos into the applications and Kubernetes infrastructure in a manageable way, which provides easy, custom definitions for chaos experiments and automatic orchestration. There are two components at play:

**Chaos Controller Manager**: is primarily responsible for the scheduling and management of Chaos experiments. This component contains several CRD Controllers, such as Workflow Controller, Scheduler Controller, and Controllers of various fault types.

**Chaos Daemon**: runs as DaemonSet and has Privileged permission by default (which can be disabled). This component mainly interferes with specific network devices, file systems, kernels by hacking into the target Pod Namespace.

![Chaos Operator](./static/chaos-mesh.png)

Chaos Operator uses [CustomResourceDefinition (CRD)](https://kubernetes.io/docs/tasks/access-kubernetes-api/custom-