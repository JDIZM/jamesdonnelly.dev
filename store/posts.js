// TODO add blog posts data to store
export const state = () => ({
  posts: [],
  // TODO post slugs to get markdown post
  slugs: [
    'remote-working-productivity',
    'sass-mixins-class-names',
    'page-speed-load-time'
  ]
})
export const getters = {
  //
}

export const actions = {
  setPosts (context, posts) {
    context.commit('setPosts', posts)
  },
  sortPosts (context) {
    context.commit('sortPosts')
  }
}

export const mutations = {
  setPosts (state, posts) {
    state.posts = posts
  },
  sortPosts (state) {
    state.posts.sort((a, b) => b.timestamp - a.timestamp)
  }
}
