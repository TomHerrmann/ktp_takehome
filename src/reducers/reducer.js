import * as types from '../constants/actionTypes';

const initialState = {
  allBooks: [],
  createModalOpened: false,
  displayBooks: [],
  errorStatus: null,
  errorModalOpened: false,
  isLoading: true,
  searchDisplay: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.API_ERROR:
      const errorStatus = action.payload;

      return {
        ...state,
        errorStatus,
        errorModalOpened: true,
        isLoading: false,
      };
    case types.APP_LOADING:
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
        isLoading: true,
        searchDisplay: false,
      };
    case types.BOOKS_POPULATE:
      const booksPopulated = action.payload;

      return {
        ...state,
        allBooks: booksPopulated,
        displayBooks: booksPopulated,
        isLoading: false,
      };
    case types.CREATE_MODAL_TOGGLE:
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
