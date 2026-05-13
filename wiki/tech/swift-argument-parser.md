# Swift Argument Parser

> Swift Argument Parser is a powerful library that allows developers to create command-line tools in Swift with type-safe and easy-to-use argument parsing. It's notable for its seamless integration with Swift's features and for providing automatic help messages and error handling.  
> Last updated: 2026-05-13

## Overview

The Swift Argument Parser library helps developers create well-structured command-line tools in Swift by using property wrappers and conformance to `ParsableCommand`. It simplifies the parsing of command-line arguments while providing detailed help messages and robust error handling.

The repository provides an extensive API for defining commands, options, and arguments, and supports both synchronous and asynchronous command execution. It is widely used in tools like `swift-format` and `swift-package-manager`, and is developed and maintained by Apple.

The project is actively maintained, with over 3,704 stars and 376 forks on GitHub. It is licensed under the Apache License 2.0 and is open-source, allowing developers to contribute and extend its capabilities.

The main idea is to define a struct or class with properties marked using `ArgumentParser`'s property wrappers such as `@Argument`, `@Option`, and `@Flag`. The library handles the parsing of command-line input, instantiates the command structure, and executes the `run()` method.

For example, the following code defines a `Repeat` command that takes a phrase and optional parameters such as a counter and repeat count:

```swift
@main
struct Repeat: ParsableCommand {
    @Flag(help: "Include a counter with each repetition.")
    var includeCounter = false

    @Option(name: .shortAndLong, help: "How many times to repeat 'phrase'.")
    var count: Int? = nil

    @Argument(help: "The phrase to repeat.")
    var phrase: String

    mutating func run() throws {
        let repeatCount = count ?? 2

        for i in 1...repeatCount {
            if includeCounter {
                print("\(i): $phrase)")
            } else {
                print(phrase)
            }
        }
    }
}
```

This example demonstrates the simplicity of using the library. Developers can focus on the logic of their commands while the library handles the input parsing and user interaction.

The project also includes multiple examples in the repository, such as `repeat`, `roll`, `math`, `count-lines`, and `default-as-flag`. These examples show various advanced features like nested commands, async/await, and hybrid options.

## Key Points
- Simplifies command-line argument parsing in Swift using `@Argument`, `@Option`, and `@Flag`.
- Supports both synchronous and asynchronous command execution with `ParsableCommand` and `AsyncParsableCommand`.
- Provides automatic help messages and error handling.
- Actively maintained and used in core Swift tools like `swift-format` and `swift-package-manager`.
- Open-source with a large community and Apache 2.0 license.

## Sources
- [GitHub](https://github.com/apple/swift-argument-parser)
- [원본](raw/ingest/tech/2026-05-13-swift-argument-parser.md)