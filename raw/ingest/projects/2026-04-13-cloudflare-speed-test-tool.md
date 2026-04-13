<!-- GitHub Trending: Go | 25,789 stars | +42 today -->

# XIU2/CloudflareSpeedTest

> 🌩「自选优选 IP」测试 Cloudflare CDN 延迟和速度，获取最快 IP ！当然也支持其他 CDN / 多个解析 IP 的网站 ~

## Repository Info
- **URL**: https://github.com/XIU2/CloudflareSpeedTest
- **Stars**: 25,789
- **Forks**: 4,951
- **Language**: Go
- **License**: GNU General Public License v3.0
- **Created**: 2020-08-30
- **Updated**: 2026-04-13
- **Topics**: cdn, cloudflare, go, golang, speedtest
- **Open Issues**: 24

## README (excerpt)
# XIU2/CloudflareSpeedTest

[![Go Version](https://img.shields.io/github/go-mod/go-version/XIU2/CloudflareSpeedTest.svg?style=flat-square&label=Go&color=00ADD8&logo=go)](https://github.com/XIU2/CloudflareSpeedTest/)
[![Release Version](https://img.shields.io/github/v/release/XIU2/CloudflareSpeedTest.svg?style=flat-square&label=Release&color=00ADD8&logo=github)](https://github.com/XIU2/CloudflareSpeedTest/releases/latest)
[![GitHub license](https://img.shields.io/github/license/XIU2/CloudflareSpeedTest.svg?style=flat-square&label=License&color=00ADD8&logo=github)](https://github.com/XIU2/CloudflareSpeedTest/)
[![GitHub Star](https://img.shields.io/github/stars/XIU2/CloudflareSpeedTest.svg?style=flat-square&label=Star&color=00ADD8&logo=github)](https://github.com/XIU2/CloudflareSpeedTest/)
[![GitHub Fork](https://img.shields.io/github/forks/XIU2/CloudflareSpeedTest.svg?style=flat-square&label=Fork&color=00ADD8&logo=github)](https://github.com/XIU2/CloudflareSpeedTest/)

国外很多网站都在使用 Cloudflare CDN，但分配给中国内地访客的 IP 并不友好（延迟高、丢包多、速度慢）。  
虽然 Cloudflare 公开了所有 [IP 段](https://www.cloudflare.com/zh-cn/ips/) ，但想要在这么多 IP 中找到适合自己的，怕是要累死，于是就有了这个软件。

**「自选优选 IP」测试 Cloudflare CDN 延迟和速度，获取最快 IP (IPv4+IPv6)**！好用的话**点个`⭐`鼓励一下叭~**

> _分享我其他开源项目：[**TrackersList.com** - 全网热门 BT Tracker 列表！有效提高 BT 下载速度~](https://github.com/XIU2/TrackersListCollection) <img src="https://img.shields.io/github/stars/XIU2/TrackersListCollection.svg?style=flat-square&label=Star&color=4285dd&logo=github" height="16px" />_  
> _[**UserScript** - 🐵 Github 高速下载、知乎增强、自动无缝翻页、护眼模式 等十几个**油猴脚本**~](https://github.com/XIU2/UserScript) <img src="https://img.shields.io/github/stars/XIU2/UserScript.svg?style=flat-square&label=Star&color=4285dd&logo=github" height="16px" />_  
> _[**SNIProxy** - 🧷 自用的简单 SNI Proxy（支持全平台、全系统、前置代理、配置简单等~](https://github.com/XIU2/SNIProxy) <img src="https://img.shields.io/github/stars/XIU2/SNIProxy.svg?style=flat-square&label=Star&color=4285dd&logo=github" height="16px" />_  

当然了，本项目也支持对 **`其他 CDN / 多个解析 IP 的网站`** 延迟测速，但相对应的下载测速地址需自行寻找。

> [!IMPORTANT]
> Cloudflare CDN 已**明文禁止代理**方式使用，对于**代理套 CDN** 的自行承担风险，请勿过度依赖 [#382](https://github.com/XIU2/CloudflareSpeedTest/discussions/382) [#383](https://github.com/XIU2/CloudflareSpeedTest/discussions/383)

****
## \# 快速使用

### 下载运行

1. 下载编译好的可执行文件（ [Github Releases](https://github.com/XIU2/CloudflareSpeedTest/releases) / [蓝奏云](https://xiu.lanzoub.com/b0742hkxe) ）并解压。  
2. 双击运行 `cfst.exe` 文件（Windows 系统），等待测速完成...

<details>
<summary><code><strong>「 点击查看 Windows 系统下其他安装方式」</strong></code></summary>

****

如果你有 scoop(Windows 下的命令行安装程序)，则可以这样安装:

```sh
# 添加最多人使用的中文软件包仓库：dorado
scoop bucket add dorado https://github.com/chawyehsu/dorado
# 安装cloudflare-speedtest
scoop install dorado/cloudflare-speedtest
```

</details>

<details>
<summary><code><strong>「 点击查看 Linux 系统下的使用示例 」</strong></code></summary>

****

以下命令仅为示例，版本号和文件名请前往 [**Releases**](https://github.com/XIU2/CloudflareSpeedTest/releases) 查看。

``` yaml
# 如果是第一次使用，则建议创建新文件夹（后续更新时，跳过该步骤）
mkdir cfst

# 进入文件夹（后续更新，只需要从这里重复下面的下载、解压命令即可）
cd cfst

# 下载 CFST 压缩包（自行根据需求替换 URL 中 [版本号] 和 [文件名]）
wget -N https://github.com/XIU2/CloudflareSpeedTest/releases/download/v2.3.4/cfst_linux_amd64.tar.gz
# 如果你是在国内网络环境中下载，那么请使用下面这几个镜像加速之一：
# wget -N https://wget.la/https://github.com/XIU2/CloudflareSpeedTest/releases/download/v2.3.4/cfst_linux_amd64.tar.gz
# wget -N https://ghfast.top/https://github.com/XIU2/CloudflareSpeedTest/releases/download/v2.3.4/cfst_linux_amd64.tar.gz
# wget -N https://ghproxy.it/https://github.com/XIU2/CloudflareSpeedTest/releases/download/v2.3.4/cfst_linux_amd64.tar.gz
# wget -N https://gh-proxy.org/https://github.com/XIU2/CloudflareSpeedTest/releases/download/v2.3.4/cfst_linux_amd64.tar.gz
# wget -N https://cdn.gh-proxy.org/https://github.com/XIU2/CloudflareSpeedTest/releases/download/v2.3.4/cfst_linux_amd64.tar.gz
# 如果下载失败的话，尝试删除 -N 参数（如果是为了更新，则记得提前删除旧压缩包 rm cfst_linux_amd64.tar.gz ）

# 解压（