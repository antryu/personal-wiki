<!-- GitHub Trending: Go | 51,638 stars | +9 today -->

# etcd-io/etcd

> Distributed reliable key-value store for the most critical data of a distributed system

## Repository Info
- **URL**: https://github.com/etcd-io/etcd
- **Stars**: 51,638
- **Forks**: 10,325
- **Language**: Go
- **License**: Apache License 2.0
- **Created**: 2013-07-06
- **Updated**: 2026-04-25
- **Topics**: cncf, consensus, database, distributed-database, distributed-systems, etcd, go, key-value, kubernetes, raft
- **Open Issues**: 236

## README (excerpt)
# etcd

[![Go Report Card](https://goreportcard.com/badge/github.com/etcd-io/etcd?style=flat-square)](https://goreportcard.com/report/github.com/etcd-io/etcd)
[![Coverage](https://codecov.io/gh/etcd-io/etcd/branch/main/graph/badge.svg)](https://app.codecov.io/gh/etcd-io/etcd/tree/main)
[![Tests](https://github.com/etcd-io/etcd/actions/workflows/tests.yaml/badge.svg)](https://github.com/etcd-io/etcd/actions/workflows/tests.yaml)
[![codeql-analysis](https://github.com/etcd-io/etcd/actions/workflows/codeql-analysis.yml/badge.svg)](https://github.com/etcd-io/etcd/actions/workflows/codeql-analysis.yml)
[![Docs](https://img.shields.io/badge/docs-latest-green.svg)](https://etcd.io/docs)
[![Godoc](http://img.shields.io/badge/go-documentation-blue.svg?style=flat-square)](https://godocs.io/go.etcd.io/etcd/v3)
[![Releases](https://img.shields.io/github/release/etcd-io/etcd/all.svg?style=flat-square)](https://github.com/etcd-io/etcd/releases)
[![LICENSE](https://img.shields.io/github/license/etcd-io/etcd.svg?style=flat-square)](https://github.com/etcd-io/etcd/blob/main/LICENSE)
[![OpenSSF Scorecard](https://api.securityscorecards.dev/projects/github.com/etcd-io/etcd/badge)](https://scorecard.dev/viewer/?uri=github.com/etcd-io/etcd)

**Note**: The `main` branch may be in an *unstable or even broken state* during development. For stable versions, see [releases][github-release].

<picture>
  <source media="(prefers-color-scheme: dark)" srcset="https://raw.githubusercontent.com/cncf/artwork/9870640f123303a355611065195c43ac3f27aa19/projects/etcd/horizontal/white/etcd-horizontal-white.png">
  <source media="(prefers-color-scheme: light)" srcset="logos/etcd-horizontal-color.svg">
  <img alt="etcd logo" src="logos/etcd-horizontal-color.svg" width=269 />
</picture>

etcd is a distributed reliable key-value store for the most critical data of a distributed system, with a focus on being:

* *Simple*: well-defined, user-facing API (gRPC)
* *Secure*: automatic TLS with optional client cert authentication
* *Fast*: benchmarked 10,000 writes/sec
* *Reliable*: properly distributed using Raft

etcd is written in Go and uses the [Raft][] consensus algorithm to manage a highly-available replicated log.

etcd is used [in production by many companies](./ADOPTERS.md), and the development team stands behind it in critical deployment scenarios, where etcd is frequently teamed with applications such as [Kubernetes][k8s], [locksmith][], [vulcand][], [Doorman][], and many others. Reliability is further ensured by rigorous [**robustness testing**](https://github.com/etcd-io/etcd/tree/main/tests/robustness).

See [etcdctl][etcdctl] for a simple command line client.

![etcd reliability is important](logos/etcd-xkcd-2347.png)

<sub>Original image credited to  xkcd.com/2347, alterations by Josh Berkus.</sub>

[raft]: https://raft.github.io/
[k8s]: http://kubernetes.io/
[doorman]: https://github.com/youtube/doorman
[locksmith]: https://github.com/coreos/locksmith
[vulcand]: https://github.com/vulcand/vulcand
[etcdctl]: https://github.com/etcd-io/etcd/tree/main/etcdctl

## Documentation

The most common API documentation you'll need can be found here:

* [go.etcd.io/etcd/api/v3](https://godocs.io/go.etcd.io/etcd/api/v3)
* [go.etcd.io/etcd/client/pkg/v3](https://godocs.io/go.etcd.io/etcd/client/pkg/v3)
* [go.etcd.io/etcd/client/v3](https://godocs.io/go.etcd.io/etcd/client/v3)
* [go.etcd.io/etcd/etcdctl/v3](https://godocs.io/go.etcd.io/etcd/etcdctl/v3)
* [go.etcd.io/etcd/pkg/v3](https://godocs.io/go.etcd.io/etcd/pkg/v3)
* [go.etcd.io/etcd/raft/v3](https://godocs.io/go.etcd.io/etcd/raft/v3)
* [go.etcd.io/etcd/server/v3](https://godocs.io/go.etcd.io/etcd/server/v3)

## Maintainers

[Maintainers](OWNERS) strive to shape an inclusive open source project culture where users are heard and contributors feel respected and empowered. Maintainers aim to build productive relationships across different companies and disciplines. Read more about [Maintainers role and responsibilities](D