import authorsArrayToString from './authorsArrayToString';

describe('authorsArrayToString', () => {
  it('should return string based on authors array', () => {
    expect(authorsArrayToString(['Tom', 'Thomas'])).toEqual('Tom, Thomas');
  });
});
