<!-- GitHub Trending: Go | 1,813 stars | +0 today -->

# Azure/azure-sdk-for-go

> This repository is for active development of the Azure SDK for Go. For consumers of the SDK we recommend visiting our public developer docs at:

## Repository Info
- **URL**: https://github.com/Azure/azure-sdk-for-go
- **Stars**: 1,813
- **Forks**: 968
- **Language**: Go
- **License**: MIT License
- **Created**: 2014-08-11
- **Updated**: 2026-04-18
- **Topics**: azure, azure-sdk, go, golang, hacktoberfest, microsoft, rest, sdk
- **Open Issues**: 360

## README (excerpt)
# Azure SDK for Go

[![godoc](https://godoc.org/github.com/Azure/azure-sdk-for-go?status.svg)](https://godoc.org/github.com/Azure/azure-sdk-for-go)

This repository is for active development of the Azure SDK for Go. For consumers of the SDK you can follow the links below to visit the documentation you are interested in
* [Overview of Azure SDK for Go](https://docs.microsoft.com/azure/developer/go/)
* [SDK Reference](https://pkg.go.dev/github.com/Azure/azure-sdk-for-go/sdk)
* [Code Samples for Azure Go SDK](https://github.com/azure-samples/azure-sdk-for-go-samples)
* [Azure REST API Docs](https://docs.microsoft.com/rest/api/)
* [General Azure Docs](https://docs.microsoft.com/azure)
* [Share your feedback to our Azure SDK](https://www.surveymonkey.com/r/FWPGFGG)

## Getting Started

To get started with a module, see the README.md file located in the module's project folder.  You can find these module folders grouped by service in the `/sdk` directory.

<a id="go-version-support"></a>
> [!IMPORTANT]
> Our libraries are compatible with the two most recent major Go releases, the same [policy](https://go.dev/doc/devel/release#policy) the Go programming language follows.

> [!IMPORTANT]
> Projects are highly encouraged to use the latest version of Go. This ensures your product has all the latest security fixes and is included in [Go's support lifecycle](https://go.dev/doc/devel/release).

> [!WARNING]
> The [root azure-sdk-for-go Go module](https://godoc.org/github.com/Azure/azure-sdk-for-go) which contains subpaths of `/services/**/mgmt/**` (also known as track 1) is [deprecated and no longer receiving support](https://azure.github.io/azure-sdk/releases/deprecated/go.html). See [the migration guide](https://github.com/Azure/azure-sdk-for-go/blob/main/documentation/development/ARM/MIGRATION_GUIDE.md) to learn how to migrate to the current version.

## Packages available

Each service can have both 'client' and 'management' modules. 'Client' modules are used to consume the service, whereas 'management' modules are used to configure and manage the service.

### Client modules

Our client modules follow the [Azure Go SDK guidelines](https://azure.github.io/azure-sdk/golang_introduction.html). These modules allow you to use, consume, and interact with existing resources, for example, uploading a blob. They also share a number of core functionalities including retries, logging, transport protocols, authentication protocols, etc. that can be found in the [azcore](https://github.com/Azure/azure-sdk-for-go/blob/main/sdk/azcore) module.

You can find the most up-to-date list of new modules on our [latest page](https://azure.github.io/azure-sdk/releases/latest/index.html#go).

> [!NOTE]
> If you need to ensure your code is ready for production use one of the stable, non-beta modules.

### Management modules
Similar to our client modules, the management modules follow the [Azure Go SDK guidelines](https://azure.github.io/azure-sdk/golang_introduction.html). All management modules are available at `sdk/resourcemanager`. These modules provide a number of core capabilities that are shared amongst all Azure SDKs, including the intuitive Azure Identity module, an HTTP Pipeline with custom policies, error-handling, distributed tracing, and much more.

To get started, please follow the [quickstart guide here](https://aka.ms/azsdk/go/mgmt). To see the benefits of migrating and how to migrate to the new modules, please visit the [migration guide](https://aka.ms/azsdk/go/mgmt/migration).

You can find the [most up to date list of all of the new packages on our page](https://azure.github.io/azure-sdk/releases/latest/mgmt/go.html)

> [!NOTE]
> If you need to ensure your code is ready for production use one of the stable, non-beta modules. Also, if you are experiencing authentication issues with the management modules after upgrading certain packages, it's possible that you upgraded to the new versions of SDK without changing the authentication code. Please