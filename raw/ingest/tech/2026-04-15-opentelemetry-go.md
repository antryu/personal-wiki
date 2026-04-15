<!-- GitHub Trending: Go | 6,349 stars | +4 today -->

# open-telemetry/opentelemetry-go

> OpenTelemetry Go API and SDK

## Repository Info
- **URL**: https://github.com/open-telemetry/opentelemetry-go
- **Stars**: 6,349
- **Forks**: 1,315
- **Language**: Go
- **License**: Apache License 2.0
- **Created**: 2019-05-16
- **Updated**: 2026-04-15
- **Topics**: logging, metrics, opentelemetry, tracing
- **Open Issues**: 202

## README (excerpt)
# OpenTelemetry-Go

[![ci](https://github.com/open-telemetry/opentelemetry-go/actions/workflows/ci.yml/badge.svg?branch=main)](https://github.com/open-telemetry/opentelemetry-go/actions/workflows/ci.yml)
[![codecov.io](https://codecov.io/gh/open-telemetry/opentelemetry-go/coverage.svg?branch=main)](https://app.codecov.io/gh/open-telemetry/opentelemetry-go?branch=main)
[![PkgGoDev](https://pkg.go.dev/badge/go.opentelemetry.io/otel)](https://pkg.go.dev/go.opentelemetry.io/otel)
[![Go Report Card](https://goreportcard.com/badge/go.opentelemetry.io/otel)](https://goreportcard.com/report/go.opentelemetry.io/otel)
[![OpenSSF Scorecard](https://api.scorecard.dev/projects/github.com/open-telemetry/opentelemetry-go/badge)](https://scorecard.dev/viewer/?uri=github.com/open-telemetry/opentelemetry-go)
[![OpenSSF Best Practices](https://www.bestpractices.dev/projects/9996/badge)](https://www.bestpractices.dev/projects/9996)
[![Fuzzing Status](https://oss-fuzz-build-logs.storage.googleapis.com/badges/opentelemetry-go.svg)](https://issues.oss-fuzz.com/issues?q=project:opentelemetry-go)
[![FOSSA Status](https://app.fossa.com/api/projects/custom%2B162%2Fgithub.com%2Fopen-telemetry%2Fopentelemetry-go.svg?type=shield&issueType=license)](https://app.fossa.com/projects/custom%2B162%2Fgithub.com%2Fopen-telemetry%2Fopentelemetry-go?ref=badge_shield&issueType=license)
[![Slack](https://img.shields.io/badge/slack-@cncf/otel--go-brightgreen.svg?logo=slack)](https://cloud-native.slack.com/archives/C01NPAXACKT)

OpenTelemetry-Go is the [Go](https://golang.org/) implementation of [OpenTelemetry](https://opentelemetry.io/).
It provides a set of APIs to directly measure performance and behavior of your software and send this data to observability platforms.

## Project Status

| Signal  | Status             |
|---------|--------------------|
| Traces  | Stable             |
| Metrics | Stable             |
| Logs    | Beta[^1]           |

Progress and status specific to this repository is tracked in our
[project boards](https://github.com/open-telemetry/opentelemetry-go/projects)
and
[milestones](https://github.com/open-telemetry/opentelemetry-go/milestones).

Project versioning information and stability guarantees can be found in the
[versioning documentation](VERSIONING.md).

[^1]: https://github.com/orgs/open-telemetry/projects/43

### Compatibility

OpenTelemetry-Go ensures compatibility with the current supported versions of
the [Go language](https://golang.org/doc/devel/release#policy):

> Each major Go release is supported until there are two newer major releases.
> For example, Go 1.5 was supported until the Go 1.7 release, and Go 1.6 was supported until the Go 1.8 release.

For versions of Go that are no longer supported upstream, opentelemetry-go will
stop ensuring compatibility with these versions in the following manner:

- A minor release of opentelemetry-go will be made to add support for the new
  supported release of Go.
- The following minor release of opentelemetry-go will remove compatibility
  testing for the oldest (now archived upstream) version of Go. This, and
  future, releases of opentelemetry-go may include features only supported by
  the currently supported versions of Go.

Currently, this project supports the following environments.

| OS       | Go Version | Architecture |
|----------|------------|--------------|
| Ubuntu   | 1.26       | amd64        |
| Ubuntu   | 1.25       | amd64        |
| Ubuntu   | 1.26       | 386          |
| Ubuntu   | 1.25       | 386          |
| Ubuntu   | 1.26       | arm64        |
| Ubuntu   | 1.25       | arm64        |
| macOS    | 1.26       | amd64        |
| macOS    | 1.25       | amd64        |
| macOS    | 1.26       | arm64        |
| macOS    | 1.25       | arm64        |
| Windows  | 1.26       | amd64        |
| Windows  | 1.25       | amd64        |
| Windows  | 1.26       | 386          |
| Windows  | 1.25       | 386          |

While this project should work for other systems