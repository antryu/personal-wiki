<!-- GitHub Trending: Go | 35,399 stars | +8 today -->

# hashicorp/vault

> A tool for secrets management, encryption as a service, and privileged access management

## Repository Info
- **URL**: https://github.com/hashicorp/vault
- **Stars**: 35,400
- **Forks**: 4,632
- **Language**: Go
- **License**: Other
- **Created**: 2015-02-25
- **Updated**: 2026-04-14
- **Topics**: go, secrets, vault
- **Open Issues**: 1481

## README (excerpt)
# Vault [![build](https://github.com/hashicorp/vault/actions/workflows/build.yml/badge.svg)](https://github.com/hashicorp/vault/actions/workflows/build.yml) [![ci](https://github.com/hashicorp/vault/actions/workflows/ci.yml/badge.svg)](https://github.com/hashicorp/vault/actions/workflows/ci.yml)  [![vault enterprise](https://img.shields.io/badge/vault-enterprise-yellow.svg?colorB=7c8797&colorA=000000)](https://www.hashicorp.com/products/vault/?utm_source=github&utm_medium=banner&utm_campaign=github-vault-enterprise)

----

**Please note**: We take Vault's security and our users' trust very seriously. If you believe you have found a security issue in Vault, _please responsibly disclose_ by contacting us at [security@hashicorp.com](mailto:security@hashicorp.com).

----

- Website: [developer.hashicorp.com/vault](https://developer.hashicorp.com/vault)
- Announcement list: [Google Groups](https://groups.google.com/group/hashicorp-announce)
- Discussion forum: [Discuss](https://discuss.hashicorp.com/c/vault)
- Documentation: [https://developer.hashicorp.com/vault/docs](https://developer.hashicorp.com/vault/docs)
- Tutorials: [https://developer.hashicorp.com/vault/tutorials](https://developer.hashicorp.com/vault/tutorials)
- Certification exam: [https://developer.hashicorp.com/certifications/security-automation](https://developer.hashicorp.com/certifications/security-automation)
- Documentation source: [https://github.com/hashicorp/web-unified-docs](https://github.com/hashicorp/web-unified-docs)

<img width="300" alt="Vault Logo" src="https://github.com/hashicorp/vault/blob/f22d202cde2018f9455dec755118a9b84586e082/Vault_PrimaryLogo_Black.png">

Vault is a tool for securely accessing secrets. A secret is anything that you want to tightly control access to, such as API keys, passwords, certificates, and more. Vault provides a unified interface to any secret, while providing tight access control and recording a detailed audit log.

A modern system requires access to a multitude of secrets: database credentials, API keys for external services, credentials for service-oriented architecture communication, etc. Understanding who is accessing what secrets is already very difficult and platform-specific. Adding on key rolling, secure storage, and detailed audit logs is almost impossible without a custom solution. This is where Vault steps in.

The key features of Vault are:

* **Secure Secret Storage**: Vault can store arbitrary key/value pairs. Vault encrypts data before writing it to persistent
  storage, so gaining access to the raw storage isn't enough to access
  your secrets. Vault can write to disk, [Consul](https://www.consul.io),
  and more.

* **Dynamic Secrets**: Vault can generate secrets on-demand for some
  systems, such as AWS or SQL databases. For example, when an application
  needs to access an S3 bucket, it asks Vault for credentials, and Vault
  will generate an AWS keypair with valid permissions on demand. After
  creating these dynamic secrets, Vault will also automatically revoke them
  after the lease is up.

* **Data Encryption**: Vault can encrypt and decrypt data without storing
  it. This allows security teams to define encryption parameters and
  developers to store encrypted data in a location such as a SQL database without
  having to design their own encryption methods.

* **Leasing and Renewal**: Vault associates a **lease** with each secret.
  At the end of the lease, Vault automatically revokes the
  secret. Clients are able to renew leases via built-in renew APIs.

* **Revocation**: Vault has built-in support for secret revocation. Vault
  can revoke not only single secrets, but a tree of secrets, for example,
  all secrets read by a specific user, or all secrets of a particular type.
  Revocation assists in key rolling as well as locking down systems in the
  case of an intrusion.

Documentation, Getting Started, and Certification Exams
-------------------------------

Documentation is available on the [V