<template>
  <div id="site-container">
    <Header
      :is-open="isMobileHeaderOpen"
      @toggle-sidebar="isMobileHeaderOpen = !isMobileHeaderOpen"
    />
    <DefaultGlobalLayout
      class="site-content"
      @click="isMobileHeaderOpen = false"
    />
    <Footer />
  </div>
</template>

<script>
import GlobalLayout from "@app/components/GlobalLayout.vue";
import Header from "@theme/components/Header.vue";
import Footer from "@theme/components/Footer.vue";

export default {
  components: {
    DefaultGlobalLayout: GlobalLayout,
    Header,
    Footer,
  },

  data() {
    return {
      isMobileHeaderOpen: false,
    };
  },

  mounted() {
    this.$router.afterEach(() => {
      this.isMobileHeaderOpen = false;
    });
  },
};
</script>

<style lang="stylus">
#site-container
  display grid
  grid-template-rows 60px 1fr 80px
  min-height 100vh
</style>
