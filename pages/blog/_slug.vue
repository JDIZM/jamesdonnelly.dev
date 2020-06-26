<template>
  <article class="container">
    <div v-for="(tag, i) in tags" :key="i" class="post__tags text--primary">
      <li> - {{ tag.toUpperCase() }}</li>
    </div>
    <h1 class="post__title mt--1 mb--1">
      {{ title.toUpperCase() }}
    </h1>
    <div class="post__date mt--1">
      - {{ date }}
    </div>
    <div class="post__author">
      <div class="post__author__img">
        <img class="mt--1" alt="author image" srcset="https://placehold.it/150x150">
      </div>
      <div>
        <p class="m--1 mt--2">James Donnelly</p>
        <p class="m--1">Freelance Web Developer</p>
      </div>
    </div>
    <!-- <p> this is the blog post page </p>
    <img src="@/assets/carbon-2.png" alt="">
    <p>this component loads markdown files from '@/content/blog/${this.slug}.md which is passed as props through route params</p> -->
    <!-- // FIXME https://github.com/nuxt/eslint-plugin-nuxt/issues/65 -->
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
      slug: this.$route.params.slug,
      tags: [],
      date: null,
      excerpt: null,
      dynamicComponent: null
    }
  },
  computed: {
    //
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
  },
  head () {
    return {
      title: this.title,
      meta: [
        // hid is used as unique identifier. Do not use `vmid` for it as it will not work
        { hid: 'title', name: 'og:title', property: 'og:title', content: this.title },
        { hid: 'description', name: 'description', content: this.excerpt },
        { hid: 'og:description', name: 'og:description', property: 'og:description', content: this.excerpt },
        { hid: 'og:url', name: 'og:url', property: 'og:url', content: process.env.NUXT_HOST + this.$route.path },
        { hid: 'og:image', name: 'og:image', property: 'og:image', content: process.env.NUXT_HOST + this.thumbnail },
        { hid: 'og:type', name: 'og:type', property: 'og:type', content: 'article' },
        { hid: 'twitter:card', name: 'twitter:card', property: 'twitter:card', content: process.env.NUXT_HOST + this.thumbnail }
      ],
      link: [
        {
          rel: 'canonical',
          href: process.env.NUXT_HOST + this.$route.path
        }
      ]
    }
  }
}
</script>

<style lang="scss">
// .post__title {

// }
.post__tags {
  text-align: left;
  width: 100%;
  list-style: none;
  font-weight: 700;
}
.post__date {
  text-align: left;
   width: 100%;
}
.post__author {
  width: 100%;
  display: flex;
  flex-direction: column;
  @media screen and (min-width: 375px) {
    flex-direction: row;
  }
}
.post__author__img {
  img {
    border-radius: 50%;
    height: 80px;
    width: 80px;
  }
}
.container {
  text-align: left;
}
.frontmatter-markdown  {
    text-align: left;
    img {
      height: 100%;
      width: 100%;
    }
    blockquote {
      margin-left: 1rem;
    }
  }
</style>
