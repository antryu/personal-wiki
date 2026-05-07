# Cross-platform filesystem notifications in Go

> This repository provides a Go library to monitor changes to the filesystem in a cross-platform manner, supporting Windows, Linux, macOS, BSD, and illumos. It is notable for its widespread adoption and active maintenance, making it a go-to solution for developers needing to track file events.
> Last updated: 2026-05-07

## Overview
The `fsnotify/fsnotify` library is a widely used Go project that enables developers to receive notifications of file system events such as file creation, modification, and deletion. It is designed to be portable and works across multiple operating systems by utilizing platform-specific backends like inotify, kqueue, ReadDirectoryChangesW, and FEN. 

The project requires Go 1.23 or newer and is licensed under the BSD 3-Clause license, ensuring it is freely available for most use cases. As of the latest update, the repository has garnered significant community interest, with 10,656 stars and 969 forks on GitHub.

### Repository Info
- **URL**: https://github.com/fsnotify/fsnotify
- **Stars**: 10,656
- **Forks**: 969
- **Language**: Go
- **License**: BSD 3-Clause "New" or "Revised" License
- **Created**: 2014-06-28
- **Updated**: 2026-05-07
- **Open Issues**: 38

### Platform Support
The library supports a range of platforms by leveraging native OS capabilities:

| Backend               | OS         | Status                                                                    |
| :-------------------- | :--------- | :------------------------------------------------------------------------ |
| inotify               | Linux      | Supported                                                                 |
| kqueue                | BSD, macOS | Supported                                                                 |
| ReadDirectoryChangesW | Windows    | Supported                                                                 |
| FEN                   | illumos    | Supported                                                                 |
| fanotify              | Linux 5.9+ | [Not yet](https://github.com/fsnotify/fsnotify/issues/114)                |
| FSEvents              | macOS      | [Needs support in x/sys/unix][fsevents]                                   |
| USN Journals          | Windows    | [Needs support in x/sys/windows][usn]                                     |
| Polling               | *All*      | [Not yet](https://github.com/fsnotify/fsnotify/issues/9)                  |

Linux and illumos should include Android and Solaris, but these are currently
untested.

[fsevents]: https://github.com/fsnotify/fsnotify/issues/11#issuecomment-1279133120
[usn]:      https://github.com/fsnotify/fsnotify/issues/53#issuecomment-1279829847

### Usage Example
A basic usage example includes creating a new watcher, adding a path to monitor, and reading event and error channels:

```go
package main

import (
    "log"

    "github.com/fsnotify/fsnotify"
)

func main() {
    // Create new watcher.
    watcher, err := fsnotify.NewWatcher()
    if err != nil {
        log.Fatal(err)
    }
    defer watcher.Close()

    // Start listening for events.
    go func() {
        for {
            select {
            case event, ok := <-watcher.Events:
                if !ok {
                    return
                }
                log.Println("event:", event)
                if event.Has(fsnotify.Write) {
                    log.Println("modified file:", event.Name)
                }
            case err, ok := <-watcher.Errors:
                if !ok {
                    return
                }
                log.Println("error:", err)
            }
        }
    }()

    // Add a path.
    err = watcher.Add("/tmp")
    if err != nil {
        log.Fatal(err)
    }

    // Block main goroutine forever.
    <-make(chan struct{})
}
```

More examples can be found in the [cmd/fsnotify](cmd/fsnotify) directory and can be run using the command `go run ./cmd/fsnotify`.

### Additional Documentation
For more detailed documentation, visit the official GoDoc page: [https://pkg.go.dev/github.com/fsnotify/fsnotify](https://pkg.go.dev/github.com/fsnotify/fsnotify)

## Key Points
- Supports cross-platform filesystem notifications via native OS features.
- Active and well-maintained with a large user base on GitHub.

## Sources
- [GitHub](https://github.com/fsnotify/fsnotify)
- [원본](raw/ingest/tech/2026-05-07-cross-platform-filesystem-notifications-in-go.md)