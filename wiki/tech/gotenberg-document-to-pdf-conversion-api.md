# Gotenberg: Document to PDF Conversion API

> Gotenberg is a developer-friendly Docker-based API for converting various document formats into PDF files. It's notable for its ease of use, robust feature set, and widespread adoption in both production environments and open-source projects.  
> Last updated: 2026-05-05

## Overview

Gotenberg is an open-source API that converts documents to PDF using Docker. It supports a wide variety of file types and provides tools for merging, splitting, watermarking, and encrypting PDFs. It leverages tools like Chromium, LibreOffice, and exiftool to handle HTML, Office documents, and metadata efficiently.

Gotenberg is widely used in production environments by thousands of companies and is integrated into notable open-source projects. It simplifies document conversion by handling all the underlying tools and dependencies automatically. Users only need to send their files via `multipart/form-data`, and Gotenberg returns a PDF file as a result.

The API is written in Go and is MIT licensed, making it a flexible and reliable option for developers. It is actively maintained with a large community and comprehensive documentation. Developers can start using Gotenberg in minutes by running it in Docker or using the provided CLI examples.

## Key Points

- Converts a wide range of documents (HTML, Markdown, Word, Excel, etc.) to PDF
- Uses Docker for easy deployment and containerization
- Supports advanced PDF manipulation, such as merging, splitting, and watermarking
- Backed by tools like Chromium, LibreOffice, and exiftool
- Designed for production use by thousands of companies

## Sources

- [GitHub](https://github.com/gotenberg/gotenberg)
- [원본](raw/ingest/tech/2026-05-05-gotenberg-document-to-pdf-conversion-api.md)