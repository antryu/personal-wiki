# Jujutsu VCS

> A Git-compatible version control system (VCS) designed for simplicity and power through storage abstraction and integration of concepts from multiple VCS traditions.  
> Last updated: 2026-04-15

## Overview

### Repository Information
- **URL**: [https://github.com/jj-vcs/jj](https://github.com/jj-vcs/jj)  
- **Stars**: 27,999  
- **Forks**: 1,005  
- **Language**: Rust  
- **License**: Apache License 2.0  
- **Created**: 2020-12-18  
- **Updated**: 2026-04-15  
- **Open Issues**: 1,047  

### README Highlights
- Logo and badges for release version, license, and community channels (Discord, IRC).  
- Direct links to **Homepage**, **Installation**, **Getting Started**, **Roadmap**, and **Contributing**.  

### Introduction
Jujutsu is a version control system (VCS) that abstracts storage systems (e.g., Git, Mercurial, Piper/CitC) to provide a unified interface for developers. It prioritizes usability for both solo and team workflows while maintaining compatibility with Git tools. Key features include:
- **Storage Agnosticism**: Uses Git as the default backend for files/commits but stores metadata (e.g., branches) in custom storage.  
- **Design Inspiration**: Combines concepts from Git (performance), Mercurial (revsets, anonymous branches), and Darcs (conflict-first-class objects).  
- **Advanced Workflows**: Includes history rewriting, template-driven output formatting, and conflict resolution as first-class operations.  

## Key Points
- **Git Compatibility**: Works seamlessly with existing Git tools and repositories.  
- **Modular Architecture**: Separates storage systems from version control logic, enabling support for diverse backends.  
- **Developer-Focused UX**: Simplifies branching, conflict resolution, and history management with intuitive primitives.  
- **Cross-System Integration**: Leverages best practices from Git, Mercurial, and Darcs to create a unified workflow.  

## Sources
- [GitHub](https://github.com/jj-vcs/jj)  
- [원본](raw/ingest/tech/2026-04-15-jujutsu-vcs.md)