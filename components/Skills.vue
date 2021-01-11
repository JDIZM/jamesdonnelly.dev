<template>
  <section class="skills">
    <h3>TECH STACK</h3>
    <p>
      My current tech stack utilises Vue, Nuxt & Vuex. <br>
      I’m a fan of JAMstack and take a serverless approach to development using
      Firebase as a backend with node based functions. My CSS is compiled with
      SASS and BEM using storybook to maintain my own UI library.
    </p>
    <div class="skills__grid">
      <div v-for="(skill, i) in skills" :key="i" class="skills__item">
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
  @media screen and (min-width: 768px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
  margin: 1rem 0;
}
.skills__item {
  // flex: 1 1 auto;
  margin: 1rem;
  display: flex;
  align-items: center;
  flex-direction: column;
}
</style>
