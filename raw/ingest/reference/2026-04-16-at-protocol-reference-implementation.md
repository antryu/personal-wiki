<!-- GitHub Trending: TypeScript | 9,309 stars | +10 today -->

# bluesky-social/atproto

> Social networking technology created by Bluesky

## Repository Info
- **URL**: https://github.com/bluesky-social/atproto
- **Stars**: 9,309
- **Forks**: 849
- **Language**: TypeScript
- **License**: Other
- **Created**: 2021-12-17
- **Updated**: 2026-04-16
- **Topics**: N/A
- **Open Issues**: 709

## README (excerpt)
# AT Protocol Reference Implementation (TypeScript)

Welcome friends!

This repository contains Bluesky's reference implementation of AT Protocol, and of the `app.bsky` microblogging application service backend.

## What is in here?

**TypeScript Packages:**

| Package                                                                       | Docs                                       | NPM                                                                                                             |
| ----------------------------------------------------------------------------- | ------------------------------------------ | --------------------------------------------------------------------------------------------------------------- |
| `@atproto/api`: client library                                                | [README](./packages/api/README.md)         | [![NPM](https://img.shields.io/npm/v/@atproto/api)](https://www.npmjs.com/package/@atproto/api)                 |
| `@atproto/common-web`: shared code and helpers which can run in web browsers  | [README](./packages/common-web/README.md)  | [![NPM](https://img.shields.io/npm/v/@atproto/common-web)](https://www.npmjs.com/package/@atproto/common-web)   |
| `@atproto/common`: shared code and helpers which doesn't work in web browsers | [README](./packages/common/README.md)      | [![NPM](https://img.shields.io/npm/v/@atproto/common)](https://www.npmjs.com/package/@atproto/common)           |
| `@atproto/crypto`: cryptographic signing and key serialization                | [README](./packages/crypto/README.md)      | [![NPM](https://img.shields.io/npm/v/@atproto/crypto)](https://www.npmjs.com/package/@atproto/crypto)           |
| `@atproto/identity`: DID and handle resolution                                | [README](./packages/identity/README.md)    | [![NPM](https://img.shields.io/npm/v/@atproto/identity)](https://www.npmjs.com/package/@atproto/identity)       |
| `@atproto/lexicon`: schema definition language                                | [README](./packages/lexicon/README.md)     | [![NPM](https://img.shields.io/npm/v/@atproto/lexicon)](https://www.npmjs.com/package/@atproto/lexicon)         |
| `@atproto/repo`: data storage structure, including MST                        | [README](./packages/repo/README.md)        | [![NPM](https://img.shields.io/npm/v/@atproto/repo)](https://www.npmjs.com/package/@atproto/repo)               |
| `@atproto/syntax`: string parsers for identifiers                             | [README](./packages/syntax/README.md)      | [![NPM](https://img.shields.io/npm/v/@atproto/syntax)](https://www.npmjs.com/package/@atproto/syntax)           |
| `@atproto/xrpc`: client-side HTTP API helpers                                 | [README](./packages/xrpc/README.md)        | [![NPM](https://img.shields.io/npm/v/@atproto/xrpc)](https://www.npmjs.com/package/@atproto/xrpc)               |
| `@atproto/xrpc-server`: server-side HTTP API helpers                          | [README](./packages/xrpc-server/README.md) | [![NPM](https://img.shields.io/npm/v/@atproto/xrpc-server)](https://www.npmjs.com/package/@atproto/xrpc-server) |

**TypeScript Services:**

- `pds`: "Personal Data Server", hosting repo content for atproto accounts. Most implementation code in `packages/pds`, with runtime wrapper in `services/pds`. See [bluesky-social/pds](https://github.com/bluesky-social/pds) for directions on self-hosting.
- `bsky`: AppView implementation of the `app.bsky.*` API endpoints. Running on main network at `api.bsky.app`. Most implementation code in `packages/bsky`, with runtime wrapper in `services/bsky`.

**Lexicons:** for both the `com.atproto.*` and `app.bsky.*` are canonically versioned in this repo, for now, under `./lexicons/`. These are JSON files in the [Lexicon schema definition language](https://atproto.com/specs/lexicon), similar to JSON Schema or OpenAPI.

**Interoperability Test Data:** the language-neutral test files in `./interop-test-files/` may be us