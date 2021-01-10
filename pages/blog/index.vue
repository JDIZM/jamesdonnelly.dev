<template>
  <div class="blog container">
    <div v-for="(post, i) in posts" :key="i">
      <PostPreview
        :slug="post.slug"
        :thumbnail="post.thumbnail"
        :title="post.title.toUpperCase()"
        :excerpt="post.excerpt"
        :date="post.date"
      />
    </div>
  </div>
</template>

<script>
import PostPreview from '@/components/blog/PostPreview'
import blogPosts from '@/content/blog/blogPosts.js'
export default {
  name: 'Blog',
  components: {
    PostPreview
  },
  data () {
    return {
      title: 'Frontend Development | Web Developer Blog | James Donnelly',
      description: 'Freelance web developer based in Manchester. Experienced with building bespoke user interfaces, websites and web applications.',
      posts: []
    }
  },
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
  computed: {
    // TODO get posts from vuex store
    getPosts () {
      return this.$store.state.posts.posts
    }
  },
  created () {
    // get a list of blogs from markdown content
    // import a list of blog posts from '@/content/blog/blogPosts.js'
    // TODO import blog posts from store instead
    blogPosts.forEach((blog) => {
      // get the markdown post with blog post slug
      const markdown = require(`@/content/blog/${blog}.md`) //
      this.posts.push({
        title: markdown.attributes.title,
        thumbnail: markdown.attributes.thumbnail,
        tags: markdown.attributes.tags,
        slug: blog + '/', // blogPosts.js
        excerpt: markdown.attributes.excerpt,
        date: markdown.attributes.date // convert to JS date object
      })
    })
    this.sortDates()
  },
  methods: {
    // TODO sort posts with store, only has to check for data once with persistence
    sortDates () {
      // get blog posts
      this.posts.forEach((post) => {
        // convert blog post date to date object
        const date = new Date(post.date)
        // update the post date with js date
        post.timestamp = date
      })
      // sort posts by date
      this.posts.sort((a, b) => b.timestamp - a.timestamp)
    }
  }
}
</script>

<style>
/* applying an image in css with webpack */
.blog {
  /* background: url('~assets/bg-img.jpeg') */
  /* padding: 1rem; */
  margin-top: 1rem;
  text-align: left;
}
/* stop FOUT on post title */
.post__title {
  text-align: left;
  font-size: 1.5rem;
  @media screen and (min-width: 768px) {
    font-size: 2.5rem;
  }
}
</style>
