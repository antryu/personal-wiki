<!-- GitHub Trending: Python | 4,194 stars | +133 today -->

# zhinianboke/xianyu-auto-reply

> 闲鱼自动回复管理系统是一个基于 Python + FastAPI 开发的自动化客服系统，专为闲鱼平台设计。系统通过 WebSocket 连接闲鱼服务器，实时接收和处理消息，提供智能化的自动回复服务。

## Repository Info
- **URL**: https://github.com/zhinianboke/xianyu-auto-reply
- **Stars**: 4,194
- **Forks**: 1,196
- **Language**: Python
- **License**: N/A
- **Created**: 2025-07-24
- **Updated**: 2026-04-20
- **Topics**: N/A
- **Open Issues**: 39

## README (excerpt)
# 爱用不用，风险自担！！！爱用不用，风险自担！！！爱用不用，风险自担！！！

## 交流群

| 微信群 | 微信群1 | QQ群 |
|:---:|:---:|:---:|
| ![微信群](static/wechat-group.png) | ![微信群1](static/wechat-group1.png) | ![QQ群](static/qq-group.png) |



<details>
<summary>⚠️ 以下是某些不知名人士提供的分析报告，请一定要看，谨慎使用啊，切莫自误啊（点击展开）</summary>

# xianyu-auto-reply 安全漏洞披露报告

**项目地址**: https://github.com/zhinianboke/xianyu-auto-reply  
**审计日期**: 2024-12-19  
**严重程度**: 高危  
**影响用户**: 数千至上万用户

---

## 摘要

本报告披露了 `xianyu-auto-reply` 项目中发现的多个严重安全漏洞和后门设计。这些问题构成了一个完整的数据窃取链条，允许攻击者（包括项目作者）获取所有用户的闲鱼账号Cookie、交易数据和敏感信息。

---

## 一、硬编码凭证

### 1.1 硬编码默认密码

| 项目 | 值 |
|-----|---|
| **文件** | `db_manager.py` |
| **行号** | 623-628 |
| **完整路径** | `/xianyu-auto-reply/db_manager.py` |

```python
# db_manager.py 第623-628行
default_password_hash = hashlib.sha256("admin123".encode()).hexdigest()
logger.info("创建默认admin用户，密码: admin123")
```

**问题**:
- 所有部署使用相同的默认密码 `admin123`
- 密码明文输出到日志文件
- 使用无盐SHA256哈希，易被彩虹表破解

---

### 1.2 硬编码API密钥

| 项目 | 值 |
|-----|---|
| **文件** | `reply_server.py` |
| **行号** | 44, 861 |
| **完整路径** | `/xianyu-auto-reply/reply_server.py` |

```python
# reply_server.py 第44行
DEFAULT_ADMIN_PASSWORD = "admin123"

# reply_server.py 第861行
API_SECRET_KEY = "xianyu_api_secret_2024"
```

---

### 1.3 硬编码QQ回复密钥

| 项目 | 值 |
|-----|---|
| **文件** | `db_manager.py` |
| **行号** | 437 |
| **完整路径** | `/xianyu-auto-reply/db_manager.py` |

```python
# db_manager.py 第437行
('qq_reply_secret_key', 'xianyu_qq_reply_2024', 'QQ回复消息API秘钥')
```

---

### 1.4 测试后门密钥

| 项目 | 值 |
|-----|---|
| **文件** | `reply_server.py` |
| **行号** | 921-926 |
| **完整路径** | `/xianyu-auto-reply/reply_server.py` |

```python
# reply_server.py 第921-926行
if cleaned_api_key == "zhinina_test_key":
    logger.info("使用测试秘钥，直接返回成功")
    return SendMessageResponse(success=True, message="接口验证成功")
```

**问题**: 任何知道此密钥的人可以绕过API认证。

---

## 二、数据外泄

### 2.1 QQ通知 - 完整聊天内容外泄

| 项目 | 值 |
|-----|---|
| **文件** | `XianyuAutoAsync.py` |
| **行号** | 3476-3490 (消息构造), 3568 (发送函数) |
| **完整路径** | `/xianyu-auto-reply/XianyuAutoAsync.py` |
| **目标服务器** | `http://notice.zhinianblog.cn/sendPrivateMsg` |

```python
# XianyuAutoAsync.py 第3476-3490行
notification_msg = (
    f"【{self.cookie_id}】收到新消息\n"
    f"买家: {send_user_name}({send_user_id})\n"
    f"商品ID: {item_id}\n"
    f"会话ID: {chat_id}\n"
    f"消息内容: {send_message}"
)

# XianyuAutoAsync.py 第3568行 - _send_qq_notification函数
async def _send_qq_notification(self, qq_number: str, message: str):
    api_url = "http://notice.zhinianblog.cn/sendPrivateMsg"
    params = {"qq": qq_number, "msg": message}
    async with self.session.get(api_url, params=params) as response:
        ...
```

**外泄数据**:
- Cookie ID（账号标识）
- 买家姓名和ID
- 商品ID
- 会话ID
- **完整聊天内容**

---

### 2.2 邮件API - 用户邮箱和验证码外泄

| 项目 | 值 |
|-----|---|
| **文件** | `db_manager.py` |
| **行号** | 2812-2843 |
| **完整路径** | `/xianyu-auto-reply/db_manager.py` |
| **目标服务器** | `https://dy.zhinianboke.com/api/emailSend` |

```python
# db_manager.py 第2812-2843行
async def _send_email_via_api(self, email: str, subject: str, text_content: str) -> bool:
    api_url = "https://dy.zhinianboke.com/api/emailSend"
    params = {
        'subject': subject,
        'receiveUser': email,
        'sendHtml': text_content  # 包含验证码
    }
    async with aiohttp.ClientSession() as session:
        async with session.get(api_url, params=params, timeout=15) as response:
            ...
```

---

### 2.3 用户统计上报

| 项目 | 值 |
|-----|---|
| **文件** | `usage_statistics.py` |
| **行号** | 61-78, 120-140 |
| **完整路径** | `/xianyu-auto-reply/usage_statistics.py` |
| **目标服务器** | `http://xianyu.zhinianblog.cn/?action=statistics` |

```python
# usage_statistics.py 第61-78行
machine_info = f"{platform.machine()}-{platform.processor()}-{platform.system()}"
unique_str = f"{machine_info}-{platform.python_version()}"
# ...
data = {
    "anonymous_id": self.anonymous_id,
    "os": platform.system(),
    "version": self.version
}

# usage_statistics.py 第120-140行 - 发送到作者服务器
api_url = "http://xianyu.zhinianblog.cn/?action=statistics"
```

---

### 