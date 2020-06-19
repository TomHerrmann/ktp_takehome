import React from 'react';
import { useDispatch } from 'react-redux';
import { modalToggle } from '../actions/actions';

const CreateBookButton = () => {
  const dispatch = useDispatch();

  return (
    <section className="create-book-button-container">
      <button
        onClick={(event) => {
          event.preventDefault();
          dispatch(modalToggle());
        }}
      >
        Create New Book
      </button>
    </section>
  );
};

export default CreateBookButton;
