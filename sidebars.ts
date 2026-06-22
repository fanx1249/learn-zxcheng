import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  // Keep the first version intentionally small and ordered.
  tutorialSidebar: [
    'intro',
    {
      type: 'category',
      label: '入门指南',
      items: ['beginner/start-here', 'beginner/tutorial-writing-basics'],
    },
    {
      type: 'category',
      label: '实战教程',
      items: ['projects/publish-first-tutorial'],
    },
    {
      type: 'category',
      label: '工具教程',
      items: ['tools/local-preview', 'tools/screenshot-style-guide'],
    },
    {
      type: 'category',
      label: '进阶专题',
      items: ['advanced/content-architecture'],
    },
    {
      type: 'category',
      label: '投稿指南',
      items: [
        'contribute/write-a-tutorial',
        'contribute/review-checklist',
        'contribute/tutorial-template',
      ],
    },
  ],
};

export default sidebars;
