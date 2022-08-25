import { createStore } from "vuex";

import state from './state'
import * as getters from './getters.js'
import * as mutations from './mutations.js'
import * as actions from './actions'

export default createStore({
  state,
  getters,
  mutations,
  actions
})




// // import books from "@/assets/books.json";
// import axios from "axios";

// const PAGE_SIZE = 8;

// export default createStore({
//   state: {
//     books: [],
//     readingList: [],
//     page: 1,
//   },
//   mutations: {
//     async addToReadingList(state, id) {

//       state.readingList.push(id);
//     },
//     nextPage(state) {
//       state.page++;
//     },
//     previousPage(state) {
//       state.page--;
//     },
//      SET_BOOKS (state, books){
//       state.books = books
//     }
//   },
//   actions: {
//     async saveBook(context, id) {

//       if (!context.state.readingList.includes(id)) {
//         context.commit("addToReadingList", id);

//       }
//     },

//      getBooks ({commit}){
//       axios.get('http://localhost:5000/books')
//        .then(res =>{
//       commit('SET_BOOKS', res.data)
//     })
//    },


//   },

  // getters: {
//     readingList(state) {
//       return state.readingList.map((id) =>
//         state.books.find((book) => book.id == id)
//       );
//     },

//     currentPage(state) {
//       return state.books.filter(
//         (_, index) =>
//           index >= (state.page - 1)*PAGE_SIZE &&
//           index < state.page*PAGE_SIZE
//       );
//     },
//   },
// });
