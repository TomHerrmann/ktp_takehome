import * as types from '../constants/actionTypes';

const initialState = {};

const booksReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.API_ERROR:
      return state;
    case types.BOOKS_ADD:
      return state;
    case types.BOOKS_POPULATE:
      console.log('books in reducer --> ', books);
      return Object.assign({}, state, { books });
    case types.FORM_SUBMIT:
      return state;
    case types.SEARCH_SUBMIT:
      return state;
    default:
      return state;
  }
};

export default booksReducer;
