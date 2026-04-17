<!-- GitHub Trending: Go | 71,507 stars | +5 today -->

# moby/moby

> The Moby Project - a collaborative project for the container ecosystem to assemble container-based systems

## Repository Info
- **URL**: https://github.com/moby/moby
- **Stars**: 71,507
- **Forks**: 18,919
- **Language**: Go
- **License**: Apache License 2.0
- **Created**: 2013-01-18
- **Updated**: 2026-04-17
- **Topics**: containers, docker, go, golang
- **Open Issues**: 3797

## README (excerpt)
The Moby Project
================

[![PkgGoDev](https://pkg.go.dev/badge/github.com/moby/moby/v2)](https://pkg.go.dev/github.com/moby/moby/v2)
![GitHub License](https://img.shields.io/github/license/moby/moby)
[![Go Report Card](https://goreportcard.com/badge/github.com/moby/moby/v2)](https://goreportcard.com/report/github.com/moby/moby/v2)
[![OpenSSF Scorecard](https://api.scorecard.dev/projects/github.com/moby/moby/badge)](https://scorecard.dev/viewer/?uri=github.com/moby/moby)
[![OpenSSF Best Practices](https://www.bestpractices.dev/projects/10989/badge)](https://www.bestpractices.dev/projects/10989)


![Moby Project logo](docs/static_files/moby-project-logo.png "The Moby Project")

Moby is an open-source project created by Docker to enable and accelerate software containerization.

It provides a "Lego set" of toolkit components, the framework for assembling them into custom container-based systems, and a place for all container enthusiasts and professionals to experiment and exchange ideas.
Components include container build tools, a container registry, orchestration tools, a runtime and more, and these can be used as building blocks in conjunction with other tools and projects.

## Principles

Moby is an open project guided by strong principles, aiming to be modular, flexible and without too strong an opinion on user experience.
It is open to the community to help set its direction.

- Modular: the project includes lots of components that have well-defined functions and APIs that work together.
- Batteries included but swappable: Moby includes enough components to build fully featured container systems, but its modular architecture ensures that most of the components can be swapped by different implementations.
- Usable security: Moby provides secure defaults without compromising usability.
- Developer focused: The APIs are intended to be functional and useful to build powerful tools.
They are not necessarily intended as end user tools but as components aimed at developers.
Documentation and UX is aimed at developers not end users.

## Audience

The Moby Project is intended for engineers, integrators and enthusiasts looking to modify, hack, fix, experiment, invent and build systems based on containers.
It is not for people looking for a commercially supported system, but for people who want to work and learn with open source code.

## Relationship with Docker

The components and tools in the Moby Project are initially the open source components that Docker and the community have built for the Docker Project.
New projects can be added if they fit with the community goals. Docker is committed to using Moby as the upstream for the Docker Product.
However, other projects are also encouraged to use Moby as an upstream, and to reuse the components in diverse ways, and all these uses will be treated in the same way. External maintainers and contributors are welcomed.

The Moby project is not intended as a location for support or feature requests for Docker products, but as a place for contributors to work on open source code, fix bugs, and make the code more useful.
The releases are supported by the maintainers, community and users, on a best efforts basis only. For customers who want enterprise or commercial support, [Docker Desktop](https://www.docker.com/products/docker-desktop/) and [Mirantis Container Runtime](https://www.mirantis.com/software/mirantis-container-runtime/) are the appropriate products for these use cases.

## Go modules

> [!IMPORTANT]
> Starting with Docker v29 (released November 2025), the Go module `github.com/docker/docker` is **deprecated** and won't be updated.

The supported public Go modules are:

| Module | Description |
|---|---|
| [`github.com/moby/moby/client`](client/) | Go client for the Docker Engine API |
| [`github.com/moby/moby/api`](api/) | API types shared between client and server |

The root module `github.com/moby/moby/v2` is the codebase for building container engines based on Moby (s