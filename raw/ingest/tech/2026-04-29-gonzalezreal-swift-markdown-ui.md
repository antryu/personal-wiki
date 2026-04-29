<!-- GitHub Trending: Swift | 3,815 stars | +3 today -->

# gonzalezreal/swift-markdown-ui

> Maintenance mode — new development in Textual: https://github.com/gonzalezreal/textual

## Repository Info
- **URL**: https://github.com/gonzalezreal/swift-markdown-ui
- **Stars**: 3,815
- **Forks**: 533
- **Language**: Swift
- **License**: MIT License
- **Created**: 2020-12-03
- **Updated**: 2026-04-29
- **Topics**: cmark, commonmark, github-markdown, markdown, swift, swiftui
- **Open Issues**: 60

## README (excerpt)
> [!NOTE]
> MarkdownUI is in maintenance mode.
> 
> New development is happening in [Textual](https://github.com/gonzalezreal/textual),
> a SwiftUI-native text rendering engine that evolved from the ideas and lessons
> learned in MarkdownUI.
>
> For more context, see the announcement here:
> https://github.com/gonzalezreal/swift-markdown-ui/discussions/437

# MarkdownUI
[![CI](https://github.com/gonzalezreal/MarkdownUI/workflows/CI/badge.svg)](https://github.com/gonzalezreal/MarkdownUI/actions?query=workflow%3ACI)
[![](https://img.shields.io/endpoint?url=https%3A%2F%2Fswiftpackageindex.com%2Fapi%2Fpackages%2Fgonzalezreal%2Fswift-markdown-ui%2Fbadge%3Ftype%3Dswift-versions)](https://swiftpackageindex.com/gonzalezreal/swift-markdown-ui)
[![](https://img.shields.io/endpoint?url=https%3A%2F%2Fswiftpackageindex.com%2Fapi%2Fpackages%2Fgonzalezreal%2Fswift-markdown-ui%2Fbadge%3Ftype%3Dplatforms)](https://swiftpackageindex.com/gonzalezreal/swift-markdown-ui)

Display and customize Markdown text in SwiftUI.

* [Overview](#overview)
* [Minimum requirements](#minimum-requirements)
* [Getting started](#getting-started)
  * [Creating a Markdown view](#creating-a-markdown-view)
  * [Styling Markdown](#styling-markdown)
* [Documentation](#documentation)
  * [Related content](#related-content)
* [Demo](#demo)
* [Installation](#installation)

## Overview

MarkdownUI is a powerful library for displaying and customizing Markdown text in SwiftUI. It is
compatible with the [GitHub Flavored Markdown Spec](https://github.github.com/gfm/) and can
display images, headings, lists (including task lists), blockquotes, code blocks, tables,
and thematic breaks, besides styled text and links.

MarkdownUI offers comprehensible theming features to customize how it displays Markdown text.
You can use the built-in themes, create your own or override specific text and block styles.

![](Sources/MarkdownUI/Documentation.docc/Resources/MarkdownUI@2x.png#gh-light-mode-only)
![](Sources/MarkdownUI/Documentation.docc/Resources/MarkdownUI~dark@2x.png#gh-dark-mode-only)

## Minimum requirements

You can use MarkdownUI on the following platforms:

- macOS 12.0+
- iOS 15.0+
- tvOS 15.0+
- watchOS 8.0+

Some features, like displaying tables or multi-image paragraphs, require macOS 13.0+, iOS 16.0+,
tvOS 16.0+, and watchOS 9.0+.

## Getting started

### Creating a Markdown view

A `Markdown` view displays rich structured text using the Markdown syntax. It can display images,
headings, lists (including task lists), blockquotes, code blocks, tables, and thematic breaks,
besides styled text and links.

The simplest way of creating a `Markdown` view is to pass a Markdown string to the
`init(_:baseURL:imageBaseURL:)` initializer.

```swift
let markdownString = """
  ## Try MarkdownUI

  **MarkdownUI** is a native Markdown renderer for SwiftUI
  compatible with the
  [GitHub Flavored Markdown Spec](https://github.github.com/gfm/).
  """

var body: some View {
  Markdown(markdownString)
}
```

![](Sources/MarkdownUI/Documentation.docc/Resources/MarkdownString@2x.png#gh-light-mode-only)
![](Sources/MarkdownUI/Documentation.docc/Resources/MarkdownString~dark@2x.png#gh-dark-mode-only)

A more convenient way to create a `Markdown` view is by using the
`init(baseURL:imageBaseURL:content:)` initializer, which takes a Markdown content
builder in which you can compose the view content, either by providing Markdown strings or by
using an expressive domain-specific language.

```swift
var body: some View {
  Markdown {
    """
    ## Using a Markdown Content Builder
    Use Markdown strings or an expressive domain-specific language
    to build the content.
    """
    Heading(.level2) {
      "Try MarkdownUI"
    }
    Paragraph {
      Strong("MarkdownUI")
      " is a native Markdown renderer for SwiftUI"
      " compatible with the "
      InlineLink(
        "GitHub Flavored Markdown Spec",
        destination: URL(string: "https://github.github.com/gfm/")!
      )
      "."
    }
  }