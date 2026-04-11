# Iced GUI Library

> A cross-platform GUI library for Rust inspired by Elm, emphasizing simplicity, type-safety, and modularity. Notable for its reactive programming model and renderer-agnostic design.  
> Last updated: 2026-04-11

## Overview  
Iced is a Rust-based GUI library designed for building cross-platform applications (Windows, macOS, Linux, Web) with a focus on type-safety and developer ergonomics. Key repository details:  
- **Stars**: 30,149 | **Forks**: 1,556 | **License**: MIT  
- **Created**: 2019-07-15 | **Open Issues**: 419  
- **Languages/Tools**: Rust, [wgpu](https://github.com/gfx-rs/wgpu), [tiny-skia](https://github.com/RazrFalcon/tiny-skia)  

### Core Features  
- **Elm-inspired architecture**: Separates state, messages, view, and update logic for predictable UI design.  
- **Cross-platform renderers**:  
  - `iced_wgpu` (Vulkan, Metal, DX12)  
  - `iced_tiny_skia` (software fallback)  
- **Batteries-included**: Built-in widgets (text inputs, scrollables) and debug tools (performance metrics, time-travel debugging).  
- **Async support**: Integrates with Rust futures for asynchronous operations.  

### Example: Counter Application  
```rust
#[derive(Default)]
struct Counter { value: i32 }

#[derive(Debug, Clone, Copy)]
pub enum Message { Increment, Decrement }

impl Counter {
    pub fn view(&self) -> Column<'_, Message> {
        column![
            button("Increment").on_press(Message::Increment),
            button("Decrement").on_press(Message::Decrement),
            text(self.value)
        ]
    }
}
```

## Key Points  
- Cross-platform support via renderer-agnostic runtime and multiple backends.  
- Type-safe, reactive API modeled after [The Elm Architecture](https://guide.elm-lang.org/architecture/).  
- Modular ecosystem with reusable components (e.g., `winit`-based windowing shell).  
- Debugging tools for performance analysis and interactive development.  

## Sources  
- [GitHub](https://github.com/iced-rs/iced)  
- [원본](raw/ingest/tech/2026-04-11-iced-gui-library.md)