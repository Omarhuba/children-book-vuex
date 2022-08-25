export const addToReadingList = (state, id) => {
  state.readingList.push(id);
};

export const nextPage = (state) => {
  state.page++;
};


export const previousPage = (state) => {
  state.page--;
};


export const SET_BOOKS = (state, books) => {
  state.books = books;
};
