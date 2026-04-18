<!-- GitHub Trending: Go | 11,058 stars | +11 today -->

# 0xJacky/nginx-ui

> Yet another WebUI for Nginx

## Repository Info
- **URL**: https://github.com/0xJacky/nginx-ui
- **Stars**: 11,058
- **Forks**: 807
- **Language**: Go
- **License**: GNU Affero General Public License v3.0
- **Created**: 2021-02-19
- **Updated**: 2026-04-18
- **Topics**: chatgpt-app, code-completion, copilot, cron, deepseek-r1, docker, go, letsencrypt, linux, macos, mcp, mcp-server, nginx, self-hosted, vue, webui, windows
- **Open Issues**: 86

## README (excerpt)
<div align="center">
      <img src="resources/logo.png" alt="Nginx UI Logo">
</div>

# Nginx UI

Yet another Nginx Web UI, developed by [0xJacky](https://jackyu.cn/), [Hintay](https://blog.kugeek.com/) and [Akino](https://github.com/akinoccc).

[![DeepWiki](https://img.shields.io/badge/DeepWiki-0xJacky%2Fnginx--ui-blue.svg?logo=data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAyCAYAAAAnWDnqAAAAAXNSR0IArs4c6QAAA05JREFUaEPtmUtyEzEQhtWTQyQLHNak2AB7ZnyXZMEjXMGeK/AIi+QuHrMnbChYY7MIh8g01fJoopFb0uhhEqqcbWTp06/uv1saEDv4O3n3dV60RfP947Mm9/SQc0ICFQgzfc4CYZoTPAswgSJCCUJUnAAoRHOAUOcATwbmVLWdGoH//PB8mnKqScAhsD0kYP3j/Yt5LPQe2KvcXmGvRHcDnpxfL2zOYJ1mFwrryWTz0advv1Ut4CJgf5uhDuDj5eUcAUoahrdY/56ebRWeraTjMt/00Sh3UDtjgHtQNHwcRGOC98BJEAEymycmYcWwOprTgcB6VZ5JK5TAJ+fXGLBm3FDAmn6oPPjR4rKCAoJCal2eAiQp2x0vxTPB3ALO2CRkwmDy5WohzBDwSEFKRwPbknEggCPB/imwrycgxX2NzoMCHhPkDwqYMr9tRcP5qNrMZHkVnOjRMWwLCcr8ohBVb1OMjxLwGCvjTikrsBOiA6fNyCrm8V1rP93iVPpwaE+gO0SsWmPiXB+jikdf6SizrT5qKasx5j8ABbHpFTx+vFXp9EnYQmLx02h1QTTrl6eDqxLnGjporxl3NL3agEvXdT0WmEost648sQOYAeJS9Q7bfUVoMGnjo4AZdUMQku50McDcMWcBPvr0SzbTAFDfvJqwLzgxwATnCgnp4wDl6Aa+Ax283gghmj+vj7feE2KBBRMW3FzOpLOADl0Isb5587h/U4gGvkt5v60Z1VLG8BhYjbzRwyQZemwAd6cCR5/XFWLYZRIMpX39AR0tjaGGiGzLVyhse5C9RKC6ai42ppWPKiBagOvaYk8lO7DajerabOZP46Lby5wKjw1HCRx7p9sVMOWGzb/vA1hwiWc6jm3MvQDTogQkiqIhJV0nBQBTU+3okKCFDy9WwferkHjtxib7t3xIUQtHxnIwtx4mpg26/HfwVNVDb4oI9RHmx5WGelRVlrtiw43zboCLaxv46AZeB3IlTkwouebTr1y2NjSpHz68WNFjHvupy3q8TFn3Hos2IAk4Ju5dCo8B3wP7VPr/FGaKiG+T+v+TQqIrOqMTL1VdWV1DdmcbO8KXBz6esmYWYKPwDL5b5FA1a0hwapHiom0r/cKaoqr+27/XcrS5UwSMbQAAAABJRU5ErkJggg==)](https://deepwiki.com/0xJacky/nginx-ui)
[![Ask DeepWiki](https://deepwiki.com/badge.svg)](https://deepwiki.com/0xJacky/nginx-ui)

[![Build and Publish](https://github.com/0xJacky/nginx-ui/actions/workflows/build.yml/badge.svg)](https://github.com/0xJacky/nginx-ui/actions/workflows/build.yml)
[![GitHub license](https://img.shields.io/github/license/0xJacky/nginx-ui?label=License&logo=github)](https://github.com/0xJacky/nginx-ui "Click to view the repo on Github")
[![Release Version](https://img.shields.io/github/release/0xJacky/nginx-ui?include_prereleases&label=Release&logo=github)](https://github.com/0xJacky/nginx-ui/releases/latest "Click to view the repo on Github")
[![GitHub Star](https://img.shields.io/github/stars/0xJacky/nginx-ui?label=Stars&logo=github)](https://github.com/0xJacky/nginx-ui "Click to view the repo on Github")
[![GitHub Fork](https://img.shields.io/github/forks/0xJacky/nginx-ui?label=Forks&logo=github)](https://github.com/0xJacky/nginx-ui "Click to view the repo on Github")
[![Repo Size](https://img.shields.io/github/repo-size/0xJacky/nginx-ui?label=Size&logo=github)](https://github.com/0xJacky/nginx-ui "Click to view the repo on Github")
[![GitHub Fork](https://img.shields.io/github/issues-closed-raw/0xJacky/nginx-ui?label=Closed%20Issue&logo=github)](https://github.com/0xJacky/nginx-ui/issues "Click to view the repo on Github")

[![Docker Stars](https://img.shields.io/docker/stars/uozi/nginx-ui?label=Stars&logo=docker)](https://hub.docker.com/r/uozi/nginx-ui "Click to view the image on Docker Hub")
[![Docker Pulls](https://img.shields.io/docker/pulls/uozi/nginx-ui?label=Pulls&logo=docker)](https://hub.docker.com/r/uozi/nginx-ui "Click to view the image on Docker Hub")
[![Image Size](https://img.shields.io/docker/image-size/uozi/nginx-ui/latest?label=Image%20Size&logo=docker)](https://hub.docker.com/r/uozi/nginx-ui "Click to view the image on Docker Hub")

[![Translated Status](https://weblate.nginxui.com/widget/nginx-ui/frontend/svg-badge.svg)](https://weblate.nginxui.com/engage/nginx-ui/)
[![Featured｜HelloGitHub](https://abroad.hellogithub.com/v1/widgets/recommend.svg?rid=86f3a8f779934748a34fe6f1b5cd442f&claim_uid=MOFqadzAShCBeQj&theme=small)](https://hellogithub.com/repository/86f3a8f779934748a34fe6f1b5cd442f)

## Documentation
To check out docs, visit [nginxui.com](https://nginxui.com).

## Sponsor

If you find this project helpful, please consider sp