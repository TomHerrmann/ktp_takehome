import React, { useCallback } from 'react';
import { useStore } from 'react-redux';
import ReactModal from 'react-modal';

ReactModal.setAppElement('#root');

const ErrorModal = () => {
  const store = useStore();
  const { errorStatus, errorModalOpened } = store.getState();

  return (
    <ReactModal
      className="modal-content"
      isOpen={errorModalOpened}
      overlayClassName="modal-overlay"
    >
      <h3>Uh oh</h3>
      <strong>Something went wrong - please refresh the page</strong>
      <p>Error Status: {errorStatus}</p>
    </ReactModal>
  );
};

export default ErrorModal;
