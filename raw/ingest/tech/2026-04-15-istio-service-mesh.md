<!-- GitHub Trending: Go | 38,120 stars | +1 today -->

# istio/istio

> Connect, secure, control, and observe services.

## Repository Info
- **URL**: https://github.com/istio/istio
- **Stars**: 38,120
- **Forks**: 8,286
- **Language**: Go
- **License**: Apache License 2.0
- **Created**: 2016-11-18
- **Updated**: 2026-04-15
- **Topics**: api-management, circuit-breaker, consul, enforce-policies, envoy, fault-injection, kubernetes, lyft-envoy, microservice, microservices, nomad, polyglot-microservices, proxies, request-routing, resiliency, service-mesh
- **Open Issues**: 496

## README (excerpt)
# Istio

[![CII Best Practices](https://bestpractices.coreinfrastructure.org/projects/1395/badge)](https://bestpractices.coreinfrastructure.org/projects/1395)
[![Go Report Card](https://goreportcard.com/badge/github.com/istio/istio)](https://goreportcard.com/report/github.com/istio/istio)
[![GoDoc](https://godoc.org/istio.io/istio?status.svg)](https://godoc.org/istio.io/istio)

<a href="https://istio.io/">
    <picture>
      <source media="(prefers-color-scheme: dark)" srcset="https://raw.githubusercontent.com/cncf/artwork/refs/heads/main/projects/istio/icon/color/istio-icon-color.svg">
      <source media="(prefers-color-scheme: light)" srcset="https://github.com/istio/istio/raw/master/logo/istio-bluelogo-whitebackground-unframed.svg">
      <img title="Istio" height="100" width="100" alt="Istio logo" src="https://github.com/istio/istio/raw/master/logo/istio-bluelogo-whitebackground-unframed.svg">
    </picture>
</a>

---

Istio is an open source service mesh that layers transparently onto existing distributed applications. Istio’s powerful features provide a uniform and more efficient way to secure, connect, and monitor services. Istio is the path to load balancing, service-to-service authentication, and monitoring – with few or no service code changes.

- For in-depth information about how to use Istio, visit [istio.io](https://istio.io)
- To ask questions and get assistance from our community, visit [GitHub Discussions](https://github.com/istio/istio/discussions)
- To learn how to participate in our overall community, visit [our community page](https://istio.io/about/community)

In this README:

- [Introduction](#introduction)
- [Repositories](#repositories)
- [Issue management](#issue-management)

In addition, here are some other documents you may wish to read:

- [Istio Community](https://github.com/istio/community#istio-community) - describes how to get involved and contribute to the Istio project
- [Istio Developer's Guide](https://github.com/istio/istio/wiki/Preparing-for-Development) - explains how to set up and use an Istio development environment
- [Project Conventions](https://github.com/istio/istio/wiki/Development-Conventions) - describes the conventions we use within the code base
- [Creating Fast and Lean Code](https://github.com/istio/istio/wiki/Writing-Fast-and-Lean-Code) - performance-oriented advice and guidelines for the code base

You'll find many other useful documents on our [Wiki](https://github.com/istio/istio/wiki).

## Introduction

[Istio](https://istio.io/latest/docs/concepts/what-is-istio/) is an open platform for providing a uniform way to [integrate
microservices](https://istio.io/latest/docs/examples/microservices-istio/), manage [traffic flow](https://istio.io/latest/docs/concepts/traffic-management/) across microservices, enforce policies
and aggregate telemetry data. Istio's control plane provides an abstraction
layer over the underlying cluster management platform, such as Kubernetes.

Istio is composed of these components:

- **Envoy** - Sidecar proxies per microservice to handle ingress/egress traffic
   between services in the cluster and from a service to external
   services. The proxies form a _secure microservice mesh_ providing a rich
   set of functions like discovery, rich layer-7 routing, circuit breakers,
   policy enforcement and telemetry recording/reporting
   functions.

  > Note: The service mesh is not an overlay network. It
  > simplifies and enhances how microservices in an application talk to each
  > other over the network provided by the underlying platform.

* **Ztunnel** - A lightweight data plane proxy written in Rust,
    used in Ambient mesh mode to provide secure connectivity and observability for workloads without sidecar proxies.

- **Istiod** - The Istio control plane. It provides service discovery, configuration and certificate management.

## Repositories

The Istio project is divided across a few GitHub repositories:

- [istio/api](https://github.com/is