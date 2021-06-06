<template>
  <div class="blog-tags">
    <BlogTag v-for="tag in tags" :key="tag.name" :tag="tag" />
  </div>
</template>

<script>
export default {
  props: {
    tags: {
      type: Array,
      default: () => [],
    },
  },
}
</script>

<style lang="stylus">
.blog-tags
  //display flex
  width 100%
  padding 15px
  //background-color red

@media screen and (max-width: 1000px)
  .blog-tags
    width 90%
</style>
