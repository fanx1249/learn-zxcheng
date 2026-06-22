---
title: 提交第一篇教程
description: 从新增教程文件到提交 Pull Request 的完整流程。
sidebar_position: 1
tags: [contribution, github]
---

# 提交第一篇教程

这篇示例教程展示一个作者如何给本站提交新内容。等 GitHub 仓库创建后，这个流程就可以直接使用。

## 准备工作

你需要：

- 一个 GitHub 账号。
- 能编辑 Markdown 文件的编辑器。
- 一篇原创教程的草稿和必要截图。

## 新增教程文件

根据内容类型选择目录：

```text
docs/beginner/     入门说明
docs/projects/     实战教程
docs/tools/        工具教程
docs/advanced/     进阶专题
```

文件名使用英文小写和连字符：

```text
docs/projects/deploy-docusaurus-with-cloudflare-pages.md
```

## 添加页面信息

每篇教程顶部都需要 front matter：

```md
---
title: 使用 Cloudflare Pages 部署 Docusaurus
description: 把 Docusaurus 静态站点发布到 Cloudflare Pages。
tags: [docusaurus, cloudflare, deploy]
---
```

## 放置截图

截图建议放在：

```text
static/img/tutorials/deploy-docusaurus/
```

并按顺序命名：

```text
01-connect-repo.webp
02-build-settings.webp
03-domain-ready.webp
```

在教程里这样引用：

```md
![Cloudflare Pages 构建设置](/img/tutorials/deploy-docusaurus/02-build-settings.webp)
```

## 提交 Pull Request

Pull Request 里需要说明：

- 这篇教程解决什么问题。
- 是否已经本地预览。
- 截图是否已经压缩。
- 是否引用了外部资料。

维护者会根据 [审核清单](../contribute/review-checklist.md) 检查内容。
