<template>
  <div class="post card m--1">
    <nuxt-link :to="'/blog/' + slug">
      <article>
        <!-- using the JS CSS syntax to dynamically set background image / thumbnail -->
        <!-- <div :style="{ backgroundImage: 'url(' + thumbnail + ')' }" class="post__thumb" /> -->
        <div class="img-wrapper">
          <img :src="imgSrc" :alt="title" draggable="false">
        </div>
        <div class="post__content">
          <h2 class="post__title">
            {{ title }}
          </h2>
          <p>{{ excerpt }}</p>
          <p>{{ date }}</p>
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
      imgSrc: require('~/assets/blog/' + this.thumbnail)
    }
  }
}
</script>

<style lang="scss" scoped>
.post__thumb {
  width: 100%;
  height: 300px;
}

.img-wrapper {
  width:100%;
  height: 300px;
}
img {
  width: 100%;
  height: 100%;
  border-radius: 4px;
}
</style>
