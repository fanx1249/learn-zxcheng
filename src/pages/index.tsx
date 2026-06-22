import type {ReactNode} from 'react';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

import styles from './index.module.css';

const tutorialGroups = [
  {
    title: '入门指南',
    description: '帮助新读者理解本站结构、阅读方式和基础写作规范。',
    href: '/docs/beginner/start-here',
  },
  {
    title: '实战教程',
    description: '用可复现的步骤记录一个真实问题从准备到完成的过程。',
    href: '/docs/projects/publish-first-tutorial',
  },
  {
    title: '工具教程',
    description: '沉淀截图、预览、构建、部署等常用工具流程。',
    href: '/docs/tools/local-preview',
  },
  {
    title: '投稿指南',
    description: '让外部作者知道写什么、放哪里、如何提交和修改。',
    href: '/docs/contribute/write-a-tutorial',
  },
];

export default function Home(): ReactNode {
  return (
    <Layout
      title="Zxcheng Learn"
      description="Zxcheng Learn 是一个基于 Docusaurus 的中文教程网站，支持 Markdown/MDX 写作和 GitHub Pull Request 投稿。">
      <main className={styles.page}>
        <section className={styles.hero}>
          <div className={styles.heroCopy}>
            <p className={styles.eyebrow}>learn.zxcheng.org</p>
            <Heading as="h1" className={styles.title}>
              Zxcheng Learn 教程站
            </Heading>
            <p className={styles.subtitle}>
              用清晰、可复现的教程，把实践经验整理成可以持续协作的知识库。
            </p>
            <div className={styles.actions}>
              <Link className="button button--primary button--lg" to="/docs/intro">
                开始阅读
              </Link>
              <Link className="button button--secondary button--lg" to="/docs/contribute/write-a-tutorial">
                查看投稿指南
              </Link>
            </div>
          </div>
          <div className={styles.preview} aria-label="教程站内容结构预览">
            <div className={styles.previewHeader}>
              <span />
              <span />
              <span />
            </div>
            <div className={styles.previewBody}>
              <div className={styles.previewSidebar}>
                <strong>教程</strong>
                <span>入门指南</span>
                <span>实战教程</span>
                <span>工具教程</span>
                <span>投稿指南</span>
              </div>
              <div className={styles.previewContent}>
                <p className={styles.previewKicker}>当前 V1</p>
                <h2>可阅读，可投稿，可自动发布</h2>
                <p>Markdown/MDX 内容、截图规范、PR 审核流程和 Cloudflare Pages 部署准备。</p>
                <div className={styles.previewCode}>
                  <span>docs/projects/publish-first-tutorial.md</span>
                  <span>static/img/tutorials/example/01-start.webp</span>
                  <span>.github/pull_request_template.md</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.section}>
          <div className={styles.sectionHeader}>
            <Heading as="h2">第一版内容入口</Heading>
            <p>先把教程站的基础骨架做扎实，后续再扩展搜索、作者页和在线投稿后台。</p>
          </div>
          <div className={styles.grid}>
            {tutorialGroups.map((group) => (
              <Link className={styles.card} to={group.href} key={group.title}>
                <h3>{group.title}</h3>
                <p>{group.description}</p>
              </Link>
            ))}
          </div>
        </section>

        <section className={styles.workflow}>
          <Heading as="h2">投稿流程</Heading>
          <ol>
            <li>作者按教程模板新增 Markdown/MDX 文件和截图。</li>
            <li>提交 Pull Request，Cloudflare Pages 生成页面预览。</li>
            <li>维护者按审核清单确认内容、截图、链接和构建结果。</li>
            <li>合并后自动发布到 learn.zxcheng.org。</li>
          </ol>
        </section>
      </main>
    </Layout>
  );
}
