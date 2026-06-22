# 汪汪队教程站

汪汪队教程站是一个基于 Docusaurus 的中文教程网站，计划部署到 `learn.zxcheng.org`。

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

`npm run build` 会生成静态产物到 `build/`，适合交给 Cloudflare Pages 托管。

## 内容目录

```text
docs/       教程正文
blog/       站点公告和更新日志
static/img/ 截图和站点图片
.github/    投稿、选题和 PR 模板
```

## 投稿方式

第一版使用 GitHub Pull Request 投稿。投稿者可以先阅读：

- `docs/contribute/write-a-tutorial.md`
- `docs/contribute/tutorial-template.md`
- `CONTRIBUTING.md`

## 部署目标

推荐使用 Cloudflare Pages 免费版连接 GitHub 仓库：

```text
Build command: npm run build
Build output directory: build
Production domain: learn.zxcheng.org
```
