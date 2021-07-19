<template>
  <header class="site-header">
    <div class="header-content">
      <section class="header-content_left">
        <ImgLink
          link="/"
          :img="$themeConfig.logo"
          :alt="$site.title || 'AJ-Wi'"
        />
        <NavLink link="/" class="link-title"
          >{{ $site.title || 'Blog Example' }}
        </NavLink>
      </section>
      <section class="header-content_right">
        <ul class="nav">
          <li
            v-for="item in $themeConfig.nav"
            :key="item.text"
            class="nav-item"
          >
            <NavLink :link="item.link">{{ item.text }}</NavLink>
          </li>
        </ul>
        <SearchBox />
        <component
          :is="isOpen ? 'XIcon' : 'MenuIcon'"
          class="hamburger"
          @click="$emit('toggle-sidebar')"
        />
        <Feed class="hidden" />
      </section>
    </div>
    <div class="mobile-menu-wrapper" :class="{ open: isOpen }">
      <ul v-if="$themeConfig.nav" class="mobile-nav">
        <li
          v-for="item in $themeConfig.nav"
          :key="item.text"
          class="mobile-nav-item"
        >
          <NavLink :link="item.link">{{ item.text }}</NavLink>
        </li>
        <li class="mobile-nav-item">
          <Feed />
        </li>
      </ul>
    </div>
  </header>
</template>

<script>
import { MenuIcon, XIcon } from 'vue-feather-icons'
import SearchBox from '@SearchBox'
import Feed from './Feed'

export default {
  components: { MenuIcon, XIcon, SearchBox, Feed },
  props: {
    isOpen: {
      type: Boolean,
      required: true,
    },
  },
}
</script>

<style lang="stylus">
.site-header
  position fixed
  width 100vw
  z-index 9
  height $headerHeight
  background-color $bgHeader

  &::after
    content ""
    position absolute
    top ($headerHeight - 4px)
    left 0
    width 100%
    height 4px
    background linear-gradient(130deg, #ff7a18, #af002d 41.07%, #319197 76.05%)

  .header-content
    max-width 1170px
    height ($headerHeight - 4px)
    margin auto
    padding 0 10px
    display flex
    justify-content space-between

    .nav-link
      text-decoration none

    .header-content_left,.header-content_right
      display flex
      align-items center

      img, #Logo
        height ($headerHeight - 4px)
        width auto
        margin-right 15px

      .link-title
        font-size 30px
        letter-spacing 2px
        text-transform uppercase
        font-weight bold
        color $textColor
        @media (max-width: $MQNarrow)
          font-size 20px

      .nav
        display flex
        list-style none

        .nav-item
          margin-right 20px

          .nav-link
            font-size 20px
            transition color 0.3s

      .search-box

        input
          border-radius 5px
          transition all 0.5s
          border 1px solid #cecece
          color $darkTextColor

          &:hover
            border 1px solid $border
            box-shadow 0 0 5px $primary

        .suggestions
          border 1px solid $darkBorderColor
          top 40px
          right 0

          a
            color $darkTextColor
            text-decoration none

            &.focused
              color $primary

  .mobile-nav-item
    padding 10px 0
    list-style none

    a
      text-decoration none

  .mobile-menu-wrapper
    max-height 0
    overflow hidden
    transition 0.3s ease
    background-color $bgHeader

  .mobile-menu-wrapper.open
    max-height 450px
    transition 0.3s ease


.hamburger
  display none
  margin-right 1rem
  width 2rem
  height 2rem
  transition color 0.3s

  &:hover
    cursor pointer
    color $primary

@media (min-width: $MQMobile)
  .nav-item > a:not(.external)
    position: relative

  .nav-item > a:not(.external):after
    content: ""
    position: absolute
    transition: .3s ease-in-out;
    bottom: -10px
    height: 2px
    left: 0
    right: 0
    opacity: 0
    cursor pointer
    background: $primary

  .nav-item > a:not(.external):hover
  .nav-item > a:not(.external).router-link-active
    &:after
      bottom: -2px
      opacity: 1

@media (max-width: $MQMobile)
  .img-link, .hidden
    display none

  .link-title
    font-size 30px

  .search-box
    margin-right 1rem

    input
      left 0

  .hamburger
    display block

  .site-header
    .header-content
      .header-content_right
        .nav
          display none
</style>
