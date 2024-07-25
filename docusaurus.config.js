// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import { themes as prismThemes } from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'SupItsTom\'s Site',
  tagline: 'MURDER EVERY 1 U KNOW!',
  favicon: 'img/logo.png',

  // Set the production url of your site here
  url: 'https://supitstom.net',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  onDuplicateRoutes: 'log', // how about log the location of duplicates also nigger

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
    // locales: ["da", "de", "en", "fr", "ja", "nl", "pl", "pt-br", "tr"],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          routeBasePath: '/'
        },
        blog: {
          showReadingTime: true,
          routeBasePath: 'changelogs',
          blogSidebarTitle: 'Changelogs',
          blogSidebarCount: 'ALL',
          feedOptions: {
            type: 'all',
            copyright: `CoPyRiGhT © ${new Date().getFullYear()} Catboys Online!`,
            createFeedItems: async (params) => {
              const { blogPosts, defaultCreateFeedItems, ...rest } = params;
              return defaultCreateFeedItems({
                // keep only the 10 most recent blog posts in the feed
                blogPosts: blogPosts.filter((item, index) => index < 10),
                ...rest,
              });
            },
          },
        },
        theme: {
          customCss: './src/css/normal.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      announcementBar: {
        id: '2024_07-premium-released',
        content:
          'Superiority Premium is now out - read more about whats changed in the <a rel="noopener noreferrer" href="/changelogs/2024/07/24/superiority-update">changelogs</a>.',
        backgroundColor: '#1c1e21',
        textColor: '#fff',
        isCloseable: true,
      },
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        // title: 'SupItsTom',
        hideOnScroll: true,
        style: 'dark',
        logo: {
          alt: 'SupItsTom Logo',
          src: 'img/logo.png',
          srcDark: 'img/logo.png'
        },
        items: [
          // {
          //   type: 'dropdown',
          //   label: 'Projects',
          //   position: 'left',
          //   items: [
          //     {
          //       type: 'docSidebar',
          //       sidebarId: 'teapotSidebar',
          //       label: 'Teapot',
          //     },
          //     {
          //       type: 'docSidebar',
          //       sidebarId: 'superioritySidebar',
          //       label: 'Superiority',
          //     },
          //     {
          //       type: 'docSidebar',
          //       sidebarId: 'serenitySidebar',
          //       label: 'Serenity',
          //     },
          //   ],
          // },
          { to: '/teapot', label: 'Teapot Live', position: 'left' },
          { to: '/superiority', label: 'Superiority', position: 'left' },
          { to: '/serenity', label: 'Serenity', position: 'left' },
          // { to: '/tools', label: 'Tools', position: 'left' },
          // { to: '/charts', label: 'Charts', position: 'left' },
          // { to: '/chroma', label: 'Chroma', position: 'left' },
          { to: '/changelogs', label: 'Changelogs', position: 'right' },
          {
            type: 'dropdown',
            label: 'Contact',
            position: 'right',
            items: [
              {
                label: 'Discord',
                href: 'discord://-/users/820362947146153994',
              },
              {
                label: 'Discord Server',
                href: 'https://discord.com/invite/supitstom-s-server-875513293928796170',
              },
              {
                label: 'Email',
                href: 'mailto:contact@supitstom.net',
              },
            ],
          },
        ],
      },
      footer: {
        style: 'light',
        logo: {
          alt: 'SupItsTom Logo',
          src: 'img/shiggy.gif',
          srcDark: 'img/shiggy.gif'
        },
        links: [
          {
            title: 'Documentation',
            items: [
              {
                label: 'Teapot',
                to: 'teapot',
              },
              {
                label: 'Superiority',
                to: 'superiority',
              },
              {
                label: 'Serenity',
                to: 'serenity',
              },
            ],
          },
          {
            title: 'External',
            items: [
              {
                label: 'Server Status',
                href: 'https://status.supitstom.net',
              },
              {
                label: 'Teapot Live',
                href: 'https://teapotlive.us',
              },
              {
                label: 'Superiority',
                href: 'https://superiority.software',
              },
            ],
          },
          {
            title: 'Resources',
            items: [
              {
                label: 'Changelogs',
                to: 'changelogs',
              },
            ],
          },
          {
            title: 'Legal',
            items: [
              {
                label: 'Terms of Service',
                to: 'terms',
              },
              {
                label: 'Privacy Policy',
                to: 'privacy',
              },
              {
                label: 'DMCA',
                to: 'dmca',
              },
            ],
          },
        ],
        copyright: `Copyright © 1969 SupItsTom`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
      colorMode: {
        defaultMode: 'dark',
        disableSwitch: false,
        respectPrefersColorScheme: true
      },
      algolia: {
        appId: 'YOUR_APP_ID', // Application ID
        apiKey: 'YOUR_SEARCH_API_KEY', // safe for release
        indexName: 'YOUR_INDEX_NAME',
        contextualSearch: false, // 'true' doesnt work here
        searchPagePath: 'search', // generated search page url
        insights: false, // not needed; alpgolia logs errors and shit anyways
      },
    }),
};

export default config;
