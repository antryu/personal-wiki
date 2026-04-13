# Offline Survival Computer

> Project N.O.M.A.D. is a self-contained, offline-first knowledge and education server packed with critical tools, knowledge, and AI to keep you informed and empowered—anytime, anywhere. Notable for its 23,459 stars and focus on offline accessibility.  
> Last updated: 2026-04-13

## Overview
Project N.O.M.A.D. (Node for Offline Media, Archives, and Data) is a Debian-based offline survival computer designed for critical knowledge access without internet. Key features include:

### Repository Info
- **URL**: [GitHub](https://github.com/Crosstalk-Solutions/project-nomad)
- **Stars**: 23,459
- **Forks**: 2,289
- **Language**: TypeScript
- **License**: Apache License 2.0
- **Created**: 2025-06-24
- **Updated**: 2026-04-13
- **Open Issues**: 56

### Installation
- **Quick Install** (Debian-based OS): Terminal-based script installs all tools accessible via browser.
  ```bash
  sudo apt-get update && sudo apt-get install -y curl && \
  curl -fsSL https://raw.githubusercontent.com/Crosstalk-Solutions/project-nomad/main/install/install_nomad.sh \
    -o install_nomad.sh && sudo bash install_nomad.sh
  ```
- **Advanced Setup**: Docker Compose configuration for manual control (requires Docker familiarity).

### How It Works
N.O.M.A.D. uses a Docker-orchestrated "Command Center" API to manage containerized tools. It automates installation, configuration, and updates for:
- **AI Chat**: Ollama/LM Studio with document RAG (Qdrant).
- **Offline Library**: Kiwix-powered Wikipedia, medical references, and ebooks.
- **Education**: Kolibri for Khan Academy courses.
- **Maps**: ProtoMaps for downloadable regional data.
- **Security**: CyberChef for encryption/analysis.
- **Notes**: FlatNotes for local note-taking.

### What's Included
| Capability | Powered By | What You Get |
|------------|------------|--------------|
| Information Library | Kiwix | Offline Wikipedia, medical references, survival guides |
| AI Assistant | Ollama + Qdrant | Chat with semantic document search |
| Education Platform | Kolibri | Trackable Khan Academy courses |
| Offline Maps | ProtoMaps | Downloadable regional maps |
| Data Tools | CyberChef | Encryption, encoding, analysis |
| Notes | FlatNotes | Local note-taking |
| Benchmark | Community Leaderboard | Hardware scoring |

## Key Points
- Self-contained offline server with AI, education, and survival resources.
- Docker-based architecture simplifies setup and management.
- Supports both quick installation and advanced Docker customization.

## Sources
- [GitHub](https://github.com/Crosstalk-Solutions/project-nomad)
- [원본](raw/ingest/projects/2026-04-13-offline-survival-computer.md)