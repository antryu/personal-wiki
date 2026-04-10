<!-- GitHub Trending: Rust | 6,299 stars | +9 today -->

# lance-format/lance

> Open Lakehouse Format for Multimodal AI. Convert from Parquet in 2 lines of code for 100x faster random access, vector index, and data versioning. Compatible with Pandas, DuckDB, Polars, Pyarrow, and PyTorch with more integrations coming..

## Repository Info
- **URL**: https://github.com/lance-format/lance
- **Stars**: 6,299
- **Forks**: 625
- **Language**: Rust
- **License**: Apache License 2.0
- **Created**: 2022-07-07
- **Updated**: 2026-04-10
- **Topics**: apache-arrow, computer-vision, data-analysis, data-analytics, data-centric, data-format, data-science, dataops, deep-learning, duckdb, embeddings, llms, machine-learning, mlops, python, rust
- **Open Issues**: 1121

## README (excerpt)
<div align="center">
<p align="center">

<img width="257" alt="Lance Logo" src="https://user-images.githubusercontent.com/917119/199353423-d3e202f7-0269-411d-8ff2-e747e419e492.png">

**The Open Lakehouse Format for Multimodal AI**<br/>
**High-performance vector search, full-text search, random access, and feature engineering capabilities for the lakehouse.**<br/>
**Compatible with Pandas, DuckDB, Polars, PyArrow, Ray, Spark, and more integrations on the way.**

<a href="https://lance.org">Documentation</a> •
<a href="https://lance.org/community">Community</a> •
<a href="https://discord.gg/lance">Discord</a> •
<a href="https://groups.google.com/a/lance.org/g/dev">Mailing List</a>

[CI]: https://github.com/lance-format/lance/actions/workflows/rust.yml
[CI Badge]: https://github.com/lance-format/lance/actions/workflows/rust.yml/badge.svg
[Docs]: https://lance.org
[Docs Badge]: https://img.shields.io/badge/docs-passing-brightgreen
[crates.io]: https://crates.io/crates/lance
[crates.io badge]: https://img.shields.io/crates/v/lance.svg
[Python versions]: https://pypi.org/project/pylance/
[Python versions badge]: https://img.shields.io/pypi/pyversions/pylance

[![CI Badge]][CI]
[![Docs Badge]][Docs]
[![crates.io badge]][crates.io]
[![Python versions badge]][Python versions]

</p>
</div>

<hr />

Lance is an open lakehouse format for multimodal AI. It contains a file format, table format, and catalog spec that allows you to build a complete lakehouse on top of object storage to power your AI workflows. Lance is perfect for:

1. Building search engines and feature stores with hybrid search capabilities.
2. Large-scale ML training requiring high performance IO and random access.
3. Storing, querying, and managing multimodal data including images, videos, audio, text, and embeddings.

The key features of Lance include:

* **Expressive hybrid search:** Combine vector similarity search, full-text search (BM25), and SQL analytics on the same dataset with accelerated secondary indices.

* **Lightning-fast random access:** 100x faster than Parquet or Iceberg for random access without sacrificing scan performance.

* **Native multimodal data support:** Store images, videos, audio, text, and embeddings in a single unified format with efficient blob encoding and lazy loading.

* **Data evolution:** Efficiently add columns with backfilled values without full table rewrites, perfect for ML feature engineering.

* **Zero-copy versioning:** Automatic versioning with ACID transactions, time travel, tags, and branches—no extra infrastructure needed.

* **Rich ecosystem integrations:** Apache Arrow, Pandas, Polars, DuckDB, Apache Spark, Ray, Trino, Apache Flink, and open catalogs (Apache Polaris, Unity Catalog, Apache Gravitino).

For more details, see the full [Lance format specification](https://lance.org/format).

> [!TIP]
> Lance is in active development and we welcome contributions. Please see our [contributing guide](https://lance.org/community/contributing/) for more information.

## Quick Start

**Installation**

```shell
pip install pylance
```

To install a preview release:

```shell
pip install --pre --extra-index-url https://pypi.fury.io/lance-format/pylance
```

> [!TIP]
> Preview releases are released more often than full releases and contain the
> latest features and bug fixes. They receive the same level of testing as full releases.
> We guarantee they will remain published and available for download for at
> least 6 months. When you want to pin to a specific version, prefer a stable release.

**Converting to Lance**

```python
import lance

import pandas as pd
import pyarrow as pa
import pyarrow.dataset

df = pd.DataFrame({"a": [5], "b": [10]})
uri = "/tmp/test.parquet"
tbl = pa.Table.from_pandas(df)
pa.dataset.write_dataset(tbl, uri, format='parquet')

parquet = pa.dataset.dataset(uri, format='parquet')
lance.write_dataset(parquet, "/tmp/test.lance")
```

**Reading Lance data**
```python
dataset = lance.dataset("/tmp/test.lance")
asse