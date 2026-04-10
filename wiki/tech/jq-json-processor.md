# jq JSON Processor

> `jq` is a lightweight command-line JSON processor designed to slice, filter, map, and transform JSON data with ease, akin to `sed`, `awk`, and `grep`. Notably, it has zero runtime dependencies and is written in portable C, making it highly versatile for developers and system administrators. The project maintains a large community and has over 34,000 stars on GitHub.
> Last updated: 2026-04-10

## Overview
### Repository Info
- **URL**: https://github.com/jqlang/jq  
- **Stars**: 34,260  
- **Forks**: 1,760  
- **Language**: C  
- **License**: MIT License (code), Creative Commons CC BY 3.0 (documentation), ICU License (decNumber library)  
- **Created**: 2012-07-18  
- **Updated**: 2026-04-10  
- **Topics**: jq  
- **Open Issues**: 445  

### README (Excerpt)
`jq` is a flexible JSON processor for command-line workflows, enabling users to manipulate structured data efficiently. It is written in portable C and supports features like filtering, mapping, and transformation of JSON structures.

### Documentation
- **Official Documentation**: [jqlang.org](https://jqlang.org)  
- **Try jq Online**: [play.jqlang.org](https://play.jqlang.org)  

### Installation
#### Prebuilt Binaries
Download from the [GitHub release page](https://github.com/jqlang/jq/releases).  

#### Docker Image
Pull the [jq image](https://github.com/jqlang/jq/pkgs/container/jq) for quick usage:  
```bash
docker run --rm -i ghcr.io/jqlang/jq:latest < package.json '.version'
```
Or with a mounted volume:  
```bash
docker run --rm -i -v "$PWD:$PWD" -w "$PWD" ghcr.io/jqlang/jq:latest '.version' package.json
```

#### Building from Source
**Dependencies**:  
- libtool  
- make  
- automake  
- autoconf  

**Instructions**:  
```console
git submodule update --init
autoreconf -i
./configure --with-oniguruma=builtin
make clean
make -j8
make check
sudo make install
```
Build a statically linked version:  
```console
make LDFLAGS=-all-static
```
For released tarballs, skip `autoreconf` and avoid needing `flex`/`bison`.

**Cross-Compilation**:  
Details in [.github/workflows/ci.yml](.github/workflows/ci.yml) and the [cross-compilation wiki page](https://github.com/jqlang/jq/wiki/Cross-compilation).

### Community & Support
- **Questions/Help**: [Stack Overflow (jq tag)](https://stackoverflow.com/questions/tagged/jq)  
- **Chat**: [Discord](https://discord.gg/yg6yjNmgAC)  
- **Wiki**: [GitHub Wiki](https://github.com/jqlang/jq/wiki)  

### License
- Code: [MIT License](COPYING)  
- Documentation: [Creative Commons CC BY 3.0](COPYING)  
- decNumber library: [ICU License](COPYING)  

---

## Key Points
- Lightweight and portable JSON processor with zero runtime dependencies.  
- Supports complex JSON manipulation via command-line filters and transformations.  
- Actively maintained with a large community and Docker integration.  
- Cross-platform and cross-compilation capabilities for diverse environments.  

## Sources
- [GitHub](https://github.com/jqlang/jq)
- [원본](raw/ingest/tech/2026-04-10-jq-json-processor.md)