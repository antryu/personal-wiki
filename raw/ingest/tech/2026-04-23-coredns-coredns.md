<!-- GitHub Trending: Go | 14,009 stars | +6 today -->

# coredns/coredns

> CoreDNS is a DNS server that chains plugins

## Repository Info
- **URL**: https://github.com/coredns/coredns
- **Stars**: 14,009
- **Forks**: 2,433
- **Language**: Go
- **License**: Apache License 2.0
- **Created**: 2016-03-18
- **Updated**: 2026-04-23
- **Topics**: cncf, coredns, dns-server, go, plugin, service-discovery
- **Open Issues**: 295

## README (excerpt)
[![CoreDNS](https://coredns.io/images/CoreDNS_Colour_Horizontal.png)](https://coredns.io)

[![Documentation](https://img.shields.io/badge/godoc-reference-blue.svg)](https://godoc.org/github.com/coredns/coredns)
![CodeQL](https://github.com/coredns/coredns/actions/workflows/codeql-analysis.yml/badge.svg)
![Go Tests](https://github.com/coredns/coredns/actions/workflows/go.test.yml/badge.svg)
[![CircleCI](https://circleci.com/gh/coredns/coredns.svg?style=shield)](https://circleci.com/gh/coredns/coredns)
[![Docker Pulls](https://img.shields.io/docker/pulls/coredns/coredns.svg)](https://hub.docker.com/r/coredns/coredns)
[![Go Report Card](https://goreportcard.com/badge/github.com/coredns/coredns)](https://goreportcard.com/report/coredns/coredns)
[![CII Best Practices](https://bestpractices.coreinfrastructure.org/projects/1250/badge)](https://bestpractices.coreinfrastructure.org/projects/1250)
[![OpenSSF Scorecard](https://api.scorecard.dev/projects/github.com/coredns/coredns/badge)](https://scorecard.dev/viewer/?uri=github.com/coredns/coredns)

CoreDNS is a DNS server/forwarder, written in Go, that chains [plugins](https://coredns.io/plugins).
Each plugin performs a (DNS) function.

CoreDNS is a [Cloud Native Computing Foundation](https://cncf.io) graduated project.

CoreDNS is a fast and flexible DNS server. The key word here is *flexible*: with CoreDNS you
are able to do what you want with your DNS data by utilizing plugins. If some functionality is not
provided out of the box you can add it by [writing a plugin](https://coredns.io/explugins).

CoreDNS can listen for DNS requests coming in over:
* UDP/TCP (go'old DNS).
* TLS - DoT ([RFC 7858](https://tools.ietf.org/html/rfc7858)).
* DNS over HTTP/2 - DoH ([RFC 8484](https://tools.ietf.org/html/rfc8484)).
* DNS over HTTP/3 - DoH3
* DNS over QUIC - DoQ ([RFC 9250](https://tools.ietf.org/html/rfc9250)). 
* [gRPC](https://grpc.io) (not a standard).

Currently CoreDNS is able to:

* Serve zone data from a file; both DNSSEC (NSEC only) and DNS are supported (*file* and *auto*).
* Retrieve zone data from primaries, i.e., act as a secondary server (AXFR only) (*secondary*).
* Sign zone data on-the-fly (*dnssec*).
* Load balancing of responses (*loadbalance*).
* Allow for zone transfers, i.e., act as a primary server (*file* + *transfer*).
* Automatically load zone files from disk (*auto*).
* Caching of DNS responses (*cache*).
* Use etcd as a backend (replacing [SkyDNS](https://github.com/skynetservices/skydns)) (*etcd*).
* Use k8s (kubernetes) as a backend (*kubernetes*).
* Serve as a proxy to forward queries to some other (recursive) nameserver (*forward*).
* Provide metrics (by using Prometheus) (*prometheus*).
* Provide query (*log*) and error (*errors*) logging.
* Integrate with cloud providers (*route53*).
* Support the CH class: `version.bind` and friends (*chaos*).
* Support the RFC 5001 DNS name server identifier (NSID) option (*nsid*).
* Profiling support (*pprof*).
* Rewrite queries (qtype, qclass and qname) (*rewrite* and *template*).
* Block ANY queries (*any*).
* Provide DNS64 IPv6 Translation (*dns64*).

And more. Each of the plugins is documented. See [coredns.io/plugins](https://coredns.io/plugins)
for all in-tree plugins, and [coredns.io/explugins](https://coredns.io/explugins) for all
out-of-tree plugins.

## Compilation from Source

To compile CoreDNS, we assume you have a working Go setup. See various tutorials if you don’t have
that already configured.

First, make sure your golang version is 1.25.0 or higher as `go mod` support and other api is needed.
See [here](https://github.com/golang/go/wiki/Modules) for `go mod` details.
Then, check out the project and run `make` to compile the binary:

~~~
$ git clone https://github.com/coredns/coredns
$ cd coredns
$ make
~~~

> **_NOTE:_**  extra plugins may be enabled when building by setting the `COREDNS_PLUGINS` environment variable with comma separate list of plugins in the same format as plugin.cfg

This should yield a