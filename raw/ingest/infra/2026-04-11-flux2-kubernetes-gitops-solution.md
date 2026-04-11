<!-- GitHub Trending: Go | 8,030 stars | +6 today -->

# fluxcd/flux2

> Open and extensible continuous delivery solution for Kubernetes. Powered by GitOps Toolkit.

## Repository Info
- **URL**: https://github.com/fluxcd/flux2
- **Stars**: 8,030
- **Forks**: 728
- **Language**: Go
- **License**: Apache License 2.0
- **Created**: 2020-04-24
- **Updated**: 2026-04-11
- **Topics**: continuous-delivery, gitops, gitops-toolkit, helm, kubernetes, kustomize
- **Open Issues**: 244

## README (excerpt)
# Flux version 2

[![release](https://img.shields.io/github/release/fluxcd/flux2/all.svg)](https://github.com/fluxcd/flux2/releases)
[![CII Best Practices](https://bestpractices.coreinfrastructure.org/projects/4782/badge)](https://bestpractices.coreinfrastructure.org/projects/4782)
[![OpenSSF Scorecard](https://api.securityscorecards.dev/projects/github.com/fluxcd/flux2/badge)](https://scorecard.dev/viewer/?uri=github.com/fluxcd/flux2)
[![FOSSA Status](https://app.fossa.com/api/projects/custom%2B162%2Fgithub.com%2Ffluxcd%2Fflux2.svg?type=shield)](https://app.fossa.com/projects/custom%2B162%2Fgithub.com%2Ffluxcd%2Fflux2?ref=badge_shield)
[![Artifact HUB](https://img.shields.io/endpoint?url=https://artifacthub.io/badge/repository/flux2)](https://artifacthub.io/packages/helm/fluxcd-community/flux2)
[![SLSA 3](https://slsa.dev/images/gh-badge-level3.svg)](https://fluxcd.io/flux/security/slsa-assessment)

Flux is a tool for keeping Kubernetes clusters in sync with sources of
configuration (like Git repositories and OCI artifacts),
and automating updates to configuration when there is new code to deploy.

Flux version 2 ("v2") is built from the ground up to use Kubernetes'
API extension system, and to integrate with Prometheus and other core
components of the Kubernetes ecosystem. In version 2, Flux supports
multi-tenancy and support for syncing an arbitrary number of Git
repositories, among other long-requested features.

Flux v2 is constructed with the [GitOps Toolkit](#gitops-toolkit), a
set of composable APIs and specialized tools for building Continuous
Delivery on top of Kubernetes.

Flux is a Cloud Native Computing Foundation ([CNCF](https://www.cncf.io/)) graduated project, used in
production by various [organisations](https://fluxcd.io/adopters) and [cloud providers](https://fluxcd.io/ecosystem).

## Quickstart and documentation

To get started check out this [guide](https://fluxcd.io/flux/get-started/)
on how to bootstrap Flux on Kubernetes and deploy a sample application in a GitOps manner.

For more comprehensive documentation, see the following guides:
- [Ways of structuring your repositories](https://fluxcd.io/flux/guides/repository-structure/)
- [Manage Helm Releases](https://fluxcd.io/flux/guides/helmreleases/)
- [Automate image updates to Git](https://fluxcd.io/flux/guides/image-update/)  
- [Manage Kubernetes secrets with Flux and SOPS](https://fluxcd.io/flux/guides/mozilla-sops/)  

If you need help, please refer to our **[Support page](https://fluxcd.io/support/)**.

## GitOps Toolkit

The GitOps Toolkit is the set of APIs and controllers that make up the
runtime for Flux v2. The APIs comprise Kubernetes custom resources,
which can be created and updated by a cluster user, or by other
automation tooling.

![overview](https://raw.githubusercontent.com/fluxcd/flux2/main/docs/diagrams/fluxcd-controllers.png)

You can use the toolkit to extend Flux, or to build your own systems
for continuous delivery -- see [the developer
guides](https://fluxcd.io/flux/gitops-toolkit/source-watcher/).

### Components

- [Source Controllers](https://fluxcd.io/flux/components/source/)
    - [GitRepository CRD](https://fluxcd.io/flux/components/source/gitrepositories/)
    - [OCIRepository CRD](https://fluxcd.io/flux/components/source/ocirepositories/)
    - [HelmRepository CRD](https://fluxcd.io/flux/components/source/helmrepositories/)
    - [HelmChart CRD](https://fluxcd.io/flux/components/source/helmcharts/)
    - [Bucket CRD](https://fluxcd.io/flux/components/source/buckets/)
    - [ExternalArtifact CRD](https://fluxcd.io/flux/components/source/externalartifacts/)
    - [ArtifactGenerator CRD](https://fluxcd.io/flux/components/source/artifactgenerators/)
- [Kustomize Controller](https://fluxcd.io/flux/components/kustomize/)
    - [Kustomization CRD](https://fluxcd.io/flux/components/kustomize/kustomizations/)
- [Helm Controller](https://fluxcd.io/flux/components/helm/)
    - [HelmRelease CRD](https://fluxcd.io/flux/components/helm