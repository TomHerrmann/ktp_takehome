const authorsArrayToString = (authorsArray) => {
  return authorsArray.reduce((acc, curr) => {
    acc += `${curr}, `;
    return acc;
  }, '');
};

export default authorsArrayToString;
