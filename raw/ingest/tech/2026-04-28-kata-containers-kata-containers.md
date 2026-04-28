<!-- GitHub Trending: Rust | 7,820 stars | +2 today -->

# kata-containers/kata-containers

> Kata Containers is an open source project and community working to build a standard implementation of lightweight Virtual Machines (VMs) that feel and perform like containers, but provide the workload isolation and security advantages of VMs. https://katacontainers.io/

## Repository Info
- **URL**: https://github.com/kata-containers/kata-containers
- **Stars**: 7,820
- **Forks**: 1,292
- **Language**: Rust
- **License**: Apache License 2.0
- **Created**: 2017-12-07
- **Updated**: 2026-04-28
- **Topics**: acrn, containers, cri, cri-o, docker, firecracker, k8s, kubernetes, kvm, oci, qemu, security, virtual-machine, virtualization
- **Open Issues**: 1631

## README (excerpt)
<img src="https://object-storage-ca-ymq-1.vexxhost.net/swift/v1/6e4619c416ff4bd19e1c087f27a43eea/www-images-prod/openstack-logo/kata/SVG/kata-1.svg" width="900">

[![CI | Publish Kata Containers payload](https://github.com/kata-containers/kata-containers/actions/workflows/payload-after-push.yaml/badge.svg)](https://github.com/kata-containers/kata-containers/actions/workflows/payload-after-push.yaml) [![Kata Containers Nightly CI](https://github.com/kata-containers/kata-containers/actions/workflows/ci-nightly.yaml/badge.svg)](https://github.com/kata-containers/kata-containers/actions/workflows/ci-nightly.yaml)
[![OpenSSF Scorecard](https://api.scorecard.dev/projects/github.com/kata-containers/kata-containers/badge)](https://scorecard.dev/viewer/?uri=github.com/kata-containers/kata-containers)

# Kata Containers

Welcome to Kata Containers!

This repository is the home of the Kata Containers code for the 2.0 and newer
releases.

If you want to learn about Kata Containers, visit the main
[Kata Containers website](https://katacontainers.io).

## Introduction

Kata Containers is an open source project and community working to build a
standard implementation of lightweight Virtual Machines (VMs) that feel and
perform like containers, but provide the workload isolation and security
advantages of VMs.

## License

The code is licensed under the Apache 2.0 license.
See [the license file](LICENSE) for further details.

## Platform support

Kata Containers currently runs on 64-bit systems supporting the following
technologies:

| Architecture | Virtualization technology |
|-|-|
| `x86_64`, `amd64` | [Intel](https://www.intel.com) VT-x, AMD SVM |
| `aarch64` ("`arm64`")| [ARM](https://www.arm.com) Hyp |
| `ppc64le` | [IBM](https://www.ibm.com) Power |
| `s390x` | [IBM](https://www.ibm.com) Z & LinuxONE SIE |

### Hardware requirements

The [Kata Containers runtime](src/runtime) provides a command to
determine if your host system is capable of running and creating a
Kata Container:

```bash
$ kata-runtime check
```

> **Notes:**
>
> - This command runs a number of checks including connecting to the
>   network to determine if a newer release of Kata Containers is
>   available on GitHub. If you do not wish this to check to run, add
>   the `--no-network-checks` option.
>
> - By default, only a brief success / failure message is printed.
>   If more details are needed, the `--verbose` flag can be used to display the
>   list of all the checks performed.
>
> - If the command is run as the `root` user additional checks are
>   run (including checking if another incompatible hypervisor is running).
>   When running as `root`, network checks are automatically disabled.

## Getting started

See the [installation documentation](docs/install).

## Documentation

See the [official documentation](docs) including:

- [Installation guides](docs/install)
- [Developer guide](docs/Developer-Guide.md)
- [Design documents](docs/design)
  - [Architecture overview](docs/design/architecture)
  - [Architecture 4.0 overview](docs/design/architecture_4.0/)

## Configuration

Kata Containers uses a single
[configuration file](src/runtime/README.md#configuration)
which contains a number of sections for various parts of the Kata
Containers system including the [runtime](src/runtime), the
[agent](src/agent) and the [hypervisor](#hypervisors).

## Hypervisors

See the [hypervisors document](docs/hypervisors.md) and the
[Hypervisor specific configuration details](src/runtime/README.md#hypervisor-specific-configuration).

## Community

To learn more about the project, its community and governance, see the
[community repository](https://github.com/kata-containers/community). This is
the first place to go if you wish to contribute to the project.

## Getting help

See the [community](#community) section for ways to contact us.

### Raising issues

Please raise an issue
[in this repository](https://github.com/kata-containers/kata-containers/issues).

> **Note:**
> If you 