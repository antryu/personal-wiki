# Swift Snapshot Testing Library

> A Swift library for snapshot testing that simplifies UI verification by comparing runtime values against recorded references. Notable for its flexibility across platforms, support for multiple snapshot formats, and seamless integration with Swift Testing.  
> Last updated: 2026-04-10

## Overview

### Repository Information
- **URL**: [https://github.com/pointfreeco/swift-snapshot-testing](https://github.com/pointfreeco/swift-snapshot-testing)
- **Stars**: 4,203
- **Forks**: 663
- **Language**: Swift
- **License**: MIT License
- **Created**: 2017-07-07
- **Updated**: 2026-04-10
- **Topics**: screenshot-testing, snapshot-testing, swift, testing
- **Open Issues**: 199

### Usage
Once installed, the `SnapshotTesting` module provides the `assertSnapshot` function for testing values. For example, testing a `UIViewController`:

```swift
import SnapshotTesting
import Testing

@MainActor
struct MyViewControllerTests {
  @Test func myViewController() {
    let vc = MyViewController()
    assertSnapshot(of: vc, as: .image)
  }
}
```

On first run, a snapshot is recorded and the test fails, prompting the user to re-run after approval. Subsequent runs compare the runtime value against the reference.

### Snapshot Anything
Unlike libraries limited to `UIImage`, this tool works with **any value** (e.g., views, models) and **any format** (e.g., `.image`, `.recursiveDescription`):

```swift
assertSnapshot(of: vc, as: .image)
assertSnapshot(of: vc, as: .recursiveDescription)
```

Device-specific testing is supported via simulator configurations:

```swift
assertSnapshot(of: vc, as: .image(on: .iPhoneSe))
assertSnapshot(of: vc, as: .image(on: .iPhoneX(.landscape)))
```

> **Note**: Snapshots must use the same simulator as the reference to avoid discrepancies.

### Customization
- **Record specific snapshots**:  
  `assertSnapshot(of: vc, as: .image, record: .all)`
- **Record all snapshots in a scope**:  
  ```swift
  withSnapshotTesting(record: .all) {
    assertSnapshot(of: vc1, as: .image)
    assertSnapshot(of: vc2, as: .image)
  }
  ```
- **Automate recording in test suites**:  
  ```swift
  @Suite(.snapshots(record: .failed))
  struct FeatureTests {}
  ```

## Key Points
- Supports **any value type** and **any snapshot format** (e.g., images, text) across all Swift platforms.
- Requires **no additional configuration** beyond importing the module and calling `assertSnapshot`.

## Sources
- [GitHub](https://github.com/pointfreeco/swift-snapshot-testing)
- [원본](raw/ingest/tech/2026-04-10-swift-snapshot-testing-library.md)