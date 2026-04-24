<!-- GitHub Trending: Go | 2,595 stars | +20 today -->

# operacle/checkcle

> CheckCle is a self-hosted, open-source monitoring platform for seamless, real-time full-stack systems, applications, and infrastructure. It provides real-time uptime monitoring, distributed checks, incident tracking, and alerts. All deployable anywhere.

## Repository Info
- **URL**: https://github.com/operacle/checkcle
- **Stars**: 2,595
- **Forks**: 196
- **Language**: Go
- **License**: MIT License
- **Created**: 2025-05-09
- **Updated**: 2026-04-24
- **Topics**: alternative, api, checkcle, container, docker, full-stack, go, infrastructure, monitoring, open-source, oss, pocketbase, realtime, self-hosted, server, typescript, uptime
- **Open Issues**: 84

## README (excerpt)
## 🌐 Select Language

<table align="center">
  <tr>
    <td align="center">
      <a href="README.md">
        <img src="https://flagcdn.com/24x18/gb.png" alt="English" />  
        <br/><strong>English</strong>
      </a>
    </td>
    <td align="center">
      <a href="docs/README_km.md">
        <img src="https://flagcdn.com/24x18/kh.png" alt="Khmer" />  
        <br/><strong>ខ្មែរ</strong>
      </a>
    </td>
    <td align="center">
      <a href="docs/README_ja.md">
        <img src="https://flagcdn.com/24x18/jp.png" alt="Japanese" />  
        <br/><strong>Japanese</strong>
      </a>
    </td>
    <td align="center">
      <a href="docs/README_zhcn.md">
        <img src="https://flagcdn.com/24x18/cn.png" alt="Chinese" />  
        <br/><strong>Chinese</strong>
      </a>
    </td>
  </tr>
</table>

<p align="center">
  Thank you to all our contributors, users, and supporters for making this project thrive.
</p>

<p align="center">
  🚀 <strong>Stay tuned for more updates, features, and improvements.</strong>
</p>

![CheckCle Platform](https://pub-4a4062303020445f8f289a2fee84f9e8.r2.dev/images/server-detail-page.png)

# 🚀 What is CheckCle?

CheckCle is an Open Source solution for seamless, real-time monitoring of full-stack systems, applications, and infrastructure. It provides developers, sysadmins, and DevOps teams with deep insights and actionable data across every layer of their environment—whether it's servers, applications, or services. With CheckCle, you gain visibility, control, and the ability to ensure optimal performance throughout your entire technology stack.

## 🎯 Live Demo  
👉 **Try it now:** [CheckCle Live Demo](https://demo.checkcle.io)
    User: admin@example.com | Passwd: Admin123456

## 🌟 Core Features
### 📝 Roadmap : [DEVELOPMENT_ROADMAP](docs/DEVELOPMENT_ROADMAP.md) 

### Uptime Services & Infrastructure Server Monitoring 
- Monitor HTTP, DNS, and Ping protocols
- Monitor TCP-based, API services (e.g., FTP, SMTP, HTTP)
- Track detail uptime, response times, and performance issues
- Distributed Regional Monitoring
- Incident History (UP/DOWN/WARNING/PAUSE)
- SSL & Domain Monitoring (Domain, Issuer, Expiration Date, Days Left, Status, Last Notified)
- Infrastructure Server Monitoring, Supports Linux (🐧 Debian, Ubuntu, CentOS, Red Hat, etc.) and Windows (Beta). And Servers metrics like CPU, RAM, disk usage, and network activity) with an one-line installation angent script.
- Schedule Maintenance & Incident Management
- Operational Status / Public Status Pages
- Notifications via email, Telegram, Discord, Slack, Matrix, and more
- Reports & Analytics
- Settings Panel (User Management, Data Retention, Multi-language, Themes (Dark & Light Mode), Notification and channels and alert templates).

## #️⃣ Getting Started

### Current Architecture Support
* ✅ x86_64 PCs, laptops, servers (amd64)
* ✅ Modern Raspberry Pi 3/4/5 with (64-bit OS), Apple Silicon Macs (arm64)

### Install CheckCle using one of the following methods:

1. Install with Docker Compose Configuration (Recommended)
```bash 

version: '3.9'

services:
  checkcle:
    image: operacle/checkcle:latest
    container_name: checkcle
    restart: unless-stopped
    ports:
      - "8090:8090"  # Web Application
    volumes:
      - /opt/pb_data:/mnt/pb_data  # Host directory mapped to container path
    ulimits:
      nofile:
        soft: 4096
        hard: 8192

```
2. Install with docker run. Just copy ready docker run command below
```bash 
docker run -d \
  --name checkcle \
  --restart unless-stopped \
  -p 8090:8090 \
  -v /opt/pb_data:/mnt/pb_data \
  --ulimit nofile=4096:8192 \
  operacle/checkcle:latest

```

3. Admin Web Management

    Default URL: http://0.0.0.0:8090
    User: admin@example.com
    Passwd: Admin123456
    
4. Follow the Quick Start Guide at https://docs.checkcle.io

###
![checkcle-collapse-black](https://pub-4a4062303020445f8f289a2fee84f9e8.r2.dev/images/uptime-1.4.png)
![Service Detail Page](https://cdn.checkcle