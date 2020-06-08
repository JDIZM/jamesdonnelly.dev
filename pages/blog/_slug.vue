<template>
  <article class="container">
    <!-- <h1>BLOG</h1> -->
    <!-- {{ this.$route.params.slug }} -->
    <h1 class="post__title">
      {{ title }}
    </h1>
    <div v-for="(tag, i) in tags" :key="i" class="post__tags">
      <li>{{ tag }}</li>
    </div>
    <div class="post__date mt--2">
      {{ date }}
    </div>
    <!-- <p> this is the blog post page </p>
    <img src="@/assets/carbon-2.png" alt="">
    <p>this component loads markdown files from '@/content/blog/${this.slug}.md which is passed as props through route params</p> -->
    <!-- // FIXME https://github.com/nuxt/eslint-plugin-nuxt/issues/65 -->
    <component :is="dynamicComponent" />
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
  }
}
</script>

<style lang="scss">
// .post__title {

// }
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