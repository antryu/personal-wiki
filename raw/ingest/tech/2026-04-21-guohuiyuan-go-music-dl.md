<!-- GitHub Trending: Go | 2,481 stars | +26 today -->

# guohuiyuan/go-music-dl

> 一个基于 Go 语言的全网音乐搜索与下载工具。支持 CLI 命令行与 Web 服务双模式，内置网易云、QQ、酷狗、Bilibili、汽水音乐等 10+ 个主流平台，支持多源并发搜索与无损音质解析。music-dl交流群：1074285005

## Repository Info
- **URL**: https://github.com/guohuiyuan/go-music-dl
- **Stars**: 2,481
- **Forks**: 196
- **Language**: Go
- **License**: GNU Affero General Public License v3.0
- **Created**: 2026-01-18
- **Updated**: 2026-04-21
- **Topics**: go, music
- **Open Issues**: 8

## README (excerpt)
# Go Music DL

<p align="center">
  <img src="./internal/web/templates/static/images/icon.png" alt="Music Downloader Icon" width="220" />
</p>

Go Music DL 是一个音乐搜索与下载工具，支持 **Web 界面**、**TUI 终端** 和 **桌面应用** 三种使用模式。除了单曲搜索与下载外，还支持 **歌单搜索 / 解析**、**专辑搜索 / 解析**、整单 / 整专曲目查看与批量处理。你可以在浏览器试听，也可以在终端里批量下载，或使用原生桌面应用享受最佳体验。

## 🚀 快速开始

### 桌面应用 (推荐)

最简单的使用方式，下载即用：

1. 从 [Releases](https://github.com/guohuiyuan/go-music-dl/releases) 下载 `music-dl-desktop-rust.exe` 或 `music-dl-desktop-go.exe`
2. 解压，双击运行
3. 享受原生桌面体验！

### Web 模式

```bash
./music-dl web

```

### TUI 模式

```bash
./music-dl -k "搜索关键词"

```

---

![Web UI 1](./screenshots/web1.png)
![Web UI 2](./screenshots/web2.png)

![TUI 1](./screenshots/tui1.png)
![TUI 2](./screenshots/tui2.png)

## 主要功能

* **多模式支持**: Web 界面、TUI 终端、桌面应用
* **本地自制歌单**: 支持新建本地收藏夹，随时收藏、管理心仪歌曲，数据持久化不丢失
* **无损音乐支持**: 支持网易云、QQ 音乐、Bilibili 的 FLAC 无损音乐下载
* 多平台聚合搜索，支持单曲 / 歌单 / 专辑
* 试听、歌词、封面下载
* Range 探测：显示大小与码率
* 汽水音乐等加密音频解密
* 过滤需要付费的资源
* **桌面应用特性**: 原生窗口、自动服务启动、智能缓存管理

## 歌单 / 专辑支持

* **Web**: 支持单曲、歌单、专辑三种搜索类型切换，可直接查看歌单 / 专辑曲目列表
* **链接解析**: 支持直接粘贴歌单链接或专辑链接，自动识别来源并进入详情
* **TUI**: 输入界面支持在单曲 / 歌单 / 专辑之间切换，适合整单 / 整专处理
* **详情跳转**: Web 歌曲列表支持从歌曲跳转到歌手搜索结果或对应专辑页

## Web 下载模式与 FFmpeg

Web 端“设置”里新增了 **下载时内嵌元数据（封面/歌词）** 开关：

* **默认关闭（推荐）**：走流式下载，速度更快，并支持 `Range` 断点/拖动播放。
* **开启后**：下载时会尝试把封面、歌词写入音频文件（embed）。

> ⚠️ 开启内嵌元数据依赖 **FFmpeg**。未安装 FFmpeg 时，会自动跳过内嵌并返回原始音频。

可先验证 FFmpeg 是否可用：

```bash
ffmpeg -version

```

常见安装方式：

* Windows: `winget install Gyan.FFmpeg`
* macOS: `brew install ffmpeg`
* Ubuntu/Debian: `sudo apt install ffmpeg`

## 新增改动（简要）

* **Web 架构全面重构**：前端代码彻底模块化（拆分独立的 JS / CSS / HTML 模板），后端路由按业务域拆分（音乐查询、歌单管理、视频生成），大幅提升代码可维护性。
* **新增自制歌单功能**：Web 端支持本地收藏夹，用户可自由创建、编辑歌单，将不同平台的歌曲聚合收藏。
* Web 试听按钮支持播放/停止切换，底部增加全局播放与音量控制栏。
* Web 单曲支持“换源”，按相似度优先、时长接近、可播放验证。
* 换源自动排除 soda 与 fivesing。
* TUI 增加 r 键批量换源，并显示换源进度。
* 增加“每日歌单推荐”，Web 和 TUI 都能看。
* Web 端支持批量操作：全选、选择无效、批量下载、批量换源。

## 快速开始

### 桌面应用模式

桌面应用提供了原生窗口体验，无需打开浏览器即可使用。

#### 特性

* 🖥️ 原生桌面窗口，无需浏览器
* 🚀 自动启动内置Web服务器
* 🎵 完整Web界面功能
* 📦 单文件分发，绿色免安装
* 🖼️ 自定义窗口图标
* 🔒 使用罕见端口(37777)，避免端口冲突

### Docker 部署

本项目提供了多种 Docker 部署方式。当前默认通过 `./data` 目录挂载到容器内 `/home/appuser/data`，下载文件、配置与收藏数据都会持久化到该目录。

*注意：首次运行前必须先创建 `data` 目录（如 `mkdir -p data && chmod 777 data`），便于宿主机直接访问下载与配置数据。*

#### 1. 生产环境部署（推荐）

项目包含 `docker-compose.yml` 文件，直接拉取云端预编译镜像，无需在本地构建：

```bash
# 拉取最新镜像
docker compose pull

# 后台启动服务
docker compose up -d --remove-orphans

# 或一条命令拉取并启动
docker compose up -d --pull always --remove-orphans

# 查看日志
docker compose logs -f

# 停止服务
docker compose down

```

浏览器访问 `http://localhost:8080`。

**说明：**

* 自动拉取 `guohuiyuan/go-music-dl:latest` 镜像
* 支持后台运行和自动重启
* 默认使用 `./data` 本地目录做数据持久化，便于直接查看和备份
* 设置时区为亚洲上海
* 以非root用户(uid=1000)运行，提高安全性

#### 2. 开发环境部署（本地构建）

如果您修改了源码，希望在本地通过 Docker 重新构建并测试效果，请使用 `docker-compose.dev.yml`：

```bash
# 强制在本地使用 Dockerfile 进行构建并启动
docker compose -f docker-compose.dev.yml up -d --build --remove-orphans

```

#### 3. 纯命令行模式 (docker run)

如果不使用 Compose，也可以直接通过命令行运行：

```bash
docker run -d --name music-dl \
  -p 8080:8080 \
  -v $(pwd)/data:/home/appuser/data \
  -e TZ=Asia/Shanghai \
  --user 1000:1000 \
  --restart unless-stopped \
  guohuiyuan/go-music-dl:latest \
  ./music-dl web --port 8080 --no-browser

# Windows PowerShell
docker run -d --name music-dl -p 8080:8080 -v ${PWD}/data:/home/appuser/data -e TZ=Asia/Shanghai --user 1000:1000 --restart unless-stopped guohuiyuan/go-music-dl:latest ./music-dl web --port 8080 --no-browser

```

视频生成相关的“更换封面 / 更换音频 / 更换歌词 / 导出视频”按钮已迁移到 Web 设置中管理，默认关闭，可在网页右上角设置面板中开启。


### CLI/TUI 模式

```bash
# 搜索
./music-dl -k "周杰伦"

```

TUI 常用按键：

* `↑/↓` 移动
* `空格` 选择
* `a` 全选/清空
* `r` 对勾选项换源
* `Enter` 下载
* `b` 返回
* `w` 每日推荐歌单
* `q` 退出

更多用法：

```bash
# 查看帮助
./music-dl -h

# 指定搜索源
./music-dl -k "周杰伦 晴天" -s qq,netease

# 指定下载目录
./music-dl -k "周杰伦" -o ./my_music

# 下载时包含封面和歌词
./music-dl -k "周杰伦" --cover --lyrics

```

## GitHub Actions 自动构建

本项目已配置 GitHub Actions 工作流。当推送代码并打上版本标签（如 `v1.0.0`）时，会自动触发 `.github/workflows/docker.yml`，构建跨平台镜像（支持 