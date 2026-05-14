<!-- GitHub Trending: Go | 26,282 stars | +100 today -->

# trufflesecurity/trufflehog

> Find, verify, and analyze leaked credentials

## Repository Info
- **URL**: https://github.com/trufflesecurity/trufflehog
- **Stars**: 26,282
- **Forks**: 2,398
- **Language**: Go
- **License**: GNU Affero General Public License v3.0
- **Created**: 2016-12-31
- **Updated**: 2026-05-14
- **Topics**: credentials, devsecops, dynamic-analysis, precommit, scanning, secret, secret-management, secrets, security, security-tools, trufflehog, verification
- **Open Issues**: 442

## README (excerpt)
<p align="center">
  <img alt="GoReleaser Logo" src="https://storage.googleapis.com/trufflehog-static-sources/pixel_pig.png" height="140" />
  <h2 align="center">TruffleHog</h2>
  <p align="center">Find leaked credentials.</p>
</p>

---

<div align="center">

[![Go Report Card](https://goreportcard.com/badge/github.com/trufflesecurity/trufflehog/v3)](https://goreportcard.com/report/github.com/trufflesecurity/trufflehog/v3)
[![License](https://img.shields.io/badge/license-AGPL--3.0-brightgreen)](/LICENSE)
[![Total Detectors](https://img.shields.io/github/directory-file-count/trufflesecurity/truffleHog/pkg/detectors?label=Total%20Detectors&type=dir)](/pkg/detectors)

</div>

---

# :mag_right: _Now Scanning_

<div align="center">

<img src="assets/scanning_logos.svg">

**...and more**

To learn more about TruffleHog and its features and capabilities, visit our [product page](https://trufflesecurity.com/trufflehog?gclid=CjwKCAjwouexBhAuEiwAtW_Zx5IW87JNj97Ci7heFnA5ar6-DuNzT2Y5nIl9DuZ-FOUqx0Qg3vb9nxoClcEQAvD_BwE).

</div>

# :globe_with_meridians: TruffleHog Enterprise

Are you interested in continuously monitoring **Git, Jira, Slack, Confluence, Microsoft Teams, Sharepoint (and more)** for credentials? We have an enterprise product that can help! Learn more at <https://trufflesecurity.com/trufflehog-enterprise>.

We take the revenue from the enterprise product to fund more awesome open source projects that the whole community can benefit from.

</div>

# What is TruffleHog 🐽

TruffleHog is the most powerful secrets **Discovery, Classification, Validation,** and **Analysis** tool. In this context, secret refers to a credential a machine uses to authenticate itself to another machine. This includes API keys, database passwords, private encryption keys, and more.

## Discovery 🔍

TruffleHog can look for secrets in many places including Git, chats, wikis, logs, API testing platforms, object stores, filesystems and more.

## Classification 📁

TruffleHog classifies over 800 secret types, mapping them back to the specific identity they belong to. Is it an AWS secret? Stripe secret? Cloudflare secret? Postgres password? SSL Private key? Sometimes it's hard to tell looking at it, so TruffleHog classifies everything it finds.

## Validation ✅

For every secret TruffleHog can classify, it can also log in to confirm if that secret is live or not. This step is critical to know if there’s an active present danger or not.

## Analysis 🔬

For the 20 some of the most commonly leaked out credential types, instead of sending one request to check if the secret can log in, TruffleHog can send many requests to learn everything there is to know about the secret. Who created it? What resources can it access? What permissions does it have on those resources?

# :loudspeaker: Join Our Community

Have questions? Feedback? Jump into Slack or Discord and hang out with us.

Join our [Slack Community](https://join.slack.com/t/trufflehog-community/shared_invite/zt-pw2qbi43-Aa86hkiimstfdKH9UCpPzQ)

Join the [Secret Scanning Discord](https://discord.gg/8Hzbrnkr7E)

# :tv: Demo

![GitHub scanning demo](https://storage.googleapis.com/truffle-demos/non-interactive.svg)

```bash
docker run --rm -it -v "$PWD:/pwd" trufflesecurity/trufflehog:latest github --org=trufflesecurity
```

# :floppy_disk: Installation

Several options are available for you:

### MacOS users

```bash
brew install trufflehog
```

### Docker:

<sub><i>_Ensure Docker engine is running before executing the following commands:_</i></sub>

#### &nbsp;&nbsp;&nbsp;&nbsp;Unix

```bash
docker run --rm -it -v "$PWD:/pwd" trufflesecurity/trufflehog:latest github --repo https://github.com/trufflesecurity/test_keys
```

#### &nbsp;&nbsp;&nbsp;&nbsp;Windows Command Prompt

```bash
docker run --rm -it -v "%cd:/=\%:/pwd" trufflesecurity/trufflehog:latest github --repo https://github.com/trufflesecurity/test_keys
```

#### &nbsp;&nbsp;&nbsp;&nbsp;Windows PowerShell

```bash
docker run --rm -it -v "${PWD}:/pwd