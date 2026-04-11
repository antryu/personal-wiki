# Sealed Secrets for Kubernetes

> A Kubernetes controller and tool for one-way encrypted Secrets that allows secure management of secrets in Git, even in public repositories. It is notable for enabling GitOps workflows by securely handling sensitive data.
> Last updated: 2026-04-11

## Overview
The Sealed Secrets project provides a Kubernetes controller and command-line tool (`kubeseal`) to encrypt Kubernetes Secrets into "SealedSecrets," which can be safely stored in version control systems. These SealedSecrets can only be decrypted by the Sealed Secrets controller running in the target Kubernetes cluster, ensuring that sensitive data is never exposed in plaintext in repositories.

The controller uses a public key to encrypt the secrets, and the private key is kept secure within the cluster. This approach allows DevOps teams to manage all Kubernetes configuration in Git, including secrets, without compromising security.

The project is actively maintained, widely adopted, and supports multiple installation methods, including Helm and Kustomize. It also supports advanced features such as secret rotation and manual key management for enterprise-grade security.

## Key Points
- Encrypts Kubernetes Secrets into SealedSecrets that can be safely stored in Git.
- Uses asymmetric encryption with a public key for sealing and a private key for decryption.
- Supports GitOps workflows by allowing secrets to be version-controlled.
- Includes a CLI tool (`kubeseal`) for generating SealedSecrets.
- Provides support for secret rotation and key renewal.

## Sources
- [GitHub](https://github.com/bitnami-labs/sealed-secrets)
- [원본](raw/ingest/tech/2026-04-11-sealed-secrets-for-kubernetes.md)