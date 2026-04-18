<!-- GitHub Trending: Go | 7,363 stars | +3 today -->

# go-git/go-git

> A highly extensible Git implementation in pure Go.

## Repository Info
- **URL**: https://github.com/go-git/go-git
- **Stars**: 7,363
- **Forks**: 918
- **Language**: Go
- **License**: Apache License 2.0
- **Created**: 2019-12-19
- **Updated**: 2026-04-18
- **Topics**: git, git-client, git-library, git-server, go-git, golang
- **Open Issues**: 189

## README (excerpt)
![go-git logo](https://cdn.rawgit.com/src-d/artwork/02036484/go-git/files/go-git-github-readme-header.png)
[![GoDoc](https://godoc.org/github.com/go-git/go-git/v6?status.svg)](https://pkg.go.dev/github.com/go-git/go-git/v6) [![Build Status](https://github.com/go-git/go-git/workflows/Test/badge.svg)](https://github.com/go-git/go-git/actions) [![Go Report Card](https://goreportcard.com/badge/github.com/go-git/go-git)](https://goreportcard.com/report/github.com/go-git/go-git) [![OpenSSF Scorecard](https://api.scorecard.dev/projects/github.com/go-git/go-git/badge)](https://scorecard.dev/viewer/?uri=github.com/go-git/go-git)

*go-git* is a highly extensible git implementation library written in **pure Go**.

It can be used to manipulate git repositories at low level *(plumbing)* or high level *(porcelain)*, through an idiomatic Go API. It also supports several types of storage, such as in-memory filesystems, or custom implementations, thanks to the [`Storer`](https://pkg.go.dev/github.com/go-git/go-git/v6/plumbing/storer) interface.

It's being actively developed since 2015 and is being used extensively by [Keybase](https://keybase.io/blog/encrypted-git-for-everyone), [Gitea](https://gitea.io/en-us/) or [Pulumi](https://github.com/search?q=org%3Apulumi+go-git&type=Code), and by many other libraries and tools.

Project Status
--------------

After the [legal issues](https://github.com/src-d/go-git/issues/1295#issuecomment-592965250) with the [`src-d`](https://github.com/src-d) organization, the lack of update for four months and the requirement to make a hard fork, the project is **now back to normality**.

The project is currently actively maintained by individual contributors, including several of the original authors, but also backed by a new company, [gitsight](https://github.com/gitsight), where `go-git` is a critical component used at scale.


Comparison with git
-------------------

*go-git* aims to be fully compatible with [git](https://github.com/git/git), all the *porcelain* operations are implemented to work exactly as *git* does.

*git* is a humongous project with years of development by thousands of contributors, making it challenging for *go-git* to implement all the features. You can find a comparison of *go-git* vs *git* in the [compatibility documentation](COMPATIBILITY.md).


Installation
------------

The recommended way to install *go-git* is:

```go
import "github.com/go-git/go-git/v6" // with go modules enabled (GO111MODULE=on or outside GOPATH)
import "github.com/go-git/go-git" // with go modules disabled
```


Examples
--------

> Please note that the `CheckIfError` and `Info` functions  used in the examples are from the [examples package](https://github.com/go-git/go-git/blob/master/_examples/common.go#L19) just to be used in the examples.


### Basic example

A basic example that mimics the standard `git clone` command

```go
// Clone the given repository to the given directory
Info("git clone https://github.com/go-git/go-git")

_, err := git.PlainClone("/tmp/foo", &git.CloneOptions{
    URL:      "https://github.com/go-git/go-git",
    Progress: os.Stdout,
})

CheckIfError(err)
```

Outputs:
```
Counting objects: 4924, done.
Compressing objects: 100% (1333/1333), done.
Total 4924 (delta 530), reused 6 (delta 6), pack-reused 3533
```

### In-memory example

Cloning a repository into memory and printing the history of HEAD, just like `git log` does


```go
// Clones the given repository in memory, creating the remote, the local
// branches and fetching the objects, exactly as:
Info("git clone https://github.com/go-git/go-billy")

r, err := git.Clone(memory.NewStorage(), nil, &git.CloneOptions{
    URL: "https://github.com/go-git/go-billy",
})

CheckIfError(err)

// Gets the HEAD history from HEAD, just like this command:
Info("git log")

// ... retrieves the branch pointed by HEAD
ref, err := r.Head()
CheckIfError(err)


// ... retrieves the commit history
cIter, err := r.Log(&git.LogOptions{From: ref.Hash()