<template>
  <div id="vuepress-theme-blog__post-layout">
    <div class="vuepress-theme-blog__post-content">
      <div class="sidebar">
        <Toc />
      </div>
      <article
        class="vuepress-blog-theme-content"
        itemscope
        itemtype="https://schema.org/BlogPosting"
      >
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
        <footer>
          <Newsletter v-if="$service.email.enabled" />
          <hr />
          <Comment />
        </footer>
      </article>
    </div>
  </div>
</template>

<script>
import Toc from '@theme/components/Toc.vue'
import PostMeta from '@theme/components/PostMeta.vue'
import { Comment } from '@vuepress/plugin-blog/lib/client/components'

export default {
  components: {
    Toc,
    PostMeta,
    Comment,
    Newsletter: () => import('@theme/components/Newsletter.vue'),
  },
}
</script>

<style lang="stylus">
@require '../styles/wrapper.styl'

.sidebar
  display none
  background $bgSidebar
  width $sidebarWidth
  position fixed
  z-index 9
  margin 0
  top $headerHeight
  left 0
  bottom 0
  box-sizing border-box
  border-right 1px solid $border
  overflow-y auto
  @media (min-width: $MQNarrow)
    display block

.vuepress-blog-theme-content
  @extend $wrapper
  font-size 16px
  letter-spacing 0px
  color $textColor
  position relative
  left $sidebarWidth
  max-width 740px

  .post-title
    padding-top 0

@media (max-width: $MQNarrow)
  .vuepress-blog-theme-content
    padding-top 0
    margin 0 auto

  .post-title
    margin-top 0
</style>
