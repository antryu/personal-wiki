<!-- GitHub Trending: Rust | 38,096 stars | +28 today -->

# pola-rs/polars

> Extremely fast Query Engine for DataFrames, written in Rust

## Repository Info
- **URL**: https://github.com/pola-rs/polars
- **Stars**: 38,097
- **Forks**: 2,760
- **Language**: Rust
- **License**: MIT License
- **Created**: 2020-05-13
- **Updated**: 2026-04-10
- **Topics**: arrow, dataframe, dataframe-library, dataframes, out-of-core, polars, python, rust
- **Open Issues**: 2730

## README (excerpt)
<h1 align="center">
  <a href="https://pola.rs">
    <img src="https://raw.githubusercontent.com/pola-rs/polars-static/master/banner/polars_github_banner.svg" alt="Polars logo">
  </a>
</h1>

<div align="center">
  <a href="https://crates.io/crates/polars">
    <img src="https://img.shields.io/crates/v/polars.svg" alt="crates.io Latest Release"/>
  </a>
  <a href="https://pypi.org/project/polars/">
    <img src="https://img.shields.io/pypi/v/polars.svg" alt="PyPi Latest Release"/>
  </a>
  <a href="https://www.npmjs.com/package/nodejs-polars">
    <img src="https://img.shields.io/npm/v/nodejs-polars.svg" alt="NPM Latest Release"/>
  </a>
  <a href="https://community.r-multiverse.org/polars">
    <img src="https://img.shields.io/badge/dynamic/json?url=https%3A%2F%2Fcommunity.r-multiverse.org%2Fapi%2Fpackages%2Fpolars&query=%24.Version&label=r-multiverse" alt="R-multiverse Latest Release"/>
  </a>
  <a href="https://doi.org/10.5281/zenodo.7697217">
    <img src="https://zenodo.org/badge/DOI/10.5281/zenodo.7697217.svg" alt="DOI Latest Release"/>
  </a>
</div>

<p align="center">
  <b>Documentation</b>:
  <a href="https://docs.pola.rs/api/python/stable/reference/index.html">Python</a>
  -
  <a href="https://docs.rs/polars/latest/polars/">Rust</a>
  -
  <a href="https://pola-rs.github.io/nodejs-polars/index.html">Node.js</a>
  -
  <a href="https://pola-rs.github.io/r-polars/index.html">R</a>
  |
  <b>StackOverflow</b>:
  <a href="https://stackoverflow.com/questions/tagged/python-polars">Python</a>
  -
  <a href="https://stackoverflow.com/questions/tagged/rust-polars">Rust</a>
  -
  <a href="https://stackoverflow.com/questions/tagged/nodejs-polars">Node.js</a>
  -
  <a href="https://stackoverflow.com/questions/tagged/r-polars">R</a>
  |
  <a href="https://docs.pola.rs/">User guide</a>
  |
  <a href="https://discord.gg/4UfP5cfBE7">Discord</a>
</p>

## Polars: Extremely fast Query Engine for DataFrames, written in Rust

Polars is an analytical query engine written for DataFrames. It is designed to be fast, easy to use
and expressive. Key features are:

- Lazy | Eager execution
- Streaming (larger-than-RAM datasets)
- Query optimization
- Multi-threaded
- Written in Rust
- SIMD
- Powerful expression API
- Front end in Python | Rust | NodeJS | R | SQL
- [Apache Arrow Columnar Format](https://arrow.apache.org/docs/format/Columnar.html)

To learn more, read the [user guide](https://docs.pola.rs/).

## Performance 🚀🚀

### Blazingly fast

Polars is very fast. In fact, it is one of the best performing solutions available. See the
[PDS-H benchmarks](https://www.pola.rs/benchmarks.html) results.

### Lightweight

Polars is also very lightweight. It comes with zero required dependencies, and this shows in the
import times:

- polars: 70ms
- numpy: 104ms
- pandas: 520ms

### Handles larger-than-RAM data

If you have data that does not fit into memory, Polars' query engine is able to process your query
(or parts of your query) in a streaming fashion. This drastically reduces memory requirements, so
you might be able to process your 250GB dataset on your laptop. Collect with
`collect(engine='streaming')` to run the query streaming.

## Setup

### Python

Install the latest Polars version with:

```sh
pip install polars
```

See the [User Guide](https://docs.pola.rs/user-guide/installation/#feature-flags) for more details
on optional dependencies

To see the current Polars version and a full list of its optional dependencies, run:

```python
pl.show_versions()
```

## Contributing

Want to contribute? Read our [contributing guide](https://docs.pola.rs/development/contributing/).

## Managed/Distributed Polars

Do you want a managed solution or scale out to distributed clusters? Consider our
[offering](https://cloud.pola.rs/) and help the project!

## Python: compile Polars from source

If you want a bleeding edge release or maximal performance you should compile Polars from source.

This can be done by going through the following steps in sequenc