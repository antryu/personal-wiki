# Facebook SDK for iOS

> The Facebook SDK for iOS enables developers to integrate Facebook platform features like login, sharing, and analytics into iOS and tvOS apps. It is notable for its widespread adoption and ongoing modernization efforts in Swift.  
> Last updated: 2026-04-17

## Overview

### Repository Info
- **URL**: [https://github.com/facebook/facebook-ios-sdk](https://github.com/facebook/facebook-ios-sdk)
- **Stars**: 8,042
- **Forks**: 3,685
- **Language**: Swift
- **License**: Other
- **Created**: 2010-06-24
- **Updated**: 2026-04-17
- **Open Issues**: 152

### SDK Features
- **Login**: [Facebook Login integration](https://developers.facebook.com/docs/facebook-login)
- **Sharing**: [Share content to Facebook](https://developers.facebook.com/docs/sharing)
- **App Links**: [Deep linking with App Links](https://developers.facebook.com/docs/applinks)
- **Graph API**: [Access user data via Graph API](https://developers.facebook.com/docs/ios/graph)
- **Analytics**: [App insights with Facebook Analytics](https://developers.facebook.com/docs/analytics)

### Integration Methods
1. **Swift Package Manager**:
   - Add via Xcode: `File > Swift Packages > Add Package Dependency`
   - Select `Facebook`-prefixed libraries
   - Follow tutorials at [Facebook iOS Docs](https://developers.facebook.com/docs/ios)
1. **CocoaPods**: [FBSDKCoreKit Pod](https://cocoapods.org/pods/FBSDKCoreKit)
1. **Carthage**: [Carthage-compatible](https://github.com/Carthage/Carthage)

### Important Notes
- **iOS 14+ Compliance**: Developers must disclose data collected by the SDK in [App Store Connect](https://developer.apple.com/app-store/app-privacy-details/) (see [Facebook Blog](https://developers.facebook.com/blog/post/2020/10/22/preparing-for-apple-app-store-data-disclosure-requirements/)).
- **Swift Rewrite Warning**:  
  > The SDK is being rewritten in Swift, causing potential instability in minor versions. Use `@import` syntax for Objective-C interoperability and expect compilation issues during transitions.

## Key Points
- Active development with 152 open issues and frequent updates.
- Supports multiple integration methods (CocoaPods, Carthage, Swift Package Manager).
- Requires compliance with iOS 14+ data disclosure policies.
- Open-source contributions welcome via [CONTRIBUTING.md](https://github.com/facebook/facebook-ios-sdk/blob/main/CONTRIBUTING.md).

## Sources
- [GitHub](https://github.com/facebook/facebook-ios-sdk)
- [원본](raw/ingest/tech/2026-04-17-facebook-sdk-for-ios.md)