import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: '汪汪队教程站',
  tagline: '面向实践的教程和知识库',
  favicon: 'img/favicon.svg',

  future: {
    v4: true,
  },

  url: 'https://learn.zxcheng.org',
  baseUrl: '/',

  organizationName: 'fanx1249',
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
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: 'img/site/sci-couplet.jpg',
    colorMode: {
      defaultMode: 'light',
      disableSwitch: true,
      respectPrefersColorScheme: false,
    },
    navbar: {
      title: '汪汪队教程站',
      logo: {
        alt: '汪汪队教程站 Logo',
        src: 'img/logo.svg',
      },
      items: [],
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
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
      additionalLanguages: ['bash', 'diff', 'json', 'powershell', 'tsx'],
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
