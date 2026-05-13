<!-- GitHub Trending: Swift | 3,704 stars | +1 today -->

# apple/swift-argument-parser

> Straightforward, type-safe argument parsing for Swift

## Repository Info
- **URL**: https://github.com/apple/swift-argument-parser
- **Stars**: 3,704
- **Forks**: 376
- **Language**: Swift
- **License**: Apache License 2.0
- **Created**: 2020-02-20
- **Updated**: 2026-05-12
- **Topics**: cli, command-line, flag, option
- **Open Issues**: 125

## README (excerpt)
# Swift Argument Parser

## Usage

Begin by declaring a type that defines the information
that you need to collect from the command line.
Decorate each stored property with one of `ArgumentParser`'s property wrappers,
and then declare conformance to `ParsableCommand` and add the `@main` attribute.
(Note, for `async` renditions of `run`, conform to `AsyncParsableCommand` rather
than `ParsableCommand`.)
Finally, implement your command's logic in the `run()` method.

```swift
import ArgumentParser

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
                print("\(i): \(phrase)")
            } else {
                print(phrase)
            }
        }
    }
}
```

The `ArgumentParser` library parses the command-line arguments,
instantiates your command type, and then either executes your `run()` method
or exits with a useful message.

`ArgumentParser` uses your properties' names and type information,
along with the details you provide using property wrappers,
to supply useful error messages and detailed help:

```
$ repeat hello --count 3
hello
hello
hello
$ repeat --count 3
Error: Missing expected argument 'phrase'.
Help:  <phrase>  The phrase to repeat.
Usage: repeat [--count <count>] [--include-counter] <phrase>
  See 'repeat --help' for more information.
$ repeat --help
USAGE: repeat [--count <count>] [--include-counter] <phrase>

ARGUMENTS:
  <phrase>                The phrase to repeat.

OPTIONS:
  --include-counter       Include a counter with each repetition.
  -c, --count <count>     The number of times to repeat 'phrase'.
  -h, --help              Show help for this command.
```

## Documentation

For guides, articles, and API documentation see the
[library's documentation on the Web][docs] or in Xcode.

- [ArgumentParser documentation][docs]
- [Getting Started with ArgumentParser](https://swiftpackageindex.com/apple/swift-argument-parser/documentation/argumentparser/gettingstarted)
- [`ParsableCommand` documentation](https://swiftpackageindex.com/apple/swift-argument-parser/documentation/argumentparser/parsablecommand)
- [`AsyncParsableCommand` documentation](https://swiftpackageindex.com/apple/swift-argument-parser/documentation/argumentparser/asyncparsablecommand)

[docs]: https://swiftpackageindex.com/apple/swift-argument-parser/documentation/argumentparser

#### Examples

This repository includes a few examples of using the library:

- [`repeat`](Examples/repeat/Repeat.swift) is the example shown above.
- [`roll`](Examples/roll/main.swift) is a simple utility implemented as a straight-line script.
- [`math`](Examples/math/Math.swift) is an annotated example of using nested commands and subcommands.
- [`count-lines`](Examples/count-lines/CountLines.swift) uses `async`/`await` code in its implementation.
- [`default-as-flag`](Examples/default-as-flag/DefaultAsFlag.swift) demonstrates hybrid options that can work both as flags and as options with values.

You can also see examples of `ArgumentParser` adoption among Swift project tools:

- [`swift-format`](https://github.com/apple/swift-format/) uses some advanced features, like custom option values and hidden flags.
- [`swift-package-manager`](https://github.com/apple/swift-package-manager/) includes a deep command hierarchy and extensive use of option groups.

## Project Status

The Swift Argument Parser package is source-stable;
version numbers follow semantic versioning.
Source-breaking changes to public API can only land in a new major version.

The public API of version 1.0.0 of the `swift-argument-parser` package
consists of non-underscored declarations that are marked