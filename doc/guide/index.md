---
layout: doc
title: Guide
---

# Guide

This guide will teach you how to add the theme to a new project manually.

## Install

Create an empty directory and enter it, once inside you execute the following code on the command line

```bash
$ npm install vuepress-theme-ajwi --save-dev
# or
$ yarn add vuepress-theme-ajwi --dev
```

## Folder Structure

Here is the recommended project structure:

```bash
├── blog
│   ├── _posts
│   │   ├── 2018-11-7-que-es-un-navegador-web.md #example
│   │   ├── 2019-2-26-crear-un-tema-para-vuepress.md #example
│   │   └── 2019-5-6-curso-javascript-desde-cero.md #example
│   └── .vuepress
│       ├── `components` _(**Optional**)_
│       ├── `public` _(**Optional**)_
│       ├── `styles` _(**Optional**)_
│       │   ├── index.styl
│       │   └── palette.styl
│       ├── config.js
│       └── `enhanceApp.js` _(**Optional**)_
└── package.json
```

**Required**:

- `blog/.vuepress/config.js`: Blog configuration file, can also be yml or toml.
- `blog/_posts`: Stores the content of your posts.

**Optional**:

If you want to set up the files below, you'll need some knowledge of [VuePress](https://vuepress.vuejs.org/).

- `blog/.vuepress/components`: Vue components in this directory will be automatically registered as global components.
- `blog/.vuepress/styles`: Stores Style-related files.
- `blog/.vuepress/styles/index.styl`: Auto-applied global style files, generated at the end of the CSS file, have a higher priority than the default style.
- `blog/.vuepress/styles/palette.styl`: The palette is used to override the default color constants and to set the Stylus color constants.
- `blog/.vuepress/public`: Static resource directory.
- `blog/.vuepress/enhanceApp.js`: Application level improvement.

## Using vuepress-theme-ajwi

You must add `vuepress-theme-ajwi` as theme in `.vuepress/config.js`. `vuepress-theme-ajwi` it is configurable, but we will use the default values ​​for now.

```js
// .vuepress/config.js
module.exports = {
  title: 'VuePress Blog Example', // Site title. This will be displayed in the navigation bar.
  theme: 'ajwi',
  themeConfig: {
    // Keep scrolling down to see the available options.
  },
}
```

Add the scripts to the package.json file:

```json
// package.json
{
  ...
  "scripts": {
    ...
    "dev": "vuepress dev blog", // start a development server with automatic reloading.
    "build": "vuepress build blog" // build your website.
  }
  ...
}
```

From now on, you can run `npm run dev` or `yarn dev` and go in your browser to `localhost:8080` see your blog!

## Generating Content

The \_posts folder is where your blog posts are located. You can simply write blog posts in Markdown.

All blog post files must contain a header with descriptive information about the post in the form of variables, we will call this header hereafter `frontmatter`. Only `title` is required, but we recommend that you define all frontmatter variables as shown below. They will be used to establish the corresponding layout. See [frontmatter](/config/front-matter) for more details. Here's an example:

```yaml
---
title: Hello World
date: 2020-01-11
image: /img/posts/post-1.jpg
author: ajwi
location: Lima
---
My content.
```

You can name your post archives whatever you like, but we recommend that you include the date at the beginning. It helps you stay organized and will be used as a permalink by default. For example:

```
2018-11-7-que-es-un-navegador-web.md
2019-2-26-crear-un-tema-para-vuepress.md
2019-5-6-curso-javascript-desde-cero.md
```

## Blog Tags

By default, navigate to `/posts/`, you will see the tag input page. You can set your own tags in the frontmatter section of your file, and they will be automatically classified:

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

## Summary

By default, the summary will be pulled from blog posts. If you need to override it, we present the following two approaches:

1. [Write summary manually in frontmatter](/config/front-matter#summary)

2. [Set up the excerpt separator by writing a comment `<!-- more -->` just below what you want to extract as an abstract](https://vuepress.vuejs.org/theme/writing-a-theme.html#content-excerpt)

## Final

Now, check out your blog at `localhost:8080`, if all is well, you might be interested in the following topics:

- Set up this theme – we will discuss it in [the next section](/config/)
- Implement your blog: read the implementation section in the [VuePress documentation](https://vuepress.vuejs.org/guide/deploy.html)
- Explore deeper:
  - [VuePress](https://vuepress.vuejs.org/) documentation
  - [Official Blog Plugin](https://vuepress-plugin-blog.ulivz.com/) documentation
