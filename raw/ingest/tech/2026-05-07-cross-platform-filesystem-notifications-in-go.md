<!-- GitHub Trending: Go | 10,656 stars | +5 today -->

# fsnotify/fsnotify

> Cross-platform filesystem notifications for Go.

## Repository Info
- **URL**: https://github.com/fsnotify/fsnotify
- **Stars**: 10,656
- **Forks**: 969
- **Language**: Go
- **License**: BSD 3-Clause "New" or "Revised" License
- **Created**: 2014-06-28
- **Updated**: 2026-05-07
- **Topics**: N/A
- **Open Issues**: 38

## README (excerpt)
fsnotify is a Go library to provide cross-platform filesystem notifications on
Windows, Linux, macOS, BSD, and illumos.

Go 1.23 or newer is required; the full documentation is at
https://pkg.go.dev/github.com/fsnotify/fsnotify

---

Platform support:

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

Usage
-----
A basic example:

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

Some more examples can be found in [cmd/fsnotify](cmd/fsnotify), which can be
run with:

    % go run ./cmd/fsnotify

Further detailed documentation can be found in godoc:
https://pkg.go.dev/github.com/fsnotify/fsnotify

FAQ
---
### Will a file still be watched when it's moved to another directory?
No, not unless you are watching the location it was moved to.

### Are subdirectories watched?
No, you must add watches for any directory you want to watch (a recursive
watcher is on the roadmap: [#18]).

[#18]: https://github.com/fsnotify/fsnotify/issues/18

### Do I have to watch the Error and Event channels in a goroutine?
Yes. You can read both channels in the same goroutine using `select` (you don't
need a separate goroutine for both channels; see the example).

### Why don't notifications work with NFS, SMB, FUSE, /proc, or /sys?
fsnotify requires support from underlying OS to work. The current NFS and SMB
protocols does not provide network level support for file notifications, and
neither do the /proc and /sys virtual filesystems.

This could be fixed with a polling watcher ([#9]), but it's not yet implemented.

[#9]: https://github.com/fsnotify/fsnotify/issues/9

### Why do I get many Chmod events?
Some programs may generate a lot of attribute changes; for example Spotlight on
macOS, anti-virus programs, backup a