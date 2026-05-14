<!-- GitHub Trending: Swift | 1,529 stars | +5 today -->

# migueldeicaza/SwiftTerm

> Xterm/VT100 Terminal emulator in Swift

## Repository Info
- **URL**: https://github.com/migueldeicaza/SwiftTerm
- **Stars**: 1,529
- **Forks**: 313
- **Language**: Swift
- **License**: MIT License
- **Created**: 2019-03-27
- **Updated**: 2026-05-14
- **Topics**: appkit, imgcat, ios, macos, sixel, ssh-connection, swift, terminal-engine, uikit, vt100, xterm, xterm-256color
- **Open Issues**: 77

## README (excerpt)

SwiftTerm
=========

SwiftTerm is a VT100/Xterm terminal emulator library for Swift applications that can be 
embedded into macOS, iOS applications, text-based, headless applications or other 
custom scenarios. It has been used in several commercially available SSH clients, including 
[Secure Shellfish](https://apps.apple.com/us/app/secure-shellfish-ssh-files/id1336634154), 
 [La Terminal](https://apps.apple.com/us/app/la-terminal-ssh-client/id1629902861) and [CodeEdit](https://github.com/CodeEditApp/CodeEdit)

Check the [API Documentation](https://migueldeicaza.github.io/SwiftTerm/documentation/swiftterm/)

This repository contains both a terminal emulator engine that is UI agnostic, as well as
front-ends for this engine for iOS using UIKit, and macOS using AppKit.   A curses-based
terminal emulator (to emulate an xterm inside a console application) is available as
part of the [TermKit](https://github.com/migueldeicaza/TermKit) library. 

**Sample Code** There are a couple of minimal sample apps for Mac and iOS showing how to 
use the library inside the `TerminalApp` directory.   

* The sample Mac app has much of the functionality of MacOS' Terminal.app, but without the configuration UI.   
* The sample iOS application uses an SSH library to connect to a remote system (as there is no native shell
on iOS to run) and includes a login UI to configure the connection. 

## Companion Apps

[SwiftTermApp](https://github.com/migueldeicaza/SwiftTermApp) builds
an actual iOS app that uses this library and is more complete than the
testing apps in this module and provides a proper configuration UI.
It is a proof of concept for what you would need to do.

[Pane](https://github.com/migueldeicaza/pane) is a terminal
multiplexor, similar to tmux.

## History

This is a port of my original
[XtermSharp](https://github.com/migueldeicaza/XtermSharp), which was itself
based on [xterm.js](https://xtermjs.org).  At this point, I consider SwiftTerm
to be a more advanced terminal emulator than both of those (modulo
Selection/Accessibility) as it handles UTF, Unicode and grapheme clusters better
than those and has a more complete coverage of terminal emulation.   XtermSharp
is generally attempting to keep up, but has lagged behind.

Plenty of test cases have been extracted from xterm.js and Ghostty and
this also relies extensively on `esctest` to ensure compatibility.

Features
========

* Pretty decent terminal emulation, on or better than XtermSharp and xterm.js (and more comprehensive in many ways)
* Unicode rendering (including Emoji, and combining characters and emoji)
* Reusable and pluggable engine allows multiple user interfaces to be built on top of it:
   *  Bundled MacOS and iOS
   *  Bundled Headless terminal.
   *  [TermKit](https://github.com/migueldeicaza/TermKit) contains a terminal-over-a-terminal
   *  [Pane](https://github.com/migueldeicaza/pane) implements a terminal multiplexor
* Selection engine (with macOS support in the view)
* Search support with a built-in macOS find bar and programmable search APIs
* Supports colors (ANSI, 256, TrueColor)
* Supports text attributes including bold, italic, underline, strikethrough, and dim/faint (SGR 2)
* Supports mouse events
* Supports terminal resizing operations (controlled by remote host, or locally)
* [Hyperlinks](https://gist.github.com/egmontkob/eb114294efbcd5adb1944c9f3cb5feda) in terminal output
* Local process and SSH connection support (some assembly required for the last one)
* Proper CoreText rendering can munch through the hardened Unicode test suites.
* Graphics support:
  * Sixel (Use img2sixel to test)
  * iTerm2-style graphic rendering (Use imgcat to test)
  * Kitty graphics (Use kittyimg to test)
* Terminal session recording and playback with termcast
* Thread-safe Terminal instances
* Fuzzed and abused
* Optional GPU-accelerated rendering via Metal (macOS, iOS, visionOS)
* Seems pretty fast to me

# SwiftTerm library

The SwiftTerm library itself contains the source co