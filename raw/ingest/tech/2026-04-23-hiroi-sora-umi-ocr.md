<!-- GitHub Trending: Python | 43,586 stars | +48 today -->

# hiroi-sora/Umi-OCR

> OCR software, free and offline. 开源、免费的离线OCR软件。支持截屏/批量导入图片，PDF文档识别，排除水印/页眉页脚，扫描/生成二维码。内置多国语言库。

## Repository Info
- **URL**: https://github.com/hiroi-sora/Umi-OCR
- **Stars**: 43,586
- **Forks**: 4,303
- **Language**: Python
- **License**: MIT License
- **Created**: 2022-03-28
- **Updated**: 2026-04-23
- **Topics**: ocr, ocr-python, paddleocr, qml, qt, screenshot, umi-ocr
- **Open Issues**: 335

## README (excerpt)
<p align="left">
    <span>
        <b>中文</b>
    </span>
    <span> • </span>
    <a href="README_en.md">
        English
    </a>
    <span> • </span>
    <a href="README_ja.md">
        日本語
    </a>
</p>

<p align="center">
  <a href="https://github.com/hiroi-sora/Umi-OCR">
    <img width="200" height="128" src="https://tupian.li/images/2022/10/27/icon---256.png" alt="Umi-OCR">
  </a>
</p>

<h1 align="center">Umi-OCR 文字识别工具</h1>

<p align="center">
  <a href="https://github.com/hiroi-sora/Umi-OCR/releases/latest">
    <img src="https://img.shields.io/github/v/release/hiroi-sora/Umi-OCR?style=flat-square" alt="Umi-OCR">
  </a>
  <a href="https://github.com/hiroi-sora/Umi-OCR/blob/main/LICENSE">
    <img src="https://img.shields.io/github/license/hiroi-sora/Umi-OCR?style=flat-square" alt="LICENSE">
  </a>
  <a href="#下载发行版">
    <img src="https://img.shields.io/github/downloads/hiroi-sora/Umi-OCR/total?style=flat-square" alt="forks">
  </a>
  <a href="https://star-history.com/#hiroi-sora/Umi-OCR">
    <img src="https://img.shields.io/github/stars/hiroi-sora/Umi-OCR?style=flat-square" alt="stars">
  </a>
  <a href="https://github.com/hiroi-sora/Umi-OCR/forks">
    <img src="https://img.shields.io/github/forks/hiroi-sora/Umi-OCR?style=flat-square" alt="forks">
  </a>
  <a href="https://hosted.weblate.org/engage/umi-ocr/">
    <img src="https://hosted.weblate.org/widget/umi-ocr/svg-badge.svg" alt="翻译状态">
  </a>
</p>

<div align="center">
  <h3>
    <a href="#目录">
      使用说明
    </a>
    <span> • </span>
    <a href="#下载发行版">
      下载地址
    </a>
    <span> • </span>
    <a href="CHANGE_LOG.md">
      更新日志
    </a>
    <span> • </span>
    <a href="https://github.com/hiroi-sora/Umi-OCR/issues">
      提交Bug
    </a>
  </h3>
</div>
<br>

<div align="center">
  <strong>免费，开源，可批量的离线OCR软件</strong><br>
  <sub>适用于 Windows7 x64 、Linux x64
</div><br>

- **免费**：本项目所有代码开源，完全免费。
- **方便**：解压即用，离线运行，无需网络。
- **高效**：自带高效率的离线OCR引擎，内置多种语言识别库。
- **灵活**：支持命令行、HTTP接口等外部调用方式。
- **功能**：截图OCR / 批量OCR / PDF识别 / 二维码 / 公式识别

<p align="center"><img src="https://tupian.li/images/2023/11/19/65599097ab5f4.png" alt="1-标题-1.png" style="width: 80%;"></p>

![1-标题-2.png](https://tupian.li/images/2023/11/19/6559909fdeeba.png)

## 目录

- [截图识别](#截图OCR)
  - [排版解析](#文本后处理) - 识别不同排版，按正确顺序输出文字
- [批量识别](#批量OCR)
  - [忽略区域](#忽略区域) - 排除截图水印处的文字
- [二维码](#二维码) 支持扫码或生成二维码图片
- [文档识别](#文档识别) 从PDF扫描件中提取文本，或转为双层可搜索PDF
- [全局设置](#全局设置)
- [命令行调用](docs/README_CLI.md)
- [HTTP接口](docs/http/README.md)
- [构建项目（Windows、Linux）](#构建项目)

## 使用源码

开发者请务必阅读 [构建项目](#构建项目) 。

## 下载发行版

以下发布链接均长期维护，提供稳定版本的下载。

- **蓝奏云** https://hiroi-sora.lanzoul.com/s/umi-ocr （国内推荐，免注册/无限速）
- **GitHub** https://github.com/hiroi-sora/Umi-OCR/releases/latest
- **Source Forge** https://sourceforge.net/projects/umi-ocr


<details>
<summary><b>•&nbsp;&nbsp;Scoop Installer</b>（点击展开）</summary>

[Scoop](https://scoop.sh/) 是一款Windows下的命令行安装程序，可方便地管理多个应用。您可以先安装 Scoop ，再使用以下指令安装 `Umi-OCR` ：

- 添加 `extras` 桶：
```
scoop bucket add extras
```

- （可选1）安装 Umi-OCR（自带 `Rapid-OCR` 引擎，兼容性好）：
```
scoop install extras/umi-ocr
```

- （可选2）安装 Umi-OCR（自带 `Paddle-OCR` 引擎，速度稍快）：
```
scoop install extras/umi-ocr-paddle
```

- 不要同时安装二者，快捷方式可能会被覆盖。但您可以额外导入 [插件](https://github.com/hiroi-sora/Umi-OCR_plugins) ，随时切换不同OCR引擎。

</details>
</br>

## 开始使用

软件发布包下载为 `.7z` 压缩包或 `.7z.exe` 自解压包。自解压包可在没有安装压缩软件的电脑上，解压文件。

本软件无需安装。解压后，点击 `Umi-OCR.exe` 即可启动程序。

遇到任何问题，请提 [Issue](https://github.com/hiroi-sora/Umi-OCR/issues) ，我会尽可能帮助你。

## 界面语言

Umi-OCR 支持的界面多国语言。在第一次打开软件时，将会按照你的电脑的系统设置，自动切换语言。

如果需要手动切换语言，请参考下图，`全局设置`→`语言/Language` 。

<p align="center"><img src="https://tupian.li/images/2023/11/19/65599c3f9e600.png" alt="1-标题-1.png" style="width: 80%;"></p>

## 标签页

Umi-OCR v2 由一系列灵活好用的**标签页**组成。您可按照自己的喜好，打开需要的标签页。

标签栏左上角可以切换**窗口置顶**。右上角能够**锁定标签页**，以防止日常使用中误触关闭标签页。

### 截图OCR

<p align="center"><img src="https://tupian.li/images/2023/11/19/65599097aba8e.png" alt="2-截图-1.png" style="width: 80%;"></p>

**截图OCR**：打开这一页后，就可以用快捷键唤起截图，识别图中的文字。
- 左侧的图片预览栏，可直接用鼠标划选复制。