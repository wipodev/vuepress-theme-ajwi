<template>
  <div class="cover-container">
    <div class="cover-img">
      <img :src="cover.img" :alt="cover.title" />
    </div>
    <div class="cover-content">
      <h1>{{ cover.title }}</h1>
      <h2>{{ cover.subTitle }}</h2>
      <p>{{ cover.content }}</p>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    cover() {
      return this.$themeConfig.cover || []
    },
  },
}
</script>

<style lang="stylus">
.cover-container
  width $coverWidth
  min-height $coverHeight
  background-color $primaryColor
  display flex
  justify-content center
  margin-bottom 50px

.cover-img
  width 40%
  padding 10% 5% 10% 0
  img
    max-width 100%
    height auto

.cover-content
  width 40%
  height auto
  display flex
  flex-direction column
  justify-content center
  h1
    font-size 4rem
    font-weight 700
    margin-block-start 0
    margin-block-end 0
  h2
    border-bottom none
</style>
