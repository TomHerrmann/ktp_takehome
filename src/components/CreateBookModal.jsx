import React from 'react';
import ReactModal from 'react-modal';
import { useStore, useDispatch } from 'react-redux';
import { booksCreate, modalToggle } from '../actions/actions';

const CreateBookModal = ({
  formAuthors,
  formPublishedDate,
  formPublisher,
  formTitle,
  onInputChange,
}) => {
  const store = useStore();
  const dispatch = useDispatch();

  return (
    <ReactModal
      // appElement={el}
      className="create-book-modal-content"
      isOpen={store.getState().modalOpened}
      overlayClassName="create-book-modal-overlay"
    >
      <h3>Create New Book</h3>
      <form
        onSubmit={(event) => {
          event.preventDefault();
            dispatch(
              booksCreate(
                formTitle,
                formAuthors,
                formPublishedDate,
                formPublisher
              )
            );
            dispatch(modalToggle());
          }
        }}
      >
        <label>
          Title
          <input
            name="formTitle"
            onChange={(event) => {
              onInputChange(event);
            }}
            placeholder="Title"
            type="text"
            value={formTitle}
          />
        </label>
        <label>
          Author(s)
          <input
            name="formAuthors"
            onChange={(event) => {
              onInputChange(event);
            }}
            placeholder="Author(s)"
            type="text"
            value={formAuthors}
          />
        </label>
        <label>
          Publisher
          <input
            name="formPublisher"
            onChange={(event) => {
              onInputChange(event);
            }}
            placeholder="Publisher"
            type="text"
            value={formPublisher}
          />
        </label>
        <label>
          Published Date
          <input
            name="formPublishedDate"
            onChange={(event) => {
              onInputChange(event);
            }}
            placeholder="Published Date"
            type="text"
            value={formPublishedDate}
          />
        </label>
        <button>Submit</button>
      </form>
    </ReactModal>
  );
};

export default CreateBookModal;
