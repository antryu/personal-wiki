# egui: Rust GUI Library

> egui is a simple, fast, and highly portable immediate mode GUI library for Rust, designed to work seamlessly on web and native platforms. It is notable for its ease of use, cross-platform compatibility, and integration with game engines and Rust ecosystems.  
> Last updated: 2026-04-12

## Overview

### Repository Info
- **URL**: [https://github.com/emilk/egui](https://github.com/emilk/egui)  
- **Stars**: 28,715  
- **Forks**: 2,003  
- **Language**: Rust  
- **License**: Apache License 2.0  
- **Created**: 2019-01-13  
- **Updated**: 2026-04-12  
- **Topics**: `egui`, `game-development`, `gamedev`, `gui`, `imgui`, `rust`, `wasm`  
- **Open Issues**: 1,097  

### Key Features
- **Immediate Mode GUI**: Simplifies UI development by regenerating the interface each frame, ideal for dynamic applications.  
- **Cross-Platform Support**: Runs on web (Wasm/WebGL), Linux, Mac, Windows, Android, and integrates with game engines.  
- **Official Framework**: [`eframe`](https://github.com/emilk/egui/tree/main/crates/eframe) enables native and web app development.  
- **Lightweight & Flexible**: Requires only the ability to draw textured triangles, making it adaptable to diverse rendering pipelines.  

### Example Code
```rust
ui.heading("My egui Application");
ui.horizontal(|ui| {
    ui.label("Your name: ");
    ui.text_edit_singleline(&mut name);
});
ui.add(egui::Slider::new(&mut age, 0..=120).text("age"));
if ui.button("Increment").clicked() {
    age += 1;
}
ui.label(format!("Hello '{name}', age {age}"));
ui.image(egui::include_image!("ferris.png"));
```

![Dark mode](https://github.com/user-attachments/assets/3b446d29-99d8-4c82-86bb-4d8ef0516017)  
![Light mode](https://github.com/user-attachments/assets/a5e7da93-89a8-4ba0-86b8-0fa2228a4f62)  

### Usage & Integration
- **Quick Start**: Use the [eframe template](https://github.com/emilk/eframe_template/) for web apps or explore examples in the `examples/` folder.  
- **Integrations**: Compatible with game engines like Bevy, Amethyst, and Godot via custom backends.  
- **Demo**: [Web Demo](https://www.egui.rs/#demo) (Wasm/WebGL) or run locally with `cargo run --release -p egui_demo_app`.  

### Community & Resources
- **Documentation**: [docs.rs/egui](https://docs.rs/egui)  
- **Discord**: [Join the egui server](https://discord.gg/JFcEma9bJq)  
- **Contribution**: Follow [Contributing Guidelines](https://github.com/emilk/egui/blob/main/CONTRIBUTING.md)  

## Key Points
- **Ease of Use**: Prioritizes simplicity for developers, especially for web and game UIs.  
- **High Performance**: Optimized for fast rendering and minimal overhead.  
- **Extensible**: Customizable widgets and plugins for advanced use cases.  

## Sources
- [GitHub](https://github.com/emilk/egui)  
- [원본](raw/ingest/tech/2026-04-12-egui-rust-gui-library.md)