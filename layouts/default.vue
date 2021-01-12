<template>
  <div>
    <Navbar />
    <nuxt />
    <Footer
      class="bg--blue text--white"
      name="JDIZM"
      :logo-src="imgSrc"
      :address="['']"
      :social="[
        { name: 'twitter', path: 'https://twitter.com/JDIZM', iconClass: 'fab fa-twitter-square', aria: 'twitter'},
        { name: 'linkedin', path: 'https://www.linkedin.com/in/james-donnelly-a52ab6a0/', iconClass: 'fab fa-linkedin', aria: 'linkedin'},
        { name: 'github', path: 'https://github.com/JDIZM/', iconClass: 'fab fa-github', aria: 'github'}
      ]"
      :privacy="''"
    />
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'
// import Footer from '@/components/Footer.vue'
import Footer from '@/storybook/stories/organisms/Footer.vue'
// import firebase from '@/plugins/firebase'
export default {
  name: 'Default',
  components: {
    // Logo
    Navbar,
    Footer
  },
  data () {
    return {
      imgSrc: require('~/assets/logo.png')
    }
  },
  head () {
    return {
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

// html {
// width: 100%;
// }

</style>
