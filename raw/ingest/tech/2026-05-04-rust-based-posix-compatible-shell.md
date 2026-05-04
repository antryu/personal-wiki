<!-- GitHub Trending: Rust | 1,639 stars | +194 today -->

# reubeno/brush

> 🐚bash/POSIX-compatible shell implemented in Rust 🦀

## Repository Info
- **URL**: https://github.com/reubeno/brush
- **Stars**: 1,640
- **Forks**: 85
- **Language**: Rust
- **License**: MIT License
- **Created**: 2024-05-10
- **Updated**: 2026-05-04
- **Topics**: bash, posix-shell, rust, script, shell
- **Open Issues**: 94

## README (excerpt)
<div align="center">
  <img src="https://github.com/user-attachments/assets/266b83a6-bacb-408c-afb7-2a2ddf37b272"/>
</div>

<br/>

<!-- Primary badges -->
<p align="center">
  <!-- crates.io version badge -->
  <a href="https://crates.io/crates/brush-shell"><img src="https://img.shields.io/crates/v/brush-shell?style=flat-square"/></a>
  <!-- msrv badge -->
  <img src="https://img.shields.io/crates/msrv/brush-shell"/>
  <!-- license badge -->
  <img src="https://img.shields.io/badge/license-MIT-blue?style=flat-square"/>
  <br/>
  <!-- crates.io download badge -->
  <a href="https://crates.io/crates/brush-shell"><img src="https://img.shields.io/crates/d/brush-shell?style=flat-square"/></a>
  <!-- compat tests badge -->
  <img src="https://img.shields.io/badge/compat_tests-1389-brightgreen?style=flat-square" alt="1389 compatibility tests"/>
  <!-- Packaging badges -->
  <a href="https://repology.org/project/brush/versions">
    <img src="https://repology.org/badge/tiny-repos/brush.svg" alt="Packaging status"/>
  </a>
  <!-- Social badges -->
  <a href="https://discord.gg/kPRgC9j3Tj">
    <img src="https://dcbadge.limes.pink/api/server/https://discord.gg/kPRgC9j3Tj?compact=true&style=flat" alt="Discord invite"/>
  </a>
</p>

<a href="https://repology.org/project/brush/versions">
</a>

</p>

<hr/>

`brush` (**B**o(u)rn(e) **RU**sty **SH**ell) is a modern [bash-](https://www.gnu.org/software/bash/) and [POSIX-](https://pubs.opengroup.org/onlinepubs/9699919799/utilities/V3_chap02.html) compatible shell written in Rust. Run your existing scripts and `.bashrc` unchanged -- with syntax highlighting and auto-suggestions built in.

## At a glance

✅ Your existing `.bashrc` just works—aliases, functions, completions, all of it.<br/>
✨ Syntax highlighting and auto-suggestions built in.<br/>
🧪 Validated against bash with [~1700 compatibility tests](brush-shell/tests/cases).<br/>
🧩 Easily embeddable in your Rust apps using `brush_core::Shell`.<br/>

<p align="center">
  <img src="https://github.com/user-attachments/assets/0e64d1b9-7e4e-43be-8593-6c1b9607ac52" width="80%"/>
</p>

> ⚠️ **Not everything works yet:** `select` and some edge cases aren't supported. See the [Compatibility Reference](docs/reference/compatibility.md) for details.

### Quick start:

```console
$ cargo binstall brush-shell         # using cargo-binstall
$ brew install brush                 # using Homebrew
$ pacman -S brush                    # Arch Linux
$ cargo install --locked brush-shell # Build from sources
```

`brush` is ready for use as a daily driver. We test every change against `bash` to keep it that way.

More detailed installation instructions are available below.

## ✨ Features

### 🐚 `bash` Compatibility

| | Feature | Description |
|--|---------|-------------|
| ✅ | **50+ builtins** | `echo`, `declare`, `read`, `complete`, `trap`, `ulimit`, ... |
| ✅ | **Full expansions** | brace, parameter, arithmetic, command/process substitution, globs, `extglob`, `globstar` |
| ✅ | **Control flow** | `if`/`for`/`while`/`until`/`case`, `&&`/`\|\|`, subshells, pipelines, etc. |
| ✅ | **Redirection** | here docs, here strings, fd duplication, process substitution redirects |
| ✅ | **Arrays & variables** | indexed/associative arrays, dynamic variables, standard well-known variables, etc. |
| ✅ | **Programmable completion** | Works with [bash-completion](https://github.com/scop/bash-completion) out of the box |
| ✅ | **Job control** | background jobs, suspend/resume, `fg`/`bg`/`jobs` |
| 🔷 | **Traps & options** | `DEBUG`/`ERR`/`EXIT` traps work; signal traps and options in progress |

### ⌨️ User Experience

| | Feature | Description |
|--|---------|-------------|
| ✅ | **Syntax highlighting** | Real-time as you type ([reedline](https://github.com/nushell/reedline)) |
| ✅ | **Auto-suggestions** | History-based hints as you type ([reedline](https://github.com/nushell/reedline)) |
| ✅ | **Rich prompts** | `PS1`/`PROMPT_COMMAND`, right prompts, [starship](https://starshi