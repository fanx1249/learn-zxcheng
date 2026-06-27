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

正式教程直接放在 `docs/` 根目录下，不再按分类拆分。文件名使用英文小写和连字符：

```text
docs/example-tutorial.md
```

截图放到：

```text
static/img/tutorials/example-tutorial/
```

站点发布由 Cloudflare Pages 自动完成，推送到 GitHub `main` 分支后会自动部署。
