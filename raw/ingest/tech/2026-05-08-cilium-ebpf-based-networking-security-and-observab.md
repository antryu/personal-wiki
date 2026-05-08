<!-- GitHub Trending: Go | 24,305 stars | +13 today -->

# cilium/cilium

> eBPF-based Networking, Security, and Observability

## Repository Info
- **URL**: https://github.com/cilium/cilium
- **Stars**: 24,305
- **Forks**: 3,757
- **Language**: Go
- **License**: Apache License 2.0
- **Created**: 2015-12-16
- **Updated**: 2026-05-08
- **Topics**: bpf, cncf, cni, containers, ebpf, k8s, kernel, kubernetes, kubernetes-networking, loadbalancing, monitoring, networking, observability, security, troubleshooting, xdp
- **Open Issues**: 1009

## README (excerpt)
.. raw:: html

   <picture>
      <source media="(prefers-color-scheme: light)" srcset="https://cdn.jsdelivr.net/gh/cilium/cilium@main/Documentation/images/logo.png" width="350" alt="Cilium Logo">
      <img src="https://cdn.jsdelivr.net/gh/cilium/cilium@main/Documentation/images/logo-dark.png" width="350" alt="Cilium Logo">
   </picture>

|cii| |go-report| |clomonitor| |artifacthub| |slack| |go-doc| |rtd| |apache| |bsd| |gpl| |fossa| |gateway-api| |codespaces|

Cilium is a networking, observability, and security solution with an eBPF-based
dataplane. It provides a simple flat Layer 3 network with the ability to span
multiple clusters in either a native routing or overlay mode. It is L7-protocol
aware and can enforce network policies on L3-L7 using an identity-based security
model that is decoupled from network addressing.

Cilium implements distributed load balancing for traffic between pods and to
external services, and is able to fully replace kube-proxy, using efficient
hash tables in eBPF, allowing for almost unlimited scale. It also supports
advanced functionality like integrated ingress and egress gateway, bandwidth
management and service mesh, and provides deep network and security visibility and monitoring.

A new Linux kernel technology called eBPF_ is at the foundation of Cilium. It
supports dynamic insertion of eBPF bytecode into the Linux kernel at various
integration points such as: network IO, application sockets, and tracepoints to
implement security, networking and visibility logic. eBPF is highly efficient
and flexible. To learn more about eBPF, visit `eBPF.io`_.

.. image:: Documentation/images/cilium-overview.png
   :alt: Overview of Cilium features for networking, observability, service mesh, and runtime security

.. raw:: html

   <a href="https://cncf.io/">
      <picture>
         <source media="(prefers-color-scheme: light)" srcset="https://github.com/cncf/artwork/blob/main/other/cncf-member/graduated/color/cncf-graduated-color.svg" />
         <img src="https://github.com/cncf/artwork/blob/main/other/cncf-member/graduated/white/cncf-graduated-white.svg" alt="CNCF Graduated Project" height="80" />
      </picture>
   </a>
   <a href="https://ebpf.io/">
      <picture>
         <source media="(prefers-color-scheme: light)" srcset=".github/assets/ebpf-horizontal.svg" />
         <img src=".github/assets/ebpf-horizontal-dark-back.svg" alt="eBPF Logo" height="80" align="right" />
      </picture>
   </a>

Stable Releases
===============

The Cilium community maintains minor stable releases for the last three minor
Cilium versions. Older Cilium stable versions from minor releases prior to that
are considered EOL.

For upgrades to new minor releases, please consult the `Cilium Upgrade Guide`_.

Listed below are the actively maintained release branches along with their latest
patch release, corresponding image pull tags and their release notes:

+---------------------------------------------------------+------------+------------------------------------+----------------------------------------------------------------------------+
| `v1.19 <https://github.com/cilium/cilium/tree/v1.19>`__ | 2026-04-15 | ``quay.io/cilium/cilium:v1.19.3``  | `Release Notes <https://github.com/cilium/cilium/releases/tag/v1.19.3>`__  |
+---------------------------------------------------------+------------+------------------------------------+----------------------------------------------------------------------------+
| `v1.18 <https://github.com/cilium/cilium/tree/v1.18>`__ | 2026-04-15 | ``quay.io/cilium/cilium:v1.18.9``  | `Release Notes <https://github.com/cilium/cilium/releases/tag/v1.18.9>`__  |
+---------------------------------------------------------+------------+------------------------------------+----------------------------------------------------------------------------+
| `v1.17 <https://github.com/cilium/cilium/tree/v1.17>`__ | 2026-04-15 | ``quay.io/cilium/cilium:v1.17.15`` | `Release Notes <https://github.com/cili