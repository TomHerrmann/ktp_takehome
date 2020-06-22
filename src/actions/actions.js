import * as types from '../constants/actionTypes';

export const apiError = (status) => ({
  type: types.API_ERROR,
  payload: status,
});

export const appLoading = (isLoading) => ({
  type: types.APP_LOADING,
  payload: isLoading,
});

export const booksCreate = (
  title,
  authors,
  publisher = 'N/A',
  publishedDate
) => ({
  type: types.BOOKS_CREATE,
  payload: { title, authors, publisher, publishedDate },
});

export const booksDisplayAll = () => ({
  type: types.BOOKS_DISPLAY_ALL,
  payload: null,
});

export const booksPopulate = (books) => ({
  type: types.BOOKS_POPULATE,
  payload: books,
});

export const createModalToggle = () => ({
  type: types.CREATE_MODAL_TOGGLE,
  payload: null,
});

export const searchSubmit = (searchedBooks) => ({
  type: types.SEARCH_SUBMIT,
  payload: searchedBooks,
});
