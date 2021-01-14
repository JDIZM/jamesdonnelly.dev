<template>
  <section class="skills">
    <h3>TECH STACK</h3>
    <p>
      My current tech stack utilises Vue, Nuxt &amp; Vuex. However I don’t believe in a one size fits all approach that’s why I treat each project differently.
    </p>
    <p>
      With a penchant for JAMstack and the serverless approach to development. Lately I've been using node based cloud functions to handle my backend. My CSS is compiled with
      SASS and BEM using storybook to maintain my own UI library.
    </p>
    <p>
      I’m mainly client focused but I can handle all aspects of the development cycle from front-end development of user interfaces to back-end development of databases and server infrastructure.
    </p>
    <div class="skills__grid">
      <div v-for="(skill, i) in skills" :key="i" class="skills__grid__item">
        <img :src="skill.img" :alt="skill.name" width="75px" height="75px">
        <!-- <p>{{ skill.name.toUpperCase() }}</p> -->
      </div>
      <!-- <img src="~/assets/logos/webpack.svg" alt="" style="height:50px;width:50px"> -->
    </div>
  </section>
</template>

<script>
export default {
  name: 'Skills',
  data () {
    return {
      skills: [
        { name: 'JS', img: '/logos/js.svg' },
        { name: 'Vue', img: '/logos/vue.svg' },
        { name: 'Nuxt', img: '/logos/nuxt.svg' },
        { name: 'SASS', img: '/logos/sass.svg' },
        { name: 'Node', img: '/logos/node.svg' },
        { name: 'Webpack', img: '/logos/webpack.svg' }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.skills {
  width: 100%;
}
.skills__grid {
  text-align: left;
  display: grid;
  grid-template-columns: 1fr 1fr;
  @media screen and (min-width: 680px) {
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
  }
  margin: 1rem 0;
}
.skills__grid__item {
  // flex: 1 1 auto;
  padding: 1rem;
  display: flex;
  align-items: center;
  flex-direction: column;
}
h3 {
  margin-bottom: 1.5rem;
}
</style>
