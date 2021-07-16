<template>
  <div class="cover-container">
    <div class="cover-img">
      <img v-if="cover.img !== 'Blog'" :src="cover.img" :alt="cover.title" />
      <DefaultImg v-else :img="cover.img" class="cover-img_svg" />
    </div>
    <div class="cover-content">
      <h1>{{ cover.title }}</h1>
      <h2>{{ cover.subTitle }}</h2>
      <p>{{ cover.content }}</p>
    </div>
  </div>
</template>

<script>
import DefaultImg from "@theme/components/DefaultImg.vue";

export default {
  components: {
    DefaultImg,
  },
  computed: {
    cover() {
      return this.$themeConfig.cover || [];
    },
  },
};
</script>

<style lang="stylus">
.cover-container
  display none
  @media (min-width $MQMobileNarrow)
    display grid
    grid-template-columns 1fr 1fr
    background $bgCover
    gap 15px
    padding 15px

    .cover-img
      display grid
      place-items center
      img&
      svg
        max-width 50%
        height auto

      .cover-img_svg
        display grid
        place-items center

    .cover-content
      display flex
      flex-direction column
      justify-content center
      h1
        font-size 1.8rem
        font-weight 700
        margin-block-start 0
        margin-block-end 0
      h2
        font-size 1rem
      p
        font-size 0.6rem

  @media (min-width $MQMobile)
    .cover-content
      h1
        font-size 3rem
      h2
        font-size 1.65rem
      p
        font-size 0.8rem

  @media (min-width $MQNarrow)
    min-height calc(100vh - 60px)

    .cover-content
      h1
        font-size 4rem
      h2
        font-size 1.65rem
      p
        font-size 1rem
</style>
