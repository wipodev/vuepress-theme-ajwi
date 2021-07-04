<template>
  <header class="site-header">
    <nav class="site-header_nav">
      <h1>
        <router-link to="/">Blog Example</router-link>
      </h1>
      <SearchBox ref="search" />
      <BtnMenu />
      <Feed v-if="$themeConfig.feed" />
    </nav>
  </header>
</template>

<script>
import BtnMenu from "@theme/components/BtnMenu.vue";
import SearchBox from "@SearchBox";
import Feed from "./Feed";

export default {
  components: {
    BtnMenu,
    SearchBox,
    Feed,
  },
  data() {
    return {
      pepe: false,
    };
  },
  updated() {
    console.log(this.$refs.search.focused);
  },
};
</script>

<style lang="stylus">
.site-header
  background-color $bgHeader
  padding 0 15px
  display flex
  position sticky
  top 0
  z-index 9

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

  .site-header_nav
    width 100%
    display grid
    grid-template-columns 1fr 42px 40px
    gap 15px
    align-content center

    h1
      a
        color $primary

    .search-box
      justify-self end

      input
        border-radius 5px
        transition all 0.5s
        border 2px solid $primary
        color $darkTextColor
        left 0

        &:hover
          box-shadow 3px 3px 5px $primary

        &:focus > .site-header_nav h1
          font-size 0.9rem

      .suggestions
        border 1px solid $darkBorderColor
        top 40px
        right 0

        a
          color $darkTextColor
          text-decoration none

          &.focused
            color $primary

    .feed
      display none

    @media (min-width $MQMobile)
      .hamburger
        display none

      .feed
        display flex
</style>
