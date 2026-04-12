# Real-World Minecraft Generator

> Generates real-world locations in Minecraft with high detail using OpenStreetMap data. Notable for its popularity (14.8k stars) and cross-platform support for Java and Bedrock editions.
> Last updated: 2026-04-12

## Overview
### Repository Info
- **URL**: [GitHub](https://github.com/louis-e/arnis)  
- **Stars**: 14,841  
- **Forks**: 1,182  
- **Language**: Rust  
- **License**: Apache License 2.0  
- **Created**: 2022-09-10  
- **Topics**: `maps`, `minecraft`, `openstreetmap`, `rust`, `tauri`  
- **Open Issues**: 108  

### Features
- Generates Minecraft worlds (Java 1.17+ and Bedrock) with real-world geography, topography, and architecture.
- Uses OpenStreetMap and elevation data for accuracy.
- Supports customization of world scale, spawn points, and building interiors.
- Includes a GUI for map selection and generation, plus CLI tools for advanced users.
- Companion tool [MapSmith](https://arnismc.com/mapsmith/) enables browser-based generation for mobile/larger maps.

### Usage
- Download releases or compile via `cargo run`.
- Select a geographic area using a map tool and click *Start Generation*.
- CLI example:  
  ```bash
  cargo run --no-default-features -- --terrain --path="C:/YOUR_PATH/.minecraft/saves/worldname" --bbox="min_lat,min_lng,max_lat,max_lng"
  ```

### Documentation
- Full documentation available in the [GitHub Wiki](https://github.com/louis-e/arnis/wiki/).
- Covers technical explanations, FAQs, contribution guidelines, and roadmaps.

### Open Source Contributions
- **Objectives**:  
  - Modularity for maintainability.  
  - Performance optimization.  
  - Comprehensive in-code documentation.  
  - Cross-platform support (Windows, macOS, Linux).  
- **Contribution Workflow**:  
  Fork the repo, submit pull requests, and adhere to the project's key objectives.  
  Nix users can run:  
  ```bash
  nix run github:louis-e/arnis -- --terrain --path=YOUR_PATH/.minecraft
  ```

## Key Points
- High-accuracy Minecraft world generation using real-world geospatial data.
- Actively maintained with 108 open issues and regular releases.
- Open-source with a strong focus on performance, modularity, and user experience.

## Sources
- [GitHub](https://github.com/louis-e/arnis)
- [원본](raw/ingest/projects/2026-04-12-real-world-minecraft-generator.md)