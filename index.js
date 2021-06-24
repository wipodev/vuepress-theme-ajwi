const removeMd = require('remove-markdown')
const path = require('path')
const pick = require('lodash/pick')

module.exports = (themeConfig) => {
  /**
   * Default theme configuration
   */
  themeConfig = Object.assign(themeConfig, {
    nav: themeConfig.nav || [
      {
        text: 'Home',
        link: '/',
      },
      {
        text: 'Posts',
        link: '/posts/',
      },
    ],
    cover: themeConfig.cover || {
      title: 'Bienvenidos a mi Blog',
      subTitle: 'el Blog que estabas buscando',
      content:
        'Un Blog donde encontraras las diversas tecnologías a nuestro alcance.',
      img: 'https://github.com/AJ-Wi/AJ-theme-blog_vuepress/blob/master/example/.vuepress/public/img/cover-img.png',
    },
    suscribe: themeConfig.suscribe || {
      item1: {
        img: 'https://github.com/AJ-Wi/AJ-theme-blog_vuepress/blob/master/example/.vuepress/public/img/spotify.svg',
        title: 'Spotify',
        route: 'https://open.spotify.com/show/6Xok8xe3eVWCzqGOiUlE2c',
      },
      item2: {
        img: 'https://github.com/AJ-Wi/AJ-theme-blog_vuepress/blob/master/example/.vuepress/public/img/tiktok.svg',
        title: 'Tiktok',
        route: 'https://www.tiktok.com/@ajwipo?lang=es',
      },
      item3: {
        img: 'https://github.com/AJ-Wi/AJ-theme-blog_vuepress/blob/master/example/.vuepress/public/img/youtube.svg',
        title: 'Youtube',
        route: 'https://youtube.com/channel/UCMzpttcB6zhVQzYuzhggnQA',
      },
    },
    footer: themeConfig.footer || {
      contact: [
        {
          type: 'github',
          link: 'https://github.com/ajwi',
        },
        {
          type: 'mail',
          link: 'ajwipo@gmail.com',
        },
        {
          type: 'youtube',
          link: 'https://www.youtube.com/channel/UCMzpttcB6zhVQzYuzhggnQA',
        },
      ],
      copyright: [
        {
          text: 'Privacy Policy',
          link: 'https://policies.google.com/privacy?hl=en-US',
        },
        {
          text: 'MIT Licensed | Copyright © 2018-present AJ-Wi',
        },
      ],
    },
    summary: themeConfig.summary === undefined ? true : themeConfig.summary,
    summaryLength:
      typeof themeConfig.summaryLength === 'number'
        ? themeConfig.summaryLength
        : 200,
    pwa: !!themeConfig.pwa,
  })

  /**
   * Configure blog plugin
   */
  const defaultBlogPluginOptions = {
    directories: [
      {
        id: 'post',
        dirname: '_posts',
        path: '/',
        pagination: {
          lengthPerPage: 6,
        },
      },
    ],
    frontmatters: [
      {
        id: 'tag',
        keys: ['tags'],
        path: '/posts/',
      },
    ],
    globalPagination: {
      lengthPerPage: 9,
    },
  }

  let resolvedFeedOptions
  const isFeedEnabled = themeConfig.feed && themeConfig.feed.canonical_base
  if (isFeedEnabled) {
    const {
      rss = true,
      atom = false,
      json = false,
      ...feedOptions
    } = themeConfig.feed
    resolvedFeedOptions = Object.assign({}, feedOptions, {
      feeds: {
        rss2: { enable: rss },
        atom1: { enable: atom },
        json1: { enable: json },
      },
    })
  }

  const properties = [
    'directories',
    'frontmatters',
    'globalPagination',
    'sitemap',
    'comment',
    'newsletter',
  ]
  const themeConfigPluginOptions = {
    ...pick(themeConfig, properties),
    feed: resolvedFeedOptions,
  }

  const blogPluginOptions = Object.assign(
    {},
    defaultBlogPluginOptions,
    themeConfigPluginOptions
  )

  /**
   * Integrate plugins
   */

  const enableSmoothScroll = themeConfig.smoothScroll === true

  const plugins = [
    '@vuepress/plugin-nprogress',
    [
      '@vuepress/search',
      {
        searchMaxSuggestions: 10,
      },
    ],
    ['@vuepress/blog', blogPluginOptions],
    [
      'container',
      {
        type: 'tip',
        defaultTitle: {
          '/': 'TIP',
          '/zh/': '提示',
        },
      },
    ],
    [
      'container',
      {
        type: 'warning',
        defaultTitle: {
          '/': 'WARNING',
          '/zh/': '注意',
        },
      },
    ],
    [
      'container',
      {
        type: 'danger',
        defaultTitle: {
          '/': 'WARNING',
          '/zh/': '警告',
        },
      },
    ],
    [
      'container',
      {
        type: 'details',
        before: (info) =>
          `<details class="custom-block details">${
            info ? `<summary>${info}</summary>` : ''
          }\n`,
        after: () => '</details>\n',
      },
    ],
    ['smooth-scroll', enableSmoothScroll],
  ]

  /**
   * Enable pwa
   */
  if (themeConfig.pwa) {
    plugins.push([
      '@vuepress/pwa',
      {
        serviceWorker: true,
        updatePopup: true,
      },
    ])
  }

  const config = {
    plugins,
    define: {
      THEME_BLOG_PAGINATION_COMPONENT: themeConfig.paginationComponent
        ? themeConfig.paginationComponent
        : 'Pagination',
    },
    alias: {
      fonts: path.resolve(__dirname, 'fonts'),
    },
    /**
     * Generate summary.
     */
    extendPageData(pageCtx) {
      const strippedContent = pageCtx._strippedContent
      if (!strippedContent) {
        return
      }
      if (themeConfig.summary) {
        pageCtx.summary =
          removeMd(
            strippedContent
              .trim()
              .replace(/^#+\s+(.*)/, '')
              .slice(0, themeConfig.summaryLength)
          ) + ' ...'
        pageCtx.frontmatter.description = pageCtx.summary
      }
      if (pageCtx.frontmatter.summary) {
        pageCtx.frontmatter.description = pageCtx.frontmatter.summary
      }
    },
  }

  return config
}
