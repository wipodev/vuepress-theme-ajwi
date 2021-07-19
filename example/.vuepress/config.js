module.exports = {
  //title: 'Blog Example',
  //description: 'This is a blog example built by VuePress',
  port: 8081,
  theme: require.resolve('../../'),
  themeConfig: {
    /**
     * Ref: https://ajwi.github.io/aj-theme-blog_vuepress/config/#navegacion-nav
     */
    //nav: [
    //  {
    //    text: 'Home',
    //    link: '/',
    //  },
    //  {
    //    text: 'Posts',
    //    link: '/posts/all/',
    //  },
    //  {
    //    text: 'About',
    //    link: '/about/',
    //  },
    //],
    /**
     * Ref: https://ajwi.github.io/aj-theme-blog_vuepress/config/#logo
     */
    //logo: '/img/logo.svg',
    /**
     * Ref: https://ajwi.github.io/aj-theme-blog_vuepress/config/#banner-principal-cover
     */
    //cover: {
    //  title: 'Bienvenidos a AJ-Wi',
    //  subTitle: 'el espacio donde aprendemos juntos',
    //  content:
    //    'Un Blog orientado al desarrollo web donde aprenderemos juntos las diversas tecnologías a nuestro alcance.',
    //  img: '/img/cover-img.png',
    //},
    /**
     * Ref: https://ajwi.github.io/aj-theme-blog_vuepress/config/#suscribete-suscribe
     */
    //suscribe: {
    //  item1: {
    //    img: '/img/spotify.svg',
    //    route: 'http://spotify.com',
    //  },
    //  item2: {
    //    img: '/img/tiktok.svg',
    //    route: 'http://tiktok.com',
    //  },
    //  item3: {
    //    img: '/img/youtube.svg',
    //    route: 'http://youtube.com',
    //  },
    //},
    /**
     * Ref: https://ajwi.github.io/aj-theme-blog_vuepress/config/#pie-de-pagina-footer
     */
    //footer: {
    //  contact: [
    //    {
    //      type: 'codepen',
    //      link: '/',
    //    },
    //    {
    //      type: 'codesandbox',
    //      link: '/',
    //    },
    //    {
    //      type: 'facebook',
    //      link: '/',
    //    },
    //    {
    //      type: 'github',
    //      link: 'https://github.com/ajwi',
    //    },
    //    {
    //      type: 'gitlab',
    //      link: '/',
    //    },
    //    {
    //      type: 'instagram',
    //      link: '/',
    //    },
    //    {
    //      type: 'linkedin',
    //      link: '/',
    //    },
    //    {
    //      type: 'mail',
    //      link: 'ajwipo@gmail.com',
    //    },
    //    {
    //      type: 'messenger',
    //      link: '/',
    //    },
    //    {
    //      type: 'music',
    //      link: '/',
    //    },
    //    {
    //      type: 'phone',
    //      link: '/',
    //    },
    //    {
    //      type: 'twitter',
    //      link: '/',
    //    },
    //    {
    //      type: 'video',
    //      link: '/',
    //    },
    //    {
    //      type: 'web',
    //      link: '/',
    //    },
    //    {
    //      type: 'youtube',
    //      link: 'https://www.youtube.com/channel/UCMzpttcB6zhVQzYuzhggnQA',
    //    },
    //  ],
    //  copyright: [
    //    {
    //      text: 'Privacy Policy',
    //      link: 'https://policies.google.com/privacy?hl=en-US',
    //    },
    //    {
    //      text: 'MIT Licensed | Copyright © 2018-present AJ-Wi',
    //    },
    //  ],
    //},
    /**
     * Ref: https://ajwi.github.io/aj-theme-blog_vuepress/config/#directorios-directories
     */
    //directories: [
    //  {
    //    id: 'post',
    //    dirname: '_posts',
    //    path: '/',
    //    itemPermalink: '/:year/:month/:day/:slug',
    //    pagination: {
    //      lengthPerPage: 6,
    //    },
    //  },
    //{
    //  id: 'writing',
    //  dirname: '_writing',
    //  path: '/',
    //  itemPermalink: '/:year/:month/:day/:slug',
    //},
    //],
    /**
     * Ref: https://ajwi.github.io/aj-theme-blog_vuepress/config/#frontmatters
     */
    //frontmatters: [
    //  {
    //    id: 'tag',
    //    keys: ['tag', 'tags'],
    //    path: '/posts/',
    //  },
    //  {
    //    id: 'location',
    //    keys: ['location'],
    //    path: '/location/',
    //  },
    //],
    /**
     * Ref: https://ajwi.github.io/aj-theme-blog_vuepress/config/#paginacion-global-globalpagination
     */
    // globalPagination: {
    //   lengthPerPage: 9,
    // },
    /**
     * Ref: https://ajwi.github.io/aj-theme-blog_vuepress/config/#mapa-del-sitio-sitemap
     */
    //sitemap: {
    //  hostname: 'https://tudominio.com/',
    //},
    /**
     * Ref: https://ajwi.github.io/aj-theme-blog_vuepress/config/#comentarios-comment
     */
    //comment: {
    //  service: 'disqus',
    //  shortname: 'vuepress-theme-ajwi',
    //},
    /**
     * Ref: https://ajwi.github.io/aj-theme-blog_vuepress/config/#boletin-informatico-newsletter
     */
    //newsletter: {
    //  endpoint:
    //    'https://tuendpoint.com/subscribe/post?u=4905113ee00d8210c2004e038&amp;id=bd18d40138',
    //},
    /**
     * Ref: https://ajwi.github.io/aj-theme-blog_vuepress/config/#feed
     */
    feed: {
      canonical_base: 'https://tudominio.com/',
    },
    /**
     * Ref: https://ajwi.github.io/aj-theme-blog_vuepress/config/#resumen-summary
     */
    // summary:false,
    /**
     * Ref: https://ajwi.github.io/aj-theme-blog_vuepress/config/#longitud-del-resumen-summarylength
     */
    // summaryLength:100,
    /**
     * Ref: https://ajwi.github.io/aj-theme-blog_vuepress/config/#pwa
     */
    // pwa:true,
    /**
     * Ref: https://ajwi.github.io/aj-theme-blog_vuepress/config/#componente-de-paginacion-paginationcomponent
     */
    // paginationComponent: 'SimplePagination'
    /**
     * Ref: https://ajwi.github.io/aj-theme-blog_vuepress/config/#desplazamiento-suave-smoothscroll
     */
    //smoothScroll: true,
  },
}
