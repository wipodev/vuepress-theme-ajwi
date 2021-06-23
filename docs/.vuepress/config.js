module.exports = {
  base: '/AJ-theme-blog_vuepress/',
  title: 'Vuepress-theme-ajwi',
  description: 'Tema de blog personalizado para vuepress',
  themeConfig: {
    logo: '/img/logo.svg',
    repo: 'aj-wi/aj-theme-blog_vuepress',
    docsDir: 'docs',
    editLinks: true,
    editLinkText: 'Edite esta pagina en GitHub',
    nav: [
      { text: 'Guía', link: '/' },
      { text: 'Configuración', link: '/config/' },
    ],
    sidebarDepth: 3,
    sidebar: {
      '/config/': ['', 'front-matter', 'palette'],
    },
    smoothScroll: true,
  },
}
