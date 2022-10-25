// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Tech Blog',
  tagline: 'Exploring how to design cloud native hosting solutions for hyperscale and performance',
  url: 'https://marksmurphy.github.io/',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: '/img/favicon.ico',

  // GitHub pages deployment config. https://docusaurus.io/docs/deployment#deploying-to-github-pages
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'markSmurphy', // Usually your GitHub org/user name.
  projectName: 'marksmurphy.github.io', // Usually your repo name.
  deploymentBranch: 'master', // The name of deployment branch. Defaults to 'gh-pages' for non-organization GitHub Pages repos (projectName not ending in .github.io). Otherwise, this needs to be explicit as a config field or environment variable.
  trailingSlash: false,

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          /* editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/', */
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          /* editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/', */
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Home',
        logo: {
          alt: 'Logo',
          src: 'img/logos/transparent-grey-plain.png',
        },
        items: [
          /* {
            type: 'doc',
            docId: 'introduction',
            position: 'left',
            label: 'Introduction',
          }, */
          {to: '/blog', label: 'Blog', position: 'left'},
          {to: '/docs/category/npm-packages', label: 'NPM Packages', position: 'left'},
          {
            href: 'https://github.com/markSmurphy',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
