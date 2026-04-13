<!-- GitHub Trending: Rust | 1,324 stars | +9 today -->

# lakehq/sail

> LakeSail's computation framework with a mission to unify batch processing, stream processing, and compute-intensive AI workloads.

## Repository Info
- **URL**: https://github.com/lakehq/sail
- **Stars**: 1,324
- **Forks**: 85
- **Language**: Rust
- **License**: Apache License 2.0
- **Created**: 2023-12-21
- **Updated**: 2026-04-13
- **Topics**: arrow, artificial-intelligence, big-data, data, data-engineering, datafusion, distributed-computing, machine-learning, pyspark, python, rust, spark, sql
- **Open Issues**: 191

## README (excerpt)
# Sail

[![Build Status](https://github.com/lakehq/sail/actions/workflows/build.yml/badge.svg?branch=main&event=push)](https://github.com/lakehq/sail/actions)
[![Codecov](https://codecov.io/gh/lakehq/sail/graph/badge.svg)](https://app.codecov.io/gh/lakehq/sail)
[![PyPI Release](https://img.shields.io/pypi/v/pysail)](https://pypi.org/project/pysail/)
[![Static Slack Badge](https://img.shields.io/badge/slack-LakeSail_Community-3762E0?logo=slack)](https://www.launchpass.com/lakesail-community/free)

Sail is an open-source **unified and distributed multimodal computation framework** created by [LakeSail](https://lakesail.com/).

Our mission is to **unify batch processing, stream processing, and compute-intensive AI workloads**. Sail is a compute engine that is:

- **Compatible** with the Spark Connect protocol, supporting the Spark SQL and DataFrame API with no code rewrites required.
- **~4x faster** than Spark in benchmarks (up to 8x in specific workloads).
- **94% cheaper** on infrastructure costs.
- **100% Rust-native** with no JVM overhead, delivering memory safety, instant startup, and predictable performance.

**🚀 Sail outperforms Spark, popular Spark accelerators, Databricks, and Snowflake on [ClickBench](https://go.lakesail.com/clickbench).**

**💬 [Join our Slack community](https://www.launchpass.com/lakesail-community/free)** to ask questions, share feedback, and connect with other Sail users and contributors.

## Documentation

The documentation of the latest Sail version can be found [here](https://docs.lakesail.com/sail/latest/).

## Installation

### Quick Start

Sail is available as a Python package on PyPI. You can install it along with PySpark in your Python environment.

```bash
pip install pysail
pip install "pyspark[connect]"
```

Alternatively, you can install the lightweight client package `pyspark-client` since Spark 4.0.
The `pyspark-connect` package, which is equivalent to `pyspark[connect]`, is also available since Spark 4.0.

### Advanced Use Cases

You can install Sail from source to optimize performance for your specific hardware architecture. The detailed [Installation Guide](https://docs.lakesail.com/sail/latest/introduction/installation/) walks you through this process step-by-step.

If you need to deploy Sail in production environments, the [Deployment Guide](https://docs.lakesail.com/sail/latest/guide/deployment/) provides comprehensive instructions for deploying Sail on Kubernetes clusters and other infrastructure configurations.

## Getting Started

### Starting the Sail Server

**Option 1: Command Line Interface.** You can start the local Sail server using the `sail` command.

```bash
sail spark server --port 50051
```

**Option 2: Python API.** You can start the local Sail server using the Python API.

```python
from pysail.spark import SparkConnectServer

server = SparkConnectServer(port=50051)
server.start(background=False)
```

**Option 3: Kubernetes.** You can deploy Sail on Kubernetes and run Sail in cluster mode for distributed processing.
Please refer to the [Kubernetes Deployment Guide](https://docs.lakesail.com/sail/latest/guide/deployment/kubernetes.html) for instructions on building the Docker image and writing the Kubernetes manifest YAML file.

```bash
kubectl apply -f sail.yaml
kubectl -n sail port-forward service/sail-spark-server 50051:50051
```

### Connecting to the Sail Server

Once you have a running Sail server, you can connect to it in PySpark.
No changes are needed in your PySpark code!

```python
from pyspark.sql import SparkSession

spark = SparkSession.builder.remote("sc://localhost:50051").getOrCreate()
spark.sql("SELECT 1 + 1").show()
```

Please refer to the [Getting Started](https://docs.lakesail.com/sail/latest/introduction/getting-started/) guide for further details.

## Feature Highlights

### Storage

Sail supports a variety of storage backends for reading and writing data. You can read more details in our [Storage Guide](https://docs.lakesail.com/sail/lates