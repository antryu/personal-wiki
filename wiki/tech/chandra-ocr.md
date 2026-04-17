# Chandra OCR

> Chandra OCR is a state-of-the-art OCR model designed to handle complex documents including tables, forms, and handwriting with full layout preservation. Notable for its multilingual support (90+ languages) and advanced features like math and table recognition, it offers both local and remote inference options.  
> Last updated: 2026-04-17

## Overview

### Repository Information
- **URL**: https://github.com/datalab-to/chandra  
- **Stars**: 9,052  
- **Forks**: 940  
- **Language**: Python  
- **License**: Apache License 2.0  
- **Created**: 2025-10-08  
- **Updated**: 2026-04-17  
- **Topics**: ai, ocr  
- **Open Issues**: 36  

### Model Overview
Chandra OCR 2 converts images and PDFs into structured HTML/Markdown/JSON while preserving layout information. It excels in handling complex layouts, mathematical content, and multilingual documents. The model supports two inference modes: local (via HuggingFace) and remote (via vLLM server).

### Features
- **Multilingual Support**: Works with 90+ languages, outperforming benchmarks in internal and external tests.  
- **Layout Preservation**: Reconstructs documents with detailed spatial information, including tables, forms, and diagrams.  
- **Advanced Recognition**: Strong performance in handwriting, math equations, and complex table structures.  
- **Output Formats**: Converts documents to Markdown, HTML, or JSON with embedded images and captions.  
- **Scalability**: Offers a hosted API for faster and more accurate processing at [Datalab](https://www.datalab.to/).  

### Hosted API
- **Production Use**: A hosted API is available for commercial and research applications.  
- **Free Playground**: Test Chandra without installation at [Datalab Playground](https://www.datalab.to/playground).  

### Installation
Install via pip:  
```bash
pip install chandra-ocr
```
**Usage Options**:  
- **vLLM (Recommended)**: Lightweight and fast.  
  ```bash
  chandra_vllm
  chandra input.pdf ./output
  ```  
- **HuggingFace**: Requires PyTorch.  
  ```bash
  pip install chandra-ocr[hf]
  chandra input.pdf ./output --method hf
  ```  
- **Streamlit App**:  
  ```bash
  pip install chandra-ocr[app]
  chandra_app
  ```

### Benchmarks
- **Multilingual Performance**: Outperforms competitors in custom benchmarks for tables, math, and layout accuracy (see [full benchmark](FULL_BENCHMARKS.md)).  
- **Olmocr Benchmark**: Achieves top scores in public OCR benchmarks for text accuracy and layout reconstruction.  

### Examples
- **Math**: [CS229 Textbook](https://github.com/datalab-to/chandra/blob/master/assets/examples/math/cs229.png), [Handwritten Math](https://github.com/datalab-to/chandra/blob/master/assets/examples/math/handwritten_math.png)  
- **Tables**: [Statistical Distribution](https://github.com/datalab-to/chandra/blob/master/assets/examples/tables/complex_tables.png), [Financial Table](https://github.com/datalab-to/chandra/blob/master/assets/examples/tables/financial_table.png)  
- **Forms**: [Registration Form](https://github.com/datalab-to/chandra/blob/master/assets/examples/forms/handwritten_form.png)  

## Key Points
- Handles complex layouts, tables, forms, and handwriting with full spatial preservation.  
- Supports 90+ languages and excels in multilingual OCR benchmarks.  
- Offers local (HuggingFace) and remote (vLLM) inference modes for flexibility.  

## Sources
- [GitHub](https://github.com/datalab-to/chandra)  
- [원본](raw/ingest/tech/2026-04-17-chandra-ocr.md)