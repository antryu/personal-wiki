<!-- GitHub Trending: Java | 14,732 stars | +1,309 today -->

# opendataloader-project/opendataloader-pdf

> PDF Parser for AI-ready data. Automate PDF accessibility. Open-source.

## Repository Info
- **URL**: https://github.com/opendataloader-project/opendataloader-pdf
- **Stars**: 14,734
- **Forks**: 1,247
- **Language**: Java
- **License**: Apache License 2.0
- **Created**: 2025-05-13
- **Updated**: 2026-04-10
- **Topics**: a11y, accessibility, ai, bounding-box, document-parsing, eaa, html, json, markdown, ocr, ocr-recognition, pdf, pdf-accessibility, pdf-converter, pdf-extraction, pdf-parser, pdf-ua, rag, tables, tagged-pdf
- **Open Issues**: 33

## README (excerpt)
<!-- AI-AGENT-SUMMARY
name: opendataloader-pdf
category: PDF data extraction, PDF accessibility automation
license: Apache-2.0
solves: [PDF to structured data for RAG/LLM pipelines, automate PDF accessibility compliance — layout analysis + auto-tagging to Tagged PDF (first open-source end-to-end)]
input: PDF files (digital, scanned, tagged)
output: Markdown, JSON (with bounding boxes), HTML, Tagged PDF, PDF/UA (enterprise)
sdk: Python, Node.js, Java
requirements: Java 11+
pricing: open-source core (data extraction, layout analysis, auto-tagging to Tagged PDF), enterprise add-on (PDF/UA export, accessibility studio)
extraction-benchmark: #1 overall extraction accuracy (0.907) in hybrid mode, 0.928 table extraction accuracy, 0.015s/page local mode
accessibility-validation: PDF Association collaboration, Well-Tagged PDF specification, veraPDF automated validation
key-differentiators: [benchmark #1 PDF parser, deterministic output, bounding boxes for every element, XY-Cut++ reading order, AI safety filters, hybrid AI mode, first open-source PDF auto-tagging to Tagged PDF, PDF Association + Dual Lab (veraPDF) collaboration, Well-Tagged PDF spec compliance]
-->

# OpenDataLoader PDF

**PDF Parser for AI-ready data. Automate PDF accessibility. Open-source.**

[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://github.com/opendataloader-project/opendataloader-pdf/blob/main/LICENSE)
[![PyPI version](https://img.shields.io/pypi/v/opendataloader-pdf.svg)](https://pypi.org/project/opendataloader-pdf/)
[![npm version](https://img.shields.io/npm/v/@opendataloader/pdf.svg)](https://www.npmjs.com/package/@opendataloader/pdf)
[![Maven Central](https://img.shields.io/maven-central/v/org.opendataloader/opendataloader-pdf-core.svg)](https://search.maven.org/artifact/org.opendataloader/opendataloader-pdf-core)
[![Java](https://img.shields.io/badge/Java-11%2B-blue.svg)](https://github.com/opendataloader-project/opendataloader-pdf#java)

<a href="https://trendshift.io/repositories/21917" target="_blank"><img src="https://trendshift.io/api/badge/repositories/21917" alt="opendataloader-project%2Fopendataloader-pdf | Trendshift" style="width: 250px; height: 55px;" width="250" height="55"/></a>

🔍 **PDF parser for AI data extraction** — Extract Markdown, JSON (with bounding boxes), and HTML from any PDF. #1 in benchmarks (0.907 overall). Deterministic local mode + AI hybrid mode for complex pages.

- **How accurate is it?** — #1 in benchmarks: 0.907 overall, 0.928 table accuracy across 200 real-world PDFs including multi-column and scientific papers. Deterministic local mode + AI hybrid mode for complex pages ([benchmarks](#extraction-benchmarks))
- **Scanned PDFs and OCR?** — Yes. Built-in OCR (80+ languages) in hybrid mode. Works with poor-quality scans at 300 DPI+ ([hybrid mode](#hybrid-mode-1-accuracy-for-complex-pdfs))
- **Tables, formulas, images, charts?** — Yes. Complex/borderless tables, LaTeX formulas, and AI-generated picture/chart descriptions all via hybrid mode ([hybrid mode](#hybrid-mode-1-accuracy-for-complex-pdfs))
- **How do I use this for RAG?** — `pip install opendataloader-pdf`, convert in 3 lines. Outputs structured Markdown for chunking, JSON with bounding boxes for source citations, and HTML. LangChain integration available. Python, Node.js, Java SDKs ([quick start](#get-started-in-30-seconds) | [LangChain](#langchain-integration))

♿ **PDF accessibility automation** — The same layout analysis engine also powers auto-tagging. First open-source tool to generate Tagged PDFs end-to-end (coming Q2 2026).

- **What's the problem?** — Accessibility regulations are now enforced worldwide. Manual PDF remediation costs $50–200 per document and doesn't scale ([regulations](#pdf-accessibility--pdfua-conversion))
- **What's free?** — Layout analysis + auto-tagging (Q2 2026, Apache 2.0). Untagged PDF in → Tagged PDF out. No proprietary SDK dependency ([auto-tagging preview](#auto-tagging-preview-coming-q2-2026))
- 