<template>
  <div class="cover-container">
    <div class="cover-img">
      <img v-if="cover.img !== 'Blog'" :src="cover.img" :alt="cover.title" />
      <SocialImg v-else :img="cover.img" />
    </div>
    <div class="cover-content">
      <h1>{{ cover.title }}</h1>
      <h2>{{ cover.subTitle }}</h2>
      <p>{{ cover.content }}</p>
    </div>
  </div>
</template>

<script>
import SocialImg from '@theme/components/SocialImg.vue'

export default {
  components: {
    SocialImg,
  },
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
  max-width 1400px
  background-color $primary
  display flex
  justify-content center

  @media (max-width: $MQMobile)
    flex-wrap wrap
    .cover-img
    .cover-content
      width 90%


.cover-img
  width 40%
  padding 10% 5% 10% 0
  img&
  svg
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


  @media (max-width: $MQNarrow)
    h1
      font-size 3rem
    h2
      font-size 1rem

  @media (max-width: $MQMobile)
    margin-bottom 50px
    h1
      font-size 4rem
    h2
      font-size 1.65rem

  @media (max-width: $MQMobileNarrow)
    h1
      font-size 3rem
    h2
      font-size 1rem
</style>
