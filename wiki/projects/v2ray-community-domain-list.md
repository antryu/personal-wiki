# V2Ray Community Domain List

> A community-managed domain list for generating geosite.dat files used in V2Ray routing configurations. Notable for its neutrality and flexibility in defining routing rules without endorsing specific censorship or blocking policies.  
> Last updated: 2026-04-13

## Overview

**Repository**: [v2fly/domain-list-community](https://github.com/v2fly/domain-list-community)  
**Purpose**: Provides a collaborative domain list to generate geosite.dat files for V2Ray, enabling customizable routing rules based on domain categories.  

### Repository Info
- **Stars**: 8,273  
- **Forks**: 1,294  
- **Language**: Go  
- **License**: MIT License  
- **Created**: 2020-07-18  
- **Last Updated**: 2026-04-13  
- **Topics**: `geosite`, `v2ray`  
- **Open Issues**: 30  

### Key Features
- **Community-Driven**: Maintained collaboratively with contributions from the V2Ray ecosystem.  
- **Routing Flexibility**: Supports generating `.dat` files for custom routing rules (e.g., `geosite:category-ads`).  
- **Neutral Stance**: Does not enforce blocking or proxying decisions, allowing users to define their own policies.  

### Downloads
- **Latest `dlc.dat`**: [Download](https://github.com/v2fly/domain-list-community/releases/latest/download/dlc.dat)  
- **SHA-256 Checksums**: [dlc.dat.sha256sum](https://github.com/v2fly/domain-list-community/releases/latest/download/dlc.dat.sha256sum), [dlc.dat_plain.yml.sha256sum](https://github.com/v2fly/domain-list-community/releases/latest/download/dlc.dat_plain.yml.sha256sum)  
- **YAML Format**: [dlc.dat_plain.yml](https://github.com/v2fly/domain-list-community/releases/latest/download/dlc.dat_plain.yml)  

### Usage Example
```json
"routing": {
  "domainStrategy": "IPIfNonMatch",
  "rules": [
    {
      "type": "field",
      "outboundTag": "Reject",
      "domain": [
        "geosite:category-ads-all",
        "geosite:category-porn"
      ]
    },
    {
      "type": "field",
      "outboundTag": "Direct",
      "domain": [
        "domain:icloud.com",
        "geosite:cn"
      ]
    }
  ]
}
```

### Data Structure
- **Directory**: All domain lists are stored in the `data` directory.  
- **File Format**:  
  ```plaintext
  # Comments
  include:another-file
  domain:google.com @attr1 @attr2
  full:analytics.google.com @ads
  keyword:google
  regexp:^odd[1-7]\.example\.org(\.[a-z]{2})?$
  ```
- **Note**: Use of `regexp` and `keyword` is discouraged due to inefficiency in matching.

### Manual Generation
1. Install [Go](https://golang.org/) and `git`.  
2. Clone the repo: `git clone https://github.com/v2fly/domain-list-community.git`.  
3. Navigate to the directory: `cd domain-list-community`.  
4. Build the file:  
   ```bash
   go run ./          # Uses default `data` directory
   go run ./ --datapath=/custom/path  # Custom data directory
   ```

## Key Points
- **Deprecations**:  
  - `geosite:geolocation-cn@!cn` has been removed (see [issue #390](https://github.com/v2fly/domain-list-community/issues/390)).  
  - Non-category ad lists like `geosite:xxx-ads` are replaced with `geosite:xxx@ads`.  
- **Customization**: Users can generate tailored `.dat` files by modifying domain lists in the `data` directory.  
- **Documentation**: Refer to [discussion #3370](https://github.com/v2fly/domain-list-community/discussions/3370) for advanced usage.  

## Sources
- [GitHub](https://github.com/v2fly/domain-list-community)
- [원본](raw/ingest/projects/2026-04-13-v2ray-community-domain-list.md)