<template>
  <section id="header-wrapper">
    <header id="header">
      <div class="header-wrapper">
        <div class="logo">
          <ImgLink
            v-if="$themeConfig.logo"
            link="/"
            :img="$themeConfig.logo"
            :alt="$site.title || 'AJ-Wi'"
            class="logo-link"
          />
        </div>
        <div class="title">
          <NavLink link="/" class="home-link"
            >{{ $site.title || 'Blog Example' }}
          </NavLink>
        </div>
        <div class="header-right-wrap">
          <ul v-if="$themeConfig.nav" class="nav">
            <li
              v-for="item in $themeConfig.nav"
              :key="item.text"
              class="nav-item"
            >
              <NavLink :link="item.link">{{ item.text }}</NavLink>
            </li>
          </ul>
          <SearchBox />
          <Feed />
        </div>
      </div>
    </header>
  </section>
</template>

<script>
import SearchBox from '@SearchBox'
import Feed from './Feed'

export default {
  components: { SearchBox, Feed },
}
</script>

<style lang="stylus">
@import '~@app/style/config'

#header
  z-index 12
  position fixed
  top 0
  left 50%
  transform translateX(-50%)
  width 100vw
  max-width 1400px
  height $headerHeight
  box-sizing border-box
  background-color $bgHeader
  padding 20px 32px 20px
  border-bottom 1px solid $border

  ol, ul
    list-style none
    margin 0
    padding 0


.header-wrapper
  display flex
  line-height 40px
  height 40px
  max-width: 1170px
  margin: auto
  align-items center

  .logo
    height $headerHeight
    width 120px
    margin-right 15px

    .logo-link
      img
        height $headerHeight

  .title
    font-size 30px
    margin 0
    letter-spacing 2px
    display block
    text-transform uppercase
    @media (max-width: $MQNarrow)
      font-size 20px

    a
      color $textColor
      font-weight bold
      text-decoration none

  .header-right-wrap
    flex 1
    display flex
    justify-content flex-end
    align-items center

    .nav
      flex 0 0 auto
      display flex
      margin 0

      .nav-item
        margin-left 20px

        a
          color $textColor
          font-size 20px
          text-decoration none
          transition color 0.3s

    .search-box
      margin-left 20px

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
  #header
    display none

  .header-wrapper
    flex-direction column

    .header-right-wrap
      display none
</style>
