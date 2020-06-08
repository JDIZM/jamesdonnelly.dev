<template>
  <div class="hero">
    <div class="hero__inner">
      <h2 class="hero__title text--black">{{ title }}</h2>
      <div class="hero__bar bg--yellow" />
      <p class="text-black">{{ sub }}</p>
    </div>
    <div class="hero__inner">
      <h2 class="hero__title text--black">YES I KNOW RIGHT</h2>
      <div class="hero__bar bg--yellow" />
      <p class="text-black">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque eligendi quo odit similique esse earum numquam ex consequatur iste quia, illo tempora nulla quas mollitia reiciendis vero. Laboriosam, modi quia.</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Hero',
  props: {
    title: {
      type: String,
      required: true
    },
    sub: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
.hero {
  position: relative;
  width: 100%;
  // max-height: 45vh;
  text-align: left;
}
.hero__inner {
  padding: 1rem;
}
.hero__title {
  position: relative;
  z-index: 1;
}
.hero__bar {
  position: relative;
  top: -1.5rem;
  left: -0.5rem;
  height: 32px;
  width: 35%;
  z-index: 0;
}
</style>
