import authorsArrayToString from './authorsArrayToString';

describe('authorsArrayToString', () => {
  it('should return string based on authors array', () => {
    expect(authorsArrayToString(['Tom'])).toEqual('Tom');
  });
  it('should return string in the correct format', () => {
    expect(authorsArrayToString(['Tom', 'Chris', 'Mary'])).toEqual(
      'Tom, Chris, Mary'
    );
  });
  it('should return an empty string if the argument is an empty array', () => {
    expect(authorsArrayToString([])).toEqual('');
  });
});
