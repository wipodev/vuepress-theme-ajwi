<template>
  <div id="site-post">
    <article class="post" itemscope itemtype="https://schema.org/BlogPosting">
      <header>
        <h1 class="post-title" itemprop="name headline">
          {{ $frontmatter.title }}
        </h1>
        <PostMeta
          :tags="$frontmatter.tags"
          :author="$frontmatter.author"
          :date="$frontmatter.date"
          :location="$frontmatter.location"
        />
      </header>
      <Content itemprop="articleBody" />
    </article>
  </div>
</template>

<script>
import PostMeta from "@theme/components/PostMeta.vue";

export default {
  components: {
    PostMeta,
  },
};
</script>

<style lang="stylus">
#site-post
  width 100vw
  padding 15px

  .post
    background-color $bgPosts
    border-radius 3px
    padding 15px
</style>
