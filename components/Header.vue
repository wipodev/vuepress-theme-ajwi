<template>
  <header class="site-header">
    <nav class="header-nav">
      <section class="header-left">
        <div class="header-image">
          <router-link to="/">
            <img
              v-if="$themeConfig.logo !== 'Logo'"
              :src="$themeConfig.logo"
              :alt="$site.title || 'AJ-Wi'"
            />
            <DefaultImg v-else :img="$themeConfig.logo" />
          </router-link>
        </div>
        <router-link to="/">
          <h1 class="site-title">
            {{ $site.title || "Blog Example" }}
          </h1>
        </router-link>
      </section>
      <section class="header-right">
        <nav class="site-nav"></nav>
        <div class="site-search"></div>
        <div class="feed"></div>
      </section>
    </nav>
  </header>
</template>

<script>
import DefaultImg from "@theme/components/DefaultImg.vue";

export default {
  components: {
    DefaultImg,
  },
};
</script>

<style lang="stylus">
.site-header
  background-color $bgHeader
  position sticky
  top 0
  z-index 10
  display grid
  place-content center

  &::after
    content ""
    position absolute
    top calc(60px - 4px)
    left 0
    width 100%
    height 4px
    background linear-gradient(
      $borderGradient
    )

  .header-nav
    display flex
    justify-content space-between
    width 100%
    max-width 1140px

    .header-left
      display flex

      .header-image
        width 90px

      .site-title
        color $primary

    .header-right
      display flex
</style>
