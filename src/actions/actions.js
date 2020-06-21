import * as types from '../constants/actionTypes';

export const apiError = (error) => ({
  type: types.API_ERROR,
  payload: error,
});

export const appLoaded = (isLoading) => ({
  type: types.APP_LOADED,
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

export const modalToggle = () => ({
  type: types.MODAL_TOGGLE,
  payload: null,
});

export const searchSubmit = (searchedBooks) => ({
  type: types.SEARCH_SUBMIT,
  payload: searchedBooks,
});
