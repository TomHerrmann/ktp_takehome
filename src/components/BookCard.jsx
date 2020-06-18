import React from 'react';

const BookCards = ({ book }) => {
  const { title, author, publisher } = book;

  return (
    <div className="book-card">
      <div className="ul-container">
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
      </div>
    </div>
  );
};

export default BookCards;
