<!-- GitHub Trending: Go | 51,018 stars | +4 today -->

# ethereum/go-ethereum

> Go implementation of the Ethereum protocol

## Repository Info
- **URL**: https://github.com/ethereum/go-ethereum
- **Stars**: 51,018
- **Forks**: 21,894
- **Language**: Go
- **License**: GNU Lesser General Public License v3.0
- **Created**: 2013-12-26
- **Updated**: 2026-05-05
- **Topics**: blockchain, ethereum, geth, go, p2p
- **Open Issues**: 405

## README (excerpt)
## Go Ethereum

Golang execution layer implementation of the Ethereum protocol.

[![API Reference](
https://pkg.go.dev/badge/github.com/ethereum/go-ethereum
)](https://pkg.go.dev/github.com/ethereum/go-ethereum?tab=doc)
[![Go Report Card](https://goreportcard.com/badge/github.com/ethereum/go-ethereum)](https://goreportcard.com/report/github.com/ethereum/go-ethereum)
[![Travis](https://app.travis-ci.com/ethereum/go-ethereum.svg?branch=master)](https://app.travis-ci.com/github/ethereum/go-ethereum)
[![Discord](https://img.shields.io/badge/discord-join%20chat-blue.svg)](https://discord.gg/nthXNEv)
[![Twitter](https://img.shields.io/twitter/follow/go_ethereum)](https://x.com/go_ethereum)

Automated builds are available for stable releases and the unstable master branch. Binary
archives are published at https://geth.ethereum.org/downloads/.

## Building the source

For prerequisites and detailed build instructions please read the [Installation Instructions](https://geth.ethereum.org/docs/getting-started/installing-geth).

Building `geth` requires both a Go (version 1.23 or later) and a C compiler. You can install
them using your favourite package manager. Once the dependencies are installed, run

```shell
make geth
```

or, to build the full suite of utilities:

```shell
make all
```

## Executables

The go-ethereum project comes with several wrappers/executables found in the `cmd`
directory.

|  Command   | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| :--------: | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **`geth`** | Our main Ethereum CLI client. It is the entry point into the Ethereum network (main-, test- or private net), capable of running as a full node (default), archive node (retaining all historical state) or a light node (retrieving data live). It can be used by other processes as a gateway into the Ethereum network via JSON RPC endpoints exposed on top of HTTP, WebSocket and/or IPC transports. `geth --help` and the [CLI page](https://geth.ethereum.org/docs/fundamentals/command-line-options) for command line options. |
|   `clef`   | Stand-alone signing tool, which can be used as a backend signer for `geth`.                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
|  `devp2p`  | Utilities to interact with nodes on the networking layer, without running a full blockchain.                                                                                                                                                                                                                                                                                                                                                              