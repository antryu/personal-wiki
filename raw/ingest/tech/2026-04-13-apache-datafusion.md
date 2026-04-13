<!-- GitHub Trending: Rust | 8,598 stars | +3 today -->

# apache/datafusion

> Apache DataFusion SQL Query Engine

## Repository Info
- **URL**: https://github.com/apache/datafusion
- **Stars**: 8,598
- **Forks**: 2,039
- **Language**: Rust
- **License**: Apache License 2.0
- **Created**: 2021-04-17
- **Updated**: 2026-04-13
- **Topics**: arrow, big-data, dataframe, datafusion, olap, python, query-engine, rust, sql
- **Open Issues**: 1930

## README (excerpt)
<!---
  Licensed to the Apache Software Foundation (ASF) under one
  or more contributor license agreements.  See the NOTICE file
  distributed with this work for additional information
  regarding copyright ownership.  The ASF licenses this file
  to you under the Apache License, Version 2.0 (the
  "License"); you may not use this file except in compliance
  with the License.  You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

  Unless required by applicable law or agreed to in writing,
  software distributed under the License is distributed on an
  "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
  KIND, either express or implied.  See the License for the
  specific language governing permissions and limitations
  under the License.
-->

# Apache DataFusion

[![Crates.io][crates-badge]][crates-url]
[![Apache licensed][license-badge]][license-url]
[![Build Status][actions-badge]][actions-url]
![Commit Activity][commit-activity-badge]
[![Open Issues][open-issues-badge]][open-issues-url]
[![Pending PRs][pending-pr-badge]][pending-pr-url]
[![Discord chat][discord-badge]][discord-url]
[![Linkedin][linkedin-badge]][linkedin-url]
![Crates.io MSRV][msrv-badge]

[crates-badge]: https://img.shields.io/crates/v/datafusion.svg
[crates-url]: https://crates.io/crates/datafusion
[license-badge]: https://img.shields.io/badge/license-Apache%20v2-blue.svg
[license-url]: https://github.com/apache/datafusion/blob/main/LICENSE.txt
[actions-badge]: https://github.com/apache/datafusion/actions/workflows/rust.yml/badge.svg
[actions-url]: https://github.com/apache/datafusion/actions?query=branch%3Amain
[discord-badge]: https://img.shields.io/badge/Chat-Discord-purple
[discord-url]: https://discord.com/invite/Qw5gKqHxUM
[commit-activity-badge]: https://img.shields.io/github/commit-activity/m/apache/datafusion
[open-issues-badge]: https://img.shields.io/github/issues-raw/apache/datafusion
[open-issues-url]: https://github.com/apache/datafusion/issues
[pending-pr-badge]: https://img.shields.io/github/issues-search/apache/datafusion?query=is%3Apr+is%3Aopen+draft%3Afalse+review%3Arequired+status%3Asuccess&label=Pending%20PRs&logo=github
[pending-pr-url]: https://github.com/apache/datafusion/pulls?q=is%3Apr+is%3Aopen+draft%3Afalse+review%3Arequired+status%3Asuccess+sort%3Aupdated-desc
[linkedin-badge]: https://img.shields.io/badge/Follow-Linkedin-blue
[linkedin-url]: https://www.linkedin.com/company/apache-datafusion/
[msrv-badge]: https://img.shields.io/crates/msrv/datafusion?label=Min%20Rust%20Version

[Website](https://datafusion.apache.org/) |
[API Docs](https://docs.rs/datafusion/latest/datafusion/) |
[Chat](https://discord.com/channels/885562378132000778/885562378132000781)

<a href="https://datafusion.apache.org/">
  <img src="https://github.com/apache/datafusion/raw/HEAD/docs/source/_static/images/2x_bgwhite_original.png" width="512" alt="logo"/>
</a>

DataFusion is an extensible query engine written in [Rust] that
uses [Apache Arrow] as its in-memory format.

This crate provides libraries and binaries for developers building fast and
feature-rich database and analytic systems, customized for particular workloads.
See [use cases] for examples. The following related subprojects target end users:

- [DataFusion Python](https://github.com/apache/datafusion-python/) offers a Python interface for SQL and DataFrame
  queries.
- [DataFusion Comet](https://github.com/apache/datafusion-comet/) is an accelerator for Apache Spark based on
  DataFusion.

"Out of the box,"
DataFusion offers [SQL](https://datafusion.apache.org/user-guide/sql/index.html) and [DataFrame](https://datafusion.apache.org/user-guide/dataframe.html) APIs, excellent [performance],
built-in support for CSV, Parquet, JSON, and Avro, extensive customization, and
a great community.

DataFusion features a full query planner, a columnar, streaming, multi-threaded,
vectorized execution engine, and partitioned data sources. You can
customize DataFusio