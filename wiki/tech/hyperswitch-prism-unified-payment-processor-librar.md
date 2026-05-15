# Hyperswitch Prism: Unified Payment Processor Library

> Hyperswitch Prism is a stateless, unified connector library that allows integration with any payment processor using a single request schema. It enables businesses to switch between multiple payment processors with minimal code changes, making payment integration more scalable and maintainable.
> Last updated: 2026-05-15

## Overview

Hyperswitch Prism is a lightweight, developer-friendly library developed by the team behind [Juspay Hyperswitch](https://github.com/juspay/hyperswitch), a widely-used open-source payments platform. It abstracts the complexity of integrating with various payment processors by providing a unified API layer. Each payment processor has its own unique API, error codes, and authentication methods, and Prism eliminates the need for custom integrations by allowing developers to switch between processors with just a few lines of code.

Prism supports a wide range of payment processors, including Stripe, Braintree, PayPal, Authorize.net, and Adyen, among many others. It is designed to be **stateless**, with no database or PII storage, and allows users to leverage their own or a payment processor's vault for PCI compliance. The library is continuously tested in real sandbox and production environments and is built with Rust for high performance and safety.

As a part of the broader Juspay ecosystem, Prism is intended to evolve into a stateless commerce library covering areas like subscriptions, fraud, and payouts in the future.

## Key Points
- Provides a **single, unified request schema** for all supported payment processors.
- **Stateless** design with no storage of credentials or PII.
- Designed to **reduce PCI scope** by not storing card data.
- Continuously tested against real production environments.
- Open-source and built with **Rust**, licensed under the Apache 2.0 license.

## Sources
- [GitHub](https://github.com/juspay/hyperswitch-prism)
- [원본](raw/ingest/tech/2026-05-15-hyperswitch-prism-unified-payment-processor-librar.md)