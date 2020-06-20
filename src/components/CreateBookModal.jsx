import React, { useState } from 'react';
import ReactModal from 'react-modal';
import { useStore, useDispatch } from 'react-redux';
import { booksCreate, modalToggle } from '../actions/actions';

const CreateBookModal = () => {
  const store = useStore();
  const dispatch = useDispatch();

  const [formAuthors, setFormAuthors] = useState([]);
  const [formPublisher, setFormPublisher] = useState('');
  const [formPublishedDate, setFormPublishedDate] = useState('');
  const [formTitle, setFormTitle] = useState('');

  const onFormChange = (event) => {
    const str = event.target.value;
    const field = event.target.name;

    switch (field) {
      case 'formAuthors':
        setFormAuthors(str);
        return;
      case 'formPublishedDate':
        setFormPublishedDate(str);
        return;
      case 'formPublisher':
        setFormPublisher(str);
        return;
      case 'formTitle':
        setFormTitle(str);
        return;
      default:
        return;
    }
  };

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
              formPublisher,
              formPublishedDate
            )
          );
          dispatch(modalToggle());
          setFormAuthors('');
          setFormPublisher('');
          setFormPublishedDate('');
          setFormTitle('');
        }}
      >
        <label>
          Title
          <input
            name="formTitle"
            onChange={(event) => {
              onFormChange(event);
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
              onFormChange(event);
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
              onFormChange(event);
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
              onFormChange(event);
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
