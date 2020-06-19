import authorsArrayToString from './authorsArrayToString';

const createBookArray = (arr) => {
  return arr.map((item) => {
    const { title, authors, publisher, publishedDate } = item.volumeInfo;

    const authorStr = authorsArrayToString(authors);

    // creates alternative value to cover books without listed publishers
    return {
      title,
      authors: authorStr,
      publisher: publisher || 'N/A',
      publishedDate,
    };
  });
};

export default createBookArray;
