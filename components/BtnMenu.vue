<template>
  <button
    class="hamburger"
    :class="{ 'is-active': active }"
    type="button"
    @click="active = !active"
  >
    <span class="hamburger-box">
      <span class="hamburger-inner"></span>
    </span>
  </button>
</template>

<script>
export default {
  name: "BtnMenu",
  data() {
    return {
      active: false,
    };
  },
};
</script>

<style lang="stylus">
.hamburger
  cursor pointer
  background-color transparent
  border 0

  &:hover
    opacity 0.7

  .hamburger-box
    position relative

    .hamburger-inner
      display block
      top 50%
      margin-top -2px
      background-color $primary
      transition-duration 0.2s
      width 40px
      height 4px
      border-radius 4px
      position absolute
      &::before,
      &::after
        content ""
        display block
        background-color $primary
        width 40px
        height 4px
        border-radius 4px
        position absolute

      &::before
        top -10px

      &::after
        bottom -10px

/*********** Active State ***************/

.hamburger.is-active
  .hamburger-inner
    transform rotate(765deg)
    background-color $primary

  .hamburger-inner::before
    opacity 0

  .hamburger-inner::after
    bottom 0
    transform rotate(90deg)
</style>
