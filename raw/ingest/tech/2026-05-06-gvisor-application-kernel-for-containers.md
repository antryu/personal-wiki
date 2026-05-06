<!-- GitHub Trending: Go | 18,251 stars | +12 today -->

# google/gvisor

> Application Kernel for Containers

## Repository Info
- **URL**: https://github.com/google/gvisor
- **Stars**: 18,251
- **Forks**: 1,589
- **Language**: Go
- **License**: Apache License 2.0
- **Created**: 2018-04-26
- **Updated**: 2026-05-06
- **Topics**: containers, docker, kernel, kubernetes, linux, oci, sandbox
- **Open Issues**: 579

## README (excerpt)
![gVisor](g3doc/logo.png)

[![Build status](https://badge.buildkite.com/3b159f20b9830461a71112566c4171c0bdfd2f980a8e4c0ae6.svg?branch=master)](https://buildkite.com/gvisor/pipeline)
[![Issue reviver](https://github.com/google/gvisor/actions/workflows/issue_reviver.yml/badge.svg)](https://github.com/google/gvisor/actions/workflows/issue_reviver.yml)
[![CodeQL](https://github.com/google/gvisor/actions/workflows/codeql.yml/badge.svg)](https://github.com/google/gvisor/actions/workflows/codeql.yml)
[![gVisor chat](https://badges.gitter.im/gvisor/community.png)](https://gitter.im/gvisor/community)
[![code search](https://img.shields.io/badge/code-search-blue)](https://cs.opensource.google/gvisor/gvisor)

## What is gVisor?

**gVisor** provides a strong layer of isolation between running applications and
the host operating system. It is an application kernel that implements a
[Linux-like interface][linux]. Unlike Linux, it is written in a memory-safe
language (Go) and runs in userspace.

gVisor includes an [Open Container Initiative (OCI)][oci] runtime called `runsc`
that makes it easy to work with existing container tooling. The `runsc` runtime
integrates with Docker and Kubernetes, making it simple to run sandboxed
containers.

## What **isn't** gVisor?

*   gVisor is **not a syscall filter** (e.g. `seccomp-bpf`), nor a wrapper over
    Linux isolation primitives (e.g. `firejail`, AppArmor, etc.).
*   gVisor is also **not a VM** in the everyday sense of the term (e.g.
    VirtualBox, QEMU).

**gVisor takes a distinct third approach**, providing many security benefits of
VMs while maintaining the lower resource footprint, fast startup, and
flexibility of regular userspace applications.

## Why does gVisor exist?

Containers are not a [**sandbox**][sandbox]. While containers have
revolutionized how we develop, package, and deploy applications, using them to
run untrusted or potentially malicious code without additional isolation is not
a good idea. While using a single, shared kernel allows for efficiency and
performance gains, it also means that container escape is possible with a single
vulnerability.

gVisor is an application kernel for containers. It limits the host kernel
surface accessible to the application while still giving the application access
to all the features it expects. Unlike most kernels, gVisor does not assume or
require a fixed set of physical resources; instead, it leverages existing host
kernel functionality and runs as a normal process. In other words, gVisor
implements Linux by way of Linux.

gVisor should not be confused with technologies and tools to harden containers
against external threats, provide additional integrity checks, or limit the
scope of access for a service. One should always be careful about what data is
made available to a container.

## Documentation

User documentation and technical architecture, including quick start guides, can
be found at [gvisor.dev][gvisor-dev].

## Installing from source

gVisor builds on x86_64 and ARM64. Other architectures may become available in
the future.

For the purposes of these instructions, [bazel][bazel] and other build
dependencies are wrapped in a build container. It is possible to use
[bazel][bazel] directly, or type `make help` for standard targets.

### Requirements

Make sure the following dependencies are installed:

*   Linux 4.14.77+ ([older linux][old-linux])
*   [Docker version 17.09.0 or greater][docker]

### Building

Build and install the `runsc` binary:

```sh
mkdir -p bin
make copy TARGETS=runsc DESTINATION=bin/
sudo cp ./bin/runsc /usr/local/bin
```

To build specific libraries or binaries, you can specify the target:

```sh
make build TARGETS="//pkg/tcpip:tcpip"
```

### Building directly with Bazel (without Docker)

Using Bazel directly isn't recommended due to the extra overhead, but in order
to get started:

-   Look at the [build dockerfile](images/default/Dockerfile) for the canonical
    list of needed dependencies.
-   Install an