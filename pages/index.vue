<template>
  <div class="container">
    <div>
      <h1>FREELANCE WEB DEVELOPER</h1>
      <h2>JAMES DONNELLY</h2>
    </div>
    <div>
      <p>
        Hey, I'm <span class="text--highlight">James Donnelly.</span> A freelance web developer based in Manchester.
      </p>
      <p>
        I build bespoke user interfaces, websites and web applications with JavaScript. Building systems and processes that add value to my clients businesses is my passion.
      </p>
      <div>
        <nuxt-link to="/contact/">
          <Button
            type="submit"
            label="GET IN TOUCH"
            outline
            @onClick="onClick"
          />
        </nuxt-link>
      </div>
    </div>
    <Skills />
    <Experience
      :experience="experience"
    />
    <!-- TODO services -->
  </div>
</template>

<script>
import Skills from '@/components/Skills'
import Experience from '@/components/Experience'
import Button from '@/storybook/stories/atoms/Button.vue'
/* eslint-disable */ 
// eslint-disable-next-line
// console.log('***************')
// console.log('built by @JDIZM')
// console.log('***************')
export default {
  components: {
    Skills,
    Experience,
    Button
  },
  data () {
    return {
      title: 'Freelance Web Developer Manchester | James Donnelly',
      description: 'Freelance web developer based in Manchester. Experienced with building bespoke user interfaces, websites and web applications.',
      experience: [
        {
          date: "2019 - Now",
          location: "Freelance",
          position: "Web Developer",
          info: "Building user interfaces, websites and web applications that humans love to use",
          time: '2 years'
        },
        {
          date: "2014 - 2019",
          location: "Baked Digital",
          position: "Digital Marketing",
          info: "Paid Ads, Organic Search. Lead generation with WordPress based websites for SMB's",
          time: '5 years'
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
  },
  methods: {
    onClick() {
      // 
      console.log('click')
    }
  }
}
</script>

<style scoped>
/*  */
</style>
