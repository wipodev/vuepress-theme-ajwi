# Front Matter

## Title

- Type: `string`
- Default: `undefined`
- Required: `true`

The title of the page.

For example:

```markdown
---
Title: Hello World
---
```

## Tags

- Type: `string|string[]`
- Default: `undefined`
- Required: `false`

The keywords of the pages to rank for and will also be displayed in the post:

<img src="/assets/img/tags.png" width="350px"/>
<img src="/assets/img/content-tags.png" width="350px"/>

For example:

```markdown
---
tags: -JavaScript
  - SUN
---
```

## Date

- Type: `YYYY-MM-DD`
- Default: `undefined`
- Required: `false`

Our recommended format is YYYY-MM-DD.

The post date will be used for permalinking, ranking, and will be displayed on the layout:

<img src="/assets/img/date.png" width="350px"/>
<img src="/assets/img/content-date.png" width="350px"/>

For example:

```markdown
---
date: 2016-10-20
---
```

## Image

- Type: `string`
- Default: `undefined`
- Required: `false`

The image that will be displayed on the cards in the item list.

It is important to note that images must have a 3/2 aspect ratio to display well in the layout.

<img src="/assets/img/image.png" width="350px"/>

For example:

```markdown
---
image: yourimage.png
---
```

## author

- Type: `string`
- Default: `undefined`
- Required: `false`

Author of the publication. This will be displayed in the post:

<img src="/assets/img/author.png" width="350px"/>
<img src="/assets/img/content-author.png" width="350px"/>

For example:

```markdown
---
author: ajwi
---
```

## Location

- Type: `string`
- Default: `undefined`
- Required: `false`

Town where the publication takes place. This will be displayed in the post:

<img src="/assets/img/location.png" width="350px"/>
<img src="/assets/img/content-location.png" width="350px"/>

For example:

```markdown
---
location: lime
---
```

## summary

-Type: `string`

- Default: `undefined`
- Required: `false`

Summary of the publication. This will be displayed in the post:

![Summary](/assets/img/summary.png)

For example:

```markdown
---
summary: Here's a quick post on what I found..
---
```
