<!-- GitHub Trending: Python | 35,896 stars | +70 today -->

# google/langextract

> A Python library for extracting structured information from unstructured text using LLMs with precise source grounding and interactive visualization.

## Repository Info
- **URL**: https://github.com/google/langextract
- **Stars**: 35,896
- **Forks**: 2,449
- **Language**: Python
- **License**: Apache License 2.0
- **Created**: 2025-07-08
- **Updated**: 2026-04-26
- **Topics**: gemini, gemini-ai, gemini-api, gemini-flash, gemini-pro, information-extration, large-language-models, llm, nlp, python, structured-data
- **Open Issues**: 110

## README (excerpt)
<p align="center">
  <a href="https://github.com/google/langextract">
    <img src="https://raw.githubusercontent.com/google/langextract/main/docs/_static/logo.svg" alt="LangExtract Logo" width="128" />
  </a>
</p>

# LangExtract

[![PyPI version](https://img.shields.io/pypi/v/langextract.svg)](https://pypi.org/project/langextract/)
[![GitHub stars](https://img.shields.io/github/stars/google/langextract.svg?style=social&label=Star)](https://github.com/google/langextract)
![Tests](https://github.com/google/langextract/actions/workflows/ci.yaml/badge.svg)
[![DOI](https://zenodo.org/badge/DOI/10.5281/zenodo.17015089.svg)](https://doi.org/10.5281/zenodo.17015089)

## Table of Contents

- [Introduction](#introduction)
- [Why LangExtract?](#why-langextract)
- [Quick Start](#quick-start)
- [Installation](#installation)
- [API Key Setup for Cloud Models](#api-key-setup-for-cloud-models)
- [Adding Custom Model Providers](#adding-custom-model-providers)
- [Using OpenAI Models](#using-openai-models)
- [Using Local LLMs with Ollama](#using-local-llms-with-ollama)
- [More Examples](#more-examples)
  - [*Romeo and Juliet* Full Text Extraction](#romeo-and-juliet-full-text-extraction)
  - [Medication Extraction](#medication-extraction)
  - [Radiology Report Structuring: RadExtract](#radiology-report-structuring-radextract)
- [Community Providers](#community-providers)
- [Contributing](#contributing)
- [Testing](#testing)
- [Disclaimer](#disclaimer)

## Introduction

LangExtract is a Python library that uses LLMs to extract structured information from unstructured text documents based on user-defined instructions. It processes materials such as clinical notes or reports, identifying and organizing key details while ensuring the extracted data corresponds to the source text.

## Why LangExtract?

1.  **Precise Source Grounding:** Maps every extraction to its exact location in the source text, enabling visual highlighting for easy traceability and verification.
2.  **Reliable Structured Outputs:** Enforces a consistent output schema based on your few-shot examples, leveraging controlled generation in supported models like Gemini to guarantee robust, structured results.
3.  **Optimized for Long Documents:** Overcomes the "needle-in-a-haystack" challenge of large document extraction by using an optimized strategy of text chunking, parallel processing, and multiple passes for higher recall.
4.  **Interactive Visualization:** Instantly generates a self-contained, interactive HTML file to visualize and review thousands of extracted entities in their original context.
5.  **Flexible LLM Support:** Supports your preferred models, from cloud-based LLMs like the Google Gemini family to local open-source models via the built-in Ollama interface.
6.  **Adaptable to Any Domain:** Define extraction tasks for any domain using just a few examples. LangExtract adapts to your needs without requiring any model fine-tuning.
7.  **Leverages LLM World Knowledge:** Utilize precise prompt wording and few-shot examples to influence how the extraction task may utilize LLM knowledge. The accuracy of any inferred information and its adherence to the task specification are contingent upon the selected LLM, the complexity of the task, the clarity of the prompt instructions, and the nature of the prompt examples.

## Quick Start

> **Note:** Using cloud-hosted models like Gemini requires an API key. See the [API Key Setup](#api-key-setup-for-cloud-models) section for instructions on how to get and configure your key.

Extract structured information with just a few lines of code.

### 1. Define Your Extraction Task

First, create a prompt that clearly describes what you want to extract. Then, provide a high-quality example to guide the model.

```python
import langextract as lx
import textwrap

# 1. Define the prompt and extraction rules
prompt = textwrap.dedent("""\
    Extract characters, emotions, and relationships in order of appearance.
    Use exact text for extractions