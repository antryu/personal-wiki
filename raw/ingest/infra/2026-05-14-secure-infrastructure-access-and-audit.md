<!-- GitHub Trending: Go | 20,320 stars | +19 today -->

# gravitational/teleport

> The easiest, and most secure way to access and protect all of your infrastructure.

## Repository Info
- **URL**: https://github.com/gravitational/teleport
- **Stars**: 20,320
- **Forks**: 2,060
- **Language**: Go
- **License**: GNU Affero General Public License v3.0
- **Created**: 2015-03-02
- **Updated**: 2026-05-14
- **Topics**: audit, bastion, certificate, cluster, database-access, firewall, firewalls, go, golang, jumpserver, kubernetes, kubernetes-access, pam, postgres, rbac, rdp, security, ssh, teleport, teleport-binaries
- **Open Issues**: 3314

## README (excerpt)
Teleport provides connectivity, authentication, access controls and audit for
infrastructure.

You might use Teleport to:

* Set up single sign-on (SSO) for all of your cloud and on-prem
  infrastructure.
* Protect access to servers, Kubernetes clusters, databases, Windows
  desktops, web applications, and cloud APIs without long-lived keys or
  passwords.
* Establish secure tunnels to reach resources behind NATs and firewalls
  without VPNs or bastion hosts.
* Record and audit activity across SSH, Kubernetes, database, RDP, and web
  sessions.
* Apply consistent Role-Based and Attribute-Based Access Control (RBAC/ABAC)
  across users, machines, workloads, and resource types.
* Enforce least privilege and Just-in-Time (JIT) access requests for
  elevated roles or sensitive systems.
* Maintain a single identity and access layer for both human users and
  workloads.

Teleport works with SSH, Kubernetes, databases, RDP, cloud consoles,
internal web services, Git repositories, and Model Context Protocol (MCP)
servers.

<div align="center">
   <a href="https://goteleport.com/download">
   <img src="./assets/img/hero-teleport-platform.png" width=750/>
   </a>
   <div align="center" style="padding: 25px">
      <a href="https://goteleport.com/download">
      <img src="https://img.shields.io/github/v/release/gravitational/teleport?sort=semver&label=Release&color=651FFF" />
      </a>
      <a href="https://golang.org/">
      <img src="https://img.shields.io/github/go-mod/go-version/gravitational/teleport?color=7fd5ea" />
      </a>
      <a href="https://github.com/gravitational/teleport/blob/master/CODE_OF_CONDUCT.md">
      <img src="https://img.shields.io/badge/Contribute-🙌-green.svg" />
      </a>
      <a href="https://www.gnu.org/licenses/agpl-3.0.en.html">
      <img src="https://img.shields.io/badge/AGPL-3.0-red.svg" />
      </a>
   </div>
</div>
</br>

## More Information
[Teleport Getting Started](https://goteleport.com/docs/get-started/)  
[Teleport Architecture](https://goteleport.com/docs/reference/architecture/)  
[Reference Guides](https://goteleport.com/docs/reference/)  
[FAQ](https://goteleport.com/docs/faq)


## Table of Contents

1. [Introduction](#introduction)
1. [Why We Built Teleport](#why-we-built-teleport)
1. [Supporting and Contributing](#supporting-and-contributing)
1. [Installing and Running](#installing-and-running)
1. [Docker](#docker)
1. [Building Teleport](#building-teleport)
1. [License](#license)
1. [FAQ](#faq)

## Introduction

Teleport includes an identity-aware access proxy, a CA that issues short-lived
certificates, a unified access control system, and a tunneling system to access
resources behind the firewall.

Teleport is a single Go binary that integrates with multiple protocols and
cloud services, including

* [SSH nodes](https://goteleport.com/docs/enroll-resources/server-access/introduction/)
* [Kubernetes clusters](https://goteleport.com/docs/enroll-resources/kubernetes-access/introduction/)
* [PostgreSQL, MongoDB, CockroachDB and MySQL
  databases](https://goteleport.com/docs/enroll-resources/database-access/)
* [Model Context Protocol](https://goteleport.com/docs/connect-your-client/model-context-protocol/)
* [Internal Web apps](https://goteleport.com/docs/enroll-resources/application-access/introduction/)
* [Windows Hosts](https://goteleport.com/docs/enroll-resources/desktop-access/introduction/)
* [Networked servers](https://goteleport.com/docs/enroll-resources/server-access/introduction/)

You can set up Teleport as a [Linux
daemon](https://goteleport.com/docs/admin-guides/deploy-a-cluster/linux-demo)
or a [Kubernetes
deployment](https://goteleport.com/docs/admin-guides/deploy-a-cluster/helm-deployments/).

Teleport focuses on best practices for infrastructure security, including:

- No shared secrets such as SSH keys or Kubernetes tokens; Teleport uses
  certificate-based auth with automatic expiration for all protocols.
- Multi-factor authentication (MFA) for everything.
- Singl