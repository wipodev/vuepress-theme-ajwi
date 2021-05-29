<template>
  <div>
    <Cover />
    <BaseListLayout v-if="$pagination" />
    <Content v-else />
  </div>
</template>

<script>
import Cover from '@theme/components/Cover.vue'

export default {
  components: {
    Cover,
  },
}
</script>
