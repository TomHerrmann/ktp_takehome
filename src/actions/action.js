import * as types from '../constants/actionTypes';

export const api_error = (error) => ({
  type: types.API_ERROR,
  payload: error,
});

export const books_ad = () => ({
  type: types.BOOKS_ADD,
  payload: null,
});

export const books_populate = (books) => ({
  type: types.BOOKS_POPULATE,
  payload: books,
});

export const form_submit = (formInput) => ({
  type: types.FORM_SUBMIT,
  payload: formInput,
});

export const search_submit = (searchQuery) => ({
  type: types.SEARCH_SUBMIT,
  payload: searchQuery,
});
