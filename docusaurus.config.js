const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');
const math = require('remark-math');
const katex = require('rehype-katex');
// With JSDoc @type annotations, IDEs can provide config autocompletion
/** @type {import('@docusaurus/types').DocusaurusConfig} */
(module.exports = {
  title: 'AERO 490 Avionics',
  tagline: 'INS is Cool!',
  url: 'https://avionics.jbwaring.com/',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'jbwaring', // Usually your GitHub org/user name.
  projectName: 'avionics-website-capstone', // Usually your repo name.

  presets: [
    [
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/jbwaring/avionics-website-capstone/tree/main/',
          remarkPlugins: [math],
          rehypePlugins: [katex],
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/jbwaring/avionics-website-capstone/tree/main/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],
  stylesheets: [
    {
      href: 'https://cdn.jsdelivr.net/npm/katex@0.13.11/dist/katex.min.css',
      type: 'text/css',
      crossorigin: 'anonymous',
    },
  ],
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'AERO 490 Avionics',
        logo: {
          alt: 'My Site Logo',
          src: 'img/logo.svg',
        },
        
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Docs',
          },
          {to: '/blog', label: 'Blog', position: 'left'},
          {
            href: 'https://github.com/jbwaring/avionics-website-capstone',
            label: 'GitHub',
            position: 'right',
          },
          {
            href: 'https://www.concordia.ca/',
            label: 'Concordia University',
            position: 'right',
          },
        ],
      },
      announcementBar: {
        id: 'support_us',
        content:
          'We are looking for feedback to improve your experience. <a target="_blank" rel="noopener noreferrer" href="mailto:j_warin@live.concordia.ca?subject=Feedback%20on%20Avionics%20Website">Tell us what you think!</a>',
        backgroundColor: '#fafbfc',
        textColor: '#091E42',
        isCloseable: true,
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Tutorial',
                to: '/docs/intro',
              },
            ],
          },
          {
            title: 'Useful Links',
            items: [
              {
                label: 'Concordia University',
                href: 'https://www.concordia.ca/',
              },
              {
                label: 'AERO 490 Org Chart',
                href: 'https://nervous-lalande-452238.netlify.app',
              },
              {
                label: 'Repository of this website (GitHub)',
                href: 'https://github.com/jbwaring/avionics-website-capstone',
              },
            ],
          },
          // {
          //   title: 'More',
          //   items: [
          //     {
          //       label: 'Blog',
          //       to: '/blog',
          //     },
          //     {
          //       label: 'GitHub',
          //       href: 'https://github.com/facebook/docusaurus',
          //     },
          //   ],
          // },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Jean-Baptiste Waring.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
});
