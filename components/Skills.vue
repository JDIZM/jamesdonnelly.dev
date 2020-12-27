<template>
  <section class="skills">
    <h2>TECH STACK</h2>
    <div class="skills__grid">
      <div v-for="(skill, i) in skills" :key="i" class="skills__item">
        <img :src="skill.img" alt="" style="height:75px;width:75px;">
        <p> {{ skill.name.toUpperCase() }}</p>
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
  // display: flex;
  // flex-direction: column;
  text-align: left;
  display: grid;
  grid-template-columns: 1fr 1fr;
  @media screen and (min-width:768px) {
    // flex-direction: row;
    grid-template-columns: 1fr 1fr 1fr;
  }
  margin: 1rem 0;
}
.skills__item {
  flex: 1 1 auto;
  margin: 1rem;
}
</style>
