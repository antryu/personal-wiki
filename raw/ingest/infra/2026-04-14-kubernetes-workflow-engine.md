<!-- GitHub Trending: Go | 16,614 stars | +6 today -->

# argoproj/argo-workflows

> Workflow Engine for Kubernetes

## Repository Info
- **URL**: https://github.com/argoproj/argo-workflows
- **Stars**: 16,614
- **Forks**: 3,494
- **Language**: Go
- **License**: Apache License 2.0
- **Created**: 2017-08-21
- **Updated**: 2026-04-14
- **Topics**: airflow, argo, argo-workflows, batch-processing, cloud-native, cncf, dag, data-engineering, gitops, hacktoberfest, k8s, knative, kubernetes, machine-learning, mlops, pipelines, workflow, workflow-engine
- **Open Issues**: 1388

## README (excerpt)
<!-- markdownlint-disable-next-line MD041 -->
[![Security Status](https://github.com/argoproj/argo-workflows/actions/workflows/snyk.yml/badge.svg?branch=main)](https://github.com/argoproj/argo-workflows/actions/workflows/snyk.yml?query=branch%3Amain)
[![OpenSSF Best Practices](https://bestpractices.coreinfrastructure.org/projects/3830/badge)](https://bestpractices.coreinfrastructure.org/projects/3830)
[![OpenSSF Scorecard](https://api.securityscorecards.dev/projects/github.com/argoproj/argo-workflows/badge)](https://api.securityscorecards.dev/projects/github.com/argoproj/argo-workflows)
[![FOSSA License Status](https://app.fossa.com/api/projects/git%2Bgithub.com%2Fargoproj%2Fargo-workflows.svg?type=shield)](https://app.fossa.com/projects/git%2Bgithub.com%2Fargoproj%2Fargo-workflows?ref=badge_shield)
[![Slack](https://img.shields.io/badge/slack-argoproj-brightgreen.svg?logo=slack)](https://argoproj.github.io/community/join-slack)
[![X Follow](https://img.shields.io/twitter/follow/argoproj?style=social)](https://x.com/argoproj)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-argoproj-blue.svg?logo=linkedin)](https://www.linkedin.com/company/argoproj/)
[![Bluesky](https://img.shields.io/badge/Bluesky-argoproj-blue.svg?style=social&logo=bluesky)](https://bsky.app/profile/argoproj.bsky.social)
[![Release Version](https://img.shields.io/github/v/release/argoproj/argo-workflows?label=argo-workflows)](https://github.com/argoproj/argo-workflows/releases/latest)
[![Artifact HUB](https://img.shields.io/endpoint?url=https://artifacthub.io/badge/repository/argo-workflows)](https://artifacthub.io/packages/helm/argo/argo-workflows)

## What is Argo Workflows?

Argo Workflows is an open source container-native workflow engine for orchestrating parallel jobs on Kubernetes.
Argo Workflows is implemented as a Kubernetes CRD (Custom Resource Definition).

* Define workflows where each step is a container.
* Model multi-step workflows as a sequence of tasks or capture the dependencies between tasks using a directed acyclic graph (DAG).
* Easily run compute intensive jobs for machine learning or data processing in a fraction of the time using Argo Workflows on Kubernetes.

Argo is a [Cloud Native Computing Foundation (CNCF)](https://cncf.io/) graduated project.

## Use Cases

* [Machine Learning pipelines](https://argo-workflows.readthedocs.io/en/latest/use-cases/machine-learning/)
* [Data and batch processing](https://argo-workflows.readthedocs.io/en/latest/use-cases/data-processing/)
* [Infrastructure automation](https://argo-workflows.readthedocs.io/en/latest/use-cases/infrastructure-automation/)
* [CI/CD](https://argo-workflows.readthedocs.io/en/latest/use-cases/ci-cd/)
* [Other use cases](https://argo-workflows.readthedocs.io/en/latest/use-cases/other/)

## Why Argo Workflows?

* Argo Workflows is the most popular workflow execution engine for Kubernetes.
* Light-weight, scalable, and easier to use.
    * Including for Python users through [the Hera Python SDK for Argo Workflows](https://hera.readthedocs.io/en/stable/).
* Designed from the ground up for containers without the overhead and limitations of legacy VM and server-based environments.
* Cloud agnostic and can run on any Kubernetes cluster.

[Read what people said in our latest survey](https://blog.argoproj.io/argo-workflows-events-2023-user-survey-results-82c53bc30543)

## Try Argo Workflows

You can try Argo Workflows via one of the following:

1. [Interactive Training Material](https://killercoda.com/argoproj/course/argo-workflows/)
1. [Access the demo environment](https://workflows.apps.argoproj.io/workflows/argo)

![Screenshot](docs/assets/screenshot.png)

## Who uses Argo Workflows?

[About 200+ organizations are officially using Argo Workflows](USERS.md)

## Ecosystem

Just some of the projects that use or rely on Argo Workflows (complete list [here](https://github.com/akuity/awesome-argo#ecosystem-projects)):

* [Argo Events](https://github.com/argoproj/argo-events)
* [Hera]