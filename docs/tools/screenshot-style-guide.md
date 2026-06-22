---
title: 教程截图规范
description: 截图尺寸、格式、命名和隐私处理规则。
sidebar_position: 2
tags: [images, writing]
---

# 教程截图规范

截图是教程的重要补充，但不要让截图承担所有解释工作。文字负责说明原因，截图负责帮助读者定位界面。

## 格式和大小

推荐：

- 优先使用 `.webp`。
- 单张截图尽量控制在 `200KB` 到 `500KB`。
- 特别复杂的截图也尽量不要超过 `1MB`。
- 不上传视频、录屏和超大原图。

## 命名规则

每篇教程独立一个图片目录：

```text
static/img/tutorials/tutorial-slug/
```

按顺序命名：

```text
01-open-settings.webp
02-select-project.webp
03-build-success.webp
```

## 隐私处理

上传前检查截图里是否包含：

- 邮箱、手机号、真实姓名。
- API Key、Token、Cookie。
- 私有仓库名或内部项目名。
- 账单、订单、地址等敏感信息。

如果无法避免，先打码再上传。

## 截图写法

在正文里引用图片时，alt 文本写清楚图片内容：

```md
![Cloudflare Pages 的构建设置页面](/img/tutorials/deploy-docusaurus/02-build-settings.webp)
```

不要使用：

```md
![图片1](/img/tutorials/example/01.webp)
```
