<!-- GitHub Trending: Swift | 2,520 stars | +2 today -->

# stripe/stripe-ios

> Stripe iOS SDK    

## Repository Info
- **URL**: https://github.com/stripe/stripe-ios
- **Stars**: 2,521
- **Forks**: 1,048
- **Language**: Swift
- **License**: MIT License
- **Created**: 2012-11-12
- **Updated**: 2026-04-16
- **Topics**: stripe, stripe-sdk
- **Open Issues**: 205

## README (excerpt)
# Stripe iOS SDK

[![CocoaPods](https://img.shields.io/cocoapods/v/Stripe.svg?style=flat)](http://cocoapods.org/?q=author%3Astripe%20name%3Astripe)
[![License](https://img.shields.io/cocoapods/l/Stripe.svg?style=flat)](https://github.com/stripe/stripe-ios/blob/master/LICENSE)
[![Platform](https://img.shields.io/cocoapods/p/Stripe.svg?style=flat)](https://github.com/stripe/stripe-ios#)

> [!TIP]
> Want to chat live with Stripe engineers? Join us on our [Discord server](https://stripe.com/go/developer-chat).

The Stripe iOS SDK makes it quick and easy to build an excellent payment experience in your iOS app. We provide powerful and customizable UI screens and elements that can be used out-of-the-box to collect your users' payment details. We also expose the low-level APIs that power those UIs so that you can build fully custom experiences.

Get started with our [📚 integration guides](https://stripe.com/docs/payments/accept-a-payment?platform=ios) and [example projects](#Examples), or [📘 browse the SDK reference](https://stripe.dev/stripe-ios/docs/index.html).

> Updating to a newer version of the SDK? See our [migration guide](https://github.com/stripe/stripe-ios/blob/master/MIGRATING.md) and [changelog](https://github.com/stripe/stripe-ios/blob/master/CHANGELOG.md).

Table of contents
=================
<!-- NOTE: Use case-sensitive anchor links for docc compatibility -->
<!--ts-->
   * [Features](#Features)
   * [Releases](#Releases)
   * [Requirements](#Requirements)
   * [Getting started](#Getting-started)
      * [Integration](#Integration)
      * [Examples](#Examples)
      * [Building from source](#Building-from-source)
   * [Card scanning](#Card-scanning)
   * [Contributing](#Contributing)
   * [Migrating](#Migrating-from-older-versions)
   * [Code Style](#Code-style)
   * [Licenses](#Licenses)

<!--te-->

## Features

**Simplified security**: We make it simple for you to collect sensitive data such as credit card numbers and remain [PCI compliant](https://stripe.com/docs/security#pci-dss-guidelines). This means the sensitive data is sent directly to Stripe instead of passing through your server. For more information, see our [integration security guide](https://stripe.com/docs/security).

**Apple Pay**: [StripeApplePay](StripeApplePay/README.md) provides a [seamless integration with Apple Pay](https://stripe.com/docs/apple-pay).

**SCA-ready**: The SDK automatically performs native [3D Secure authentication](https://stripe.com/docs/payments/3d-secure) if needed to comply with [Strong Customer Authentication](https://stripe.com/docs/strong-customer-authentication) regulation in Europe.

**Native UI**: We provide native screens and elements to collect payment details. For example, [PaymentSheet](https://stripe.com/docs/payments/accept-a-payment?platform=ios) is a prebuilt UI that combines all the steps required to pay - collecting payment details, billing details, and confirming the payment - into a single sheet that displays on top of your app.

<img src="https://user-images.githubusercontent.com/89988962/153276097-9b3369a0-e732-45c4-96ec-ff9d48ad0fb6.png" alt="PaymentSheet" align="center"/>

**Stripe API**: [StripePayments](StripePayments/README.md) provides [low-level APIs](https://stripe.dev/stripe-ios/docs/Classes/STPAPIClient.html) that correspond to objects and methods in the Stripe API. You can build your own entirely custom UI on top of this layer, while still taking advantage of utilities like [STPCardValidator](https://stripe.dev/stripe-ios/docs/Classes/STPCardValidator.html) to validate your user’s input.

**Card scanning**: We support card scanning on iOS 13 and higher. See our [Card scanning](#Card-scanning) section.

**App Clips**: The `StripeApplePay` module provides a [lightweight SDK for offering Apple Pay in an App Clip](https://stripe.com/docs/apple-pay#app-clips).

**Localized**: We support the following localizations: Bulgarian, Catalan, Chinese (Hong Kong), Chinese (Simplified), Chinese (Tradition