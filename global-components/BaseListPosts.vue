<template>
  <div class="list-content">
    <h2 v-if="$page.path !== '/'" class="list-posts_title">Posts</h2>
    <h2 v-else class="list-posts_title">Últimos Posts</h2>
    <BlogTags v-if="$page.path !== '/'" :tags="tags" />
    <div class="list-posts" itemscope itemtype="http://schema.org/Blog">
      <article
        v-for="page in pages"
        :key="page.key"
        class="card-post"
        itemprop="blogPost"
        itemscope
        itemtype="https://schema.org/BlogPosting"
      >
        <meta itemprop="mainEntityOfPage" :content="page.path" />
        <div class="card-post_content">
          <header class="card-post_title" itemprop="name headline">
            <router-link :to="page.path">{{ page.title }}</router-link>
          </header>

          <client-only v-if="page.excerpt">
            <!-- eslint-disable vue/no-v-html -->
            <p
              class="card-post_summary"
              itemprop="description"
              v-html="page.excerpt"
            />
            <!-- eslint-enable vue/no-v-html -->
          </client-only>
          <p v-else class="card-post_summary" itemprop="description">
            {{ page.frontmatter.summary || page.summary }}
          </p>

          <footer>
            <time
              v-if="page.frontmatter.date"
              pubdate
              itemprop="datePublished"
              :datetime="page.frontmatter.date"
              class="card-post_footer-meta"
            >
              <ClockIcon />
              {{ resolvePostDate(page.frontmatter.date) }}
            </time>

            <div
              v-if="page.frontmatter.tags"
              itemprop="keywords"
              class="card-post_footer-meta"
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
      </article>
    </div>
  </div>
</template>

<script>
/* global THEME_BLOG_PAGINATION_COMPONENT */

import Vue from "vue";
import { NavigationIcon, ClockIcon, TagIcon } from "vue-feather-icons";
import {
  Pagination,
  SimplePagination,
} from "@vuepress/plugin-blog/lib/client/components";

export default {
  components: { NavigationIcon, ClockIcon, TagIcon },

  data() {
    return {
      paginationComponent: null,
    };
  },

  computed: {
    pages() {
      return this.$pagination.pages;
    },
    tags() {
      return this.$tag.list;
    },
  },

  created() {
    this.paginationComponent = this.getPaginationComponent();
  },

  methods: {
    getPaginationComponent() {
      const n = THEME_BLOG_PAGINATION_COMPONENT;
      if (n === "Pagination") {
        return Pagination;
      }

      if (n === "SimplePagination") {
        return SimplePagination;
      }

      return Vue.component(n) || Pagination;
    },

    postsTag(tag) {
      return this.$themeConfig.frontmatters[0].path + tag || `/posts/${tag}`;
    },

    resolvePostDate(date) {
      let formatDate = new Date(date.trim()).toLocaleDateString(undefined, {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
      });
      return formatDate;
    },

    resolvePostTags(tags) {
      if (!tags || Array.isArray(tags)) return tags;
      return [tags];
    },
  },
};
</script>

<style lang="stylus">
.list-content
  padding-top 15px

  .list-posts_title
    color $primary
    text-align center

.list-posts
  display grid
  justify-items center
  padding 15px
  gap 15px

  .card-post
    background-color $bgPosts

    .card-post_content
      padding 15px
      display grid
      gap 10px

      .card-post_title
        font-size 1.33em

      .card-post_summary
        font-size 14px
        font-weight 200

      .card-post_footer-meta
        font-size 12px
        line-height 14px
        display inline-flex
        align-items center

        svg
          width 14px
          height 14px
          margin-right 5px

@media (min-width $MQMobileNarrow)
  .list-posts
    grid-template-columns repeat(2, 1fr)
</style>
