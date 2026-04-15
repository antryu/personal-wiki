<!-- GitHub Trending: Rust | 27,995 stars | +75 today -->

# jj-vcs/jj

> A Git-compatible VCS that is both simple and powerful

## Repository Info
- **URL**: https://github.com/jj-vcs/jj
- **Stars**: 27,999
- **Forks**: 1,005
- **Language**: Rust
- **License**: Apache License 2.0
- **Created**: 2020-12-18
- **Updated**: 2026-04-15
- **Topics**: N/A
- **Open Issues**: 1047

## README (excerpt)
<div class="title-block" style="text-align: center;" align="center">

# Jujutsu—a version control system

<p><img title="jj logo" src="docs/images/jj-logo.svg" width="320" height="320"></p>

[![Release](https://img.shields.io/github/v/release/martinvonz/jj)](https://github.com/jj-vcs/jj/releases)
[![Release date](https://img.shields.io/github/release-date/martinvonz/jj)](https://github.com/jj-vcs/jj/releases)
<br/>
[![License](https://img.shields.io/github/license/martinvonz/jj)](https://github.com/jj-vcs/jj/blob/main/LICENSE)
[![Discord](https://img.shields.io/discord/968932220549103686.svg?label=&logo=discord&logoColor=ffffff&color=7389D8&labelColor=6A7EC2)](https://discord.gg/dkmfj3aGQN)
[![IRC](https://img.shields.io/badge/irc-%23jujutsu-blue.svg)](https://web.libera.chat/?channel=#jujutsu)

**[Homepage] &nbsp;&nbsp;&bull;&nbsp;&nbsp;**
**[Installation] &nbsp;&nbsp;&bull;&nbsp;&nbsp;**
**[Getting Started] &nbsp;&nbsp;&bull;&nbsp;&nbsp;**
**[Development Roadmap] &nbsp;&nbsp;&bull;&nbsp;&nbsp;**
**[Contributing](#contributing)**

[Homepage]: https://www.jj-vcs.dev
[Installation]: https://docs.jj-vcs.dev/latest/install-and-setup
[Getting Started]: https://docs.jj-vcs.dev/latest/tutorial
[Development Roadmap]: https://docs.jj-vcs.dev/latest/roadmap

</div>

## Introduction

Jujutsu is a powerful [version control system](https://en.wikipedia.org/wiki/Version_control)
for software projects. You use it to get a copy of your code, track changes
to the code, and finally publish those changes for others to see and use.
It is designed from the ground up to be easy to use—whether you're new or
experienced, working on brand new projects alone, or large scale software
projects with large histories and teams.

Jujutsu is unlike most other systems, because internally it abstracts the user
interface and version control algorithms from the *storage systems* used to
serve your content. This allows it to serve as a VCS with many possible physical
backends, that may have their own data or networking models—like [Mercurial] or
[Breezy], or hybrid systems like Google's cloud-based design, [Piper/CitC].

[Mercurial]: https://www.mercurial-scm.org/
[Breezy]: https://www.breezy-vcs.org/
[Piper/CitC]: https://youtu.be/W71BTkUbdqE?t=645

Today, we use Git repositories as a storage layer to serve and track content,
making it **compatible with many of your favorite Git-based tools, right now!**
However, note that only commits and files are stored in Git; bookmarks
(branches) and other higher-level metadata are stored in custom storage outside
of Git. All core developers use Jujutsu to develop Jujutsu, right here on
GitHub. But it should hopefully work with your favorite Git forges, too.

We combine many distinct design choices and concepts from other version control
systems into a single tool. Some of those sources of inspiration include:

- **Git**: We make an effort to [be fast][perf]—with a snappy UX, efficient
  algorithms, correct data structures, and good-old-fashioned attention to
  detail. The default storage backend uses Git repositories for "physical
  storage", for wide interoperability and ease of onboarding.

- **Mercurial & Sapling**: There are many Mercurial-inspired features, such as
  the [revset] language to select commits. There is [no explicit index][no-index]
  or staging area. Branches are "anonymous" like Mercurial, so you don't need
  to make up a name for each small change. Primitives for rewriting history are
  powerful and simple. Formatting output is done with a robust template language
  that can be configured by the user.

- **Darcs**: Jujutsu keeps track of conflicts as [first-class
  objects][conflicts] in its model; they are first-class in the same way commits
  are, while alternatives like Git simply think of conflicts as textual diffs.
  While not as rigorous as systems like Darcs (which is based on a formalized
  theory of patches, as opposed to snapshots), the effect is that many forms of
  conflict resolution can b