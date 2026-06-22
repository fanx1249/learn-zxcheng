# 投稿指南

感谢你愿意为汪汪队教程站投稿。第一版采用 GitHub Pull Request 协作。

## 投稿前

请确认：

- 内容为原创，或你拥有转载授权。
- 截图不包含隐私、密钥、账单、内部项目名等敏感信息。
- 教程可以被读者复现。
- 图片已经压缩，优先使用 `.webp`。

## 新增教程

1. 在 `docs/` 选择合适目录。
2. 复制 `docs/contribute/tutorial-template.md` 的结构。
3. 新增截图到 `static/img/tutorials/<tutorial-slug>/`。
4. 在本地运行 `npm run build`。
5. 提交 Pull Request。

## 文件命名

文件和目录使用英文小写加连字符：

```text
deploy-docusaurus-with-cloudflare-pages.md
static/img/tutorials/deploy-docusaurus/01-build-settings.webp
```

## Pull Request 要求

PR 描述里请说明：

- 本次新增或修改了什么。
- 是否已经本地预览。
- 是否运行了 `npm run build`。
- 是否包含外部引用。

维护者会根据 `docs/contribute/review-checklist.md` 审核。
