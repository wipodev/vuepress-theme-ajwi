<template>
  <div>
    <Cover v-if="$page.path === '/'" />
    <BaseLastPosts v-if="$page.path === '/'" />
    <BaseListPosts v-if="$page.path !== '/' && $pagination" />
    <Content v-else />
    <Suscribe v-if="$page.path === '/'" />
  </div>
</template>

<script>
import Cover from '@theme/components/Cover.vue'
import Suscribe from '@theme/components/Suscribe.vue'

export default {
  components: {
    Cover,
    Suscribe,
  },
}
</script>

<style lang="stylus">
.content__default
  padding 15px
  border-right 1px solid $border
  border-left 1px solid $border
</style>
