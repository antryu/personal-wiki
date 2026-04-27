<!-- GitHub Trending: Rust | 10,026 stars | +13 today -->

# sigoden/dufs

> A file server that supports static serving, uploading, searching, accessing control, webdav...

## Repository Info
- **URL**: https://github.com/sigoden/dufs
- **Stars**: 10,026
- **Forks**: 528
- **Language**: Rust
- **License**: Other
- **Created**: 2022-05-26
- **Updated**: 2026-04-27
- **Topics**: cloud-disk, command-line, file-sharing, file-upload-server, rust, static-server, webdav, webdav-server
- **Open Issues**: 5

## README (excerpt)
# Dufs

[![CI](https://github.com/sigoden/dufs/actions/workflows/ci.yaml/badge.svg)](https://github.com/sigoden/dufs/actions/workflows/ci.yaml)
[![Crates](https://img.shields.io/crates/v/dufs.svg)](https://crates.io/crates/dufs)
[![Docker Pulls](https://img.shields.io/docker/pulls/sigoden/dufs)](https://hub.docker.com/r/sigoden/dufs)

Dufs is a distinctive utility file server that supports static serving, uploading, searching, accessing control, webdav...

![demo](https://user-images.githubusercontent.com/4012553/220513063-ff0f186b-ac54-4682-9af4-47a9781dee0d.png)

## Features

- Serve static files
- Download folder as zip file
- Upload files and folders (Drag & Drop)
- Create/Edit/Search files
- Resumable/partial uploads/downloads
- Access control
- Support https
- Support webdav
- Easy to use with curl

## Install

### With cargo

```
cargo install dufs
```

### With docker

```
docker run -v `pwd`:/data -p 5000:5000 --rm sigoden/dufs /data -A
```

### With [Homebrew](https://brew.sh)

```
brew install dufs
```

### Binaries on macOS, Linux, Windows

Download from [Github Releases](https://github.com/sigoden/dufs/releases), unzip and add dufs to your $PATH.

## CLI

```
Dufs is a distinctive utility file server - https://github.com/sigoden/dufs

Usage: dufs [OPTIONS] [serve-path]

Arguments:
  [serve-path]  Specific path to serve [default: .]

Options:
  -c, --config <file>        Specify configuration file
  -b, --bind <addrs>         Specify bind address or unix socket
  -p, --port <port>          Specify port to listen on [default: 5000]
      --path-prefix <path>   Specify a path prefix
      --hidden <value>       Hide paths from directory listings, e.g. tmp,*.log,*.lock
  -a, --auth <rules>         Add auth roles, e.g. user:pass@/dir1:rw,/dir2
  -A, --allow-all            Allow all operations
      --allow-upload         Allow upload files/folders
      --allow-delete         Allow delete files/folders
      --allow-search         Allow search files/folders
      --allow-symlink        Allow symlink to files/folders outside root directory
      --allow-archive        Allow download folders as archive file
      --allow-hash           Allow ?hash query to get file sha256 hash
      --enable-cors          Enable CORS, sets `Access-Control-Allow-Origin: *`
      --render-index         Serve index.html when requesting a directory, returns 404 if not found index.html
      --render-try-index     Serve index.html when requesting a directory, returns directory listing if not found index.html
      --render-spa           Serve SPA(Single Page Application)
      --assets <path>        Set the path to the assets directory for overriding the built-in assets
      --log-format <format>  Customize http log format
      --log-file <file>      Specify the file to save logs to, other than stdout/stderr
      --compress <level>     Set zip compress level [default: low] [possible values: none, low, medium, high]
      --completions <shell>  Print shell completion script for <shell> [possible values: bash, elvish, fish, powershell, zsh]
      --tls-cert <path>      Path to an SSL/TLS certificate to serve with HTTPS
      --tls-key <path>       Path to the SSL/TLS certificate's private key
  -h, --help                 Print help
  -V, --version              Print version
```

## Examples

Serve current working directory in read-only mode

```
dufs
```

Allow all operations like upload/delete/search/create/edit...

```
dufs -A
```

Only allow upload operation

```
dufs --allow-upload
```

Serve a specific directory

```
dufs Downloads
```

Serve a single file

```
dufs linux-distro.iso
```

Serve a single-page application like react/vue

```
dufs --render-spa
```

Serve a static website with index.html

```
dufs --render-index
```

Require username/password

```
dufs -a admin:123@/:rw
```

Listen on specific host:ip 

```
dufs -b 127.0.0.1 -p 80
```

Listen on unix socket
```
dufs -b /tmp/dufs.socket
```

Use https

```
dufs --tls-cert my.