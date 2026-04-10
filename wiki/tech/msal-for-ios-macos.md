# MSAL for iOS/macOS

> Microsoft Authentication Library (MSAL) for iOS and macOS enables secure authentication integration using OAuth2 and OpenID Connect, supporting Microsoft Entra ID, personal accounts, and external identities. It provides native authentication flows, single sign-on (SSO), and brokered authentication.  
> Last updated: 2026-04-10

## Overview
- **Repository**: [AzureAD/microsoft-authentication-library-for-objc](https://github.com/AzureAD/microsoft-authentication-library-for-objc)  
  - **Stars**: 335 | **Forks**: 157 | **Language**: Swift | **License**: MIT  
  - **Created**: 2017-01-30 | **Updated**: 2026-04-09 | **Open Issues**: 72  
  - **Topics**: `azure-active-directory`, `identity`, `microsoft`, `msal`, `objc`, `swift`  

- **Core Functionality**:  
  - Acquires security tokens from Microsoft identity platform for user authentication and API access.  
  - Supports **browser-delegated authentication** (via Microsoft Entra ID) and **native authentication** (for External ID scenarios on iOS/macOS).  
  - Includes features like SSO, Conditional Access, and customizable sign-in/sign-up flows.  

- **Documentation & Resources**:  
  - [Official Documentation](https://learn.microsoft.com/en-us/entra/msal/objc/)  
  - [Code Samples](https://learn.microsoft.com/en-us/entra/identity-platform/sample-v2-code?tabs=framework#ios)  
  - [SDK Reference](https://azuread.github.io/microsoft-authentication-library-for-objc/)  

- **Key Updates**:  
  - **MSAL 2.x Migration**: Released with breaking changes; migration guide available [here](docs/MSAL_2x_Migration_Guide.md).  
  - **ADAL Deprecation**: ADAL Objective-C deprecated in June 2023; migration to MSAL is required.  

- **Getting Started**:  
  - Register apps in Microsoft Entra Admin Center.  
  - Use [browser-delegated quickstart](https://learn.microsoft.com/en-us/entra/identity-platform/quickstart-mobile-app-ios-sign-in) or [native authentication samples](https://learn.microsoft.com/en-us/entra/external-id/customers/how-to-run-native-authentication-sample-ios-app).  

## Key Points
- Supports **Microsoft Entra ID**, personal Microsoft accounts, and External ID for customers.  
- Provides **native authentication APIs** for iOS/macOS apps (e.g., end-to-end customizable sign-up/sign-in).  
- Requires migration from deprecated ADAL Objective-C (follow the [ADAL to MSAL guide](https://learn.microsoft.com/en-us/entra/msal/objc/migrate-objc-adal-msal)).  
- Actively maintained with latest update on 2026-04-09.  

## Sources
- [GitHub](https://github.com/AzureAD/microsoft-authentication-library-for-objc)
- [원본](raw/ingest/tech/2026-04-10-msal-for-ios-macos.md)