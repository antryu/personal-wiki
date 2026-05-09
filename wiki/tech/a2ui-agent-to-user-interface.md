# A2UI: Agent-to-User Interface

> A2UI is an open-source project designed to allow AI agents to generate or populate rich user interfaces through a declarative JSON format. It enables agents to "speak UI" and be rendered by clients across multiple frameworks, ensuring security, expressiveness, and interoperability. Last updated: 2026-05-09

## Overview

A2UI is an open standard and set of libraries that allow AI agents to create and manage user interfaces through a declarative, secure data format. Instead of relying on code execution, A2UI sends UI intent in a JSON format that is rendered by client applications using native component libraries such as Flutter, Angular, or React. This ensures that agent-generated UIs are expressive and safe, avoiding the risks associated with running arbitrary code from an LLM.

Key components include:

- **Declarative UI Format**: A flat list of UI components with ID references that are easy for AI agents to generate and update incrementally.
- **Framework Agnosticism**: A2UI decouples the UI structure from the implementation, enabling compatibility across multiple client frameworks.
- **Security First Design**: The client application maintains a catalog of trusted components, and the agent can only render those pre-approved UI elements.

A2UI is currently in v0.8 (public preview), with a focus on collaboration and feedback. It is designed to be flexible and adaptable, with an open registry system allowing developers to map agent components to custom client implementations.

## Key Points

- A2UI enables AI agents to generate and manage UIs via a declarative format, avoiding security risks associated with code execution.
- The project supports cross-platform and cross-framework rendering using native UI components.
- It emphasizes security through pre-approved component catalogs and developer-controlled sandboxing.
- A2UI is in early public preview, with a focus on gathering contributions and feedback.

## Sources

- [GitHub](https://github.com/google/A2UI)
- [원본](raw/ingest/tech/2026-05-09-a2ui-agent-to-user-interface.md)