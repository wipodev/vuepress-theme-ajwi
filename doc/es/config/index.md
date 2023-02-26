---
layout: doc
title: Configuracion
---

# Opciones

## Logo

- Tipo: `string`
- Predeterminado: `indefinido`

El logo se mostrara en la parte izquierda del header de la pagina, puede agregar una imagen a mostrar en `.vuepress/config.js`

por ejemplo:

```js
module.exports = {
  themeConfig: {
    logo: '/img/tuimagen.svg',
  },
}
```

## Navegación (nav)

- Tipo: `Array<{ text: string, link: string }>`
- Predeterminado: `Vea abajo`

Enlaces que desea que se muestren en la barra de navegación.

Aquí está el valor predeterminado:

```js
module.exports = {
  themeConfig: {
    nav: [
      {
        text: 'Home',
        link: '/',
      },
      {
        text: 'Posts',
        link: '/posts/',
      },
    ],
  },
}
```

## Banner principal (Cover)

- Tipo: `object`
- Predeterminado: `Vea abajo`

Esta sección se encuentra en la página de inicio justo de bajo del header.

```JavaScript
  {
    title: 'Bienvenidos a mi Blog',
    subTitle: 'el Blog que estabas buscando',
    content: 'Un Blog donde encontraras las diversas tecnologías a nuestro alcance.',
    img: '/img/cover-img.png'
  }
```

Puedes modificar los textos e imagen que aparecen hay en el archivo `.vuepress/config.js`.

por ejemplo:

```JavaScript
module.exports = {
  themeConfig: {
    cover: {
      title: 'Tu Titulo',
      subTitle: 'Tu subtitulo',
      content: 'Tu descripción',
      img: 'tuimagen.png'
    }
  }
}
```

## Suscribete (suscribe)

- Tipo: `object`
- Predeterminado: `Vea abajo`

Esta sección se encuentra antes del pie de página.

```JavaScript
  {
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
  }
```

Puedes modificar los enlaces en el archivo `.vuepress/config.js`.

```JavaScript
module.exports = {
  themeConfig: {
    suscribe: {
      item1: {
        img: 'tuimagen.svg',
        route: 'http://tudominio.com',
      },
      item2: {
        img: 'tuimagen.svg',
        route: 'http://tudominio.com',
      },
      item3: {
        img: 'tuimagen.svg',
        route: 'http://tudominio.com',
      },
    }
  }
}
```

## pie de página (footer)

### footer.contact

- Tipo: `Array<{ type: ContactType, link: string }>`
- Predeterminado: `indefinido`

Información de contacto, que se muestra en el pie de página.

por ejemplo:

```js
module.exports = {
  themeConfig: {
    footer: {
      contact: [
        {
          type: 'github',
          link: 'https://github.com/ajwi',
        },
        {
          type: 'twitter',
          link: 'https://github.com/ajwi',
        },
      ],
    },
  },
}
```

Por ahora `ContactType` admite los siguientes tipos:

- codepen
- codesandbox
- facebook
- github
- gitlab
- instagram
- linkedin
- mail
- messenger
- music
- phone
- twitter
- video
- web
- youtube

### footer.copyright

- Tipo: `Array<{ text: string, link?: string }>`
- Predeterminado: `indefinido`

Información de derechos de autor, que se muestra en el pie de página.

por ejemplo:

```js
module.exports = {
  themeConfig: {
    footer: {
      copyright: [
        {
          text: 'Privacy Policy',
          link: 'https://policies.google.com/privacy?hl=en-US',
        },
        {
          text: 'MIT Licensed | Copyright © 2018-presente AJ-Wi',
        },
      ],
    },
  },
}
```

## directorios (directories)

- Tipo: `DirectoryClassifier[]`
- Predeterminado: `Vea abajo`

```JavaScript
[
  {
    id: 'post',
    dirname: '_posts',
    path: '/',
    itemPermalink: '/:year/:month/:day/:slug',
    pagination: {
      lengthPerPage: 6,
    },
  },
]
```

De forma predeterminada, las páginas se colocan en `_post` y la ruta de la lista de publicaciones es `/`. Aquí hay un ejemplo si desea personalizarlo:

```JavaScript
[
  {
    id: 'writing', // Identificación única para el clasificador actual
    dirname: '_writings', // Nombre de directorio coincidente
    path: '/writings/', // Página de entrada para clasificador actual
    title: 'ensayo', // Títulos de las páginas de entrada y paginación del clasificador actual.
    layout: 'IndexWriting', // Nombre del componente de diseño para la página de entrada.
    frontmatter:{ //Frontmatter para la pagina.
      tag: 'vuepress'
    },
    itemLayout: 'Writing', // Diseño de páginas coincidentes.
    itemPermalink: '/writings/:year/:month/:day/:slug', // Enlace permanente para páginas coincidentes.
    pagination: { // Comportamiento de paginación
      lengthPerPage: 2,
    },
  }
]
```

Referencia:

- [clasificadores de documentos](https://vuepress-plugin-blog.ulivz.com/guide/getting-started.html#document-classifier)

## frontmatters

- Tipo: `FrontmatterClassifier[]`
- Predeterminado: `Vea abajo`

```JavaScript
[
  {
    id: 'tag',
    keys: ['tags', 'tag'],
    path: '/posts/',
  },
]
```

Solo se clasificará por `tag` y `tags` en el frontmatter, y la ruta para ello es `'/tag/'` por defecto. Veamos cómo personalizarlo:

```JavaScript
[
  {
    id: 'location', // Identificación única para el clasificador actual
    keys: ['location'], // Claves de Frontmatter utilizadas para clasificar páginas
    path: '/location/', // Página de entrada para clasificador actual
    title: 'localización', // Títulos de las páginas de entrada, alcance y paginación del clasificador actual.
    layout: 'IndexLocation', // Nombre del componente de diseño para la página de entrada.
    scopeLayout: 'ScopeLocation', // Nombre del componente de diseño para la página de alcance.
    frontmatter: { //Frontmatter para la pagina.
      description: 'Hola'
    },
    pagination: { // Comportamiento de paginación
      lengthPerPage: 2,
    },
  },
]
```

Referencia:

- [Clasificador de Frontmatter](https://vuepress-plugin-blog.ulivz.com/guide/getting-started.html#frontmatter-classifier)

## Paginacion Global (globalPagination)

- Tipo: `object`
- Predeterminado: `{ lengthPerPage: 9 }`

Configuración de paginación para todos los directorios y frontmatters. Por ejemplo:

```JavaScript
{
  prevText:'Atrás', // Texto de enlaces para ir al anterior.
  nextText:'Siguiente', // Texto de enlaces para ir al siguiente.
  lengthPerPage:'2', // Número máximo de publicaciones por página.
  layout:'Pagination', // Diseño de la página de paginación
}
```

Para obtener más información, visite [Configuración de Paginacion](https://vuepress-plugin-blog.ulivz.com/pagination/#sorter).

## Mapa del Sitio (sitemap)

- Tipo: `object`
- Predeterminado: `indefinido`

Simplemente puede habilitarlo completando la propiedad `hostname` con su nombre de host:

```JavaScript
{
  hostname: 'https://tudominio'
}
```

Por favor, diríjase a [vuepress-plugin-sitemap](https://github.com/ekoeryanto/vuepress-plugin-sitemap#options) para más detalles.

## Comentarios (comment)

- Tipo: `object`
- Predeterminado: `indefinido`

Vssue y Disqus son servicios de comentarios integrados. Estas son las propiedades necesarias para habilitar:

```JavaScript
// Disqus
{
  service: "disqus",
  shortname: "El nombre corto de tu blog",
}

// Vssue
{
  service: 'vssue',
  owner: 'Tu',
  repo: 'Tu repositorio',
  clientId: 'Tu ID de cliente',
  clientSecret: 'Tu clientSecret',
}
```

Para configurar el nombre corto de disqus, visite [aquí](https://help.disqus.com/en/articles/1717111-what-s-a-shortname)

Más configuración, visite:

- [vuepress-plugin-disqus-comment](https://vuepress-plugin-disqus.netlify.com/#usage)
- [vuepress-plugin-vssue](https://vssue.js.org/guide/vuepress.html#usage)

## Boletín informativo (newsletter)

- Tipo: `object`
- Predeterminado: `indefinido`

Mailchimp es nuestro servicio de boletín de noticias predeterminado. La única propiedad requerida para habilitar el boletín es `endpoint`:

```JavaScript
{
  endpoint: 'https://TuendPoint'
}
```

Por favor, diríjase a [vuepress-plugin-mailchimp](https://vuepress-plugin-mailchimp.billyyyyy3320.com/#config) para ver cómo obtener su `endpoint`.

## feed

- Tipo: `object`
- Predeterminado: `indefinido`

Se admiten feeds RSS, Atom e incluso JSON. La única propiedad necesaria para habilitar el feed es `canonical_base`:

```JavaScript
{
  canonical_base:'http://tusitio',
},
```

RSS es el tipo de feed predeterminado.

Todas las opciones en [vuepress-plugin-feed](https://github.com/webmasterish/vuepress-plugin-feed#options) están disponibles.
Además, presentamos un enfoque más sencillo para habilitar / deshabilitar los tipos de feeds, por ejemplo:

```JavaScript
{
  canonical_base:'http://tusitio',
  rss:false
  atom:true,
  json:false
}
```

::: tip
Si planea implementar su sitio bajo una ruta secundaria y ha configurado la [base URL](https://vuepress.vuejs.org/config/#base), no tendrá que volver a pasarlo a `canonical_base`.
:::

## resumen (summary)

- Tipo: `boolean`
- Predeterminado: `true`

Ya sea para extraer automáticamente el resumen de los archivos markdowns. Puede escribir un resumen de forma manual en la sección de [frontmatter](./front-matter.md#resumen) de la publicación . El resumen no es solo para mostrar, sino también para la descripción de la página.

## Longitud del resumen (summaryLength)

- Tipo: `number`
- Predeterminado: `200`

Establece la duración del resumen.

## pwa

- Tipo: `boolean`
- Predeterminado: `false`

Ya sea para habilitar la compatibilidad con PWA. esta opción está impulsada por el [oficial
PWA plugin](https://v1.vuepress.vuejs.org/plugin/official/plugin-pwa.html).

si habilita esta opción, las opciones predeterminadas del complemento PWA interno son las siguientes:

```js
{
  serviceWorker: true,
  updatePopup: true
}
```

## Componente de paginación (paginationComponent)

- Tipo: `string`
- Predeterminado: `'Pagination'`

Personalice el componente de paginación.

El predeterminado es el
[componente de paginación](https://vuepress-plugin-blog.ulivz.com/components/#pagination)

<img src="/assets/img/pagination.png" width="250" height="" style=""/>

Puede configurar esta opción para seleccionar la `SimplePagination`.

<img src="/assets/img/simple-pagination.png" width="250" height="" style=""/>

También puede escribir un componente de paginación personalizado y registrarlo como un componente global. luego pase su nombre a esta opción.

## desplazamiento suave (smoothScroll)

- Tipo: `boolean`
- Predeterminado: `false`

La opción `themeConfig.smoothScroll` le permite habilitar el desplazamiento suave.

```JavaScript
// .vuepress/config.js
module.exports = {
  themeConfig: {
    smoothScroll: true
  }
}
```
