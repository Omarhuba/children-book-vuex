import axios from 'axios'
export const saveBook = async (context, id) => {
  if (!context.state.readingList.includes(id)) {
    context.commit("addToReadingList", id);
  }
};

export const getBooks = ({ commit }) => {
  axios.get("http://localhost:5000/books").then((res) => {
    commit("SET_BOOKS", res.data);
  });
};
