# Secure Infrastructure Access and Audit

> The gravitational/teleport repository provides a secure and unified access control platform for servers, Kubernetes clusters, databases, and more, with integrated audit and role-based access control. It simplifies infrastructure access management and enhances security by replacing long-lived keys with certificate-based authentication.  
> Last updated: 2026-05-14

## Overview
The `gravitational/teleport` project is a secure infrastructure access solution designed for cloud and on-prem environments. It offers a comprehensive platform for identity management, access control, and session auditing.

Teleport supports multiple protocols and services, including SSH, Kubernetes, RDP, PostgreSQL, MongoDB, MySQL, and internal web applications. It enables single sign-on (SSO), secure tunneling, and audit trails for all access sessions. The system uses certificate-based authentication and enforces least privilege access and JIT (Just-in-Time) elevation.

Key capabilities include:

- Secure access to servers, databases, Kubernetes, and cloud APIs
- Centralized access control and identity management
- Real-time session recording and auditing
- Automatic certificate expiration and MFA enforcement
- Tunneling behind NATs and firewalls without bastion hosts or VPNs
- Support for both human and workload identities

Teleport is written in Go and is open source under the GNU AGPL v3.0 license. It has been actively developed since 2015 and is used by developers, DevOps teams, and IT administrators to secure infrastructure access across hybrid environments.

## Key Points
- Secure access to servers, Kubernetes, databases, and cloud resources.
- Real-time session auditing and recording for SSH, Kubernetes, and web sessions.
- Supports certificate-based authentication with automatic expiration.
- Enforces least privilege and JIT access elevation.
- Eliminates the need for long-lived keys or passwords.
- Integrates with SSO and MFA for comprehensive security.
- Works across hybrid cloud and on-prem environments.

## Sources
- [GitHub](https://github.com/gravitational/teleport)
- [원본](raw/ingest/infra/2026-05-14-secure-infrastructure-access-and-audit.md)