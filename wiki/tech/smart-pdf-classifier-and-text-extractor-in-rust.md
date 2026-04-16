# Smart PDF Classifier and Text Extractor in Rust

> A fast Rust library for intelligent PDF classification and text extraction. It distinguishes between text-based and scanned PDFs, extracts position-aware text, and converts documents to clean Markdown without requiring OCR. Notable for its speed, lightweight design, and support for multi-column layouts and table detection.  
> Last updated: 2026-04-16

## Overview

### Repository Info
- **URL**: [GitHub](https://github.com/firecrawl/pdf-inspector)
- **Stars**: 494
- **Forks**: 45
- **Language**: Rust
- **License**: N/A
- **Created**: 2026-02-06
- **Updated**: 2026-04-16
- **Topics**: `markdown`, `nodejs`, `ocr-routing`, `pdf`, `pdf-classification`, `pdf-extraction`, `pdf-parser`, `python`, `rust`, `text-extraction`
- **Open Issues**: 7

### Features
1. **Smart Classification**: Detects PDF types (TextBased, Scanned, ImageBased, Mixed) in ~10-50ms with confidence scores and per-page OCR routing.
2. **Position-Aware Text Extraction**: Includes font information, X/Y coordinates, and multi-column reading order detection.
3. **Markdown Conversion**: Converts PDFs to structured Markdown with headings, lists, code blocks, tables, formatting, and URLs.
4. **Table Detection**: Combines rectangle-based and heuristic methods to handle financial tables, footnotes, and multi-page tables.
5. **CID Font Support**: Decodes UTF-16BE, UTF-8, and Latin-1 encodings for complex font mappings.
6. **Lightweight Architecture**: Pure Rust implementation with no ML models or external dependencies beyond `lopdf`.

### Benchmark Performance
| Engine            | Overall | Reading Order (NID) | Tables (TEDS) | Headings (MHS) | Speed (200 docs) |
|-------------------|---------|---------------------|---------------|----------------|------------------|
| `pdf-inspector`   | 0.78    | 0.87                | 0.59          | 0.57           | 4s               |
| `opendataloader`  | 0.84    | 0.91                | 0.49          | 0.74           | 11s              |
| `pymupdf4llm`     | 0.73    | 0.89                | 0.40          | 0.41           | 18s              |

- **Strengths**: Fastest processing speed, strong reading order and table detection.
- **Weaknesses**: Lags in heading detection (struggles with subtle heading styles) and table detection compared to OCR-based tools.

### Usage Examples

#### Python
```bash
pip install maturin
maturin develop --release
```

```python
import pdf_inspector

result = pdf_inspector.process_pdf("document.pdf")
print(result.pdf_type)   # "text_based", "scanned", "image_based", "mixed"
print(result.markdown)   # Markdown string or None
```

#### Node.js
```bash
npm install firecrawl-pdf-inspector
```

```javascript
import { readFileSync } from 'fs';
import { processPdf } from 'firecrawl-pdf-inspector';

const result = processPdf(readFileSync('document.pdf'));
console.log(result.pdfType);   // "TextBased", "Scanned", "ImageBased", "Mixed"
console.log(result.markdown);  // Markdown string or null
```

#### Rust
```toml
[dependencies]
pdf-inspector = { git = "https://github.com/firecrawl/pdf-inspector" }
```

```rust
use pdf_inspector::process_pdf;

let result = process_pdf("document.pdf")?;
println!("Type: {:?}", result.pdf_type);
if let Some(markdown) = &result.markdown {
    println!("{}", markdown);
}
```

## Key Points
- Classifies PDF types in ~10-50ms with confidence scores.
- Extracts text with positional metadata and multi-column layout support.
- Converts PDFs to structured Markdown with formatting preservation.
- Benchmarked as the fastest non-OCR text extraction engine.
- Open-source Rust implementation with Python and Node.js bindings.

## Sources
- [GitHub](https://github.com/firecrawl/pdf-inspector)
- [원본](raw/ingest/tech/2026-04-16-smart-pdf-classifier-and-text-extractor-in-rust.md)