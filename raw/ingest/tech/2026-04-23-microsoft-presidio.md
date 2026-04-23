<!-- GitHub Trending: Python | 7,734 stars | +22 today -->

# microsoft/presidio

> An open-source framework for detecting, redacting, masking, and anonymizing sensitive data (PII) across text, images, and structured data. Supports NLP, pattern matching, and customizable pipelines.

## Repository Info
- **URL**: https://github.com/microsoft/presidio
- **Stars**: 7,734
- **Forks**: 1,013
- **Language**: Python
- **License**: MIT License
- **Created**: 2018-05-04
- **Updated**: 2026-04-23
- **Topics**: anonymization, data-anonymization, data-masking, data-obfuscation, data-privacy, data-redaction, de-identification, guardrails, image-redactor, named-entity-recognition, nlp, personally-identifiable-information, phi, pii, pii-detection, privacy, python, sensitive-data, spacy, transformers
- **Open Issues**: 64

## README (excerpt)
# Presidio - Data Protection and De-identification SDK

**Context aware, pluggable and customizable PII de-identification service for text and images.**

---

[![Build Status](https://github.com/microsoft/presidio/actions/workflows/ci.yml/badge.svg?branch=main)](https://github.com/microsoft/presidio/actions/workflows/ci.yml)
[![MIT license](https://img.shields.io/badge/license-MIT-brightgreen.svg)](http://opensource.org/licenses/MIT)
![Release](https://img.shields.io/github/release/Microsoft/presidio.svg)
[![OpenSSF Best Practices](https://www.bestpractices.dev/projects/6076/badge)](https://www.bestpractices.dev/projects/6076)
[![PyPI pyversions](https://img.shields.io/pypi/pyversions/presidio-analyzer.svg)](https://pypi.python.org/pypi/presidio-analyzer/)

| Component | Downloads | Coverage |
|-----------|-----------|----------|
| Presidio Analyzer | [![Pypi Downloads](https://img.shields.io/pypi/dm/presidio-analyzer.svg)](https://pypi.python.org/pypi/presidio-analyzer/) | [![Coverage](https://img.shields.io/endpoint?url=https://raw.githubusercontent.com/microsoft/presidio/coverage-data-presidio-analyzer/endpoint.json)](https://github.com/microsoft/presidio/tree/coverage-data-presidio-analyzer) |
| Presidio Anonymizer | [![Pypi Downloads](https://img.shields.io/pypi/dm/presidio-anonymizer.svg)](https://pypi.python.org/pypi/presidio-anonymizer/) | [![Coverage](https://img.shields.io/endpoint?url=https://raw.githubusercontent.com/microsoft/presidio/coverage-data-presidio-anonymizer/endpoint.json)](https://github.com/microsoft/presidio/tree/coverage-data-presidio-anonymizer) |
| Presidio Image-Redactor | [![Pypi Downloads](https://img.shields.io/pypi/dm/presidio-image-redactor.svg)](https://pypi.python.org/pypi/presidio-image-redactor/) | [![Coverage](https://img.shields.io/endpoint?url=https://raw.githubusercontent.com/microsoft/presidio/coverage-data-presidio-image-redactor/endpoint.json)](https://github.com/microsoft/presidio/tree/coverage-data-presidio-image-redactor) |
| Presidio Structured | [![Pypi Downloads](https://img.shields.io/pypi/dm/presidio-structured.svg)](https://pypi.python.org/pypi/presidio-structured/) | [![Coverage](https://img.shields.io/endpoint?url=https://raw.githubusercontent.com/microsoft/presidio/coverage-data-presidio-structured/endpoint.json)](https://github.com/microsoft/presidio/tree/coverage-data-presidio-structured) |
## What is Presidio

Presidio _(Origin from Latin praesidium ‘protection, garrison’)_ helps to ensure sensitive data is properly managed and governed. It provides fast **_identification_** and **_anonymization_** modules for private entities in text such as credit card numbers, names, locations, social security numbers, bitcoin wallets, US phone numbers, financial data and more.

![Presidio demo gif](docs/assets/changing_text.gif)

---

### :blue_book: [Full documentation](https://microsoft.github.io/presidio)

### :question: [Frequently Asked Questions](docs/faq.md)

### :thought_balloon: [Demo](https://aka.ms/presidio-demo)

### :flight_departure: [Examples](https://microsoft.github.io/presidio/samples/)

---


### Goals

- Allow organizations to preserve privacy in a simpler way by democratizing de-identification technologies and introducing transparency in decisions.
- Embrace extensibility and customizability to a specific business need.
- Facilitate both fully automated and semi-automated PII de-identification flows on multiple platforms.

### Main features

1. **Predefined** or **custom PII recognizers** leveraging _Named Entity Recognition_, _regular expressions_, _rule based logic_ and _checksum_ with relevant context in multiple languages.
2. Options for connecting to external PII detection models.
3. Multiple usage options, **from Python or PySpark workloads through Docker to Kubernetes**.
4. **Customizability** in PII identification and de-identification.
5. Module for **redacting PII text in images** (standard image types and DICOM medical images).

:warning: Presidio 