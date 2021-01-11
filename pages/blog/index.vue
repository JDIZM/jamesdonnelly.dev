<template>
  <div class="blog container">
    <div v-for="(post, i) in sortPostsBydate" :key="i">
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
import { mapState, mapGetters, mapActions } from 'vuex'
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
    // get post slugs from vuex store
    // getPostSlugs () {
    //   return this.$store.state.posts.posts
    // },
    ...mapState({
      getPostSlugs: state => state.posts.posts,
      postData: state => state.posts.postData
    }),
    ...mapGetters({
      sortPostsBydate: 'posts/sortPostsBydate'
    })
  },
  created () {
    // get the blog urls
    this.getPostSlugs.forEach((blog) => {
      // get the markdown post content using blog post slug
      const markdown = require(`@/content/blog/${blog}.md`) //
      this.posts.push({
        title: markdown.attributes.title,
        thumbnail: markdown.attributes.thumbnail,
        tags: markdown.attributes.tags,
        slug: blog + '/',
        excerpt: markdown.attributes.excerpt,
        date: markdown.attributes.date // convert to JS date object in store
      })
    })
    // sort posts by date and save new store state
    this.sortDates(this.posts)
  },
  methods: {
    ...mapActions({
      sortDates: 'posts/sortDates'
      // ...
    })
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
