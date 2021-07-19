<template>
  <router-link :to="link" class="img-link">
    <img v-if="img !== 'Logo'" :src="img" :alt="alt" />
    <DefaultImg v-else :img="img" />
  </router-link>
</template>

<script>
import DefaultImg from '@theme/components/DefaultImg.vue'

export default {
  components: { DefaultImg },
  props: {
    link: {
      type: String,
      required: true,
    },
    img: {
      type: String,
    },
    alt: {
      type: String,
      default: 'Image Post',
    },
  },
}
</script>

<style lang="stylus">
.img-link
  img
    width 100%
</style>
