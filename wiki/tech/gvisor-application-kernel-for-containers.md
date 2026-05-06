# gVisor: Application Kernel for Containers

> gVisor provides a strong layer of isolation between running applications and the host operating system by implementing a Linux-like interface in userspace, written in memory-safe Go. It is notable for offering the security benefits of virtual machines while maintaining the performance and flexibility of userspace applications.
> Last updated: 2026-05-06

## Overview

gVisor is an application kernel designed to improve the security of containerized applications. Unlike traditional container approaches that rely on the host kernel, gVisor provides its own userspace kernel interface, reducing the attack surface and mitigating the risk of container escapes. It integrates with standard container tooling via an Open Container Initiative (OCI) runtime called `runsc`, which allows it to work seamlessly with Docker and Kubernetes.

gVisor is not a VM, nor is it a syscall filter or wrapper over Linux isolation primitives. Instead, it offers a distinct third approach to sandboxing by implementing a Linux interface while running as a normal userspace process. This allows gVisor to maintain low resource usage and fast startup times, while still providing strong isolation for untrusted or potentially malicious code.

The project is actively maintained, written in Go, and distributed under the Apache License 2.0. It has seen widespread adoption due to its focus on security and compatibility with existing container ecosystems.

## Key Points
- gVisor provides strong isolation for containers by implementing a userspace application kernel.
- It integrates with Docker and Kubernetes via the `runsc` runtime, enabling seamless container sandboxing.
- gVisor is written in memory-safe Go and runs in userspace, offering security benefits similar to VMs while retaining the performance of userspace applications.
- It is not a VM, nor a syscall filter or wrapper over Linux isolation primitives, but a distinct approach to sandboxing.
- The project supports multiple architectures, including x86_64 and ARM64, and is actively maintained with a large open-source community.

## Sources
- [GitHub](https://github.com/google/gvisor)
- [원본](raw/ingest/tech/2026-05-06-gvisor-application-kernel-for-containers.md)