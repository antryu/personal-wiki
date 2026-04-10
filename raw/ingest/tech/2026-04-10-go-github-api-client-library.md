<!-- GitHub Trending: Go | 11,184 stars | +1 today -->

# google/go-github

> Go library for accessing the GitHub v3 API

## Repository Info
- **URL**: https://github.com/google/go-github
- **Stars**: 11,184
- **Forks**: 2,220
- **Language**: Go
- **License**: BSD 3-Clause "New" or "Revised" License
- **Created**: 2013-05-24
- **Updated**: 2026-04-10
- **Topics**: github, github-api, go, golang, hacktoberfest
- **Open Issues**: 49

## README (excerpt)
# go-github #

[![go-github release (latest SemVer)](https://img.shields.io/github/v/release/google/go-github?sort=semver)](https://github.com/google/go-github/releases)
[![Go Reference](https://img.shields.io/static/v1?label=godoc&message=reference&color=blue)](https://pkg.go.dev/github.com/google/go-github/v84/github)
[![Test Status](https://github.com/google/go-github/actions/workflows/tests.yml/badge.svg?branch=master)](https://github.com/google/go-github/actions/workflows/tests.yml)
[![Test Coverage](https://codecov.io/gh/google/go-github/branch/master/graph/badge.svg)](https://codecov.io/gh/google/go-github)
[![Discuss at go-github@googlegroups.com](https://img.shields.io/badge/discuss-go--github%40googlegroups.com-blue.svg)](https://groups.google.com/group/go-github)
[![CII Best Practices](https://bestpractices.coreinfrastructure.org/projects/796/badge)](https://bestpractices.coreinfrastructure.org/projects/796)

go-github is a Go client library for accessing the [GitHub API v3][].

go-github tracks [Go's version support policy][support-policy] supporting any
minor version of the latest two major releases of Go and the go directive in
go.mod reflects that.
We do our best not to break older versions of Go if we don't have to, but we
don't explicitly test older versions and as of Go 1.23 the go directive in
go.mod declares a hard required _minimum_ version of Go to use with this module
and this _must_ be greater than or equal to the go line of all dependencies so
go-github will require the N-1 major release of Go by default.

[support-policy]: https://golang.org/doc/devel/release.html#policy

## Development

If you're interested in using the [GraphQL API v4][], the recommended library is
[shurcooL/githubv4][].

## Installation ##

go-github is compatible with modern Go releases in module mode, with Go installed:

```bash
go get github.com/google/go-github/v84
```

will resolve and add the package to the current development module, along with its dependencies.

Alternatively the same can be achieved if you use import in a package:

```go
import "github.com/google/go-github/v84/github"
```

and run `go get` without parameters.

Finally, to use the top-of-trunk version of this repo, use the following command:

```bash
go get github.com/google/go-github/v84@master
```

To discover all the changes that have occurred since a prior release, you can
first clone the repo, then run (for example):

```bash
go run tools/gen-release-notes/main.go --tag v84.0.0
```

## Usage ##

```go
import "github.com/google/go-github/v84/github"
```

Construct a new GitHub client, then use the various services on the client to
access different parts of the GitHub API. For example:

```go
client := github.NewClient(nil)

// list all organizations for user "willnorris"
orgs, _, err := client.Organizations.List(context.Background(), "willnorris", nil)
```

Some API methods have optional parameters that can be passed. For example:

```go
client := github.NewClient(nil)

// list public repositories for org "github"
opt := &github.RepositoryListByOrgOptions{Type: "public"}
repos, _, err := client.Repositories.ListByOrg(context.Background(), "github", opt)
```

The services of a client divide the API into logical chunks and correspond to
the structure of the [GitHub API documentation](https://docs.github.com/en/rest).

NOTE: Using the [context](https://pkg.go.dev/context) package, one can easily
pass cancellation signals and deadlines to various services of the client for
handling a request. In case there is no context available, then `context.Background()`
can be used as a starting point.

For more sample code snippets, head over to the
[example](https://github.com/google/go-github/tree/master/example) directory.

### Authentication ###

Use the `WithAuthToken` method to configure your client to authenticate using an
OAuth token (for example, a [personal access token][]). This is what is needed
for a majority of use cases aside from GitHub Apps.

```go
cl