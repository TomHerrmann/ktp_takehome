import * as types from '../constants/actionTypes';

const initialState = {
  allBooks: [],
  displayBooks: [],
  isLoading: false,
  modalOpened: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.API_ERROR:
      return state;
    case types.APP_LOADED:
      const isLoading = action.payload;

      return {
        ...state,
        isLoading,
      };
    case types.BOOKS_CREATE:
      const { title, authors, publisher, publishedDate } = action.payload;
      const booksCreated = state.books.slice();

      booksCreated.push({ title, authors, publisher, publishedDate });

      return {
        ...state,
        allBooks: booksCreated,
        displayBooks: booksCreated,
      };
    case types.BOOKS_POPULATE:
      const booksPopulated = action.payload;

      return {
        ...state,
        allBooks: booksPopulated,
        displayBooks: booksPopulated,
      };
    case types.FORM_SUBMIT:
      return state;
    case types.MODAL_TOGGLE:
      const modalOpened = !state.modalOpened;

      return {
        ...state,
        modalOpened,
      };
    case types.SEARCH_SUBMIT:
      const searchedBooks = action.payload;

      return {
        ...state,
        displayBooks: searchedBooks,
      };
    default:
      return state;
  }
};

export default reducer;
