# TLS Server Scanner

> A TLS server scanner for detecting servers supporting XTLS/Reality protocols. Notable for its efficiency in network security audits and compatibility with cloud infrastructure.  
> Last updated: 2026-04-15

## Overview

### Repository Info
- **URL**: [https://github.com/XTLS/RealiTLScanner](https://github.com/XTLS/RealiTLScanner)
- **Stars**: 3,508
- **Forks**: 248
- **Language**: Go
- **License**: [Mozilla Public License 2.0](https://www.mozilla.org/en-US/MPL/2.0/)
- **Created**: 2023-03-06
- **Updated**: 2026-04-15
- **Topics**: N/A
- **Open Issues**: 8

### Building
Requires Go 1.21+:
```bash
go build
```

### Usage
- **Scan IP/CIDR/Domain**:
  ```bash
  ./RealiTLScanner -addr 1.2.3.4
  ```
- **Scan from file**:
  ```bash
  ./RealiTLScanner -in in.txt
  ```
- **Crawl domains from URL**:
  ```bash
  ./RealiTLScanner -url https://launchpad.net/ubuntu/+archivemirrors
  ```
- **Custom port**:
  ```bash
  ./RealiTLScanner -addr 1.1.1.1 -port 443
  ```
- **Verbose output**:
  ```bash
  ./RealiTLScanner -addr 1.2.3.0/24 -v
  ```
- **Save results**:
  ```bash
  ./RealiTLScanner -addr www.microsoft.com -out file.csv
  ```
- **Thread/timeout settings**:
  ```bash
  ./RealiTLScanner -addr wiki.ubuntu.com -thread 10 -timeout 5
  ```

### Docker Support
- **Build container**:
  ```bash
  docker build -t realitlscanner .
  ```
- **Run scan**:
  ```bash
  docker run --rm realitlscanner -addr 1.1.1.1
  ```

### Geo IP Integration
Place a `Country.mmdb` file in the working directory to enable geolocation data. Download from:  
[https://github.com/Loyalsoldier/geoip/releases/latest/download/Country.mmdb](https://github.com/Loyalsoldier/geoip/releases/latest/download/Country.mmdb)

### Demo Output
**Console example**:
```bash
2024/02/08 20:51:10 INFO Connected to target feasible=true host=107.172.103.9 tls=1.3 alpn=h2 domain=rocky-linux.tk issuer="Let's Encrypt"
```

**CSV output example**:
```csv
IP,ORIGIN,CERT_DOMAIN,CERT_ISSUER,GEO_CODE
202.70.64.2,ntc.net.np,*.ntc.net.np,"GlobalSign nv-sa",NP
196.200.160.70,mirror.marwan.ma,mirror.marwan.ma,"Let's Encrypt",MA
```

## Key Points
- Scans TLS servers for Reality protocol compatibility
- Supports IP ranges, CIDR notation, domains, and file-based targets
- Outputs detailed CSV reports with certificate and geolocation data
- Docker-ready for containerized deployment
- Configurable threads, timeouts, and verbose logging

## Sources
- [GitHub](https://github.com/XTLS/RealiTLScanner)
- [원본](raw/ingest/tech/2026-04-15-tls-server-scanner.md)