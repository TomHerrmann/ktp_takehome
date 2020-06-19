import React from 'react';
import ReactModal from 'react-modal';

const CreateBookModal = () => {
  return (
    <ReactModal isOpen={true} className="create-book-modal">
      <h3>Create New Book</h3>
      <form>
        <label>
          Title
          <input
            type="text"
            placeholder="Title"
            onChange={() => {}}
            // value={modalTitle}
          />
        </label>
        <label>
          Author
          <input
            type="text"
            placeholder="Authors"
            onChange={() => {}}
            // value={modalTitle}
          />
        </label>
        <label>
          Publisher
          <input
            type="text"
            placeholder="Publisher"
            onChange={() => {}}
            // value={modalTitle}
          />
        </label>
        <label>
          Published Date
          <input
            type="text"
            placeholder="Published Date"
            onChange={() => {}}
            // value={modalTitle}
          />
        </label>
        <button>Submit</button>
      </form>
    </ReactModal>
  );
};

export default CreateBookModal;
