# Azure SDK for Go

> The Azure SDK for Go provides tools and libraries to build and manage applications on Microsoft Azure using the Go programming language. It is notable for its modular architecture, active development, and comprehensive support for Azure services.
> Last updated: 2026-04-18

## Overview
The **Azure SDK for Go** is a GitHub-hosted project for developing and maintaining libraries that allow Go developers to interact with Azure services. It supports both client-side operations for using Azure services and management operations for provisioning and configuring resources.

The repository is actively maintained and follows best practices for Go development, with compatibility for the two most recent major Go releases. It includes documentation, code samples, and tools to assist developers in integrating Azure services into their applications.

The SDK is organized into modules, grouped under the `/sdk` directory, with each service having both client and management modules. Client modules are used to interact with Azure resources, while management modules handle the configuration and lifecycle of those resources.

A key part of the SDK is the `azcore` module, which provides shared functionalities such as retries, logging, transport, and authentication. Management modules are located under `sdk/resourcemanager` and include features like identity management, HTTP pipelines, error handling, and distributed tracing.

The SDK is available under the MIT License and has a large community of contributors, with over 1,800 stars and 968 forks on GitHub.

## Key Points
- The SDK supports both client and management operations for Azure services.
- It follows the Azure Go SDK guidelines for consistency and usability.
- Developers are encouraged to use the latest Go versions for security and support.
- The root module is deprecated, and users should migrate to the new modular SDK version.
- Comprehensive documentation and migration guides are available to ease adoption.

## Sources
- [GitHub](https://github.com/Azure/azure-sdk-for-go)
- [원본](raw/ingest/tech/2026-04-18-azure-sdk-for-go.md)