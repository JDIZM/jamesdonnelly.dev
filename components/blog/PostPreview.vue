<template>
  <div class="post card m--1">
    <nuxt-link :to="'/blog/' + slug">
      <article>
        <!-- using the JS CSS syntax to dynamically set background image / thumbnail -->
        <!-- <div :style="{ backgroundImage: 'url(' + thumbnail + ')' }" class="post__thumb" /> -->
        <div class="img-wrapper">
          <img
            :src="imgSrc"
            :alt="title"
            draggable="false"
            width="100%"
            height="100%"
          >
        </div>
        <div class="post__content">
          <h2 class="post__title">
            {{ title }}
          </h2>
          <p class="mb--2">
            {{ excerpt }}
          </p>
          <p class="mb--2">
            {{ date }}
          </p>
        </div>
      </article>
    </nuxt-link>
  </div>
</template>

<script>
export default {
  name: 'PostPreview',
  props: {
    slug: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    excerpt: {
      type: String,
      required: true
    },
    thumbnail: {
      type: String,
      required: true
    },
    date: {
      type: String,
      required: true
    }
  },
  data () {
    return {
      imgSrc: require('~/assets/blog' + this.thumbnail)
    }
  }
}
</script>

<style lang="scss" scoped>
.post {
  border-radius: 4px;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.2);
  padding: 1rem;
  position: relative;
  text-align: left;
  z-index: 0;
  max-width: 600px;
  // margin: auto;
}
// .post__content {
//   padding: 1rem;
// }
.post__thumb {
  width: 100%;
  height: 300px;
}

.img-wrapper {
  width: 100%;
  height: 300px;
  filter: grayscale(0.9);
}
.img-wrapper:hover {
  filter: grayscale(0);
}
img {
  width: 100%;
  height: 100%;
  border-radius: 4px;
}
</style>
