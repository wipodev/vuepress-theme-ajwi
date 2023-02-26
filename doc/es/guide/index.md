---
layout: doc
title: Guía
---

# Guía

Esta guía, te enseñara cómo agregar el tema a un nuevo proyecto manualmente.

## Instalación

Crea un directorio vacío y entra en él, una vez dentro ejecutas el siguiente código en la linea de comandos

```bash
$ npm install vuepress-theme-ajwi --save-dev
# or
$ yarn add vuepress-theme-ajwi --dev
```

## Estructura de carpetas

Aquí está la estructura de proyecto recomendada:

```bash
├── blog
│   ├── _posts
│   │   ├── 2018-11-7-que-es-un-navegador-web.md #ejemplo
│   │   ├── 2019-2-26-crear-un-tema-para-vuepress.md #ejemplo
│   │   └── 2019-5-6-curso-javascript-desde-cero.md #ejemplo
│   └── .vuepress
│       ├── `components` _(**Opcional**)_
│       ├── `public` _(**Opcional**)_
│       ├── `styles` _(**Opcional**)_
│       │   ├── index.styl
│       │   └── palette.styl
│       ├── config.js
│       └── `enhanceApp.js` _(**Opcional**)_
└── package.json
```

**Requerido**:

- `blog/.vuepress/config.js`: Archivo de configuración del blog, también puede ser yml o toml.
- `blog/_posts`: Almacena el contenido de sus publicaciones.

**Opcional**:

Si desea configurar los archivos a continuación, necesitará algunos conocimientos de [VuePress](https://vuepress.vuejs.org/).

- `blog/.vuepress/components`: Los componentes de Vue en este directorio se registrarán automáticamente como componentes globales.
- `blog/.vuepress/styles`: Almacena archivos relacionados con el estilo.
- `blog/.vuepress/styles/index.styl`: Los archivos de estilo global aplicados automáticamente, generados al final del archivo CSS, tienen una prioridad más alta que el estilo predeterminado.
- `blog/.vuepress/styles/palette.styl`: La paleta se utiliza para anular las constantes de color predeterminadas y para establecer las constantes de color de Stylus.
- `blog/.vuepress/public`: Directorio de recursos estáticos.
- `blog/.vuepress/enhanceApp.js`: Mejora del nivel de la aplicación.

## Usando vuepress-theme-ajwi

Debes agregar `vuepress-theme-ajwi` como tema en `.vuepress/config.js`. `vuepress-theme-ajwi` es configurable, pero usaremos los valores predeterminados por ahora.

```js
// .vuepress/config.js
module.exports = {
  title: 'VuePress Blog Example', // Título del sitio. Esto se mostrará en la barra de navegación.
  theme: 'ajwi',
  themeConfig: {
    // Siga mirando hacia abajo para ver las opciones disponibles.
  },
}
```

Agregue los scripts al archivo package.json:

```json
// package.json
{
  ...
  "scripts": {
    ...
    "dev": "vuepress dev blog", // inicia un servidor de desarrollo con recarga automática.
    "build": "vuepress build blog" // construye su sitio web.
  }
  ...
}
```

¡A partir de ahora, puedes ejecutar `npm run dev` o `yarn dev` y dirigirte en tu navegador a `localhost:8080` a ver tu blog!

## Generando contenido

La carpeta \_posts es donde se encuentran las publicaciones de tu blog. Simplemente puede escribir publicaciones de blog en Markdown.

Todos los archivos de publicaciones de blog deben contener un encabezado con información descriptiva de la publicación en forma de variables, este encabezado lo llamaremos de aquí en adelante `frontmatter`. Solo `title` es obligatorio, pero le recomendamos que defina todas las variables de frontmatter como se muestra a continuación. Se utilizarán para establecer el diseño correspondiente. Consulte [frontmatter](/es/config/front-matter) para obtener más detalles. He aquí un ejemplo:

```yaml
---
title: Hola Mundo
date: 2020-01-11
image: /img/posts/post-1.jpg
author: ajwi
location: Lima
---
Mi contenido.
```

Puede nombrar sus archivos de publicaciones como desee, pero le recomendamos que incluya la fecha al principio. Le ayuda a organizarse y se utilizará como enlace permanente de forma predeterminada. Por ejemplo:

```
2018-11-7-que-es-un-navegador-web.md
2019-2-26-crear-un-tema-para-vuepress.md
2019-5-6-curso-javascript-desde-cero.md
```

## Etiquetas de blog

De forma predeterminada, navegue a `/posts/`, verá la página de entrada de etiquetas. Puede configurar sus propias etiquetas en la sección frontmatter de su archivo, y se clasificarán automáticamente:

```yaml{5-7}
---
title: Hola Mundo
date: 2020-01-11
image: /img/posts/post-1.jpg
tags:
  - JavaScript
  - Vue
author: ajwi
location: Lima
---
```

## Resumen

De forma predeterminada, el resumen se extraerá de las publicaciones de blog. Si necesita anularlo, presentamos los siguientes dos enfoques:

1. [Escribir el resumen manualmente en frontmatter](/es/config/front-matter#resumen-summary)

2. [Configurar el separador de extractos escribiendo un comentario `<!-- more -->` justo debajo de lo que desea extraer como resumen](https://vuepress.vuejs.org/theme/writing-a-theme.html#content-excerpt)

## Final

Ahora, revisa tu blog en `localhost:8080`, si todo está bien, es posible que te interesen los siguientes temas:

- Configure este tema: lo discutiremos en [la siguiente sección](/es/config/)
- Implemente su blog: lea la sección de implementación en [la documentación de VuePress](https://vuepress.vuejs.org/guide/deploy.html)
- Explora más profundo:
  - Documentación de [VuePress](https://vuepress.vuejs.org/)
  - Documentación de [complemento de blog oficial](https://vuepress-plugin-blog.ulivz.com/)
