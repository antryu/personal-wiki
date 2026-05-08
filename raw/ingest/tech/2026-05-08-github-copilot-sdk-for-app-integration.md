<!-- GitHub Trending: TypeScript | 8,621 stars | +7 today -->

# github/copilot-sdk

> Multi-platform SDK for integrating GitHub Copilot Agent into apps and services

## Repository Info
- **URL**: https://github.com/github/copilot-sdk
- **Stars**: 8,621
- **Forks**: 1,165
- **Language**: TypeScript
- **License**: MIT License
- **Created**: 2026-01-14
- **Updated**: 2026-05-08
- **Topics**: N/A
- **Open Issues**: 223

## README (excerpt)
# GitHub Copilot CLI SDKs

![GitHub Copilot SDK](./assets/RepoHeader_01.png)

[![NPM Downloads](https://img.shields.io/npm/dm/%40github%2Fcopilot-sdk?label=npm)](https://www.npmjs.com/package/@github/copilot-sdk)
[![PyPI - Downloads](https://img.shields.io/pypi/dm/github-copilot-sdk?label=PyPI)](https://pypi.org/project/github-copilot-sdk/)
[![NuGet Downloads](https://img.shields.io/nuget/dt/GitHub.Copilot.SDK?label=NuGet)](https://www.nuget.org/packages/GitHub.Copilot.SDK)

Agents for every app.

Embed Copilot's agentic workflows in your application—now available in public preview as a programmable SDK for Python, TypeScript, Go, .NET, and Java.

The GitHub Copilot SDK exposes the same engine behind Copilot CLI: a production-tested agent runtime you can invoke programmatically. No need to build your own orchestration—you define agent behavior, Copilot handles planning, tool invocation, file edits, and more.

## Available SDKs

| SDK                      | Location                                                                | Cookbook                                                                                              | Installation                                                                                                                                                                                                                               |
| ------------------------ | ----------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **Node.js / TypeScript** | [`nodejs/`](./nodejs/)                                                  | [Cookbook](https://github.com/github/awesome-copilot/blob/main/cookbook/copilot-sdk/nodejs/README.md) | `npm install @github/copilot-sdk`                                                                                                                                                                                                          |
| **Python**               | [`python/`](./python/)                                                  | [Cookbook](https://github.com/github/awesome-copilot/blob/main/cookbook/copilot-sdk/python/README.md) | `pip install github-copilot-sdk`                                                                                                                                                                                                           |
| **Go**                   | [`go/`](./go/)                                                          | [Cookbook](https://github.com/github/awesome-copilot/blob/main/cookbook/copilot-sdk/go/README.md)     | `go get github.com/github/copilot-sdk/go`                                                                                                                                                                                                  |
| **.NET**                 | [`dotnet/`](./dotnet/)                                                  | [Cookbook](https://github.com/github/awesome-copilot/blob/main/cookbook/copilot-sdk/dotnet/README.md) | `dotnet add package GitHub.Copilot.SDK`                                                                                                                                                                                                    |
| **Java**                 | [`github/copilot-sdk-java`](https://github.com/github/copilot-sdk-java) | [Cookbook](https://github.com/github/awesome-copilot/blob/main/cookbook/copilot-sdk/java/README.md)                                                                                                   | Maven coordinates<br>`com.github:copilot-sdk-java`<br>See instructions for [Maven](https://