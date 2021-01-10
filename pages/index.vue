<template>
  <div class="container">
    <div>
      <h1>FREELANCE WEB DEVELOPER</h1>
      <h2>JAMES DONNELLY</h2>
    </div>
    <div>
      <p class="m--2 text--left">
        Hey, I'm <span class="text--highlight">James Donnelly.</span> A freelance web developer based in Manchester.
      </p>
      <p class="m--2 text--left">
        I build bespoke user interfaces, websites and web applications with JavaScript.
      </p>
      <p class="m--2 text--left">
        Building systems and processes that add value to my clients businesses is my passion. Most business owners are too busy putting out fires on a daily basis.
      </p>
      <p class="m--2 text--left">
        I'm here to help.
      </p>
      <div class="text--left">
        <p class="m--2 text--left">
          If you've got a project you think i'd be a great fit for then why not...
        </p>
        <nuxt-link to="/contact">
          <button class="m--2 btn btn--primary">
            GET IN TOUCH
          </button>
        </nuxt-link>
      </div>
    </div>
    <Skills />
    <Experience
      :experience="experience"
    />
  </div>
</template>

<script>
import Skills from '@/components/Skills'
import Experience from '@/components/Experience'
/* eslint-disable */ 
// eslint-disable-next-line
// console.log('***************')
// console.log('built by @JDIZM')
// console.log('***************')
export default {
  components: {
    Skills,
    Experience
  },
  data () {
    return {
      title: 'Freelance Web Developer Manchester | James Donnelly',
      description: 'Freelance web developer based in Manchester. Experienced with building bespoke user interfaces, websites and web applications.',
      experience: [
        {
          date: "April 2019",
          location: "Baked Digital",
          position: "Frontend Web Developer",
          info: "Building user interfaces, websites and web applications that humans love to use"
        }
      ]
    }
  },
  // this will overwrite the default.vue data if there are duplicates.
  head () {
    return {
      title: this.title,
      meta: [
        // hid is used as unique identifier. Do not use `vmid` for it as it will not work
        { hid: 'description', name: 'description', content: this.description },
        { hid: 'og:description', name: 'og:description', property: 'og:description', content: this.description },
        { hid: 'og:url', name: 'og:url', content: process.env.NUXT_HOST + this.$route.path },
        { hid: 'og:image', name: 'og:image', content: process.env.NUXT_HOST + '/logo.jpg' }
      ]
    }
  // TODO LOCAL SCHEMA 
  }
}
</script>

<style scoped>
/*  */
</style>
