<template>
  <div class="error container notfound pb--4 pt--2">
    <h1>404</h1>
    <h2>HELLO, IS IT ME YOUR LOOKING FOR?</h2>
    <div class="img-wrapper mb--3">
      <img :src="imgSrc">
    </div>
    <p>The page you are looking for wasn't found.</p>
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
  width: 300px;
  height: 300px;
  border-radius: 50%
}
.notfound {
  max-width: 900px;
  margin: auto;
  width: 90%;
  min-height: 80vh;
}
</style>
