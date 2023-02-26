export default {
  title: 'WipoDev',
  titleTemplate: 'WipoDev | :title',
  description: 'Custom theme to get a blog using VuePress.',
  lastUpdated: true,
  base: '/vuepress-theme-ajwi/',
  head: [
    [
      'link',
      { rel: 'icon', href: '/vuepress-theme-ajwi/logo.svg', type: 'image/svg' },
    ],
  ],
  themeConfig: {
    siteTitle: '',
    logo: 'assets/img/logo-main.svg',
    socialLinks: [
      {
        icon: 'github',
        link: 'https://github.com/wipodev/vuepress-theme-ajwi/',
      },
    ],
  },
  locales: {
    root: {
      label: 'English',
      lan: 'en',
      themeConfig: {
        nav: [
          { text: 'Home', link: 'https://wipodev.com' },
          { text: 'VuePress Theme', link: '/' },
          { text: 'Guide', link: '/guide/' },
          { text: 'Config', link: '/config/' },
        ],
        sidebar: {
          '/config/': [
            {
              text: 'Config',
              collapsed: false,
              items: [
                { text: 'Front Matter', link: '/config/front-matter' },
                { text: 'Palette', link: '/config/palette' },
              ],
            },
          ],
        },
        footer: {
          message: 'Released under the MIT License.',
          copyright:
            'Copyright © 2023-present <a href="https://github.com/wipodev">WipoDev</a>',
        },
      },
    },
    es: {
      label: 'Spanish',
      lan: 'es',
      link: '/es/',
      themeConfig: {
        lastUpdatedText: 'Ultima Actualización',
        nav: [
          { text: 'Inicio', link: 'https://wipodev.com/es/' },
          { text: 'Tema VuePress', link: '/es/' },
          { text: 'Guía', link: '/es/guide/' },
          { text: 'Configuración', link: '/es/config/' },
        ],
        sidebar: {
          '/es/config/': [
            {
              text: 'Configuración',
              collapsed: false,
              items: [
                { text: 'Front Matter', link: '/es/config/front-matter' },
                { text: 'Palette', link: '/es/config/palette' },
              ],
            },
          ],
        },
        footer: {
          message: 'Released under the MIT License.',
          copyright:
            'Copyright © 2023-presente <a href="https://github.com/wipodev">WipoDev</a>',
        },
      },
    },
  },
}
