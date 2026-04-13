<!-- GitHub Trending: Go | 12,636 stars | +27 today -->

# fish2018/pansou

> PanSou是一款高性能的网盘资源搜索API服务，支持TG频道和插件搜索。系统设计以性能和可扩展性为核心，支持多频道多插件并发搜索、结果智能排序和网盘类型分类。docker集成前后端，一键启动，开箱即用。 https://so.252035.xyz/

## Repository Info
- **URL**: https://github.com/fish2018/pansou
- **Stars**: 12,636
- **Forks**: 3,023
- **Language**: Go
- **License**: MIT License
- **Created**: 2025-07-10
- **Updated**: 2026-04-13
- **Topics**: N/A
- **Open Issues**: 7

## README (excerpt)
# PanSou 网盘搜索API

PanSou是一个高性能的网盘资源搜索API服务，支持TG搜索和自定义插件搜索。系统设计以性能和可扩展性为核心，支持并发搜索、结果智能排序和网盘类型分类。

[//]: # (MCP服务文档: [MCP-SERVICE.md]&#40;docs/MCP-SERVICE.md&#41;)


## 特性（[详见系统设计文档](docs/%E7%B3%BB%E7%BB%9F%E5%BC%80%E5%8F%91%E8%AE%BE%E8%AE%A1%E6%96%87%E6%A1%A3.md)）

- **高性能搜索**：并发执行多个TG频道及异步插件搜索，显著提升搜索速度；工作池设计，高效管理并发任务
- **网盘类型分类**：自动识别多种网盘链接，按类型归类展示
- **智能排序**：基于插件等级、时间新鲜度和优先关键词的多维度综合排序算法
- **异步插件系统**：支持通过插件扩展搜索来源，支持"尽快响应，持续处理"的异步搜索模式，解决了某些搜索源响应时间长的问题。详情参考[**插件开发指南**](docs/插件开发指南.md)
- **二级缓存**：分片内存+分片磁盘缓存机制，大幅提升重复查询速度和并发性能  

## MCP 服务

PanSou 还提供了一个基于 [Model Context Protocol (MCP)](https://modelcontextprotocol.io) 的服务，可以将搜索功能集成到 Claude Desktop 等支持 MCP 的应用中。详情请参阅 [MCP 服务文档](docs/MCP-SERVICE.md)。

## 支持的网盘类型

百度网盘 (`baidu`)、阿里云盘 (`aliyun`)、夸克网盘 (`quark`)、天翼云盘 (`tianyi`)、UC网盘 (`uc`)、移动云盘 (`mobile`)、115网盘 (`115`)、PikPak (`pikpak`)、迅雷网盘 (`xunlei`)、123网盘 (`123`)、磁力链接 (`magnet`)、电驴链接 (`ed2k`)、其他 (`others`)

## 快速开始

在 Github 上先[![Fork me on GitHub](https://raw.githubusercontent.com/fishforks/fish2018/refs/heads/main/forkme.png)](https://github.com/fish2018/pansou/fork)
本项目，并点上 Star !!!

### 使用Docker部署
[qqpd搜索插件文档](plugin/qqpd/README.md)  
[gying搜索插件文档](plugin/gying/README.md)   
[weibo搜索插件文档](plugin/weibo/README.md)   
[常见问题总结](https://github.com/fish2018/pansou/issues/46)  
[TG/QQ频道/插件/微博](https://github.com/fish2018/pansou/issues/4)

#### **1、前后端集成版**

##### 直接使用Docker命令

一键启动，开箱即用

```
docker run -d --name pansou -p 80:80 ghcr.io/fish2018/pansou-web
```

##### 使用Docker Compose（推荐）
```
# 下载配置文件
curl -o docker-compose.yml https://raw.githubusercontent.com/fish2018/pansou-web/refs/heads/main/docker-compose.yml

# 启动服务
docker-compose up -d

# 查看日志
docker-compose logs -f
```

#### **2、纯后端API版**

##### 直接使用Docker命令

```bash
docker run -d --name pansou -p 8888:8888 ghcr.io/fish2018/pansou:latest
```

##### 使用Docker Compose（推荐）

```bash
# 下载配置文件
curl -o docker-compose.yml  https://raw.githubusercontent.com/fish2018/pansou/refs/heads/main/docker-compose.yml

# 启动服务
docker-compose up -d

# 访问服务
http://localhost:8888
```

### 从源码安装

#### 环境要求

- Go 1.18+
- 可选：SOCKS5代理（用于访问受限地区的Telegram站点）

1. 克隆仓库

```bash
git clone https://github.com/fish2018/pansou.git
cd pansou
```

2. 配置环境变量（可选）

#### 基础配置

| 环境变量 | 描述 | 默认值 | 说明 |
|----------|------|--------|------|
| **PORT** | 服务端口 | `8888` | 修改服务监听端口 |
| **PROXY** | SOCKS5代理 | 无 | 如：`PROXY=socks5://127.0.0.1:1080` |
| **HTTPS_PROXY/HTTP_PROXY** | HTTPS/HTTP代理 | 无 | 如：`HTTPS_PROXY=http://127.0.0.1:1080`,`HTTP_PROXY=http://127.0.0.1:1080` |
| **CHANNELS** | 默认搜索的TG频道 | `tgsearchers3` | 多个频道用逗号分隔 |
| **ENABLED_PLUGINS** | 指定启用插件，多个插件用逗号分隔 | 无 | 必须显式指定 |

#### 认证配置（可选）

PanSou支持可选的安全认证功能，默认关闭。开启后，所有API接口（除登录接口外）都需要提供有效的JWT Token。详见[认证系统设计文档](docs/认证系统设计.md)。

| 环境变量 | 描述 | 默认值 | 说明 |
|----------|------|--------|------|
| **AUTH_ENABLED** | 是否启用认证 | `false` | 设置为`true`启用认证功能 |
| **AUTH_USERS** | 用户账号配置 | 无 | 格式：`user1:pass1,user2:pass2` |
| **AUTH_TOKEN_EXPIRY** | Token有效期（小时） | `24` | JWT Token的有效时长 |
| **AUTH_JWT_SECRET** | JWT签名密钥 | 自动生成 | 用于签名Token，建议手动设置 |

**认证配置示例：**

```bash
# 启用认证并配置单个用户
docker run -d --name pansou -p 8888:8888 \
  -e AUTH_ENABLED=true \
  -e AUTH_USERS=admin:admin123 \
  -e AUTH_TOKEN_EXPIRY=24 \
  ghcr.io/fish2018/pansou:latest

# 配置多个用户
docker run -d --name pansou -p 8888:8888 \
  -e AUTH_ENABLED=true \
  -e AUTH_USERS=admin:pass123,user1:pass456,user2:pass789 \
  ghcr.io/fish2018/pansou:latest
```

**认证API接口：**

- `POST /api/auth/login` - 用户登录，获取Token
- `POST /api/auth/verify` - 验证Token有效性
- `POST /api/auth/logout` - 退出登录（客户端删除Token）

**使用Token调用API：**

```bash
# 1. 登录获取Token
curl -X POST http://localhost:8888/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{"username":"admin","password":"admin123"}'

# 响应：{"token":"eyJhbGc...","expires_at":1234567890,"username":"admin"}

# 2. 使用Token调用搜索API
curl -X POST http://localhost:8888/api/search \
  -H "Authorization: Bearer eyJhbGc..." \
  -H "Content-Type: application/json" \
  -d '{"kw":"速度与激情"}'
```

#### 高级配置（默认值即