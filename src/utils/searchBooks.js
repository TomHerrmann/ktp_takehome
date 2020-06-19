const searchBooks = (query, booksArr) => {
  const results = [];

  for (let i = 0; i < booksArr.length; i++) {
    if (
      booksArr[i].title.toLowerCase().includes(query.toLowerCase()) ||
      booksArr[i].authors.toLowerCase().includes(query.toLowerCase()) ||
      booksArr[i].publisher.toLowerCase().includes(query.toLowerCase())
    )
      results.push(booksArr[i]);
  }

  return results;
};

export default searchBooks;
