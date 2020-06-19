const authorsArrayToString = (authorsArray) => {
  return authorsArray.reduce((acc, curr) => {
    if (curr === authorsArray[authorsArray.length - 1]) acc += `${curr}`;
    else acc += `${curr}, `;
    return acc;
  }, '');
};

export default authorsArrayToString;
