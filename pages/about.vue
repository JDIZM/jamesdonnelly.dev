<template>
  <div class="container">
    <section class="bg--red p--4 full-width text--white">
      <header>
        <h1>ABOUT PAGE</h1>
        <h2 class="m--1">This is a section header.</h2>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque, quos? Debitis laborum harum laboriosam enim eveniet iusto numquam, cupiditate eum et fugit eius qui dignissimos dolorum. Numquam iure molestias nam?</p>
      </header>
    </section>
    <section class="bg--white p--4 full-width text--black">
      <header>
        <h2 class="m--1">This is a section header.</h2>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque, quos? Debitis laborum harum laboriosam enim eveniet iusto numquam, cupiditate eum et fugit eius qui dignissimos dolorum. Numquam iure molestias nam?</p>
      </header>
    </section>
  </div>
</template>

<script>

export default {
  components: {

  },
  data () {
    return {
      title: 'About!',
      url: this.$route.fullPath
    }
  },
  head () {
    return {
      title: this.title,
      meta: [
        // hid is used as unique identifier. Do not use `vmid` for it as it will not work
        { hid: 'description', name: 'description', content: 'About page description' },
        { hid: 'og:url', name: 'og:url', content: this.$route.path },
        { hid: 'og:image', name: 'og:image', content: 'https://i.imgur.com/9lSpJi6.jpg' }
      ]
    }
  }
}

</script>

<style lang="scss" scoped>
.container {
  width: 100%;
}

header {
  margin: auto;
  width: 80%;
  text-align: center;
}
</style>
