<!-- GitHub Trending: Python | 6,940 stars | +15 today -->

# feast-dev/feast

> The Open Source Feature Store for AI/ML

## Repository Info
- **URL**: https://github.com/feast-dev/feast
- **Stars**: 6,940
- **Forks**: 1,294
- **Language**: Python
- **License**: Apache License 2.0
- **Created**: 2018-12-10
- **Updated**: 2026-04-10
- **Topics**: big-data, data-engineering, data-quality, data-science, feature-store, features, machine-learning, ml, mlops, python
- **Open Issues**: 345

## README (excerpt)
<!--Do not modify this file. It is auto-generated from a template (infra/templates/README.md.jinja2)-->

<p align="center">
    <a href="https://feast.dev/">
      <img src="https://raw.githubusercontent.com/feast-dev/feast/master/docs/assets/feast_logo.png" width="550">
    </a>
</p>
<br />

[![PyPI - Downloads](https://img.shields.io/pypi/dm/feast)](https://pypi.org/project/feast/)
[![GitHub contributors](https://img.shields.io/github/contributors/feast-dev/feast)](https://github.com/feast-dev/feast/graphs/contributors)
[![unit-tests](https://github.com/feast-dev/feast/actions/workflows/unit_tests.yml/badge.svg?branch=master&event=pull_request)](https://github.com/feast-dev/feast/actions/workflows/unit_tests.yml)
[![integration-tests-and-build](https://github.com/feast-dev/feast/actions/workflows/master_only.yml/badge.svg?branch=master&event=push)](https://github.com/feast-dev/feast/actions/workflows/master_only.yml)
[![linter](https://github.com/feast-dev/feast/actions/workflows/linter.yml/badge.svg?branch=master&event=push)](https://github.com/feast-dev/feast/actions/workflows/linter.yml)
[![Docs Latest](https://img.shields.io/badge/docs-latest-blue.svg)](https://docs.feast.dev/)
[![Python API](https://img.shields.io/badge/docs-latest-brightgreen.svg)](http://rtd.feast.dev/)
[![License](https://img.shields.io/badge/License-Apache%202.0-blue)](https://github.com/feast-dev/feast/blob/master/LICENSE)
[![GitHub Release](https://img.shields.io/github/v/release/feast-dev/feast.svg?style=flat&sort=semver&color=blue)](https://github.com/feast-dev/feast/releases)


## Join us on Slack!
👋👋👋 [Come say hi on Slack!](https://communityinviter.com/apps/feastopensource/feast-the-open-source-feature-store)

[Check out our DeepWiki!](https://deepwiki.com/feast-dev/feast)

## Overview
<a href="https://trendshift.io/repositories/8046" target="_blank"><img src="https://trendshift.io/api/badge/repositories/8046" alt="feast-dev%2Ffeast | Trendshift" style="width: 250px; height: 55px;" width="250" height="55"/></a>

Feast (**Fea**ture **St**ore) is an open source feature store for machine learning. Feast is the fastest path to manage existing infrastructure to productionize analytic data for model training and online inference.


Feast allows ML platform teams to:

* **Make features consistently available for training and serving** by managing an _offline store_ (to process historical data for scale-out batch scoring or model training), a low-latency _online store_ (to power real-time prediction)_,_ and a battle-tested _feature server_ (to serve pre-computed features online).
* **Avoid data leakage** by generating point-in-time correct feature sets so data scientists can focus on feature engineering rather than debugging error-prone dataset joining logic. This ensure that future feature values do not leak to models during training.
* **Decouple ML from data infrastructure** by providing a single data access layer that abstracts feature storage from feature retrieval, ensuring models remain portable as you move from training models to serving models, from batch models to realtime models, and from one data infra system to another.

Please see our [documentation](https://docs.feast.dev/) for more information about the project.

## 📐 Architecture
![](https://raw.githubusercontent.com/feast-dev/feast/master/docs/assets/feast_marchitecture.png)

The above architecture is the minimal Feast deployment. Want to run the full Feast on Snowflake/GCP/AWS? Click [here](https://docs.feast.dev/how-to-guides/feast-snowflake-gcp-aws).

## 🐣 Getting Started

### 1. Install Feast
```commandline
pip install feast
```

### 2. Create a feature repository
```commandline
feast init my_feature_repo
cd my_feature_repo/feature_repo
```

### 3. Register your feature definitions and set up your feature store
```commandline
feast apply
```

### 4. Explore your data in the web UI (experimental)

![Web UI](https://raw.githubusercontent.com/feast-dev/feast/master/ui/sample.p