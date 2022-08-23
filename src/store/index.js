import { createStore } from 'vuex'

import books from '@/assets/books.json'
export default createStore({
  state: {
    books : [...books]
  },
  getters: {
  },
  mutations: {
  
  },
  actions: {
  },
  modules: {
  }
})
