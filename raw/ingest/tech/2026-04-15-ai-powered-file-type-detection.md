<!-- GitHub Trending: Python | 13,707 stars | +833 today -->

# google/magika

> Fast and accurate AI powered file content types detection 

## Repository Info
- **URL**: https://github.com/google/magika
- **Stars**: 13,708
- **Forks**: 718
- **Language**: Python
- **License**: Apache License 2.0
- **Created**: 2023-08-22
- **Updated**: 2026-04-15
- **Topics**: ai, deep-learning, filetype, keras-classification-models, keras-models, mime-types, onnx
- **Open Issues**: 127

## README (excerpt)
# Magika

[![image](https://img.shields.io/pypi/v/magika.svg)](https://pypi.python.org/pypi/magika)
[![NPM Version](https://img.shields.io/npm/v/magika)](https://npmjs.com/package/magika)
[![image](https://img.shields.io/pypi/l/magika.svg)](https://pypi.python.org/pypi/magika)
[![image](https://img.shields.io/pypi/pyversions/magika.svg)](https://pypi.python.org/pypi/magika)
[![Go Version](https://img.shields.io/github/v/tag/google/magika?filter=go%2F*&label=go&sort=semver)](https://pkg.go.dev/github.com/google/magika/go)
<!-- [![OpenSSF Scorecard](https://api.scorecard.dev/projects/github.com/google/magika/badge)](https://scorecard.dev/viewer/?uri=github.com/google/magika) -->
[![OpenSSF Best Practices](https://www.bestpractices.dev/projects/8706/badge)](https://www.bestpractices.dev/en/projects/8706)
![CodeQL](https://github.com/google/magika/workflows/CodeQL/badge.svg)
[![Actions status](https://github.com/google/magika/actions/workflows/python-build-and-release-package.yml/badge.svg)](https://github.com/google/magika/actions)
[![PyPI Monthly Downloads](https://static.pepy.tech/badge/magika/month)](https://pepy.tech/projects/magika)
[![PyPI Downloads](https://static.pepy.tech/badge/magika)](https://pepy.tech/projects/magika)

Magika is a novel AI-powered file type detection tool that relies on the recent advance of deep learning to provide accurate detection. Under the hood, Magika employs a custom, highly optimized model that only weighs about a few MBs, and enables precise file identification within milliseconds, even when running on a single CPU. Magika has been trained and evaluated on a dataset of ~100M samples across 200+ content types (covering both binary and textual file formats), and it achieves an average ~99% accuracy on our test set.

Here is an example of what Magika command line output looks like:

<p align="center">
    <img src="./assets/magika-screenshot.png" width="600">
</p>

Magika is used at scale to help improve Google users' safety by routing Gmail, Drive, and Safe Browsing files to the proper security and content policy scanners, processing hundreds billions samples on a weekly basis. Magika has also been integrated with [VirusTotal](https://www.virustotal.com/) ([example](./assets/magika-vt.png)) and [abuse.ch](https://bazaar.abuse.ch/) ([example](./assets/magika-abusech.png)).

For more context you can read our initial [announcement post on Google's OSS blog](https://opensource.googleblog.com/2024/02/magika-ai-powered-fast-and-efficient-file-type-identification.html), you can consult [Magika's website](https://securityresearch.google/magika/), and you can read more in our [research paper](https://securityresearch.google/magika/additional-resources/research-papers-and-citation/), published at the IEEE/ACM International Conference on Software Engineering (ICSE) 2025.

You can try Magika without installing anything by using our [web demo](https://securityresearch.google/magika/demo/magika-demo/), which runs locally in your browser!


# Highlights

- Available as a command line tool written in Rust, a Python API, and additional bindings for Rust, JavaScript/TypeScript (with an experimental npm package, which powers our [web demo](https://securityresearch.google/magika/demo/magika-demo/)), and GoLang (WIP).
- Trained and evaluated on a dataset of ~100M files across [200+ content types](./assets/models/standard_v3_3/README.md).
- On our test set, Magika achieves ~99% average precision and recall, outperforming existing approaches -- especially on textual content types.
- After the model is loaded (which is a one-off overhead), the inference time is about 5ms per file, even when run on a single CPU.
- You can invoke Magika with even thousands of files at the same time. You can also use `-r` for recursively scanning a directory.
- Near-constant inference time, independently from the file size; Magika only uses a limited subset of the file's content.
- Magika uses a per-content-type threshold system that de