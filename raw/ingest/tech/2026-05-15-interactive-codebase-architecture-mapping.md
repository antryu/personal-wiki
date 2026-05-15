<!-- GitHub Trending: Python | 1,595 stars | +37 today -->

# CodeBoarding/CodeBoarding

> Interactive architecture diagrams for codebases

## Repository Info
- **URL**: https://github.com/CodeBoarding/CodeBoarding
- **Stars**: 1,595
- **Forks**: 144
- **Language**: Python
- **License**: MIT License
- **Created**: 2025-04-08
- **Updated**: 2026-05-15
- **Topics**: agents, aiagentic, codedocs, codedocumentator, explainability, golang, hacktoberfest, language-server-client, language-server-protocol, llms, lsp, lsp-client, python3, static-analysis, typescipt, typescript
- **Open Issues**: 25

## README (excerpt)
# CodeBoarding

See what your AI is building before it breaks.

CodeBoarding gives developers and coding agents a visual map of a codebase. It combines static analysis with LLM reasoning to generate architecture diagrams, component-level documentation, and navigable outputs you can use in your IDE, CI, and docs.

[Website](https://codeboarding.org) · [Open VSX extension](https://open-vsx.org/extension/CodeBoarding/codeboarding) · [Explore examples](https://codeboarding.org/diagrams) · [VS Code extension](https://marketplace.visualstudio.com/items?itemName=Codeboarding.codeboarding) · [GitHub Action](https://github.com/marketplace/actions/codeboarding-diagram-first-documentation) ·[Discord](https://discord.gg/T5zHTJYFuy)

[![CodeBoarding demo](https://gist.githubusercontent.com/ivanmilevtues/1c4f921066613516cfd7b938014a6877/raw/611aec7711556807860ff2e1679a5dc4c0c23fed/CodeBoarding_extension_demo.gif)](https://open-vsx.org/extension/CodeBoarding/codeboarding)

Install the extension from Open VSX.

[![JavaScript](https://img.shields.io/badge/JavaScript-222222?style=flat-square&logo=javascript&logoColor=F7DF1E)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Java](https://img.shields.io/badge/Java-E76F00?style=flat-square&logo=openjdk&logoColor=white)](https://www.java.com/)
[![Python](https://img.shields.io/badge/Python-3776AB?style=flat-square&logo=python&logoColor=white)](https://www.python.org/)
[![Go](https://img.shields.io/badge/Go-00ADD8?style=flat-square&logo=go&logoColor=white)](https://go.dev/)
[![PHP](https://img.shields.io/badge/PHP-777BB4?style=flat-square&logo=php&logoColor=white)](https://www.php.net/)
[![Rust](https://img.shields.io/badge/Rust-000000?style=flat-square&logo=rust&logoColor=white)](https://www.rust-lang.org/)
[![C#](https://custom-icon-badges.demolab.com/badge/C%23-512BD4.svg?style=flat-square&logo=cshrp&logoColor=white)](https://learn.microsoft.com/en-us/dotnet/csharp/)

## Few use cases:

- Keep architecture visible while agents code.
- Review AI-generated changes with system context before they turn into hidden debt.
- Understand large repositories faster with layered diagrams and component breakdowns.
- Share the same visual model across local workflows, IDEs, pull requests, and docs.

## What CodeBoarding generates

- High-level system architecture diagrams.
- Deeper component diagrams for important subsystems.
- Markdown documentation in `.codeboarding/`.
- Mermaid output that is easy to embed in docs and PRs.
- Incremental updates when only part of the codebase changes.

## How it works

```mermaid
graph LR
    Application_Orchestrator_Repository_Manager["Application Orchestrator & Repository Manager"]
    LLM_Agent_Core["LLM Agent Core"]
    Static_Code_Analyzer["Static Code Analyzer"]
    Agent_Tooling_Interface["Agent Tooling Interface"]
    Incremental_Analysis_Engine["Incremental Analysis Engine"]
    Documentation_Diagram_Generator["Documentation & Diagram Generator"]
    Application_Orchestrator_Repository_Manager -- "Orchestrator initiates analysis workflow, leveraging incremental updates based on detected code changes." --> Incremental_Analysis_Engine
    Application_Orchestrator_Repository_Manager -- "Orchestrator passes project context and triggers the main analysis workflow for the LLM Agent." --> LLM_Agent_Core
    Incremental_Analysis_Engine -- "Incremental engine requests static analysis for specific code segments (new or changed)." --> Static_Code_Analyzer
    Static_Code_Analyzer -- "Static analyzer provides analysis results to the incremental engine for caching." --> Incremental_Analysis_Engine
    LLM_Agent_Core -- "LLM Agent invokes specialized tools to interact with the codebase and analysis data." --> Agent_Tooling_Interface
    Agent_Tooling_Interface -- "Agent tools query the static analysis engine for detailed co