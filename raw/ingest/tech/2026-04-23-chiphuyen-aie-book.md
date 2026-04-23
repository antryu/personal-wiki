<!-- GitHub Trending: Jupyter Notebook | 15,149 stars | +214 today -->

# chiphuyen/aie-book

> [WIP] Resources for AI engineers. Also contains supporting materials for the book AI Engineering (Chip Huyen, 2025)

## Repository Info
- **URL**: https://github.com/chiphuyen/aie-book
- **Stars**: 15,149
- **Forks**: 2,182
- **Language**: Jupyter Notebook
- **License**: N/A
- **Created**: 2024-12-03
- **Updated**: 2026-04-23
- **Topics**: N/A
- **Open Issues**: 16

## README (excerpt)
# AI Engineering book and other resources
> _This repo will be updated with more resources in the next few weeks._

- [About the book AI Engineering](#about-the-book)
    - [Table of contents](ToC.md)
    - [Chapter summaries](chapter-summaries.md)
    - [Study notes](study-notes.md)
- [AI engineering resources](resources.md)
- [Prompt examples](prompt-examples.md)
- [Case studies](case-studies.md)
- [Misalignment AI](misalignment.md)
- [Appendix](appendix.md)
- Fun tools:
    
    - [ChatGPT and Claude conversation heatmap generator](scripts/ai-heatmap.ipynb)
- And more ...

## About the book
The availability of foundation models has transformed AI from a specialized discipline into a powerful development tool everyone can use. This book covers the end-to-end process of adapting foundation models to solve real-world problems, encompassing tried-and-true techniques from other engineering fields and techniques emerging with foundation models.

[<img src="assets/aie-cover.png" width="250">](https://amzn.to/49j1cGS)[<img src="assets/aie-cover-back.png" width="250">](https://amzn.to/49j1cGS)

The book is available on:
- [Amazon](https://amzn.to/49j1cGS)
- [O'Reilly](https://oreillymedia.pxf.io/c/5719111/2146021/15173)
- [Kindle](https://amzn.to/3Vq2ryu)

and most places where technical books are sold.

_This is NOT a tutorial book, so it doesn't have a lot of code snippets._

## What this book is about
This book provides a framework for adapting foundation models, which include both large language models (LLMs) and large multimodal models (LMMs), to specific applications. It not only outlines various solutions for building an AI application but also raises questions you can ask to evaluate the best solution for your needs. Here are just some of the many questions that this book can help you answer:

1. Should I build this AI application?
1. How do I evaluate my application? Can I use AI to evaluate AI outputs?
1. What causes hallucinations? How do I detect and mitigate hallucinations?
1. What are the best practices for prompt engineering?
1. Why does RAG work? What are the strategies for doing RAG?
1. What’s an agent? How do I build and evaluate an agent?
1. When to finetune a model? When not to finetune a model?
1. How much data do I need? How do I validate the quality of my data?
1. How do I make my model faster, cheaper, and secure?
1. How do I create a feedback loop to improve my application continually?

The book will also help you navigate the overwhelming AI landscape: types of models, evaluation benchmarks, and a seemingly infinite number of use cases and application patterns.

The content in this book is illustrated using actual case studies, many of which I’ve worked on, backed by ample references and extensively reviewed by experts from a wide range of backgrounds. Even though the book took two years to write, it draws from my experience working with language models and ML systems from the last decade.

Like my previous book, _[Designing Machine Learning Systems (DMLS)](https://amzn.to/4fXVZH2)_, this book focuses on the fundamentals of AI engineering instead of any specific tool or API. Tools become outdated quickly, but fundamentals should last longer.

### Reading _AI Engineering_ (AIE) with _Designing Machine Learning Systems_ (DMLS)
AIE can be a companion to DMLS. DMLS focuses on building applications on top of traditional ML models, which involves more tabular data annotations, feature engineering, and model training. AIE focuses on building applications on top of foundation models, which involves more prompt engineering, context construction, and parameter-efficient finetuning. Both books are self-contained and modular, so you can read either book independently.

Since foundation models are ML models, some concepts are relevant to working with both. If a topic is relevant to AIE but has been discussed extensively in DMLS, it’ll still be covered in this book, but to a lesser extent, with pointers to relevant resou