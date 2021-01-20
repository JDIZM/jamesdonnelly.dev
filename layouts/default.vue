<template>
  <div>
    <!-- <Navbar /> -->
    <NavMain
      :links="links"
      phone=""
      :logo-src="imgSrc"
      :show-drawer="showDrawer"
      :show-dropdown="showDropdown"
      :dropdown-items="dropdownItems"
      :show-buttons="false"
      @onShowDrawer="showDrawer = !showDrawer"
      @onDropdown="showDropdown = !showDropdown"
      @onReset="showDropdown = false, showDrawer = false"
      @onCloseDrawer="showDrawer = false"
      @onEnquire="onEnquire"
    />
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
import NavMain from '@/storybook/stories/organisms/nav/NavMain.vue'
// import Navbar from '@/components/Navbar.vue'
// import Footer from '@/components/Footer.vue'
import Footer from '@/storybook/stories/organisms/Footer.vue'
// import firebase from '@/plugins/firebase'
export default {
  name: 'Default',
  components: {
    // Logo
    NavMain,
    Footer
  },
  data () {
    return {
      imgSrc: require('~/assets/logo.png'),
      showDrawer: false,
      showDropdown: false,
      dropdownItems: [],
      links: [
        { path: '/', name: 'Home' },
        { path: '/projects/', name: 'Work' },
        { path: '/blog/', name: 'Blog' },
        { path: '/contact/', name: 'Contact' }
        // { name: 'Dropdown'}
      ]
    }
  },
  head () {
    return {
      meta: [
        // hid is used as unique identifier. Do not use `vmid` for it as it will not work
        { hid: 'description', name: 'description', content: 'Freelance web developer based in Manchester. Experienced with building bespoke user interfaces, websites and web applications.' },
        { hid: 'og:description', name: 'og:description', property: 'og:description', content: 'Freelance web developer based in Manchester. Experienced with building bespoke user interfaces, websites and web applications.' },
        { hid: 'og:url', name: 'og:url', content: process.env.NUXT_HOST + this.$route.path },
        { hid: 'og:image', name: 'og:image', content: process.env.NUXT_HOST + '/laravel_and_vue.svg' },
        { hid: 'og:type', name: 'og:type', property: 'og:type', content: 'website' },
        { hid: 'twitter:card', name: 'twitter:card', property: 'twitter:card', content: process.env.NUXT_HOST + '/laravel_and_vue.svg' }
      ],
      link: [
        {
          rel: 'canonical',
          href: process.env.NUXT_HOST + this.$route.path
        }
      ]
      // TODO LOCAL SCHEMA
    }
  },
  created () {
    // https://nuxtjs.org/faq/window-document-undefined/
    // load firebase analytics
    // if (process.client) {
    //   firebase.analytics()
    // }
  },
  methods: {
    onEnquire () {
      this.$router.push({
        path: '/contact/'
      })
    }
  }
}
</script>

<style lang="scss" scoped>
//
</style>
