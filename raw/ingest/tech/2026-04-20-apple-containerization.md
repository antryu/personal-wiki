<!-- GitHub Trending: Swift | 8,485 stars | +8 today -->

# apple/containerization

> Containerization is a Swift package for running Linux containers on macOS.

## Repository Info
- **URL**: https://github.com/apple/containerization
- **Stars**: 8,485
- **Forks**: 270
- **Language**: Swift
- **License**: Apache License 2.0
- **Created**: 2025-05-29
- **Updated**: 2026-04-20
- **Topics**: N/A
- **Open Issues**: 46

## README (excerpt)
<h1>
  <img alt="Containerization logo" src="./assets/Containerization-Logo.png" width="70" valign="middle">
  &nbsp;Containerization
</h1>

The Containerization package allows applications to use Linux containers.
Containerization is written in [Swift](https://www.swift.org) and uses [Virtualization.framework](https://developer.apple.com/documentation/virtualization) on Apple silicon.

> **Looking for command line binaries for running containers?**\
> They are available in the dedicated [apple/container](https://github.com/apple/container) repository.

Containerization provides APIs to:

- [Manage OCI images](./Sources/ContainerizationOCI/).
- [Interact with remote registries](./Sources/ContainerizationOCI/Client/).
- [Create and populate ext4 file systems](./Sources/ContainerizationEXT4/).
- [Interact with the Netlink socket family](./Sources/ContainerizationNetlink/).
- [Create an optimized Linux kernel for fast boot times](./kernel/).
- [Spawn lightweight virtual machines and manage the runtime environment](./Sources/Containerization/LinuxContainer.swift).
- [Spawn and interact with containerized processes](./Sources/Containerization/LinuxProcess.swift).
- Use Rosetta 2 for running linux/amd64 containers on Apple silicon.

Please view the [API documentation](https://apple.github.io/containerization/documentation/) for information on the Swift packages that Containerization provides.

## Design

Containerization executes each Linux container inside of its own lightweight virtual machine. Clients can create dedicated IP addresses for every container to remove the need for individual port forwarding. Containers achieve sub-second start times using an optimized [Linux kernel configuration](/kernel) and a minimal root filesystem with a lightweight init system.

[vminitd](/vminitd) is a small init system, which is a subproject within Containerization.
`vminitd` is spawned as the initial process inside of the virtual machine and provides a GRPC API over vsock.
The API allows the runtime environment to be configured and containerized processes to be launched.
`vminitd` provides I/O, signals, and events to the calling process when a process is run.

## Requirements

To build the Containerization package, you need:

- Mac with Apple silicon
- macOS 26
- Xcode 26

Older versions of macOS are not supported. 

## Example Usage

For examples of how to use the libraries' API surface, the cctl executable is a good start. This app is a useful playground for exploring the API. It contains commands that exercise some of the core functionality of the various products, such as:

1. [Manipulating OCI images](./Sources/cctl/ImageCommand.swift)
2. [Logging in to container registries](./Sources/cctl/LoginCommand.swift)
3. [Creating root filesystem blocks](./Sources/cctl/RootfsCommand.swift)
4. [Running simple Linux containers](./Sources/cctl/RunCommand.swift)

## Linux kernel

A Linux kernel is required for spawning lightweight virtual machines on macOS.
Containerization provides an optimized kernel configuration located in the [kernel](./kernel) directory.

This directory includes a containerized build environment to easily compile a kernel for use with Containerization.

The kernel configuration is a minimal set of features to support fast start times and a lightweight environment.

While this configuration will work for the majority of workloads we understand that some will need extra features.
To solve this Containerization provides first class APIs to use different kernel configurations and versions on a per container basis.
This enables containers to be developed and validated across different kernel versions.

See the [README](/kernel/README.md) in the kernel directory for instructions on how to compile the optimized kernel.

### Kernel Support

Containerization allows user provided kernels but tests functionality starting with kernel version `6.14.9`.

### Pre-built Kernel

If you wish to consume a pre-built kernel, make sure it has `VIRTI