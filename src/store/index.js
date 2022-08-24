import { createStore } from "vuex";
import books from "@/assets/books.json";

const PAGE_SIZE = 8;

export default createStore({
  state: {
    books: [...books],
    readingList: [],
    page: 1,
  },
  mutations: {
    addToReadingList(state, id) {
      state.readingList.push(id);
    },
  },
  actions: {
    saveBook(context, id) {
      if (!context.state.readingList.includes(id)) {
        context.commit("addToReadingList", id);
      }
    },
  },
  modules: {},
  getters: {
    readingList(state) {
      return state.readingList.map((id) =>
        state.books.find((book) => book.id == id)
      );
    },
  },
});
