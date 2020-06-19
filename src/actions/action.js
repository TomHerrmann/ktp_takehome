import * as types from '../constants/actionTypes';

export const apiError = (error) => ({
  type: types.API_ERROR,
  payload: error,
});

export const booksCreate = () => ({
  type: types.BOOKS_CREATE,
  payload: null,
});

export const booksPopulate = (books) => ({
  type: types.BOOKS_POPULATE,
  payload: books,
});

export const formSubmit = (formInput) => ({
  type: types.FORM_SUBMIT,
  payload: formInput,
});

export const searchSubmit = (searchQuery) => ({
  type: types.SEARCH_SUBMIT,
  payload: searchQuery,
});
