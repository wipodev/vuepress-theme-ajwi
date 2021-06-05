<template>
  <div class="btn">
    <a :href="url" class="btn-a">Suscribete -></a>
  </div>
</template>

<script>
export default {
  props: {
    url: {
      type: String,
      default: '',
    },
  },
}
</script>

<style lang="stylus">
.btn
  background-color $bgButtom
  height 44px
  width 10em
  margin auto

  .btn-a
    display block
    height inherit
    box-sizing border-box
    background-color $buttomColor
    color $textColor
    text-decoration none
    transform translate(-8px, -8px)
    transition: .25s ease;
    padding 10px
    font-weight 800

    &:hover
      color $textColor
      transform translate(0, 0)
</style>
