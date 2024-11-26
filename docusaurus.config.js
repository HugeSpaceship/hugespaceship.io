// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'HugeSpaceship',
  tagline: 'High performance LittleBigPlanet custom servers',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://docs.hugespaceship.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'HugeSpaceship', // Usually your GitHub org/user name.
  projectName: 'website', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
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
          sidebarPath: './sidebars.js',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/HugeSpaceship/website',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/HugeSpaceship/website',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
        defaultMode: 'dark',
        disableSwitch: false,
        respectPrefersColorScheme: true,
      },
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'HugeSpaceship',
        logo: {
          alt: 'My Site Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'docsSidebar',
            position: 'left',
            label: 'Documentation',
          },
          {to: '/blog', label: 'Blog', position: 'left'},
          {
            href: 'https://github.com/HugeSpaceship',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Documentation',
                to: '/docs/intro',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Coming Soon!',
                href: '#',
              }
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/HugeSpaceship',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} HugeSpaceship contributors. Website built with Docusaurus. HugeSpaceship is not associated with Sony Interactive Entertainment.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
    headTags: [
      {
        tagName: 'script',
        attributes: {
          "defer": "true",
          "data-domain": "docs.hugespaceship.io",
          "src": "https://plausible.valtek.uk/js/script.js"
        }
      },
      {
        tagName: 'link',
        attributes: {
          "rel": "apple-touch-icon",
          "sizes": "180x180",
          "href": "/img/apple-touch-icon.png"
        }
      },
      {
        tagName: 'link',
        attributes: {
          "rel": "icon",
          "type": "image/png",
          "sizes": "32x32",
          "href": "/img/favicon-32x32.png"
        }
      },
      {
        tagName: 'link',
        attributes: {
          "rel": "icon",
          "type": "image/png",
          "sizes": "16x16",
          "href": "/img/favicon-16x16.png"
        }
      },
      {
        tagName: 'link',
        attributes: {
          "rel": "manifest",
          "href": "/site.webmanifest"
        }
      },
      {
        tagName: 'link',
        attributes: {
          "rel": "mask-icon",
          "href": "/img/safari-pinned-tab.svg",
          "color": "#8C68AF"
        }
      },
      {
        tagName: 'meta',
        attributes: {
          "rel": "msapplication-TileColor",
          "content": "#8C68AF",
        }
      },
      {
        tagName: 'meta',
        attributes: {
          "rel": "theme-color",
          "content": "#8C68AF",
        }
      },
    ],
};

export default config;
