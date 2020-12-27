<template>
  <div>
    <Navbar />
    <nuxt />
    <Footer />
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'
import Footer from '@/components/Footer.vue'
import firebase from '@/plugins/firebase'
export default {
  components: {
    // Logo
    Navbar,
    Footer
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
    //   script: [{
    //     type: 'application/ld+json',
    //     json: {
    //       '@context': 'http://schema.org',
    //       '@type': 'LocalBusiness',
    //       'name': 'Baked Digital',
    //       'image': 'https://baked.digital/logo.jpg',
    //       '@id': '',
    //       'url': 'https://baked.digital',
    //       'telephone': '+441615190814',
    //       'address': {
    //         '@type': 'PostalAddress',
    //         'streetAddress': 'Ziferblat, 23 Edge St',
    //         'addressLocality': 'Manchester',
    //         'postalCode': 'M4 1HW',
    //         'addressCountry': 'GB'
    //       },
    //       'geo': {
    //         '@type': 'GeoCoordinates',
    //         'latitude': 53.48448,
    //         'longitude': -2.2364689999999428
    //       },
    //       'sameAs': [
    //         'https://www.facebook.com/baked.digital/',
    //         'https://twitter.com/bakeddigital',
    //         'https://www.instagram.com/baked.digital/',
    //         'https://www.linkedin.com/company/baked-digital/'
    //       ]
    //     }
    //   }]
    }
  },
  created () {
    // https://nuxtjs.org/faq/window-document-undefined/
    // load firebase analytics
    if (process.client) {
      firebase.analytics()
    }
  }
}
</script>

<style lang="scss" scoped>

/* html {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
} */
html {
width: 100%;
}
/* *,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
} */
</style>
