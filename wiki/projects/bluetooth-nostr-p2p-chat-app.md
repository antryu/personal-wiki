# Bluetooth & Nostr P2P Chat App

> A decentralized peer-to-peer messaging app combining Bluetooth mesh for offline communication and Nostr protocol for global reach, emphasizing privacy, no central servers, and location-based channels. Notable for its 25,742 stars and innovative dual-transport architecture.  
> Last updated: 2026-04-19

## Overview  
This project, **bitchat**, implements a hybrid messaging system using **Bluetooth Low Energy (BLE) mesh networks** for offline, local communication and the **Nostr protocol** for internet-based global messaging. Developed in Swift with a public domain license, it features location-based geohash channels, end-to-end encryption (Noise Protocol for Bluetooth, NIP-17 for Nostr), and an IRC-style command interface. The app supports iOS and macOS, with optimizations for battery efficiency and adaptive message routing.  

Key components include:  
- **Bluetooth Mesh**: Multi-hop peer discovery and relay (max 7 hops) with compact binary protocols.  
- **Nostr Integration**: Geographic chat rooms (block/neighborhood/city-level geohashes) and 290+ global relays.  
- **Privacy-Centric Design**: No accounts, phone numbers, or persistent identifiers; triple-tap emergency wipe.  
- **Routing Intelligence**: Prioritizes Bluetooth for speed/privacy, falls back to Nostr when offline.  

## Key Points  
- **Dual Transport Architecture**: Combines Bluetooth (offline) and Nostr (online) for seamless connectivity.  
- **Geohash Channels**: Enables location-specific chats (e.g., city blocks, neighborhoods).  
- **End-to-End Encryption**: Noise Protocol for Bluetooth, NIP-17 for Nostr private messages.  
- **Decentralized Mesh Network**: Automatic peer discovery and multi-hop relays for offline resilience.  
- **Performance Features**: LZ4 compression, battery-optimized duty cycling, and adaptive routing.  
- **Use Cases**: Ideal for protests, disasters, remote areas, and location-based community discussions.  

## Sources  
- [GitHub](https://github.com/permissionlesstech/bitchat)  
- [원본](raw/ingest/projects/2026-04-19-bluetooth-nostr-p2p-chat-app.md)