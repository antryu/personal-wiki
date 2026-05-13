# Hugging Face Tokenizers

> Hugging Face Tokenizers is a high-performance library for natural language processing, offering fast and versatile implementations of modern tokenizers. Notable for its Rust-based performance and support for research and production environments.  
> Last updated: 2026-05-13

## Overview
The `tokenizers` repository by Hugging Face provides efficient and flexible tools for tokenizing text data, optimized for use in both research and production. It supports multiple tokenizer types like BPE, WordPiece, and Unigram and offers fast tokenization and training capabilities. The library is written in Rust and includes bindings for multiple programming languages, including Python, Node.js, and Ruby. It is widely adopted in the NLP community and is used in conjunction with the Hugging Face Transformers library.

### Features
- Implements modern tokenizers like BPE, WordPiece, and Unigram.
- Written in Rust for performance and speed.
- Supports pre-tokenization, normalization, and alignment tracking.
- Offers bindings for Python, Node.js, and Ruby.
- Designed for both research and industrial applications.

### Performance
The library is optimized for speed, with tokenization operations completing in under 20 seconds for a GB of text on a server CPU. Benchmarks are available for comparison.

### Installation and Usage
- **Installation** is available via pip for Python.
- The library allows training custom tokenizers with minimal code.
- It supports encoding text and includes options for pre-tokenization customization.

### Use Cases
- Training new tokenizers on custom datasets.
- Encoding text for input into NLP models.
- Integration with deep learning frameworks and Hugging Face's Transformers.

## Key Points
- High-performance Rust-based implementation for fast tokenization.
- Supports training and encoding with modern tokenizer models.
- Includes Python, Node.js, and Ruby bindings for cross-language use.

## Sources
- [GitHub](https://github.com/huggingface/tokenizers)
- [원본](raw/ingest/tech/2026-05-13-hugging-face-tokenizers.md)