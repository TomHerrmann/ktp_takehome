import React, { useState, useEffect } from 'react';

const Button = ({ onClick, text }) => {
  return (
    <div className="button-container">
      <button onClick={onClick}>{text}</button>
    </div>
  );
};

export default Search;
