# OAuth2 Proxy Authentication Tool

> A reverse proxy that provides authentication with Google, Azure, OpenID Connect, and many more identity providers. It offers flexible deployment options as a standalone tool or middleware, enabling secure, scalable authentication for web applications.  
> Last updated: 2026-04-16

## Overview  
**OAuth2 Proxy** is an open-source authentication tool written in Go, designed to secure web applications using OAuth2 and OpenID Connect (OIDC) protocols. Hosted on GitHub with 14.2k stars and 2.1k forks, it supports integration with providers like Google, Microsoft Entra ID, GitHub, and login.gov. The tool acts as a reverse proxy, intercepting requests to authenticate users via OAuth2/OIDC before forwarding them to upstream applications. It also extracts user details (e.g., usernames, groups) and forwards them as HTTP headers.  

Key features include:  
- **Multi-provider support**: Generic OIDC client and specialized implementations for major identity providers.  
- **Flexible deployment**: Standalone reverse proxy or middleware for existing infrastructure.  
- **Security-focused**: Uses distroless base images for production releases and Alpine-based images for debugging.  
- **Active maintenance**: Continuous integration (CI) pipelines, code quality monitoring, and regular releases since 2017.  

The project provides precompiled binaries for major architectures (including `ppc64le` and `s390x`) and Docker images, including nightly builds for experimental use. A simplified architecture diagram illustrates its role in intercepting and authenticating requests before routing to protected applications.  

## Key Points  
- Supports authentication with over 10+ identity providers via OIDC or OAuth2.  
- Offers production-grade security with minimal dependencies through distroless container images.  

## Sources  
- [GitHub](https://github.com/oauth2-proxy/oauth2-proxy)  
- [원본](raw/ingest/infra/2026-04-16-oauth2-proxy-authentication-tool.md)