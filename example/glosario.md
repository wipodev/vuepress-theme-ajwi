---
title: Glosario
date: 2021-6-4
image: /img/posts/glosario.png
tags:
  - all
  - glosario
author: wladimir pérez
location: Lima/Perú
---

![images](/img/posts/glosario.png)

## Términos del desarrollo web

::: warning
La información de los términos aquí mostrados son mi forma de explicarlos a cualquier persona, en ningún caso deben tomarse de manera literal.
:::

### Navegador Web

El navegador o Explorador Web es un programa que sirve para acceder a través de internet a los sitios web o aplicaciones web que queremos ver.

Imagina, si tu quieres abrir un archivo de work no lo puedes abrir con excel, asi mismo pasa con los sitios o aplicaciones web solo puedes abrirlos con navegadores web tales como Mozilla Firefox, Microsoft Edge o Google Chrome.

### Editor de texto plano

Cualquier programa que nos permita editar un archivo de texto, sin embargo programas como Microsoft Work no nos sirve para esto por que los archivos que crea son archivos binarios, lo que necesitamos es un editor al estilo de **Bloc de Notas de microsoft** o **FeatherPad de Linux**.

### Editor de código

Cualquier editor de texto plano que nos proporcione ayuda para programar, uno de los mas usado en la actualidad es [Visual Studio Code](https://code.visualstudio.com/)

### HTML

Son las iniciales de **HyperText Markup Language** en español lenguaje de marcado de hipertexto, en esencia son el tipo de archivos que reconocen los Navegadores Web, en los cuales esta escrito la estructura de nuestro sitio o aplicación web.

### Etiquetas HTML

Son los elementos html, la base de un archivo html, por lo general están formadas por una etiqueta de apertura y una de cierre, sin embargo podemos encontrarnos con etiquetas que no tienen una de cierre implícitamente ejemplos:

```html
<div>       <!-- Etiqueta de apertura -->
</html>     <!-- Etiqueta de cierre -->
<input />   <!-- Etiqueta con cierre incluido -->
```

Las etiquetas también tienen atributos, los cuales nos sirven para especificar alguna acción o propiedad de dicha etiqueta, ejemplo:

```html
<input type="text" />
<!-- atributo de propiedad, especifica que la etiqueta es de tipo texto -->

<a href="https://tudominio.com/articulo.html"></a>
<!-- atributo de acción, especifica la ruta del enlace -->
```

### CSS

Son las iniciales de **Cascading Style Sheets** en español Hojas de estilo en cascada, es el lenguaje que usamos para diseñar o dar forma a un documento HTML con el se describe cómo se deben mostrar los elementos HTML.

### Formas de diseñar con CSS

Existen tres formas básicas de dar forma o diseñar nuestra estructura html.

- Mediante atributos directamente en las etiquetas. (**NO recomendable en la actualidad**)
- Insertar el código directamente en el archivo html.
- En archivo externo con extensión .css y enlazado en el html.

Para ejemplificarlo te muestro las tres formas:

CSS como atributo de un elemento html

```html
<div style="width: 30px; height: 30px; background-color: red;"></div>
```

CSS insertado en el html usando la etiqueta Style

```html
<!DOCTYPE html>
<html lang="es">
  <head>
    <style>
      /* Aquí incorporamos el código css directamente */
      .contenedor {
        width: 30px;
        height: 30px;
        background-color: red;
      }
    </style>
  </head>
  <body>
    <!-- Contenido del sitio o aplicación web -->
    <div class="contenedor"></div>
  </body>
</html>
```

CSS como archivo externo y enlazado en el archivo html

Archivo html

```html
<!DOCTYPE html>
<html lang="es">
  <head>
    <link href="archivo.css" rel="stylesheet" type="text/css" />
  </head>
  <body>
    <!-- Contenido del sitio o aplicación web -->
    <div class="contenedor"></div>
  </body>
</html>
```

Archivo CSS

```css
.contenedor {
  width: 30px;
  height: 30px;
  background-color: red;
}
```

### JavaScript

Es el Lenguaje de programación que utilizan los navegadores web para darle funcionalidad a los sitios o aplicaciones web

### Variable

Es un espacio de la memoria ram donde se guarda un trozo de información dada, para especificar estas variables lo hacemos mediante un nombre que nosotros le asignamos, el proceso de asignar un nombre a una variable se le conoce con declarar una variable, varia depende del lenguaje de programación, sin embargo como aquí estamos hablando de la web hablamos de JavaScript, en este lenguaje se declaran de esta forma.

```js
let nombreVariable;
```

También podemos declarar varias variables juntas:

```js
let variable1, variable2;
```

Podemos guardar datos en estas variables ya declaradas asi:

```js
nombreVariable = "dato a guardar";
```

ademas podemos declarar una variable y al mismo tiempo guardar un dato en ella:

```js
let nombreVariable = "dato a guardar";
```

Las variables soportan varios tipos de datos, entre ellos:

- texto
- numero
- fecha

### Función

Una función es como un mini programa que "**realiza una sola cosa**" o por lo menos eso debería hacer se crea con la palabra reservada **Functcion**, esta palabra solo se puede usar para esto, hay varias formas de escribir una función.

La función clásica y la mas básica es:

```js
function nombreFunción(valor1, valor2) {
  //cuerpo de la función
  return valor1 + valor2;
}
```

También podemos expresarlas como una declaración de variable, se les llama función de flecha.

```js
let nombreFunción = (valor1, valor2) => {
  valor1 + valor2;
};
```

### FrameWork

Es una aplicación que nos ayuda a programar nuestros software, dándonos facilidades y proporcionándonos incluso plantillas de software pre-diseñadas, para luego convertir nuestra aplicación web en archivos que comprendan nuestros navegadores web.

### Librería

Es una aplicación que nos ayuda a programar una parte de nuestro software, por lo general las librerías se especializan en un tema en particular (con excepciones).
