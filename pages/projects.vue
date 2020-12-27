<template>
  <div class="container">
    <h1>PROJECTS</h1>
    <!-- TODO dynamic image loaded https://nuxtjs.org/guide/assets/ -->
    <div v-for="(project, a) in projects" :key="a" class="project">
      <!-- <div :style="{ backgroundImage: 'url(' + project.img + ')' }" class="project__img" /> -->
      <div class="project__img">
        <!-- <img src="@/assets/weather_app.svg" alt=""> -->
        <img :src="project.img" alt="">
      </div>
      <header>
        <h4 class="project__title">
          {{ project.name.toUpperCase() }}
        </h4>
        <div class="project__title__highlight bg--yellow" />
      </header>
      <p v-if="project.overview">
        {{ project.overview }}
      </p>
      <ul class="skill__list">
        <li v-for="(skill) in project.skills" :key="skill" class="skill__list__item">
          {{ skill }}
        </li>
      </ul>
      <div class="mb--2">
        <a :href="project.live">
          <button class="btn btn--primary">
            LIVE
          </button>
        </a>
        <a :href="project.git">
          <button class="btn btn--secondary">
            GITHUB
          </button>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import json from '~/assets/projects.json'

export default {
  components: {
    //
  },
  data () {
    return {
      title: 'Projects!',
      url: this.$route.fullPath,
      // import the projects with json instead
      // projects: [
      //   { name: 'project name', slug: '/project-url', img: '/assets/img.jpg', skills: ['html', 'css', 'js', 'vue', 'nuxt', 'firebase'] }
      // ]
      projects: json.projects // imported json
    }
  },
  head () {
    return {
      title: this.title,
      meta: [
        // hid is used as unique identifier. Do not use `vmid` for it as it will not work
        { hid: 'description', name: 'description', content: 'About page description' },
        { hid: 'og:url', name: 'og:url', content: this.$route.path },
        { hid: 'og:image', name: 'og:image', content: 'https://i.imgur.com/9lSpJi6.jpg' }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
// .project {
//  background: url('~assets/img.jpeg')
// }

.project {
  border-radius: 4px;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.2);
  padding: 0.5rem;
  position: relative;
  text-align: left;
  z-index: 0;
}

.project__img {
  height: 100%;
  width:100%;
  filter: grayscale(0.9);
  img {
    border-radius: 4px;
    max-height: 400px;
    width: 100%;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }
}
.project__img:hover {
  filter: grayscale(0);
}
.project__title {
  position: relative;
  margin-top: 1rem;
  z-index: 2;
}
.project__title__highlight {
  position: relative;
  top: -1rem;
  left: -0.5rem;
  height: 1.5rem;
  max-width: 60%;
  // width: 60%;
  // z-index: 1;
}

.skill__list {
  display: flex;
  padding-left: 1rem;
  list-style: square;
}

.skill__list__item {
  flex: 1 1 auto;
  // padding-left: 0.5rem;
  // list-style: square;
}

</style>
