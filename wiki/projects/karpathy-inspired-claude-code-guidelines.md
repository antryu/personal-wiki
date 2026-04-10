# Karpathy-Inspired Claude Code Guidelines

> A single `CLAUDE.md` file to improve Claude Code behavior, derived from Andrej Karpathy's observations on LLM coding pitfalls. The repo addresses common issues like overcomplication, hidden assumptions, and orthogonal edits by enforcing four structured principles for coding.
> Last updated: 2026-04-10

## Overview
This repository, **[andrej-karpathy-skills](https://github.com/forrestchang/andrej-karpathy-skills)**, provides a framework to enhance Claude Code reliability by addressing Andrej Karpathy's identified shortcomings in LLM coding behavior. With 11,093 stars and 734 forks, it offers a solution to systemic issues such as overcomplicated code, silent assumption-making, and unnecessary modifications to unrelated code.

### Repository Info
- **URL**: https://github.com/forrestchang/andrej-karpathy-skills  
- **Stars**: 11,093  
- **Forks**: 734  
- **Language**: N/A  
- **License**: N/A  
- **Created**: 2026-01-27  
- **Updated**: 2026-04-10  
- **Open Issues**: 25  

### The Problems
Andrej Karpathy highlights critical LLM coding flaws:
- Silent assumption-making without clarification  
- Overcomplication of code and APIs  
- Unintended modifications to unrelated code/comments  
- Lack of verifiable success criteria  

### The Solution
The repository introduces **four principles** to mitigate these issues:
| Principle | Addresses |
|-----------|---|
| **Think Before Coding** | Wrong assumptions, hidden confusion, missing tradeoffs |
| **Simplicity First** | Overcomplication, bloated abstractions |
| **Surgical Changes** | Orthogonal edits, touching code you shouldn't |
| **Goal-Driven Execution** | Leverage through tests-first, verifiable success criteria |

### Principle Details
1. **Think Before Coding**  
   - Explicitly state assumptions  
   - Present multiple interpretations when ambiguous  
   - Push back on overly complex solutions  
   - Stop and clarify when confused  

2. **Simplicity First**  
   - Avoid speculative features/abstractions  
   - Remove unnecessary error handling/configurability  
   - Simplify code if a senior engineer would deem it overcomplicated  

3. **Surgical Changes**  
   - Only modify code directly related to the task  
   - Preserve existing style and avoid "fixing" unrelated elements  
   - Clean up only dead code created by your changes  

4. **Goal-Driven Execution**  
   - Transform tasks into verifiable tests (e.g., "Write tests for invalid inputs, then make them pass")  
   - Use structured step-by-step plans with verification checks  

### Installation
**Option A: Claude Code Plugin**  
```bash
/plugin marketplace add forrestchang/andrej-karpathy-skills
/plugin install andrej-karpathy-skills@karpathy-skills
```

**Option B: Per-Project CLAUDE.md**  
```bash
curl -o CLAUDE.md https://raw.githubusercontent.com/forrestchang/andrej-karpathy-skills/main/CLAUDE.md
```

## Key Points
- Enforces clarity through explicit assumptions and tradeoff analysis  
- Prioritizes minimal, purpose-driven code over overengineered solutions  
- Restricts changes to only what is necessary for the task  
- Transforms vague tasks into testable, verifiable goals  

## Sources
- [GitHub](https://github.com/forrestchang/andrej-karpathy-skills)  
- [원본](raw/ingest/projects/2026-04-10-karpathy-inspired-claude-code-guidelines.md)