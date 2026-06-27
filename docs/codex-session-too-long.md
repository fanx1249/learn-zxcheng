---
title: Codex 会话过长解决办法
description: 当 Codex 会话变长、上下文太多时，用会话 ID 在新会话里续接项目。
sidebar_position: 1
---

# Codex 会话过长解决办法

单个 Codex 会话用久之后，上下文会越来越多。有时模型会变得不够灵敏，也可能忘记很早之前说过的内容。重新开一个会话又担心项目背景丢失，这时可以用会话 ID 把旧会话接到新会话里继续做。

## 桌面端：复制会话 ID

在 Codex 桌面端，右键需要继续的会话，选择 **复制会话 ID**。

![在 Codex 桌面端复制会话 ID](/img/tutorials/codex-session-too-long/01-desktop-copy-session-id.png)

打开一个新会话后，输入：

```bash
codex resume <会话ID>
```

然后告诉 Codex：

```text
继续这个会话 ID 的项目
```

:::tip
`<会话ID>` 是占位符，实际输入时换成你复制到的那串 ID，尖括号不用输入。
:::

例如，会话 ID 是：

```text
019e9d06-11f4-7592-8a6b-ddc0733c5543
```

那命令就是：

```bash
codex resume 019e9d06-11f4-7592-8a6b-ddc0733c5543
```

接着输入：

```text
继续这个会话 ID 的项目
```

## VS Code 插件：找到要续接的项目

如果用的是 VS Code 的 Codex 插件，先找到想要继续的项目或会话，让 Codex 给出当前会话 ID。

![在 VS Code Codex 插件中找到当前会话 ID](/img/tutorials/codex-session-too-long/02-vscode-project-list.png)

拿到会话 ID 后，在新会话里用同样的命令续接：

```bash
codex resume <会话ID>
```

![用会话 ID 续接旧项目](/img/tutorials/codex-session-too-long/03-vscode-resume-project.png)

## 以后怎么用

以后某个 Codex 会话太长、反应变差，或者你想把一个项目换到新会话继续，就按这个流程：

1. 复制旧会话的会话 ID。
2. 新开一个会话。
3. 输入 `codex resume <会话ID>`。
4. 再告诉 Codex：`继续这个会话 ID 的项目`。

这样新会话会定位到旧会话记录和原始工作目录，后续就可以继续推进。
