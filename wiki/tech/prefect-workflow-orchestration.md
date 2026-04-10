# Prefect Workflow Orchestration

> Prefect is a workflow orchestration framework for building resilient data pipelines in Python. It allows data teams to automate data processes with scheduling, caching, retries, and event-based automations. It is notable for its simplicity in converting scripts into production workflows and its robust feature set for managing complex data pipelines.
> Last updated: 2026-04-10

## Overview
Prefect is a workflow orchestration framework for building data pipelines in Python. It's the simplest way to elevate a script into a production workflow. With Prefect, you can build resilient, dynamic data pipelines that react to the world around them and recover from unexpected changes. Prefect allows data teams to confidently automate any data process with features such as scheduling, caching, retries, and event-based automations.

Workflow activity is tracked and can be monitored with a self-hosted [Prefect server](https://docs.prefect.io/latest/manage/self-host/?utm_source=oss&utm_medium=oss&utm_campaign=oss_gh_repo&utm_term=none&utm_content=none) instance or managed [Prefect Cloud](https://www.prefect.io/cloud-vs-oss?utm_source=oss&utm_medium=oss&utm_campaign=oss_gh_repo&utm_term=none&utm_content=none) dashboard.

### Repository Info
- **URL**: https://github.com/PrefectHQ/prefect
- **Stars**: 22,127
- **Forks**: 2,260
- **Language**: Python
- **License**: Apache License 2.0
- **Created**: 2018-06-29
- **Updated**: 2026-04-10
- **Topics**: automation, data, data-engineering, data-ops, data-science, infrastructure, ml-ops, observability, orchestration, pipeline, prefect, python, workflow, workflow-engine
- **Open Issues**: 905

### Getting started
Prefect requires Python 3.10+. To install the latest version of Prefect, run one of the following commands:

```bash
pip install -U prefect
```

```bash
uv add prefect
```

Then create and run a Python file that uses Prefect `flow` and `task` decorators to orchestrate and observe your workflow - in this case, a simple script that fetches the number of GitHub stars from a repository.

## Key Points
- Prefect simplifies the transformation of scripts into production-ready data pipelines.
- It supports dynamic, resilient workflows with features like retries, caching, and event-based automations.
- Prefect provides tools for monitoring workflows via a self-hosted server or managed cloud dashboard.

## Sources
- [GitHub](https://github.com/PrefectHQ/prefect)
- [원본](raw/ingest/tech/2026-04-10-prefect-workflow-orchestration.md)