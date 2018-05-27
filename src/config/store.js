import Vue from 'vue'
import Vuex from 'Vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    pageTitle: ''
  },
  mutations: {
    setPageTitle (state, title) {
      state.pageTitle = title
    }
  }
})

export default store
