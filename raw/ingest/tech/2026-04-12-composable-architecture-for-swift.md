<!-- GitHub Trending: Swift | 14,529 stars | +6 today -->

# pointfreeco/swift-composable-architecture

> A library for building applications in a consistent and understandable way, with composition, testing, and ergonomics in mind.

## Repository Info
- **URL**: https://github.com/pointfreeco/swift-composable-architecture
- **Stars**: 14,529
- **Forks**: 1,643
- **Language**: Swift
- **License**: MIT License
- **Created**: 2020-05-03
- **Updated**: 2026-04-12
- **Topics**: architecture, composition, modularity, swiftui, testability, uikit
- **Open Issues**: 19

## README (excerpt)
# The Composable Architecture

[![CI](https://github.com/pointfreeco/swift-composable-architecture/actions/workflows/ci.yml/badge.svg)](https://github.com/pointfreeco/swift-composable-architecture/actions/workflows/ci.yml)
[![Slack](https://img.shields.io/badge/slack-chat-informational.svg?label=Slack&logo=slack)](https://www.pointfree.co/slack-invite)
[![](https://img.shields.io/endpoint?url=https%3A%2F%2Fswiftpackageindex.com%2Fapi%2Fpackages%2Fpointfreeco%2Fswift-composable-architecture%2Fbadge%3Ftype%3Dswift-versions)](https://swiftpackageindex.com/pointfreeco/swift-composable-architecture)
[![](https://img.shields.io/endpoint?url=https%3A%2F%2Fswiftpackageindex.com%2Fapi%2Fpackages%2Fpointfreeco%2Fswift-composable-architecture%2Fbadge%3Ftype%3Dplatforms)](https://swiftpackageindex.com/pointfreeco/swift-composable-architecture)

The Composable Architecture (TCA, for short) is a library for building applications in a consistent 
and understandable way, with composition, testing, and ergonomics in mind. It can be used in 
SwiftUI, UIKit, and more, and on any Apple platform (iOS, macOS, iPadOS, visionOS, tvOS, and watchOS).

* [What is the Composable Architecture?](#what-is-the-composable-architecture)
* [Learn more](#learn-more)
* [Examples](#examples)
* [Basic usage](#basic-usage)
* [Documentation](#documentation)
* [FAQ](#faq)
* [Community](#community)
* [Installation](#installation)
* [Translations](#translations)

## What is the Composable Architecture?

This library provides a few core tools that can be used to build applications of varying purpose and 
complexity. It provides compelling stories that you can follow to solve many problems you encounter 
day-to-day when building applications, such as:

* **State management**
  <br> How to manage the state of your application using simple value types, and share state across 
  many screens so that mutations in one screen can be immediately observed in another screen.

* **Composition**
  <br> How to break down large features into smaller components that can be extracted to their own, 
  isolated modules and be easily glued back together to form the feature.

* **Side effects**
  <br> How to let certain parts of the application talk to the outside world in the most testable 
  and understandable way possible.

* **Testing**
  <br> How to not only test a feature built in the architecture, but also write integration tests 
  for features that have been composed of many parts, and write end-to-end tests to understand how 
  side effects influence your application. This allows you to make strong guarantees that your 
  business logic is running in the way you expect.

* **Ergonomics**
  <br> How to accomplish all of the above in a simple API with as few concepts and moving parts as 
  possible.

## Learn More

The Composable Architecture was designed over the course of many episodes on 
[Point-Free][pointfreeco], a video series exploring advanced programming topics in the Swift language, 
hosted by [Brandon Williams][mbrandonw] and [Stephen Celis][stephencelis].

You can watch all of the episodes [here][tca-episode-collection], as well as a dedicated, [multipart
tour][tca-tour] of the architecture from scratch.

<a href="https://www.pointfree.co/collections/tours/composable-architecture-1-0">
  <img alt="video poster image" src="https://d3rccdn33rt8ze.cloudfront.net/episodes/0243.jpeg" width="600">
</a>

## Examples

[![Screen shots of example applications](https://d3rccdn33rt8ze.cloudfront.net/composable-architecture/demos.png)](./Examples)

This repo comes with _lots_ of examples to demonstrate how to solve common and complex problems with 
the Composable Architecture. Check out [this](./Examples) directory to see them all, including:

* [Case Studies](./Examples/CaseStudies)
  * Getting started
  * Effects
  * Navigation
  * Higher-order reducers
  * Reusable components
* [Location manager](https://github.com/pointfreeco/composable-core-location/tree/main/Examples/LocationMa