<template>
  <div class="container">
    <!-- <Hero title="FRONTEND WEB DEVELOPER" sub="With a site that's still not finished. SMH." /> -->
    <Title title="FRONTEND WEB DEVELOPER" sub="With a background in digital, I've pivoted towards frontend." />
    <Title
      title="MANCHESTER"
    />
    <p class="m--2 text--left">Since ~March 2019 I've focused 100% on JS, Vue & Nuxt.js while developing my frontend skills.</p>
    <p class="m--2 text--left"> I am skilled in all areas from setting up and configuring servers (linux, digitalocean, aws, gcp) to building my own sales funnels and creating landing pages.</p>
    <Skills />
    <!-- <div>
      <ul>
        <li
          v-for="(data, i) in cv"
          :key="i"
        >
          {{ data }}
        </li>
      </ul>
      <nuxt-link to="/about">
        <button class="btn btn--primary" @click="showModal = true">
          primary
        </button>
      </nuxt-link>
      <button class="btn btn--secondary">
        secondary
      </button>
      <ul>
        <li
          v-for="(service, i) in services"
          :key="i"
        >
          {{ service }}
        </li>
      </ul>
      <ul>
        <li
          v-for="(skill, i) in skills"
          :key="i"
        >
          {{ skill }}
        </li>
      </ul>
      <div>
        <p>show the modal</p>
        <button class="btn btn--primary" @click="showModal = true">
          SHOW MODAL
        </button>
        <Modal :show="showModal" @close="showModal = false" />
      </div>
      <Toast :show="showToast" :class="{ active: showToast }" @toastTimeout="showToast = false" />
    </div> -->
  </div>
</template>

<script>
import json from '~/assets/cv.json'
import Modal from '@/components/ui/Modal'
import Toast from '@/components/ui/Toast'
import Hero from '@/components/Hero'
import Skills from '@/components/Skills'
import Title from '@/components/ui/Title'
/* eslint-disable */ 
// eslint-disable-next-line
console.log('***************')
console.log('built by @JDIZM')
console.log('***************')
export default {
  components: {
    // Logo
    // Navbar
    Modal,
    Toast,
    Hero,
    Skills,
    Title
  },
  data () {
    return {
      showModal: false, // show modal, listen for this event on child component,
      showToast: false, // use toast--active class to change the style instead
      title: 'Hello World!',
      cv: json,
      services: [
        'frontend development',
        'web development',
        'digital marketing',
        'conversion optimisation'
      ],
      skills: [
        'html',
        'css',
        'javascript',
        'vue.js',
        'nuxt.js',
        'd3.js'
      ]
    }
  },
  // this will overwrite the default.vue data if there are duplicates.
  head () {
    return {
      title: this.title,
      meta: [
        // hid is used as unique identifier. Do not use `vmid` for it as it will not work
        //TODO create custom variables for this pages meta data
        { hid: 'description', name: 'description', content: 'Home page description' },
        { hid: 'og:url', name: 'og:url', content: process.env.NUXT_HOST + this.$route.path },
        { hid: 'og:image', name: 'og:image', content: process.env.NUXT_HOST + '/logo.jpg' }
      ]
    }

  //     script: [{
  //       type: 'application/ld+json',
  //       json: {
  //         '@context': 'http://schema.org',
  //         '@type': 'LocalBusiness',
  //         'name': 'Baked Digital',
  //         'image': 'https://baked.digital/logo.jpg',
  //         '@id': '',
  //         'url': 'https://baked.digital',
  //         'telephone': '+441615190814',
  //         'address': {
  //           '@type': 'PostalAddress',
  //           'streetAddress': 'Ziferblat, 23 Edge St',
  //           'addressLocality': 'Manchester',
  //           'postalCode': 'M4 1HW',
  //           'addressCountry': 'GB'
  //         },
  //         'geo': {
  //           '@type': 'GeoCoordinates',
  //           'latitude': 53.48448,
  //           'longitude': -2.2364689999999428
  //         },
  //         'sameAs': [
  //           'https://www.facebook.com/baked.digital/',
  //           'https://twitter.com/bakeddigital',
  //           'https://www.instagram.com/baked.digital/',
  //           'https://www.linkedin.com/company/baked-digital/'
  //         ]
  //       }
  //     }]
  //   }
  // }
  // metaInfo: {
  //   title: 'INDEX',
  //   meta: [
  //     { charset: 'utf-8' },
  //     {
  //       property: 'og:title',
  //       content: 'Test title',
  //       // following template options are identical
  //       // template: '%s - My page',
  //       template: chunk => `${chunk} - My page`,
  //       vmid: 'og:title'
  //     }
  //   ]
  // }
  }
}
</script>

<style scoped>
/* .main {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
} */
/* .container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
} */
/* //TODO styling works! but it isn't importing default colours */
/* .v-card {
    background-color: #FF5733;
}
.theme--light.v-sheet {
  background-color: #FF5733;
} */

</style>
