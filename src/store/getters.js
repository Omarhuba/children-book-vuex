export const readingList = (state)=> {
    return state.readingList.map((id) =>
      state.books.find((book) => book.id == id)
    );
  }


 const PAGE_SIZE = 8
export const   currentPage = (state)=> {
    return state.books.filter(
      (_, index) =>
        index >= (state.page - 1)*PAGE_SIZE &&
        index < state.page*PAGE_SIZE
    );
  }