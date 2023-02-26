# Front Matter

## Titulo (title)

- Tipo: `string`
- Predeterminado: `indefinido`
- Requerido: `true`

El título de la página.

por ejemplo:

```markdown
---
title: Hola Mundo
---
```

## Etiquetas (tags)

- Tipo: `string|string[]`
- Predeterminado: `indefinido`
- Requerido: `false`

Las palabras clave de las páginas para clasificarlas y también se mostrará en la publicación:

<img src="/assets/img/tags.png" width="350px"/>
<img src="/assets/img/content-tags.png" width="350px"/>

por ejemplo:

```markdown
---
tags:
  - JavaScript
  - DOM
---
```

## Fecha (date)

- Tipo: `YYYY-MM-DD`
- Predeterminado: `indefinido`
- Requerido: `false`

Nuestro formato recomendado es YYYY-MM-DD.

La fecha de publicación se utilizará para el enlace permanente, la clasificación y se mostrará en el diseño:

<img src="/assets/img/date.png" width="350px"/>
<img src="/assets/img/content-date.png" width="350px"/>

por ejemplo:

```markdown
---
date: 2016-10-20
---
```

## Imagen (image)

- Tipo: `string`
- Predeterminado: `indefinido`
- Requerido: `false`

La imagen que se mostrara en las tarjetas en la lista de artículos.

Es importante señalar que las imágenes deben tener una proporción de aspecto de 3/2 para que se muestren bien en el diseño.

<img src="/assets/img/image.png" width="350px"/>

por ejemplo:

```markdown
---
image: tuimagen.png
---
```

## autor (author)

- Tipo: `string`
- Predeterminado: `indefinido`
- Requerido: `false`

Autor de la publicación. Esto se mostrará en la publicación:

<img src="/assets/img/author.png" width="350px"/>
<img src="/assets/img/content-author.png" width="350px"/>

por ejemplo:

```markdown
---
author: ajwi
---
```

## Ubicación (location)

- Tipo: `string`
- Predeterminado: `indefinido`
- Requerido: `false`

Localidad donde se desarrolla la publicación. Esto se mostrará en la publicación:

<img src="/assets/img/location.png" width="350px"/>
<img src="/assets/img/content-location.png" width="350px"/>

por ejemplo:

```markdown
---
location: lima
---
```

## resumen (summary)

- Type: `string`
- Predeterminado: `indefinido`
- Requerido: `false`

Resumen de la publicación. Esto se mostrará en la publicación:

![Summary](/assets/img/summary.png)

por ejemplo:

```markdown
---
summary: Aquí hay una publicación rápida sobre lo que encontré..
---
```
