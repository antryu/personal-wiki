<!-- GitHub Trending: Rust | 1,281 stars | +65 today -->

# juspay/hyperswitch-prism

> One library | Many payment processors | Scale to multiple processors with few lines of code.

## Repository Info
- **URL**: https://github.com/juspay/hyperswitch-prism
- **Stars**: 1,281
- **Forks**: 257
- **Language**: Rust
- **License**: Apache License 2.0
- **Created**: 2025-04-30
- **Updated**: 2026-05-15
- **Topics**: authorize-net, braintree, node, payment-gateway, payment-integration, payment-library, payment-processing, payments, payments-library, paypal, python, stripe, stripe-checkout, stripe-node, stripe-payments, stripe-sdk, worldpay
- **Open Issues**: 355

## README (excerpt)
<div align="center">


# Hyperswitch Prism

**One integration. Any payment processor.**
**Switch processors with few lines of code.**

<p align="center">
  <img src="./routing_demo.gif" alt="Switch processors with few lines of code" />
  <br/>
</p>

[![License: Apache 2.0](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)


[Website](https://hyperswitch.io/prism) · [Documentation](https://docs.hyperswitch.io/integrations/prism/prism) · [Slack Community](https://join.slack.com/t/hyperswitch-io/shared_invite/zt-362xmn7hg-ujdw8Wvx_~BgNTLrCcdCPw)

</div>


## What is Prism?

Prism is a stateless, unified connector library to connect with any payment processor. It is extracted out of the hardened integrations through continuous testing & iterative bug fixing over years of usage within [Juspay Hyperswitch](https://github.com/juspay/hyperswitch).


### Why are payment processor integrations such a big deal?

Every payment processor has diverse APIs, error codes, authentication methods, pdf documents to read, and behavioural differences between the actual environment and documented specs. 

A small mistake or oversight can create a huge financial impact for businesses accepting payments. Thousands of enterprises around the world have gone through this learning curve and iterated and fixed payment systems over many years. All such fixes/improvements/iterations are locked-in as tribal knowledge into Enterprise Payment Platforms and SaaS Payment Orchestration solutions. 

Hence, **Prism** - to open up payment diversity to the entire world as a simple, lightweight, zero lock-in, developer friendly payments library.

**Prism is extracted, built and maintained by the team behind [Juspay Hyperswitch](https://github.com/juspay/hyperswitch) - the open-source payments platform with 40K+ Github stars and used by leading enterprise merchants around the world.**

**Note:** In all honesty, payments are not more complicated than database drivers. It is simply just that the industry has not arrived at a standard (and it never will!!).


## What does Prism do well?
- **One request schema** for every payment. The same authorize call works against Stripe, Adyen and many more without additional lines of code.
- **Stateless. No database, no stored PII.** Credentials are not stored/ logged by the library. It lives only up to the lifetime of your HTTP client.
- **PCI scope reduction.** The card data flowing/ not flowing into the library is your choice. You can choose to leverage any payment processor vault or your own PCI certified vault. Nothing is logged or stored by the library.


## Integrations - Status

Prism supports **multiple connectors** with varying levels of payment method and flow coverage. Each connector is continuously tested against real sandbox/ production environments.

**Legend:** ✓ Supported | x Not Supported | ⚠ In Progress | ? Needs Validation

| Status | Description |
|--------|-------------|
| ✓ | Fully implemented and tested |
| x | Not applicable or unsupported by processor |
| ⚠ | Implementation in progress or partial |
| ? | Implementation needs validation against live environment |

**[View Complete Connector Coverage →](https://github.com/juspay/hyperswitch-prism/blob/main/docs-generated/all_connector.md)**

## What Prism does not do (yet)?
- **Built-in vault or tokenization service.** This is a design choice. You may bring your own vault, or use the payment processor's vault.
- **Retry or routing logic.** It lives in [Juspay Hyperswitch](https://github.com/juspay/hyperswitch). Prism is only the transformation layer.
- **Beyond payments.** The diversity exists beyond payments - in subscriptions, fraud, tax, payouts. And it is our aspiration, to evolve Prism into a stateless commerce library.

## Architecture
A very high level overview of the Prism architecture and components. To understand more [refer docs](https://docs.hyperswitch.io/integrations/prism/architecture)

```
┌