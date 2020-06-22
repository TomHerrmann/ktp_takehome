import * as types from '../constants/actionTypes';

const initialState = {
  allBooks: [],
  displayBooks: [],
  isLoading: false,
  createModalOpened: false,
  searchDisplay: false,
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
      const booksCreated = state.allBooks.slice();

      booksCreated.push({ title, authors, publisher, publishedDate });

      return {
        ...state,
        allBooks: booksCreated,
        displayBooks: booksCreated,
      };
    case types.BOOKS_DISPLAY_ALL:
      const allBooks = state.allBooks.slice();

      return {
        ...state,
        displayBooks: allBooks,
        isLoading: false,
        searchDisplay: true,
      };
    case types.BOOKS_POPULATE:
      const booksPopulated = action.payload;

      return {
        ...state,
        allBooks: booksPopulated,
        displayBooks: booksPopulated,
      };
    case types.MODAL_TOGGLE:
      const createModalOpened = !state.createModalOpened;

      return {
        ...state,
        createModalOpened,
      };
    case types.SEARCH_SUBMIT:
      const searchedBooks = action.payload;

      return {
        ...state,
        displayBooks: searchedBooks,
        searchDisplay: true,
      };
    default:
      return state;
  }
};

export default reducer;
