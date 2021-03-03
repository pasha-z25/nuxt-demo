export const state = () => ({
  posts: []
})

export const mutations = {
  setPosts(state, posts) {
    state.posts = posts
  }
}

export const actions = {
  async fetchPosts({ commit }, url) {
    const posts = await this.$axios.$get(url)
    commit('setPosts', posts)
  },
  setPostsValue({ commit }, value) {
    commit('setPosts', value)
  }
}

export const getters = {
  posts: state => state.posts
}
