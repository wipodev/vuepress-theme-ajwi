<template>
  <div class="suscribe-item">
    <img v-if="img !== 'default'" :src="img" :alt="title" />
    <DefaultImg v-else :img="title" />
    <h3 class="suscribe-title">{{ title }}</h3>
    <BaseButtom :url="route" />
  </div>
</template>

<script>
import BaseButtom from "@theme/components/BaseButtom.vue";
import DefaultImg from "@theme/components/DefaultImg.vue";

export default {
  components: {
    BaseButtom,
    DefaultImg,
  },
  props: {
    title: {
      type: String,
      default: "Spotify",
    },
    img: {
      type: String,
      default: "",
    },
    route: {
      type: String,
      default: "",
    },
  },
};
</script>

<style lang="stylus">
.suscribe-item
  width 25%
  margin-bottom 2em

  img
    width 50%

  svg
    width 50%
    height auto

  h3
    margin 0.5rem 0 2rem 0
    font-size 2rem
    font-weight 800
    color $primary

  .suscribe-title
    border none
</style>
