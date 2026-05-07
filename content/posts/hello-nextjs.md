---
title: 用 Next.js 搭建博客
date: 2026-05-01
description: App Router、Markdown 内容与静态生成的简要说明。
---

这篇文章运行在 **Next.js App Router** 上：列表页读取 `content/posts` 下的 Markdown，详情页用 `generateStaticParams` 预渲染每一篇文章。

## 本地开发

在项目根目录执行：

```bash
npm run dev
```

浏览器打开终端里提示的地址即可预览。

## 写新文章

1. 在 `content/posts` 新建 `你的-slug.md`
2. 顶部 YAML 里填写 `title`、`date`（以及可选的 `description`）
3. 正文使用 Markdown

构建时 `npm run build` 会为每篇文章生成静态 HTML，适合部署到 Vercel 或任意 Node/静态托管。
