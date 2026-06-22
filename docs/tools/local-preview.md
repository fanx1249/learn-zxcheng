---
title: 本地预览教程
description: 作者如何在提交前预览 Docusaurus 教程页面。
sidebar_position: 1
tags: [docusaurus, preview]
---

# 本地预览教程

在提交 Pull Request 前，建议先本地预览。这样可以提前发现链接错误、图片路径错误和格式问题。

## 安装依赖

```bash
npm install
```

## 启动开发服务器

```bash
npm start
```

默认会在本地启动：

```text
http://localhost:3000
```

## 构建检查

提交前至少运行一次：

```bash
npm run build
```

如果构建失败，通常是这些原因：

- Markdown 链接指向了不存在的文件。
- 图片路径写错。
- front matter 里有格式错误。
- MDX 中混入了不合法 JSX。

## 预览重点

检查这些地方：

- 标题是否出现在左侧导航。
- 目录层级是否正常。
- 截图是否清晰并且没有过大。
- 代码块语言是否正确。
- 页面底部上一篇/下一篇是否合理。
