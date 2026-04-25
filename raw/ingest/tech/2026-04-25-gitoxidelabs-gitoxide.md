<!-- GitHub Trending: Rust | 11,218 stars | +4 today -->

# GitoxideLabs/gitoxide

> An idiomatic, lean, fast & safe pure Rust implementation of Git

## Repository Info
- **URL**: https://github.com/GitoxideLabs/gitoxide
- **Stars**: 11,218
- **Forks**: 456
- **Language**: Rust
- **License**: Apache License 2.0
- **Created**: 2018-06-07
- **Updated**: 2026-04-25
- **Topics**: blazingly-fast, built-with-rust, cli, git, version-control
- **Open Issues**: 179

## README (excerpt)
[![CI](https://github.com/GitoxideLabs/gitoxide/workflows/ci/badge.svg)](https://github.com/GitoxideLabs/gitoxide/actions)
[![Crates.io](https://img.shields.io/crates/v/gitoxide.svg)](https://crates.io/crates/gitoxide)
<img src="etc/msrv-badge.svg">

`gitoxide` is an implementation of `git` written in Rust for developing future-proof applications which strive for correctness and
performance while providing a pleasant and unsurprising developer experience.

There are two primary ways to use `gitoxide`:

1. **As Rust library**: Use the [`gix`](https://docs.rs/gix) crate as a Cargo dependency for API access.
1. **As command-line tool**: The `gix` binary as development tool to help testing the API in real repositories,
    and the `ein` binary with workflow-enhancing tools. Both binaries may forever be unstable,
    *do not rely on them in scripts*.

[![asciicast](etc/gix-asciicast.svg)](https://asciinema.org/a/542159)

[`gix`]: https://docs.rs/gix

## Development Status

The command-line tools as well as the status of each crate is described in
[the crate status document](https://github.com/GitoxideLabs/gitoxide/blob/main/crate-status.md).

For use in applications, look for the [`gix`](https://github.com/GitoxideLabs/gitoxide/blob/main/crate-status.md#gix) crate,
which serves as entrypoint to the functionality provided by various lower-level plumbing crates like
[`gix-config`](https://github.com/GitoxideLabs/gitoxide/blob/main/crate-status.md#gix-config).

### Feature Discovery

> Can `gix` do what I need it to do?

The above can be hard to answer and this paragraph is here to help with feature discovery.

Look at [`crate-status.md`](https://github.com/GitoxideLabs/gitoxide/blob/main/crate-status.md) for a rather exhaustive document that contains
both implemented and planned features.

Further, the [`gix` crate documentation with the `git2` search term](https://docs.rs/gix/latest/gix?search=git2) helps to find all currently
known `git2` equivalent method calls. Please note that this list is definitely not exhaustive yet, but might help if you are coming from `git2`.

What follows is a high-level list of features and those which are planned:

* [x] clone
* [x] fetch
* [ ] push
* [x] blame (*plumbing*)
* [x] status
* [x] blob and tree-diff
* [ ] merge
    - [x] blobs
    - [x] trees
    - [ ] commits
* [x] commit
    - [ ] hooks
* [x] commit-graph traversal
* [ ] rebase
* [x] worktree checkout and worktree stream
* [ ] reset
* [x] reading and writing of objects
* [x] reading and writing of refs
* [x] reading and writing of `.git/index`
* [x] reading and writing of git configuration
* [x] pathspecs
* [x] revspecs
* [x] `.gitignore` and `.gitattributes`

### Crates

Follow linked crate name for detailed status. Please note that all crates follow [semver] as well as the [stability guide].

[semver]: https://semver.org

### Production Grade

* **Stability Tier 1**
  - [gix-lock](https://github.com/GitoxideLabs/gitoxide/blob/main/gix-lock/README.md)

* **Stability Tier 2**
  - [gix-tempfile](https://github.com/GitoxideLabs/gitoxide/blob/main/gix-tempfile/README.md)

### Stabilization Candidates

Crates that seem feature complete and need to see some more use before they can be released as 1.0.
Documentation is complete and was reviewed at least once.

* [gix-mailmap](https://github.com/GitoxideLabs/gitoxide/blob/main/crate-status.md#gix-mailmap)
* [gix-chunk](https://github.com/GitoxideLabs/gitoxide/blob/main/crate-status.md#gix-chunk)
* [gix-ref](https://github.com/GitoxideLabs/gitoxide/blob/main/crate-status.md#gix-ref)
* [gix-config](https://github.com/GitoxideLabs/gitoxide/blob/main/crate-status.md#gix-config)
* [gix-config-value](https://github.com/GitoxideLabs/gitoxide/blob/main/crate-status.md#gix-config-value)
* [gix-glob](https://github.com/GitoxideLabs/gitoxide/blob/main/crate-status.md#gix-glob)
* [gix-actor](https://github.com/GitoxideLabs/gitoxide/blob/main/crate-status.md#gix-actor)
* [gix-hash](https://github.com/Gitoxide