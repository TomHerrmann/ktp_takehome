import React from 'react';

const BookCards = ({ book }) => {
  const { title, author, publisher, publishDate } = book;

  return (
    <article className="book-card">
      <h2>Title: {title}</h2>
      <ul>
        <li>
          <strong>Author: </strong>
          {author}
        </li>
        <li>
          <strong>Publisher: </strong>
          {publisher}
        </li>
        <li>
          <strong>Publish Date: </strong>
          {publisher}
        </li>
      </ul>
    </article>
  );
};

export default BookCards;
