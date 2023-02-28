---
layout: doc
title: Config
---

# Options

## Logo

-Type: `string`

- Default: `undefined`

The logo will be displayed on the left side of the page header, you can add an image to display in `.vuepress/config.js`

For example:

```js
module.exports = {
  themeConfig: {
    logo: '/img/yourimage.svg',
  },
}
```

## Navigation (nav)

- Type: `Array<{ text: string, link: string }>`
- Default: `See below`

Links that you want to be displayed in the navigation bar.

Here is the default value:

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

## Main Banner (Cover)

-Type: `object`

- Default: `See below`

This section is located on the home page just below the header.

```JavaScript
   {
     title: 'Welcome to my Blog',
     subTitle: 'the Blog you were looking for',
     content: 'A Blog where you will find the various technologies within our reach.',
     img: '/img/cover-img.png'
   }
```

You can modify the texts and images that appear in the `.vuepress/config.js` file.

For example:

```JavaScript
module.exports = {
   themeConfig: {
     cover: {
       title: 'Your Title',
       subTitle: 'Your subtitle',
       content: 'Your description',
       img: 'yourimage.png'
     }
   }
}
```

## Subscribe

-Type: `object`

- Default: `See below`

This section is located before the footer.

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

You can modify the bindings in the `.vuepress/config.js` file.

```JavaScript
module.exports = {
   themeConfig: {
     subscribe: {
       item1: {
         img: 'yourimage.svg',
         route: 'http://yourdomain.com',
       },
       item2: {
         img: 'yourimage.svg',
         route: 'http://yourdomain.com',
       },
       item3: {
         img: 'yourimage.svg',
         route: 'http://yourdomain.com',
       },
     }
   }
}
```

## Footer

### footer.contact

- Type: `Array<{ type: ContactType, link: string }>`
- Default: `undefined`

Contact information, which is displayed in the footer.

For example:

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

For now `ContactType` supports the following types:

- codepen
  -codesandbox
- Facebook
  -github
  -gitlab
  -instagram
  -linkedin
  -mail
  -messenger
- music
- phone
  -twitter
- video
- Web
- Youtube

### footer.copyright

- Type: `Array<{ text: string, link?: string }>`
- Default: `undefined`

Copyright information, displayed in the footer.

For example:

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
          text: 'MIT Licensed | Copyright © 2018-present AJ-Wi',
        },
      ],
    },
  },
}
```

## Directories

-Type: `DirectoryClassifier[]`

- Default: `See below`

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

By default, pages are placed in `_post` and the post list path is `/`. Here's an example if you want to customize it:

```JavaScript
[
   {
     id: 'writing', // Unique id for the current classifier
     dirname: '_writings', // Matching directory name
     path: '/writings/', // Input page for current classifier
     title: 'essay', // Titles of the input pages and pagination of the current classifier.
     layout: 'IndexWriting', // Name of the layout component for the input page.
     frontmatter:{ //Frontmatter for the page.
       tag: 'vuepress'
     },
     itemLayout: 'Writing', // Layout of matching pages.
     itemPermalink: '/writings/:year/:month/:day/:slug', // Permalink for matching pages.
     pagination: { // Pagination behavior
       lengthPerPage: 2,
     },
   }
]
```

Reference:

- [document classifiers](https://vuepress-plugin-blog.ulivz.com/guide/getting-started.html#document-classifier)

## frontmatters

-Type: `FrontmatterClassifier[]`

- Default: `See below`

```JavaScript
[
   {
     id: 'tag',
     keys: ['tags', 'tag'],
     path: '/posts/',
   },
]
```

It will only be sorted by `tag` and `tags` in the frontmatter, and the path for it is `'/tag/'` by default. Let's see how to customize it:

```JavaScript
[
   {
     id: 'location', // Identification for the current classifier
     keys: ['location'], // Frontmatter keys used to rank pages
     path: '/location/', // Input page for current classifier
     title: 'location', // Titles of the entry pages, scope and pagination of the current classifier.
     layout: 'IndexLocation', // Name of the layout component for the input page.
     scopeLayout: 'ScopeLocation', // Name of the layout component for the scope page.
     frontmatter: { //Frontmatter for the page.
       description: 'Hello'
     },
     pagination: { // Pagination behavior
       lengthPerPage: 2,
     },
   },
]
```

Reference:

- [Frontmatter Classifier](https://vuepress-plugin-blog.ulivz.com/guide/getting-started.html#frontmatter-classifier)

## Global Pagination

-Type: `object`

- Default: `{ lengthPerPage: 9 }`

Pagination settings for all directories and frontmatters. For example:

```JavaScript
{
   prevText:'Back', // Text of links to go back.
   nextText:'Next', // Text of links to go to the next.
   lengthPerPage:'2', // Maximum number of posts per page.
   layout:'Pagination', // Layout of the pagination page
}
```

For more information, please visit [Pagination Settings](https://vuepress-plugin-blog.ulivz.com/pagination/#sorter).

## Sitemap

-Type: `object`

- Default: `undefined`

You can simply enable it by filling in the `hostname` property with your hostname:

```JavaScript
{
   hostname: 'https://yourdomain'
}
```

Please refer to [vuepress-plugin-sitemap](https://github.com/ekoeryanto/vuepress-plugin-sitemap#options) for more details.

## Comments

-Type: `object`

- Default: `undefined`

Vssue and Disqus are integrated commenting services. These are the properties needed to enable:

```JavaScript
// disks
{
   service: "disqus",
   shortname: "The short name of your blog",
}

// Vssue
{
   service: 'vssue',
   owner: 'You',
   repo: 'Your repository',
   clientId: 'Your client ID',
   clientSecret: 'Your clientSecret',
}
```

To configure the disqus short name, visit [here](https://help.disqus.com/en/articles/1717111-what-s-a-shortname)

More configuration, please visit:

- [vuepress-plugin-disqus-comment](https://vuepress-plugin-disqus.netlify.com/#usage)
- [vuepress-plugin-vssue](https://vssue.js.org/guide/vuepress.html#usage)

## Newsletter

-Type: `object`

- Default: `undefined`

Mailchimp is our default newsletter service. The only property required to enable the newsletter is `endpoint`:

```JavaScript
{
   endpoint: 'https://TuendPoint'
}
```

Please go to [vuepress-plugin-mailchimp](https://vuepress-plugin-mailchimp.billyyyyy3320.com/#config) to see how to get your `endpoint`.

## feed

-Type: `object`

- Default: `undefined`

RSS, Atom and even JSON feeds are supported. The only property needed to enable the feed is `canonical_base`:

```JavaScript
{
   canonical_base:'http://yoursite',
},
```

RSS is the default feed type.

All options in [vuepress-plugin-feed](https://github.com/webmasterish/vuepress-plugin-feed#options) are available.
Also, we present an easier approach to enable/disable feed types, for example:

```JavaScript
{
   canonical_base:'http://yoursite',
   rss:false
   atom:true,
   json:false
}
```

::: tip
If you plan to deploy your site under a child path and have configured the [base URL](https://vuepress.vuejs.org/config/#base), you won't need to pass it back to `canonical_base`.
:::

## summary

-Type: `boolean`
-Default: `true`

Either to automatically extract the summary of the markdowns. You can write a summary manually in the [frontmatter](./front-matter.md#summary) section of the post. The summary is not just for display, but also for the description of the page.

## Summary Length

-Type: `number`

- Default: `200`

Sets the duration of the digest.

## pwa

-Type: `boolean`
-Default: `false`

Either to enable PWA support. this option is promoted by the [official
PWA plugin](https://v1.vuepress.vuejs.org/plugin/official/plugin-pwa.html).

If you enable this option, the default options of the internal PWA plugin are as follows:

```js
{
   serviceWorker: true,
   updatePopup: true
}
```

## Pagination Component

-Type: `string`

- Default: `'Pagination'`

Customize the pagination component.

The default is the
[pagination component](https://vuepress-plugin-blog.ulivz.com/components/#pagination)

<img src="/assets/img/pagination.png" width="250" height="" style=""/>

You can set this option to select the `SimplePagination`.

<img src="/assets/img/simple-pagination.png" width="250" height="" style=""/>

You can also write a custom pagination component and register it as a global component. then pass your name to this option.

## smooth scrolling

-Type: `boolean`
-Default: `false`

The `themeConfig.smoothScroll` option allows you to enable smooth scrolling.

```JavaScript
// .vuepress/config.js
module.exports = {
   themeConfig: {
     smoothScroll: true
   }
}
```
