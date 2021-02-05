<template>
  <div class="blog">
    <section class="bg--blue text--white blog__header mb--4 pt--8">
      <div>
        <h1>DEVELOPER BLOG</h1>
        <h2>Welcome to my corner of the internet, where I write about code, JavaScript and the general daily struggle of trying to get things to work.</h2>
      </div>
    </section>
    <div class="container pb--4">
      <!-- <PostPreview
        v-for="(post, i) in sortPostsBydate"
        :key="i"
        :slug="post.slug"
        :thumbnail="post.thumbnail"
        :title="post.title.toUpperCase()"
        :excerpt="post.excerpt"
        :date="post.date"
      /> -->
      <PostPreview
        v-for="(post, i) in articles"
        :key="i"
        :slug="post.slug"
        :thumbnail="post.thumbnail"
        :title="post.title.toUpperCase()"
        :description="post.description"
        :date="formatDate(post.createdAt)"
      />
    </div>
    <Callout />
  </div>
</template>

<script>
import Callout from '@/components/Callout'
import PostPreview from '@/components/blog/PostPreview'
import { mapState, mapGetters, mapActions } from 'vuex'
export default {
  name: 'Blog',
  components: {
    PostPreview,
    Callout
  },
  async asyncData ({ $content, params }) {
    // fetch our article here
    const articles = await $content('blog')
      .sortBy('createdAt', 'desc')
      .fetch()
    return { articles }
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
        { hid: 'title', name: 'title', content: this.title },
        { hid: 'title', property: 'og:title', content: this.title },
        { hid: 'description', name: 'description', content: this.description },
        { hid: 'og:description', name: 'og:description', property: 'og:description', content: this.description }
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
    }),
    formatDate (date) {
      const options = { year: 'numeric', month: 'long', day: 'numeric' }
      return new Date(date).toLocaleDateString('en', options)
    }
  }
}
</script>

<style lang="scss">
/* applying an image in css with webpack */
.blog {
  /* background: url('~assets/bg-img.jpeg') */
  /* padding: 1rem; */
  /* display: flex;
  align-items: center;
  flex-direction: column; */
  // padding-top: 1rem;
  text-align: left;
}
/* stop FOUT on post title */
.post__title {
  text-align: left;
  font-size: 1.5rem;
  @media screen and (min-width: 768px) {
    // font-size: 2.5rem;
  }
}

.blog__header {
  margin: auto;
  div {
    margin: auto;
    max-width: 980px;
    padding: 2rem 1rem;
  }
}
</style>
