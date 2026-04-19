<!-- GitHub Trending: Go | 4,352 stars | +3 today -->

# cerbos/cerbos

> Cerbos is the open core, language-agnostic, scalable authorization solution that makes user permissions and authorization simple to implement and manage by writing context-aware access control policies for your application resources.

## Repository Info
- **URL**: https://github.com/cerbos/cerbos
- **Stars**: 4,352
- **Forks**: 176
- **Language**: Go
- **License**: Apache License 2.0
- **Created**: 2021-03-21
- **Updated**: 2026-04-19
- **Topics**: access-control, authorization, go, golang, kubernetes, policy, security
- **Open Issues**: 55

## README (excerpt)
![GitHub release (latest SemVer)](https://img.shields.io/github/v/release/cerbos/cerbos?color=green&logo=github&sort=semver)  [![Snapshots](https://github.com/cerbos/cerbos/actions/workflows/snapshot.yaml/badge.svg)](https://github.com/cerbos/cerbos/actions/workflows/snapshot.yaml)  [![Go Report Card](https://goreportcard.com/badge/github.com/cerbos/cerbos)](https://goreportcard.com/report/github.com/cerbos/cerbos)  [![Contributor Covenant](https://img.shields.io/badge/Contributor%20Covenant-2.0-4baaaa.svg)](CODE_OF_CONDUCT.md)

<p align="center">
  <img src="https://github.com/cerbos/cerbos/blob/main/docs/supplemental-ui/logo.png?raw=true" alt="Cerbos"/>
</p>

## What is Cerbos?

Cerbos is an authorization layer that evolves with your product. It enables you to define powerful, context-aware access control rules for your application resources in simple, intuitive YAML policies; managed and deployed via your Git-ops infrastructure. It provides highly available APIs to make simple requests to evaluate policies and make dynamic access decisions for your application.

This repo has everything you need to set up a self-hosted Cerbos Policy Decision Point (PDP). [Sign up for a free Cerbos Hub account](https://cerbos.dev/product-cerbos-hub?utm_campaign=brand_cerbos&utm_source=github) to streamline your policy authoring and distribution workflow to self-hosted PDPs.

With Cerbos Hub you can:

- Collaborate with colleagues to author and share policies in fully-interactive private playgrounds
- Quickly and efficiently distribute policy updates to your whole PDP fleet
- Build special policy bundles for client-side or in-browser authorization
- Easily integrate with Cerbos in serverless and edge deployments

## Key concepts, at a glance 👀

**_PRINCIPAL:_** oftentimes just the "user", but can also represent: other applications, services, bots or anything you can think of. The "thing" that's trying to carry out an... ↙️

**_ACTION:_** a specific task. Whether to create, view, update, delete, acknowledge, approve... anything. The principal might have permission to do all actions or maybe just one or two. The actions are carried out on a... ↙️

**_RESOURCE:_** the thing you're controlling access to. It could be anything, e.g., in an expense management system; reports, receipts, card details, payment records, etc. You define resources in Cerbos by writing... ↙️

**_POLICIES:_** YAML files where you define the access rules for each resource, following a [simple, structured format](#resource-policy). Stored either: [on disk](https://docs.cerbos.dev/cerbos/latest/configuration/storage.html#disk-driver), in [cloud object stores](https://docs.cerbos.dev/cerbos/latest/configuration/storage.html#blob-driver), [git repos](https://docs.cerbos.dev/cerbos/latest/configuration/storage.html#git-driver), or dynamically in [supported databases](https://docs.cerbos.dev/cerbos/latest/configuration/storage.html#sqlite3). These are continually monitored by the... ↙️

**_CERBOS PDP:_** the Policy Decision Point: the stateless service where policies are executed and decisions are made. This runs as a separate process in kube (as a [service](https://docs.cerbos.dev/cerbos/latest/deployment/k8s-service.html) or a [sidecar](https://docs.cerbos.dev/cerbos/latest/deployment/k8s-sidecar.html)), directly as a [systemd service](https://docs.cerbos.dev/cerbos/latest/deployment/systemd.html) or as an [AWS Lambda function](https://docs.cerbos.dev/cerbos/latest/deployment/serverless-faas.html). Once deployed, the PDP provides two primary APIs...

* **_CheckResources:_** "Can this principal access this resource?"
* **_PlanResources:_** "Which of resource kind=X can this principal access?"

These APIs can be called via [cURL](#api-request), or in production via one of our many... ↙️

**_SDKs:_** you can see the list [here](#client-sdks). There are also a growing number of [query plan adapters](#query-plan-adapters) to convert the SDK `PlanResources` responses to a convenient 