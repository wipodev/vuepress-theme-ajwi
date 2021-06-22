<template>
  <div class="suscribe-item">
    <img :src="img" :alt="title" />
    <h3 class="suscribe-title">{{ title }}</h3>
    <BaseButtom :url="route" />
  </div>
</template>

<script>
import BaseButtom from '@theme/components/BaseButtom.vue'

export default {
  components: {
    BaseButtom,
  },
  props: {
    title: {
      type: String,
      default: 'Spotify',
    },
    img: {
      type: String,
      default: '',
    },
    route: {
      type: String,
      default: '',
    },
  },
}
</script>

<style lang="stylus">
.suscribe-item
  width 25%
  margin-bottom 2em

  img
    width 50%

  h3
    margin 0.5rem 0 2rem 0
    font-size 2rem
    font-weight 800
    color $primary

  .suscribe-title
    border none

  @media (max-width: $MQNarrow)
    width 50%

  @media (max-width: $MQMobile)
    width 100%
</style>
