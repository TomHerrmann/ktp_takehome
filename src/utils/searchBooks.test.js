import searchBooks from './searchBooks';
import { formattedBooksArray } from './enums';

describe('search', () => {
  it('should return an array', () => {
    expect(Array.isArray(searchBooks('query', []))).toBeTruthy();
  });
  it("should return arr containing books if books' data contain the query", () => {
    expect(searchBooks('SAT', formattedBooksArray)).toEqual([
      formattedBooksArray[1],
    ]);
  });
  it('should return an empty array if query is not found in any book data', () => {
    expect(searchBooks('BLAHHHHH', formattedBooksArray)).toEqual([]);
  });
  it('should not be case sensative', () => {
    expect(searchBooks('sat', formattedBooksArray)).toEqual([
      formattedBooksArray[1],
    ]);
  });
});
