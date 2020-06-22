import reducer from './reducer';
import * as types from '../constants/actionTypes';

describe('reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual({
      allBooks: [],
      displayBooks: [],
      isLoading: false,
      createModalOpened: false,
      searchDisplay: false,
    });
  });
});
