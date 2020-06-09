<template>
  <header class="title">
    <div class="title__inner">
      <h2 class="title__title text--black">{{ title }}</h2>
      <div class="title__bar bg--yellow" />
      <p v-if="sub" class="text-black">{{ sub }}</p>
    </div>
  </header>
</template>

<script>
export default {
  name: 'Title',
  props: {
    title: {
      type: String,
      required: true
    },
    sub: {
      type: String,
      required: false,
      default: ''
    }
  }
}
</script>

<style lang="scss" scoped>
.title {
  position: relative;
  width: 100%;
  // max-height: 45vh;
  text-align: left;
}
.title__inner {
  padding: 1rem;
}
.title__title {
  position: relative;
  z-index: 1;
}
.title__bar {
  position: relative;
  top: -1.5rem;
  left: -0.5rem;
  height: 32px;
  width: 35%;
  z-index: 0;
}
</style>
