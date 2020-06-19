import React from 'react';
import ReactModal from 'react-modal';
import { connect } from 'react-redux';

const CreateBookModal = ({ modalOpened, onInputChange }) => {
  return (
    <ReactModal
      // appElement={el}
      className="create-book-modal-content"
      isOpen={modalOpened}
      overlayClassName="create-book-modal-overlay"
    >
      <h3>Create New Book</h3>
      <form>
        <label>
          Title
          <input
            name="formTitle"
            onChange={(event) => {
              onInputChange(event);
            }}
            placeholder="Title"
            type="text"
            // value={modalTitle}
          />
        </label>
        <label>
          Author(s)
          <input
            name="formAuthors"
            onChange={(event) => {
              onInputChange(event);
            }}
            placeholder="Title"
            type="text"
            // value={modalTitle}
          />
        </label>
        <label>
          Publisher
          <input
            name="formPublisher"
            onChange={(event) => {
              onInputChange(event);
            }}
            placeholder="Title"
            type="text"
            // value={modalTitle}
          />
        </label>
        <label>
          Published Date
          <input
            name="formPublishedDate"
            onChange={(event) => {
              onInputChange(event);
            }}
            placeholder="Title"
            type="text"
            // value={modalTitle}
          />
        </label>
        <button>Submit</button>
      </form>
    </ReactModal>
  );
};

const mapStateToProps = (state) => ({
  modalOpened: state.modalOpened,
});

export default connect(mapStateToProps)(CreateBookModal);
