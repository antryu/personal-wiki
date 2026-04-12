<!-- GitHub Trending: Rust | 28,715 stars | +13 today -->

# emilk/egui

> egui: an easy-to-use immediate mode GUI in Rust that runs on both web and native

## Repository Info
- **URL**: https://github.com/emilk/egui
- **Stars**: 28,715
- **Forks**: 2,003
- **Language**: Rust
- **License**: Apache License 2.0
- **Created**: 2019-01-13
- **Updated**: 2026-04-12
- **Topics**: egui, game-development, gamedev, gui, imgui, rust, wasm
- **Open Issues**: 1097

## README (excerpt)
# 🖌 egui: an easy-to-use GUI in pure Rust

[<img alt="github" src="https://img.shields.io/badge/github-emilk/egui-8da0cb?logo=github" height="20">](https://github.com/emilk/egui)
[![Latest version](https://img.shields.io/crates/v/egui.svg)](https://crates.io/crates/egui)
[![Documentation](https://docs.rs/egui/badge.svg)](https://docs.rs/egui)
[![unsafe forbidden](https://img.shields.io/badge/unsafe-forbidden-success.svg)](https://github.com/rust-secure-code/safety-dance/)
[![Build Status](https://github.com/emilk/egui/workflows/Rust/badge.svg)](https://github.com/emilk/egui/actions/workflows/rust.yml)
[![MIT](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/emilk/egui/blob/main/LICENSE-MIT)
[![Apache](https://img.shields.io/badge/license-Apache-blue.svg)](https://github.com/emilk/egui/blob/main/LICENSE-APACHE)
[![Discord](https://img.shields.io/discord/900275882684477440?label=egui%20discord)](https://discord.gg/JFcEma9bJq)


<br/>
<div align="center">
<a href="https://www.egui.rs/"><img src="https://github.com/user-attachments/assets/cfaf1d43-9338-490f-ae82-99b420baa1b0" width="400"></a>

<br/>

👉 [Click to run the web demo](https://www.egui.rs/#demo) 👈
</div>

egui (pronounced "e-gooey") is a simple, fast, and highly portable immediate mode GUI library for Rust. egui runs on the web, natively, and [in your favorite game engine](#integrations).

egui aims to be the easiest-to-use Rust GUI library, and the simplest way to make a web app in Rust.

egui can be used anywhere you can draw textured triangles, which means you can easily integrate it into your game engine of choice.

[`eframe`](https://github.com/emilk/egui/tree/main/crates/eframe) is the official egui framework, which supports writing apps for Web, Linux, Mac, Windows, and Android.


## Example

``` rust
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

<img alt="Dark mode" src="https://github.com/user-attachments/assets/3b446d29-99d8-4c82-86bb-4d8ef0516017"> &nbsp; &nbsp; <img alt="Light mode" src="https://github.com/user-attachments/assets/a5e7da93-89a8-4ba0-86b8-0fa2228a4f62" height="278">

## Sections:

* [Example](#example)
* [Quick start](#quick-start)
* [Demo](#demo)
* [Goals](#goals)
* [State / features](#state)
* [Dependencies](#dependencies)
* [Who is egui for?](#who-is-egui-for)
* [Integrations](#integrations)
* [Why immediate mode](#why-immediate-mode)
* [FAQ](#faq)
* [Other](#other)
* [Credits](#credits)

([egui 的中文翻译文档 / chinese translation](https://github.com/Re-Ch-Love/egui-doc-cn/blob/main/README_zh-hans.md))


## Quick start

There are simple examples in [the `examples/` folder](https://github.com/emilk/egui/blob/main/examples/). If you want to write a web app, then go to <https://github.com/emilk/eframe_template/> and follow the instructions. The official docs are at <https://docs.rs/egui>. For inspiration and more examples, check out the [the egui web demo](https://www.egui.rs/#demo) and follow the links in it to its source code.

If you want to integrate egui into an existing engine, go to the [Integrations](#integrations) section.

If you have questions, use [GitHub Discussions](https://github.com/emilk/egui/discussions). There is also [an egui discord server](https://discord.gg/JFcEma9bJq). If you want to contribute to egui, please read the [Contributing Guidelines](https://github.com/emilk/egui/blob/main/CONTRIBUTING.md).

## Demo

[Click to run egui web demo](https://www.egui.rs/#demo) (works in any browser with Wasm and WebGL support). Uses [`eframe`](https://github.com/emilk/egui/tree/main/crates/eframe).

To test the demo app locally, run `cargo run --release -p egui_demo_app`.

The native backend is [`egui-wgpu`](https://github.