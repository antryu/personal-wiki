# Rust GPUI Desktop Components

> Rust GPUI Desktop Components provides a rich set of cross-platform UI elements for desktop applications using GPUI, offering native aesthetics and high performance. Notable for its extensive component library and modern design, it supports themes, flexible layouts, and integrates with LSP for code editors.  
> Last updated: 2026-04-12

## Overview

### Repository Info
- **URL**: [GitHub](https://github.com/longbridge/gpui-component)
- **Stars**: 10,933
- **Forks**: 546
- **Language**: Rust
- **License**: Other
- **Created**: 2024-06-13
- **Updated**: 2026-04-12
- **Topics**: desktop-application, gpui, rust, uikit
- **Open Issues**: 73

### Features
- **Richness**: 60+ cross-platform desktop UI components.
- **Native**: Combines macOS/Windows controls with shadcn/ui design for modern aesthetics.
- **Ease of Use**: Stateless `RenderOnce` components for simplicity.
- **Customizable**: `Theme` and `ThemeColor` support for multi-theme configurations.
- **Versatile**: Supports `xs`, `sm`, `md`, and `lg` component sizes.
- **Flexible Layout**: Dock layouts, resizing, and freeform (Tiles) arrangements.
- **High Performance**: Virtualized Table and List components for large datasets.
- **Content Rendering**: Native Markdown and HTML rendering.
- **Charting**: Built-in data visualization tools.
- **Editor**: High-performance code editor (up to 200K lines) with LSP integration.
- **Syntax Highlighting**: Tree Sitter-powered syntax highlighting for editors and markdown.

### Showcase
- [Gallery](https://longbridge.github.io/gpui-component/gallery/)
- [Longbridge Pro](https://longbridge.com/desktop) (built with GPUI Component)

### Usage
**Add dependencies to `Cargo.toml`:**
```toml
gpui = "0.2.2"
gpui-component = "0.5.1"
```

**Basic Example:**
```rust
use gpui::*;
use gpui_component::{button::*, *};

pub struct HelloWorld;
impl Render for HelloWorld {
    fn render(&mut self, _: &mut Window, _: &mut Context<Self>) -> impl IntoElement {
        div()
            .v_flex()
            .gap_2()
            .size_full()
            .items_center()
            .justify_center()
            .child("Hello, World!")
            .child(
                Button::new("ok")
                    .primary()
                    .label("Let's Go!")
                    .on_click(|_, _, _| println!("Clicked!")),
            )
    }
}

fn main() {
    let app = Application::new();

    app.run(move |cx| {
        gpui_component::init(cx);
        cx.spawn(async move |cx| {
            cx.open_window(WindowOptions::default(), |window, cx| {
                let view = cx.new(|_| HelloWorld);
                cx.new(|cx| Root::new(view, window, cx))
            })
            .expect("Failed to open window");
        })
        .detach();
    });
}
```

### Development
- **Run Gallery**: `cargo run`
- **Examples**:
  ```bash
  # Code editor with LSP
  cargo run --example editor
  # Dock layout
  cargo run --example dock
  # Markdown rendering
  cargo run --example markdown
  # HTML rendering
  cargo run --example html
  ```

## Key Points
- 60+ cross-platform UI components with native macOS/Windows aesthetics.
- High-performance virtualized tables and code editors with LSP support.
- Flexible layouts (dock, resizing, freeform) and customizable theming.
- Native Markdown/HTML rendering and Tree Sitter syntax highlighting.

## Sources
- [GitHub](https://github.com/longbridge/gpui-component)
- [원본](raw/ingest/tech/2026-04-12-rust-gpui-desktop-components.md)