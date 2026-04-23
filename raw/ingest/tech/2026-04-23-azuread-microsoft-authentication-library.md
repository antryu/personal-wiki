<!-- GitHub Trending: Swift | 334 stars | +0 today -->

# AzureAD/microsoft-authentication-library-for-objc

> Microsoft Authentication Library (MSAL) for iOS and macOS

## Repository Info
- **URL**: https://github.com/AzureAD/microsoft-authentication-library-for-objc
- **Stars**: 334
- **Forks**: 158
- **Language**: Swift
- **License**: MIT License
- **Created**: 2017-01-30
- **Updated**: 2026-04-21
- **Topics**: azure-active-directory, identity, microsoft, msal, objc, swift
- **Open Issues**: 61

## README (excerpt)
Microsoft Authentication Library for iOS and macOS
=====================================


| Documentation                  | Code Samples      | Library Reference | Support | Feedback|
|-------------------------------|---------------------------|-------------------|---------|----------|
| [MSAL iOS and macOS documentation](https://learn.microsoft.com/en-us/entra/msal/objc/) | &#8226;  [Microsoft Entra ID (workforce samples)](https://learn.microsoft.com/en-us/entra/identity-platform/sample-v2-code?tabs=framework#ios)<br/>&#8226; [Microsoft Entra External ID (customer samples)](https://learn.microsoft.com/en-us/entra/external-id/customers/samples-ciam-all?tabs=apptype#mobile)          | [ SDK reference](https://azuread.github.io/microsoft-authentication-library-for-objc/)             | [Get support](README.md#community-help-and-support) | [Feedback](https://forms.office.com/r/xuBV0CzEih) |

> ⚠️ **MSAL 2.x Released with Breaking Changes**  
> Review the [MSAL 2.x for iOS/macOS – Major Release Announcement & Migration Guide](docs/MSAL_2x_Migration_Guide.md) for a complete overview of the changes and step-by-step migration instructions.

The Microsoft Authentication Library (MSAL) for iOS and macOS is an auth SDK that can be used to seamlessly integrate authentication into your apps using industry standard OAuth2 and OpenID Connect. It allows you to sign in users or apps with Microsoft identities. These identities include Microsoft Entra ID work and school accounts, personal Microsoft accounts, social accounts, and customer accounts. 

Using MSAL for iOS and macOS, you can acquire security tokens from the Microsoft identity platform to authenticate users and access secure web APIs for their applications. The library supports multiple authentication scenarios, such as single sign-on (SSO), Conditional Access, and brokered authentication. 

#### Native authentication support in MSAL

MSAL iOS and macOS also provides native authentication APIs that allow applications to implement a native experience with end-to-end customizable flows in their applications. With native authentication, users are guided through a rich, native, sign-up and sign-in journey without leaving the app. The native authentication feature is available for mobile (iOS) and desktop (macOS) apps on [External ID for customers](https://learn.microsoft.com/en-us/entra/external-id/customers/concept-native-authentication). It is recommended to always use the most up-to-date version of the SDK.

## Get started

To use MSAL iOS and macOS in your application, you need to register your application in the Microsoft Entra Admin center and configure your project. Since the SDK supports both browser-delegated and native authentication experiences, follow the steps in the one of these quickstarts based on your scenario.

* For browser-delegated authentication scenarios, refer to the quickstart, [Sign in users and call Microsoft Graph from an iOS or macOS app](https://learn.microsoft.com/en-us/entra/identity-platform/quickstart-mobile-app-ios-sign-in).

* For native authentication scenarios, refer to the Microsoft Entra External ID sample guides, for [iOS sample app](https://learn.microsoft.com/en-us/entra/external-id/customers/how-to-run-native-authentication-sample-ios-app) or [macOS sample app](https://learn.microsoft.com/en-us/entra/external-id/customers/how-to-run-native-authentication-sample-macos-app)

## Migrate from ADAL Objective-C

The Azure Active Directory Authentication Library (ADAL) for Objective-C has been deprecated effective June 2023. Follow the [ADAL to MSAL migration guide for iOS and macOS](https://learn.microsoft.com/en-us/entra/msal/objc/migrate-objc-adal-msal) to avoid putting your app's security at risk.


## Quick sample

#### Swift
```swift
let config = MSALPublicClientApplicationConfig(clientId: "<your-client-id-here>")
let scopes = ["your-scope1-here", "your-scope2-here"]
        
if let application = try? MSALPublicClientApplication(configuration: 