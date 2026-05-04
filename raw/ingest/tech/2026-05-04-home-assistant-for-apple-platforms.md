<!-- GitHub Trending: Swift | 2,181 stars | +0 today -->

# home-assistant/iOS

> :iphone: Home Assistant for Apple platforms

## Repository Info
- **URL**: https://github.com/home-assistant/iOS
- **Stars**: 2,181
- **Forks**: 448
- **Language**: Swift
- **License**: Apache License 2.0
- **Created**: 2016-04-03
- **Updated**: 2026-05-04
- **Topics**: hacktoberfest, home-assistant, home-automation, ios, macos, open-source-app, swift
- **Open Issues**: 206

## README (excerpt)
Home Assistant for Apple Platforms
=================

[![TestFlight Beta invite](https://img.shields.io/badge/TestFlight-Beta-blue.svg)](https://www.home-assistant.io/ios/beta/)
[![Download on the App Store](https://img.shields.io/itunes/v/1099568401.svg)](https://itunes.apple.com/app/home-assistant-open-source-home-automation/id1099568401)
[![GitHub issues](https://img.shields.io/github/issues/home-assistant/iOS.svg?style=flat)](https://github.com/home-assistant/iOS/issues)
[![License Apache 2.0](https://img.shields.io/badge/license-Apache%202.0-green.svg?style=flat)](https://github.com/home-assistant/iOS/blob/master/LICENSE)

## Getting Started

Home Assistant uses Bundler, Homebrew and Cocoapods to manage build dependencies. You'll need Xcode 26.2 (or later) which you can download from the [App Store](https://developer.apple.com/download/). You can get the app running using the following commands:

```bash
git clone https://github.com/home-assistant/iOS.git
cd iOS

# you must do one of the following, but you do not need to do all of them:

## install cocoapods via homebrew, use that
brew install cocoapods
$(brew --prefix)/opt/ruby/bin/gem install cocoapods-acknowledgements
pod install --repo-update

## install ruby via homebrew, use that
brew install ruby@3.1
$(brew --prefix)/opt/ruby@3.1/bin/bundle install
$(brew --prefix)/opt/ruby@3.1/bin/bundle exec pod install --repo-update

## install ruby via rbenv, use that
brew install rbenv ruby-build
rbenv install
bundle install
bundle exec pod install --repo-update

## install ruby via mise, use that
brew install mise
mise install
bundle install
bundle exec pod install --repo-update
```

Once this completes, you can launch  `HomeAssistant.xcworkspace` and run the `App-Debug` scheme onto your simulator or iOS device.

## Testing just the frontend

To just test the [frontend](https://github.com/home-assistant/frontend), you can use a simulator version built by our GitHub actions.

1. Install Xcode from the [App Store](https://developer.apple.com/download/) making sure it's at least the version noted above. You do not need to install or run anything else.
2. Launch the simulator at `/Applications/Xcode.app/Contents/Developer/Applications/Simulator.app` or in Xcode under the Xcode menu > Open Developer Tool.
3. Open a simulator under File > Open Simulator. You can install older versions of iOS in Xcode's Components preferences.
4. Download a simulator build from the [the GitHub action](https://github.com/home-assistant/iOS/actions/workflows/ci.yml?query=branch%3Amaster) under "Artifacts."
5. Drag the result `.app` on drop it on top of the simulator.
6. Locate the app on the home screen and click it to launch.

The simulator behaves different than you might expect:

| Action | Effect |
| -- | -- |
| Click | Tap |
| Click & drag | Scroll |
| Hold ⌥ | Add a second touch point |
| Hold ⇧⌥ | Move both touch points |
| ⌘←, ⌘→ | Rotate |
| ⌘S | Take screenshot |
| ⌘R | Record video |
| ⌘K | Toggle software keyboard |

You can now debug the WebView in this simulator build using Safari's Web Inspector:

1. Make sure "Show Develop menu in menu bar" is enabled in Safari's Advanced preferences.
2. Under the Develop menu, expand the "Simulator" menu for the simulator you've opened.
3. Choose the WebView you want to inspect. A new window will open.

## Code Signing

Although the app is set up to use Automatic provisioning for Debug builds, you'll need to customize a few of the options. This is because the app makes heavy use of entitlements that require code signing, even for simulator builds.

Edit the file `Configuration/HomeAssistant.overrides.xcconfig` (which will not exist by default and is ignored by git) and add the following:

```bash
DEVELOPMENT_TEAM = YourTeamID
BUNDLE_ID_PREFIX = some.bundle.prefix
```

Xcode should generate provisioning profiles in your Team ID and our configuration will disable features your team doesn't have like Critical Alerts. You can find your Team ID on Apple's 