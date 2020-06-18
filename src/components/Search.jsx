import React, { useState, useEffect } from 'react';

const Search = ({ onSearch, searchQuery }) => {
  return (
    <div className="search-container">
      <form onSubmit={(event) => event.preventDefault()}>
        <label>
          <input
            type="text"
            placeholder="Search"
            onChange={(event) => {
              onSearch(event);
            }}
            value={searchQuery}
          />
        </label>
      </form>
    </div>
  );
};

export default Search;
