<!-- GitHub Trending: TypeScript | 7,782 stars | +8 today -->

# actions/checkout

> Action for checking out a repo

## Repository Info
- **URL**: https://github.com/actions/checkout
- **Stars**: 7,782
- **Forks**: 2,462
- **Language**: TypeScript
- **License**: MIT License
- **Created**: 2019-07-19
- **Updated**: 2026-04-18
- **Topics**: N/A
- **Open Issues**: 661

## README (excerpt)
[![Build and Test](https://github.com/actions/checkout/actions/workflows/test.yml/badge.svg)](https://github.com/actions/checkout/actions/workflows/test.yml)

# Checkout v6

## What's new

- Improved credential security: `persist-credentials` now stores credentials in a separate file under `$RUNNER_TEMP` instead of directly in `.git/config`
- No workflow changes required — `git fetch`, `git push`, etc. continue to work automatically
- Running authenticated git commands from a [Docker container action](https://docs.github.com/actions/sharing-automations/creating-actions/creating-a-docker-container-action) requires Actions Runner [v2.329.0](https://github.com/actions/runner/releases/tag/v2.329.0) or later

# Checkout v5

## What's new

- Updated to the node24 runtime
  - This requires a minimum Actions Runner version of [v2.327.1](https://github.com/actions/runner/releases/tag/v2.327.1) to run.


# Checkout v4

This action checks-out your repository under `$GITHUB_WORKSPACE`, so your workflow can access it.

Only a single commit is fetched by default, for the ref/SHA that triggered the workflow. Set `fetch-depth: 0` to fetch all history for all branches and tags. Refer [here](https://docs.github.com/actions/using-workflows/events-that-trigger-workflows) to learn which commit `$GITHUB_SHA` points to for different events.

The auth token is persisted in the local git config. This enables your scripts to run authenticated git commands. The token is removed during post-job cleanup. Set `persist-credentials: false` to opt-out.

When Git 2.18 or higher is not in your PATH, falls back to the REST API to download the files.

### Note

Thank you for your interest in this GitHub action, however, right now we are not taking contributions. 

We continue to focus our resources on strategic areas that help our customers be successful while making developers' lives easier. While GitHub Actions remains a key part of this vision, we are allocating resources towards other areas of Actions and are not taking contributions to this repository at this time. The GitHub public roadmap is the best place to follow along for any updates on features we’re working on and what stage they’re in.

We are taking the following steps to better direct requests related to GitHub Actions, including:

1. We will be directing questions and support requests to our [Community Discussions area](https://github.com/orgs/community/discussions/categories/actions)

2. High Priority bugs can be reported through Community Discussions or you can report these to our support team https://support.github.com/contact/bug-report.

3. Security Issues should be handled as per our [security.md](security.md)

We will still provide security updates for this project and fix major breaking changes during this time.

You are welcome to still raise bugs in this repo.

# What's new

Please refer to the [release page](https://github.com/actions/checkout/releases/latest) for the latest release notes.

# Usage

<!-- start usage -->
```yaml
- uses: actions/checkout@v6
  with:
    # Repository name with owner. For example, actions/checkout
    # Default: ${{ github.repository }}
    repository: ''

    # The branch, tag or SHA to checkout. When checking out the repository that
    # triggered a workflow, this defaults to the reference or SHA for that event.
    # Otherwise, uses the default branch.
    ref: ''

    # Personal access token (PAT) used to fetch the repository. The PAT is configured
    # with the local git config, which enables your scripts to run authenticated git
    # commands. The post-job step removes the PAT.
    #
    # We recommend using a service account with the least permissions necessary. Also
    # when generating a new PAT, select the least scopes necessary.
    #
    # [Learn more about creating and using encrypted secrets](https://help.github.com/en/actions/automating-your-workflow-with-github-actions/creating-and-using-encrypted-secrets)
    #
    # Default: ${{ github