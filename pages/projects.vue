<template>
  <div class="container pt--8">
    <h1>PROJECTS</h1>
    <div v-for="(project, a) in projects" :key="a" class="project mb--4">
      <div class="project__img">
        <img :src="imgSrc(project.img)" :alt="project.name">
      </div>
      <header>
        <h4 class="project__title">
          {{ project.name.toUpperCase() }}
        </h4>
        <div class="project__title__highlight bg--yellow mb--2" />
      </header>
      <p v-if="project.overview">
        {{ project.overview }}
      </p>
      <ul class="skill__list">
        <li v-for="(skill) in project.skills" :key="skill" class="skill__list__item">
          <span class="material-icons">check_circle</span><span>{{ skill }}</span>
        </li>
      </ul>
      <div class="mb--2">
        <a :href="project.live">
          <Button
            type="submit"
            label="LIVE"
            primary
          />
        </a>
        <a v-if="project.git" :href="project.git">
          <Button
            type="submit"
            label="GIT"
            outline
          />
        </a>
      </div>
    </div>
    <Callout />
  </div>
</template>

<script>
import Button from '@/storybook/stories/atoms/Button.vue'
import Callout from '@/components/Callout.vue'
import json from '~/assets/projects.json'
export default {
  components: {
    //
    Callout,
    Button
  },
  data () {
    return {
      title: 'Projects | Freelance Web Developer Manchester',
      description: 'Freelance web developer based in Manchester. Experienced with building bespoke user interfaces, websites and web applications.',
      url: this.$route.fullPath,
      projects: json.projects // imported json
    }
  },
  head () {
    return {
      title: this.title,
      meta: [
        // hid is used as unique identifier. Do not use `vmid` for it as it will not work
        { hid: 'title', name: 'title', content: this.title },
        { hid: 'og:title', property: 'og:title', content: this.title },
        { hid: 'description', name: 'description', content: this.description },
        { hid: 'og:description', name: 'og:description', property: 'og:description', content: this.description }
      ]
    }
  },
  methods: {
    imgSrc (img) {
      return require('@/assets/projects/' + img)
    }
  }
}
</script>

<style lang="scss" scoped>
.project {
  border-radius: 4px;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.2);
  padding: 0.5rem;
  position: relative;
  text-align: left;
  z-index: 0;
  max-width: 600px;
  p {
    margin-bottom: 1rem;
  }
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
    top: -0.5rem;
    left: 0rem;
    height: 0.5rem;
    max-width: 250px;
}

.skill__list {
  display: flex;
  flex-direction: column;
  padding-left: 0;
  list-style: none;
  @media screen and (min-width: 500px ){
    flex-direction: row;
  }
  li {
    margin-bottom: 0.5rem;
  }
  span {
    padding-right: 0.5rem;
    vertical-align: middle;
  }
}

.skill__list__item {
  flex: 1 1 auto;
}

</style>
