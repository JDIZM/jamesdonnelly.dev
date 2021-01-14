<template>
  <picture class="image">
    <img
      :srcset="imgSrc"
      alt="image"
      draggable="false"
    >
  </picture>
</template>

<script>
// TODO dynamic image component with optimised sizes
export default {
  name: 'DynamicImage',
  props: {
    img: {
      type: String,
      required: true
    }
  },
  data () {
    return {
      //
      imgSrc: require('~/assets/' + this.img)
    }
  },
  computed: {
    // getImg () {
    //   //
    //   const path = this.img
    //   const i = require(`../assets${path}`)
    //   return i // the module request
    // }
  }
}
</script>

<style lang="scss" scoped>
picture {
  width: 288px;
  height: 188px;
  margin: auto;
  display: flex;
  img {
    width: 100%;
    height: 100%;
    max-width: 288px;
    max-height: 188px;
    margin: auto;
    object-fit: contain;
  }
}
</style>
