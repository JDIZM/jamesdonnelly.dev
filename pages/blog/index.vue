<template>
  <div class="blog container">
    <!-- <p>this is the blog index page /blog/</p> -->
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
      // add some sample blog posts data
      // posts: [
      //   { title: 'first post title', slug: 'first-post', thumbnail: 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80', excerpt: 'this is the first post' },
      //   { title: 'second post title', slug: 'second-post', thumbnail: 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80', excerpt: 'this is the second post' }
      // ]
      posts: [] // pass the post data as props to the child component PostPreview
    }
  },
  created () {
    // get a list of blogs from markdown content
    // import a list of blog posts from '@/content/blog/blogPosts.js'
    blogPosts.forEach((blog) => {
      // eslint-disable-next-line
      console.log(blog)
      // get the markdown post with blog post slug
      const markdown = require(`@/content/blog/${blog}.md`) //
      this.posts.push({
        title: markdown.attributes.title,
        thumbnail: markdown.attributes.thumbnail,
        tags: markdown.attributes.tags,
        slug: blog, // blogPosts.js
        excerpt: markdown.attributes.excerpt,
        date: markdown.attributes.date // convert to JS date object
      })
    })
    this.sortDates()
  },
  methods: {
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
}
</style>
