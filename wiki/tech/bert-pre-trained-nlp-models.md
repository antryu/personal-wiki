# BERT: Pre-Trained NLP Models

> This repository provides TensorFlow code and pre-trained BERT models, including 24 smaller variants for resource-constrained environments. It enables research on compact models through knowledge distillation and offers a range of configurations for natural language processing tasks.  
> Last updated: 2026-04-11

## Overview

### Repository Info
- **URL**: [https://github.com/google-research/bert](https://github.com/google-research/bert)  
- **Stars**: 39,974  
- **Forks**: 9,707  
- **Language**: Python  
- **License**: Apache License 2.0  
- **Created**: 2018-10-25  
- **Updated**: 2026-04-11  
- **Topics**: `google`, `natural-language-processing`, `natural-language-understanding`, `nlp`, `tensorflow`  
- **Open Issues**: 881  

### Model Variants
Released on March 11, 2020, the repository includes **24 smaller BERT models** (English, uncased) with varying layer counts (L=2 to L=12) and hidden sizes (H=128 to H=768). These models are optimized for environments with limited computational resources and are particularly effective in **knowledge distillation** scenarios, where they learn from larger "teacher" models. Key variants include:
- **BERT-Tiny** (L=2, H=128)  
- **BERT-Mini** (L=4, H=256)  
- **BERT-Small** (L=4, H=512)  
- **BERT-Medium** (L=8, H=512)  
- **BERT-Base** (L=12, H=768)  

### Performance Metrics
The models achieve competitive results on GLUE benchmarks. For example:
- **BERT-Tiny**: 64.2 (overall score)  
- **BERT-Mini**: 65.8  
- **BERT-Small**: 71.2  
- **BERT-Medium**: 73.5  

Full GLUE scores and download links for all models are available in the repository.

## Key Points
- Introduces 24 compact BERT models for low-resource environments.  
- Models support knowledge distillation for improved efficiency.  
- Includes GLUE benchmark results and hyperparameter guidelines.  
- Open-sourced under Apache License 2.0 for broad accessibility.  

## Sources
- [GitHub](https://github.com/google-research/bert)  
- [원본](raw/ingest/tech/2026-04-11-bert-pre-trained-nlp-models.md)