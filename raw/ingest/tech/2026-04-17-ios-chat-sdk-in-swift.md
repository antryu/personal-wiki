<!-- GitHub Trending: Swift | 952 stars | +0 today -->

# GetStream/stream-chat-swift

> 💬 iOS Chat SDK in Swift - Build your own app chat experience for iOS using the official Stream Chat API

## Repository Info
- **URL**: https://github.com/GetStream/stream-chat-swift
- **Stars**: 952
- **Forks**: 232
- **Language**: Swift
- **License**: Other
- **Created**: 2019-03-29
- **Updated**: 2026-04-16
- **Topics**: chat, chat-api, chat-application, chat-sdk, ios, ios-chat, ios-chat-sdk, ios-sdk, messaging, sdk, stream-chat, streamio, swift, swift-chat, swift-sdk
- **Open Issues**: 7

## README (excerpt)
<p align="center">
  <img src="ReadmeAssets/iOS_Chat_Messaging.png"/>
</p>

<p align="center">
  <a href="https://www.swift.org/package-manager/"><img src="https://img.shields.io/badge/SPM-compatible-green" /></a>
</p>
<p align="center">
  <a href="https://getstream.io/chat/docs/sdk/ios/"><img src="https://img.shields.io/badge/iOS-13%2B-lightblue" /></a>
  <a href="https://swift.org"><img src="https://img.shields.io/badge/Swift-6.0%2B-orange.svg" /></a>
  <a href="https://sonarcloud.io/summary/new_code?id=GetStream_stream-chat-swift"><img src="https://sonarcloud.io/api/project_badges/measure?project=GetStream_stream-chat-swift&metric=coverage" /></a>
</p>
<p align="center">
  <img id="stream-chat-label" alt="StreamChat" src="https://img.shields.io/badge/StreamChat-6.74%20MB-blue"/>
  <img id="stream-chat-ui-label" alt="StreamChatUI" src="https://img.shields.io/badge/StreamChatUI-4.25%20MB-blue"/>
  <img id="stream-chat-common-ui-label" alt="StreamChatCommonUI" src="https://img.shields.io/badge/StreamChatCommonUI-0.78%20MB-blue"/>
</p>

This is the official iOS SDK for [Stream Chat](https://getstream.io/chat/sdk/ios/), a service for building chat and messaging applications. This library includes both a low-level SDK and a set of reusable UI components.

## Low Level Client (LLC)

The **StreamChat SDK** is a low level client for Stream chat service that doesn't contain any UI components. It is meant to be used when you want to build a fully custom UI. For the majority of use cases though, we recommend using our highly customizable UI SDK's.

## UIKit SDK

The **StreamChatUI SDK** is our UI SDK for UIKit components. If your application needs to support iOS 13 and above, this is the right UI SDK for you.

## SwiftUI SDK

The **StreamChatSwiftUI SDK** is our UI SDK for SwiftUI components. If your application only needs to support iOS 14 and above, this is the right UI SDK for you. This SDK is available in another repository **[stream-chat-swiftui](https://github.com/GetStream/stream-chat-swiftui)**.

Our SwiftUI SDK has a brand new design, please check our [docs](https://getstream.io/chat/docs/sdk/ios/v5/) for more details.

---

## Main Features

- **Offline support:** Browse channels and send messages while offline.
- **Familiar behavior**: The UI elements are good platform citizens and behave like native elements; they respect `tintColor`, `layoutMargins`, light/dark mode, dynamic font sizes, etc.
- **Swift native API:** Uses Swift's powerful language features to make the SDK usage easy and type-safe.
- `UIKit` and `SwiftUI` SDKs use native patterns and paradigms from respective UI frameworks: The API follows the design of native system SDKs. It makes integration with your existing code easy and familiar.
  - `UIKit` SDK is part of this repository whereas `SwiftUI` SDK is available [here](https://github.com/GetStream/stream-chat-swiftui).
- **First-class support for `Combine` and `Structured Concurrency`**: Refer to our getting started guides for [Combine](https://getstream.io/chat/docs/sdk/ios/combine/) and [Structured Concurrency](https://getstream.io/chat/docs/sdk/ios/client/state-layer/state-layer-overview/).
- **Fully open-source implementation:** You have access to the complete source code of the SDK here on GitHub.
- **Supports iOS 13+:** We proudly support older versions of iOS, so your app can stay available to almost everyone.

## **Quick Links**

- [UIKit Chat Tutorial](https://getstream.io/tutorials/ios-uikit-chat/): Learn how to use the SDK by following our simple tutorial with UIKit (or [SwiftUI](https://getstream.io/tutorials/swiftui-chat/)).
- [Register](https://getstream.io/chat/trial/): Register to get an API key for Stream Chat.
- [Installation](https://getstream.io/chat/docs/sdk/ios/basics/integration): Learn more about how to install the SDK using SPM.
- [Documentation](https://getstream.io/chat/docs/sdk/ios/): An extensive documentation is available to help with you integration.
- [SwiftUI](https://github.c