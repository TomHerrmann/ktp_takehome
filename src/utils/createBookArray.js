const createBookArray = (arr) => {
  return arr.map((item) => {
    const { title, authors, publisher, publishedDate } = item.volumeInfo;

    // creates alternative value to cover books without listed publishers
    return { title, authors, publisher: publisher || 'N/A', publishedDate };
  });
};

export default createBookArray;
