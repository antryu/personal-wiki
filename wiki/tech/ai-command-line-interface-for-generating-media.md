# AI Command Line Interface for Generating Media

> A minimalist and powerful CLI for generating images, video, and text from the terminal using AI models, with support for multi-model comparison, piping, and inline previews. It's notable for its simplicity and integration with the Vercel AI SDK and Gateway.
> Last updated: 2026-05-05

## Overview

The **ai-cli** is a terminal-based tool that allows developers and AI enthusiasts to generate media using AI models with minimal commands. It leverages the [Vercel AI SDK](https://sdk.vercel.ai) and [AI Gateway](https://vercel.com/docs/ai-gateway) to access hundreds of AI models from different providers, all via the command line.

The tool supports generating **images**, **videos**, and **text** with a unified command structure. It is especially useful for developers who prefer a lightweight, scriptable, and fast interface over GUI tools. The CLI also supports piping input from files or other commands (e.g., `git diff` or `cat notes.txt`), enabling integration into workflows and automation scripts.

Key features include:
- Support for multiple AI models simultaneously using the same command.
- Inline previews of generated images and videos in terminals that support the Kitty graphics protocol.
- A clean interface with optional JSON metadata output for programmatic use.
- Output files are saved with clear naming conventions, or can be redirected to stdout.

## Key Points
- Easy access to a wide range of AI models via the Vercel AI Gateway.
- Supports multi-model comparisons, allowing side-by-side generation from different AI models.
- Can be used with piping for integration into automation scripts and workflows.

## Sources
- [GitHub](https://github.com/vercel-labs/ai-cli)
- [원본](raw/ingest/tech/2026-05-05-ai-command-line-interface-for-generating-media.md)