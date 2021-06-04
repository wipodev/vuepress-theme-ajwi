<template>
  <div>
    <Cover />
    <BaseLastPosts v-if="$pagination" />
    <Content v-else />
    <Suscribe />
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
