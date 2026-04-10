<!-- GitHub Trending: Swift | 1,749 stars | +1 today -->

# pointfreeco/sqlite-data

> A fast, lightweight replacement for SwiftData, powered by SQL and supporting CloudKit synchronization.

## Repository Info
- **URL**: https://github.com/pointfreeco/sqlite-data
- **Stars**: 1,749
- **Forks**: 101
- **Language**: Swift
- **License**: MIT License
- **Created**: 2024-12-11
- **Updated**: 2026-04-10
- **Topics**: cloudkit, database, observation, persistence, sql, sqlite, swiftdata, swiftui, synchronization
- **Open Issues**: 25

## README (excerpt)
# SQLiteData

A [fast](#Performance), lightweight replacement for SwiftData, powered by SQL and supporting
CloudKit synchronization.

[![CI](https://github.com/pointfreeco/sqlite-data/actions/workflows/ci.yml/badge.svg)](https://github.com/pointfreeco/sqlite-data/actions/workflows/ci.yml)
[![Slack](https://img.shields.io/badge/slack-chat-informational.svg?label=Slack&logo=slack)](https://www.pointfree.co/slack-invite)
[![](https://img.shields.io/endpoint?url=https%3A%2F%2Fswiftpackageindex.com%2Fapi%2Fpackages%2Fpointfreeco%2Fsqlite-data%2Fbadge%3Ftype%3Dswift-versions)](https://swiftpackageindex.com/pointfreeco/sqlite-data)
[![](https://img.shields.io/endpoint?url=https%3A%2F%2Fswiftpackageindex.com%2Fapi%2Fpackages%2Fpointfreeco%2Fsqlite-data%2Fbadge%3Ftype%3Dplatforms)](https://swiftpackageindex.com/pointfreeco/sqlite-data)

  * [Learn more](#Learn-more)
  * [Overview](#Overview)
  * [Quick start](#Quick-start)
  * [Performance](#Performance)
  * [SQLite knowledge required](#SQLite-knowledge-required)
  * [Overview](#Overview)
  * [Demos](#Demos)
  * [Documentation](#Documentation)
  * [Installation](#Installation)
  * [Community](#Community)
  * [License](#License)

## Learn more

This library was motivated and designed over the course of many episodes on
[Point-Free](https://www.pointfree.co), a video series exploring advanced programming topics in the
Swift language, hosted by [Brandon Williams](https://twitter.com/mbrandonw) and
[Stephen Celis](https://twitter.com/stephencelis). To support the continued development of this
library, [subscribe today](https://www.pointfree.co/pricing).

<a href="https://www.pointfree.co/collections/modern-persistence">
  <img alt="video poster image" src="https://d3rccdn33rt8ze.cloudfront.net/episodes/0325.jpeg" width="600">
</a>

## Overview

SQLiteData is a [fast](#performance), lightweight replacement for SwiftData, including CloudKit
synchronization (and even CloudKit sharing), built on top of the popular [GRDB] library.
To populate data from the database you can use `@Table` and `@FetchAll`, which are
similar to SwiftData's `@Model` and `@Query`:

<table>
<tr>
<th>SQLiteData</th>
<th>SwiftData</th>
</tr>
<tr valign=top>
<td width=415>

```swift
@FetchAll
var items: [Item]

@Table
struct Item {
  let id: UUID
  var title = ""
  var isInStock = true
  var notes = ""
}
```

</td>
<td width=415>

```swift
@Query
var items: [Item]

@Model
class Item {
  var title: String
  var isInStock: Bool
  var notes: String
  init(
    title: String = "",
    isInStock: Bool = true,
    notes: String = ""
  ) {
    self.title = title
    self.isInStock = isInStock
    self.notes = notes
  }
}
```

</td>
</tr>
</table>

Both of the above examples fetch items from an external data store using Swift data types, and both
are automatically observed by SwiftUI so that views are recomputed when the external data changes,
but SQLiteData is powered directly by SQLite and is usable from UIKit, `@Observable` models, and
more.

For more information on SQLiteData's querying capabilities, see
[Fetching model data][fetching-article].

## Quick start

Before SQLiteData's property wrappers can fetch data from SQLite, you need to provide–at
runtime–the default database it should use. This is typically done as early as possible in your
app's lifetime, like the app entry point in SwiftUI, and is analogous to configuring model storage
in SwiftData:

<table>
<tr>
<th>SQLiteData</th>
<th>SwiftData</th>
</tr>
<tr valign=top>
<td width=415>

```swift
@main
struct MyApp: App {
  init() {
    prepareDependencies {
      let db = try! DatabaseQueue(
        // Create/migrate a database
        // connection
      )
      $0.defaultDatabase = db
    }
  }
  // ...
}
```

</td>
<td width=415>

```swift
@main
struct MyApp: App {
  let container = {
    // Create/configure a container
    try! ModelContainer(/* ... */)
  }()

  var body: some Scene {
    WindowGroup {
      ContentView()
        .modelContainer(container)
    }
  }