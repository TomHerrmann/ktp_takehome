import * as types from '../constants/actionTypes';

const initialState = {
  appLoaded: false,
  books: [],
  modalOpened: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.API_ERROR:
      return state;
    case types.APP_LOADED:
      const appLoaded = action.payload;

      return {
        ...state,
        appLoaded,
      };
    case types.BOOKS_CREATE:
      const { title, authors, publisher, publishedDate } = action.payload;
      const booksCreated = state.books.slice();

      booksCreated.push({ title, authors, publisher, publishedDate });

      return {
        ...state,
        books: booksCreated,
      };
    case types.BOOKS_POPULATE:
      const booksPopulated = action.payload;

      return {
        ...state,
        books: booksPopulated,
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
      return state;
    default:
      return state;
  }
};

export default reducer;
