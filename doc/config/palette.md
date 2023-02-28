# paleta de colores (Palette)

We mentioned `palette.styl` in [Folder Structure](/guide/#folder-structure), it should be under the styles folder. Its purpose is to override the global color setting. With `palette.styl`, you have the ability to modify not only the colors but also the layout. This is what you can configure:

```stylus
$fonts = Open Sans,Inter,Roboto,Oxygen,Fira Sans,Helvetica Neue,sans-serif
// Primary color
$primary = #ec5033//#7777ef//#ec5033
$black = #000
$gray = #828282
$bg = #1b2025
$bgComponents = #13171a
$border = #2c343c
$accentColor = $primary


// Page
$bgColor = $bg
$textColor = #fff
$darkTextColor = $bg

// Header
$bgHeader = $bgComponents

// Footer
$bgFooter = $bgComponents
$textFooter = $gray

// post
$bgPosts = $bgComponents
$borderPost = $border
$bgPost = $bg
$hoverPost = $primary

// Sidebar
$bgSidebar = $bgComponents

// Suscribe
$bgSuscribe = #242a31

// Links
$hoverLink = $primary

// Code
$bgCode = $black

// Buttom
$buttomColor = $border
$bgButtom = #343e47

// Tag
$borderTag = $border
$hoverTag = $primary

// NewsLetter
$bgNewsletter = #f8f8f8

// post Tag
$bgPostTag = #ededed
$textPostTag = darken($bgPostTag,50%)

// Messages
$bgTip = #f3f5f7
$colorTip = $black
$borderTip = #42b983
$bgWarning = darken(#fffe6f, -50%)
$colorWarning = #6b5900
$borderWarnig = #e7c000
$bgDanger = #ffe6e6
$colorDanger = #4d0000
$borderDanger = #c00
$bgDetails = #f3f5f7
$colorDetails = $black

// layout
$headerHeight = 80px
$coverWidth = 100vw
$suscribeContainer = 100vw
$contentWidth = 100vw
$sidebarWidth = 15rem

// responsive breakpoints
// $MQNarrow = 959px
// $MQMobile = 719px
// $MQMobileNarrow = 419px

// code
// $lineNumbersWrapperWidth = 3.5rem
// $codeLang = js ts html md vue css sass scss less stylus go java c sh yaml py docker dockerfile makefile
```

:::tip Tip
Another easy way to modify styles is [index.styl](https://vuepress.vuejs.org/config/#index-styl) Additional styles you add have a higher priority than this theme provides.
:::
