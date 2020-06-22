import * as actions from './actions';
import * as types from '../constants/actionTypes';
import { formattedBooksArray } from '../utils/enums';

describe('action', () => {
  it('should create appLoaded action to update loading status', () => {
    const isLoading = true;
    const expectedAction = {
      type: types.APP_LOADED,
      payload: isLoading,
    };
    expect(actions.appLoaded(isLoading)).toEqual(expectedAction);
  });
  it('should create booksCreate action to update the allBooks property in the store', () => {
    const { title, authors, publisher, publishedDate } = formattedBooksArray[0];
    const expectedAction = {
      type: types.BOOKS_CREATE,
      payload: { title, authors, publisher, publishedDate },
    };
    expect(
      actions.booksCreate(title, authors, publisher, publishedDate)
    ).toEqual(expectedAction);
  });
  it('should create booksDisplayAll action to set allBooks property value as the displayBooks', () => {
    const expectedAction = {
      type: types.BOOKS_DISPLAY_ALL,
      payload: null,
    };
    expect(actions.booksDisplayAll()).toEqual(expectedAction);
  });
  it('should create booksPopulate action to set allBooks and displayBooks properties at inital render', () => {
    const books = formattedBooksArray;
    const expectedAction = {
      type: types.BOOKS_POPULATE,
      payload: books,
    };
    expect(actions.booksPopulate(books)).toEqual(expectedAction);
  });
  it('should create modalToggle action to display or hide modal', () => {
    const expectedAction = {
      type: types.MODAL_TOGGLE,
      payload: null,
    };
    expect(actions.modalToggle()).toEqual(expectedAction);
  });
  it('should create searchSubmit action to set searchedBooks as the display books', () => {
    const searchedBooks = formattedBooksArray;
    const expectedAction = {
      type: types.SEARCH_SUBMIT,
      payload: searchedBooks,
    };
    expect(actions.searchSubmit(searchedBooks)).toEqual(expectedAction);
  });
});
