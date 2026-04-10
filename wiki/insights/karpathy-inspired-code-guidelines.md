# Karpathy-Inspired Code Guidelines

> A single CLAUDE.md file to improve Claude Code behavior, derived from Andrej Karpathy's observations on LLM coding pitfalls. Addresses issues like overcomplication, wrong assumptions, and orthogonal code changes through four core principles.  
> Last updated: 2026-04-10

## Overview
This repository (https://github.com/forrestchang/andrej-karpathy-skills) implements Andrej Karpathy's insights to improve code generation by large language models. It identifies three major problems:  
1. LLMs make unverified assumptions and overcomplicate solutions  
2. They modify unrelated code/comments during tasks  
3. They lack verifiable success criteria for execution  

The solution is a set of four principles implemented via a `CLAUDE.md` file:  
- **Think Before Coding**: Surface assumptions and tradeoffs explicitly  
- **Simplicity First**: Eliminate unnecessary abstractions and speculative code  
- **Surgical Changes**: Modify only code directly related to the task  
- **Goal-Driven Execution**: Define verifiable success criteria through tests  

Installation options include a Claude Code plugin or per-project configuration via the CLAUDE.md file. The repository has 11,064 stars and 733 forks as of April 2026.

## Key Points
- **Think Before Coding**: Explicitly state assumptions, avoid silent interpretations, and request clarifications when uncertain  
- **Simplicity First**: Remove unrequested features, abstractions, and error handling that weren't specified  
- **Surgical Changes**: Only modify code directly relevant to the task, preserving existing style and avoiding unrelated refactoring  
- **Goal-Driven Execution**: Transform imperative tasks into testable requirements with verifiable success criteria  

## Sources
- [GitHub](https://github.com/forrestchang/andrej-karpathy-skills)
- [원본](raw/ingest/insights/2026-04-10-karpathy-inspired-code-guidelines.md)