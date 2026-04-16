<!-- GitHub Trending: Rust | 486 stars | +60 today -->

# firecrawl/pdf-inspector

> Fast Rust library for PDF inspection, classification, and text extraction. Intelligently detects scanned vs text-based PDFs to enable smart routing decisions.

## Repository Info
- **URL**: https://github.com/firecrawl/pdf-inspector
- **Stars**: 494
- **Forks**: 45
- **Language**: Rust
- **License**: N/A
- **Created**: 2026-02-06
- **Updated**: 2026-04-16
- **Topics**: markdown, nodejs, ocr-routing, pdf, pdf-classification, pdf-extraction, pdf-parser, python, rust, text-extraction
- **Open Issues**: 7

## README (excerpt)
# pdf-inspector

Fast Rust library for PDF classification and text extraction. Detects whether a PDF is text-based or scanned, extracts text with position awareness, and converts to clean Markdown — all without OCR. Includes bindings for [Python](docs/python.md) and [Node.js](napi/README.md).

Built by [Firecrawl](https://firecrawl.dev) to handle text-based PDFs locally in under 200ms, skipping expensive OCR services for the ~54% of PDFs that don't need them.

## Features

- **Smart classification** — Detect TextBased, Scanned, ImageBased, or Mixed PDFs in ~10-50ms by sampling content streams. Returns a confidence score (0.0-1.0) and per-page OCR routing.
- **Text extraction** — Position-aware extraction with font info, X/Y coordinates, and automatic multi-column reading order.
- **Markdown conversion** — Headings (H1-H4 via font size ratios), bullet/numbered/letter lists, code blocks (monospace font detection), tables (rectangle-based and heuristic), bold/italic formatting, URL linking, and page breaks.
- **Table detection** — Dual-mode: rectangle-based detection from PDF drawing ops, plus heuristic detection from text alignment. Handles financial tables, footnotes, and continuation tables across pages.
- **CID font support** — ToUnicode CMap decoding for Type0/Identity-H fonts, UTF-16BE, UTF-8, and Latin-1 encodings.
- **Multi-column layout** — Automatic detection of newspaper-style columns, sequential reading order, and RTL text support.
- **Encoding issue detection** — Automatically flags broken font encodings so callers can fall back to OCR.
- **Single document load** — The document is parsed once and shared between detection and extraction, avoiding redundant I/O.
- **Lightweight** — Pure Rust, no ML models, no external services. Single dependency on `lopdf` for PDF parsing.

## Benchmark

Evaluated on the [opendataloader-bench](https://github.com/opendataloader-project/opendataloader-bench) corpus (200 PDFs). Only direct text extraction engines are shown — no OCR, no ML models. Scores are 0-1, higher is better.

| Engine | Overall | Reading Order (NID) | Tables (TEDS) | Headings (MHS) | Speed (200 docs) |
|---|---|---|---|---|---|
| pdf-inspector | 0.78 | 0.87 | 0.59 | 0.57 | 4s |
| opendataloader | 0.84 | 0.91 | 0.49 | 0.74 | 11s |
| pymupdf4llm | 0.73 | 0.89 | 0.40 | 0.41 | 18s |
| markitdown | 0.58 | 0.88 | 0.00 | 0.00 | 8s |

For context, engines that use OCR/ML (docling, marker, mineru) score 0.83-0.88 overall but take 2-180 minutes on the same corpus.

**Where we do well:** Speed (fastest of all engines), reading order, table detection vs other direct-text tools.

**Where we lag:** Heading detection trails opendataloader — many PDFs use bold text at body font size for headings, or headings that are only slightly larger than body text. Table detection trails OCR-based engines that can see visual table structure.

## Quick start

### Python

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

> Full API reference: [docs/python.md](docs/python.md)

### Node.js

```bash
npm install firecrawl-pdf-inspector
```

```javascript
import { readFileSync } from 'fs';
import { processPdf, classifyPdf } from 'firecrawl-pdf-inspector';

const result = processPdf(readFileSync('document.pdf'));
console.log(result.pdfType);   // "TextBased", "Scanned", "ImageBased", "Mixed"
console.log(result.markdown);  // Markdown string or null
```

> Full API reference: [napi/README.md](napi/README.md)

### Rust

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

> Full API refere