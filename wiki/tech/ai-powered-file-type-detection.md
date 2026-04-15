# AI-Powered File Type Detection

> This repository, Magika, is a fast and accurate AI-powered file type detection tool developed by Google, capable of identifying over 200 file types with near 99% accuracy. It is used at scale in Google's security infrastructure and is notable for its efficiency, lightweight model, and multi-language support.
> Last updated: 2026-04-15

## Overview

The `google/magika` repository presents an innovative approach to file type detection using deep learning. Magika is a file content detection system that leverages a custom-trained deep learning model to identify file types with high accuracy and speed. It is designed to be lightweight, with a model size of just a few MBs, and capable of performing inference in about 5 milliseconds per file, even on a single CPU.

Magika is trained on a dataset of approximately 100 million files across 200+ content types, including both binary and textual formats. It is used in production by Google to enhance user safety in Gmail, Drive, and Safe Browsing, and is also integrated into external platforms like VirusTotal and abuse.ch.

Magika supports multiple deployment options, including a command-line interface (CLI) written in Rust, a Python API, and bindings for JavaScript/TypeScript and GoLang. It is available as a PyPI package and an npm package, and includes a web demo that runs locally in the browser.

## Key Points

- Achieves ~99% average precision and recall on test data, surpassing traditional methods especially for textual file types.
- Capable of processing hundreds of billions of files weekly in Google's infrastructure.
- Lightweight and fast, with a model size of only a few MBs and inference times around 5ms per file.
- Supports multi-file and recursive directory scanning for batch processing.
- Available in multiple languages and as a web demo, making it accessible and easy to integrate.

## Sources

- [GitHub](https://github.com/google/magika)
- [원본](raw/ingest/tech/2026-04-15-ai-powered-file-type-detection.md)