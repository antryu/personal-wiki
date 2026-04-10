# OpenClaw Node Connection Guide

## Overview

이 문서는 OpenClaw에서 여러 Mac을 Gateway-Node 구조로 연결하는 방법을 설명합니다.

## Architecture

```
M1 Pro (Gateway)          M4 Max (Node)
192.168.219.103:18789 ←── 192.168.219.105
     ↓                         ↓
  Discord/Telegram         Camera/Screen
  Agent Processing         System Commands
```

### Machines

| Machine | Role | IP | Port | Version |
|---------|------|----|----|---------|
| M1 Pro 16GB | Gateway | 192.168.219.103 | 18789 | 2026.3.3 |
| M4 Max | Node | 192.168.219.105 | - | 2026.3.3 |

## Setup Process

### 1. Gateway 설정 (M1 Pro)

Gateway가 LAN에서 접근 가능하도록 설정:

```json
// ~/.openclaw/openclaw.json
{
  "gateway": {
    "port": 18789,
    "mode": "local",
    "bind": "lan",  // 중요: 0.0.0.0으로 바인딩
    "auth": {
      "mode": "token",
      "token": "f62f687f58b4258464600432371dce7c4ea457eb51178bd6"
    }
  }
}
```

Gateway 실행:
```bash
pnpm openclaw gateway
```

### 2. Node 설정 (M4)

Node config에 Gateway의 auth token 추가:

```json
// ~/.openclaw/openclaw.json
{
  "gateway": {
    "auth": {
      "token": "f62f687f58b4258464600432371dce7c4ea457eb51178bd6"
    }
  }
}
```

Node 실행:
```bash
cd ~/openclaw
OPENCLAW_ALLOW_INSECURE_PRIVATE_WS=1 pnpm openclaw node run --host 192.168.219.103 --port 18789
```

### 3. Pairing 승인 (M1 Pro)

Pending requests 확인:
```bash
pnpm openclaw devices list
```

출력 예시:
```
Pending (1)
┌──────────────────────────────────────┬────────┬────────┬─────────────────┐
│ Request                              │ Device │ Role   │ IP              │
├──────────────────────────────────────┼────────┼────────┼─────────────────┤
│ 21fce80d-089a-4d12-972c-e68161823808 │ M4-Max │ node   │ 192.168.219.105 │
└──────────────────────────────────────┴────────┴────────┴─────────────────┘
```

Request 승인:
```bash
pnpm openclaw devices approve <request-id>
```

### 4. 연결 확인

```bash
pnpm openclaw nodes status
```

출력 예시:
```
Known: 1 · Paired: 1 · Connected: 1
┌──────┬────────────┬─────────┬────────┬────────────────────┬──────┐
│ Node │ ID         │ IP      │ Detail │ Status             │ Caps │
├──────┼────────────┼─────────┼────────┼────────────────────┼──────┤
│ M4-  │ 7b0911c6… │ 192.168.│ core   │ paired · connected │ brow │
│ Max  │            │ 219.105 │ v2026. │ (1m ago)           │ ser, │
│      │            │         │ 3.3    │                    │ syst │
└──────┴────────────┴─────────┴────────┴────────────────────┴──────┘
```

## Node 사용하기

### Shell 명령 실행

```bash
pnpm openclaw nodes run --node M4-Max --raw "uname -a"
pnpm openclaw nodes run --node M4-Max --raw "ls -la ~"
```

### 카메라 캡처

```bash
pnpm openclaw nodes camera snap --node M4-Max
```

### 화면 캡처

```bash
pnpm openclaw nodes screen --node M4-Max
```

### Node 정보 확인

```bash
pnpm openclaw nodes describe --node M4-Max
```

## 중요한 개념

### devices vs nodes

- **`devices`**: 디바이스 페어링 관리 (operator, nodes 등)
  - `devices list`: Pending과 paired devices 모두 표시
  - `devices approve`: Pairing request 승인

- **`nodes`**: Gateway가 관리하는 compute nodes
  - `nodes status`: 연결된 nodes 상태 확인
  - `nodes run`: Node에서 명령 실행

**헷갈리는 포인트**: Node pairing request는 `devices list`에 나타나고, `devices approve`로 승인하지만, 연결 후 관리는 `nodes` 명령어로 합니다.

### 보안 설정

OpenClaw는 보안상 원격 연결 시 plaintext WebSocket (ws://)을 차단합니다.

**해결 방법**:

1. **환경변수** (신뢰할 수 있는 사설 네트워크):
   ```bash
   OPENCLAW_ALLOW_INSECURE_PRIVATE_WS=1 pnpm openclaw node run --host 192.168.219.103 --port 18789
   ```

2. **SSH 터널** (더 안전):
   ```bash
   # M4에서 터널 생성
   ssh -N -L 18789:127.0.0.1:18789 andrew@192.168.219.103

   # 다른 터미널에서 node 실행
   pnpm openclaw node run --host 127.0.0.1 --port 18789
   ```

## Troubleshooting

### 1. "token_mismatch" 에러

**원인**: Node config에 gateway auth token이 없거나 잘못됨

**해결**: M4의 `~/.openclaw/openclaw.json`에 gateway token 추가
```json
{
  "gateway": {
    "auth": {
      "token": "f62f687f58b4258464600432371dce7c4ea457eb51178bd6"
    }
  }
}
```

### 2. "No pending pairing requests"

**원인**: `nodes pending` 대신 `devices list`를 사용해야 함

**해결**:
```bash
pnpm openclaw devices list  # ✓ 올바름
pnpm openclaw nodes pending  # ✗ 잘못됨
```

### 3. "unknown requestId" 에러

**원인**:
- Request가 만료됨
- Gateway와 Node 버전 불일치
- 잘못된 gateway에서 approve 시도

**해결**:
- Node를 다시 실행해서 새 request 생성
- 버전 확인: `pnpm openclaw --version`
- Gateway에서 approve하는지 확인

### 4. "No route to host" / Connection refused

**원인**:
- Gateway가 실행 중이지 않음
- Gateway가 `bind=loopback`으로 설정됨
- 방화벽 차단

**해결**:
```bash
# Gateway 상태 확인
pnpm openclaw gateway status

# Gateway config 확인
cat ~/.openclaw/openclaw.json | grep -A5 gateway

# bind가 "lan"인지 확인
```

### 5. 버전 불일치

**원인**: Gateway와 Node의 OpenClaw 버전이 다름

**해결**:
```bash
# 버전 확인
pnpm openclaw --version

# 업데이트
npm install -g openclaw@latest
# 또는
cd ~/openclaw && git pull && npm install
```

## Persistent Node Service

Node를 시스템 서비스로 설치하면 재부팅 후에도 자동 실행됩니다:

```bash
# M4에서
npx openclaw node install

# 서비스 관리
npx openclaw node status
npx openclaw node restart
npx openclaw node stop
```

## 참고 정보

### Gateway Auth Token
```
f62f687f58b4258464600432371dce7c4ea457eb51178bd6
```

### M4 Node ID
```
7b0911c6c25d2864e39cd9fefc37ceca3155f92c9da76e9366b469e1bddeb4a9
```

### Discord/Telegram Tokens
- Discord: `REDACTED_DISCORD_TOKEN`
- Telegram: `REDACTED_TELEGRAM`
- Guild: 1308306893105664050

## Tags

#openclaw #node-connection #gateway #m1-pro #m4-max #websocket #pairing

---

**Last Updated**: 2026-03-04
**Status**: ✅ Connected and Working
