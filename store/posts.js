export const state = () => ({
  // default posts state
  // post slugs
  posts: [
    'remote-working-productivity',
    'page-speed-load-time'
  ],
  // markdown post data
  postData: [
    //
  ]
})
export const getters = {
  sortPostsBydate (state) {
    return state.postData
      .map(post => post)
      .sort((a, b) => b.timestamp - a.timestamp)
  }
}

export const actions = {
  setPostData (context, posts) {
    context.commit('setPostData', posts)
  },
  // sort all posts by date
  sortDates ({ dispatch }, posts) {
    // get blog posts
    posts.forEach((post) => {
      // convert blog post date to date object
      const date = new Date(post.date)
      // update the post date with js date
      post.timestamp = date
    })
    // sort posts by date
    // posts.sort((a, b) => b.timestamp - a.timestamp)
    // save new state
    dispatch('setPostData', posts)
    // state.postData = posts
  }
}

export const mutations = {
  setPostData (state, posts) {
    state.postData = posts
  }
}
