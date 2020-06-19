const search = (query, booksArr) => {
  const results = [];

  for (let i = 0; i < storeArr.length; i++) {
    if (
      booksArr[i].title.includes(query.toLowerCase()) ||
      booksArr[i].authors.includes(query.toLowerCase()) ||
      booksArr[i].publisher.includes(query.toLowerCase())
    )
      results.push(storeArr[i]);
  }

  return results;
};

export default search;
