<!-- GitHub Trending: Go | 8,273 stars | +16 today -->

# v2fly/domain-list-community

> Community managed domain list. Generate geosite.dat for V2Ray.

## Repository Info
- **URL**: https://github.com/v2fly/domain-list-community
- **Stars**: 8,273
- **Forks**: 1,294
- **Language**: Go
- **License**: MIT License
- **Created**: 2020-07-18
- **Updated**: 2026-04-13
- **Topics**: geosite, v2ray
- **Open Issues**: 30

## README (excerpt)
# Domain list community

This project manages a list of domains, to be used as geosites for routing purpose in Project V.

## Purpose of this project

This project is not opinionated. In other words, it does NOT endorse, claim or imply that a domain should be blocked or proxied. It can be used to generate routing rules on demand.

## Download links

- **dlc.dat**：[https://github.com/v2fly/domain-list-community/releases/latest/download/dlc.dat](https://github.com/v2fly/domain-list-community/releases/latest/download/dlc.dat)
- **dlc.dat.sha256sum**：[https://github.com/v2fly/domain-list-community/releases/latest/download/dlc.dat.sha256sum](https://github.com/v2fly/domain-list-community/releases/latest/download/dlc.dat.sha256sum)
- **dlc.dat_plain.yml**：[https://github.com/v2fly/domain-list-community/releases/latest/download/dlc.dat_plain.yml](https://github.com/v2fly/domain-list-community/releases/latest/download/dlc.dat_plain.yml)
- **dlc.dat_plain.yml.sha256sum**：[https://github.com/v2fly/domain-list-community/releases/latest/download/dlc.dat_plain.yml.sha256sum](https://github.com/v2fly/domain-list-community/releases/latest/download/dlc.dat_plain.yml.sha256sum)

## Notice

- Rules with `@!cn` attribute has been cast out from cn lists. `geosite:geolocation-cn@!cn` is no longer available. Check [#390](https://github.com/v2fly/domain-list-community/issues/390), [#3119](https://github.com/v2fly/domain-list-community/pull/3119) and [#3198](https://github.com/v2fly/domain-list-community/pull/3198) for more information.
- Dedicated non-category ad lists like `geosite:xxx-ads` has been removed. Use `geosite:xxx@ads` instead. `geosite:category-ads[-xx]` is not affected.

Please report if you have any problems or questions.

## Usage example

Each file in the `data` directory can be used as a rule in this format: `geosite:filename`.

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
        "domain:icloud-content.com",
        "domain:cdn-apple.com",
        "geosite:cn",
        "geosite:private"
      ]
    },
    {
      "type": "field",
      "outboundTag": "Proxy-1",
      "domain": [
        "geosite:category-anticensorship",
        "geosite:category-media",
        "geosite:category-vpnservices"
      ]
    },
    {
      "type": "field",
      "outboundTag": "Proxy-2",
      "domain": [
        "geosite:category-dev"
      ]
    },
    {
      "type": "field",
      "outboundTag": "Proxy-3",
      "domain": [
        "geosite:geolocation-!cn"
      ]
    }
  ]
}
```

## Generate `dlc.dat` manually

- Install `golang` and `git`
- Clone project code: `git clone https://github.com/v2fly/domain-list-community.git`
- Navigate to project root directory: `cd domain-list-community`
- Install project dependencies: `go mod download`
- Generate `dlc.dat` (without `datapath` option means to use domain lists in `data` directory of current working directory):
  - `go run ./`
  - `go run ./ --datapath=/path/to/your/custom/data/directory`

Run `go run ./ --help` for more usage information.

For anyone who wants to generate custom `.dat` files, you may read [#3370](https://github.com/v2fly/domain-list-community/discussions/3370).

## Structure of data

All data are under `data` directory. Each file in the directory represents a sub-list of domains, named by the file name. File content is in the following format.

```
# comments
include:another-file
domain:google.com @attr1 @attr2
full:analytics.google.com @ads
keyword:google
regexp:^odd[1-7]\.example\.org(\.[a-z]{2})?$
```

**Syntax:**

> [!NOTE]
> Adding new `regexp` and `keyword` rules is discouraged because it is easy to use them incorrectly, and proxy software cannot efficiently match these types of rules.

