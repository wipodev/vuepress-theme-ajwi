<template>
  <footer class="site-footer">
    <nav class="site-footer_nav">
      <ul v-if="contact" class="contact">
        <li v-for="item in contact" :key="item.iconComponent">
          <router-link :to="item.link">
            <component :is="item.iconComponent"></component>
            {{ item.text }}
          </router-link>
        </li>
      </ul>
      <ul v-if="copyright" class="copyright">
        <li v-for="item in copyright" :key="item.text" class="copyright-item">
          <router-link v-if="item.link" :to="item.link">{{
            item.text
          }}</router-link>
          <template v-else>{{ item.text }}</template>
        </li>
      </ul>
    </nav>
  </footer>
</template>

<script>
import {
  CodepenIcon,
  CodesandboxIcon,
  FacebookIcon,
  GithubIcon,
  GitlabIcon,
  GlobeIcon,
  InstagramIcon,
  LinkedinIcon,
  MailIcon,
  MessageSquareIcon,
  MusicIcon,
  PhoneIcon,
  TwitterIcon,
  VideoIcon,
  YoutubeIcon,
} from "vue-feather-icons";

export default {
  components: {
    CodepenIcon,
    CodesandboxIcon,
    FacebookIcon,
    GithubIcon,
    GitlabIcon,
    GlobeIcon,
    InstagramIcon,
    LinkedinIcon,
    MailIcon,
    MessageSquareIcon,
    MusicIcon,
    PhoneIcon,
    TwitterIcon,
    VideoIcon,
    YoutubeIcon,
  },

  computed: {
    contact() {
      return (
        (this.$themeConfig.footer && this.$themeConfig.footer.contact) ||
        []
      )
        .map(({ type, link }) => {
          return {
            iconComponent: this.getIconComponentName(type),
            link,
          };
        })
        .filter(({ iconComponent }) => iconComponent);
    },

    copyright() {
      return (
        (this.$themeConfig.footer && this.$themeConfig.footer.copyright) || []
      );
    },
  },

  methods: {
    getIconComponentName(contactType) {
      switch (contactType) {
        case "codepen":
          return "CodepenIcon";
        case "codesandbox":
          return "CodesandboxIcon";
        case "facebook":
          return "FacebookIcon";
        case "github":
          return "GithubIcon";
        case "gitlab":
          return "GitlabIcon";
        case "instagram":
          return "InstagramIcon";
        case "linkedin":
          return "LinkedinIcon";
        case "mail":
          return "MailIcon";
        case "messenger":
          return "MessageSquareIcon";
        case "music":
          return "MusicIcon";
        case "phone":
          return "PhoneIcon";
        case "twitter":
          return "TwitterIcon";
        case "video":
          return "VideoIcon";
        case "web":
          return "GlobeIcon";
        case "youtube":
          return "YoutubeIcon";
        default:
          return "";
      }
    },
  },
};
</script>

<style lang="stylus">
ol, ul
  list-style none
  margin 0
  padding 0

.site-footer
  background-color $bgFooter
  padding 10px 15px
  font-size .9rem
  border-top 1px solid $border

  .site-footer_nav
    .contact
      display grid
      grid-template-columns repeat(auto-fit, 24px)
      gap 10px
      justify-content center

      a
        color $primary
        text-decoration none
        transition color 0.3s

        &:hover
          color $textColor

    .copyright
      display grid
      justify-items center
      color $textFooter
      font-size 0.8rem

      a
        color $textFooter
        transition color 0.3s

        &:hover
          color rgba($textColor, 0.9)
</style>
