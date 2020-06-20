import React, { useCallback, useState } from 'react';
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

  const formFields = ['Title', 'Author(s)', 'Publisher', 'Published Date'];
  const formState = [formTitle, formAuthors, formPublisher, formPublishedDate];

  const onFormChange = (event) => {
    const str = event.target.value;
    const field = event.target.name;

    switch (field) {
      case 'Author(s)':
        setFormAuthors(str);
        return;
      case 'Published Date':
        setFormPublishedDate(str);
        return;
      case 'Publisher':
        setFormPublisher(str);
        return;
      case 'Title':
        setFormTitle(str);
        return;
      default:
        return;
    }
  };

  const onFormSubmit = useCallback(
    (event) => {
      event.preventDefault();

      dispatch(booksCreate(...formState));
      dispatch(modalToggle());
      setFormAuthors('');
      setFormPublisher('');
      setFormPublishedDate('');
      setFormTitle('');
    },
    [...formState]
  );

  return (
    <ReactModal
      // appElement={el}
      className="create-book-modal-content"
      isOpen={store.getState().modalOpened}
      overlayClassName="create-book-modal-overlay"
    >
      <h3>Create New Book</h3>
      <form onSubmit={onFormSubmit}>
        {formFields.map((field, index) => {
          return (
            <label>
              {`${field}`}
              <input
                name={`${field}`}
                onChange={(event) => {
                  onFormChange(event);
                }}
                placeholder={`${field}`}
                type="text"
                value={formState[index]}
              />
            </label>
          );
        })}
        <button>Submit</button>
      </form>
    </ReactModal>
  );
};

export default CreateBookModal;
