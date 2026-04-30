<!-- GitHub Trending: Go | 20,652 stars | +4 today -->

# containerd/containerd

> An open and reliable container runtime

## Repository Info
- **URL**: https://github.com/containerd/containerd
- **Stars**: 20,652
- **Forks**: 3,889
- **Language**: Go
- **License**: Apache License 2.0
- **Created**: 2015-11-13
- **Updated**: 2026-04-30
- **Topics**: cncf, containerd, containers, cri, docker, hacktoberfest, kubernetes, oci
- **Open Issues**: 566

## README (excerpt)
![containerd banner light mode](https://raw.githubusercontent.com/cncf/artwork/master/projects/containerd/horizontal/color/containerd-horizontal-color.png#gh-light-mode-only)
![containerd banner dark mode](https://raw.githubusercontent.com/cncf/artwork/master/projects/containerd/horizontal/white/containerd-horizontal-white.png#gh-dark-mode-only)

[![PkgGoDev](https://pkg.go.dev/badge/github.com/containerd/containerd/v2)](https://pkg.go.dev/github.com/containerd/containerd/v2)
[![Build Status](https://github.com/containerd/containerd/actions/workflows/ci.yml/badge.svg?event=merge_group)](https://github.com/containerd/containerd/actions?query=workflow%3ACI+event%3Amerge_group)
[![Nightlies](https://github.com/containerd/containerd/workflows/Nightly/badge.svg)](https://github.com/containerd/containerd/actions?query=workflow%3ANightly)
[![Go Report Card](https://goreportcard.com/badge/github.com/containerd/containerd/v2)](https://goreportcard.com/report/github.com/containerd/containerd/v2)
[![CII Best Practices](https://bestpractices.coreinfrastructure.org/projects/1271/badge)](https://bestpractices.coreinfrastructure.org/projects/1271)
[![OpenSSF Scorecard](https://api.scorecard.dev/projects/github.com/containerd/containerd/badge)](https://scorecard.dev/viewer/?uri=github.com/containerd/containerd)
[![Check Links](https://github.com/containerd/containerd/actions/workflows/links.yml/badge.svg)](https://github.com/containerd/containerd/actions/workflows/links.yml)

containerd is an industry-standard container runtime with an emphasis on simplicity, robustness, and portability. It is available as a daemon for Linux and Windows, which can manage the complete container lifecycle of its host system: image transfer and storage, container execution and supervision, low-level storage and network attachments, etc.

containerd is a member of CNCF with ['graduated'](https://landscape.cncf.io/?selected=containerd) status.

containerd is designed to be embedded into a larger system, rather than being used directly by developers or end-users.

![architecture](docs/historical/design/architecture.png)

## Announcements

### Now Recruiting

We are a large inclusive OSS project that is welcoming help of any kind shape or form:
* Documentation help is needed to make the product easier to consume and extend.
* We need OSS community outreach/organizing help to get the word out; manage
and create messaging and educational content; and help with social media, community forums/groups, and google groups.
* We are actively inviting new [security advisors](https://github.com/containerd/project/blob/main/GOVERNANCE.md#security-advisors) to join the team.
* New subprojects are being created, core and non-core that could use additional development help.
* Each of the [containerd projects](https://github.com/containerd) has a list of issues currently being worked on or that need help resolving.
  - If the issue has not already been assigned to someone or has not made recent progress, and you are interested, please inquire.
  - If you are interested in starting with a smaller/beginner-level issue, look for issues with an `exp/beginner` tag, for example [containerd/containerd beginner issues.](https://github.com/containerd/containerd/issues?q=is%3Aissue+is%3Aopen+label%3Aexp%2Fbeginner)

## Getting Started

See our documentation on [containerd.io](https://containerd.io):
* [for ops and admins](docs/ops.md)
* [namespaces](docs/namespaces.md)
* [client options](docs/client-opts.md)

To get started contributing to containerd, see [CONTRIBUTING](CONTRIBUTING.md).

If you are interested in trying out containerd see our example at [Getting Started](docs/getting-started.md).

## Nightly builds

There are nightly builds available for download [here](https://github.com/containerd/containerd/actions?query=workflow%3ANightly).
Binaries are generated from `main` branch every night for `Linux` and `Windows`.

Please be aware: nightly builds might have critical bugs, it's not 