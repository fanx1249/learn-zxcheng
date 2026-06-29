---
title: 查询codex重置卡过期时间
description: 让 Codex 使用本机凭证查询 rate-limit reset credits，并汇总重置卡状态和过期时间。
sidebar_position: 3
---

# 查询codex重置卡过期时间

想查询 Codex 重置卡的过期时间时，可以直接把下面这段提示词发送给 Codex。

```text
请使用本机 Codex 凭证查一下 rate-limit reset credits：

读取 ~/.codex/auth.json 里的 tokens.access_token，请求接口：
https://chatgpt.com/backend-api/wham/rate-limit-reset-credits

要求：

1. 不要打印 access_token、refresh_token、cookie 或完整唯一 ID
2. 只汇总 available_count、每个 credit 的 status/title/granted_at/expires_at
3. 把 granted_at/expires_at 从 UTC 转成本地时间
4. 如果状态码返回 401，说明是凭证失效或没带对 Authorization header
```

注意：这段提示词会让 Codex 读取本机登录凭证来请求接口，所以结果里只应该输出汇总信息，不要让它打印任何 token、cookie 或完整唯一 ID。
