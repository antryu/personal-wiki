<!-- GitHub Trending: Go | 9,026 stars | +7 today -->

# bitnami-labs/sealed-secrets

> A Kubernetes controller and tool for one-way encrypted Secrets

## Repository Info
- **URL**: https://github.com/bitnami-labs/sealed-secrets
- **Stars**: 9,026
- **Forks**: 767
- **Language**: Go
- **License**: Apache License 2.0
- **Created**: 2017-05-29
- **Updated**: 2026-04-11
- **Topics**: devops-workflow, encrypt-secrets, gitops, kubernetes, kubernetes-secrets
- **Open Issues**: 72

## README (excerpt)
# "Sealed Secrets" for Kubernetes

[![](https://img.shields.io/badge/install-docs-brightgreen.svg)](#Installation)
[![](https://img.shields.io/github/release/bitnami-labs/sealed-secrets.svg)](https://github.com/bitnami-labs/sealed-secrets/releases/latest)
[![](https://img.shields.io/homebrew/v/kubeseal)](https://formulae.brew.sh/formula/kubeseal)
[![Build Status](https://github.com/bitnami-labs/sealed-secrets/actions/workflows/ci.yml/badge.svg)](https://github.com/bitnami-labs/sealed-secrets/actions/workflows/ci.yml)
[![](https://img.shields.io/github/v/release/bitnami-labs/sealed-secrets?include_prereleases&label=helm&sort=semver)](https://github.com/bitnami-labs/sealed-secrets/releases)
[![Download Status](https://img.shields.io/docker/pulls/bitnami/sealed-secrets-controller.svg)](https://hub.docker.com/r/bitnami/sealed-secrets-controller)
[![Go Report Card](https://goreportcard.com/badge/github.com/bitnami-labs/sealed-secrets)](https://goreportcard.com/report/github.com/bitnami-labs/sealed-secrets)
![Downloads](https://img.shields.io/github/downloads/bitnami-labs/sealed-secrets/total.svg)

**Problem:** "I can manage all my K8s config in git, except Secrets."

**Solution:** Encrypt your Secret into a SealedSecret, which *is* safe
to store - even inside a public repository. The SealedSecret can be
decrypted only by the controller running in the target cluster and
nobody else (not even the original author) is able to obtain the
original Secret from the SealedSecret.

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->


- [Overview](#overview)
  - [SealedSecrets as templates for secrets](#sealedsecrets-as-templates-for-secrets)
  - [Public key / Certificate](#public-key--certificate)
  - [Scopes](#scopes)
- [Installation](#installation)
  - [Installation in Restricted Environments (No RBAC)](#installation-in-restricted-environments-no-rbac)
  - [Controller](#controller)
    - [Kustomize](#kustomize)
    - [Helm Chart](#helm-chart)
      - [Helm Chart on a restricted environment](#helm-chart-on-a-restricted-environment)
  - [Kubeseal](#kubeseal)
    - [Homebrew](#homebrew)
    - [MacPorts](#macports)
    - [Nixpkgs](#nixpkgs)
    - [Linux](#linux)
    - [Installation from source](#installation-from-source)
- [Upgrade](#upgrade)
  - [Supported Versions](#supported-versions)
  - [Compatibility with Kubernetes versions](#compatibility-with-kubernetes-versions)
- [Usage](#usage)
  - [Managing existing secrets](#managing-existing-secrets)
  - [Patching existing secrets](#patching-existing-secrets)
  - [Seal secret which can skip set owner references](#seal-secret-which-can-skip-set-owner-references)
  - [Update existing secrets](#update-existing-secrets)
  - [Raw mode (experimental)](#raw-mode-experimental)
  - [Validate a Sealed Secret](#validate-a-sealed-secret)
- [Secret Rotation](#secret-rotation)
  - [Sealing key renewal](#sealing-key-renewal)
  - [Key registry init priority order](#key-registry-init-priority-order)
  - [User secret rotation](#user-secret-rotation)
  - [Early key renewal](#early-key-renewal)
  - [Common misconceptions about key renewal](#common-misconceptions-about-key-renewal)
  - [Manual key management (advanced)](#manual-key-management-advanced)
  - [Re-encryption (advanced)](#re-encryption-advanced)
- [Details (advanced)](#details-advanced)
  - [Crypto](#crypto)
- [Developing](#developing)
- [FAQ](#faq)
  - [Can I encrypt multiple secrets at once, in one YAML / JSON file?](#can-i-encrypt-multiple-secrets-at-once-in-one-yaml--json-file)
  - [Will you still be able to decrypt if you no longer have access to your cluster?](#will-you-still-be-able-to-decrypt-if-you-no-longer-have-access-to-your-cluster)
  - [How can I do a backup of my SealedSecrets?](#how-can-i-do-a-backup-of-my-sealedsecrets)
  - [Can I decrypt my secrets offline with a backup key?](#can-i-decrypt-my-secrets-offline-with-a-backup-key)
  - [What fla