# HashiCorp Vault - Secrets & Access Management

> A tool for secrets management, encryption as a service, and privileged access management. Vault provides secure storage, dynamic secret generation, and fine-grained access control for sensitive data like API keys, passwords, and certificates.  
> Last updated: 2026-04-14

## Overview
HashiCorp Vault is an open-source tool designed to manage secrets and access control in modern infrastructure. It addresses the complexity of securely storing, dynamically generating, and auditing access to sensitive data such as API keys, database credentials, and certificates. Vault operates by encrypting secrets before storage, supporting dynamic secret generation for systems like AWS and SQL databases, and enforcing automatic revocation through lease-based expiration. Its modular architecture allows integration with storage backends like disk or Consul, and it enforces strict access controls with detailed audit logging. Vault is notable for its role in simplifying security operations while enabling developers to handle encryption without custom solutions.

## Key Points
- **Secure Secret Storage**: Encrypts secrets before storage, supporting backends like disk and Consul.  
- **Dynamic Secrets**: Generates on-demand credentials for systems like AWS and SQL, with automatic revocation.  
- **Data Encryption**: Provides encryption-as-a-service for secure data storage without custom encryption logic.  
- **Leasing & Revocation**: Manages secret lifetimes via leases and supports bulk revocation for security incident response.  
- **Audit Logging**: Tracks access to secrets for compliance and forensic analysis.  

## Sources
- [GitHub](https://github.com/hashicorp/vault)
- [원본](raw/ingest/infra/2026-04-14-hashicorp-vault-secrets-access-management.md)