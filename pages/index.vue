<template>
  <div class="container">
    <section class="pt--8">
      <h1>Hey! I'm James Donnelly</h1>
      <h2>
        A Manchester-based web developer who loves to build bespoke user interfaces, websites and web applications with JavaScript.
      </h2>
    </section>
    <div class="intro-text">
      <span class="mb--3">
        Building systems and processes that add value to my clients' business is my passion.
      </span>
    </div>
    <div class="mb--3">
      <nuxt-link to="/projects/">
        <Button
          type="submit"
          label="SEE MY WORK"
          outline
          @onClick="onClick"
        />
      </nuxt-link>
    </div>
    <Services />
    <Skills />
    <Experience
      :experience="experience"
      class="pb--4"
    />
    <Callout />
  </div>
</template>

<script>
import Skills from '@/components/Skills'
import Callout from '@/components/Callout'
import Services from '@/components/Services'
import Experience from '@/components/Experience'
import Button from '@/storybook/stories/atoms/Button.vue'
/* eslint-disable */ 
// eslint-disable-next-line
// console.log('***************')
// console.log('built by @JDIZM')
// console.log('***************')
export default {
  components: {
    Services,
    Callout,
    Skills,
    Experience,
    Button,
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

<style lang="scss" scoped>
/*  */
.intro-text {
  font-size: 1.75rem;
  font-weight: 400;
  margin-bottom: 1.5rem;
  // @media screen and (min-width: 1200px) {
  // //
  //   font-size: 2.5rem;
  // };
}
</style>
