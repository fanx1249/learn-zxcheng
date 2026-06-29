# 汪汪队教程站

这是基于 Docusaurus 的个人教程站，部署到 `https://learn.zxcheng.org`。

## 本地开发

```bash
npm install
npm start
```

本地预览默认地址是 `http://localhost:3000`。

## 构建检查

```bash
npm run build
npm run typecheck
```

## 写教程

正式教程按栏目放置：

```text
docs/problems/example-problem.md
docs/tools/example-tool.md
```

文件名使用英文小写和连字符。截图或教程配图放到：

```text
static/img/tutorials/example-tutorial/
```

`问题解决` 下放故障排查、流程补救、配置修复类教程。

`工具推荐` 下放工具介绍、适用场景、安装方法和使用示例。每篇工具推荐教程都必须包含两种安装方式：

1. 用 Codex 等 AI 工具自动化安装。
2. 自己手动安装。

站点发布由 Cloudflare Pages 自动完成，推送到 GitHub `main` 分支后会自动部署。
