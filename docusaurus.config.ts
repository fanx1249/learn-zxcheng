import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const repositoryUrl = process.env.REPOSITORY_URL;

const config: Config = {
  title: '汪汪队教程站',
  tagline: '面向实践的教程和知识库',
  favicon: 'img/favicon.svg',

  future: {
    v4: true,
  },

  url: 'https://learn.zxcheng.org',
  baseUrl: '/',

  organizationName: 'zxcheng',
  projectName: 'learn-zxcheng',

  onBrokenLinks: 'throw',
  markdown: {
    hooks: {
      onBrokenMarkdownLinks: 'warn',
    },
  },

  i18n: {
    defaultLocale: 'zh-Hans',
    locales: ['zh-Hans'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          ...(repositoryUrl ? {editUrl: `${repositoryUrl}/tree/main`} : {}),
        },
        blog: {
          routeBasePath: 'updates',
          blogTitle: '汪汪队教程站 更新',
          blogDescription: '站点公告、内容计划和精选教程更新。',
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          ...(repositoryUrl ? {editUrl: `${repositoryUrl}/tree/main`} : {}),
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: 'img/logo.svg',
    colorMode: {
      defaultMode: 'light',
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: '汪汪队教程站',
      logo: {
        alt: '汪汪队教程站 Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: '教程',
        },
        {
          to: '/docs/contribute/write-a-tutorial',
          label: '投稿指南',
          position: 'left',
        },
        {to: '/updates', label: '更新', position: 'left'},
        {to: '/contributors', label: '贡献者', position: 'left'},
        ...(repositoryUrl
          ? [
              {
                href: repositoryUrl,
                label: 'GitHub',
                position: 'right' as const,
              },
            ]
          : []),
      ],
    },
    docs: {
      sidebar: {
        hideable: true,
        autoCollapseCategories: false,
      },
    },
    tableOfContents: {
      minHeadingLevel: 2,
      maxHeadingLevel: 4,
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: '教程',
          items: [
            {label: '开始阅读', to: '/docs/intro'},
            {label: '入门指南', to: '/docs/beginner/start-here'},
            {label: '实战教程', to: '/docs/projects/publish-first-tutorial'},
          ],
        },
        {
          title: '贡献',
          items: [
            {label: '投稿指南', to: '/docs/contribute/write-a-tutorial'},
            {label: '审核清单', to: '/docs/contribute/review-checklist'},
            {label: '教程模板', to: '/docs/contribute/tutorial-template'},
          ],
        },
        {
          title: '站点',
          items: [
            {label: '更新', to: '/updates'},
            {label: '贡献者', to: '/contributors'},
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} 汪汪队教程站. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
      additionalLanguages: ['bash', 'diff', 'json', 'powershell', 'tsx'],
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
