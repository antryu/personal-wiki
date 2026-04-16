<!-- GitHub Trending: Go | 19,387 stars | +17 today -->

# charmbracelet/vhs

> Your CLI home video recorder 📼

## Repository Info
- **URL**: https://github.com/charmbracelet/vhs
- **Stars**: 19,388
- **Forks**: 405
- **Language**: Go
- **License**: MIT License
- **Created**: 2022-07-19
- **Updated**: 2026-04-16
- **Topics**: ascii, cli, command-line, gif, recording, terminal, vhs, video
- **Open Issues**: 151

## README (excerpt)
# VHS

<p>
  <img src="https://user-images.githubusercontent.com/42545625/198402537-12ca2f6c-0779-4eb8-a67c-8db9cb3df13c.png#gh-dark-mode-only" width="500" />
  <img src="https://user-images.githubusercontent.com/42545625/198402542-a305f669-a05a-4d91-b18b-ca76e72b655a.png#gh-light-mode-only" width="500" />
  <br>
  <a href="https://github.com/charmbracelet/vhs/releases"><img src="https://img.shields.io/github/release/charmbracelet/vhs.svg" alt="Latest Release"></a>
  <a href="https://pkg.go.dev/github.com/charmbracelet/vhs?tab=doc"><img src="https://godoc.org/github.com/golang/gddo?status.svg" alt="Go Docs"></a>
  <a href="https://github.com/charmbracelet/vhs/actions"><img src="https://github.com/charmbracelet/vhs/workflows/build/badge.svg" alt="Build Status"></a>
</p>

Write terminal GIFs as code for integration testing and demoing your CLI tools.

<img alt="Welcome to VHS" src="https://stuff.charm.sh/vhs/examples/neofetch_3.gif" width="600" />

The above example was generated with VHS ([view source](./examples/neofetch/neofetch.tape)).

## Tutorial

To get started, [install VHS](#installation) and create a new `.tape` file.

```sh
vhs new demo.tape
```

Open the `.tape` file with your favorite `$EDITOR`.

```sh
vim demo.tape
```

Tape files consist of a series of [commands](#vhs-command-reference). The commands are
instructions for VHS to perform on its virtual terminal. For a list of all
possible commands see [the command reference](#vhs-command-reference).

```elixir
# Where should we write the GIF?
Output demo.gif

# Set up a 1200x600 terminal with 46px font.
Set FontSize 46
Set Width 1200
Set Height 600

# Type a command in the terminal.
Type "echo 'Welcome to VHS!'"

# Pause for dramatic effect...
Sleep 500ms

# Run the command by pressing enter.
Enter

# Admire the output for a bit.
Sleep 5s
```

Once you've finished, save the file and feed it into VHS.

```sh
vhs demo.tape
```

All done! You should see a new file called `demo.gif` (or whatever you named
the `Output`) in the directory.

<picture>
  <source media="(prefers-color-scheme: dark)" srcset="https://stuff.charm.sh/vhs/examples/demo.gif">
  <source media="(prefers-color-scheme: light)" srcset="https://stuff.charm.sh/vhs/examples/demo.gif">
  <img width="600" alt="A GIF produced by the VHS code above" src="https://stuff.charm.sh/vhs/examples/demo.gif">
</picture>

For more examples see the [`examples/`](https://github.com/charmbracelet/vhs/tree/main/examples) directory.

## Installation

> [!NOTE]
> VHS requires [`ttyd`](https://github.com/tsl0922/ttyd) and [`ffmpeg`](https://ffmpeg.org) to be installed and available on your `PATH`.

Use a package manager:

```sh
# macOS or Linux
brew install vhs

# Arch Linux (btw)
pacman -S vhs

# Nix
nix-env -iA nixpkgs.vhs

# Windows using scoop
scoop install vhs
```

Or, use Docker to run VHS directly, dependencies included:

```sh
docker run --rm -v $PWD:/vhs ghcr.io/charmbracelet/vhs <cassette>.tape
```

Or, download it:

- [Packages][releases] are available in Debian and RPM formats
- [Binaries][releases] are available for Linux, macOS, and Windows

Or, just install it with `go`:

```sh
go install github.com/charmbracelet/vhs@latest
```

<details>
<summary>Windows, Debian, Ubuntu, Fedora, RHEL, Void Instructions</summary>

- Debian / Ubuntu

```sh
# Debian/Ubuntu
sudo mkdir -p /etc/apt/keyrings
curl -fsSL https://repo.charm.sh/apt/gpg.key | sudo gpg --dearmor -o /etc/apt/keyrings/charm.gpg
echo "deb [signed-by=/etc/apt/keyrings/charm.gpg] https://repo.charm.sh/apt/ * *" | sudo tee /etc/apt/sources.list.d/charm.list
# Install ttyd from https://github.com/tsl0922/ttyd/releases
sudo apt update && sudo apt install vhs ffmpeg
```

- Fedora / RHEL

```sh
echo '[charm]
name=Charm
baseurl=https://repo.charm.sh/yum/
enabled=1
gpgcheck=1
gpgkey=https://repo.charm.sh/yum/gpg.key' | sudo tee /etc/yum.repos.d/charm.repo
# Install ttyd from https://github.com/tsl0922/ttyd/releases
sudo yum install vhs ffmpeg
```

- Void

```sh
sudo xb