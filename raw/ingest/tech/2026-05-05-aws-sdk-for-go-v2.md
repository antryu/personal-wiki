<!-- GitHub Trending: Go | 3,541 stars | +0 today -->

# aws/aws-sdk-go-v2

> AWS SDK for the Go programming language. 

## Repository Info
- **URL**: https://github.com/aws/aws-sdk-go-v2
- **Stars**: 3,541
- **Forks**: 778
- **Language**: Go
- **License**: Apache License 2.0
- **Created**: 2017-07-02
- **Updated**: 2026-05-05
- **Topics**: aws, aws-sdk, go, golang
- **Open Issues**: 133

## README (excerpt)
# AWS SDK for Go v2

[![Go Build status](https://github.com/aws/aws-sdk-go-v2/actions/workflows/go.yml/badge.svg?branch=main)](https://github.com/aws/aws-sdk-go-v2/actions/workflows/go.yml)[![Codegen Build status](https://github.com/aws/aws-sdk-go-v2/actions/workflows/codegen.yml/badge.svg?branch=main)](https://github.com/aws/aws-sdk-go-v2/actions/workflows/codegen.yml) [![SDK Documentation](https://img.shields.io/badge/SDK-Documentation-blue)](https://docs.aws.amazon.com/sdk-for-go/) [![Migration Guide](https://img.shields.io/badge/Migration-Guide-blue)](https://aws.github.io/aws-sdk-go-v2/docs/migrating/) [![API Reference](https://img.shields.io/badge/api-reference-blue.svg)](https://pkg.go.dev/mod/github.com/aws/aws-sdk-go-v2) [![Apache V2 License](https://img.shields.io/badge/license-Apache%20V2-blue.svg)](https://github.com/aws/aws-sdk-go-v2/blob/main/LICENSE.txt)

`aws-sdk-go-v2` is the v2 AWS SDK for the Go programming language.

The v2 SDK requires a minimum version of `Go 1.24`.

Check out the [release notes](https://github.com/aws/aws-sdk-go-v2/blob/main/CHANGELOG.md) for information about the latest bug
fixes, updates, and features added to the SDK.

Jump To:
* [Getting Started](#getting-started)
* [Getting Help](#getting-help)
* [Contributing](#feedback-and-contributing)
* [More Resources](#resources)

## Maintenance and support for SDK major versions

For information about maintenance and support for SDK major versions and their underlying dependencies, see the
following in the AWS SDKs and Tools Shared Configuration and Credentials Reference Guide:

* [AWS SDKs and Tools Maintenance Policy](https://docs.aws.amazon.com/credref/latest/refdocs/maint-policy.html)
* [AWS SDKs and Tools Version Support Matrix](https://docs.aws.amazon.com/credref/latest/refdocs/version-support-matrix.html)

### Go version support policy

The v2 SDK follows the upstream [release policy](https://go.dev/doc/devel/release#policy)
with an additional six months of support for the most recently deprecated
language version.

**AWS reserves the right to drop support for unsupported Go versions earlier to
address critical security issues.**

## Getting started
To get started working with the SDK setup your project for Go modules, and retrieve the SDK dependencies with `go get`.
This example shows how you can use the v2 SDK to make an API request using the SDK's [Amazon DynamoDB] client.

###### Initialize Project
```sh
$ mkdir ~/helloaws
$ cd ~/helloaws
$ go mod init helloaws
```
###### Add SDK Dependencies
```sh
$ go get github.com/aws/aws-sdk-go-v2/aws
$ go get github.com/aws/aws-sdk-go-v2/config
$ go get github.com/aws/aws-sdk-go-v2/service/dynamodb
```

###### Write Code
In your preferred editor add the following content to `main.go`

```go
package main

import (
    "context"
    "fmt"
    "log"

    "github.com/aws/aws-sdk-go-v2/aws"
    "github.com/aws/aws-sdk-go-v2/config"
    "github.com/aws/aws-sdk-go-v2/service/dynamodb"
)

func main() {
    // Using the SDK's default configuration, load additional config
    // and credentials values from the environment variables, shared
    // credentials, and shared configuration files
    cfg, err := config.LoadDefaultConfig(context.TODO(), config.WithRegion("us-west-2"))
    if err != nil {
        log.Fatalf("unable to load SDK config, %v", err)
    }

    // Using the Config value, create the DynamoDB client
    svc := dynamodb.NewFromConfig(cfg)

    // Build the request with its input parameters
    resp, err := svc.ListTables(context.TODO(), &dynamodb.ListTablesInput{
        Limit: aws.Int32(5),
    })
    if err != nil {
        log.Fatalf("failed to list tables, %v", err)
    }

    fmt.Println("Tables:")
    for _, tableName := range resp.TableNames {
        fmt.Println(tableName)
    }
}
```

###### Compile and Execute
```sh
$ go run .
Tables:
tableOne
tableTwo
```

## Getting Help

Please use these community resources for getting help. We use the GitHub issues
for tracking bugs and fe