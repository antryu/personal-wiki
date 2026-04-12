<!-- GitHub Trending: Rust | 10,933 stars | +34 today -->

# longbridge/gpui-component

> Rust GUI components for building fantastic cross-platform desktop application by using GPUI.

## Repository Info
- **URL**: https://github.com/longbridge/gpui-component
- **Stars**: 10,933
- **Forks**: 546
- **Language**: Rust
- **License**: Other
- **Created**: 2024-06-13
- **Updated**: 2026-04-12
- **Topics**: desktop-application, gpui, rust, uikit
- **Open Issues**: 73

## README (excerpt)
# GPUI Component

[English](./README.md) | [简体中文](./README.zh-CN.md)

[![Build Status](https://github.com/longbridge/gpui-component/actions/workflows/ci.yml/badge.svg)](https://github.com/longbridge/gpui-component/actions/workflows/ci.yml) [![Docs](https://docs.rs/gpui-component/badge.svg)](https://docs.rs/gpui-component/) [![Crates.io](https://img.shields.io/crates/v/gpui-component.svg)](https://crates.io/crates/gpui-component)

UI components for building fantastic desktop applications using [GPUI](https://gpui.rs).

## Features

- **Richness**: 60+ cross-platform desktop UI components.
- **Native**: Inspired by macOS and Windows controls, combined with shadcn/ui design for a modern experience.
- **Ease of Use**: Stateless `RenderOnce` components, simple and user-friendly.
- **Customizable**: Built-in `Theme` and `ThemeColor`, supporting multi-theme and variable-based configurations.
- **Versatile**: Supports sizes like `xs`, `sm`, `md`, and `lg`.
- **Flexible Layout**: Dock layout for panel arrangements, resizing, and freeform (Tiles) layouts.
- **High Performance**: Virtualized Table and List components for smooth large-data rendering.
- **Content Rendering**: Native support for Markdown and simple HTML.
- **Charting**: Built-in charts for visualizing your data.
- **Editor**: High performance code editor (Up to 200K lines for stable performance) with LSP (diagnostics, completion, hover, etc).
- **Syntax Highlighting**: Syntax highlighting for editor and markdown components using Tree Sitter.

## Showcase

https://longbridge.github.io/gpui-component/gallery/

Here is the first application: [Longbridge Pro](https://longbridge.com/desktop), built using GPUI Component.

<img width="1763" alt="Image" src="https://github.com/user-attachments/assets/e1ecb9c3-2dd3-431e-bd97-5a819c30e551" />

## Usage

```toml
gpui = "0.2.2"
gpui-component = "0.5.1"
```

### Basic Example

```rs
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
        // This must be called before using any GPUI Component features.
        gpui_component::init(cx);

        cx.spawn(async move |cx| {
            cx.open_window(WindowOptions::default(), |window, cx| {
                let view = cx.new(|_| HelloWorld);
                // This first level on the window, should be a Root.
                cx.new(|cx| Root::new(view, window, cx))
            })
            .expect("Failed to open window");
        })
        .detach();
    });
}
```

### Icons

GPUI Component has an `Icon` element, but it does not include SVG files by default.

The example uses [Lucide](https://lucide.dev) icons, but you can use any icons you like. Just name the SVG files as defined in [IconName](https://github.com/longbridge/gpui-component/blob/main/crates/ui/src/icon.rs#L86). You can add any icons you need to your project.

## Development

### Desktop Gallery (Story)

The `story` crate is a gallery application that showcases all available components. Run it with:

```bash
cargo run
```

### Examples

Some important examples are built into the `story` crate and can be run directly:

```bash
# Code editor with LSP support and syntax highlighting
cargo run --example editor

# Dock layout system (panels, split views, tabs)
cargo run --example dock

# Markdown rendering
cargo run --example markdown

# HTML rendering
cargo run --example html
```

The `examples` directory also contains standalone examples, e