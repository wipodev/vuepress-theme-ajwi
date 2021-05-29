<template>
  <router-link :to="link" class="img-link">
    <img :src="img" :alt="alt" />
  </router-link>
</template>

<script>
export default {
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
