import React, { useCallback, useState } from 'react';
import ReactModal from 'react-modal';

ReactModal.setAppElement('#root');

const ErrorModal = () => {
  return (
    <ReactModal
      // appElement={el}
      className="modal-content"
      isOpen={createModalOpened}
      overlayClassName="modal-overlay"
    >
      <h3>Uh oh</h3>
      <button
        className="close-button"
        onClick={() => {
          dispatch(modalToggle());
          setFormAuthors('');
          setFormPublisher('');
          setFormPublishedDate('');
          setFormTitle('');
        }}
      >
        X
      </button>
      <strong>Something went wrong - please refresh the page</strong>
    </ReactModal>
  );
};

export default ErrorModal;
