<!-- GitHub Trending: Swift | 7,881 stars | +14 today -->

# LiveContainer/LiveContainer

> Run iOS apps without actually installing them!

## Repository Info
- **URL**: https://github.com/LiveContainer/LiveContainer
- **Stars**: 7,881
- **Forks**: 640
- **Language**: Swift
- **License**: GNU Affero General Public License v3.0
- **Created**: 2023-07-14
- **Updated**: 2026-04-26
- **Topics**: N/A
- **Open Issues**: 40

## README (excerpt)
<div align="center">
   <img width="217" height="217" src="./screenshots/livecontainer_icon.png" alt="Logo">
</div>
   

<div align="center">
  <h1><b>LiveContainer</b></h1>
  <p><i>An app launcher that runs iOS apps without actually installing them! </i></p>
</div>
<h6 align="center">

Crowdin Project: [![Crowdin](https://badges.crowdin.net/livecontainer/localized.svg)](https://crowdin.com/project/livecontainer) &nbsp;| &nbsp; Documentation:[liveconainer.github.io](https://livecontainer.github.io/docs/intro)

# LiveContainer

- LiveContainer is an app launcher (not emulator or hypervisor) that allows you to run iOS apps inside it.
- Allows you to install unlimited apps (3 app/10 app id free developer account limit does not apply here) with only one app & app id. You can also have multiple versions of an app installed with multiple data containers.
- (Below iOS 26) When JIT is available, codesign is entirely bypassed, no need to sign your apps before installing. Otherwise, your app will be signed with the same certificate used by LiveContainer.

> [!CAUTION]
> **Important Notice Regarding Third-Party Builds of LiveContainer**
>
> We have recently noticed the appearance of certain closed-source third-party builds of LiveContainer. Please be aware that all your apps are installed within LiveContainer, which means these third-party builds **have full access to your data, including sensitive information such as keychain items and login credentials**. 
> 
> Furthermore, please note that we do not provide any support for issues of these third-party builds.


# Installation
**LiveContainer comes with a standalone version and a version with built-in SideStore. [Please read the install guide here](https://livecontainer.github.io/docs/installation)**

If you encounter any issue please [read our FAQ here](https://livecontainer.github.io/docs/faq)

### Standalone 
<table>
<tr>
<td>
Stable
</td>
<td>
<a href="https://stikstore.app/altdirect/?url=https://github.com/LiveContainer/LiveContainer/releases/download/1.0/apps.json&exclude=livecontainer" target="_blank">
   <img src="https://raw.githubusercontent.com/StikStore/altdirect/refs/heads/main/assets/png/AltSource_Blue.png" alt="Add AltSource" width="200"/>
</a>
</td>
<td>
<a href="https://github.com/LiveContainer/LiveContainer/releases/latest/download/LiveContainer.ipa" target="_blank">
   <img src="https://raw.githubusercontent.com/StikStore/altdirect/refs/heads/main/assets/png/Download_Blue.png" alt="Download .ipa" width="200"/>
</a>
</td>
</tr>
<tr>
<td>
Nightly
</td>
<td>
<a href="https://stikstore.app/altdirect/?url=https://github.com/LiveContainer/LiveContainer/releases/download/nightly/apps_nightly.json&exclude=livecontainer" target="_blank">
   <img src="https://raw.githubusercontent.com/StikStore/altdirect/refs/heads/main/assets/png/AltSource_Blue.png" alt="Add AltSource" width="200"/>
</a>
</td>
<td>
<a href="https://github.com/LiveContainer/LiveContainer/releases/download/nightly/LiveContainer.ipa" target="_blank">
   <img src="https://raw.githubusercontent.com/StikStore/altdirect/refs/heads/main/assets/png/Download_Blue.png" alt="Download .ipa" width="200"/>
</a>
</td>
</tr>
</table>

### LiveContainer+SideStore
|Stable|Nightly|
|:-:|:-:|
|<a href="https://github.com/LiveContainer/LiveContainer/releases/latest/download/LiveContainer+SideStore.ipa" target="_blank"><img src="https://raw.githubusercontent.com/StikStore/altdirect/refs/heads/main/assets/png/Download_Blue.png" alt="Download .ipa" width="200" /></a>|<a href="https://github.com/LiveContainer/LiveContainer/releases/download/nightly/LiveContainer+SideStore.ipa" target="_blank"><img src="https://raw.githubusercontent.com/StikStore/altdirect/refs/heads/main/assets/png/Download_Blue.png" alt="Download .ipa" width="200" /></a>|


## Requirements

- iOS/iPadOS 15+
   + Multitasking requires iOS/iPadOS 16.0+
- AltStore 2.0+ / SideStore 0.6.0+


# Features & Guides

### Installing Apps
- Open LiveContainer, tap the plus icon i