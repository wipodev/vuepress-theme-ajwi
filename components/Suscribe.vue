<template>
  <div class="suscribe-container">
    <h2>Suscribete</h2>
    <div class="suscribe-items">
      <SuscribeItem img="/img/spotify.svg" route="http://spotify.com" />
      <SuscribeItem img="/img/spotify.svg" route="http://spotify.com" />
      <SuscribeItem img="/img/spotify.svg" route="http://spotify.com" />
    </div>
  </div>
</template>

<script>
import SuscribeItem from '@theme/components/SuscribeItem.vue'

export default {
  components: {
    SuscribeItem,
  },
  computed: {
    cover() {
      return this.$themeConfig.cover || []
    },
  },
}
</script>

<style lang="stylus">
.suscribe-container
  width $suscribeWidth
  max-width 1400px
  background-color $bgSuscribe
  text-align center
  display flex
  flex-direction column
  padding 5% 10% 10% 10%

  h2
    font-size 3em
    font-weight 800
    padding-bottom 0.8rem
    margin-top 0
    border  none
    color $primary

.suscribe-items
  display flex
  justify-content space-between

  @media (max-width: $MQNarrow)
    flex-wrap wrap
</style>
