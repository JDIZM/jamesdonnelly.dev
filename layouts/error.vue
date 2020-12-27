<template>
  <div class="error container notfound pb--4">
    <h1>404</h1>
    <h2>HELLO, IS IT ME YOUR LOOKING FOR?</h2>
    <div class="img-wrapper">
      <img :src="imgSrc">
    </div>
  </div>
</template>

<script>
export default {
  name: 'Error',
  data () {
    return {
      imgSrc: require('@/assets/lionel-richie.jpg')
    }
  }
}
</script>

<style lang="scss" scoped>
.img-wrapper, img {
  width: 100%;
  height: 100%;
  border-radius: 50%
}
.notfound {
  max-width: 900px;
  margin: auto;
  width: 90%;
  min-height: 70vh;
}
</style>
