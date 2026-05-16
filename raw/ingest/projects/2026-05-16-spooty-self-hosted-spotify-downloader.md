<!-- GitHub Trending: TypeScript | 2,249 stars | +184 today -->

# Raiper34/spooty

> Self-hosted  spotify downloader

## Repository Info
- **URL**: https://github.com/Raiper34/spooty
- **Stars**: 2,249
- **Forks**: 153
- **Language**: TypeScript
- **License**: MIT License
- **Created**: 2024-06-22
- **Updated**: 2026-05-16
- **Topics**: downloader, music, self-hosted, spotify
- **Open Issues**: 18

## README (excerpt)
[![npm version](https://img.shields.io/docker/pulls/raiper34/spooty)](https://hub.docker.com/r/raiper34/spooty)
[![npm version](https://img.shields.io/docker/image-size/raiper34/spooty)](https://hub.docker.com/r/raiper34/spooty)
![Docker Image Version](https://img.shields.io/docker/v/raiper34/spooty)
[![npm version](https://img.shields.io/docker/stars/raiper34/spooty)](https://hub.docker.com/r/raiper34/spooty)
[![GitHub License](https://img.shields.io/github/license/raiper34/spooty)](https://github.com/Raiper34/spooty)
[![GitHub Repo stars](https://img.shields.io/github/stars/raiper34/spooty)](https://github.com/Raiper34/spooty)

![spooty logo](assets/logo.svg)
# Spooty - selfhosted Spotify downloader
Spooty is a self-hosted Spotify downloader.
It allows download track/playlist/album from the Spotify url.
It can also subscribe to a playlist or author page and download new songs upon release.
Spooty basically downloads nothing from Spotify, it only gets information from spotify and then finds relevant and downloadeds music on Youtube. 
The project is based on NestJS and Angular.

> [!IMPORTANT]
> Please do not use this tool for piracy! Download only music you own rights! Use this tool only on your responsibility.

### Content
- [🚀 Installation](#-installation)
  - [Spotify App Configuration](#spotify-app-configuration)
  - [Docker](#docker)
    - [Docker command](#docker-command)
    - [Docker compose](#docker-compose)
  - [Build from source](#build-from-source)
    - [Process](#requirements)
    - [Requirements](#process)
  - [Environment variables](#environment-variables)
  - [YouTube cookies](#youtube-cookies)
- [⚖️ License](#-license)

## 🚀 Installation
Recommended and the easiest way how to start to use of Spooty is using docker.

### Spotify App Configuration

To fully use Spooty, you need to create an application in the Spotify Developer Dashboard:

1. Go to [Spotify Developer Dashboard](https://developer.spotify.com/dashboard)
2. Sign in with your Spotify account
3. Create a new application
4. Note your `Client ID` and `Client Secret`
5. Configure the redirect URI to `http://127.0.0.1:3000/api/callback` (or the corresponding URL of your instance)

These credentials will be used by Spooty to access the Spotify API.

### Docker

Just run docker command or use docker compose configuration.
For detailed configuration, see available [environment variables](#environment-variables).

#### Docker command
```shell
docker run -d -p 3000:3000 \
  -v /path/to/downloads:/spooty/backend/downloads \
  -v /path/to/cookies.txt:/spooty/config/cookies.txt \
  -e SPOTIFY_CLIENT_ID=your_client_id \
  -e SPOTIFY_CLIENT_SECRET=your_client_secret \
  raiper34/spooty:latest
```

#### Docker compose
```yaml
services:
  spooty:
    image: raiper34/spooty:latest
    container_name: spooty
    restart: unless-stopped
    ports:
      - "3000:3000"
    volumes:
      - /path/to/downloads:/spooty/backend/downloads
      - /path/to/cookies.txt:/spooty/config/cookies.txt
    environment:
      - SPOTIFY_CLIENT_ID=your_client_id
      - SPOTIFY_CLIENT_SECRET=your_client_secret
      # Configure other environment variables if needed
```

### Build from source

Spooty can be also build from source files on your own.

#### Requirements
- Node v20.20.0 (it is recommended to use `nvm` node version manager to install proper version of node)
- Redis in memory cache
- Ffmpeg
- Python3

#### Process
- install Node v20.20.0 using `nvm install` and use that node version `nvm use`
- from project root install all dependencies using `npm install`
- copy `.env.default` as `.env` in `src/backend` folder and modify desired environment properties (see [environment variables](#environment-variables))
- add your Spotify application credentials to the `.env` file:
  ```
  SPOTIFY_CLIENT_ID=your_client_id
  SPOTIFY_CLIENT_SECRET=your_client_secret
  ```
- build source files `npm run build`
    - built project will be stored in `dist` folder
- start server `npm run start`

