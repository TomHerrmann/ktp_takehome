import React from 'react';
import authorsArrayToString from '../utils/authorsArrayToString';

const BookCards = ({ book }) => {
  const { title, authors, publisher, publishedDate } = book;

  return (
    <article className="book-card">
      <h2>{title}</h2>
      <ul>
        <li key={`${title}-author`}>
          <strong>Author: </strong>
          {authors}
        </li>
        <li key={`${title}-publisher`}>
          <strong>Publisher: </strong>
          {publisher}
        </li>
        <li key={`${title}-pub-date`}>
          <strong>Publish Date: </strong>
          {publishedDate}
        </li>
      </ul>
    </article>
  );
};

export default BookCards;
