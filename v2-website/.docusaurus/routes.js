import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/__docusaurus/debug',
    component: ComponentCreator('/__docusaurus/debug', 'cc8'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/config',
    component: ComponentCreator('/__docusaurus/debug/config', 'eef'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/content',
    component: ComponentCreator('/__docusaurus/debug/content', 'ab3'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/globalData',
    component: ComponentCreator('/__docusaurus/debug/globalData', 'ca2'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/metadata',
    component: ComponentCreator('/__docusaurus/debug/metadata', '96a'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/registry',
    component: ComponentCreator('/__docusaurus/debug/registry', '9e7'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/routes',
    component: ComponentCreator('/__docusaurus/debug/routes', 'f13'),
    exact: true
  },
  {
    path: '/blog',
    component: ComponentCreator('/blog', 'b55'),
    exact: true
  },
  {
    path: '/blog/2022/04/11/npm-packages',
    component: ComponentCreator('/blog/2022/04/11/npm-packages', '5b1'),
    exact: true
  },
  {
    path: '/blog/2022/04/12/High-Availability',
    component: ComponentCreator('/blog/2022/04/12/High-Availability', '696'),
    exact: true
  },
  {
    path: '/blog/archive',
    component: ComponentCreator('/blog/archive', 'c72'),
    exact: true
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs', '84e'),
    routes: [
      {
        path: '/docs/akamai-error-lookup.README',
        component: ComponentCreator('/docs/akamai-error-lookup.README', '329'),
        exact: true
      },
      {
        path: '/docs/akamai-staging.README',
        component: ComponentCreator('/docs/akamai-staging.README', 'd7a'),
        exact: true
      },
      {
        path: '/docs/art',
        component: ComponentCreator('/docs/art', '66f'),
        exact: true
      },
      {
        path: '/docs/cv',
        component: ComponentCreator('/docs/cv', '9f1'),
        exact: true
      },
      {
        path: '/docs/designing-for-availability.md',
        component: ComponentCreator('/docs/designing-for-availability.md', '992'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/docs/doc1',
        component: ComponentCreator('/docs/doc1', 'ecd'),
        exact: true
      },
      {
        path: '/docs/doc2',
        component: ComponentCreator('/docs/doc2', 'da5'),
        exact: true
      },
      {
        path: '/docs/doc3',
        component: ComponentCreator('/docs/doc3', '6d6'),
        exact: true
      },
      {
        path: '/docs/doc4',
        component: ComponentCreator('/docs/doc4', '552'),
        exact: true,
        sidebar: "docs-other"
      },
      {
        path: '/docs/doc5',
        component: ComponentCreator('/docs/doc5', 'e03'),
        exact: true,
        sidebar: "docs-other"
      },
      {
        path: '/docs/filename-here.md',
        component: ComponentCreator('/docs/filename-here.md', '1da'),
        exact: true
      },
      {
        path: '/docs/hosting-assets.md',
        component: ComponentCreator('/docs/hosting-assets.md', '7b2'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/docs/packages',
        component: ComponentCreator('/docs/packages', '6e8'),
        exact: true
      }
    ]
  },
  {
    path: '/',
    component: ComponentCreator('/', 'bc5'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
