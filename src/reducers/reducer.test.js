import reducer from './reducer';
import * as types from '../constants/actionTypes';

describe('reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual({
      allBooks: [],
      createModalOpened: false,
      displayBooks: [],
      errorStatus: null,
      errorModalOpened: false,
      isLoading: false,
      searchDisplay: false,
    });
  });
});
