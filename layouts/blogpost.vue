<template>
  <div>
    <Navbar />
    <!-- <h2> post layout </h2> -->
    <nuxt />
    <Footer />
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'
import Footer from '@/components/Footer.vue'
// import firebase from '@/plugins/firebase'

export default {
  name: 'BlogPost',
  components: {
    // Logo
    Navbar,
    Footer
  },
  head () {
    return {
      title: this.title,
      meta: [
        // hid is used as unique identifier. Do not use `vmid` for it as it will not work
        { hid: 'description', name: 'description', content: 'Freelance web developer based in Manchester. Experienced with building bespoke user interfaces, websites and web applications.' },
        { hid: 'og:url', name: 'og:url', content: process.env.NUXT_HOST + this.$route.path },
        { hid: 'og:image', name: 'og:image', content: process.env.NUXT_HOST + '/logo.png' }
      ],
      link: [
        {
          rel: 'canonical',
          href: process.env.NUXT_HOST + this.$route.path
        }
      ]
    }
  },
  created () {
    // https://nuxtjs.org/faq/window-document-undefined/
    // load firebase analytics
    // if (process.client) {
    //   firebase.analytics()
    // }
  }
}
</script>

<style lang="scss" scoped>

</style>
