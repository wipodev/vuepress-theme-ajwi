<template>
  <li class="post-tag">
    <router-link :to="postsTag(tag)">
      <span>{{ tag }}</span>
    </router-link>
  </li>
</template>

<script>
export default {
  name: 'PostTag',
  props: {
    tag: {
      type: String,
      required: true,
    },
  },
  methods: {
    postsTag(tag) {
      return this.$themeConfig.frontmatters[0].path + tag || `/posts/${tag}`
    },
  },
}
</script>

<style scoped lang="stylus">
.post-tag
    height 26px

  &:not(:last-child)
    margin-right 10px

  a
    background-color $bgPostTag
    border-radius 3px 0 0 3px
    padding 0 20px 0 23px
    position relative
    text-decoration none
    height 26px
    display inline-block

    span
      color $textPostTag
      transition color 0.2s

    &:before
      position absolute
      left 10px
      top 10px
      background #fff
      border-radius 50%
      box-shadow inset 0 1px rgba(0, 0, 0, 0.25)
      content ''
      height 6px
      width 6px

    &:after
      position absolute
      right 0
      top 0
      background $bg
      border-bottom 13px solid transparent
      border-left 10px solid $bgPostTag
      border-top 13px solid transparent
      content ''

    &:hover
      background-color $primary

      &:after
        border-left-color $primary

      span
        color $textColor
</style>
