# SQLiteData Swift SQLite & CloudKit Sync

> A fast, lightweight replacement for SwiftData, powered by SQLite and supporting CloudKit synchronization. Built on GRDB, it offers SwiftUI observation and cross-platform compatibility.  
> Last updated: 2026-04-10

## Overview
- **Repository**: [pointfreeco/sqlite-data](https://github.com/pointfreeco/sqlite-data)  
  - **Stars**: 1,749 | **Forks**: 101 | **License**: MIT  
  - **Created**: 2024-12-11 | **Updated**: 2026-04-10  
  - **Topics**: cloudkit, database, sql, swiftdata, synchronization  
- **Purpose**: Provides a Swift-friendly SQLite layer with CloudKit sync, replacing SwiftData for performance and control.  
- **Key Features**:  
  - Uses `@Table` and `@FetchAll` for model definitions and queries (analogous to SwiftData's `@Model`/`@Query`).  
  - Built on [GRDB](https://github.com/groue/GRDB.swift) for SQLite operations.  
  - Supports CloudKit synchronization and sharing.  
  - SwiftUI views automatically observe data changes.  
- **Performance**: Emphasizes speed and lightweight design compared to SwiftData.  
- **Quick Start**: Requires configuring a `DatabaseQueue` at app launch, similar to SwiftData's `ModelContainer`.  
- **Community**: Backed by [Point-Free](https://www.pointfree.co), a Swift education platform.  

## Key Points
- Replaces SwiftData with SQLite and GRDB for faster, more flexible persistence.  
- Integrates CloudKit synchronization and sharing out-of-the-box.  
- SwiftUI-compatible with automatic view updates via observation.  
- Cross-platform support for UIKit, `@Observable` models, and more.  
- Actively maintained with 25 open issues and 101 forks as of 2026-04-10.  

## Sources
- [GitHub](https://github.com/pointfreeco/sqlite-data)
- [원본](raw/ingest/tech/2026-04-10-sqlitedata-swift-sqlite-cloudkit-sync.md)