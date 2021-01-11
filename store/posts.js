export const state = () => ({
  // default posts state
  // post slugs
  posts: [
    'remote-working-productivity',
    'sass-mixins-class-names',
    'page-speed-load-time'
  ],
  // markdown post data
  postData: [
    //
  ]
  // posts: [
  //   { slug: 'remote-working-productivity', date: '2020-06-03' },
  //   { slug: 'sass-mixins-class-names', date: '2020-06-06' },
  //   { slug: 'page-speed-load-time', date: '2020-06-06' }
  // ]
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
