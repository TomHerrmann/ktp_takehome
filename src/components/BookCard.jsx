import React from 'react';

const BookCards = ({ book }) => {
  const { title, author, publisher } = book;

  return (
    <article className="book-card">
      <ul>
        <li>
          <strong>Title: </strong>
          {title}
        </li>
        <li>
          <strong>Author: </strong>
          {author}
        </li>
        <li>
          <strong>Publisher: </strong>
          {publisher}
        </li>
      </ul>
    </article>
  );
};

export default BookCards;
