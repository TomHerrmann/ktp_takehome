import React from 'react';

const BookCards = ({ book }) => {
  const { title, authors, publisher, publishedDate } = book;

  const bookData = [authors, publisher, publishedDate];
  const bookDataName = ['Author(s): ', 'Publisher: ', 'Publish Date: '];

  return (
    <article className="book-card">
      <h2>{title}</h2>
      <ul>
        {bookData.map((data, index) => {
          return (
            <li>
              <strong>{bookDataName[index]}</strong>
              {data}
            </li>
          );
        })}
      </ul>
    </article>
  );
};

export default BookCards;
