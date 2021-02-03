<template>
  <picture class="image">
    <img
      :src="imgSrc"
      alt="image"
      draggable="false"
    >
  </picture>
</template>

<script>
// TODO dynamic image component with optimised sizes
export default {
  name: 'VImg',
  props: {
    src: {
      type: String,
      required: true
    },
    alt: {
      type: String,
      required: true
    }
  },
  data () {
    return {
      //
      // imgSrc: require('~/assets/blog/' + this.img)
    }
  },
  computed: {
    imgSrc () {
      return require(`~/assets/blog/${this.src}`)
    }
  }
}
</script>

<style lang="scss" scoped>
picture {
  // width: 288px;
  // height: 188px;
  width: 100%;
  height: 100%;
  margin: auto;
  display: flex;
  img {
    width: 100%;
    height: 100%;
    // max-width: 288px;
    // max-height: 188px;
    margin: auto;
    object-fit: contain;
  }
}
</style>
