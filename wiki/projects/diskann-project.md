# DiskANN Project

> DiskANN is a scalable, fast, and cost-effective approximate nearest neighbor search library for large-scale vector data. It supports real-time updates, simple filters, and uses graph-structured indices to achieve high accuracy and efficiency. Notably, it has been rearchitected in Rust for modern performance and actively developed since 2020.  
> Last updated: 2026-04-11

## Overview
- **Repository**: [microsoft/DiskANN](https://github.com/microsoft/DiskANN)  
- **Purpose**: Enables efficient approximate nearest neighbor (ANN) search for billion-scale vector datasets, with support for dynamic updates and filtering.  
- **Key Features**:  
  - Graph-based indexing for accuracy and scalability.  
  - Transitioned from legacy C++ to Rust for performance and maintainability.  
  - Real-time data freshness and filtering capabilities.  
  - MIT-licensed open-source with active community engagement.  
- **Development**:  
  - Created: 2020-06-18.  
  - Stars: 1,751 | Forks: 399 | Open Issues: 203.  
  - Legacy C++ code retained on the `cpp_main` branch but no longer maintained.  
- **Research**: Backed by multiple academic papers (NeurIPS, arXiv, and Filtered-DiskANN 2023).  
- **Usage**: Python bindings via `diskannpy` package on PyPI.  

## Key Points
- Reimplemented in Rust for modern performance and safety, with the main branch actively updated.  
- Supports billion-point ANN search on single-node systems with high accuracy.  
- Includes filtering and real-time update capabilities for dynamic datasets.  
- Provides both research-grade algorithms and production-ready tools under the MIT License.  

## Sources
- [GitHub](https://github.com/microsoft/DiskANN)
- [원본](raw/ingest/projects/2026-04-11-diskann-project.md)