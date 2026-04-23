<!-- GitHub Trending: Rust | 30,353 stars | +163 today -->

# vercel-labs/agent-browser

> Browser automation CLI for AI agents

## Repository Info
- **URL**: https://github.com/vercel-labs/agent-browser
- **Stars**: 30,353
- **Forks**: 1,854
- **Language**: Rust
- **License**: Apache License 2.0
- **Created**: 2026-01-11
- **Updated**: 2026-04-23
- **Topics**: N/A
- **Open Issues**: 422

## README (excerpt)
# agent-browser

Browser automation CLI for AI agents. Fast native Rust CLI.

## Installation

### Global Installation (recommended)

Installs the native Rust binary:

```bash
npm install -g agent-browser
agent-browser install  # Download Chrome from Chrome for Testing (first time only)
```

### Project Installation (local dependency)

For projects that want to pin the version in `package.json`:

```bash
npm install agent-browser
agent-browser install
```

Then use via `package.json` scripts or by invoking `agent-browser` directly.

### Homebrew (macOS)

```bash
brew install agent-browser
agent-browser install  # Download Chrome from Chrome for Testing (first time only)
```

### Cargo (Rust)

```bash
cargo install agent-browser
agent-browser install  # Download Chrome from Chrome for Testing (first time only)
```

### From Source

```bash
git clone https://github.com/vercel-labs/agent-browser
cd agent-browser
pnpm install
pnpm build
pnpm build:native   # Requires Rust (https://rustup.rs)
pnpm link --global  # Makes agent-browser available globally
agent-browser install
```

### Linux Dependencies

On Linux, install system dependencies:

```bash
agent-browser install --with-deps
```

### Updating

Upgrade to the latest version:

```bash
agent-browser upgrade
```

Detects your installation method (npm, Homebrew, or Cargo) and runs the appropriate update command automatically.

### Requirements

- **Chrome** - Run `agent-browser install` to download Chrome from [Chrome for Testing](https://developer.chrome.com/blog/chrome-for-testing/) (Google's official automation channel). Existing Chrome, Brave, Playwright, and Puppeteer installations are detected automatically. No Playwright or Node.js required for the daemon.
- **Rust** - Only needed when building from source (see From Source above).

## Quick Start

```bash
agent-browser open example.com
agent-browser snapshot                    # Get accessibility tree with refs
agent-browser click @e2                   # Click by ref from snapshot
agent-browser fill @e3 "test@example.com" # Fill by ref
agent-browser get text @e1                # Get text by ref
agent-browser screenshot page.png
agent-browser close
```

### Traditional Selectors (also supported)

```bash
agent-browser click "#submit"
agent-browser fill "#email" "test@example.com"
agent-browser find role button click --name "Submit"
```

## Commands

### Core Commands

```bash
agent-browser open                    # Launch browser (no navigation); stays on about:blank
agent-browser open <url>              # Launch + navigate to URL (aliases: goto, navigate)
agent-browser click <sel>             # Click element (--new-tab to open in new tab)
agent-browser dblclick <sel>          # Double-click element
agent-browser focus <sel>             # Focus element
agent-browser type <sel> <text>       # Type into element
agent-browser fill <sel> <text>       # Clear and fill
agent-browser press <key>             # Press key (Enter, Tab, Control+a) (alias: key)
agent-browser keyboard type <text>    # Type with real keystrokes (no selector, current focus)
agent-browser keyboard inserttext <text>  # Insert text without key events (no selector)
agent-browser keydown <key>           # Hold key down
agent-browser keyup <key>             # Release key
agent-browser hover <sel>             # Hover element
agent-browser select <sel> <val>      # Select dropdown option
agent-browser check <sel>             # Check checkbox
agent-browser uncheck <sel>           # Uncheck checkbox
agent-browser scroll <dir> [px]       # Scroll (up/down/left/right, --selector <sel>)
agent-browser scrollintoview <sel>    # Scroll element into view (alias: scrollinto)
agent-browser drag <src> <tgt>        # Drag and drop
agent-browser upload <sel> <files>    # Upload files
agent-browser screenshot [path]       # Take screenshot (--full for full page, saves to a temporary directory if no path)
agent-browser screenshot --annotate   # Annotated screenshot with numbered