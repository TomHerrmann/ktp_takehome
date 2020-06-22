import createBookArray from './createBookArray';
import { unformattedBooksArray, formattedBooksArray } from './enums';

describe('createBookArray', () => {
  it('should return an array with properly formatted objects', () => {
    expect(createBookArray(unformattedBooksArray)).toEqual(formattedBooksArray);
  });
  it('should return an array with as many elements as the input', () => {
    expect(Object.keys(createBookArray(unformattedBooksArray)).length).toBe(
      formattedBooksArray.length
    );
  });
  it('should return an empty array if an empty array is passed in', () => {
    expect(createBookArray([])).toEqual([]);
  });
});
