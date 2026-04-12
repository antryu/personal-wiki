<!-- GitHub Trending: Rust | 14,839 stars | +82 today -->

# louis-e/arnis

> Generate any location from the real world in Minecraft with a high level of detail.

## Repository Info
- **URL**: https://github.com/louis-e/arnis
- **Stars**: 14,841
- **Forks**: 1,182
- **Language**: Rust
- **License**: Apache License 2.0
- **Created**: 2022-09-10
- **Updated**: 2026-04-12
- **Topics**: maps, minecraft, openstreetmap, osm, overpass-api, rust, tauri
- **Open Issues**: 108

## README (excerpt)
<img src="assets/git/banner.png" width="100%" alt="Banner">

# Arnis [![CI Build Status](https://github.com/louis-e/arnis/actions/workflows/ci-build.yml/badge.svg)](https://github.com/louis-e/arnis/actions) [<img alt="GitHub Release" src="https://img.shields.io/github/v/release/louis-e/arnis" />](https://github.com/louis-e/arnis/releases) [<img alt="GitHub Downloads (all assets, all releases" src="https://img.shields.io/github/downloads/louis-e/arnis/total" />](https://github.com/louis-e/arnis/releases) [![Download here](https://img.shields.io/badge/Download-here-green)](https://github.com/louis-e/arnis/releases) [![Discord](https://img.shields.io/discord/1326192999738249267?label=Discord&color=%237289da)](https://discord.gg/mA2g69Fhxq)

Arnis creates complex and accurate Minecraft Java Edition (1.17+) and Bedrock Edition worlds that reflect real-world geography, topography, and architecture.

This free and open source project is designed to handle large-scale geographic data from the real world and generate detailed Minecraft worlds. The algorithm processes geospatial data from OpenStreetMap as well as elevation data to create an accurate Minecraft representation of terrain and architecture.
Generate your hometown, big cities, and natural landscapes with ease!

_**Want mobile generation or larger map sizes?** [MapSmith](https://arnismc.com/mapsmith/) generates worlds in your browser, no install required._

![Minecraft Preview](assets/git/preview.jpg)
<i>This GitHub page and [arnismc.com](https://arnismc.com) are the only official project websites. Do not download Arnis from any other website.</i>

## :keyboard: Usage
<img width="60%" src="assets/git/gui.png"><br>
Download the [latest release](https://github.com/louis-e/arnis/releases/) or [compile](#trophy-open-source) the project on your own.

Choose your area on the map using the rectangle tool and select your Minecraft world - then simply click on <i>Start Generation</i>!
Additionally, you can customize various generation settings, such as world scale, spawn point, or building interior generation.

## 📚 Documentation

<img src="assets/git/documentation.png" width="100%" alt="Banner">

Full documentation is available in the [GitHub Wiki](https://github.com/louis-e/arnis/wiki/), covering topics such as technical explanations, FAQs, contribution guidelines and roadmaps.

[backgroundvid.webm](https://github.com/user-attachments/assets/420acc19-a850-418e-8397-1a45b05582ab)

## :trophy: Open Source
#### Key objectives of this project
- **Modularity**: Ensure that all components (e.g., data fetching, processing, and world generation) are cleanly separated into distinct modules for better maintainability and scalability.
- **Performance Optimization**: We aim to maintain strong performance and fast world generation.
- **Comprehensive Documentation**: Detailed in-code documentation for a clear structure and logic.
- **User-Friendly Experience**: Focus on making the project easy to use for end users.
- **Cross-Platform Support**: We want this project to run smoothly on Windows, macOS, and Linux.

#### How to contribute
This project is open source and welcomes contributions from everyone! Whether you're interested in fixing bugs, improving performance, adding new features, or enhancing documentation, your input is valuable. Simply fork the repository, make your changes, and submit a pull request. Please respect the above-mentioned key objectives. Contributions of all levels are appreciated, and your efforts help improve this tool for everyone.

Command line Build: ```cargo run --no-default-features -- --terrain --path="C:/YOUR_PATH/.minecraft/saves/worldname" --bbox="min_lat,min_lng,max_lat,max_lng"```<br>
GUI Build: ```cargo run```<br>

After your pull request is merged, I will take care of regularly creating update releases which will include your changes.

If you are using Nix, you can run the program directly with `nix run github:louis-e/arnis -- --terrain --path=YOUR_PATH/.mine