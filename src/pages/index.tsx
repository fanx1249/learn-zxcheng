import type {ReactNode} from 'react';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

import styles from './index.module.css';

export default function Home(): ReactNode {
  return (
    <Layout
      title="汪汪队教程站"
      description="汪汪队教程站是一个面向实践的个人教程网站。">
      <main className={styles.page}>
        <section className={styles.hero}>
          <div className={styles.heroCopy}>
            <p className={styles.eyebrow}>learn.zxcheng.org</p>
            <Heading as="h1" className={styles.title}>
              汪汪队教程站
            </Heading>
            <p className={styles.subtitle}>
              用清晰、可复现的教程，把实践经验整理成可以持续协作的知识库。
            </p>
            <div className={styles.actions}>
              <Link className="button button--primary button--lg" to="/docs/coming-soon">
                开始阅读
              </Link>
            </div>
          </div>
          <div className={styles.heroImageWrap}>
            <img
              className={styles.heroImage}
              src="/img/site/sci-couplet.jpg"
              alt="科研顺利，文章投哪哪都要，数据分析好到爆"
            />
          </div>
        </section>
      </main>
    </Layout>
  );
}
