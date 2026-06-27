---
title: VS Code 远程服务器反代本地网络使用 Codex 插件
description: 在服务器网络无法直接访问 Codex 时，通过 SSH RemoteForward 把 VS Code 远程端的代理反代回本地电脑。
sidebar_position: 2
---

# VS Code 远程服务器反代本地网络使用 Codex 插件

服务器连接的是校园网时，可能会遇到 VS Code 远程端的 Codex 插件无法正常访问网络的问题。即使服务器有创建虚拟网卡的权限，也可能因为校园网限制而失败。

这时可以把服务器上的 VS Code Codex 插件网络，通过 SSH 反向端口转发接回本地电脑正在使用的代理网络。

## 修改 SSH 配置

在本地电脑打开 VS Code，进入远程资源管理器，选择 **远程（隧道/SSH）**，点击 SSH 配置旁边的齿轮。

![打开 SSH 配置文件](/img/tutorials/vscode-remote-codex-proxy/01-open-remote-config.png)

选择第一个 SSH 配置文件。

![选择 SSH 配置文件](/img/tutorials/vscode-remote-codex-proxy/02-select-ssh-config.png)

找到需要反代的主机，在这个主机配置的最后加一行：

```ssh-config
RemoteForward 1080 127.0.0.1:7890
```

![添加 RemoteForward 配置](/img/tutorials/vscode-remote-codex-proxy/03-add-remote-forward.png)

这里有两个端口需要区分：

1. `1080` 是服务器上的端口，不能和别人冲突，也不能和服务器常用端口冲突，比如 `22`。
2. `7890` 是本地电脑代理软件使用的端口，具体是多少需要在自己的代理软件里查看。

写完后保存 SSH 配置文件。

## 修改远程端 VS Code 设置

用 VS Code 连接服务器后，按 `Ctrl + Shift + P`，输入：

```text
Preferences: Open Remote Settings (JSON)
```

打开远程端配置文件后，写入：

```json
{
  "http.proxy": "http://127.0.0.1:1080",
  "http.proxyStrictSSL": false
}
```

这里的 `1080` 就是前面在 `RemoteForward` 里开的服务器端口。

保存配置后，关闭当前服务器连接。以后再次连接服务器时，VS Code 会自动建立这个反代隧道，不需要每次自己手动在命令行开隧道。

## 效果对比

反代之前使用 Codex 插件：

![反代前 Codex 插件无法正常使用](/img/tutorials/vscode-remote-codex-proxy/04-before-proxy.png)

反代后使用 Codex 插件：

![反代后 Codex 插件可以正常回复](/img/tutorials/vscode-remote-codex-proxy/05-after-proxy.png)

至此，VS Code 远程服务器使用本地网络代理 Codex 插件的配置完成。
