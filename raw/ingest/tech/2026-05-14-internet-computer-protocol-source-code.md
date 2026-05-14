<!-- GitHub Trending: Rust | 1,755 stars | +1 today -->

# dfinity/ic

> Internet Computer blockchain source: the client/replica software run by nodes

## Repository Info
- **URL**: https://github.com/dfinity/ic
- **Stars**: 1,755
- **Forks**: 397
- **Language**: Rust
- **License**: Other
- **Created**: 2021-05-09
- **Updated**: 2026-05-14
- **Topics**: N/A
- **Open Issues**: 365

## README (excerpt)

= The Internet Computer Protocol (ICP)
:toc: macro


ifdef::env-github[]
++++
<p align="center">
  <img width="800" src="/readme-icp3.png">
</p>
++++
endif::[]


The Internet Computer is the world’s first blockchain that runs at web speed and can increase its capacity without bound. Like the Internet (which is composed of many machines adhering to TCP/IP protocol) and blockchain protocols (such as Bitcoin and Ethereum).

:toc-title:
toc::[]

== Resources on the Internet Computer

=== R&D documentation

You can learn more about the Internet Computer's Protocol, features, and designs here, here are some helpful resources:

Protocol Documentation:

- https://medium.com/dfinity/a-technical-overview-of-the-internet-computer-f57c62abc20f[A Technical Overview of the Internet Computer (blog post)]
- https://medium.com/dfinity/software-canisters-an-evolution-of-smart-contracts-internet-computer-f1f92f1bfffb[Canisters, an Evolution of Smart Contracts]
- https://medium.com/dfinity/applied-crypto-one-public-key-for-the-internet-computer-ni-dkg-4af800db869d[Noninteractive Distributed Key Generation]
- https://medium.com/dfinity/the-internet-computers-token-economics-an-overview-29e238bd1d83[The Internet Computer’s Token Economics: An Overview]
- https://medium.com/dfinity/understanding-the-internet-computers-network-nervous-system-neurons-and-icp-utility-tokens-730dab65cae8[Understanding the Internet Computer’s Network Nervous System, Neurons, and ICP Utility Tokens]
- https://github.com/dfinity/nns-proposals[List of NNS Proposals]
- https://medium.com/dfinity/achieving-consensus-on-the-internet-computer-ee9fbfbafcbc[Consensus protocol]

Engineering

- https://sdk.dfinity.org/docs/developers-guide/concepts/what-is-ic[What is the Internet Computer?]
- https://sdk.dfinity.org/docs/quickstart/quickstart-intro.html[Tutorials, SDKs, and sample apps to get started]
- https://docs.dfinity.org/[Rust Cargo docs for the replica]




=== ICP Dashboard

You can observe the state of the Internet Computer's infrastructure (Nodes, data centers, subnets) and traditional blockchain metrics (blocks/second, Token Supply, etc)

- https://dashboard.internetcomputer.org

=== The community

To interact with the community, check out the developer forum: https://forum.dfinity.org/

=== Rust implementation of the ICP

This repo contains many different pieces (including testing and other infrastructure components), but the most important one is the source code for the Rust implementation of the "*replica*" (read: "client" in some blockchains) that is compiled and run by the machines that together make up the Internet Computer.

=== DFINITY Foundation

The https://dfinity.org/[DFINITY Foundation] is a Swiss not-for-profit organization based in Zurich, Switzerland, which oversees research centers in Palo Alto, San Francisco, and Zurich. Its goal is to further the design, development, and adoption of the Internet Computer Protocol.

== Getting Started

=== Who should be using this code

- *If you are an app developer*, and your intent is to build apps so you want a local Internet Computer replica in your machine to deploy to, you are better off using the https://sdk.dfinity.org/docs/quickstart/quickstart-intro.html[Canister SDK] written by the DFINITY Foundation. It is optimized for this and much more lightweight (less than 2 minutes to get started). It will build and run a local replica and you do not need to get into systems code to run it.

- *If you are a blockchain enthusiast*, and your intent is to understand the protocol (not an implementation), you may be better off going to the https://medium.com/dfinity/achieving-consensus-on-the-internet-computer-ee9fbfbafcbc[Consensus protocol] and https://sdk.dfinity.org/docs/interface-spec/index.html[IC Interface Specification]. This content (by the DFINITY research team) is tailor made for understanding the protocol and design.

- *If you are a blockchain miner*, you should know that the Internet Computer Protocol (whil