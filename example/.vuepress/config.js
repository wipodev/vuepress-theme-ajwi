module.exports = {
  title: 'VuePress Blog Example',
  description: 'This is a blog example built by VuePress',
  theme: require.resolve('../../'),
  themeConfig: {

    /**
     * Ref: https://vuepress-theme-blog.ulivz.com/config/#nav
     */

    nav: [
      {
        text: 'Home',
        link: '/',
      },
      {
        text: 'Posts',
        link: '/posts/all/',
      },
      {
        text: 'About',
        link: '/about/',
      },
    ],

    /**
     * Ref: https://vuepress-theme-blog.ulivz.com
     */
    logo: '/img/logo.svg',
    cover: {
      title: 'Bienvenidos a AJ-Wi',
      subTitle: 'el espacio donde aprendemos juntos',
      content:
        'Un Blog orientado al desarrollo web donde aprenderemos juntos las diversas tecnologías a nuestro alcance.',
      img: '/img/cover-img.png',
    },
    suscribe: {
      item1: {
        img: '/img/spotify.svg',
        route: 'http://spotify.com',
      },
      item2: {
        img: '/img/tiktok.svg',
        route: 'http://tiktok.com',
      },
      item3: {
        img: '/img/youtube.svg',
        route: 'http://youtube.com',
      },
    },

    /**
     * Ref: https://vuepress-theme-blog.ulivz.com/config/#footer
     */
    footer: {
      contact: [
        {
          type: 'codepen',
          link: '/',
        },
        {
          type: 'codesandbox',
          link: '/',
        },
        {
          type: 'facebook',
          link: '/',
        },
        {
          type: 'github',
          link: 'https://github.com/vuepressjs/vuepress-theme-blog',
        },
        {
          type: 'gitlab',
          link: '/',
        },
        {
          type: 'instagram',
          link: '/',
        },
        {
          type: 'linkedin',
          link: '/',
        },
        {
          type: 'mail',
          link: '/',
        },
        {
          type: 'messenger',
          link: '/',
        },
        {
          type: 'music',
          link: '/',
        },
        {
          type: 'phone',
          link: '/',
        },
        {
          type: 'twitter',
          link: 'https://twitter.com/vuepressjs',
        },
        {
          type: 'video',
          link: '/',
        },
        {
          type: 'web',
          link: '/',
        },
        {
          type: 'youtube',
          link: '/',
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
    /**
     * Ref: https://vuepress-theme-blog.ulivz.com/config/#directories
     */

    directories: [
      {
        id: 'post',
        dirname: '_posts',
        path: '/',
        itemPermalink: '/:year/:month/:day/:slug',
        pagination: {
          lengthPerPage: 6,
        },
      },
      //{
      //  id: 'writing',
      //  dirname: '_writing',
      //  path: '/',
      //  itemPermalink: '/:year/:month/:day/:slug',
      //},
    ],

    /**
     * Ref: https://vuepress-theme-blog.ulivz.com/config/#frontmatters
     */

    frontmatters: [
      {
        id: 'tag',
        keys: ['tag', 'tags'],
        path: '/posts/',
      },
      //  {
      //    id: 'location',
      //    keys: ['location'],
      //    path: '/location/',
      //  },
    ],

    /**
     * Ref: https://vuepress-theme-blog.ulivz.com/config/#globalpagination
     */

    // globalPagination: {
    //   lengthPerPage: 10,
    // },

    /**
     * Ref: https://vuepress-theme-blog.ulivz.com/config/#sitemap
     */
    sitemap: {
      hostname: 'https://example.vuepress-theme-blog.ulivz.com/',
    },
    /**
     * Ref: https://vuepress-theme-blog.ulivz.com/config/#comment
     */
    comment: {
      service: 'disqus',
      shortname: 'vuepress-plugin-blog',
    },
    /**
     * Ref: https://vuepress-theme-blog.ulivz.com/config/#newsletter
     */
    newsletter: {
      endpoint:
        'https://billyyyyy3320.us4.list-manage.com/subscribe/post?u=4905113ee00d8210c2004e038&amp;id=bd18d40138',
    },
    /**
     * Ref: https://vuepress-theme-blog.ulivz.com/config/#feed
     */
    feed: {
      canonical_base: 'https://example.vuepress-theme-blog.ulivz.com/',
    },

    /**
     * Ref: https://vuepress-theme-blog.ulivz.com/config/#summary
     */

    // summary:false,

    /**
     * Ref: https://vuepress-theme-blog.ulivz.com/config/#summarylength
     */

    // summaryLength:100,

    /**
     * Ref: https://vuepress-theme-blog.ulivz.com/config/#pwa
     */

    // pwa:true,

    /**
     * Ref: https://vuepress-theme-blog.ulivz.com/config/#paginationcomponent
     */

    // paginationComponent: 'SimplePagination'

    /**
     * Ref: https://vuepress-theme-blog.ulivz.com/config/#smoothscroll
     */
    smoothScroll: true,
  },
}
