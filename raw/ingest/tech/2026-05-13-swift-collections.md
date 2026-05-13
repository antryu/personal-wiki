<!-- GitHub Trending: Swift | 4,399 stars | +2 today -->

# apple/swift-collections

> Commonly used data structures for Swift

## Repository Info
- **URL**: https://github.com/apple/swift-collections
- **Stars**: 4,399
- **Forks**: 375
- **Language**: Swift
- **License**: Apache License 2.0
- **Created**: 2021-02-15
- **Updated**: 2026-05-13
- **Topics**: collection, container, deque, dequeue, hash, ordered-dictionary, ordered-set, queue, sequence
- **Open Issues**: 70

## README (excerpt)
# Swift Collections

**Swift Collections** is an open-source package of data structure implementations for the Swift programming language.

[![](https://img.shields.io/endpoint?url=https%3A%2F%2Fswiftpackageindex.com%2Fapi%2Fpackages%2Fapple%2Fswift-collections%2Fbadge%3Ftype%3Dswift-versions)](https://swiftpackageindex.com/apple/swift-collections) [![](https://img.shields.io/endpoint?url=https%3A%2F%2Fswiftpackageindex.com%2Fapi%2Fpackages%2Fapple%2Fswift-collections%2Fbadge%3Ftype%3Dplatforms)](https://swiftpackageindex.com/apple/swift-collections)

## Table of Contents

  * [Stable Data Structures](#stable-data-structures)
      * [`BasicContainers` module](#basiccontainers-module)
      * [`DequeModule` module](#dequemodule-module)
      * [`OrderedCollections` module](#orderedcollections-module)
      * [`BitCollections` module](#bitcollections-module)
      * [`HeapModule` module](#heapmodule-module)
      * [`HashTreeCollections` module](#hashtreecollections-module)
      * [`TrailingElementsModule` module](#trailingelementsmodule-module)
      * [`ContainersPreview` module](#containerspreview-module)
      * [`Collections` module](#collections-module)
  * [Experimental Features](#experimental-features)
    * [`UnstableContainersPreview` package trait](#unstablecontainerspreview-package-trait)
    * [`UnstableHashedContainers` package trait](#unstablehashedcontainers-package-trait)
    * [`UnstableSortedCollections` package trait](#unstablesortedcollections-package-trait)
  * [Project Status](#project-status)
    * [Definition of Public API](#public-api)
    * [Minimum Required Swift Toolchain Version](#minimum-required-swift-toolchain-version)
  * [Using Swift Collections in your project](#using-swift-collections-in-your-project)
  * [Contributing to Swift Collections](#contributing-to-swift-collections)
    * [Branching Strategy](#branching-strategy)
    * [Working on the package](#working-on-the-package)
      * [Fixing a bug or making a small improvement](#fixing-a-bug-or-making-a-small-improvement)
      * [Proposing a small enhancement](#proposing-a-small-enhancement)
      * [Proposing the addition of a new data structure](#proposing-the-addition-of-a-new-data-structure)
  * [Code of Conduct](#code-of-conduct)
  * [Contact information](#contact-information)


## Stable Data Structures

The package currently provides the following types, organized into thematic modules:

#### [`BasicContainers`][BasicContainers] module

Ownership-aware reimplementations of the standard generic collection types `Array`, `Set`, and `Dictionary`.

- [`struct UniqueArray<Element>`][UniqueArray] is a uniquely held, dynamically resizing array.
- [`struct RigidArray<Element>`][RigidArray] is a fixed-capacity array.

[BasicContainers]: https://swiftpackageindex.com/apple/swift-collections/documentation/basiccontainers
[RigidArray]: https://swiftpackageindex.com/apple/swift-collections/documentation/basiccontainers/rigidarray
[UniqueArray]: https://swiftpackageindex.com/apple/swift-collections/documentation/basiccontainers/uniquearray

#### [`DequeModule`][DequeModule] module

Implementations of double-ended queue types, implemented by a ring buffer.

- [`struct Deque<Element>`][Deque] is a classic collection, implementing value semantics with the copy-on-write optimization.
- [`struct UniqueDeque<Element>`][UniqueDeque] is a uniquely held, dynamically resizing, noncopyable deque.
- [`struct RigidDeque<Element>`][RigidDeque] is a fixed-capacity deque implementation.

[DequeModule]: https://swiftpackageindex.com/apple/swift-collections/documentation/dequemodule
[Deque]: https://swiftpackageindex.com/apple/swift-collections/documentation/dequemodule/deque
[RigidDeque]: https://swiftpackageindex.com/apple/swift-collections/documentation/dequemodule/rigiddeque
[UniqueDeque]: https://swiftpackageindex.com/apple/swift-collections/documentation/dequemodule/uniquedeque

#### [`OrderedCollections`][OrderedCollections] module

Provides variants of t