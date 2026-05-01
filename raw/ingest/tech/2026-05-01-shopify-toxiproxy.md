<!-- GitHub Trending: Go | 12,003 stars | +3 today -->

# Shopify/toxiproxy

> :alarm_clock: :fire: A TCP proxy to simulate network and system conditions for chaos and resiliency testing

## Repository Info
- **URL**: https://github.com/Shopify/toxiproxy
- **Stars**: 12,003
- **Forks**: 499
- **Language**: Go
- **License**: MIT License
- **Created**: 2014-09-04
- **Updated**: 2026-05-01
- **Topics**: chaos, down, go, is, omg, proxy, resiliency, tcp-proxy, testing
- **Open Issues**: 100

## README (excerpt)
# Toxiproxy
[![GitHub release](https://img.shields.io/github/release/Shopify/toxiproxy.svg)](https://github.com/Shopify/toxiproxy/releases/latest)
[![Build Status](https://github.com/Shopify/toxiproxy/actions/workflows/test.yml/badge.svg)](https://github.com/Shopify/toxiproxy/actions/workflows/test.yml)

![](http://i.imgur.com/sOaNw0o.png)

Toxiproxy is a framework for simulating network conditions. It's made
specifically to work in testing, CI and development environments, supporting
deterministic tampering with connections, but with support for randomized chaos
and customization. **Toxiproxy is the tool you need to prove with tests that
your application doesn't have single points of failure.** We've been
successfully using it in all development and test environments at Shopify since
October, 2014. See our [blog post][blog] on resiliency for more information.

Toxiproxy usage consists of two parts. A TCP proxy written in Go (what this
repository contains) and a client communicating with the proxy over HTTP. You
configure your application to make all test connections go through Toxiproxy
and can then manipulate their health via HTTP. See [Usage](#usage)
below on how to set up your project.

For example, to add 1000ms of latency to the response of MySQL from the [Ruby
client](https://github.com/Shopify/toxiproxy-ruby):

```ruby
Toxiproxy[:mysql_master].downstream(:latency, latency: 1000).apply do
  Shop.first # this takes at least 1s
end
```

To take down all Redis instances:

```ruby
Toxiproxy[/redis/].down do
  Shop.first # this will throw an exception
end
```

While the examples in this README are currently in Ruby, there's nothing
stopping you from creating a client in any other language (see
[Clients](#clients)).

## Table of Contents

- [Toxiproxy](#toxiproxy)
  - [Table of Contents](#table-of-contents)
  - [Why yet another chaotic TCP proxy?](#why-yet-another-chaotic-tcp-proxy)
  - [Clients](#clients)
  - [Example](#example)
  - [Usage](#usage)
    - [1. Installing Toxiproxy](#1-installing-toxiproxy)
      - [Upgrading from Toxiproxy 1.x](#upgrading-from-toxiproxy-1x)
    - [2. Populating Toxiproxy](#2-populating-toxiproxy)
    - [3. Using Toxiproxy](#3-using-toxiproxy)
    - [4. Logging](#4-logging)
    - [Toxics](#toxics)
      - [latency](#latency)
      - [down](#down)
      - [bandwidth](#bandwidth)
      - [slow_close](#slow_close)
      - [timeout](#timeout)
      - [reset_peer](#reset_peer)
      - [slicer](#slicer)
      - [limit_data](#limit_data)
    - [HTTP API](#http-api)
      - [Proxy fields:](#proxy-fields)
      - [Toxic fields:](#toxic-fields)
      - [Endpoints](#endpoints)
      - [Populating Proxies](#populating-proxies)
    - [CLI Example](#cli-example)
    - [Metrics](#metrics)
    - [Frequently Asked Questions](#frequently-asked-questions)
    - [Development](#development)
    - [Release](#release)

## Why yet another chaotic TCP proxy?

The existing ones we found didn't provide the kind of dynamic API we needed for
integration and unit testing. Linux tools like `nc` and so on are not
cross-platform and require root, which makes them problematic in test,
development and CI environments.

## Clients

* [toxiproxy-ruby](https://github.com/Shopify/toxiproxy-ruby)
* [toxiproxy-go](https://github.com/Shopify/toxiproxy/tree/main/client)
* [toxiproxy-python](https://github.com/douglas/toxiproxy-python)
* [toxiproxy.net](https://github.com/mdevilliers/Toxiproxy.Net)
* [toxiproxy-php-client](https://github.com/ihsw/toxiproxy-php-client)
* [toxiproxy-node-client](https://github.com/ihsw/toxiproxy-node-client)
* [toxiproxy-java](https://github.com/trekawek/toxiproxy-java)
* [toxiproxy-haskell](https://github.com/jpittis/toxiproxy-haskell)
* [toxiproxy-rust](https://github.com/itarato/toxiproxy_rust)
* [toxiproxy-elixir](https://github.com/Jcambass/toxiproxy_ex)

## Example

Let's walk through an example with a Rails application. Note that Toxiproxy is
in no way tied to Ruby, it's just been our first use case