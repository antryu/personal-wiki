<!-- GitHub Trending: Swift | 4,203 stars | +3 today -->

# pointfreeco/swift-snapshot-testing

> 📸 Delightful Swift snapshot testing.

## Repository Info
- **URL**: https://github.com/pointfreeco/swift-snapshot-testing
- **Stars**: 4,203
- **Forks**: 663
- **Language**: Swift
- **License**: MIT License
- **Created**: 2017-07-07
- **Updated**: 2026-04-10
- **Topics**: screenshot-testing, snapshot-testing, swift, testing
- **Open Issues**: 199

## README (excerpt)
# 📸 SnapshotTesting

[![CI](https://github.com/pointfreeco/swift-snapshot-testing/workflows/CI/badge.svg)](https://actions-badge.atrox.dev/pointfreeco/swift-snapshot-testing/goto)
[![Slack](https://img.shields.io/badge/slack-chat-informational.svg?label=Slack&logo=slack)](http://pointfree.co/slack-invite)
[![](https://img.shields.io/endpoint?url=https%3A%2F%2Fswiftpackageindex.com%2Fapi%2Fpackages%2Fpointfreeco%2Fswift-snapshot-testing%2Fbadge%3Ftype%3Dswift-versions)](https://swiftpackageindex.com/pointfreeco/swift-snapshot-testing)
[![](https://img.shields.io/endpoint?url=https%3A%2F%2Fswiftpackageindex.com%2Fapi%2Fpackages%2Fpointfreeco%2Fswift-snapshot-testing%2Fbadge%3Ftype%3Dplatforms)](https://swiftpackageindex.com/pointfreeco/swift-snapshot-testing)

Delightful Swift snapshot testing.

## Usage

Once [installed](#installation), _no additional configuration is required_. You can import the
`SnapshotTesting` module and call the `assertSnapshot` function.

``` swift
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

When an assertion first runs, a snapshot is automatically recorded to disk and the test will fail,
printing out the file path of any newly-recorded reference.

> ❌ failed - No reference was found on disk. Automatically recorded snapshot: …
>
> open "…/MyAppTests/\_\_Snapshots\_\_/MyViewControllerTests/testMyViewController.png"
>
> Re-run "testMyViewController" to test against the newly-recorded snapshot.

Repeat test runs will load this reference and compare it with the runtime value. If they don't
match, the test will fail and describe the difference. Failures can be inspected from Xcode's Report
Navigator or by inspecting the file URLs of the failure.

You can record a new reference by customizing snapshots inline with the assertion, or using the
`withSnapshotTesting` tool:

```swift
// Record just this one snapshot
assertSnapshot(of: vc, as: .image, record: .all)

// Record all snapshots in a scope:
withSnapshotTesting(record: .all) {
  assertSnapshot(of: vc1, as: .image)
  assertSnapshot(of: vc2, as: .image)
  assertSnapshot(of: vc3, as: .image)
}

// Record all snapshot failures in a Swift Testing suite:
@Suite(.snapshots(record: .failed))
struct FeatureTests {}

// Record all snapshot failures in an 'XCTestCase' subclass:
class FeatureTests: XCTestCase {
  override func invokeTest() {
    withSnapshotTesting(record: .failed) {
      super.invokeTest()
    }
  }
}
```

## Snapshot Anything

While most snapshot testing libraries in the Swift community are limited to `UIImage`s of `UIView`s,
SnapshotTesting can work with _any_ format of _any_ value on _any_ Swift platform!

The `assertSnapshot` function accepts a value and any snapshot strategy that value supports. This
means that a view or view controller can be tested against an image representation _and_ against a
textual representation of its properties and subview hierarchy.

``` swift
assertSnapshot(of: vc, as: .image)
assertSnapshot(of: vc, as: .recursiveDescription)
```

View testing is highly configurable. You can override trait collections (for specific size classes
and content size categories) and generate device-agnostic snapshots, all from a single simulator.

``` swift
assertSnapshot(of: vc, as: .image(on: .iPhoneSe))
assertSnapshot(of: vc, as: .recursiveDescription(on: .iPhoneSe))

assertSnapshot(of: vc, as: .image(on: .iPhoneSe(.landscape)))
assertSnapshot(of: vc, as: .recursiveDescription(on: .iPhoneSe(.landscape)))

assertSnapshot(of: vc, as: .image(on: .iPhoneX))
assertSnapshot(of: vc, as: .recursiveDescription(on: .iPhoneX))

assertSnapshot(of: vc, as: .image(on: .iPadMini(.portrait)))
assertSnapshot(of: vc, as: .recursiveDescription(on: .iPadMini(.portrait)))
```

> **Warning**
> Snapshots must be compared using the exact same simulator that originally took the reference to
> avoid discrepan