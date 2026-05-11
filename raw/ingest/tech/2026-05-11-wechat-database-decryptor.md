<!-- GitHub Trending: Python | 3,239 stars | +43 today -->

# ylytdeng/wechat-decrypt

> WeChat 4.0 database decryptor - extract keys from memory, decrypt SQLCipher 4 databases, real-time message monitor

## Repository Info
- **URL**: https://github.com/ylytdeng/wechat-decrypt
- **Stars**: 3,239
- **Forks**: 1,874
- **Language**: Python
- **License**: N/A
- **Created**: 2026-02-28
- **Updated**: 2026-05-11
- **Topics**: N/A
- **Open Issues**: 23

## README (excerpt)
# WeChat 4.x Database Decryptor

微信 4.0 (Windows、MacOS、Linux) 本地数据库解密工具。从运行中的微信进程内存提取加密密钥，解密所有 SQLCipher 4 加密数据库，并提供实时消息监听。

## 更新日志

## 防失联tg: https://t.me/wechat_decrypt

### 2025-03-03 — 富媒体内容 & 组合消息修复

- **表情包内联显示**: 自动从 emoticon.db 构建 MD5→CDN 映射，支持自定义表情（NonStore）和商店表情（Store），CDN 下载后本地缓存
- **富媒体内容解析**: 链接卡片（type 49）、文件、视频号、小程序、引用回复、位置分享等在 Web UI 中完整渲染
- **文字+图片组合消息不再丢失**: 修复同时发送文字和图片时只显示最后一条的问题（前端去重 key 增加消息类型）
- **隐藏消息检测**: 新增 `_check_hidden_messages` 机制，session.db 只保存最后一条消息摘要，现在会异步查 message DB 找回同一秒内的其他消息
- **MonitorDBCache 线程安全**: 引入 per-key 锁，防止多线程并发解密同一数据库导致文件损坏
- **Web UI 改进**: 消息气泡样式优化、群聊发送者显示、图片缩略图点击放大

## 原理

微信 4.0 使用 SQLCipher 4 加密本地数据库：
- **加密算法**: AES-256-CBC + HMAC-SHA512
- **KDF**: PBKDF2-HMAC-SHA512, 256,000 iterations
- **页面大小**: 4096 bytes, reserve = 80 (IV 16 + HMAC 64)
- **每个数据库有独立的 salt 和 enc_key**

WCDB (微信的 SQLCipher 封装) 会在进程内存中缓存派生后的 raw key，格式为 `x'<64hex_enc_key><32hex_salt>'`。三个平台（Windows / Linux / macOS）均可通过扫描进程内存匹配此模式，再通过 HMAC 校验 page 1 确认密钥正确性。

## 使用方法

### 环境要求

- Python 3.10+
- 微信 4.x
- `pip install -r requirements.txt`

Windows：

- Windows 10/11
- 微信正在运行
- 需要管理员权限（读取进程内存）

Linux：

- 64-bit Linux
- 需要 root 权限或 `CAP_SYS_PTRACE`（读取 `/proc/<pid>/mem`）
- `db_dir` 默认类似 `~/Documents/xwechat_files/<wxid>/db_storage`

macOS：

- macOS 10.15+（Apple Silicon / Intel 均可）
- 微信 4.x（macOS 版）
- Xcode Command Line Tools：`xcode-select --install`
- 需要对 `/Applications/WeChat.app` 做 ad-hoc 重签名（允许进程内存读取）
- 需要 root 权限运行扫描器
- `db_dir` 默认类似 `~/Library/Containers/com.tencent.xinWeChat/Data/Library/Application Support/com.tencent.xinWeChat/2.0b4.0.9/<hash>/Message`

### 安装依赖

```bash
pip install -r requirements.txt
```

Windows 如果遇到权限不足或全局环境不可写，可以改用：

```bash
py -m pip install --user -r requirements.txt
```

如果需要读取受保护的进程或把依赖安装到系统 Python，也可能需要以管理员身份打开终端。

### 快速开始

Windows：

```bash
python main.py
python main.py decrypt
```

Linux：

```bash
python3 main.py decrypt
```

macOS（密钥扫描用 C 版本，见下文 [macOS 数据库密钥扫描](#macos-数据库密钥扫描-wechat-4x) 章节）：

```bash
# 1. 重新签名（首次及微信升级后各一次）
sudo codesign --force --deep --sign - /Applications/WeChat.app

# 2. 编译并运行扫描器
cc -O2 -o find_all_keys_macos find_all_keys_macos.c -framework Foundation
sudo ./find_all_keys_macos

# 3. 解密
python3 decrypt_db.py
```

程序会自动完成：配置检测 → 内存扫描提取密钥 → 解密。首次运行会自动检测微信数据目录并生成 `config.json`。微信只要在运行中即可，无需重启或重新登录。

如果自动检测失败（例如微信安装在非默认位置），手动创建 `config.json`：
```json
{
    "db_dir": "D:\\xwechat_files\\你的微信ID\\db_storage",
    "keys_file": "all_keys.json",
    "decrypted_dir": "decrypted",
    "wechat_process": "Weixin.exe"
}
```

Linux 版 `config.json` 示例：

```json
{
    "db_dir": "/home/yourname/Documents/xwechat_files/your_wxid/db_storage",
    "keys_file": "all_keys.json",
    "decrypted_dir": "decrypted",
    "wechat_process": "wechat"
}
```

macOS 版 `config.json` 示例：

```json
{
    "db_dir": "/Users/yourname/Library/Containers/com.tencent.xinWeChat/Data/Library/Application Support/com.tencent.xinWeChat/2.0b4.0.9/<hash>/Message",
    "keys_file": "all_keys.json",
    "decrypted_dir": "decrypted",
    "wechat_process": "WeChat"
}
```

`db_dir` 路径：Windows 可在微信设置 → 文件管理中找到；Linux 默认在 `~/Documents/xwechat_files/<wxid>/db_storage`；macOS 在 `~/Library/Containers/com.tencent.xinWeChat/.../Message`（`<hash>` 是微信随机生成的账号目录）。

### Web UI 说明

`python main.py` 启动后打开 http://localhost:5678 查看实时消息流。

- 30ms 轮询 WAL 文件变化 (mtime)
- 检测到变化后全量解密 + WAL patch (~70ms)
- SSE 实时推送到浏览器
- 总延迟约 100ms
- **图片消息内联预览**（支持旧 XOR / V1 / V2 三种 .dat 加密格式）

#### HTTP API

| 端点 | 说明 |
|------|------|
| `GET /api/history` | 最近消息列表 (JSON) |
| `GET /api/history?chat=群名` | 按群名/用户名过滤消息 |
| `GET /api/history?since=1712000000` | 增量拉取（返回该时间戳之后的消息） |
| `GET /api/history?chat=群名&since=ts&limit=100` | 参数可组合使用 |
| `GET /api/tags` | 所有联系人标签及成员 (JSON) |
| `GET /api/tags?name=同事` | 按标签名过滤 |
| `GET /stream` | SSE 实时消息推送 |

将特定群消息存到自己的数据库：监听 `/stream` 或轮询 `/api/history?chat=群名&since=上次时间戳`，写入即可。

### MCP Server (Claude AI 集成)

将微信数据查询能力接入 [Claude Code](https://claude.ai/claude-code)，让 AI 直接读取你的微信消息。

```bash
pip install -r requirem