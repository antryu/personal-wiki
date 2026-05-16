# WhatsApp MCP Server

> WhatsApp MCP Server is a Model Context Protocol (MCP) server that allows users to interact with their WhatsApp data via an LLM agent. It enables searching, reading, and sending messages directly through a personal WhatsApp account using the WhatsApp web multidevice API. This tool is notable for its integration with AI tools like Anthropic's Claude, allowing private messaging access while cautioning users about potential data risks.
> Last updated: 2026-05-16

## Overview

The WhatsApp MCP Server is a server implementation that connects to a user's personal WhatsApp account via the WhatsApp Web API to provide access to messages, media, and contacts. The server stores all data locally in a SQLite database and interacts with LLM tools when requested. The server is written in Go and is designed for integration with AI tools like Anthropic's Claude or Cursor. It supports sending and receiving various types of media, including images, videos, and audio.

Key features include:

- Direct access to WhatsApp messages, including text and media
- Integration with LLM agents (e.g., Claude)
- Local storage of all data in a SQLite database
- Support for sending and receiving messages and media
- Compatibility with tools like FFmpeg for audio file conversion

The server is open-source and available on GitHub, and it uses the MIT license.

## Key Points
- Connects to a personal WhatsApp account via the WhatsApp Web API.
- All messages are stored locally, and only accessed by LLM agents when requested.
- Supports sending and receiving text, images, videos, documents, and audio.
- Integrates with AI tools like Claude and Cursor.
- Requires Go, Python 3.6+, and FFmpeg for full functionality.
- Includes a local SQLite database for storing WhatsApp data.
- Warns users about data privacy risks, including the "lethal trifecta" of AI model injection and data exfiltration.

## Sources
- [GitHub](https://github.com/lharries/whatsapp-mcp)
- [원본](raw/ingest/tech/2026-05-16-whatsapp-mcp-server.md)