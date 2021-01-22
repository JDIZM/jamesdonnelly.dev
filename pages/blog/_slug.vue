<template>
  <article class="post container pb--4 pt--8">
    <div v-for="(tag, i) in tags" :key="i" class="post__tags text--primary">
      <li> - {{ tag.toUpperCase() }}</li>
    </div>
    <div>
      <h1 class="post__title mt--1 mb--1">
        {{ title.toUpperCase() }}
      </h1>
    </div>
    <div class="post__date mb--2">
      - {{ date }}
    </div>
    <div class="post__author mb--4">
      <div class="post__author__img">
        <img alt="author image" height="60px" width="60px" :src="profile">
      </div>
      <div class="post__author__bio">
        <p class="m--1">
          James Donnelly
        </p>
        <p class="m--1">
          Freelance Web Developer
        </p>
      </div>
    </div>
    <!-- <p>this component loads markdown files from '@/content/blog/${this.slug}.md which is passed as props through route params</p> -->
    <component :is="dynamicComponent" v-if="dynamicComponent" />
  </article>
</template>

<script>
// this page needs to fetch markdown content based on the slug
// https://www.npmjs.com/package/frontmatter-markdown-loader
// https://hmsk.github.io/frontmatter-markdown-loader/vue.html
// this is loaded in nuxt config
export default {
  name: 'BlogPost',
  layout: 'blogpost', // use custom layout
  data () {
    return {
      title: null,
      thumbnail: null,
      profile: process.env.PROFILE_URL,
      slug: this.$route.params.slug,
      tags: [],
      date: null,
      excerpt: null,
      dynamicComponent: null
    }
  },
  head () {
    return {
      title: this.title,
      meta: [
        // hid is used as unique identifier. Do not use `vmid` for it as it will not work
        { hid: 'title', name: 'title', content: this.title },
        { hid: 'og:title', property: 'og:title', content: this.title },
        { hid: 'description', name: 'description', content: this.excerpt },
        { hid: 'og:description', property: 'og:description', content: this.excerpt },
        { hid: 'og:image', property: 'og:image', content: process.env.NUXT_HOST + this.imgSrc },
        {
          hid: 'og:image:secure_url',
          property: 'og:image:secure_url',
          content: process.env.NUXT_HOST + this.imgSrc
        },
        { hid: 'twitter:card', name: 'twitter:card', property: 'twitter:card', content: process.env.NUXT_HOST + this.thumbnail }
      ],
      link: [
        {
          rel: 'canonical',
          href: process.env.NUXT_HOST + this.$route.path
        }
      ]
    }
  },
  computed: {
    imgSrc () {
      return require('~/assets/blog' + this.thumbnail)
    }
  },
  created () {
    // get the post data from markdown files based on the slug which matches the filename
    const markdown = require(`@/content/blog/${this.slug}.md`) //
    this.title = markdown.attributes.title
    this.thumbnail = markdown.attributes.thumbnail
    this.tags = markdown.attributes.tags
    // this.date = Date.parse(markdown.attributes.date) // convert the date to JS
    this.date = markdown.attributes.date // use computed value
    this.dynamicComponent = markdown.vue.component
    this.excerpt = markdown.attributes.excerpt
  }
}
</script>

<style lang="scss">
// do not scope so the styles can target markdown post
.post {
  text-align: left;
  max-width: 900px;
}
.post__title {
  text-align: left;
  font-size: 1.5rem;
  @media screen and (min-width: 768px) {
    // font-size: 2.5rem;
  }
}
.post__tags {
  text-align: left;
  width: 100%;
  list-style: none;
  font-weight: 700;
  font-size: 1rem;
  @media screen and (min-width: 768px) {
    font-size: 1.2rem;
  }
}
.post__date {
  text-align: left;
   width: 100%;
}
.post__author {
  width: 100%;
  display: flex;
  flex-direction: row;
}
.post__author__img {
  max-width: 88px;
  flex: 0;
  img {
    border-radius: 50%;
    border: solid 1px var(--primary);
  }
}
.post__author__bio {
  //
  p {
    font-size: 1rem;
  }
}
.frontmatter-markdown  {
    // text-align: left;
    img {
      height: 100%;
      width: 100%;
    }
    blockquote {
      margin-left: 1rem;
      font-style: italic;
    }
    p {
      margin-bottom: 1rem;
    }
    ul, li, ol {
      margin: 1rem;
      // padding: 0.5rem;
    }
}
</style>
