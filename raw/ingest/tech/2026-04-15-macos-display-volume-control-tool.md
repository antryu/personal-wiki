<!-- GitHub Trending: Swift | 32,954 stars | +13 today -->

# MonitorControl/MonitorControl

> 🖥 Control your display's brightness & volume on your Mac as if it was a native Apple Display. Use Apple Keyboard keys or custom shortcuts. Shows the native macOS OSDs.

## Repository Info
- **URL**: https://github.com/MonitorControl/MonitorControl
- **Stars**: 32,954
- **Forks**: 950
- **Language**: Swift
- **License**: MIT License
- **Created**: 2017-09-16
- **Updated**: 2026-04-15
- **Topics**: apple, brightness, control, ddc, display, external-monitor, gamma, keyboard, m1, macos, macos-app, menubar, osx, shade, silicon, swift, volume, xcode
- **Open Issues**: 19

## README (excerpt)
<img src=".github/Icon-cropped.png" width="200" alt="App icon" align="left"/>

<div>
<h3>MonitorControl</h3>
<p>Controls your external display brightness and volume and shows native OSD.
Use menubar extra sliders or the keyboard, including native Apple keys!</p>
<a href="https://github.com/MonitorControl/MonitorControl/releases"><img src=".github/macos_badge_noborder.png" width="175" alt="Download for macOS"/></a>
</div>

<br/><br/>

<div align="center">
<a href="https://github.com/MonitorControl/MonitorControl/releases"><img src="https://img.shields.io/github/downloads/MonitorControl/MonitorControl/total.svg?style=flat" alt="downloads"/></a>
<a href="https://github.com/MonitorControl/MonitorControl/releases"><img src="https://img.shields.io/github/release-pre/MonitorControl/MonitorControl.svg?style=flat" alt="latest version"/></a>
<a href="https://github.com/MonitorControl/MonitorControl/blob/master/License.txt"><img src="https://img.shields.io/github/license/MonitorControl/MonitorControl.svg?style=flat" alt="license"/></a>
<a href="https://github.com/MonitorControl/MonitorControl"><img src="https://img.shields.io/badge/platform-macOS-blue.svg?style=flat" alt="platform"/></a>

<br/>
<br/>

<img src=".github/screenshot.png" width="824" alt="Screenshot"/><br/>

</div>

<hr>

> [!WARNING]
> MonitorControl v4.2.0 [may crash](https://github.com/MonitorControl/MonitorControl/issues/1663) on certain configurations running macOS 15 Sequoia or Tahoe. Additionally, this version will not automatically update to the [latest app version](https://github.com/MonitorControl/MonitorControl/releases). To resolve the issue and ensure future updates, please upgrade manually.

## Download

Go to [Releases](https://github.com/MonitorControl/MonitorControl/releases) and download the latest `.dmg`, or you can install via Homebrew:
```shell
brew install --cask monitorcontrol
```

## Major features

- Control your display's brightness, volume and contrast!
- Shows native OSD for brightness and volume.
- Supports multiple protocols to adjust brightness: DDC for external displays (brightness, contrast, volume), native Apple protocol for Apple and built-in displays, Gamma table control for software dimming, shade control for AirPlay, Sidecar and Display Link devices and other virtual screens.
- Supports smooth brightness transitions.
- Seamlessly combined hardware and software dimming extends dimming beyond the minimum brightness available on your display.
- Synchronize brightness from built-in and Apple screens - replicate Ambient light sensor and touch bar induced changes to a non-Apple external display!
- Sync up all your displays using a single slider or keyboard shortcuts.
- Allows dimming to full black.
- Support for custom keyboard shortcuts as well as standard brightness and media keys on Apple keyboards.
- Dozens of customization options to tweak the inner workings of the app to suit your hardware and needs (don't forget to enable `Show advanced settings` in app Settings).
- Simple, unobtrusive UI to blend in to the general aesthetics of macOS.
- Completely FREE.

For additional features, more advanced brightness control with XDR/HDR brightness upscaling and support for more Mac models and displays, check out [BetterDisplay](https://github.com/waydabber/BetterDisplay#readme)!

### Screenshots (Settings)

<div align="center">
<img src=".github/pref_1.png" width="392" alt="Screenshot"/>
<img src=".github/pref_2.png" width="392" alt="Screenshot"/>
<img src=".github/pref_3.png" width="392" alt="Screenshot"/>
<img src=".github/pref_4.png" width="392" alt="Screenshot"/>
</div>

## How to install and use the app

1. [Download the app](https://github.com/MonitorControl/MonitorControl/releases)
2. Copy the MonitorControl app file from the .dmg file to your Applications folder
3. Click on the `MonitorControl` app
4. Add the app to `Accessibility` under `System Settings` » `Privacy & Security` as prompted (this is required only if you wish to use the nativ