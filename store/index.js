export const state = () => ({
  preloader: false
})

export const mutations = {
  togglePreloader(state) {
    state.preloader = !state.preloader
  }
}

export const actions = {
  changePreloaderStatus({ commit }) {
    commit('togglePreloader')
  }
}

export const getters = {
  preloader: state => state.preloader
}
