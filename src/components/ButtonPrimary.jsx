import React from 'react';
import { useDispatch } from 'react-redux';

const ButtonPrimary = ({ text, onClick }) => {
  const dispatch = useDispatch();

  return (
    <section className="primary-button-container">
      <button className="primary-button" onClick={onClick}>
        {text}
      </button>
    </section>
  );
};

export default ButtonPrimary;
