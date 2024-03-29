<template>
  <div id="base-list-layout">
    <div class="ui-posts" itemscope itemtype="http://schema.org/Blog">
      <h2 v-if="$page.path !== '/'" class="last-title">Posts</h2>
      <h2 v-else class="last-title">Últimos Posts</h2>
      <BlogTags v-if="$page.path !== '/'" :tags="tags" />
      <article
        v-for="page in pages"
        :key="page.key"
        class="ui-post"
        itemprop="blogPost"
        itemscope
        itemtype="https://schema.org/BlogPosting"
      >
        <div class="card">
          <meta itemprop="mainEntityOfPage" :content="page.path" />
          <ImgLink
            :link="page.path"
            :img="page.frontmatter.image"
            :alt="page.title"
          />
          <div class="card-content">
            <header class="ui-post-title" itemprop="name headline">
              <NavLink :link="page.path">{{ page.title }}</NavLink>
            </header>

            <client-only v-if="page.excerpt">
              <!-- eslint-disable vue/no-v-html -->
              <p
                class="ui-post-summary"
                itemprop="description"
                v-html="page.excerpt"
              />
              <!-- eslint-enable vue/no-v-html -->
            </client-only>
            <p v-else class="ui-post-summary" itemprop="description">
              {{ page.frontmatter.summary || page.summary }}
            </p>

            <footer>
              <div
                v-if="page.frontmatter.author"
                class="ui-post-meta ui-post-author"
                itemprop="publisher author"
                itemtype="http://schema.org/Person"
                itemscope
              >
                <NavigationIcon />
                <span itemprop="name">{{ page.frontmatter.author }}</span>
                <span v-if="page.frontmatter.location" itemprop="address">
                  &nbsp; en {{ page.frontmatter.location }}
                </span>
              </div>

              <div
                v-if="page.frontmatter.date"
                class="ui-post-meta ui-post-date"
              >
                <ClockIcon />
                <time
                  pubdate
                  itemprop="datePublished"
                  :datetime="page.frontmatter.date"
                >
                  {{ resolvePostDate(page.frontmatter.date) }}
                </time>
              </div>

              <div
                v-if="page.frontmatter.tags"
                class="ui-post-meta ui-post-tag"
                itemprop="keywords"
              >
                <TagIcon />
                <router-link
                  v-for="tag in resolvePostTags(page.frontmatter.tags)"
                  :key="tag"
                  :to="postsTag(tag)"
                >
                  {{ tag }}
                </router-link>
              </div>
            </footer>
          </div>
        </div>
      </article>
    </div>
    <component
      :is="paginationComponent"
      v-if="$page.path !== '/' && $pagination.length > 1 && paginationComponent"
    ></component>
  </div>
</template>

<script>
/* global THEME_BLOG_PAGINATION_COMPONENT */

import Vue from 'vue'
import { NavigationIcon, ClockIcon, TagIcon } from 'vue-feather-icons'
import {
  Pagination,
  SimplePagination,
} from '@vuepress/plugin-blog/lib/client/components'

export default {
  components: { NavigationIcon, ClockIcon, TagIcon },

  data() {
    return {
      paginationComponent: null,
    }
  },

  computed: {
    pages() {
      return this.$pagination.pages
    },
    tags() {
      return this.$tag.list
    },
  },

  created() {
    this.paginationComponent = this.getPaginationComponent()
  },

  methods: {
    getPaginationComponent() {
      const n = THEME_BLOG_PAGINATION_COMPONENT
      if (n === 'Pagination') {
        return Pagination
      }

      if (n === 'SimplePagination') {
        return SimplePagination
      }

      return Vue.component(n) || Pagination
    },

    postsTag(tag) {
      return this.$themeConfig.frontmatters[0].path + tag || `/posts/${tag}`
    },

    resolvePostDate(date) {
      let formatDate = new Date(date.trim()).toLocaleDateString(undefined, {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      })
      return formatDate
    },

    resolvePostTags(tags) {
      if (!tags || Array.isArray(tags)) return tags
      return [tags]
    },
  },
}
</script>

<style lang="stylus">
#base-list-layout
  background-color $bgPosts
  text-align center

.ui-posts
  display flex
  flex-wrap wrap
  justify-content center
  max-width 1400px
  margin-left auto
  margin-right auto
  padding-left 10%
  padding-right 10%
  padding-bottom 5%
  background-color $bgPosts

  @media (max-width: $MQNarrow)
    padding-left 3%
    padding-right 3%

  .last-title
    width 100%
    text-align center
    font-size 2.8em
    margin 1.25em 0 0.5em

.ui-post
  max-width 33.3333%
  box-sizing border-box
  margin 15px 0
  padding 0 15px

  &:last-child
    border-bottom 0px
    margin-bottom 0px

  @media (max-width: $MQNarrow)
    max-width 50%

  @media (max-width: $MQMobile)
    max-width 100%

.card
  background-color $bgPost
  border 1px solid $borderPost

.card-content
  padding 10px
  text-align left

.ui-post-title
  font-size 1.33em
  border-bottom 0

  a
    cursor pointer
    color $textColor
    transition all 0.2s
    text-decoration none

    &:hover
      text-decoration underline

.ui-post-summary
  font-size 14px
  color rgba($textColor, 0.54)
  font-weight 200

.ui-post-meta
  display inline-flex
  align-items center
  font-size 12px
  line-height 12px

  &:not(:last-child)
    margin-bottom 3px
    margin-right 20px

  svg
    margin-right 5px
    width 14px
    height 14px

  @media (max-width: $MQMobile)
    display flex

    &:not(:last-child)
      margin-bottom 10px

.ui-post-author
  color rgba($textColor, 0.84)
  font-weight 400

.ui-post-date
  color rgba($textColor, 0.54)
  font-weight 200

.ui-post-tag
  color rgba($textColor, 0.54)
  font-weight 200

  a
    color inherit
    font-weight 200
    text-decoration none
    margin-right 5px

    &:hover
      color $hoverPost
</style>
