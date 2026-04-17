<!-- GitHub Trending: Python | 9,052 stars | +191 today -->

# datalab-to/chandra

> OCR model that handles complex tables, forms, handwriting with full layout.

## Repository Info
- **URL**: https://github.com/datalab-to/chandra
- **Stars**: 9,052
- **Forks**: 940
- **Language**: Python
- **License**: Apache License 2.0
- **Created**: 2025-10-08
- **Updated**: 2026-04-17
- **Topics**: ai, ocr
- **Open Issues**: 36

## README (excerpt)
<p align="center">
  <img src="assets/datalab-logo.png" alt="Datalab Logo" width="150"/>
</p>
<h1 align="center">Datalab</h1>
<p align="center">
  <strong>State of the Art models for Document Intelligence</strong>
</p>
<p align="center">
  <a href="https://opensource.org/licenses/Apache-2.0"><img src="https://img.shields.io/badge/Code%20License-Apache_2.0-green.svg" alt="Code License"></a>
  <a href="https://www.datalab.to/pricing"><img src="https://img.shields.io/badge/Model%20License-OpenRAIL--M-blue.svg" alt="Model License"></a>
  <a href="https://discord.gg/KuZwXNGnfH"><img src="https://img.shields.io/badge/Discord-Join%20us-5865F2?logo=discord&logoColor=white" alt="Discord"></a>
</p>

<hr/>

# Chandra OCR 2

Chandra OCR 2 is a state of the art OCR model that converts images and PDFs into structured HTML/Markdown/JSON while preserving layout information.

## News

- 3/2026 - Chandra 2 is here with significant improvements to math, tables, layout, and multilingual OCR
- 10/2025 - Chandra 1 launched

## Features

- Tops external olmocr benchmark and significant improvement in internal multilingual benchmarks
- Convert documents to markdown, html, or json with detailed layout information
- Support for 90+ languages ([benchmark below](#multilingual-benchmark-table))
- Excellent handwriting support
- Reconstructs forms accurately, including checkboxes
- Strong performance with tables, math, and complex layouts
- Extracts images and diagrams, and adds captions and structured data
- Two inference modes: local (HuggingFace) and remote (vLLM server)

<img src="assets/examples/math/handwritten_math.png" width="600px"/>

## Hosted API

- We have a hosted API for Chandra [here](https://www.datalab.to/), which is more accurate and faster.
- There is a free playground [here](https://www.datalab.to/playground) if you want to try Chandra without installing.

## Quickstart

The easiest way to start is with the CLI tools:

```shell
pip install chandra-ocr

# With vLLM (recommended, lightweight install)
chandra_vllm
chandra input.pdf ./output

# With HuggingFace (requires torch)
pip install chandra-ocr[hf]
chandra input.pdf ./output --method hf

# Interactive streamlit app
pip install chandra-ocr[app]
chandra_app
```

## Benchmarks

Multilingual performance was a focus for us with Chandra 2.  There isn't a good public multilingual OCR benchmark, so we made our own.  This tests tables, math, ordering, layout, and text accuracy.

<img src="assets/benchmarks/multilingual.png" width="600px"/>

See full scores [below](#multilingual-benchmark-table). We also have a [full 90-language benchmark](FULL_BENCHMARKS.md).

We also benchmarked Chandra 2 with the widely accepted olmocr benchmark:

<img src="assets/benchmarks/bench.png" width="600px"/>

See full scores [below](#benchmark-table).

## Examples

| Type | Name                     | Link                                                                                                        |
|------|--------------------------|-------------------------------------------------------------------------------------------------------------|
| Math | CS229 Textbook           | [View](https://github.com/datalab-to/chandra/blob/master/assets/examples/math/cs229.png)                    |
| Math | Handwritten Math         | [View](https://github.com/datalab-to/chandra/blob/master/assets/examples/math/handwritten_math.png)         |
| Math | Chinese Math             | [View](https://github.com/datalab-to/chandra/blob/master/assets/examples/math/chinese_math.png)             |
| Tables | Statistical Distribution | [View](https://github.com/datalab-to/chandra/blob/master/assets/examples/tables/complex_tables.png)         |
| Tables | Financial Table          | [View](https://github.com/datalab-to/chandra/blob/master/assets/examples/tables/financial_table.png)        |
| Forms | Registration Form        | [View](https://github.com/datalab-to/chandra/blob/master/assets/examples/forms/handwritten_form.png)        