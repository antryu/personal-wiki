# Go GitHub API Client Library

> A widely-used Go library for interacting with GitHub's v3 API, maintained by Google. Notable for its robust support, active development, and integration with modern Go practices.  
> Last updated: 2026-04-10

## Overview

### Repository Information
- **Repository**: [google/go-github](https://github.com/google/go-github)
- **Stars**: 11,184
- **Forks**: 2,220
- **Language**: Go
- **License**: [BSD 3-Clause](https://opensource.org/licenses/BSD-3-Clause)
- **Created**: 2013-05-24
- **Last Updated**: 2026-04-10
- **Topics**: `github`, `github-api`, `go`, `golang`, `hacktoberfest`
- **Open Issues**: 49

### README Highlights
- **Go Version Support**: Follows Go's [version support policy](https://golang.org/doc/devel/release.html#policy), requiring the latest two major Go releases. As of Go 1.23, a minimum version is enforced via `go.mod`.
- **GraphQL API**: For GitHub's v4 GraphQL API, the recommended library is [shurcooL/githubv4](https://github.com/shurcooL/githubv4).
- **Testing & Coverage**: Automated tests and [test coverage reports](https://codecov.io/gh/google/go-github) ensure reliability.
- **Community**: Discussion occurs via [go-github@googlegroups.com](https://groups.google.com/group/go-github).

### Installation
Install using Go modules:
```bash
go get github.com/google/go-github/v84
```
Or import directly in Go code:
```go
import "github.com/google/go-github/v84/github"
```
For the latest trunk version:
```bash
go get github.com/google/go-github/v84@master
```

### Usage
Basic example to list user organizations:
```go
import "github.com/google/go-github/v84/github"

client := github.NewClient(nil)
orgs, _, err := client.Organizations.List(context.Background(), "willnorris", nil)
```
Example with optional parameters for repository listing:
```go
opt := &github.RepositoryListByOrgOptions{Type: "public"}
repos, _, err := client.Repositories.ListByOrg(context.Background(), "github", opt)
```

### Authentication
Authenticate using an OAuth token (e.g., a [personal access token](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token)):
```go
client, _ := github.NewClient(nil).WithAuthToken("your-token")
```

## Key Points
- High adoption with **11k+ stars** and active maintenance.
- Aligns with Go's version support policy, ensuring compatibility with modern Go releases.
- Modular design mirrors [GitHub API documentation](https://docs.github.com/en/rest) structure.
- Includes tools for generating release notes (e.g., `tools/gen-release-notes/main.go`).

## Sources
- [GitHub](https://github.com/google/go-github)
- [원본](raw/ingest/tech/2026-04-10-go-github-api-client-library.md)