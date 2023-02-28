import{_ as s,c as n,o as a,a as l}from"./app.bc8f8ce5.js";const F=JSON.parse('{"title":"paleta de colores (Palette)","description":"","frontmatter":{},"headers":[],"relativePath":"es/config/palette.md","lastUpdated":1677376787000}'),p={name:"es/config/palette.md"},o=l(`<h1 id="paleta-de-colores-palette" tabindex="-1">paleta de colores (Palette) <a class="header-anchor" href="#paleta-de-colores-palette" aria-hidden="true">#</a></h1><p>Hemos mencionado <code>palette.styl</code> en <a href="/vuepress-theme-ajwi/es/guide/#estructura-de-carpetas">Estructura de carpetas</a>, debería estar debajo de la carpeta styles. Su propósito es anular la configuración de color global. Con <code>palette.styl</code>, tiene la capacidad de modificar no solo los colores sino también el diseño. Esto es lo que puede configurar:</p><div class="language-stylus"><button title="Copy Code" class="copy"></button><span class="lang">stylus</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">$fonts </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> Open Sans,Inter,Roboto,Oxygen,Fira Sans,Helvetica Neue,sans-serif</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// Primary color</span></span>
<span class="line"><span style="color:#A6ACCD;">$primary </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">#</span><span style="color:#A6ACCD;">ec5033</span><span style="color:#676E95;font-style:italic;">//#7777ef//#ec5033</span></span>
<span class="line"><span style="color:#A6ACCD;">$black </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">#</span><span style="color:#A6ACCD;">000</span></span>
<span class="line"><span style="color:#A6ACCD;">$gray </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">#</span><span style="color:#A6ACCD;">828282</span></span>
<span class="line"><span style="color:#A6ACCD;">$bg </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">#</span><span style="color:#A6ACCD;">1b2025</span></span>
<span class="line"><span style="color:#A6ACCD;">$bgComponents </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">#</span><span style="color:#A6ACCD;">13171a</span></span>
<span class="line"><span style="color:#A6ACCD;">$border </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">#</span><span style="color:#A6ACCD;">2c343c</span></span>
<span class="line"><span style="color:#A6ACCD;">$accentColor </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> $primary</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// Page</span></span>
<span class="line"><span style="color:#A6ACCD;">$bgColor </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> $bg</span></span>
<span class="line"><span style="color:#A6ACCD;">$textColor </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">#</span><span style="color:#A6ACCD;">fff</span></span>
<span class="line"><span style="color:#A6ACCD;">$darkTextColor </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> $bg</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// Header</span></span>
<span class="line"><span style="color:#A6ACCD;">$bgHeader </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> $bgComponents</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// Footer</span></span>
<span class="line"><span style="color:#A6ACCD;">$bgFooter </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> $bgComponents</span></span>
<span class="line"><span style="color:#A6ACCD;">$textFooter </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> $gray</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// post</span></span>
<span class="line"><span style="color:#A6ACCD;">$bgPosts </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> $bgComponents</span></span>
<span class="line"><span style="color:#A6ACCD;">$borderPost </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> $border</span></span>
<span class="line"><span style="color:#A6ACCD;">$bgPost </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> $bg</span></span>
<span class="line"><span style="color:#A6ACCD;">$hoverPost </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> $primary</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// Sidebar</span></span>
<span class="line"><span style="color:#A6ACCD;">$bgSidebar </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> $bgComponents</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// Suscribe</span></span>
<span class="line"><span style="color:#A6ACCD;">$bgSuscribe </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">#</span><span style="color:#A6ACCD;">242a31</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// Links</span></span>
<span class="line"><span style="color:#A6ACCD;">$hoverLink </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> $primary</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// Code</span></span>
<span class="line"><span style="color:#A6ACCD;">$bgCode </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> $black</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// Buttom</span></span>
<span class="line"><span style="color:#A6ACCD;">$buttomColor </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> $border</span></span>
<span class="line"><span style="color:#A6ACCD;">$bgButtom </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">#</span><span style="color:#A6ACCD;">343e47</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// Tag</span></span>
<span class="line"><span style="color:#A6ACCD;">$borderTag </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> $border</span></span>
<span class="line"><span style="color:#A6ACCD;">$hoverTag </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> $primary</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// NewsLetter</span></span>
<span class="line"><span style="color:#A6ACCD;">$bgNewsletter </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">#</span><span style="color:#A6ACCD;">f8f8f8</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// post Tag</span></span>
<span class="line"><span style="color:#A6ACCD;">$bgPostTag </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">#</span><span style="color:#A6ACCD;">ededed</span></span>
<span class="line"><span style="color:#A6ACCD;">$textPostTag </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">darken</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">$bgPostTag</span><span style="color:#89DDFF;">,</span><span style="color:#F78C6C;">50%</span><span style="color:#89DDFF;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// Messages</span></span>
<span class="line"><span style="color:#A6ACCD;">$bgTip </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">#</span><span style="color:#A6ACCD;">f3f5f7</span></span>
<span class="line"><span style="color:#A6ACCD;">$colorTip </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> $black</span></span>
<span class="line"><span style="color:#A6ACCD;">$borderTip </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">#</span><span style="color:#A6ACCD;">42b983</span></span>
<span class="line"><span style="color:#A6ACCD;">$bgWarning </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">darken</span><span style="color:#89DDFF;">(#</span><span style="color:#A6ACCD;">fffe6f</span><span style="color:#89DDFF;">, </span><span style="color:#F78C6C;">-50%</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">$colorWarning </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">#</span><span style="color:#A6ACCD;">6b5900</span></span>
<span class="line"><span style="color:#A6ACCD;">$borderWarnig </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">#</span><span style="color:#A6ACCD;">e7c000</span></span>
<span class="line"><span style="color:#A6ACCD;">$bgDanger </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">#</span><span style="color:#A6ACCD;">ffe6e6</span></span>
<span class="line"><span style="color:#A6ACCD;">$colorDanger </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">#</span><span style="color:#A6ACCD;">4d0000</span></span>
<span class="line"><span style="color:#A6ACCD;">$borderDanger </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">#</span><span style="color:#A6ACCD;">c00</span></span>
<span class="line"><span style="color:#A6ACCD;">$bgDetails </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">#</span><span style="color:#A6ACCD;">f3f5f7</span></span>
<span class="line"><span style="color:#A6ACCD;">$colorDetails </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> $black</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// layout</span></span>
<span class="line"><span style="color:#A6ACCD;">$headerHeight </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">80px</span></span>
<span class="line"><span style="color:#A6ACCD;">$coverWidth </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">100vw</span></span>
<span class="line"><span style="color:#A6ACCD;">$suscribeContainer </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">100vw</span></span>
<span class="line"><span style="color:#A6ACCD;">$contentWidth </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">100vw</span></span>
<span class="line"><span style="color:#A6ACCD;">$sidebarWidth </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">15rem</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// responsive breakpoints</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// $MQNarrow = 959px</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// $MQMobile = 719px</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// $MQMobileNarrow = 419px</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// code</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// $lineNumbersWrapperWidth = 3.5rem</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// $codeLang = js ts html md vue css sass scss less stylus go java c sh yaml py docker dockerfile makefile</span></span>
<span class="line"></span></code></pre></div><div class="tip custom-block"><p class="custom-block-title">Tip</p><p>Otro método sencillo para modificar estilos es <a href="https://vuepress.vuejs.org/config/#index-styl" target="_blank" rel="noreferrer">index.styl</a> Los estilos adicionales que agregue tienen una prioridad más alta que la que proporciona este tema.</p></div>`,4),e=[o];function t(c,r,y,D,C,A){return a(),n("div",null,e)}const d=s(p,[["render",t]]);export{F as __pageData,d as default};
