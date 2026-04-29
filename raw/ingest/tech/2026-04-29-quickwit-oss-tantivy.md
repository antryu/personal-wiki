<!-- GitHub Trending: Rust | 15,101 stars | +12 today -->

# quickwit-oss/tantivy

> Tantivy is a full-text search engine library inspired by Apache Lucene and written in Rust

## Repository Info
- **URL**: https://github.com/quickwit-oss/tantivy
- **Stars**: 15,101
- **Forks**: 903
- **Language**: Rust
- **License**: MIT License
- **Created**: 2016-01-11
- **Updated**: 2026-04-29
- **Topics**: rust, search-engine
- **Open Issues**: 410

## README (excerpt)
[![Docs](https://docs.rs/tantivy/badge.svg)](https://docs.rs/crate/tantivy/)
[![Build Status](https://github.com/quickwit-oss/tantivy/actions/workflows/test.yml/badge.svg)](https://github.com/quickwit-oss/tantivy/actions/workflows/test.yml)
[![codecov](https://codecov.io/gh/quickwit-oss/tantivy/branch/main/graph/badge.svg)](https://codecov.io/gh/quickwit-oss/tantivy)
[![OpenSSF Scorecard](https://api.scorecard.dev/projects/github.com/quickwit-oss/tantivy/badge)](https://scorecard.dev/viewer/?uri=github.com/quickwit-oss/tantivy)
[![Join the chat at https://discord.gg/MT27AG5EVE](https://shields.io/discord/908281611840282624?label=chat%20on%20discord)](https://discord.gg/MT27AG5EVE)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Crates.io](https://img.shields.io/crates/v/tantivy.svg)](https://crates.io/crates/tantivy)

<img src="https://tantivy-search.github.io/logo/tantivy-logo.png" alt="Tantivy, the fastest full-text search engine library written in Rust" height="250">

## Fast full-text search engine library written in Rust

**If you are looking for an alternative to Elasticsearch or Apache Solr, check out [Quickwit](https://github.com/quickwit-oss/quickwit), our distributed search engine built on top of Tantivy.**

Tantivy is closer to [Apache Lucene](https://lucene.apache.org/) than to [Elasticsearch](https://www.elastic.co/products/elasticsearch) or [Apache Solr](https://lucene.apache.org/solr/) in the sense it is not
an off-the-shelf search engine server, but rather a crate that can be used to build such a search engine.

Tantivy is, in fact, strongly inspired by Lucene's design.

## Benchmark

The following [benchmark](https://tantivy-search.github.io/bench/) breaks down the
performance for different types of queries/collections.

Your mileage WILL vary depending on the nature of queries and their load.

Details about the benchmark can be found at this [repository](https://github.com/quickwit-oss/search-benchmark-game).

## Features

- Full-text search
- Configurable tokenizer (stemming available for 17 Latin languages) with third party support for Chinese ([tantivy-jieba](https://crates.io/crates/tantivy-jieba) and [cang-jie](https://crates.io/crates/cang-jie)), Japanese ([lindera](https://github.com/lindera-morphology/lindera-tantivy), [Vaporetto](https://crates.io/crates/vaporetto_tantivy), and [tantivy-tokenizer-tiny-segmenter](https://crates.io/crates/tantivy-tokenizer-tiny-segmenter)) and Korean ([lindera](https://github.com/lindera-morphology/lindera-tantivy) + [lindera-ko-dic-builder](https://github.com/lindera-morphology/lindera-ko-dic-builder))
- Fast (check out the :racehorse: :sparkles: [benchmark](https://tantivy-search.github.io/bench/) :sparkles: :racehorse:)
- Tiny startup time (<10ms), perfect for command-line tools
- BM25 scoring (the same as Lucene)
- Natural query language (e.g. `(michael AND jackson) OR "king of pop"`)
- Phrase queries search (e.g. `"michael jackson"`)
- Incremental indexing
- Multithreaded indexing (indexing English Wikipedia takes < 3 minutes on my desktop)
- Mmap directory
- SIMD integer compression when the platform/CPU includes the SSE2 instruction set
- Single valued and multivalued u64, i64, and f64 fast fields (equivalent of doc values in Lucene)
- `&[u8]` fast fields
- Text, i64, u64, f64, dates, ip, bool, and hierarchical facet fields
- Compressed document store (LZ4, Zstd, None)
- Range queries
- Faceted search
- Configurable indexing (optional term frequency and position indexing)
- JSON Field
- Aggregation Collector: histogram, range buckets, average, and stats metrics
- LogMergePolicy with deletes
- Searcher Warmer API
- Cheesy logo with a horse

### Non-features

Distributed search is out of the scope of Tantivy, but if you are looking for this feature, check out [Quickwit](https://github.com/quickwit-oss/quickwit/).

## Getting started

Tantivy works on stable Rust and supports Linux, macOS, and Windows.
