<!-- GitHub Trending: Rust | 5,547 stars | +11 today -->

# cloud-hypervisor/cloud-hypervisor

> A Virtual Machine Monitor for modern Cloud workloads. Features include CPU, memory and device hotplug, support for running Windows and Linux guests, device offload with vhost-user and a minimal compact footprint. Written in Rust with a strong focus on security.

## Repository Info
- **URL**: https://github.com/cloud-hypervisor/cloud-hypervisor
- **Stars**: 5,547
- **Forks**: 628
- **Language**: Rust
- **License**: N/A
- **Created**: 2019-04-30
- **Updated**: 2026-04-23
- **Topics**: cloud-workloads, kvm, rust-vmm, virtualization
- **Open Issues**: 220

## README (excerpt)
- [1. What is Cloud Hypervisor?](#1-what-is-cloud-hypervisor)
  - [Objectives](#objectives)
    - [High Level](#high-level)
    - [Architectures](#architectures)
    - [Guest OS](#guest-os)
- [2. Getting Started](#2-getting-started)
  - [Host OS](#host-os)
  - [Use Pre-built Binaries](#use-pre-built-binaries)
  - [Packages](#packages)
  - [Building from Source](#building-from-source)
  - [Booting Linux](#booting-linux)
    - [Firmware Booting](#firmware-booting)
    - [Custom Kernel and Disk Image](#custom-kernel-and-disk-image)
      - [Building your Kernel](#building-your-kernel)
      - [Disk image](#disk-image)
      - [Booting the guest VM](#booting-the-guest-vm)
- [3. Status](#3-status)
  - [Hot Plug](#hot-plug)
  - [Device Model](#device-model)
  - [Roadmap](#roadmap)
- [4. Relationship with _Rust VMM_ Project](#4-relationship-with-rust-vmm-project)
  - [Differences with Firecracker and crosvm](#differences-with-firecracker-and-crosvm)
- [5. Community](#5-community)
  - [Contribute](#contribute)
  - [Slack](#slack)
  - [Mailing list](#mailing-list)
  - [Security issues](#security-issues)

# 1. What is Cloud Hypervisor?

Cloud Hypervisor is an open source Virtual Machine Monitor (VMM) that runs on
top of the [KVM](https://www.kernel.org/doc/Documentation/virtual/kvm/api.txt)
hypervisor and the Microsoft Hypervisor (MSHV).

The project focuses on running modern, _Cloud Workloads_, on specific, common,
hardware architectures. In this case _Cloud Workloads_ refers to those that are
run by customers inside a Cloud Service Provider. This means modern operating
systems with most I/O handled by
paravirtualised devices (e.g. _virtio_), no requirement for legacy devices, and
64-bit CPUs.

Cloud Hypervisor is implemented in [Rust](https://www.rust-lang.org/) and is
based on the [Rust VMM](https://github.com/rust-vmm) crates.

## Objectives

### High Level

- Runs on KVM or MSHV
- Minimal emulation
- Low latency
- Low memory footprint
- Low complexity
- High performance
- Small attack surface
- 64-bit support only
- CPU, memory, PCI hotplug
- Machine to machine migration

### Architectures

Cloud Hypervisor supports the `x86-64`, `AArch64` and `riscv64`
architectures, with functionality varying across these platforms. The
functionality differences between `x86-64` and `AArch64` are documented
in [#1125](https://github.com/cloud-hypervisor/cloud-hypervisor/issues/1125).
The `riscv64` architecture support is experimental and offers limited
functionality. For more details and instructions, please refer to [riscv
documentation](docs/riscv.md).

### Guest OS

Cloud Hypervisor supports `64-bit Linux` and Windows 10/Windows Server 2019.

# 2. Getting Started

The following sections describe how to build and run Cloud Hypervisor.

## Prerequisites for AArch64

- AArch64 servers (recommended) or development boards equipped with the GICv3
  interrupt controller.

## Host OS

For required KVM functionality and adequate performance the recommended host
kernel version is 5.13. The majority of the CI currently tests with kernel
version 5.15.

## Use Pre-built Binaries

The recommended approach to getting started with Cloud Hypervisor is by using a
pre-built binary. Binaries are available for the [latest
release](https://github.com/cloud-hypervisor/cloud-hypervisor/releases/latest).
Use `cloud-hypervisor-static` for `x86-64` or `cloud-hypervisor-static-aarch64`
for `AArch64` platform.

## Packages

For convenience, packages are also available targeting some popular Linux
distributions. This is thanks to the [Open Build
Service](https://build.opensuse.org). The [OBS
README](https://github.com/cloud-hypervisor/obs-packaging) explains how to
enable the repository in a supported Linux distribution and install Cloud Hypervisor
and accompanying packages. Please report any packaging issues in the
[obs-packaging](https://github.com/cloud-hypervisor/obs-packaging) repository.

## Building from Source

Please see the [instructions for building from source]