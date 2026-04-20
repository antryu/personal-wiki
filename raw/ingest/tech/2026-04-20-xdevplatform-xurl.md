<!-- GitHub Trending: Go | 808 stars | +18 today -->

# xdevplatform/xurl

> The official CLI for the X API

## Repository Info
- **URL**: https://github.com/xdevplatform/xurl
- **Stars**: 808
- **Forks**: 64
- **Language**: Go
- **License**: MIT License
- **Created**: 2024-12-14
- **Updated**: 2026-04-20
- **Topics**: N/A
- **Open Issues**: 10

## README (excerpt)
# xurl - A curl-like CLI Tool for the X API

A command-line tool for interacting with the X (formerly Twitter) API, supporting both OAuth 1.0a and OAuth 2.0 authentication.

## Features

- **Multi-app support** — register multiple X API apps with separate credentials and tokens
- OAuth 2.0 PKCE flow authentication
- OAuth 1.0a authentication
- Multiple OAuth 2.0 account support per app
- Default app and default user selection (interactive Bubble Tea picker or single command)
- Persistent token storage in YAML (`~/.xurl`), auto-migrates from legacy JSON
- HTTP request customization (headers, methods, body)
- Per-request app override with `--app`

## Installation

### Homebrew (macOS)
```bash
brew install --cask xdevplatform/tap/xurl
```

### npm
```bash
npm install -g @xdevplatform/xurl
```

### Shell script (no sudo required)
```bash
curl -fsSL https://raw.githubusercontent.com/xdevplatform/xurl/main/install.sh | bash
```
Installs to `~/.local/bin`. If it's not in your PATH, the script will tell you what to add.

### Go
```bash
go install github.com/xdevplatform/xurl@latest
```


## Usage

### Authentication

You must have a developer account and app to use this tool. 

#### Register an app

Register your X API app credentials so they're stored in `~/.xurl` (no env vars needed after this):

```bash
xurl auth apps add my-app --client-id YOUR_CLIENT_ID --client-secret YOUR_CLIENT_SECRET
```

If you want the app to keep its own callback configuration in `~/.xurl`, you can store the redirect URI there too:

```bash
xurl auth apps add my-app --client-id YOUR_CLIENT_ID --client-secret YOUR_CLIENT_SECRET --redirect-uri http://localhost:8080/callback
```

You can register multiple apps:
```bash
xurl auth apps add prod-app --client-id PROD_ID --client-secret PROD_SECRET
xurl auth apps add dev-app  --client-id DEV_ID  --client-secret DEV_SECRET
```

> **Legacy / env-var flow:** You can also set `CLIENT_ID` and `CLIENT_SECRET` as environment variables. They'll be auto-saved into the active app on first use.
>
> `REDIRECT_URI` now resolves in this order: `REDIRECT_URI` environment variable, then the app's stored `redirect_uri` in `~/.xurl`, then the built-in default `http://localhost:8080/callback`.

#### OAuth 2.0 User-Context
**Note:** For OAuth 2.0 authentication, you must specify the redirect URI in the [X API developer portal](https://developer.x.com/en/portal/dashboard).

1. Create an app at the [X API developer portal](https://developer.x.com/en/portal/dashboard).
2. Go to authentication settings and set the redirect URI to the same value that `xurl` will use through `REDIRECT_URI`.
   The default is `http://localhost:8080/callback`, and `xurl` derives the callback host, port, and path from the effective redirect URI. The effective value is resolved from `REDIRECT_URI`, then the app's stored `redirect_uri`, then the built-in default. When you use `localhost`, `xurl` listens on both `127.0.0.1` and `::1` so browser loopback resolution does not break the callback.
![Setup](./assets/setup.png)
![Redirect URI](./assets/callback.png)
3. Register the app (if you haven't already):
```bash
xurl auth apps add my-app --client-id YOUR_CLIENT_ID --client-secret YOUR_CLIENT_SECRET
```
4. Get your access keys:
```bash
xurl auth oauth2
```

If X returns a `client-forbidden` / `client-not-enrolled` error even though auth completed successfully, check the app’s package and environment in the X developer console. On current X platform setup, the working fix was:

1. Go to `Apps` -> `Manage apps`
2. Open the app
3. Use `Move to package`
4. Choose `Pay-per-use`
5. Move the app to the `Production` environment

Without that enrollment step, `xurl whoami` and other `/2/*` reads can fail even when the OAuth callback and tokens are valid.

If X does not return your username reliably through `/2/users/me`, authenticate with an explicit handle instead:

```bash
xurl auth oauth2 YOUR_USERNAME
```

That keeps the OAuth2 token associated with the expected usern